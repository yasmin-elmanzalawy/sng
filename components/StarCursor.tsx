"use client";

import { useEffect } from "react";
import gsap from "gsap";

export default function StarCursor() {
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    if (prefersReduced || !finePointer) return;

    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    window.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    // ✨ single "star particle"
    const star = document.createElement("div");
    star.className = "star-cursor";
    document.body.appendChild(star);

    let pos = { x: mouse.x, y: mouse.y };
    let vel = { x: 0, y: 0 };

    gsap.ticker.add(() => {
      // gravity-like pull toward mouse
      vel.x += (mouse.x - pos.x) * 0.08;
      vel.y += (mouse.y - pos.y) * 0.08;

      // damping (smooth inertia)
      vel.x *= 0.82;
      vel.y *= 0.82;

      pos.x += vel.x;
      pos.y += vel.y;

      gsap.set(star, {
        x: pos.x,
        y: pos.y,
        scale: 1 + Math.min(0.6, Math.abs(vel.x + vel.y) * 0.01),
      });
    });

    return () => {
      star.remove();
    };
  }, []);

  return null;
}