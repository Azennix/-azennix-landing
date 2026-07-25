import BrandMark from "./BrandMark";

const columns = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/company" },
      { label: "Founder", href: "/company#founder" },
      { label: "Contact", href: "/#contact" },
    ],
  },
  {
    title: "Product",
    links: [
      { label: "IRABrain", href: "/#irabrain" },
      { label: "Research", href: "/research" },
      { label: "Approach", href: "/#approach" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Get in touch", href: "/#contact" },
      { label: "LinkedIn", href: "/#contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink border-t border-paper/10 pt-14 pb-10">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-16">
        <div className="flex flex-wrap justify-between gap-9 mb-12">
          <div className="max-w-[320px]">
            <div className="flex items-center gap-3 font-display font-semibold text-[1.15rem]">
              <BrandMark className="w-[30px] h-[30px]" />
              AZENNIX
            </div>
            <p className="text-paper/65 text-[0.9rem] mt-3.5 leading-relaxed">
              AI systems for human growth. Building IRABrain, the memory and
              achievement OS for Gen&nbsp;Z founders — from Kakinada, India.
            </p>
          </div>

          <div className="flex flex-wrap gap-14">
            {columns.map((col) => (
              <div key={col.title}>
                <h5 className="font-mono text-[0.72rem] tracking-widest uppercase text-sand mb-4">
                  {col.title}
                </h5>
                {col.links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    className="block text-[0.9rem] text-paper/65 py-1.5 transition-colors duration-200 hover:text-paper"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-4 pt-7 border-t border-paper/10 font-mono text-[0.72rem] text-paper/65 tracking-wide">
          <span>© 2026 Azennix. All rights reserved.</span>
          <span>AI Systems for Human Growth</span>
        </div>
      </div>
    </footer>
  );
}
