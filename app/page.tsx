import Hero from "@/components/sections/Hero";
import SelectedWork from "@/components/sections/SelectedWork";
import AboutPreview from "@/components/sections/AboutPreview";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Philosophy from "@/components/sections/Philosophy";
import Personal from "@/components/sections/Personal";
import ContactCTA from "@/components/sections/ContactCTA";
import FinalMoment from "@/components/sections/FinalMoment";
import CigaretteScene from "@/components/3d/CigaretteSceneClient";

export default function Home() {
  return (
    <div className="relative">
      <div className="pointer-events-none fixed inset-0 z-0">
        <CigaretteScene />
      </div>

      <div className="relative z-10">
        <Hero />
        <SelectedWork />
        <AboutPreview />
        <Experience />
        <Skills />
        <Philosophy />
        <Personal />
        <ContactCTA />
        <FinalMoment />
      </div>
    </div>
  );
}
