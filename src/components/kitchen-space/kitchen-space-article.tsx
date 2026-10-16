import type { SiteLocale } from "@/lib/locale";
import { SpaceArticle } from "@/components/interior-space/space-article";
import {
  getKitchenSpaceArticleHref,
  type KitchenSpaceArticle as Article,
} from "@/data/kitchen-space-articles";

export function KitchenSpaceArticle({
  article,
  relatedArticles,
  locale = "vi",
}: {
  article: Article;
  relatedArticles: Article[];
  locale?: SiteLocale;
}) {
  return (
    <SpaceArticle
      locale={locale}
      article={article}
      relatedArticles={relatedArticles.map((item) => ({
        ...item,
        href: getKitchenSpaceArticleHref(item.slug),
      }))}
      category={{
        label: "Không gian bếp",
        href: "/thi-cong-noi-that/khong-gian-bep",
        sectionPrefix: "mau-tu-bep",
        consultationLabel: "Tư vấn thiết kế bếp",
        consultationTitle: "Cần tư vấn không gian bếp cho tổ ấm của bạn?",
        relatedTitle: "Bài viết không gian bếp liên quan",
        backLabel: "Quay lại không gian bếp",
      }}
    />
  );
}
