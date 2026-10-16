import {
  DesignSampleContent,
  getTranslatedDesignSample,
} from "@/components/design-samples/design-sample-page";
import { designSampleMetadata } from "@/lib/design-sample-metadata";
type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  return designSampleMetadata(
    "vi",
    await getTranslatedDesignSample(slug, "vi"),
  );
}
export default async function Page({ params }: Props) {
  const { slug } = await params;
  return <DesignSampleContent slug={slug} locale="vi" />;
}
