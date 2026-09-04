import RevealOnScroll from "./RevealOnScroll";

const layers = [
  {
    num: "01",
    title: "Memory",
    question: "What happened?",
    body: "Preserves meaningful information, experiences, decisions, and goals across time.",
  },
  {
    num: "02",
    title: "Context",
    question: "Why does it matter?",
    body: "Connects information to the situation, priorities, and history surrounding it.",
  },
  {
    num: "03",
    title: "Reasoning",
    question: "What does it mean?",
    body: "Works across context to identify relationships, patterns, possibilities, and trade-offs.",
  },
  {
    num: "04",
    title: "Learning",
    question: "What changed?",
    body: "Uses experience to improve future understanding instead of treating every interaction as isolated.",
  },
  {
    num: "05",
    title: "Action",
    question: "What happens next?",
    body: "Turns understanding into useful decisions, recommendations, and purposeful next steps.",
  },
];

export default function AzennixIntelligence() {
  return (
    <section id="intelligence" className="bg-paper text-ink py-24 lg:py-32">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-16">
        <RevealOnScroll className="max-w-[760px] mb-16">
          <span className="eyebrow eyebrow-light">
            Azennix Intelligence
          </span>

          <h2 className="font-display font-semibold text-[clamp(2rem,4.5vw,3.4rem)] leading-[1.08] mt-5 mb-7">
            From information
            <br />
            to intelligence.
          </h2>
            <p className="text-ink/60 leading-relaxed text-[0.95rem] max-w-[700px]">
            Intelligence is more than generating an answer. It is the ability
            to understand context, connect experience, reason across time,
            learn from what happened, and help determine what comes next.
          </p>
        </RevealOnScroll>

        <RevealOnScroll className="border-t border-ink/10">
          {layers.map((layer, i) => (
            <div
              key={layer.num}
              className={`grid grid-cols-1 md:grid-cols-[70px_220px_1fr] gap-5 md:gap-8 py-7 md:py-9 border-b border-ink/10 ${
                i === 0 ? "border-b" : ""
              }`}
            >
              <span className="font-mono text-[0.72rem] text-blood tracking-widest pt-1">
                {layer.num}
              </span>

              <div>
                <h3 className="font-display font-medium text-[1.3rem]">
                  {layer.title}
                </h3>

                <p className="font-mono text-[0.68rem] uppercase tracking-widest text-ink/45 mt-1.5">
                  {layer.question}
                </p>
              </div>

              <p className="text-ink/60 leading-relaxed text-[0.95rem] max-w-[700px]">
                {layer.body}
              </p>
            </div>
          ))}
        </RevealOnScroll>

        <RevealOnScroll className="mt-16">
          <div className="border border-ink/10 p-7 md:p-10">
            <p className="font-mono text-[0.7rem] uppercase tracking-widest text-blood mb-4">
              The principle
            </p>

            <p className="font-display font-medium text-[clamp(1.4rem,3vw,2.1rem)] leading-tight max-w-[850px]">
              Every interaction should have the potential to become part of a
              larger understanding.
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}