import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    // Client generation needs only the schema; database commands still require
    // a real DATABASE_URL supplied by the environment.
    url: process.env.DATABASE_URL,
  },
});
