"use client";

import { useEffect, useRef } from "react";

export default function ScrollStrand() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;

    function size() {
      const dpr = window.devicePixelRatio || 1;
      canvas!.width = canvas!.clientWidth * dpr;
      canvas!.height = canvas!.clientHeight * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    size();
    window.addEventListener("resize", size);

    function draw() {
      const w = canvas!.clientWidth;
      const h = canvas!.clientHeight;
      const progress =
        window.scrollY / (document.body.scrollHeight - window.innerHeight || 1);
      ctx!.clearRect(0, 0, w, h);
      const gap = 10;
      const dot = 4;
      const rows = Math.ceil(h / gap);
      for (let i = 0; i < rows; i++) {
        const y = i * gap;
        const phase = y * 0.05;
        const x1 = w / 2 + Math.sin(phase) * w * 0.32;
        const x2 = w / 2 + Math.sin(phase + Math.PI) * w * 0.32;
        const lit = y / h < progress;
        ctx!.fillStyle = lit ? "rgba(238, 227, 209, 0.9)" : "rgba(238, 227, 209, 0.22)";
        ctx!.fillRect(x1 - dot / 2, y, dot, dot);
        ctx!.fillStyle = lit
          ? "rgba(238, 227, 209, 0.9)"
          : "rgba(238, 227, 209, 0.14)";
        ctx!.fillRect(x2 - dot / 2, y, dot, dot);
      }
      raf = requestAnimationFrame(draw);
    }
    raf = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", size);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed right-4 top-0 h-screen w-6 z-40 pointer-events-none hidden md:block"
    />
  );
}
