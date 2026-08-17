import { AboutStrip } from "@/components/home/about-strip";
import { ConsultationCta } from "@/components/home/consultation-cta";
import { FeaturedDesignSamplesSection } from "@/components/home/featured-design-samples-section";
import { FeaturedProjectsSection } from "@/components/home/featured-projects-section";
import { HeroSection } from "@/components/home/hero-section";
import { ServicesSection } from "@/components/home/services-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { WorkProcessSection } from "@/components/home/work-process-section";
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
      <FeaturedProjectsSection projects={projects} />
      <FeaturedDesignSamplesSection samples={designSamples} />
      <AboutStrip />
      <ServicesSection />
      <WorkProcessSection />
      <TestimonialsSection />
      <ConsultationCta />
      <SiteFooter />
    </main>
  );
}
