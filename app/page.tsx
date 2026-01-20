import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import ActivitiesSection from "@/components/sections/ActivitiesSection";
import TeamSection from "@/components/sections/TeamSection";
import ImpactSection from "@/components/sections/ImpactSection";
import StakeholderSection from "@/components/sections/StakeholderSection";
import PartnersSection from "@/components/sections/PartnersSection";
import NewsSection from "@/components/sections/NewsSection";
import ContactSection from "@/components/sections/ContactSection";
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

        {/* Section 4: Our Team */}
        <TeamSection />

        {/* Section 5: Our Impact (with GIS Map) */}
        <ImpactSection />

        {/* Section 6: Stakeholder Relations */}
        <StakeholderSection />

        {/* Section 7: Partners */}
        <PartnersSection />

        {/* Section 8: News & Updates */}
        <NewsSection />

        {/* Section 9: Contact & Donation */}
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
