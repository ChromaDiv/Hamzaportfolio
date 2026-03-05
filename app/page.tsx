import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BentoGrid from "@/components/BentoGrid";
import CaseStudies from "@/components/CaseStudies";
import FounderDNA from "@/components/FounderDNA";
import ProfessionalExperience from "@/components/ProfessionalExperience";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import MeshBackground from "@/components/MeshBackground";

export default function Home() {
  return (
    <>
      {/* Global atmosphere layers */}
      <MeshBackground />

      <Navbar />
      <main className="relative z-[2]">
        <Hero />
        <BentoGrid />
        <Education />
        <CaseStudies />
        <FounderDNA />
        <ProfessionalExperience />
      </main>
      <Footer />
    </>
  );
}
