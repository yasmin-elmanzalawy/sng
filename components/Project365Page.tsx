"use client";

import React, { useEffect, useRef, useState } from "react";

export default function Project365Page() {
  const headerRef = useRef<HTMLDivElement>(null);
  const showcaseRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [isShowcaseVisible, setIsShowcaseVisible] = useState(false);
  const [isBottomVisible, setIsBottomVisible] = useState(false);

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
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = showcaseRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsShowcaseVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = bottomRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsBottomVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative min-h-screen w-full bg-[#070312] text-white py-12 sm:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Ambient purple background glows */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] bg-[#6d28d9]/15 blur-[170px] rounded-full" />
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[950px] h-[400px] bg-[#4c1d95]/20 blur-[190px] rounded-full" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* =========================================================
            HEADER SECTION
        ========================================================= */}
        <div ref={headerRef} className="flex flex-col items-center justify-center text-center mb-">
          <h2
            className={`title-font transition-all duration-700 ease-out ${
              isHeaderVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            365GAMES
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
            className={`mt-4 !text-center p-font text-gray-300 transition-all duration-700 ease-out ${
              isHeaderVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
            style={{ transitionDelay: isHeaderVisible ? "300ms" : "0ms" }}
          >
            BRINGING GAMING TO LIFE THROUGH ENGAGING CONTENT
          </p>
        </div>

        {/* =========================================================
            MIDDLE SHOWCASE SECTION (Top 2 Feature Blocks)
        ========================================================= */}
        <div
          ref={showcaseRef}
          className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16 transition-all duration-1000 ease-out ${
            isShowcaseVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Left Column: Phone Mockup with Smooth Floating/Scaling Cubes */}
          <div className="lg:col-span-5 relative flex items-center justify-center py-10">
            {/* Floating Cube Top Left */}
            <div className="absolute top-2 left-2 sm:left-6 w-16 h-16 sm:w-20 sm:h-20 floating-cube-smooth" style={{ animationDelay: "0s" }}>
              <img
                src="/projects/cube.webp"
                alt=""
                className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(168,85,247,0.5)] rotate-[-12deg]"
              />
            </div>

            {/* Floating Cube Bottom Left */}
            <div className="absolute bottom-6 left-0 sm:left-2 w-20 h-20 sm:w-24 sm:h-24 floating-cube-smooth" style={{ animationDelay: "1s" }}>
              <img
                src="/projects/cube.webp"
                alt=""
                className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(168,85,247,0.5)] rotate-[25deg]"
              />
            </div>

            {/* Floating Cube Bottom Right */}
            <div className="absolute bottom-10 right-2 sm:right-6 w-18 h-18 sm:w-22 sm:h-22 floating-cube-smooth" style={{ animationDelay: "2s" }}>
              <img
                src="/projects/cube.webp"
                alt=""
                className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(168,85,247,0.5)] rotate-[-20deg]"
              />
            </div>

            {/* Center Phone Mockup */}
            <div className="relative z-10 w-64 sm:w-72 md:w-80 transition-transform duration-500 hover:scale-105">
              <img
                src="/projects/mobile.webp"
                alt="365Games Mobile View"
                className="w-full h-auto object-contain filter drop-shadow-[0_0_35px_rgba(168,85,247,0.4)]"
              />
            </div>
          </div>

          {/* Right Column: Top 2 Feature Content Blocks */}
          <div className="lg:col-span-7 flex flex-col gap-12">
            {/* Block 1 */}
            <div className="flex items-start gap-5">
              <div className="shrink-0 w-8 h-8 flex items-center justify-center mt-1">
                <img
                  src="/projects/cup.webp"
                  alt=""
                  className="w-7 h-7 object-contain filter drop-shadow-[0_0_10px_rgba(249,194,117,0.6)]"
                />
              </div>
              <div>
                <h3 className="square-px text-xl md:text-3xl text-white mb-2">
                  A Creative Collaboration Begins
                </h3>
                <p className=" p-font text-gray-300 leading-relaxed text-sm">
                  When 365Games reached out to us, they had one goal: to create engaging, high-energy promotional videos that would showcase their platform and captivate their audience on social media. As passionate gamers and content creators, we knew exactly how to bring their vision to life.
                </p>
              </div>
            </div>

            {/* Block 2 */}
            <div className="flex items-start gap-5">
              <div className="shrink-0 w-8 h-8 flex items-center justify-center mt-1">
                <img
                  src="/projects/cup.webp"
                  alt=""
                  className="w-7 h-7 object-contain filter drop-shadow-[0_0_10px_rgba(249,194,117,0.6)]"
                />
              </div>
              <div>
                <h3 className="square-px text-xl md:text-3xl text-white mb-2">
                  From Ideas to Impactful Videos
                </h3>
                <p className=" p-font text-gray-300 leading-relaxed text-sm">
                  When 365Games reached out to us, they had one goal: to create engaging, high-energy promotional videos that would showcase their platform and captivate their audience on social media. As passionate gamers and content creators, we knew exactly how to bring their vision to life.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================
            BOTTOM SECTION (Bottom 2 Feature Blocks side-by-side)
        ========================================================= */}
        <div
          ref={bottomRef}
          className={`grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 transition-all duration-1000 ease-out ${
            isBottomVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Block 3: Optimized for Social Media Success */}
          <div className="flex items-start gap-5">
            <div className="shrink-0 w-8 h-8 flex items-center justify-center mt-1">
              <img
                src="/projects/cup.webp"
                alt=""
                className="w-7 h-7 object-contain filter drop-shadow-[0_0_10px_rgba(249,194,117,0.6)]"
              />
            </div>
            <div>
              <h3 className="square-px text-xl md:text-3xl text-white mb-2">
                Optimized for Social Media Success
              </h3>
              <p className=" p-font text-gray-300 leading-relaxed text-sm">
                In the fast-paced world of social media, grabbing attention is everything. We designed short, engaging, and highly shareable videos that not only looked great but also drove engagement, helping 365Games connect with more players and strengthen their brand presence.
              </p>
            </div>
          </div>

          {/* Block 4: A Partnership Built on Creativity */}
          <div className="flex items-start gap-5">
            <div className="shrink-0 w-8 h-8 flex items-center justify-center mt-1">
              <img
                src="/projects/cup.webp"
                alt=""
                className="w-7 h-7 object-contain filter drop-shadow-[0_0_10px_rgba(249,194,117,0.6)]"
              />
            </div>
            <div>
              <h3 className="square-px text-xl md:text-3xl text-white mb-2">
                A Partnership Built on Creativity
              </h3>
              <p className=" p-font text-gray-300 leading-relaxed text-sm">
                Seeing our videos come to life on their social channels—and the excitement they generated—was incredibly rewarding. Through this collaboration, we helped 365Games tell their story in a way that was fun, authentic, and memorable.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Smooth Floating & Scaling Animation for Cube Logos */}
      <style jsx>{`
        .floating-cube-smooth {
          animation: floatScaleCube 4s ease-in-out infinite alternate;
          will-change: transform;
        }

        @keyframes floatScaleCube {
          0% {
            transform: translateY(0px) scale(0.9) rotate(0deg);
          }
          50% {
            transform: translateY(-12px) scale(1.1) rotate(5deg);
          }
          100% {
            transform: translateY(6px) scale(0.95) rotate(-5deg);
          }
        }
      `}</style>
    </section>
  );
}