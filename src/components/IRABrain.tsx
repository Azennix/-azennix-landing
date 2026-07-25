import RevealOnScroll from "./RevealOnScroll";

const pillars = [
  {
    num: "01",
    title: "Remembers",
    body: "Keeps a founder's goals, streaks, and history in one place instead of scattered across notes apps.",
  },
  {
    num: "02",
    title: "Understands",
    body: "Reads context before giving advice, so guidance fits where you actually are — not a generic script.",
  },
  {
    num: "03",
    title: "Grows with you",
    body: "Tracks multiple goals side by side and adjusts as priorities shift, week over week.",
  },
  {
    num: "04",
    title: "Earns trust",
    body: "Built on the principle that a memory system should be transparent about what it keeps and why.",
  },
];

export default function IRABrain() {
  return (
    <section id="irabrain" className="py-24 lg:py-28">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-16">
        <RevealOnScroll className="max-w-[680px] mb-16">
          <span className="eyebrow">Flagship Product</span>
          <h2 className="font-display font-semibold text-[clamp(1.9rem,4vw,3rem)] mt-5 mb-5">
            IRABrain — the memory and
            <br />
            achievement OS.
          </h2>
          <p className="text-paper/65 leading-relaxed text-[1.05rem]">
            Most productivity tools track tasks. IRABrain tracks the founder:
            what they&apos;ve tried, what they&apos;ve learned, and how far
            they&apos;ve come — surfaced back to them by IRA, an assistant
            built to be asked, not just obeyed.
          </p>
        </RevealOnScroll>

        <RevealOnScroll
          className="border border-paper/10 p-6 sm:p-10 lg:p-14"
          
        >
          <div
            className="p-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(216,195,165,0.06), transparent 60%)",
            }}
          >
            <div className="flex flex-wrap justify-between items-start gap-6 mb-9">
              <div className="font-display font-semibold text-[clamp(1.8rem,4vw,2.6rem)]">
                IRA<span className="text-paper/65 font-normal">Brain</span>
              </div>
              <div className="font-mono text-[0.76rem] border border-sand text-sand px-4 py-2">
                Wake word — &quot;Hey IRA&quot;
              </div>
            </div>

            <p className="text-paper/65 max-w-[64ch] leading-relaxed text-[1rem] mb-9">
              IRA — the Intelligent Response Agent — is the voice of
              IRABrain. Where a generic assistant answers a question and
              forgets it, IRA is designed to hold the thread: your goals last
              month, the streak you&apos;re protecting this week, and the
              pattern only visible over time.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-px bg-paper/10 border border-paper/10">
              {pillars.map((p) => (
                <div key={p.num} className="bg-ink p-7">
                  <span className="font-mono text-[0.72rem] text-sand tracking-widest block mb-4">
                    {p.num}
                  </span>
                  <h4 className="font-display text-[1.15rem] mb-2.5">
                    {p.title}
                  </h4>
                  <p className="text-[0.9rem] text-paper/65 leading-relaxed">
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
