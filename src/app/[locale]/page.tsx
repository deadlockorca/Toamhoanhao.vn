import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HomeLanding } from "@/components/home/home-landing";
import { projects as sampleProjects } from "@/data/projects";
import {
  homeAlternates,
  homePath,
  isAdditionalLocale,
  siteBaseUrl,
  type AdditionalLocale,
} from "@/lib/locale";
import { getPublicProjects } from "@/lib/public-content";

const metadataByLocale: Record<
  AdditionalLocale,
  { title: string; description: string }
> = {
  ko: {
    title: "Tổ Ấm Hoàn Hảo | 인테리어 디자인 및 시공",
    description:
      "Tổ Ấm Hoàn Hảo의 인테리어 디자인과 시공 사례를 살펴보세요. 아이디어부터 완공까지 편안한 생활 공간을 만듭니다.",
  },
  sv: {
    title: "Tổ Ấm Hoàn Hảo | Inredning och byggnation",
    description:
      "Utforska inrednings- och byggprojekt från Tổ Ấm Hoàn Hảo, från första idé till färdigt hem.",
  },
  fr: {
    title: "Tổ Ấm Hoàn Hảo | Design intérieur et réalisation",
    description:
      "Découvrez les projets de design intérieur et de construction de Tổ Ấm Hoàn Hảo, de la première idée à la réalisation.",
  },
  ru: {
    title: "Tổ Ấm Hoàn Hảo | Дизайн интерьера и строительство",
    description:
      "Откройте для себя проекты дизайна интерьера и строительства Tổ Ấm Hoàn Hảo — от идеи до готового пространства.",
  },
  es: {
    title: "Tổ Ấm Hoàn Hảo | Diseño interior y construcción",
    description:
      "Descubre proyectos de diseño interior y construcción de Tổ Ấm Hoàn Hảo, desde la primera idea hasta el espacio terminado.",
  },
  zh: {
    title: "Tổ Ấm Hoàn Hảo | 室内设计与施工",
    description:
      "探索 Tổ Ấm Hoàn Hảo 的室内设计与施工项目，从最初构想到完整的生活空间。",
  },
};

export async function generateMetadata({
  params,
}: PageProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  if (!isAdditionalLocale(locale)) return {};
  return {
    // `absolute` để không bị template ở root layout nối thêm tên thương hiệu.
    title: { absolute: metadataByLocale[locale].title },
    description: metadataByLocale[locale].description,
    alternates: {
      canonical: `${siteBaseUrl}${homePath(locale)}`,
      languages: homeAlternates,
    },
  };
}

export default async function AdditionalLanguageHome({
  params,
}: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (!isAdditionalLocale(locale)) notFound();
  const projects = await getPublicProjects();
  return (
    <HomeLanding
      projects={projects.length ? projects : sampleProjects}
      locale={locale}
    />
  );
}
