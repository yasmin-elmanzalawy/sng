"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const CLIENTS = [
  { name: "Teal Flamingo", src: "/clients/tealflamingo.webp" },
  { name: "Games", src: "/clients/games.webp" },
  { name: "Frenzy", src: "/clients/frenzy.webp" },
  { name: "Niko", src: "/clients/niko.webp" },
  { name: "GB Arena", src: "/clients/gb.webp" },
  { name: "Arena Esports", src: "/clients/arena.webp" },
  { name: "Esports", src: "/clients/esports.webp" },
  { name: "Playhera", src: "/clients/playhera.webp" },
];

// Duplicate list to allow seamless continuous sliding
const EXTENDED_CLIENTS = [...CLIENTS, ...CLIENTS, ...CLIENTS];

// Floating space rocks configuration
const FLOATING_ROCKS = [
  { id: 1, src: "/rocks/rock.webp", size: 40, top: "10%", left: "3%", delay: "0s", duration: "7s", rotate: "28deg" },
  { id: 2, src: "/rocks/rock3.webp", size: 18, top: "28%", left: "12%", delay: "1.5s", duration: "8.5s", rotate: "-45deg" },
  { id: 3, src: "/rocks/rock2.webp", size: 32, top: "75%", left: "6%", delay: "3s", duration: "6.5s", rotate: "7deg" },
  { id: 4, src: "/rocks/rock5.webp", size: 20, top: "82%", left: "16%", delay: "0.8s", duration: "9s", rotate: "-18deg" },
  { id: 5, src: "/rocks/rock4.webp", size: 24, top: "6%", left: "35%", delay: "2.2s", duration: "10s", rotate: "115deg" },
  { id: 6, src: "/rocks/rock.webp", size: 16, top: "88%", left: "42%", delay: "4s", duration: "7.5s", rotate: "-70deg" },
  { id: 7, src: "/rocks/rock3.webp", size: 22, top: "8%", right: "38%", delay: "1.1s", duration: "8s", rotate: "35deg" },
  { id: 8, src: "/rocks/rock2.webp", size: 36, top: "12%", right: "5%", delay: "1s", duration: "8.5s", rotate: "-32deg" },
  { id: 9, src: "/rocks/rock5.webp", size: 26, top: "25%", right: "14%", delay: "2.8s", duration: "9.5s", rotate: "85deg" },
  { id: 10, src: "/rocks/rock4.webp", size: 30, top: "70%", right: "8%", delay: "0.5s", duration: "6.8s", rotate: "-110deg" },
  { id: 11, src: "/rocks/rock.webp", size: 18, top: "82%", right: "18%", delay: "3.5s", duration: "7.2s", rotate: "50deg" },
  { id: 12, src: "/rocks/rock3.webp", size: 20, top: "78%", right: "30%", delay: "1.2s", duration: "8.8s", rotate: "-155deg" },
];

export default function ClientsSection() {
  const [currentIndex, setCurrentIndex] = useState(CLIENTS.length);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size for responsive offset calculation
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handlePrev = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  // Reset offset position seamlessly without animation when reaching boundaries
  const handleTransitionEnd = () => {
    if (currentIndex >= CLIENTS.length * 2) {
      setIsTransitioning(false);
      setCurrentIndex(CLIENTS.length);
    } else if (currentIndex < CLIENTS.length) {
      setIsTransitioning(false);
      setCurrentIndex(CLIENTS.length * 2 - 1);
    }
  };

  // Auto-slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const slidePercentage = isMobile ? 50 : 20;

  return (
    <section className="relative w-full overflow-hidden px-0 py-12 sm:py-16">
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

      <div className="relative z-10 w-full">
        {/* Header Section */}
        <div className="mb-8 flex flex-col items-center justify-center text-center">
          <h2 className="title-font text-white">OUR CLIENTS</h2>
          <div className="mt-3 flex items-center justify-center gap-3">
            <span className="h-[1px] w-12 bg-gradient-to-r from-transparent via-[#a855f7]/60 to-[#F9C275]" />
            <span className="text-xs text-[#F9C275]">✦</span>
            <span className="h-[1px] w-12 bg-gradient-to-l from-transparent via-[#a855f7]/60 to-[#F9C275]" />
          </div>
          <p className="p-font mt-4 text-sm font-light text-gray-300/90 sm:text-base" style={{ textAlign: "center" }}>
            The stars we’ve helped shine
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative mt-14 w-full">
          {/* Peeking Astronaut */}
          <div className="absolute sm:-top-26 -top-18 left-8 sm:left-24 z-30 h-24 w-24 sm:h-36 sm:w-36">
            <Image src="/clients/astronautPointing.webp" alt="Astronaut" fill className="object-contain" />
          </div>

          {/* Full-Width Carousel Bar */}
          <div className="relative z-10 flex min-h-[220px] w-full items-center justify-between border-y border-purple-500/30 bg-[#0d071d]/90 px-1 py-8 backdrop-blur-2xl shadow-[0_0_50px_rgba(168,85,247,0.25)] sm:px-4">
            {/* Left Button */}
            <button
              onClick={handlePrev}
              aria-label="Previous clients"
              className="relative z-30 h-10 w-10 shrink-0 transition-transform duration-300 hover:scale-110 active:scale-95"
            >
              <Image src="/clients/leftArrow.webp" alt="Previous" fill className="object-contain" />
            </button>

            {/* Hardware-Accelerated Sliding Track (2 Columns on Mobile, 5 on Desktop) */}
            <div className="w-full overflow-hidden px-1 sm:px-2">
              <div
                className={`flex ${
                  isTransitioning
                    ? "transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                    : "transition-none"
                }`}
                style={{
                  transform: `translateX(-${currentIndex * slidePercentage}%)`,
                }}
                onTransitionEnd={handleTransitionEnd}
              >
                {EXTENDED_CLIENTS.map((client, idx) => (
                  <div
                    key={`${client.name}-${idx}`}
                    className="flex h-36 w-[50%] shrink-0 items-center justify-center px-2 sm:h-48 sm:w-[20%] sm:px-2"
                  >
                    <div className="relative h-full w-full opacity-95 transition-all duration-300 hover:scale-110 hover:opacity-100">
                      <Image
                        src={client.src}
                        alt={client.name}
                        fill
                        className="object-contain p-1"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Button */}
            <button
              onClick={handleNext}
              aria-label="Next clients"
              className="relative z-30 h-10 w-10 shrink-0 transition-transform duration-300 hover:scale-110 active:scale-95"
            >
              <Image src="/clients/rightArrow.webp" alt="Next" fill className="object-contain" />
            </button>
          </div>
        </div>
      </div>

      {/* Styled JSX (Animations & Particle Effects) */}
      <style jsx>{`
        /* Floating Rock Animation */
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

        /* Ambient Space Particles */
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
          left: 10%;
          top: 80%;
          animation-duration: 14s;
          animation-delay: 0s;
        }

        .particle-2 {
          left: 25%;
          top: 90%;
          animation-duration: 10s;
          animation-delay: 2s;
        }

        .particle-3 {
          left: 70%;
          top: 85%;
          animation-duration: 16s;
          animation-delay: 1s;
        }

        .particle-4 {
          left: 85%;
          top: 75%;
          animation-duration: 11s;
          animation-delay: 4s;
        }

        .particle-5 {
          left: 50%;
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

        @media (prefers-reduced-motion: reduce) {
          .particle,
          .floating-rock {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}