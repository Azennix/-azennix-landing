# Azennix — Website

Real Next.js + Tailwind CSS site for Azennix, home of IRABrain.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build for production

```bash
npm run build
npm start
```

## Project structure

```
src/
  app/
    layout.tsx      — root layout, metadata, Google Fonts
    page.tsx        — assembles all homepage sections
    globals.css      — design tokens (colors, fonts) via Tailwind v4 @theme
  components/
    Header.tsx        — sticky nav
    Hero.tsx           — hero section with animated helix background
    About.tsx          — company section
    IRABrain.tsx        — flagship product section
    Approach.tsx        — "how we build" section
    Founder.tsx          — founder note
    CTA.tsx               — waitlist form (client component)
    Footer.tsx
    HelixCanvas.tsx       — reusable animated pixel-DNA canvas
    ScrollStrand.tsx       — fixed scroll-progress strand (desktop only)
    RevealOnScroll.tsx      — scroll-reveal wrapper
    BrandMark.tsx             — pixel "A" logo mark
```

## Design tokens

Colors are defined in `src/app/globals.css` under `@theme`:

- `--color-ink`   `#1A1A1A`
- `--color-paper` `#F5F5F2`
- `--color-sand`  `#D8C3A5`
- `--color-blood` `#8B0000`

Use them as Tailwind utilities: `bg-ink`, `text-sand`, `border-blood`, etc.

## Next steps

- Wire the waitlist form in `CTA.tsx` to a real backend or email service.
- Replace the placeholder pixel brand mark with the final purchased DNA-helix logo file.
- Deploy on Vercel, Netlify, or any Node host that supports Next.js.
