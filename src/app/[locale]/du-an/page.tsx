import { notFound } from "next/navigation";
import {
  ProjectsContent,
  type ProjectsPageProps,
} from "@/components/projects/projects-page";
import { projectMetadata } from "@/lib/project-metadata";
import { isSiteLocale } from "@/lib/locale";
type Props = ProjectsPageProps & { params: Promise<{ locale: string }> };
export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  if (!isSiteLocale(locale) || locale === "vi") notFound();
  return projectMetadata(locale);
}
export default async function Page({ params, searchParams }: Props) {
  const { locale } = await params;
  if (!isSiteLocale(locale) || locale === "vi") notFound();
  return <ProjectsContent locale={locale} searchParams={searchParams} />;
}
