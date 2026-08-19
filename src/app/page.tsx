import { AspirationBeliefSection } from "@/components/home/aspiration-belief-section";
import { ConsultationCta } from "@/components/home/consultation-cta";
import { ConstructionRecordsSection } from "@/components/home/construction-records-section";
import { CustomerVideoConsultationSection } from "@/components/home/customer-video-consultation-section";
import { FeaturedWorkSection } from "@/components/home/featured-work-section";
import { HeroSection } from "@/components/home/hero-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { SiteFooter } from "@/components/site-footer";
import { getPublicDesignSamples, getPublicProjects } from "@/lib/public-content";

export default async function Home() {
  const [projects, designSamples] = await Promise.all([
    getPublicProjects(),
    getPublicDesignSamples(),
  ]);

  return (
    <main className="min-h-screen bg-[#f6f0e8] text-[#17140f]">
      <HeroSection />
      <CustomerVideoConsultationSection />
      <FeaturedWorkSection projects={projects} samples={designSamples} />
      <ConstructionRecordsSection projects={projects} />
      <AspirationBeliefSection />
      <TestimonialsSection />
      <ConsultationCta />
      <SiteFooter />
    </main>
  );
}
