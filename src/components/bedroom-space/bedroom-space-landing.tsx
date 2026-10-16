import { BedDouble, BedSingle, Wrench, Factory } from "lucide-react";
import { InteriorSpaceLanding } from "@/components/interior-space/interior-space-landing";
import { bedroomSpaceCopy } from "@/data/bedroom-space";
import {
  bedroomSpaceArticles,
  getBedroomSpaceArticleHref,
} from "@/data/bedroom-space-articles";
import type { SiteLocale } from "@/lib/locale";

export function BedroomSpaceLanding({
  locale = "vi",
}: {
  locale?: SiteLocale;
}) {
  const copy = bedroomSpaceCopy[locale];
  const articles = bedroomSpaceArticles.map((article, index) => ({
    slug: article.slug,
    href: article.externalHref ?? getBedroomSpaceArticleHref(article.slug),
    image: article.image,
    title: copy.articles[index].title,
    excerpt: copy.articles[index].description,
    category: [0, 1, 2, 3, 0, 4, 5, 6][index],
  }));
  return (
    <InteriorSpaceLanding
      locale={locale}
      copy={copy}
      articles={articles}
      heroImage="/images/thi-cong-noi-that/khong-gian-phong-ngu/bai-7/1.webp"
      libraryId="thu-vien-phong-ngu"
      serviceIcons={[BedDouble, BedSingle, Wrench, Factory]}
    />
  );
}
