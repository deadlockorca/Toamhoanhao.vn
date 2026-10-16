import { localizedPageHref } from "@/lib/localized-pages";
import { Factory, Hammer, PanelsTopLeft, Pencil } from "lucide-react";
import { InteriorSpaceLanding } from "@/components/interior-space/interior-space-landing";
import { kitchenSpaceCopy } from "@/data/kitchen-space";
import {
  kitchenSpaceArticles,
  getKitchenSpaceArticleHref,
} from "@/data/kitchen-space-articles";
import type { SiteLocale } from "@/lib/locale";

const articleCategories = [0, 1, 2, 3, 4, 1, 5];
export function KitchenSpaceLanding({
  locale = "vi",
}: {
  locale?: SiteLocale;
}) {
  const copy = kitchenSpaceCopy[locale];
  const articles = kitchenSpaceArticles.map((article, index) => ({
    slug: article.slug,
    href: localizedPageHref(getKitchenSpaceArticleHref(article.slug), locale),
    image: article.image,
    title: copy.articles[index].title,
    excerpt: copy.articles[index].description,
    category: articleCategories[index],
  }));
  return (
    <InteriorSpaceLanding
      locale={locale}
      copy={copy}
      articles={articles}
      heroImage="/images/thi-cong-noi-that/khong-gian-bep/hero.webp"
      libraryId="thu-vien-bep"
      serviceIcons={[Pencil, PanelsTopLeft, Hammer, Factory]}
    />
  );
}
