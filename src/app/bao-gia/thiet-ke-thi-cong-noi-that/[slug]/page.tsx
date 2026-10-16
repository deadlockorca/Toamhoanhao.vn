import { InteriorPricingArticle } from "@/components/pricing/interior-pricing-article";
import { pricingArticleMetadata } from "@/lib/pricing-metadata";
import { pricingRoutes } from "@/data/pricing-routes";
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return pricingRoutes.interior.slugs.map((slug) => ({ slug }));
}
export async function generateMetadata({ params }: Props) {
  return pricingArticleMetadata("interior", (await params).slug, "vi");
}
export default async function Page({ params }: Props) {
  return <InteriorPricingArticle slug={(await params).slug} />;
}
