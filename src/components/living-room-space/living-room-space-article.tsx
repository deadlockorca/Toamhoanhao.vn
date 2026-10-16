import type { SiteLocale } from "@/lib/locale";
import { SpaceArticle } from "@/components/interior-space/space-article";
import {
  getLivingRoomSpaceArticleHref,
  type LivingRoomSpaceArticle as Article,
} from "@/data/living-room-space-articles";

export function LivingRoomSpaceArticle({
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
        href: item.externalHref ?? getLivingRoomSpaceArticleHref(item.slug),
      }))}
      category={{
        label: "Không gian phòng khách",
        href: "/thi-cong-noi-that/khong-gian-phong-khach",
        sectionPrefix: "noi-dung-phong-khach",
        consultationLabel: "Tư vấn thiết kế phòng khách",
        consultationTitle:
          "Cần tư vấn không gian phòng khách cho tổ ấm của bạn?",
        relatedTitle: "Bài viết không gian phòng khách liên quan",
        backLabel: "Quay lại không gian phòng khách",
      }}
    />
  );
}
