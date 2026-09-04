import RevealOnScroll from "./RevealOnScroll";

export default function TheProblem() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-16">
        <RevealOnScroll className="max-w-[760px]">
          <span className="eyebrow">The Problem</span>

          <h2 className="font-display font-semibold text-[clamp(2rem,4.5vw,3.4rem)] leading-[1.08] mt-5 mb-6">
            Human progress
            <br />
            is fragmented.
          </h2>

          <p className="text-paper/65 leading-relaxed text-[1.05rem] max-w-[650px]">
            Ideas live in notes. Decisions disappear inside conversations.
            Goals become forgotten intentions. Lessons are learned once and
            lost over time.
          </p>

          <p className="text-paper/65 leading-relaxed text-[1.05rem] max-w-[650px] mt-5">
            Today&apos;s AI can generate an answer in seconds, but it rarely
            understands the history behind the person asking.
          </p>
        </RevealOnScroll>

        <RevealOnScroll className="mt-12 sm:mt-14 lg:mt-16 border-y border-paper/10 py-8 sm:py-10 lg:py-12">   
            <p className="font-display font-medium text-[clamp(1.5rem,3vw,2.35rem)] leading-tight max-w-[900px]">
            Azennix is building AI that remembers the journey —
            <span className="text-sand"> not just the prompt.</span>
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}