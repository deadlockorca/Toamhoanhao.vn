import { notFound } from "next/navigation";
import { ProjectDetailShowcase } from "@/components/projects/detail/project-detail-showcase";
import { SiteFooter } from "@/components/site-footer";
import { getPublicProjectBySlug } from "@/lib/public-content";
import {
  hasProjectTranslation,
  localizeProject,
} from "@/data/projects-localized";
import type { SiteLocale } from "@/lib/locale";

export async function getTranslatedProject(slug: string, locale: SiteLocale) {
  const sample = await getPublicProjectBySlug(slug);
  if (!sample || !hasProjectTranslation(sample, locale)) notFound();
  return sample;
}
export async function ProjectContent({
  slug,
  locale,
}: {
  slug: string;
  locale: SiteLocale;
}) {
  const sample = await getTranslatedProject(slug, locale);
  return (
    <main lang={locale}>
      <ProjectDetailShowcase
        project={localizeProject(sample, locale)}
        locale={locale}
      />
      <SiteFooter locale={locale} />
    </main>
  );
}
