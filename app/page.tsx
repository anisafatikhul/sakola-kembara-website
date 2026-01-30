import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import ActivitiesSection from "@/components/sections/ActivitiesSection";
import ImpactSection from "@/components/sections/ImpactSection";
import StakeholderSection from "@/components/sections/StakeholderSection";
import PartnersSection from "@/components/sections/PartnersSection";
import NewsSection from "@/components/sections/NewsSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* Section 1: Hero - What We Provide */}
        <HeroSection />

        {/* Section 2: Problem Statement */}
        <ProblemSection />

        {/* Section 3: Activities */}
        <ActivitiesSection />

        {/* Section 4: Our Impact (with GIS Map) */}
        <ImpactSection />

        {/* Section 5: Blog */}
        <NewsSection />

        {/* Section 6: Stakeholder Relations */}
        <StakeholderSection />

        {/* Section 7: Partners */}
        <PartnersSection />

        {/* Section 8: CTA - Gabung Bersama Kami */}
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
