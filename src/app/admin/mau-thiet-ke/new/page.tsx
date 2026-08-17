import type { Metadata } from "next";

import { DesignSampleFormMock } from "@/components/admin/design-sample-form-mock";

export const metadata: Metadata = {
  title: "Thêm mẫu thiết kế | Admin",
};

export default function NewDesignSamplePage() {
  return <DesignSampleFormMock mode="create" />;
}
