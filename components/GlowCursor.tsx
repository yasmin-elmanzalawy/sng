"use client";

import { useEffect, useState } from "react";

export default function GlowCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({
        x: e.clientX,
        y: e.clientY,
      });
      setVisible(true);
    };

    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-10 h-[420px] w-[420px] rounded-full transition-opacity duration-300"
      style={{
        left: pos.x,
        top: pos.y,
        opacity: visible ? 1 : 0,
        transform: "translate(-50%, -50%)",
        background:
          "radial-gradient(circle, rgba(168,85,247,0.14), transparent 70%)",
      }}
    />
  );
}