import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Dữ liệu không hợp lệ" }, { status: 400 });
  }

  const { name, phone, email, service, scale, area, message, interests } =
    body as Record<string, string | undefined>;

  if (!name || !phone || !email) {
    return NextResponse.json(
      { error: "Vui lòng điền họ tên, số điện thoại và email" },
      { status: 400 },
    );
  }

  const html = `
    <h2 style="color:#5c694a">Yêu cầu tư vấn mới từ Toamhoanhao.vn</h2>
    <table style="border-collapse:collapse;width:100%;max-width:600px;font-family:sans-serif">
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Họ tên</td><td style="padding:8px;border:1px solid #ddd">${name}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Điện thoại</td><td style="padding:8px;border:1px solid #ddd">${phone}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Email</td><td style="padding:8px;border:1px solid #ddd">${email}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Dịch vụ</td><td style="padding:8px;border:1px solid #ddd">${service ?? "—"}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Diện tích / Quy mô</td><td style="padding:8px;border:1px solid #ddd">${scale ?? "—"}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Khu vực</td><td style="padding:8px;border:1px solid #ddd">${area ?? "—"}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Dịch vụ quan tâm</td><td style="padding:8px;border:1px solid #ddd">${interests ?? "—"}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Nội dung</td><td style="padding:8px;border:1px solid #ddd">${message ?? "—"}</td></tr>
    </table>
  `;

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 465),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.CONTACT_NOTIFICATION_FROM,
      to: process.env.CONTACT_NOTIFICATION_TO,
      subject: `[Tư vấn] ${name} - ${phone} - ${service ?? "Không ghi rõ dịch vụ"}`,
      html,
      replyTo: email,
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Lỗi không xác định";
    console.error("Send mail error:", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}