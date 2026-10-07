import { HomeLanding } from "@/components/home/home-landing";
import { projects as sampleProjects } from "@/data/projects";
import { getPublicProjects } from "@/lib/public-content";

export default async function Home() {
  const projects = await getPublicProjects();

  return <HomeLanding projects={projects.length ? projects : sampleProjects} />;
}
