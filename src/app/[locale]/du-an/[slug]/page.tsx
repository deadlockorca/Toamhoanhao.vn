import { notFound } from "next/navigation";
import {
  ProjectContent,
  getTranslatedProject,
} from "@/components/projects/project-page";
import { projectMetadata } from "@/lib/project-metadata";
import { isSiteLocale } from "@/lib/locale";
type Props = { params: Promise<{ locale: string; slug: string }> };
export async function generateMetadata({ params }: Props) {
  const { locale, slug } = await params;
  if (!isSiteLocale(locale) || locale === "vi") notFound();
  return projectMetadata(locale, await getTranslatedProject(slug, locale));
}
export default async function Page({ params }: Props) {
  const { locale, slug } = await params;
  if (!isSiteLocale(locale) || locale === "vi") notFound();
  return <ProjectContent slug={slug} locale={locale} />;
}
