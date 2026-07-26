import Link from "next/link";
import BrandMark from "./BrandMark";
import MobileMenu from "./MobileMenu";

const links = [
  { href: "/company", label: "Company" },
  { href: "/#irabrain", label: "IRABrain" },
  { href: "/research", label: "Research" },
  { href: "/#approach", label: "Approach" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header
  className="
    sticky
    top-0
    z-50

    bg-ink/85 
   

    border-b
    border-white/10
  "
>
      <nav className="max-w-[1240px] mx-auto flex items-center justify-between px-5 sm:px-8 lg:px-16 py-4">
        <Link
          href="/"
          className="flex items-center gap-3 font-display font-semibold text-[1.05rem] tracking-tight"
        >
          <BrandMark className="w-[30px] h-[30px] shrink-0" />
          AZENNIX
        </Link>

        <div className="hidden md:flex items-center gap-9 text-sm font-medium text-paper/65">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="transition-colors duration-200 hover:text-sand"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/#contact"
            className="hidden sm:inline-flex items-center gap-2 font-mono text-xs tracking-wide uppercase px-5 py-3 bg-sand text-ink border border-sand transition-colors duration-200 hover:bg-paper hover:border-paper whitespace-nowrap"
          >
            Request Access
          </Link>
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
}
