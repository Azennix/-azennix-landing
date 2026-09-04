import BrandMark from "./BrandMark";
import PixelWordmark from "./PixelWordmark";

const socialIcons: Record<string, React.ReactNode> = {
  "LinkedIn": (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="currentColor"
      className="shrink-0"
    >
      <path d="M4.6 3.5A2.1 2.1 0 1 1 4.6 7.7 2.1 2.1 0 0 1 4.6 3.5ZM3 9h3.2v11H3V9Zm5.2 0h3.1v1.5h.1c.4-.8 1.5-1.9 3.3-1.9 3.5 0 4.1 2.3 4.1 5.3V20h-3.2v-5.4c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9V20H8.2V9Z" />
    </svg>
  ),

  "X / Twitter": (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="currentColor"
      className="shrink-0"
    >
      <path d="M5 4h3.5l4 5.2L16.8 4H19l-5.5 6.4L19.5 20H16l-4.3-5.6L6.7 20H4.5l5.8-6.8L5 4Zm3.2 1.7H7.1l8.8 12.6h1.1L8.2 5.7Z" />
    </svg>
  ),

  "Instagram": (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="currentColor"
      className="shrink-0"
    >
      <path
        fillRule="evenodd"
        d="M7.2 2.5h9.6A4.7 4.7 0 0 1 21.5 7.2v9.6a4.7 4.7 0 0 1-4.7 4.7H7.2a4.7 4.7 0 0 1-4.7-4.7V7.2a4.7 4.7 0 0 1 4.7-4.7Zm0 2.4A2.3 2.3 0 0 0 4.9 7.2v9.6a2.3 2.3 0 0 0 2.3 2.3h9.6a2.3 2.3 0 0 0 2.3-2.3V7.2a2.3 2.3 0 0 0-2.3-2.3H7.2Zm4.8 2.5a4.8 4.8 0 1 1 0 9.6 4.8 4.8 0 0 1 0-9.6Zm0 2.4a2.4 2.4 0 1 0 0 4.8 2.4 2.4 0 0 0 0-4.8Zm5.1-2.9a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z"
        clipRule="evenodd"
      />
    </svg>
  ),

  "Facebook": (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="currentColor"
      className="shrink-0"
    >
      <path d="M13.5 21v-7h2.4l.4-2.9h-2.8V9.2c0-.8.2-1.4 1.5-1.4h1.5V5.2c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2H8v2.9h2.3v7h3.2Z" />
    </svg>
  ),

  "YouTube": (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="currentColor"
      className="shrink-0"
    >
      <path d="M23 12c0-2.2-.3-4.1-.7-5.3-.4-1.3-1.4-2.2-2.7-2.5C17.9 3.8 15.5 3.7 12 3.7s-5.9.1-7.6.5C3.1 4.5 2.1 5.4 1.7 6.7 1.3 7.9 1 9.8 1 12s.3 4.1.7 5.3c.4 1.3 1.4 2.2 2.7 2.5 1.7.4 4.1.5 7.6.5s5.9-.1 7.6-.5c1.3-.3 2.3-1.2 2.7-2.5.4-1.2.7-3.1.7-5.3Zm-13.5 3.4V8.6l6 3.4-6 3.4Z" />
    </svg>
  ),

  "WhatsApp": (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="currentColor"
      className="shrink-0"
    >
      <path d="M12 2.5a9.5 9.5 0 0 0-8.2 14.3L2.5 21.5l4.9-1.3A9.5 9.5 0 1 0 12 2.5Zm0 16.7a7.2 7.2 0 0 1-3.7-1l-.3-.2-2.9.8.8-2.8-.2-.3A7.2 7.2 0 1 1 12 19.2Zm4-5.3c-.2-.1-1.3-.7-1.5-.8-.2-.1-.4-.1-.5.1-.2.2-.5.8-.6.9-.1.2-.3.2-.5.1-1.4-.7-2.3-1.3-3.2-2.8-.2-.3.2-.3.6-1 .1-.2.1-.3 0-.5l-.7-1.7c-.2-.5-.4-.4-.5-.4h-.4c-.2 0-.5.1-.7.3-.2.2-.8.8-.8 1.9s.8 2.2.9 2.3c.1.2 1.6 2.5 3.9 3.5 1.4.6 1.4.4 1.7.4.5-.1 1.5-.6 1.7-1.2.2-.5.2-1 .1-1.1Z" />
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
      { label: "YouTube", href: "https://youtube.com/@azennix" },
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
             <PixelWordmark className="w-[120px] h-auto" />
              
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
                    rel={
                      l.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
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