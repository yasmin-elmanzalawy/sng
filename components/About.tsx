"use client";

import { useEffect, useRef, useState } from "react";

// Rocks clustered closer to the center content/astronaut with varied sizes and tilts
const FLOATING_ROCKS = [
  // Left side clusters (near text block)
  { id: 1, src: "/rocks/rock.webp", size: 42, top: "30%", left: "14%", delay: "0s", duration: "7s", rotate: "28deg" },
  { id: 2, src: "/rocks/rock3.webp", size: 16, top: "38%", left: "12%", delay: "1.5s", duration: "8.5s", rotate: "-45deg" },
  { id: 3, src: "/rocks/rock2.webp", size: 30, top: "78%", left: "15%", delay: "3s", duration: "6.5s", rotate: "7deg" },
  { id: 4, src: "/rocks/rock5.webp", size: 18, top: "40%", left: "20%", delay: "0.8s", duration: "9s", rotate: "-18deg" },

  // Center / Top / Bottom gaps
  { id: 5, src: "/rocks/rock4.webp", size: 24, top: "18%", left: "32%", delay: "2.2s", duration: "10s", rotate: "115deg" },
  { id: 6, src: "/rocks/rock.webp", size: 14, top: "34%", left: "20%", delay: "4s", duration: "7.5s", rotate: "-70deg" },
  { id: 7, src: "/rocks/rock4.webp", size: 36, top: "75%", left: "9%", delay: "1.8s", duration: "8.2s", rotate: "140deg" },

  // Right side clusters (surrounding astronaut)
  { id: 8, src: "/rocks/rock.webp", size: 22, top: "85%", right: "30%", delay: "1s", duration: "8.5s", rotate: "-32deg" },
  { id: 9, src: "/rocks/rock5.webp", size: 38, top: "83%", right: "27%", delay: "2.8s", duration: "9.5s", rotate: "85deg" },
  { id: 10, src: "/rocks/rock3.webp", size: 16, top: "80%", right: "33%", delay: "0.5s", duration: "6.8s", rotate: "-110deg" },
  { id: 11, src: "/rocks/rock4.webp", size: 28, top: "68%", right: "22%", delay: "3.5s", duration: "7.2s", rotate: "50deg" },
  { id: 12, src: "/rocks/rock2.webp", size: 18, top: "76%", right: "18%", delay: "1.2s", duration: "8.8s", rotate: "-155deg" },
];

export default function AboutPlanet() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden px-6 py-16 text-white sm:py-24"
    >
      {/* Ambient drifting particles */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-60">
        <span className="particle particle-1" />
        <span className="particle particle-2" />
        <span className="particle particle-3" />
        <span className="particle particle-4" />
        <span className="particle particle-5" />
      </div>

      {/* FLOATING SPACE ROCKS */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {FLOATING_ROCKS.map((rock) => (
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
        {/* =========================================================
            CENTERED SECTION HEADER
        ========================================================= */}
        <div
          className={`flex flex-col items-center justify-center transition-all duration-700 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <h2 className="title-font text-white">
            About Us
          </h2>
          {/* Decorative line with center star */}
          <div className="mt-3 flex items-center justify-center gap-3">
            <span className="h-[1px] w-12 bg-gradient-to-r from-transparent via-[#a855f7]/60 to-[#F9C275]" />
            <span className="text-xs text-[#F9C275]">✦</span>
            <span className="h-[1px] w-12 bg-gradient-to-l from-transparent via-[#a855f7]/60 to-[#F9C275]" />
          </div>
        </div>

        {/* =========================================================
            CONTENT GRID
        ========================================================= */}
        <div className="flex flex-col-reverse items-center justify-between gap-12 lg:flex-row lg:gap-16">
          {/* TEXT BLOCK */}
          <div className="max-w-2xl text-left">
            <p
              className={`tagline-font bg-gradient-to-r from-[#c084fc] to-[#e9d5ff] bg-clip-text text-transparent transition-all duration-700 ease-out ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0"
              }`}
              style={{ transitionDelay: isVisible ? "200ms" : "0ms" }}
            >
              Driven by Discipline. Powered by Innovation. Guided by Purpose.
            </p>

            <p
              className={`p-font mt-4 text-gray-300 transition-all duration-700 ease-out ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0"
              }`}
              style={{ transitionDelay: isVisible ? "400ms" : "0ms" }}
            >
              We customize our services to fit each client's needs, helping
              them grow and reach their goals within budget. We focus on
              fresh ideas, teamwork, quality, and honesty—delivering top-
              notch solutions that enhance the gaming experience
            </p>
          </div>

          {/* ASTRONAUT GRAPHIC WITH ORBIT RING */}
          <div
            className={`planet-wrap relative shrink-0 transition-all duration-1000 ease-out ${
              isVisible
                ? "translate-y-0 scale-100 opacity-100"
                : "translate-y-8 scale-90 opacity-0"
            }`}
          >
            {/* Orbit ring */}
            <div className="orbit-ring" aria-hidden="true" />

            {/* Astronaut with original swing animation */}
            <button
              type="button"
              aria-label="Learn more about us"
              className="planet-button"
            >
              <div className="astronaut-swing">
                <img
                  src="/about/astronaut.webp"
                  alt="Astronaut"
                  className="planet-image"
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* =========================================================
          STYLES
      ========================================================= */}
      <style jsx>{`
        /* =========================================================
           FLOATING ROCKS ANIMATION
        ========================================================= */

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

        /* =========================================================
           PARTICLES
        ========================================================= */

        .particle {
          position: absolute;
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: #c084fc;
          box-shadow: 0 0 6px #c084fc;
          animation: floatUp 12s linear infinite;
        }

        .particle-1 {
          left: 18%;
          top: 80%;
          animation-duration: 14s;
          animation-delay: 0s;
        }

        .particle-2 {
          left: 28%;
          top: 90%;
          animation-duration: 10s;
          animation-delay: 2s;
        }

        .particle-3 {
          left: 68%;
          top: 85%;
          animation-duration: 16s;
          animation-delay: 1s;
        }

        .particle-4 {
          left: 78%;
          top: 75%;
          animation-duration: 11s;
          animation-delay: 4s;
        }

        .particle-5 {
          left: 48%;
          top: 95%;
          animation-duration: 13s;
          animation-delay: 3s;
        }

        @keyframes floatUp {
          0% {
            transform: translateY(0);
            opacity: 0;
          }

          10% {
            opacity: 0.8;
          }

          90% {
            opacity: 0.5;
          }

          100% {
            transform: translateY(-220px);
            opacity: 0;
          }
        }

        /* =========================================================
           ASTRONAUT CONTAINER & RING
        ========================================================= */

        .planet-wrap {
          position: relative;
          width: 360px;
          height: 360px;

          display: flex;
          align-items: center;
          justify-content: center;
        }

        .orbit-ring {
          position: absolute;

          top: 50%;
          left: 50%;

          width: 360px;
          height: 360px;

          margin-top: -180px;
          margin-left: -180px;

          border: 1px dashed rgba(192, 132, 252, 0.25);

          border-radius: 50%;

          animation: spinSlow 30s linear infinite;

          pointer-events: none;
        }

        @keyframes spinSlow {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        /* =========================================================
           BUTTON
        ========================================================= */

        .planet-button {
          position: relative;

          width: 320px;
          height: 320px;

          display: flex;
          align-items: flex-start;
          justify-content: center;

          margin: 0;
          padding: 0;

          border: 0;
          background: transparent;

          cursor: pointer;
          overflow: visible;

          appearance: none;
          -webkit-appearance: none;
        }

        /* =========================================================
           ORIGINAL SMOOTH CONTINUOUS SWING
        ========================================================= */

        .astronaut-swing {
          width: 320px;
          height: 320px;

          transform-origin: 50% 0%;

          animation: astronautSwing 4s linear infinite;

          will-change: transform;
        }

        @keyframes astronautSwing {
          0% {
            transform: rotate(-10deg);
          }

          25% {
            transform: rotate(0deg);
          }

          50% {
            transform: rotate(10deg);
          }

          75% {
            transform: rotate(0deg);
          }

          100% {
            transform: rotate(-10deg);
          }
        }

        /* =========================================================
           ASTRONAUT IMAGE
        ========================================================= */

        .planet-image {
          width: 100%;
          height: 100%;

          display: block;

          object-fit: contain;

          pointer-events: none;
        }

        /* =========================================================
           FOCUS
        ========================================================= */

        .planet-button:focus-visible {
          outline: 2px solid #c084fc;
          outline-offset: 8px;
          border-radius: 50%;
        }

        /* =========================================================
           RESPONSIVE BREAKPOINTS
        ========================================================= */

        @media (max-width: 1024px) {
          .planet-wrap {
            width: 330px;
            height: 330px;
          }

          .planet-button {
            width: 290px;
            height: 290px;
          }

          .astronaut-swing {
            width: 290px;
            height: 290px;
          }

          .orbit-ring {
            width: 330px;
            height: 330px;

            margin-top: -165px;
            margin-left: -165px;
          }
        }

        @media (max-width: 640px) {
          .planet-wrap {
            width: 300px;
            height: 300px;
          }

          .planet-button {
            width: 270px;
            height: 270px;
          }

          .astronaut-swing {
            width: 270px;
            height: 270px;
          }

          .orbit-ring {
            width: 300px;
            height: 300px;

            margin-top: -150px;
            margin-left: -150px;
          }

          .floating-rock {
            opacity: 0.5;
            scale: 0.75;
          }
        }

        /* =========================================================
           REDUCED MOTION
        ========================================================= */

        @media (prefers-reduced-motion: reduce) {
          .orbit-ring,
          .astronaut-swing,
          .particle,
          .floating-rock {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}