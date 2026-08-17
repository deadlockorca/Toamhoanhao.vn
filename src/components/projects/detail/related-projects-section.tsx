import { ProjectCard } from "@/components/projects/project-card";
import { getProjectBySlug, getRelatedProjects, type Project } from "@/data/projects";

type RelatedProjectsSectionProps = {
  project: Project;
  projects?: Project[];
};

export function RelatedProjectsSection({
  project,
  projects,
}: RelatedProjectsSectionProps) {
  const relatedFromSlugs =
    project.detail?.relatedProjectSlugs
      .map(
        (slug) =>
          projects?.find((item) => item.slug === slug) ?? getProjectBySlug(slug),
      )
      .filter((item): item is Project => Boolean(item)) ?? [];
  const relatedProjects =
    relatedFromSlugs.length > 0 ? relatedFromSlugs : getRelatedProjects(project);

  return (
    <section className="bg-[#f7f1e9] px-5 pb-16 sm:px-8 lg:pb-20">
      <div className="mx-auto max-w-[1120px]">
        <h2 className="text-xs font-bold uppercase tracking-[0.1em] text-[#7a6d5c]">
          Dự án liên quan
        </h2>

        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {relatedProjects.map((relatedProject) => (
            <ProjectCard key={relatedProject.slug} project={relatedProject} />
          ))}
        </div>
      </div>
    </section>
  );
}
