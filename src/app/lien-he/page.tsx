import { ContactPage } from "@/components/contact/contact-page";
import { contactMetadata } from "@/lib/contact-metadata";

export const metadata = contactMetadata("vi");
export default function Page() {
  return <ContactPage />;
}
