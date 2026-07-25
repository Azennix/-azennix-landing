import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RevealOnScroll from "@/components/RevealOnScroll";
import HelixCanvas from "@/components/HelixCanvas";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Research — Azennix",
  description:
    "Azennix's research focus: memory architecture, behavioral understanding, and trust-based design for AI systems.",
};

const pillars = [
  {
    num: "01",
    title: "Memory Architecture",
    body: "How an AI system should store, retrieve, and forget — layered so short-term context and long-term history don't fight each other.",
  },
  {
    num: "02",
    title: "Behavioral Understanding",
    body: "Recognizing patterns in someone's goals and habits over time, not just responding to the last message they sent.",
  },
  {
    num: "03",
    title: "Trust & Transparency",
    body: "A memory system should be legible to the person it's remembering — clear about what's kept, and easy to correct or delete.",
  },
  {
    num: "04",
    title: "Ethical Engagement Design",
    body: "Choosing patterns that support real progress over patterns that just maximize time spent in an app.",
  },
];

const openQuestions = [
  {
    tag: "01",
    title: "Staleness detection",
    body: "How does a system know when something it remembers about you is no longer true, without you having to say so directly?",
  },
  {
    tag: "02",
    title: "Procedural memory",
    body: "Beyond facts and preferences — can an assistant learn how someone works, not just what they've told it?",
  },
  {
    tag: "03",
    title: "Emotion-aware recall",
    body: "Surfacing the right memory at the right moment matters as much as storing it correctly in the first place.",
  },
];

export default function ResearchPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden pt-[120px] pb-[80px]">
          <div className="absolute inset-0 z-0 opacity-40">
            <HelixCanvas dot={4} gap={10} amp={0.24} speed={0.0008} accentEvery={17} />
          </div>
          <div className="relative z-10 max-w-[880px] mx-auto px-5 sm:px-8 lg:px-16">
            <span className="eyebrow">Research</span>
            <h1 className="font-display font-semibold leading-[1.04] tracking-tight text-[clamp(2.2rem,6vw,4.2rem)] mt-6 mb-6">
              Studying memory,
              <br />
              <span className="text-sand">not just building it.</span>
            </h1>
            <p className="text-paper/65 max-w-[620px] leading-relaxed text-[clamp(1rem,1.5vw,1.15rem)]">
              IRABrain is built on ongoing research into how AI systems
              should hold context over time. Some of it is settled
              engineering; a lot of it is still an open problem — here&apos;s
              what we&apos;re actually working on.
            </p>
          </div>
        </section>

        {/* Pillars */}
        <section className="py-20 lg:py-24">
          <div className="max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-16">
            <RevealOnScroll className="max-w-[680px] mb-14">
              <span className="eyebrow">Focus Areas</span>
              <h2 className="font-display font-semibold text-[clamp(1.7rem,3.6vw,2.6rem)] mt-5">
                Four areas we keep coming back to.
              </h2>
            </RevealOnScroll>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-paper/10 border border-paper/10">
              {pillars.map((p) => (
                <div key={p.num} className="bg-ink p-7">
                  <span className="font-mono text-[0.72rem] text-sand tracking-widest block mb-4">
                    {p.num}
                  </span>
                  <h4 className="font-display text-[1.15rem] mb-2.5">{p.title}</h4>
                  <p className="text-[0.9rem] text-paper/65 leading-relaxed">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open questions */}
        <section className="bg-paper text-ink py-20 lg:py-24">
          <div className="max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-16">
            <RevealOnScroll className="max-w-[680px] mb-14">
              <span className="eyebrow eyebrow-light">Open Questions</span>
              <h2 className="font-display font-semibold text-[clamp(1.7rem,3.6vw,2.6rem)] mt-5">
                Problems nobody's fully solved yet.
              </h2>
              <p className="text-ink/60 leading-relaxed text-[1.02rem] mt-5">
                We don&apos;t claim to have these figured out — they&apos;re
                the reason IRABrain keeps evolving instead of shipping once
                and stopping.
              </p>
            </RevealOnScroll>

            <RevealOnScroll className="flex flex-col">
              {openQuestions.map((it, i) => (
                <div
                  key={it.tag}
                  className={`py-6 border-t border-ink/10 grid grid-cols-[52px_1fr] gap-5 ${
                    i === openQuestions.length - 1 ? "border-b" : ""
                  }`}
                >
                  <span className="font-mono text-[0.72rem] text-blood tracking-wide pt-1">
                    {it.tag}
                  </span>
                  <div>
                    <h4 className="font-display text-[1.1rem] mb-2">{it.title}</h4>
                    <p className="text-[0.92rem] text-ink/60 leading-relaxed max-w-[60ch]">
                      {it.body}
                    </p>
                  </div>
                </div>
              ))}
            </RevealOnScroll>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
