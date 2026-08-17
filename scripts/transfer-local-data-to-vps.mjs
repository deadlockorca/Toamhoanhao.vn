import "dotenv/config";
import mariadb from "mariadb";

const SOURCE_DATABASE_URL = process.env.SOURCE_DATABASE_URL;
const TARGET_DATABASE_URL = process.env.DATABASE_URL;
const MIGRATION_TABLE = "_prisma_migrations";
const BATCH_SIZE = 250;

if (!process.argv.includes("--confirm")) {
  throw new Error("Run again with --confirm after verifying the source and target databases.");
}

if (!SOURCE_DATABASE_URL || !TARGET_DATABASE_URL) {
  throw new Error("SOURCE_DATABASE_URL and DATABASE_URL are required.");
}

function getConnectionOptions(connectionString) {
  const url = new URL(connectionString);

  return {
    host: url.hostname,
    port: Number(url.port || 3306),
    user: decodeURIComponent(url.username),
    password: decodeURIComponent(url.password),
    database: url.pathname.replace(/^\//, ""),
  };
}

function quoteIdentifier(identifier) {
  return `\`${identifier.replaceAll("`", "``")}\``;
}

function getTableName(row) {
  return String(Object.values(row)[0]);
}

async function getTables(connection) {
  const rows = await connection.query("SHOW TABLES");

  return rows
    .map(getTableName)
    .filter((table) => table !== MIGRATION_TABLE)
    .sort();
}

async function getTableCount(connection, table) {
  const rows = await connection.query(
    `SELECT COUNT(*) AS count FROM ${quoteIdentifier(table)}`,
  );

  return Number(rows[0].count);
}

async function main() {
  const source = await mariadb.createConnection(
    getConnectionOptions(SOURCE_DATABASE_URL),
  );
  const target = await mariadb.createConnection(
    getConnectionOptions(TARGET_DATABASE_URL),
  );

  try {
    const [sourceTables, targetTables] = await Promise.all([
      getTables(source),
      getTables(target),
    ]);
    const targetTableNames = new Set(
      targetTables.map((table) => table.toLowerCase()),
    );
    const missingTables = sourceTables.filter(
      (table) => !targetTableNames.has(table.toLowerCase()),
    );

    if (missingTables.length > 0) {
      throw new Error(
        `Target schema is missing tables: ${missingTables.join(", ")}. Run Prisma migrations first.`,
      );
    }

    const targetCounts = await Promise.all(
      sourceTables.map((table) => getTableCount(target, table)),
    );
    const populatedTargets = sourceTables.filter(
      (_, index) => targetCounts[index] > 0,
    );

    if (populatedTargets.length > 0) {
      throw new Error(
        `Target database already has data in: ${populatedTargets.join(", ")}. Refusing to overwrite it.`,
      );
    }

    await target.query("SET FOREIGN_KEY_CHECKS = 0");
    await target.beginTransaction();

    let totalRows = 0;
    const report = [];

    for (const table of sourceTables) {
      const rows = await source.query(`SELECT * FROM ${quoteIdentifier(table)}`);

      if (rows.length === 0) {
        report.push({ table, count: 0 });
        continue;
      }

      const columns = Object.keys(rows[0]);
      const statement = `INSERT INTO ${quoteIdentifier(table)} (${columns
        .map(quoteIdentifier)
        .join(", ")}) VALUES (${columns.map(() => "?").join(", ")})`;
      const values = rows.map((row) => columns.map((column) => row[column]));

      for (let index = 0; index < values.length; index += BATCH_SIZE) {
        await target.batch(statement, values.slice(index, index + BATCH_SIZE));
      }

      totalRows += rows.length;
      report.push({ table, count: rows.length });
    }

    await target.commit();
    await target.query("SET FOREIGN_KEY_CHECKS = 1");

    console.table(report.filter((entry) => entry.count > 0));
    console.log(`Transferred ${totalRows} rows across ${sourceTables.length} tables.`);
  } catch (error) {
    await target.rollback().catch(() => undefined);
    await target.query("SET FOREIGN_KEY_CHECKS = 1").catch(() => undefined);
    throw error;
  } finally {
    await Promise.all([source.end(), target.end()]);
  }
}

await main();
