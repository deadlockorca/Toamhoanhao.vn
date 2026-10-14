import type { Metadata } from "next";
import { HomeLanding } from "@/components/home/home-landing";
import { projects as sampleProjects } from "@/data/projects";
import { homeAlternates, siteBaseUrl } from "@/lib/locale";
import { getPublicProjects } from "@/lib/public-content";

export const metadata: Metadata = {
  /**
   * `absolute` để không bị template ở root layout nối thêm tên thương hiệu —
   * tiêu đề trang chủ đã tự chứa thương hiệu.
   */
  title: { absolute: "To Am Hoan Hao | Interior Design & Construction" },
  description:
    "Explore interior design and construction projects by To Am Hoan Hao, from the first idea to the finished living space.",
  alternates: {
    canonical: `${siteBaseUrl}/en`,
    languages: homeAlternates,
  },
};

export default async function EnglishHome() {
  const projects = await getPublicProjects();
  return (
    <HomeLanding
      projects={projects.length ? projects : sampleProjects}
      locale="en"
    />
  );
}
