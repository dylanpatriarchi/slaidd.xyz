import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import LiveAnatomy from "@/components/LiveAnatomy";
import LatencyMatrix from "@/components/LatencyMatrix";
import UseCaseChronicles from "@/components/UseCaseChronicles";
import TheEngine from "@/components/TheEngine";
import ComparisonTable from "@/components/ComparisonTable";
import TheQueue from "@/components/TheQueue";
import FinalCta from "@/components/FinalCta";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <Manifesto />
      <LiveAnatomy />
      <LatencyMatrix />
      <UseCaseChronicles />
      <TheEngine />
      <ComparisonTable />
      <TheQueue />
      <FinalCta />
    </main>
  );
}
