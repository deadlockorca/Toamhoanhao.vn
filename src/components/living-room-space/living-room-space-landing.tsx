import { localizedPageHref } from "@/lib/localized-pages";
import { Armchair, Sofa, Wrench, Factory } from "lucide-react";
import { InteriorSpaceLanding } from "@/components/interior-space/interior-space-landing";
import { livingRoomSpaceCopy } from "@/data/living-room-space";
import {
  livingRoomSpaceArticles,
  getLivingRoomSpaceArticleHref,
} from "@/data/living-room-space-articles";
import type { SiteLocale } from "@/lib/locale";

export function LivingRoomSpaceLanding({
  locale = "vi",
}: {
  locale?: SiteLocale;
}) {
  const copy = livingRoomSpaceCopy[locale];
  const articles = livingRoomSpaceArticles.map((article, index) => ({
    slug: article.slug,
    href: localizedPageHref(
      article.externalHref ?? getLivingRoomSpaceArticleHref(article.slug),
      locale,
    ),
    image: article.image,
    title: copy.articles[index].title,
    excerpt: copy.articles[index].description,
    category: index,
  }));
  return (
    <InteriorSpaceLanding
      locale={locale}
      copy={copy}
      articles={articles}
      heroImage="/images/thi-cong-noi-that/khong-gian-phong-khach/bai-1-thumb.webp"
      libraryId="thu-vien-phong-khach"
      serviceIcons={[Armchair, Sofa, Wrench, Factory]}
    />
  );
}
