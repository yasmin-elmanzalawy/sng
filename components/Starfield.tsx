"use client";

import { useEffect, useRef } from "react";

export default function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let stars: any[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const count = Math.min(
        110,
        Math.floor(
          (window.innerWidth * window.innerHeight) / 9000
        )
      );

      stars = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.4 + 0.3,
        speed: Math.random() * 0.15 + 0.03,
        twinkleSpeed: Math.random() * 0.012 + 0.003,
        twinklePhase: Math.random() * Math.PI * 2,
      }));
    };

    let animationFrame: number;

    const draw = (t: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((s) => {
        s.y -= s.speed;

        if (s.y < -5) {
          s.y = canvas.height + 5;
          s.x = Math.random() * canvas.width;
        }

        const alpha =
          0.35 +
          0.45 *
            Math.sin(
              t * s.twinkleSpeed + s.twinklePhase
            );

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);

        ctx.fillStyle = `rgba(200,170,255,${Math.max(
          0,
          alpha
        )})`;

        ctx.fill();
      });

      animationFrame =
        requestAnimationFrame(draw);
    };

    resize();
    draw(0);

    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener(
        "resize",
        resize
      );
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
    />
  );
}