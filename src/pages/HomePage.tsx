import { SiteFooter } from "../components/layout/SiteFooter";
import { SiteHeader } from "../components/layout/SiteHeader";
import { SeoHead } from "../components/seo/SeoHead";
import { AboutSection } from "../components/sections/AboutSection";
import { AiExplorationSection } from "../components/sections/AiExplorationSection";
import { ExperienceSection } from "../components/sections/ExperienceSection";
import { FeaturedCaseStudiesSection } from "../components/sections/FeaturedCaseStudiesSection";
import { HeroSection } from "../components/sections/HeroSection";
import { OwnProductsSection } from "../components/sections/OwnProductsSection";
import { RecruiterSnapshotSection } from "../components/sections/RecruiterSnapshotSection";
import { TechStackSection } from "../components/sections/TechStackSection";
import { ValuePropositionSection } from "../components/sections/ValuePropositionSection";

export function HomePage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-surface-container-lowest">
      <SeoHead />
      <SiteHeader />
      <main id="main-content" className="mt-16 flex-1 sm:mt-20">
        <HeroSection />
        <RecruiterSnapshotSection />
        <FeaturedCaseStudiesSection />
        <OwnProductsSection />
        <ExperienceSection />
        <TechStackSection />
        <ValuePropositionSection />
        <AiExplorationSection />
        <AboutSection />
      </main>
      <SiteFooter />
    </div>
  );
}
