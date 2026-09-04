import RevealOnScroll from "./RevealOnScroll";
import HelixCanvas from "./HelixCanvas";

const items = [
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

export default function Approach() {
  return (
    <section id="approach" className="bg-paper text-ink py-24 lg:py-28">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-16">
        <RevealOnScroll className="max-w-[680px] mb-16">
          <span className="eyebrow eyebrow-light">How We Build</span>
          <h2 className="font-display font-semibold text-[clamp(1.9rem,4vw,3rem)] mt-5 mb-5">
            Two strands,
            <br />
            one system , Every response recalls your thoughts.
          </h2>
          <p className="text-ink/60 leading-relaxed text-[1.05rem]">
            Every Azennix product pairs a technical strand with a human one —
            the architecture that stores information, and the judgment that
            decides what deserves to be remembered.
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-20 items-center">
          <RevealOnScroll className="relative h-[380px] border border-ink/10 overflow-hidden">
            <HelixCanvas dot={5} gap={12} amp={0.3} speed={0.0003} accentEvery={13} />
          </RevealOnScroll>

          <RevealOnScroll className="flex flex-col">
            {items.map((it, i) => (
              <div
                key={it.tag}
                className={`py-6 border-t border-ink/10 grid grid-cols-[52px_1fr] gap-5 ${
                  i === items.length - 1 ? "border-b" : ""
                }`}
              >
                <span className="font-mono text-[0.72rem] text-blood tracking-wide pt-1">
                  {it.tag}
                </span>
                <div>
                  <h4 className="font-display text-[1.15rem] mb-2">
                    {it.title}
                  </h4>
                  <p className="text-[0.92rem] text-ink/60 leading-relaxed max-w-[52ch]">
                    {it.body}
                  </p>
                </div>
              </div>
            ))}
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
