import Header from "@/components/Header";
import Hero from "@/components/Hero";
import IRABrain from "@/components/IRABrain";
import TheProblem from "@/components/TheProblem";
import AzennixIntelligence from "@/components/AzennixIntelligence";
import Approach from "@/components/Approach";
import Feedback from "@/components/Feedback";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ScrollStrand from "@/components/ScrollStrand";

export default function Home() {
  return (
    <>
      <ScrollStrand />
      <Header />
      <main>
        <Hero />
        <IRABrain />
        <TheProblem />
        <AzennixIntelligence />
        <Approach />
        <Feedback />
        <CTA />
      </main>
      <Footer />
    </>
  );
}