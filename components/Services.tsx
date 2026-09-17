"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const SERVICES = [
  {
    id: "community",
    title: "Gaming Community Management",
    description:
      "Seamless setup, efficient management, and valuable consultation for gaming communities and Discord servers.",
    tags: ["Discord Setup", "Community Growth", "Consultation"],
    side: "left",
    image: "/services/gm.webp",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path
          d="M17 20c0-2.76-2.24-5-5-5s-5 2.24-5 5M12 12a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM3 15c.5-1.5 1.8-2.5 3.2-2.5M21 15c-.5-1.5-1.8-2.5-3.2-2.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "content",
    title: "Content Creation, Voice Over & Script Writing",
    description:
      "High quality creation of gaming content including engaging voice overs and well crafted scripts.",
    tags: ["Voice Over", "Scriptwriting", "Content Strategy"],
    side: "left",
    image: "/services/cvr.webp",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path
          d="M12 15a3 3 0 0 0 3-3V6a3 3 0 0 0-6 0v6a3 3 0 0 0 3 3ZM19 11a7 7 0 0 1-14 0M12 18v3"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "social",
    title: "Gaming Social Media Management",
    description:
      "Skillful team for client social media platforms with a dedicated focus on gaming content.",
    tags: ["Social Strategy", "Gaming Focus", "Dedicated Team"],
    side: "left",
    image: "/services/gsm.webp",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path
          d="M18 8a3 3 0 1 0-2.83-4M18 16a3 3 0 1 0-2.83 4M6 12a3 3 0 1 0 0 0ZM8.6 10.5l6.8-4M8.6 13.5l6.8 4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "tournament",
    title: "Tournament Operation / Hosting",
    description:
      "Expert management and execution of gaming tournaments and events with 5+ years of experience.",
    tags: ["5+ Years Experience", "Full Event Ops", "Live Hosting"],
    side: "right",
    image: "/services/th.webp",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path
          d="M8 21h8M12 17v4M6 4h12v3a6 6 0 0 1-12 0V4ZM6 6H4a2 2 0 0 0 0 4h1M18 6h2a2 2 0 0 1 0 4h-1"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "assets",
    title: "Assets Creation & Video Editing",
    description: "Innovative and captivating design for gaming assets.",
    tags: ["Motion Graphics", "Video Editing", "Visual Design"],
    side: "right",
    image: "/services/av.webp",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path
          d="M4 5h12v10H4V5ZM16 9l4-2v10l-4-2M8 15v3M12 15v3M6 18h8"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const curveOffset = (index: number, count: number, side: "left" | "right") => {
  const t = count === 1 ? 0.5 : index / (count - 1);
  const bow = Math.sin(t * Math.PI) * 26;
  return side === "left" ? -bow : bow;
};

export default function Services() {
  const [activeId, setActiveId] = useState(SERVICES[1].id);
  const active = SERVICES.find((s) => s.id === activeId)!;
  const activeIndex = SERVICES.findIndex((s) => s.id === activeId);

  const leftServices = SERVICES.filter((s) => s.side === "left");
  const rightServices = SERVICES.filter((s) => s.side === "right");

  const rowRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const iconRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const [connector, setConnector] = useState({
    dotTop: 0,
    dotLeft: 0,
    h1Top: 0,
    h1Left: 0,
    h1Width: 0,
    vLeft: 0,
    vTop: 0,
    vHeight: 0,
    h2Top: 0,
    h2Left: 0,
    h2Width: 0,
    side: "left" as "left" | "right",
  });

  // Automatically switch service every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveId((prevId) => {
        const currentIndex = SERVICES.findIndex((s) => s.id === prevId);
        const nextIndex = (currentIndex + 1) % SERVICES.length;
        return SERVICES[nextIndex].id;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Connector calculation logic
  useEffect(() => {
    const update = () => {
      const rowEl = rowRef.current;
      const iconEl = iconRefs.current[activeId];
      const cardEl = cardRef.current;
      if (!rowEl || !iconEl || !cardEl) return;

      const rowRect = rowEl.getBoundingClientRect();
      const iconRect = iconEl.getBoundingClientRect();
      const cardRect = cardEl.getBoundingClientRect();

      const side = active.side as "left" | "right";

      const dotTop = iconRect.top - rowRect.top + iconRect.height / 2;
      const dotLeft =
        side === "left"
          ? iconRect.right - rowRect.left + 4
          : iconRect.left - rowRect.left - 4;

      const gapOffset = 20;
      const hubLeft =
        side === "left"
          ? cardRect.left - rowRect.left - gapOffset
          : cardRect.right - rowRect.left + gapOffset;

      const cardEdgeLeft =
        side === "left"
          ? cardRect.left - rowRect.left
          : cardRect.right - rowRect.left;

      const targetTop = cardRect.top - rowRect.top + 48;

      setConnector({
        dotTop,
        dotLeft,
        h1Top: dotTop,
        h1Left: Math.min(dotLeft, hubLeft),
        h1Width: Math.abs(hubLeft - dotLeft),
        vLeft: hubLeft,
        vTop: Math.min(dotTop, targetTop),
        vHeight: Math.abs(targetTop - dotTop),
        h2Top: targetTop,
        h2Left: Math.min(hubLeft, cardEdgeLeft),
        h2Width: Math.abs(cardEdgeLeft - hubLeft),
        side,
      });
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [activeId, active.side]);

  const renderIconColumn = (services: typeof SERVICES, side: "left" | "right") => (
    <div className="flex flex-col items-center gap-6">
      {services.map((service, i) => {
        const isActive = service.id === activeId;
        const offset = curveOffset(i, services.length, side);
        return (
          <button
            key={service.id}
            ref={(el) => {
              iconRefs.current[service.id] = el;
            }}
            onClick={() => setActiveId(service.id)}
            aria-label={service.title}
            className={`group relative flex items-center justify-center transition-all duration-300 focus:outline-none ${
              isActive ? "scale-110 drop-shadow-[0_0_25px_rgba(192,132,252,0.8)]" : "opacity-75 hover:opacity-100"
            }`}
            style={{
              transform: `translateX(${offset}px)`,
              transition: "transform 0.4s ease-out, opacity 0.3s ease",
            }}
          >
            <div className="relative h-32 w-32 sm:h-40 sm:w-40">
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width: 640px) 128px, 160px"
                className="object-contain"
                priority
              />
            </div>
          </button>
        );
      })}
    </div>
  );

  return (
    <section className="relative w-full overflow-hidden px-6 py-12 sm:py-2">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-0 flex flex-col items-center justify-center text-center">
          <h2 className="title-font text-white">SERVICES</h2>

          {/* Decorative line with center star */}
          <div className="mt-3 flex items-center justify-center gap-3">
            <span className="h-[1px] w-12 bg-gradient-to-r from-transparent via-[#a855f7]/60 to-[#F9C275]" />
            <span className="text-xs text-[#F9C275]">✦</span>
            <span className="h-[1px] w-12 bg-gradient-to-l from-transparent via-[#a855f7]/60 to-[#F9C275]" />
          </div>

          {/* Solid White Subheading */}
          <p
            className="p-font mt-6 text-xl font-semibold tracking-tight text-white/90 sm:text-2xl"
            style={{ textAlign: "center" }}
          >
            Customizable Services that suit your needs.
          </p>

          {/* Gradient Description */}
          <p
            className="p-font mt-2 max-w-xl bg-gradient-to-r from-purple-200 via-purple-300 to-amber-200 bg-clip-text text-transparent sm:text-lg"
            style={{ textAlign: "center", marginLeft: "auto", marginRight: "auto" }}
          >
            From content to community, we help you build, grow and shine in the gaming universe.
          </p>
        </div>

        {/* Desktop Layout */}
        <div ref={rowRef} className="relative hidden items-center justify-center gap-12 lg:flex">
          {renderIconColumn(leftServices, "left")}

          {/* GRADIENT BORDER CONTAINER */}
          <div
            ref={cardRef}
            className="relative w-full max-w-xl rounded-[36px] p-[1.5px] bg-gradient-to-r from-[#8b5cf6] via-[#ec4899] to-[#6366f1] shadow-[0_0_50px_rgba(168,85,247,0.4)]"
          >
            {/* INNER CONTENT CARD */}
            <div className="relative h-full w-full overflow-hidden rounded-[34px] bg-[#0d071d]/90 p-8 backdrop-blur-2xl sm:p-10">
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-purple-600/20 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-indigo-600/15 blur-3xl" />

              <div key={active.id} className="service-fade relative z-10">
                {/* Header Row */}
                <div className="square-px mb-6 flex flex-wrap items-center gap-3">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-purple-300 shadow-inner">
                    {active.icon}
                  </span>

                  <div className="flex flex-1 items-center justify-between rounded-full border border-purple-500/30 bg-purple-950/40 px-5 py-2.5 shadow-[0_0_20px_rgba(168,85,247,0.15)]">
                    <span className="font-semibold text-purple-100 sm:text-base">
                      {active.title}
                    </span>
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-purple-500 text-white shadow-[0_0_12px_rgba(168,85,247,0.8)]">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="p-font mb-6 flex flex-wrap gap-2">
                  {active.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-purple-200/80 backdrop-blur-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="p-font max-w-xl leading-relaxed text-gray-300/90 sm:text-base">
                  {active.description}
                </p>

                {/* Indicators */}
                <div className="mt-8 flex items-center gap-2">
                  {SERVICES.map((item, i) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveId(item.id)}
                      aria-label={`Go to slide ${i + 1}`}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        i === activeIndex
                          ? "w-8 bg-gradient-to-r from-purple-400 to-indigo-400 shadow-[0_0_10px_rgba(192,132,252,0.8)]"
                          : "w-2 bg-white/20 hover:bg-white/40"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {renderIconColumn(rightServices, "right")}

          {/* Dotted Connectors */}
          <span
            className="pointer-events-none absolute z-10 h-2 w-2 rounded-full bg-[#c084fc] shadow-[0_0_8px_rgba(192,132,252,0.8)] transition-all duration-400 ease-out"
            style={{ top: connector.dotTop - 4, left: connector.dotLeft - 4 }}
          />
          <span
            className="pointer-events-none absolute z-10 border-t border-dashed border-[#c084fc]/50 transition-all duration-400 ease-out"
            style={{ top: connector.h1Top, left: connector.h1Left, width: connector.h1Width }}
          />
          <span
            className="pointer-events-none absolute z-10 border-l border-dashed border-[#c084fc]/50 transition-all duration-400 ease-out"
            style={{ top: connector.vTop, left: connector.vLeft, height: connector.vHeight }}
          />
          <span
            className="pointer-events-none absolute z-10 border-t border-dashed border-[#c084fc]/50 transition-all duration-400 ease-out"
            style={{ top: connector.h2Top, left: connector.h2Left, width: connector.h2Width }}
          />
        </div>

        {/* Mobile View */}
        <div className="flex flex-wrap justify-center gap-4 lg:hidden">
          {SERVICES.map((service) => {
            const isActive = service.id === activeId;
            return (
              <button
                key={service.id}
                onClick={() => setActiveId(service.id)}
                aria-label={service.title}
                className={`relative flex items-center justify-center transition-transform ${
                  isActive ? "scale-110 drop-shadow-[0_0_15px_rgba(192,132,252,0.6)]" : "opacity-70"
                }`}
              >
                <div className="relative h-24 w-24">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="96px"
                    className="object-contain"
                  />
                </div>
              </button>
            );
          })}
        </div>

        {/* Mobile Card Box with p-font and square-px applied */}
        <div className="mt-8 lg:hidden">
          <div className="relative rounded-3xl p-[1.5px] bg-gradient-to-r from-[#8b5cf6] via-[#ec4899] to-[#6366f1] shadow-[0_0_30px_rgba(168,85,247,0.3)]">
            <div className="relative overflow-hidden rounded-[22.5px] bg-[#0d071d]/90 p-6 backdrop-blur-xl sm:p-8">
              <div key={active.id + "-mobile"} className="service-fade relative z-10">
                {/* Header Row */}
                <div className="square-px mb-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-purple-300">
                    {active.icon}
                  </span>
                  <div className="flex w-full items-center justify-between rounded-full border border-purple-500/30 bg-purple-950/40 px-5 py-2.5">
                    <span className="square-px font-semibold text-purple-100 sm:text-base">
                      {active.title}
                    </span>
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-500 text-white">
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="p-font mb-6 flex flex-wrap gap-2">
                  {active.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-purple-200/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="p-font text-sm leading-relaxed text-gray-300">
                  {active.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .service-fade {
          animation: fadeIn 0.4s ease-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}