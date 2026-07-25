"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import BrandMark from "./BrandMark";

const links = [
  { href: "/company", label: "Company", num: "01" },
  { href: "/#irabrain", label: "IRABrain", num: "02" },
  { href: "/research", label: "Research", num: "03" },
  { href: "/#approach", label: "Approach", num: "04" },
  { href: "/#contact", label: "Contact", num: "05" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      {/* Toggle: 4 pixel squares that morph into an X */}
      <button
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="md:hidden relative w-9 h-9 shrink-0"
      >
        <span
          className="absolute bg-sand transition-all duration-300 ease-out"
          style={{
            width: 10,
            height: 10,
            top: open ? "50%" : 4,
            left: open ? "50%" : 4,
            transform: open
              ? "translate(-50%,-50%) rotate(45deg)"
              : "translate(0,0) rotate(0deg)",
          }}
        />
        <span
          className="absolute bg-sand transition-all duration-300 ease-out"
          style={{
            width: 10,
            height: 10,
            top: open ? "50%" : 4,
            right: open ? "50%" : 4,
            transform: open
              ? "translate(50%,-50%) rotate(-45deg)"
              : "translate(0,0) rotate(0deg)",
          }}
        />
        <span
          className="absolute bg-sand transition-all duration-300 ease-out"
          style={{
            width: 10,
            height: 10,
            bottom: open ? "50%" : 4,
            left: open ? "50%" : 4,
            transform: open
              ? "translate(-50%,50%) rotate(-45deg)"
              : "translate(0,0) rotate(0deg)",
          }}
        />
        <span
          className="absolute bg-blood transition-all duration-300 ease-out"
          style={{
            width: 10,
            height: 10,
            bottom: open ? "50%" : 4,
            right: open ? "50%" : 4,
            transform: open
              ? "translate(50%,50%) rotate(45deg)"
              : "translate(0,0) rotate(0deg)",
          }}
        />
      </button>

      {/* Full-screen overlay panel */}
      <div
        className={`fixed inset-0 z-40 bg-ink transition-opacity duration-300 md:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="h-full flex flex-col px-6 pt-24 pb-10">
          <div className="mb-10">
            <BrandMark className="w-10 h-10" />
          </div>

          <nav className="flex-1 flex flex-col justify-center gap-1">
            {links.map((l, i) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="group flex items-baseline gap-4 py-4 border-t border-paper/10 last:border-b"
                style={{
                  transitionDelay: open ? `${i * 60}ms` : "0ms",
                  opacity: open ? 1 : 0,
                  transform: open ? "translateY(0)" : "translateY(10px)",
                  transitionProperty: "opacity, transform",
                  transitionDuration: "400ms",
                }}
              >
                <span className="font-mono text-xs text-blood">{l.num}</span>
                <span className="font-display text-2xl group-hover:text-sand transition-colors">
                  {l.label}
                </span>
              </Link>
            ))}
          </nav>

          <p className="font-mono text-[0.7rem] text-paper/50 tracking-wide">
            AI Systems for Human Growth
          </p>
        </div>
      </div>
    </>
  );
}
