"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

// Floating Rocks for Projects Page
const FLOATING_ROCKS_PROJECTS = [
  { id: 1, src: "/rocks/rock.webp", size: 24, top: "12%", left: "6%", delay: "0s", duration: "7s", rotate: "18deg" },
  { id: 2, src: "/rocks/rock3.webp", size: 16, top: "25%", left: "10%", delay: "1.2s", duration: "8.5s", rotate: "-30deg" },
  { id: 3, src: "/rocks/rock2.webp", size: 28, top: "70%", left: "8%", delay: "2.5s", duration: "6.5s", rotate: "40deg" },
  { id: 4, src: "/rocks/rock5.webp", size: 18, top: "82%", left: "14%", delay: "0.5s", duration: "9s", rotate: "-15deg" },
  { id: 5, src: "/rocks/rock4.webp", size: 22, top: "15%", right: "8%", delay: "1.8s", duration: "7.5s", rotate: "65deg" },
  { id: 6, src: "/rocks/rock.webp", size: 14, top: "30%", right: "12%", delay: "3s", duration: "8.5s", rotate: "-75deg" },
  { id: 7, src: "/rocks/rock3.webp", size: 26, top: "72%", right: "6%", delay: "0.8s", duration: "6.8s", rotate: "110deg" },
  { id: 8, src: "/rocks/rock2.webp", size: 20, top: "85%", right: "12%", delay: "2.1s", duration: "9.2s", rotate: "-45deg" },
];

const PROJECTS_DATA = [
  {
    id: "356games",
    title: "356GAMES.NET",
    subtitle: "356GAMES – BRINGING GAMING TO LIFE THROUGH ENGAGING CONTENT",
    logo: "/clients/games.webp",
    link: "/projects/365games", // <-- Updated link to point to your new page
    imgClass: "scale-125 sm:scale-150",
  },
  {
    id: "arena-pubg-cup",
    title: "ARENA PUBG CUP",
    subtitle: "BRINGING THE COMMUNITY TOGETHER",
    logo: "/clients/arena.webp",
    link: "#",
    imgClass: "scale-110 sm:scale-135",
  },
];

export default function ProjectsPage() {
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [isCardsVisible, setIsCardsVisible] = useState(false);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsHeaderVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = cardsRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsCardsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative min-h-screen w-full text-white py-12 sm:pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] bg-[#6d28d9]/15 blur-[170px] rounded-full" />
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[950px] h-[400px] bg-[#4c1d95]/20 blur-[190px] rounded-full" />
      </div>

      {/* Floating Space Rocks */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {FLOATING_ROCKS_PROJECTS.map((rock) => (
          <img
            key={rock.id}
            src={rock.src}
            alt=""
            aria-hidden="true"
            className="floating-rock absolute object-contain drop-shadow-[0_0_12px_rgba(192,132,252,0.35)]"
            style={{
              width: `${rock.size}px`,
              height: `${rock.size}px`,
              top: rock.top,
              left: rock.left,
              right: rock.right,
              animationDelay: rock.delay,
              animationDuration: rock.duration,
              transform: `rotate(${rock.rotate})`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Header */}
        <div ref={headerRef} className="flex flex-col items-center justify-center text-center mb-16">
          <h2
            className={`transition-all title-font duration-700 ease-out ${
              isHeaderVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            PAST PROJECTS
          </h2>

          {/* Star Divider */}
          <div
            className={`mt-3 flex items-center justify-center gap-3 transition-all duration-700 ease-out ${
              isHeaderVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: isHeaderVisible ? "150ms" : "0ms" }}
          >
            <span className="h-[1px] w-12 bg-gradient-to-r from-transparent via-[#a855f7]/60 to-[#F9C275]" />
            <span className="text-xs text-[#F9C275]">✦</span>
            <span className="h-[1px] w-12 bg-gradient-to-l from-transparent via-[#a855f7]/60 to-[#F9C275]" />
          </div>

          {/* Subtitle */}
          <p
            className={`mt-4 transition-all duration-700 ease-out p-font ${
              isHeaderVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
            style={{ transitionDelay: isHeaderVisible ? "300ms" : "0ms" }}
          >
            ELEVATING GAMING THROUGH CONTENT & ESPORTS
          </p>
        </div>

        {/* Project Cards Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 max-w-4xl mx-auto items-stretch"
        >
          {PROJECTS_DATA.map((project, idx) => (
            <div
              key={project.id}
              className={`group relative flex flex-col justify-between rounded-3xl bg-[#0b061d]/85 backdrop-blur-xl border border-[#4c1d95]/70 p-8 sm:p-10 shadow-[0_0_40px_rgba(168,85,247,0.2)] transition-all duration-700 ease-out hover:border-[#a855f7] hover:shadow-[0_0_50px_rgba(168,85,247,0.35)] hover:-translate-y-1.5 ${
                isCardsVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: isCardsVisible ? `${200 + idx * 200}ms` : "0ms" }}
            >
              {/* Inner Glow Border */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-b from-[#a855f7]/25 via-transparent to-[#100727] opacity-60 group-hover:opacity-100 transition-opacity duration-300" />

              {/* TOP: Big Project Logo */}
              <div className="relative z-10 flex items-center justify-center h-48 sm:h-56 w-full mb-6">
                <img
                  src={project.logo}
                  alt={project.title}
                  className={`max-w-[85%] max-h-full object-contain filter brightness-110 contrast-105 drop-shadow-[0_0_15px_rgba(255,255,255,0.25)] group-hover:scale-105 transition-transform duration-500 ease-out ${project.imgClass}`}
                />
              </div>

              {/* MIDDLE: Text Info */}
              <div className="relative z-10 flex flex-col items-center text-center flex-1 justify-between">
                <div>
                  <h3 className="mb-3 title-font">
                    {project.title}
                  </h3>
                  <p className="p-font max-w-xs mx-auto mb-8">
                    {project.subtitle}
                  </p>
                </div>

                {/* BOTTOM: Read More Button Pill (Using Next.js Link) */}
                <Link
                  href={project.link}
                  className="square-px inline-flex items-center justify-between gap-4 rounded-full bg-[#1b0d3d]/90 border border-[#a855f7]/50 px-6 py-2.5 group-hover:border-[#a855f7] group-hover:bg-[#a855f7]/20 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all duration-300"
                >
                  <span>READ MORE</span>
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#a855f7]/30 text-white text-xs group-hover:bg-[#a855f7] transition-all duration-300">
                    →
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Rock Keyframes */}
      <style jsx>{`
        .floating-rock {
          animation: floatRock ease-in-out infinite alternate;
          will-change: transform;
        }

        @keyframes floatRock {
          0% {
            transform: translateY(0px) rotate(0deg) scale(1);
          }
          50% {
            transform: translateY(-10px) rotate(6deg) scale(1.05);
          }
          100% {
            transform: translateY(6px) rotate(-5deg) scale(0.95);
          }
        }
      `}</style>
    </section>
  );
}