"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Starfield from "./Starfield";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [isTouch, setIsTouch] = useState(false);

  // --- Draggable planet state ---
  const floatRef = useRef<HTMLDivElement>(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const isDraggingRef = useRef(false);
  const dragStartPointerRef = useRef({ x: 0, y: 0 });
  const dragStartOffsetRef = useRef({ x: 0, y: 0 });
  const springFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const touchQuery = window.matchMedia(
      "(hover: none), (pointer: coarse)"
    );

    setIsTouch(touchQuery.matches);

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;

      setMouse({
        x: (e.clientX / innerWidth - 0.5) * 2,
        y: (e.clientY / innerHeight - 0.5) * 2,
      });
    };

    const handleScroll = () => setScrollY(window.scrollY);

    if (!touchQuery.matches) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    return () => {
      if (springFrameRef.current) {
        cancelAnimationFrame(springFrameRef.current);
      }
    };
  }, []);

  const layerStyle = (
    strength: number,
    scrollStrength = 0.15
  ): React.CSSProperties => {
    const mouseTerm = isTouch ? 0 : mouse.y * strength * 0.5;

    const scrollTerm =
      scrollY * scrollStrength * (isTouch ? 0.5 : 1);

    return {
      transform: `translate3d(-50%, ${
        mouseTerm - scrollTerm
      }px, 0)`,
      transition: "transform 0.2s ease-out",
    };
  };

  const stopSpring = () => {
    if (springFrameRef.current) {
      cancelAnimationFrame(springFrameRef.current);
      springFrameRef.current = null;
    }
  };

  const handlePlanetPointerDown = (
    e: React.PointerEvent<HTMLDivElement>
  ) => {
    e.preventDefault();

    stopSpring();

    isDraggingRef.current = true;
    setIsDragging(true);

    dragStartPointerRef.current = {
      x: e.clientX,
      y: e.clientY,
    };

    dragStartOffsetRef.current = {
      ...dragOffset,
    };

    if (floatRef.current) {
      floatRef.current.style.animationPlayState = "paused";
    }

    const handleWindowPointerMove = (ev: PointerEvent) => {
      if (!isDraggingRef.current) return;

      const dx =
        ev.clientX - dragStartPointerRef.current.x;

      const dy =
        ev.clientY - dragStartPointerRef.current.y;

      setDragOffset({
        x: dragStartOffsetRef.current.x + dx,
        y: dragStartOffsetRef.current.y + dy,
      });
    };

    const handleWindowPointerUp = () => {
      if (!isDraggingRef.current) return;

      isDraggingRef.current = false;
      setIsDragging(false);

      window.removeEventListener(
        "pointermove",
        handleWindowPointerMove
      );

      window.removeEventListener(
        "pointerup",
        handleWindowPointerUp
      );

      window.removeEventListener(
        "pointercancel",
        handleWindowPointerUp
      );

      const animateBack = () => {
        setDragOffset((prev) => {
          const nx = prev.x * 0.9999;
          const ny = prev.y * 0.9999;

          if (
            Math.abs(nx) < 0.5 &&
            Math.abs(ny) < 0.5
          ) {
            if (floatRef.current) {
              floatRef.current.style.animationPlayState =
                "running";
            }

            springFrameRef.current = null;

            return {
              x: 0,
              y: 0,
            };
          }

          springFrameRef.current =
            requestAnimationFrame(animateBack);

          return {
            x: nx,
            y: ny,
          };
        });
      };

      springFrameRef.current =
        requestAnimationFrame(animateBack);
    };

    window.addEventListener(
      "pointermove",
      handleWindowPointerMove
    );

    window.addEventListener(
      "pointerup",
      handleWindowPointerUp
    );

    window.addEventListener(
      "pointercancel",
      handleWindowPointerUp
    );
  };

  return (
    <section>
      <section
        ref={heroRef}
        className="relative flex min-h-[100svh] sm:min-h-[100svh] w-full flex-col items-center justify-center overflow-hidden bg-black"
      >
        {/* Starfield */}
        <div className="absolute inset-0 z-0">
          <Starfield />
        </div>

        {/* Main draggable planet */}
        <div
          ref={floatRef}
          className="planet-float"
        >
          <div
            className="planet-float-drag"
            style={{
              transform: `translate3d(${dragOffset.x}px, ${dragOffset.y}px, 0)`,
              transition: isDragging
                ? "none"
                : "transform 0.05s linear",
              cursor: isDragging
                ? "grabbing"
                : "grab",
              touchAction: "none",
            }}
            onPointerDown={handlePlanetPointerDown}
          >
            <video
              className="planet-float-inner"
              src="/hero/rotatingplanet.mov"
              autoPlay
              loop
              muted
              playsInline
              draggable={false}
            />
          </div>
        </div>

        {/* Small planet */}
        <div className="small-planet-float">
          <video
            className="small-planet-inner"
            src="/hero/smallplanet.mov"
            autoPlay
            loop
            muted
            playsInline
            draggable={false}
          />
        </div>

        {/* Clouds */}
        <div
          className="pointer-events-none absolute left-1/2 z-10 w-[200vw] sm:w-full opacity-90 bottom-0"
          style={layerStyle(15, 0.08)}
        >
          <Image
            src="/hero/clouds.webp"
            alt=""
            width={2560}
            height={700}
            priority
            sizes="100vw"
            className="h-auto w-full select-none"
          />
        </div>

        {/* Far mountains */}
        <div
          className="pointer-events-none absolute bottom-[-8%] left-1/2 z-20 h-[40vh] w-[200vw] overflow-hidden sm:h-[60vh] sm:w-full"
          style={layerStyle(10, 0.3)}
        >
          <Image
            src="/hero/rocksfar.webp"
            alt=""
            width={1600}
            height={500}
            priority
            sizes="100vw"
            className="absolute bottom-0 left-0 h-auto w-full select-none object-cover"
          />
        </div>

        {/* Near mountains */}
        <div
          className="pointer-events-none absolute bottom-[-2%] left-1/2 z-30 w-[200vw] sm:w-full"
          style={layerStyle(30, 0.25)}
        >
          <Image
            src="/hero/rocks.webp"
            alt=""
            width={1600}
            height={600}
            priority
            sizes="100vw"
            className="h-auto w-full select-none object-cover"
          />
        </div>

        {/* Bottom gradient */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-40 h-40 bg-gradient-to-b from-transparent to-black sm:h-56" />

        {/* Hero text */}
        <div className="sm:mt-[-17vh]  relative flex flex-col items-center px-4 text-center sm:px-6">
          <h1 className="square-px text-[clamp(1.75rem,7vw,3.5rem)] font-extrabold tracking-wide text-white">
            SUPERNOVA GAMING
          </h1>

          <p className="p-font mt-3 max-w-xl text-[clamp(0.9rem,3vw,1.125rem)] text-gray-300 sm:mt-4">
            Powered by Events, Esports, and Immersive Experiences
          </p>

          {/* Scroll Indicator */}
          <div className="mt-10 flex flex-col items-center sm:mt-16">
            <span className="text-[14px] square-px uppercase tracking-[3px] text-gray-300 sm:text-md">
              scroll
            </span>

            <div
              className="scroll-arrows"
              aria-hidden="true"
            >
              <span className="scroll-chevron" />
              <span className="scroll-chevron" />
            </div>
          </div>
        </div>

        <style jsx>{`
          /* =========================================
             MAIN PLANET
          ========================================= */

          .planet-float {
            position: absolute;
            top: 20%;
            left: -12%;
            width: 150px;
            height: 150px;
            pointer-events: none;
            animation: floatAcross 48s ease-in-out infinite;
            animation-delay: -7s;
          }

          .planet-float-drag {
            width: 100%;
            height: 100%;
            pointer-events: auto;
          }

          .planet-float-inner {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            object-fit: cover;
            pointer-events: none;
            display: block;
          }

          @keyframes floatAcross {
            0% {
              transform: translate(0, 0);
            }

            25% {
              transform: translate(35vw, -5vh);
            }

            50% {
              transform: translate(70vw, 3vh);
            }

            75% {
              transform: translate(105vw, -4vh);
            }

            100% {
              transform: translate(145vw, 0);
            }
          }

          /* =========================================
             SMALL PLANET
          ========================================= */

          .small-planet-float {
            position: absolute;
            right: -10%;
            top: 20%;
            width: 90px;
            height: 90px;
            pointer-events: none;
            z-index: 0;
            animation: smallPlanetPath 14s linear infinite;
          }

          .small-planet-inner {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            object-fit: cover;
            pointer-events: none;
            display: block;
          }

          @keyframes smallPlanetPath {
            0% {
              transform: translate3d(0, 0, 0);
            }

            15% {
              transform: translate3d(-10vw, 5vh, 0);
            }

            30% {
              transform: translate3d(-21vw, 12vh, 0);
            }

            45% {
              transform: translate3d(-32vw, 22vh, 0);
            }

            60% {
              transform: translate3d(-43vw, 34vh, 0);
            }

            72% {
              transform: translate3d(-52vw, 47vh, 0);
            }

            78% {
              transform: translate3d(-58vw, 55vh, 0);
            }

            100% {
              transform: translate3d(-58vw, 55vh, 0);
            }
          }

          /* =========================================
             SCROLL ARROWS
          ========================================= */

          .scroll-arrows {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 2px;
            margin-top: 7px;

            animation: scrollArrowBounce 1.8s
              ease-in-out infinite;
          }

          .scroll-chevron {
            width: 10px;
            height: 10px;

            border-right: 2px solid #ffffff;
            border-bottom: 2px solid #ffffff;

            transform: rotate(45deg);
            box-sizing: border-box;
          }

          @keyframes scrollArrowBounce {
            0%,
            100% {
              transform: translateY(0);
              opacity: 0.75;
            }

            50% {
              transform: translateY(5px);
              opacity: 1;
            }
          }

          /* =========================================
             MOBILE
          ========================================= */

          @media (max-width: 640px) {
            .planet-float {
              width: 100px;
              height: 100px;
              top: 20%;
            }

            .small-planet-float {
              width: 65px;
              height: 65px;
              right: -15%;
              top: 50%;
              animation-duration: 12s;
            }

            @keyframes smallPlanetPath {
              0% {
                transform: translate3d(0, 0, 0);
              }

              15% {
                transform: translate3d(-10vw, 5vh, 0);
              }

              30% {
                transform: translate3d(-21vw, 12vh, 0);
              }

              45% {
                transform: translate3d(-32vw, 22vh, 0);
              }

              60% {
                transform: translate3d(-43vw, 34vh, 0);
              }

              72% {
                transform: translate3d(-52vw, 47vh, 0);
              }

              78% {
                transform: translate3d(-58vw, 55vh, 0);
              }

              100% {
                transform: translate3d(-58vw, 55vh, 0);
              }
            }

            .scroll-chevron {
              width: 13px;
              height: 13px;
              border-right-width: 3px;
              border-bottom-width: 3px;
            }

            .scroll-arrows {
              gap: 2px;
            }
          }
        `}</style>
      </section>

      <div className="relative bg-black">
        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-40 bg-gradient-to-b from-black to-transparent sm:h-56" />
      </div>
    </section>
  );
}