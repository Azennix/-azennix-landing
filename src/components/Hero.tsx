import Link from "next/link";
import HelixCanvas from "./HelixCanvas";
import PixelWordmark from "./PixelWordmark";
export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex items-center overflow-hidden pt-[140px] pb-[100px]"
    >
      <div className="absolute inset-0 z-0 opacity-55">
        <HelixCanvas dot={4} gap={9} amp={0.22} speed={0.0007} accentEvery={19} />
      </div>

      <div className="relative z-10 max-w-[880px] mx-auto px-5 sm:px-8 lg:px-16 w-full">
          <PixelWordmark className="h-8 sm:h-9 w-auto mb-8" />
        <span className="eyebrow">Azennix / Est . India </span>

        <h1 className="font-display font-semibold leading-[1.04] tracking-tight text-[clamp(2.6rem,7vw,5.4rem)] mt-6 mb-6">
          AI systems for
          <br />
          <span className="text-sand">human growth.</span>
        </h1>

        <p className="text-paper/65 max-w-[620px] leading-relaxed text-[clamp(1.02rem,1.6vw,1.28rem)] mb-10">
          Azennix designs intelligence that remembers what matters and
          compounds it into progress. Our flagship system, IRABrain, gives
          Gen&nbsp;Z founders a memory and achievement layer they can trust —
          built to hold their history, not just their to-do list.
        </p>

        <div className="flex flex-wrap gap-4 mb-14">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 font-mono text-xs tracking-wide uppercase px-6 py-4 bg-sand text-ink border border-sand transition-colors duration-200 hover:bg-paper hover:border-paper"
          >
            Request Early Access
          </Link>
          <Link
            href="#irabrain"
            className="inline-flex items-center gap-2 font-mono text-xs tracking-wide uppercase px-6 py-4 border border-sand text-paper transition-colors duration-200 hover:bg-sand hover:text-ink"
          >
            Meet IRABrain
          </Link>
        </div>

        <div className="flex flex-wrap gap-x-7 gap-y-2 font-mono text-[0.74rem] text-paper/65 tracking-wide">
          {[
            "Founded by Aneesh",
            "Product — IRABrain",
            "Assistant — IRA",
            "Trust-based memory",
          ].map((tag) => (
            <span key={tag} className="relative pl-4">
              <span className="absolute left-0 top-[0.5em] w-1.5 h-px bg-sand" />
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
