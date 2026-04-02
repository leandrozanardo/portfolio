import { SiteFooter } from "./components/layout/SiteFooter";
import { SiteHeader } from "./components/layout/SiteHeader";
import { AboutSection } from "./components/sections/AboutSection";
import { ExperienceSection } from "./components/sections/ExperienceSection";
import { FeaturedCaseStudiesSection } from "./components/sections/FeaturedCaseStudiesSection";
import { HeroSection } from "./components/sections/HeroSection";
import { RecruiterSnapshotSection } from "./components/sections/RecruiterSnapshotSection";
import { TechStackSection } from "./components/sections/TechStackSection";
import { ValuePropositionSection } from "./components/sections/ValuePropositionSection";

export default function App() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-surface-container-lowest">
      <SiteHeader />
      <main id="main-content" className="mt-16 flex-1 sm:mt-20">
        <HeroSection />
        <RecruiterSnapshotSection />
        <FeaturedCaseStudiesSection />
        <ExperienceSection />
        <TechStackSection />
        <ValuePropositionSection />
        <AboutSection />
      </main>
      <SiteFooter />
    </div>
  );
}
