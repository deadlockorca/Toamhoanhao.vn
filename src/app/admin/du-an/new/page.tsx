import type { Metadata } from "next";

import { ProjectFormMock } from "@/components/admin/project-form-mock";

export const metadata: Metadata = {
  title: "Thêm dự án | Admin",
};

export default function NewProjectPage() {
  return <ProjectFormMock mode="create" />;
}
