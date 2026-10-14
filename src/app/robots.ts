import type { MetadataRoute } from "next";

import { siteBaseUrl } from "@/lib/locale";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          // Khu vực quản trị. Lưu ý: chặn ở robots.txt KHÔNG phải là biện pháp
          // bảo mật — nó chỉ tránh bị index. Việc xác thực cho /admin vẫn phải
          // làm ở tầng ứng dụng.
          "/admin",
          "/admin/",
          // Các endpoint API không có nội dung để index.
          "/api/",
        ],
      },
    ],
    sitemap: `${siteBaseUrl}/sitemap.xml`,
    host: siteBaseUrl,
  };
}
