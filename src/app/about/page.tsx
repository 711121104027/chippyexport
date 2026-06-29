import AboutHero from "@/components/about/AboutHero";
import StorySection from "@/components/about/StorySection";
import VisionMission from "@/components/about/VisionMission";
import CoreValues from "@/components/about/CoreValues";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import AboutCTA from "@/components/about/AboutCTA";

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <StorySection />
      <VisionMission />
      <CoreValues />
      <WhyChooseUs />
      <AboutCTA />
    </main>
  );
}