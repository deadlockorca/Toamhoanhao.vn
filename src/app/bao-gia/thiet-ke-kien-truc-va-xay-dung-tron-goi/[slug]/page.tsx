import { ConstructionPricingArticle } from "@/components/pricing/construction-pricing-article";
import { pricingArticleMetadata } from "@/lib/pricing-metadata";
import { pricingRoutes } from "@/data/pricing-routes";
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return pricingRoutes.construction.slugs.map((slug) => ({ slug }));
}
export async function generateMetadata({ params }: Props) {
  return pricingArticleMetadata("construction", (await params).slug, "vi");
}
export default async function Page({ params }: Props) {
  return <ConstructionPricingArticle slug={(await params).slug} />;
}
