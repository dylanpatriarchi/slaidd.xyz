import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import LiveAnatomy from "@/components/LiveAnatomy";
import LatencyMatrix from "@/components/LatencyMatrix";
import UseCaseChronicles from "@/components/UseCaseChronicles";
import TheEngine from "@/components/TheEngine";
import ComparisonTable from "@/components/ComparisonTable";
import TheQueue from "@/components/TheQueue";
import FinalCta from "@/components/FinalCta";
import { RevealSection } from "@/components/RevealSection";

export default function Home() {
  return (
    <main className="w-full pt-[57px]">
      <Hero />
      <RevealSection>
        <Manifesto />
      </RevealSection>
      <RevealSection id="live-anatomy">
        <LiveAnatomy />
      </RevealSection>
      <RevealSection>
        <LatencyMatrix />
      </RevealSection>
      <RevealSection id="use-case">
        <UseCaseChronicles />
      </RevealSection>
      <RevealSection id="engine">
        <TheEngine />
      </RevealSection>
      <RevealSection id="comparison">
        <ComparisonTable />
      </RevealSection>
      <RevealSection>
        <TheQueue />
      </RevealSection>
      <RevealSection id="final-cta">
        <FinalCta />
      </RevealSection>
    </main>
  );
}
