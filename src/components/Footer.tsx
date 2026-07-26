import BrandMark from "./BrandMark";

const socialIcons: Record<string, React.ReactNode> = {
  "LinkedIn": (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <line x1="7.5" y1="10" x2="7.5" y2="17" />
      <circle cx="7.5" cy="6.7" r="0.9" fill="currentColor" stroke="none" />
      <path d="M11.5 17v-4.2c0-1.6 1-2.6 2.3-2.6 1.3 0 2.2 1 2.2 2.6V17" />
      <line x1="11.5" y1="10" x2="11.5" y2="17" />
    </svg>
  ),
  "X / Twitter": (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.8">
      <line x1="4" y1="4" x2="20" y2="20" />
      <line x1="20" y1="4" x2="4" y2="20" />
    </svg>
  ),
  "Instagram": (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  ),
  "Facebook": (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M14 21v-7h2.5l.5-3H14V9c0-.9.3-1.5 1.7-1.5H17V4.8c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4V11H8.5v3H11v7" />
    </svg>
  ),
  "WhatsApp": (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M6 18l1.1-3.2A7.5 7.5 0 1 1 10 17.5L6 18Z" />
      <path d="M9.2 9.8c0 3 2.5 5.5 5.5 5.5" />
    </svg>
  ),
};

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
      { label: "LinkedIn", href: "https://www.linkedin.com/in/challaaneesh" },
      { label: "X / Twitter", href: "https://x.com/azennix" },
      { label: "Instagram", href: "https://instagram.com/azennix" },
      { label: "Facebook", href: "https://facebook.com/azennix" },
      { label: "WhatsApp", href: "https://wa.me/919505930257" },
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
                     target={l.href.startsWith("http") ? "_blank" : undefined}
                    rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-2.5 text-[0.9rem] text-paper/65 py-1.5 transition-colors duration-200 hover:text-paper"
                  >
                     {socialIcons[l.label]}
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
