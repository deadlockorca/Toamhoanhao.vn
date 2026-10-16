// Keep this lightweight: the header uses it to retain the current article when switching languages.
export const pricingRoutes = {
  interior: {
    path: "/bao-gia/thiet-ke-thi-cong-noi-that",
    slugs: [
      "bao-gia-thiet-ke-va-thi-cong-noi-that",
      "bao-gia-noi-that-go-oc-cho",
      "bao-gia-thiet-ke-thi-cong-tu-bep",
      "thiet-ke-noi-that-van-phong-ha-noi-220m2",
      "goi-noi-that-hoan-thien-400-trieu",
      "goi-noi-that-hoan-thien-300-trieu",
      "goi-noi-that-hoan-thien-250-trieu",
      "goi-noi-that-hoan-thien-169-trieu",
      "bao-gia-thiet-ke-noi-that-chi-phi-hop-ly",
    ],
  },
  construction: {
    path: "/bao-gia/thiet-ke-kien-truc-va-xay-dung-tron-goi",
    slugs: [
      "chi-phi-nha-pho-1-tret-2-lau-5x20m",
      "chi-phi-nha-pho-1-tret-1-lau-5x20m",
      "chi-phi-nha-pho-1-tret-1-lau-5x15m",
      "cach-tinh-gia-xay-dung-tron-goi-va-phan-tho",
      "quy-trinh-xay-nha-tron-goi",
    ],
  },
} as const;
export type PricingCategory = keyof typeof pricingRoutes;
export const pricingPagePaths = Object.values(pricingRoutes).map(
  (group) => group.path,
);
export const pricingArticlePaths = Object.values(pricingRoutes).flatMap(
  (group) => group.slugs.map((slug) => `${group.path}/${slug}`),
);
