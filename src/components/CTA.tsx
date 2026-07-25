"use client";

import { useState } from "react";

export default function CTA() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section
      id="contact"
      className="bg-ink text-paper py-28 lg:py-32 text-center relative"
    >
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-16">
        <span className="eyebrow justify-center">Get Involved</span>
        <h2 className="font-display font-semibold text-[clamp(2.1rem,5vw,3.6rem)] mt-6 mb-5">
          Be first to use IRABrain.
        </h2>
        <p className="text-paper/65 max-w-[560px] mx-auto mb-11 text-[1.05rem] leading-relaxed">
          We&apos;re building in deliberate stages. Leave your email and
          we&apos;ll reach out as early access opens — no spam, no noise.
        </p>

        <form
          className="flex flex-wrap gap-3 justify-center max-w-[520px] mx-auto"
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
        >
          <input
            type="email"
            required
            placeholder="you@domain.com"
            aria-label="Email address"
            className="flex-1 min-w-[260px] bg-transparent border border-paper/10 text-paper placeholder:text-paper/50 px-5 py-4 text-[0.92rem]"
          />
          <button
            type="submit"
            disabled={submitted}
            className="inline-flex items-center gap-2 font-mono text-xs tracking-wide uppercase px-6 py-4 border border-blood transition-colors duration-200 hover:bg-blood hover:text-paper cursor-pointer disabled:opacity-70 disabled:cursor-default"
          >
            {submitted ? "Request Received" : "Notify Me"}
          </button>
        </form>
        <p className="mt-4 font-mono text-[0.72rem] text-paper/60 tracking-wide">
          This form is a front-end preview and isn&apos;t yet wired to a
          backend or mailing list.
        </p>
      </div>
    </section>
  );
}
