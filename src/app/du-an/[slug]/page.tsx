import {
  ProjectContent,
  getTranslatedProject,
} from "@/components/projects/project-page";
import { projectMetadata } from "@/lib/project-metadata";
type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  return projectMetadata("vi", await getTranslatedProject(slug, "vi"));
}
export default async function Page({ params }: Props) {
  const { slug } = await params;
  return <ProjectContent slug={slug} locale="vi" />;
}
