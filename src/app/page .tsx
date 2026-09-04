import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TheProblem from "@/components/TheProblem";
import IRABrain from "@/components/IRABrain";
import Approach from "@/components/Approach";
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
        <TheProblem />
        <IRABrain />
        <Approach />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
