import type { NextConfig } from "next";

const defaultR2PublicUrl =
  "https://pub-b6d77d3bc0a843b0ae7d1e61de9c768b.r2.dev";
const r2PublicUrl = new URL(
  process.env.R2_PUBLIC_BASE_URL || defaultR2PublicUrl,
);
const r2RemotePattern = {
  protocol: r2PublicUrl.protocol === "http:" ? "http" : "https",
  hostname: r2PublicUrl.hostname,
  pathname: "/**",
} as const;

/**
 * Header bảo mật áp dụng cho mọi route.
 *
 * Cố ý KHÔNG đặt Content-Security-Policy ở đây: site dùng script inline
 * (`beforeInteractive` để đồng bộ `lang`), ảnh từ R2/Unsplash/YouTube và font
 * của Google. Một CSP sai sẽ làm hỏng giao diện, nên cần được thêm và kiểm thử
 * bằng trình duyệt thật (bắt đầu ở chế độ Report-Only) thay vì bật mù.
 */
const securityHeaders = [
  // Không cho trình duyệt tự đoán MIME — chặn việc file tải lên bị diễn giải
  // thành HTML/JS.
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Chặn nhúng site vào iframe của domain khác (clickjacking).
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  // Không rò rỉ đường dẫn đầy đủ sang domain khác.
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Tắt các quyền không dùng tới.
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=()",
  },
  // Bắt buộc HTTPS trong 2 năm. Chỉ có hiệu lực khi phục vụ qua HTTPS.
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

const nextConfig: NextConfig = {
  // Không công bố "X-Powered-By: Next.js" — giảm thông tin cho kẻ tấn công.
  poweredByHeader: false,
  experimental: {
    serverActions: {
      bodySizeLimit: "48mb",
    },
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "i.ytimg.com",
      },
      r2RemotePattern,
    ],
  },
};

export default nextConfig;
