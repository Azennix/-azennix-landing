import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RevealOnScroll from "@/components/RevealOnScroll";
import HelixCanvas from "@/components/HelixCanvas";
import CTA from "@/components/CTA";
import BrandMark from "@/components/BrandMark";

export const metadata: Metadata = {
  title: "Company — Azennix",
  description:
    "Azennix builds AI systems designed to understand, remember, and compound human intelligence over time.",
};

const stats = [
  { k: "Founded by", v: "Aneesh Challa" },
  { k: "Base", v:  "India" },
  { k: "Flagship product", v: "IRABrain" },
  { k: "Focus", v: "Memory-native AI" },
  { k: "Built for", v: "Gen-Z founders" },
];

const values = [
  {
    tag: "01",
    title: "Memory-native, not bolted on",
    body: "IRABrain is designed around memory from the first line of architecture, rather than adding recall to a stateless chatbot.",
  },
  {
    tag: "02",
    title: "Founder-first product judgment",
    body: "Every feature is weighed against one question: does this help a young founder build something real, or just keep them engaged?",
  },
  {
    tag: "03",
    title: "Ethical by construction",
    body: "We choose transparent memory design over manipulative engagement patterns, even when the latter is the easier build.",
  },
  {
    tag: "04",
    title: "Built in the open, shipped with care",
    body: "Azennix ships in deliberate stages, with each layer tested before the next is built on top of it.",
  },
];

export default function CompanyPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden pt-[120px] pb-[80px]">
          <div className="absolute inset-0 z-0 opacity-40">
            
          </div>
          <div className="relative z-10 max-w-[880px] mx-auto px-5 sm:px-8 lg:px-16">
            <span className="eyebrow">The Company</span>
            <h1 className="font-display font-semibold leading-[1.04] tracking-tight text-[clamp(2.2rem,6vw,4.2rem)] mt-6 mb-6">
              Azennix builds AI
              <br />
              <span className="text-sand">For human Intelligence.</span>
            </h1>
            <p className="text-paper/65 max-w-[620px] leading-relaxed text-[clamp(1rem,1.5vw,1.15rem)]">
              We&apos;re a small, founder-led company based in Kakinada, India,
              building software that carries context forward — so growth
              doesn&apos;t reset every time someone opens the app.
            </p>
          </div>
        </section>

        {/* Stats + Manifesto */}
        <section className="bg-paper text-ink py-20 lg:py-24">
          <div className="max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-16">
            <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-12 md:gap-20">
              <RevealOnScroll>
                <span className="eyebrow eyebrow-light">Manifesto</span>
                <p className="font-display font-medium text-[clamp(1.2rem,2.4vw,1.7rem)] leading-relaxed mt-6">
                  Azennix is built on a simple premise:{" "}
                  <b className="text-blood font-semibold">
                    the systems people rely on should remember them accurately
                  </b>{" "}
                  — not just log their activity.
                </p>
              </RevealOnScroll>
              <RevealOnScroll className="flex flex-col">
                {stats.map((s, i) => (
                  <div
                    key={s.k}
                    className={`flex justify-between items-baseline py-5 font-mono border-t border-ink/10 ${
                      i === stats.length - 1 ? "border-b" : ""
                    }`}
                  >
                    <span className="text-[0.8rem] tracking-wide uppercase text-ink/60">
                      {s.k}
                    </span>
                    <span className="text-[1rem] font-semibold">{s.v}</span>
                  </div>
                ))}
              </RevealOnScroll>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 lg:py-24">
          <div className="max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-16">
            <RevealOnScroll className="max-w-[680px] mb-14">
              <span className="eyebrow">How We Operate</span>
              <h2 className="font-display font-semibold text-[clamp(1.7rem,3.6vw,2.6rem)] mt-5">
                Principles, not just a pitch.
              </h2>
            </RevealOnScroll>
            <RevealOnScroll className="flex flex-col">
              {values.map((it, i) => (
                <div
                  key={it.tag}
                  className={`py-6 border-t border-paper/10 grid grid-cols-[52px_1fr] gap-5 ${
                    i === values.length - 1 ? "border-b" : ""
                  }`}
                >
                  <span className="font-mono text-[0.72rem] text-sand tracking-wide pt-1">
                    {it.tag}
                  </span>
                  <div>
                    <h4 className="font-display text-[1.1rem] mb-2">{it.title}</h4>
                    <p className="text-[0.92rem] text-paper/65 leading-relaxed max-w-[60ch]">
                      {it.body}
                    </p>
                  </div>
                </div>
              ))}
            </RevealOnScroll>
          </div>
        </section>

        {/* Founder */}
        <section id="founder" className="bg-paper text-ink py-20 lg:py-24">
          <div className="max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-16">
            <RevealOnScroll className="max-w-[680px] mb-14">
              <span className="eyebrow eyebrow-light">From the Founder</span>
              <h2 className="font-display font-semibold text-[clamp(1.7rem,3.6vw,2.6rem)] mt-5">
                Why Azennix exists.
              </h2>
            </RevealOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-[0.4fr_0.6fr] gap-11 items-start">
              
              <RevealOnScroll>
  <p className="font-display font-medium text-[clamp(1.15rem,2.2vw,1.5rem)] leading-relaxed">
    We live in a world where more information is being created than ever
    before, yet the systems we use still struggle to understand the people
    behind that information. Our ideas are scattered across notes,
    conversations, documents, apps, and unfinished plans. Decisions are made,
    lessons are learned, goals evolve — but most technology treats every
    interaction as if it starts from zero.
  </p>

  <p className="mt-6 font-display font-medium text-[clamp(1.15rem,2.2vw,1.5rem)] leading-relaxed">
    AI has made it remarkably easy to generate answers, but generating an
    answer is not the same as understanding a person. An intelligent system
    should know what came before, understand why it mattered, recognize what
    has changed, and use that understanding to help with what comes next.
  </p>

  <p className="mt-6 font-display font-medium text-[clamp(1.15rem,2.2vw,1.5rem)] leading-relaxed text-blood">
    Azennix exists to build that missing layer of intelligence — systems that
    remember meaningful human context, learn from experience, and become more
    useful over time.
  </p>

  <p className="mt-6 font-display font-medium text-[clamp(1.15rem,2.2vw,1.5rem)] leading-relaxed">
    We believe the future of AI should not be built around replacing human
    judgment, but around strengthening it. Technology should compound what
    people learn, preserve what they build, and help them move forward without
    losing the context of where they started.
  </p>
                <p className="mt-6 font-mono text-[0.8rem] tracking-wide text-ink/60">
                  — Aneesh, Founder &amp; CEO, Azennix
                </p>

              </RevealOnScroll>
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
