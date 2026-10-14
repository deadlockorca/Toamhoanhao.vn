import { HomeLanding } from "@/components/home/home-landing";
import { projects as sampleProjects } from "@/data/projects";
import { getPublicProjects } from "@/lib/public-content";
import { homeAlternates, siteBaseUrl } from "@/lib/locale";
import type { Metadata } from "next";

export const metadata: Metadata = {
  /** `absolute` để không bị template ở root layout nối thêm tên thương hiệu. */
  title: {
    absolute: "Tổ Ấm Hoàn Hảo | Thiết kế và thi công nội thất trọn gói",
  },
  description:
    "Thiết kế, thi công và sản xuất nội thất trọn gói tại Hà Nội, TP. Hồ Chí Minh và các tỉnh. Tư vấn miễn phí, báo giá minh bạch, thi công đúng tiến độ.",
  alternates: {
    canonical: `${siteBaseUrl}/`,
    languages: homeAlternates,
  },
};

export default async function Home() {
  const projects = await getPublicProjects();

  return (
    <HomeLanding
      projects={projects.length ? projects : sampleProjects}
      locale="vi"
    />
  );
}
