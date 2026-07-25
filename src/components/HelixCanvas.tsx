"use client";

import { useEffect, useRef } from "react";

type HelixCanvasProps = {
  dot?: number;
  gap?: number;
  amp?: number;
  speed?: number;
  accentEvery?: number;
  className?: string;
};

export default function HelixCanvas({
  dot = 4,
  gap = 10,
  amp = 0.26,
  speed = 0.0009,
  accentEvery = 17,
  className = "",
}: HelixCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const effectiveSpeed = reduced ? 0 : speed;

    let w = 0;
    let h = 0;
    let raf = 0;

    function size() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas!.clientWidth;
      h = canvas!.clientHeight;
      canvas!.width = w * dpr;
      canvas!.height = h * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    size();
    window.addEventListener("resize", size);

    const t0 = performance.now();

    function frame(t: number) {
      const dt = t - t0;
      ctx!.clearRect(0, 0, w, h);
      const rows = Math.ceil(h / gap) + 2;
      for (let i = 0; i < rows; i++) {
        const y = i * gap;
        const phase = y * 0.045 + dt * effectiveSpeed;
        const cx = w / 2;
        const x1 = cx + Math.sin(phase) * w * amp;
        const x2 = cx + Math.sin(phase + Math.PI) * w * amp;
        const alpha1 = 0.35 + 0.65 * ((Math.cos(phase) + 1) / 2);
        const alpha2 = 0.35 + 0.65 * ((Math.cos(phase + Math.PI) + 1) / 2);

        ctx!.fillStyle =
          i % accentEvery === 0
            ? `rgba(139,0,0,${alpha1.toFixed(2)})`
            : `rgba(216,195,165,${alpha1.toFixed(2)})`;
        ctx!.fillRect(x1 - dot / 2, y - dot / 2, dot, dot);

        ctx!.fillStyle =
          i % accentEvery === Math.floor(accentEvery / 2)
            ? `rgba(139,0,0,${alpha2.toFixed(2)})`
            : `rgba(216,195,165,${alpha2.toFixed(2)})`;
        ctx!.fillRect(x2 - dot / 2, y - dot / 2, dot, dot);

        if (i % 3 === 0) {
          ctx!.fillStyle = "rgba(216,195,165,0.10)";
          ctx!.fillRect(
            Math.min(x1, x2) + dot,
            y - 0.5,
            Math.abs(x2 - x1) - dot * 2,
            1
          );
        }
      }
      raf = requestAnimationFrame(frame);
    }
    raf = requestAnimationFrame(frame);

    return () => {
      window.removeEventListener("resize", size);
      cancelAnimationFrame(raf);
    };
  }, [dot, gap, amp, speed, accentEvery]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={className}
      style={{ width: "100%", height: "100%" }}
    />
  );
}
