"use client";

import React, { useEffect, useRef, useState } from "react";

export default function ProjectArena() {
  const headerRef = useRef<HTMLDivElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);
  const row3Ref = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [isRow1Visible, setIsRow1Visible] = useState(false);
  const [isRow2Visible, setIsRow2Visible] = useState(false);
  const [isRow3Visible, setIsRow3Visible] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    const observerCallback =
      (setter: React.Dispatch<React.SetStateAction<boolean>>) =>
      (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setter(true);
            observer.disconnect();
          }
        });
      };

    const headerEl = headerRef.current;
    const row1El = row1Ref.current;
    const row2El = row2Ref.current;
    const row3El = row3Ref.current;
    const footerEl = footerRef.current;

    const obs1 = new IntersectionObserver(observerCallback(setIsHeaderVisible), { threshold: 0.15 });
    const obs2 = new IntersectionObserver(observerCallback(setIsRow1Visible), { threshold: 0.15 });
    const obs3 = new IntersectionObserver(observerCallback(setIsRow2Visible), { threshold: 0.15 });
    const obs4 = new IntersectionObserver(observerCallback(setIsRow3Visible), { threshold: 0.15 });
    const obs5 = new IntersectionObserver(observerCallback(setIsFooterVisible), { threshold: 0.15 });

    if (headerEl) obs1.observe(headerEl);
    if (row1El) obs2.observe(row1El);
    if (row2El) obs3.observe(row2El);
    if (row3El) obs4.observe(row3El);
    if (footerEl) obs5.observe(footerEl);

    return () => {
      obs1.disconnect();
      obs2.disconnect();
      obs3.disconnect();
      obs4.disconnect();
      obs5.disconnect();
    };
  }, []);

  return (
    <section className="relative min-h-screen w-full bg-[#070312] text-white py-12 sm:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Ambient purple background glows */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] bg-[#6d28d9]/15 blur-[170px] rounded-full" />
        <div className="absolute top-2/4 left-1/2 -translate-x-1/2 w-[950px] h-[500px] bg-[#4c1d95]/20 blur-[190px] rounded-full" />
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[950px] h-[400px] bg-[#6d28d9]/15 blur-[190px] rounded-full" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* =========================================================
            HEADER SECTION
        ========================================================= */}
        <div ref={headerRef} className="flex flex-col items-center justify-center text-center mb-16">
          <h2
            className={`title-font transition-all duration-700 ease-out ${
              isHeaderVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            ARENA ESPORTS
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
            className={`mt-4 !text-center p-font text-gray-300 max-w-3xl transition-all duration-700 ease-out ${
              isHeaderVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
            style={{ transitionDelay: isHeaderVisible ? "300ms" : "0ms" }}
          >
            SUPERNOVA GAMING PARTNERED WITH ARENA ESPORTS TO CREATE AN ELECTRIFYING PUBG MOBILE TOURNAMENT, BRINGING PLAYERS TOGETHER AND DELIVERING AN UNFORGETTABLE ESPORTS EXPERIENCE.
          </p>
        </div>

        {/* =========================================================
            ROW 1: Character render + Bomb assets vs Bringing Community Together
        ========================================================= */}
        <div
          ref={row1Ref}
          className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20 transition-all duration-1000 ease-out ${
            isRow1Visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Left Column: PUBG Character with Floating Bombs */}
          <div className="lg:col-span-6 relative flex items-center justify-center py-6">
            {/* Floating Bomb 1 */}
            <div className="absolute top-6 left-4 sm:left-12 w-16 h-16 floating-bomb-smooth" style={{ animationDelay: "0s" }}>
              <img
                src="/projects/bomb.webp"
                alt=""
                className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(168,85,247,0.5)] rotate-[-15deg]"
              />
            </div>

            {/* Floating Bomb 2 */}
            <div className="absolute bottom-12 left-2 sm:left-6 w-20 h-20 floating-bomb-smooth" style={{ animationDelay: "1.2s" }}>
              <img
                src="/projects/bomb.webp"
                alt=""
                className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(168,85,247,0.5)] rotate-[20deg]"
              />
            </div>

            {/* Floating Bomb 3 */}
            <div className="absolute bottom-8 right-4 sm:right-12 w-20 h-20 floating-bomb-smooth" style={{ animationDelay: "2.4s" }}>
              <img
                src="/projects/bomb.webp"
                alt=""
                className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(168,85,247,0.5)] rotate-[-30deg]"
              />
            </div>

            {/* Center PUBG Character */}
            <div className="relative z-10 w-64 sm:w-80 md:w-96 transition-transform duration-500 hover:scale-105">
              <img
                src="/projects/pubg.webp"
                alt="Arena PUBG Character"
                className="w-full h-auto object-contain filter drop-shadow-[0_0_35px_rgba(168,85,247,0.4)]"
              />
            </div>
          </div>

          {/* Right Column: Content Block + Screenshot Card */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full gap-6">
            <div className="flex items-start gap-5">
              <div className="shrink-0 w-8 h-8 flex items-center justify-center mt-1">
                <img
                  src="/projects/cup.webp"
                  alt=""
                  className="w-7 h-7 object-contain filter drop-shadow-[0_0_10px_rgba(249,194,117,0.6)]"
                />
              </div>
              <div>
                <h3 className="square-px text-xl md:text-2xl text-white mb-2">
                  BRINGING THE COMMUNITY TOGETHER
                </h3>
                <p className="p-font text-gray-300 leading-relaxed text-sm">
                  WHEN ARENA ESPORTS APPROACHED US, THEY HAD A VISION: TO CREATE AN EXCITING PUBG MOBILE TOURNAMENT THAT WOULD ENERGIZE THE GAMING COMMUNITY AND SHOWCASE THEIR BRAND. AT SUPERNOVA GAMING, WE WERE READY TO TAKE ON THE CHALLENGE. WITH OUR EXPERTISE IN OPERATIONS, MARKETING, AND BROADCASTING, WE GOT TO WORK ON CRAFTING AN UNFORGETTABLE EVENT.
                </p>
              </div>
            </div>

            {/* Screenshot Card 1 */}
            <div className="relative rounded-3xl p-[1.5px] bg-gradient-to-r from-[#8b5cf6] via-[#ec4899] to-[#6366f1] shadow-[0_0_30px_rgba(168,85,247,0.3)]">
              <div className="relative overflow-hidden rounded-[22.5px] bg-[#0d071d]/90 p-3 backdrop-blur-xl h-64 sm:h-72 flex items-center justify-center">
                <img
                  src="/projects/arena2.webp"
                  alt="Winner team focus"
                  className="w-full h-full object-contain rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================
            ROW 2: A Thrilling Finale & Bringing the Action to Life
        ========================================================= */}
        <div
          ref={row2Ref}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20 transition-all duration-1000 ease-out ${
            isRow2Visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Block 1: A Thrilling Finale */}
          <div className="flex flex-col justify-between h-full gap-6">
            <div className="flex items-start gap-5">
              <div className="shrink-0 w-8 h-8 flex items-center justify-center mt-1">
                <img
                  src="/projects/cup.webp"
                  alt=""
                  className="w-7 h-7 object-contain filter drop-shadow-[0_0_10px_rgba(249,194,117,0.6)]"
                />
              </div>
              <div>
                <h3 className="square-px text-xl md:text-2xl text-white mb-2">
                  A THRILLING FINALE
                </h3>
                <p className="p-font text-gray-300 leading-relaxed text-sm">
                  AS THE TOURNAMENT CAME TO AN END, THE ENERGY WAS ELECTRIC. THE ARENA PUBG MOBILE CUP WAS MORE THAN JUST A COMPETITION—IT WAS A CELEBRATION OF GAMING, COMMUNITY, AND HIGH-LEVEL PLAY. FOR ARENA ESPORTS, IT WAS A CHANCE TO STRENGTHEN THEIR BRAND AND ENGAGE THEIR AUDIENCE. FOR US AT SUPERNOVA GAMING, IT WAS ANOTHER TESTAMENT TO OUR ABILITY TO CREATE, MARKET, AND DELIVER WORLD-CLASS ESPORTS EVENTS. THIS WAS JUST ONE TOURNAMENT, BUT IT'S MOMENTS LIKE THESE THAT REMIND US WHY WE LOVE WHAT WE DO: BRINGING PLAYERS TOGETHER, CREATING UNFORGETTABLE EXPERIENCES, AND PUSHING THE BOUNDARIES OF ESPORTS.
                </p>
              </div>
            </div>

            {/* Screenshot Card 2 */}
            <div className="relative rounded-3xl p-[1.5px] bg-gradient-to-r from-[#8b5cf6] via-[#ec4899] to-[#6366f1] shadow-[0_0_30px_rgba(168,85,247,0.3)]">
              <div className="relative overflow-hidden rounded-[22.5px] bg-[#0d071d]/90 p-3 backdrop-blur-xl h-64 sm:h-72 flex items-center justify-center">
                <img
                  src="/projects/arena3.webp"
                  alt="Highlights"
                  className="w-full h-full object-contain rounded-xl"
                />
              </div>
            </div>
          </div>

          {/* Block 2: Bringing the Action to Life */}
          <div className="flex flex-col justify-between h-full gap-6">
            <div className="flex items-start gap-5">
              <div className="shrink-0 w-8 h-8 flex items-center justify-center mt-1">
                <img
                  src="/projects/cup.webp"
                  alt=""
                  className="w-7 h-7 object-contain filter drop-shadow-[0_0_10px_rgba(249,194,117,0.6)]"
                />
              </div>
              <div>
                <h3 className="square-px text-xl md:text-2xl text-white mb-2">
                  BRINGING THE ACTION TO LIFE
                </h3>
                <p className="p-font text-gray-300 leading-relaxed text-sm">
                  WE DIDN'T JUST RUN THE TOURNAMENT—WE MADE IT AN IMMERSIVE EXPERIENCE FOR PLAYERS AND VIEWERS ALIKE. WITH CUSTOM OVERLAYS, REAL-TIME UPDATES, AND ENGAGING COMMENTARY, OUR BROADCAST PRODUCTION TURNED EVERY MATCH INTO A SPECTACLE. FANS COULD FOLLOW THE ACTION SEAMLESSLY, ENJOYING A PROFESSIONAL ESPORTS VIEWING EXPERIENCE.
                </p>
              </div>
            </div>

            {/* Screenshot Card 3 */}
            <div className="relative rounded-3xl p-[1.5px] bg-gradient-to-r from-[#8b5cf6] via-[#ec4899] to-[#6366f1] shadow-[0_0_30px_rgba(168,85,247,0.3)]">
              <div className="relative overflow-hidden rounded-[22.5px] bg-[#0d071d]/90 p-3 backdrop-blur-xl h-64 sm:h-72 flex items-center justify-center">
                <img
                  src="/projects/arena4.webp"
                  alt="Today's matches"
                  className="w-full h-full object-contain rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================
            ROW 3: Connecting with Players & Running a Smooth Tournament
        ========================================================= */}
        <div
          ref={row3Ref}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16 transition-all duration-1000 ease-out ${
            isRow3Visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Block 1: Connecting with Players */}
          <div className="flex flex-col justify-between h-full gap-6">
            <div className="flex items-start gap-5">
              <div className="shrink-0 w-8 h-8 flex items-center justify-center mt-1">
                <img
                  src="/projects/cup.webp"
                  alt=""
                  className="w-7 h-7 object-contain filter drop-shadow-[0_0_10px_rgba(249,194,117,0.6)]"
                />
              </div>
              <div>
                <h3 className="square-px text-xl md:text-2xl text-white mb-2">
                  CONNECTING WITH PLAYERS
                </h3>
                <p className="p-font text-gray-300 leading-relaxed text-sm">
                  WE KNEW THAT FOR THE TOURNAMENT TO BE A SUCCESS, WE HAD TO REACH THE RIGHT AUDIENCE. USING OUR DEEP CONNECTIONS IN THE GAMING COMMUNITY, WE LAUNCHED A TARGETED MARKETING CAMPAIGN THAT RESONATED WITH PUBG MOBILE PLAYERS. WORD SPREAD FAST, AND SOON WE HAD 80+ TEAMS READY TO COMPETE, BRINGING TOGETHER A PASSIONATE AND COMPETITIVE CROWD.
                </p>
              </div>
            </div>

            {/* Screenshot Card 4 */}
            <div className="relative rounded-3xl p-[1.5px] bg-gradient-to-r from-[#8b5cf6] via-[#ec4899] to-[#6366f1] shadow-[0_0_30px_rgba(168,85,247,0.3)]">
              <div className="relative overflow-hidden rounded-[22.5px] bg-[#0d071d]/90 p-3 backdrop-blur-xl h-64 sm:h-72 flex items-center justify-center">
                <img
                  src="/projects/arena1.webp"
                  alt="Casters Stream"
                  className="w-full h-full object-contain rounded-xl"
                />
              </div>
            </div>
          </div>

          {/* Block 2: Running a Smooth Tournament */}
          <div className="flex flex-col justify-between h-full gap-6">
            <div className="flex items-start gap-5">
              <div className="shrink-0 w-8 h-8 flex items-center justify-center mt-1">
                <img
                  src="/projects/cup.webp"
                  alt=""
                  className="w-7 h-7 object-contain filter drop-shadow-[0_0_10px_rgba(249,194,117,0.6)]"
                />
              </div>
              <div>
                <h3 className="square-px text-xl md:text-2xl text-white mb-2">
                  RUNNING A SMOOTH TOURNAMENT
                </h3>
                <p className="p-font text-gray-300 leading-relaxed text-sm">
                  A GREAT TOURNAMENT ISN'T JUST ABOUT THE MATCHES—IT'S ABOUT THE EXPERIENCE. FROM SETTING UP THE FORMAT TO COORDINATING MATCHES AND ENSURING FAIR PLAY, WE MADE SURE EVERYTHING RAN LIKE CLOCKWORK. OUR TEAM WAS ON TOP OF EVERY DETAIL, MAKING SURE PLAYERS COULD FOCUS ON WHAT THEY DO BEST: COMPETING.
                </p>
              </div>
            </div>

            {/* Screenshot Card 5 */}
            <div className="relative rounded-3xl p-[1.5px] bg-gradient-to-r from-[#8b5cf6] via-[#ec4899] to-[#6366f1] shadow-[0_0_30px_rgba(168,85,247,0.3)]">
              <div className="relative overflow-hidden rounded-[22.5px] bg-[#0d071d]/90 p-3 backdrop-blur-xl h-64 sm:h-72 flex items-center justify-center">
                <img
                  src="/projects/arena5.webp"
                  alt="Match standing"
                  className="w-full h-full object-contain rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================
            FOOTER TAGLINE SECTION
        ========================================================= */}
        <div
          ref={footerRef}
          className={`text-center transition-all duration-1000 ease-out ${
            isFooterVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <h3 className="square-px text-lg sm:text-xl md:text-2xl font-extrabold tracking-[0.2em] text-[#c084fc] uppercase">
            THAT'S WHAT SUPERNOVA GAMING IS ALL ABOUT..
          </h3>
        </div>
      </div>

      {/* Custom Smooth Floating & Scaling Animation for Bombs */}
      <style jsx>{`
        .floating-bomb-smooth {
          animation: floatScaleBomb 4s ease-in-out infinite alternate;
          will-change: transform;
        }

        @keyframes floatScaleBomb {
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