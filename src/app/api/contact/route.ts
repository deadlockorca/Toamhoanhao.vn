import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

/**
 * Giới hạn độ dài từng trường để tránh email khổng lồ và lạm dụng bộ nhớ.
 */
const fieldLimits = {
  name: 150,
  phone: 40,
  email: 200,
  service: 150,
  scale: 100,
  area: 100,
  message: 4000,
  interests: 500,
} as const;

type FieldName = keyof typeof fieldLimits;

/**
 * Rate limit trong bộ nhớ.
 *
 * Lưu ý: trên môi trường serverless (Vercel) bộ đếm chỉ có hiệu lực trong phạm vi
 * một instance đang "ấm". Nó vẫn chặn được spam dồn dập từ một nguồn, nhưng nếu
 * cần giới hạn chính xác trên toàn hệ thống thì nên thay bằng Vercel KV/Upstash
 * hoặc một bảng đếm trong MariaDB.
 */
const rateLimitWindowMs = 60_000;
const rateLimitMaxRequests = 5;
const rateLimitPruneAfterMs = 10 * 60_000;

const requestLog = new Map<string, number[]>();

function getClientIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0]!.trim();
  return request.headers.get("x-real-ip") ?? "unknown";
}

function isRateLimited(clientIp: string) {
  const now = Date.now();
  const recent = (requestLog.get(clientIp) ?? []).filter(
    (timestamp) => now - timestamp < rateLimitWindowMs,
  );

  if (recent.length >= rateLimitMaxRequests) {
    requestLog.set(clientIp, recent);
    return true;
  }

  recent.push(now);
  requestLog.set(clientIp, recent);

  // Dọn các entry cũ để Map không phình vô hạn.
  if (requestLog.size > 500) {
    for (const [ip, timestamps] of requestLog) {
      const latest = timestamps[timestamps.length - 1] ?? 0;
      if (now - latest > rateLimitPruneAfterMs) requestLog.delete(ip);
    }
  }

  return false;
}

function escapeHtml(value: string) {
  return value.replace(
    /[&<>"']/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[character]!,
  );
}

/** Gỡ ký tự xuống dòng để không thể chèn header vào subject của email. */
function stripNewlines(value: string) {
  return value.replace(/[\r\n]+/g, " ").trim();
}

function readField(body: Record<string, unknown>, key: FieldName) {
  const raw = body[key];
  if (typeof raw !== "string") return undefined;
  const trimmed = raw.trim();
  if (!trimmed) return undefined;
  return trimmed.slice(0, fieldLimits[key]);
}

let transporter: nodemailer.Transporter | undefined;

function getTransporter() {
  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? 465),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }
  return transporter;
}

export async function POST(request: Request) {
  const clientIp = getClientIp(request);
  if (isRateLimited(clientIp)) {
    return NextResponse.json(
      { error: "Bạn đã gửi quá nhiều yêu cầu. Vui lòng thử lại sau ít phút." },
      { status: 429, headers: { "Retry-After": "60" } },
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Dữ liệu không hợp lệ" }, { status: 400 });
  }

  const name = readField(body, "name");
  const phone = readField(body, "phone");
  const email = readField(body, "email");
  const service = readField(body, "service");
  const scale = readField(body, "scale");
  const area = readField(body, "area");
  const message = readField(body, "message");
  const interests = readField(body, "interests");

  if (!name || !phone || !email) {
    return NextResponse.json(
      { error: "Vui lòng điền họ tên, số điện thoại và email" },
      { status: 400 },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Địa chỉ email không hợp lệ" },
      { status: 400 },
    );
  }

  const rows: Array<[string, string | undefined]> = [
    ["Họ tên", name],
    ["Điện thoại", phone],
    ["Email", email],
    ["Dịch vụ", service],
    ["Diện tích / Quy mô", scale],
    ["Khu vực", area],
    ["Dịch vụ quan tâm", interests],
    ["Nội dung", message],
  ];

  const html = `
    <h2 style="color:#5c694a">Yêu cầu tư vấn mới từ Toamhoanhao.vn</h2>
    <table style="border-collapse:collapse;width:100%;max-width:600px;font-family:sans-serif">
      ${rows
        .map(
          ([label, value]) =>
            `<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">${label}</td><td style="padding:8px;border:1px solid #ddd;white-space:pre-wrap">${escapeHtml(value ?? "—")}</td></tr>`,
        )
        .join("\n      ")}
    </table>
  `;

  const subjectParts = [name, phone, service ?? "Không ghi rõ dịch vụ"].map(
    stripNewlines,
  );

  try {
    await getTransporter().sendMail({
      from: process.env.CONTACT_NOTIFICATION_FROM,
      to: process.env.CONTACT_NOTIFICATION_TO,
      subject: `[Tư vấn] ${subjectParts.join(" - ")}`,
      html,
      replyTo: email,
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    // Chỉ log ở server. Không trả chi tiết lỗi SMTP ra ngoài vì có thể lộ
    // host, tài khoản và cấu hình hạ tầng.
    console.error(
      "Send mail error:",
      error instanceof Error ? error.message : error,
    );
    return NextResponse.json(
      { error: "Không thể gửi yêu cầu lúc này. Vui lòng thử lại sau." },
      { status: 500 },
    );
  }
}
