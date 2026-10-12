import type { Metadata } from "next";
import { HomeLanding } from "@/components/home/home-landing";
import { projects as sampleProjects } from "@/data/projects";
import { homeAlternates, siteBaseUrl } from "@/lib/locale";
import { getPublicProjects } from "@/lib/public-content";

export const metadata: Metadata = {
  title: "Tổ Ấm Hoàn Hảo | インテリアデザイン・施工",
  description: "Tổ Ấm Hoàn Hảoのインテリアデザイン・施工事例をご紹介します。構想から完成まで、心地よい住まいをつくります。",
  alternates: {
    canonical: `${siteBaseUrl}/ja`,
    languages: homeAlternates,
  },
};

export default async function JapaneseHome() {
  const projects = await getPublicProjects();
  return <HomeLanding projects={projects.length ? projects : sampleProjects} locale="ja" />;
}
