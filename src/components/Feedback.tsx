"use client";

import { useState } from "react";

export default function Feedback() {
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    const body = new URLSearchParams();
    data.forEach((value, key) => body.append(key, value.toString()));

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      setStatus("done");
    } catch {
      setStatus("idle");
    }
  }

  return (
    <section id="feedback" className="bg-paper text-ink py-24 lg:py-28">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-16">
        <div className="max-w-[680px] mb-14">
          <span className="eyebrow eyebrow-light">Tell Us What You Think</span>
          <h2 className="font-display font-semibold text-[clamp(1.9rem,4vw,3rem)] mt-5 mb-5">
            What do you want from AI?
          </h2>
          <p className="text-ink/60 leading-relaxed text-[1.05rem]">
            Good or critical, tell us honestly. Every reply here reaches our
            team directly and shapes what we build next.
          </p>
        </div>

        <div className="max-w-[640px] border border-ink/10 p-6 sm:p-10">
          {status === "done" ? (
            <div className="py-10 text-center">
              <span className="eyebrow eyebrow-light justify-center">
                Received
              </span>
              <p className="font-display text-xl mt-4">
                Thanks — that means a lot.
              </p>
              <p className="text-ink/60 text-sm mt-2">
                We read every single one of these.
              </p>
            </div>
          ) : (
            <form
              name="feedback"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="flex flex-col gap-5"
            >
              {/* Required for Netlify's static form detection */}
              <input type="hidden" name="form-name" value="feedback" />
              <p className="hidden">
                <label>
                  Don&apos;t fill this out: <input name="bot-field" />
                </label>
              </p>

              <div>
                <label className="block font-mono text-[0.72rem] uppercase tracking-wide text-ink/50 mb-2">
                  What do you think about AI right now?
                </label>
                <textarea
                  name="thoughts"
                  required
                  rows={3}
                  className="w-full bg-transparent border border-ink/15 px-4 py-3 text-[0.95rem] placeholder:text-ink/35 focus:outline-none focus:border-blood"
                  placeholder="Excited, worried, indifferent — your honest take..."
                />
              </div>

              <div>
                <label className="block font-mono text-[0.72rem] uppercase tracking-wide text-ink/50 mb-2">
                  What features would you want?
                </label>
                <textarea
                  name="features"
                  required
                  rows={3}
                  className="w-full bg-transparent border border-ink/15 px-4 py-3 text-[0.95rem] placeholder:text-ink/35 focus:outline-none focus:border-blood"
                  placeholder="Something IRABrain should do, a problem it should solve..."
                />
              </div>

              <div>
                <label className="block font-mono text-[0.72rem] uppercase tracking-wide text-ink/50 mb-2">
                  Email (optional, if you want a reply)
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full bg-transparent border border-ink/15 px-4 py-3 text-[0.95rem] placeholder:text-ink/35 focus:outline-none focus:border-blood"
                  placeholder="you@domain.com"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="self-start inline-flex items-center gap-2 font-mono text-xs tracking-wide uppercase px-6 py-4 bg-ink text-paper transition-colors duration-200 hover:bg-blood disabled:opacity-60 cursor-pointer"
              >
                {status === "sending" ? "Sending..." : "Send Feedback"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}