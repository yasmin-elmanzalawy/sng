"use client";

import { useEffect, useRef, useState } from "react";

// Floating Rocks for the Main About Section
const FLOATING_ROCKS_ABOUT = [
  { id: 1, src: "/rocks/rock.webp", size: 42, top: "30%", left: "14%", delay: "0s", duration: "7s", rotate: "28deg" },
  { id: 2, src: "/rocks/rock3.webp", size: 16, top: "38%", left: "12%", delay: "1.5s", duration: "8.5s", rotate: "-45deg" },
  { id: 3, src: "/rocks/rock2.webp", size: 30, top: "78%", left: "15%", delay: "3s", duration: "6.5s", rotate: "7deg" },
  { id: 4, src: "/rocks/rock5.webp", size: 18, top: "40%", left: "20%", delay: "0.8s", duration: "9s", rotate: "-18deg" },
  { id: 5, src: "/rocks/rock4.webp", size: 24, top: "18%", left: "32%", delay: "2.2s", duration: "10s", rotate: "115deg" },
  { id: 6, src: "/rocks/rock.webp", size: 14, top: "34%", left: "20%", delay: "4s", duration: "7.5s", rotate: "-70deg" },
  { id: 7, src: "/rocks/rock4.webp", size: 36, top: "75%", left: "9%", delay: "1.8s", duration: "8.2s", rotate: "140deg" },
  { id: 8, src: "/rocks/rock.webp", size: 22, top: "85%", right: "30%", delay: "1s", duration: "8.5s", rotate: "-32deg" },
  { id: 9, src: "/rocks/rock5.webp", size: 38, top: "83%", right: "27%", delay: "2.8s", duration: "9.5s", rotate: "85deg" },
  { id: 10, src: "/rocks/rock3.webp", size: 16, top: "80%", right: "33%", delay: "0.5s", duration: "6.8s", rotate: "-110deg" },
  { id: 11, src: "/rocks/rock4.webp", size: 28, top: "68%", right: "22%", delay: "3.5s", duration: "7.2s", rotate: "50deg" },
  { id: 12, src: "/rocks/rock2.webp", size: 18, top: "76%", right: "18%", delay: "1.2s", duration: "8.8s", rotate: "-155deg" },
];

// Floating Rocks positioned around the Stats / Numbers Section
const FLOATING_ROCKS_STATS = [
  { id: 101, src: "/rocks/rock.webp", size: 20, top: "12%", left: "18%", delay: "0s", duration: "7s", rotate: "15deg" },
  { id: 102, src: "/rocks/rock5.webp", size: 32, top: "28%", left: "8%", delay: "1.2s", duration: "8s", rotate: "-25deg" },
  { id: 103, src: "/rocks/rock2.webp", size: 28, top: "80%", left: "7%", delay: "2.5s", duration: "6s", rotate: "45deg" },
  { id: 104, src: "/rocks/rock4.webp", size: 18, top: "88%", left: "15%", delay: "0.5s", duration: "9s", rotate: "10deg" },
  { id: 105, src: "/rocks/rock3.webp", size: 20, top: "72%", left: "53%", delay: "1.8s", duration: "7.5s", rotate: "-80deg" },
  { id: 106, src: "/rocks/rock.webp", size: 14, top: "78%", left: "59%", delay: "3s", duration: "8.5s", rotate: "120deg" },
  { id: 107, src: "/rocks/rock3.webp", size: 18, top: "10%", right: "24%", delay: "0.2s", duration: "6.5s", rotate: "-15deg" },
  { id: 108, src: "/rocks/rock2.webp", size: 26, top: "8%", right: "14%", delay: "2s", duration: "9s", rotate: "60deg" },
  { id: 109, src: "/rocks/rock5.webp", size: 36, top: "6%", right: "7%", delay: "1s", duration: "8s", rotate: "-40deg" },
  { id: 110, src: "/rocks/rock4.webp", size: 20, top: "25%", right: "25%", delay: "2.8s", duration: "7s", rotate: "100deg" },
];

// Floating Rocks positioned in Mission / Vision Section
const FLOATING_ROCKS_MISSION = [
  { id: 201, src: "/rocks/rock.webp", size: 16, top: "18%", left: "12%", delay: "0s", duration: "6.5s", rotate: "12deg" },
  { id: 202, src: "/rocks/rock3.webp", size: 22, top: "22%", left: "16%", delay: "1.2s", duration: "8s", rotate: "-35deg" },
  { id: 203, src: "/rocks/rock5.webp", size: 18, top: "12%", right: "12%", delay: "0.8s", duration: "7s", rotate: "40deg" },
  { id: 204, src: "/rocks/rock2.webp", size: 20, top: "20%", right: "16%", delay: "2s", duration: "9s", rotate: "-15deg" },
  { id: 205, src: "/rocks/rock4.webp", size: 24, top: "28%", right: "14%", delay: "1.5s", duration: "8.2s", rotate: "85deg" },
];

// Floating Rocks positioned in Features Section
const FLOATING_ROCKS_FEATURES = [
  { id: 301, src: "/rocks/rock.webp", size: 28, top: "10%", left: "5%", delay: "0s", duration: "7.5s", rotate: "25deg" },
  { id: 302, src: "/rocks/rock3.webp", size: 18, top: "22%", left: "2%", delay: "1s", duration: "8.5s", rotate: "-15deg" },
  { id: 303, src: "/rocks/rock2.webp", size: 22, top: "65%", left: "4%", delay: "2.2s", duration: "6.8s", rotate: "40deg" },
  { id: 304, src: "/rocks/rock5.webp", size: 32, top: "85%", left: "3%", delay: "0.4s", duration: "9.2s", rotate: "-55deg" },
  { id: 305, src: "/rocks/rock4.webp", size: 24, top: "15%", right: "5%", delay: "1.8s", duration: "7s", rotate: "110deg" },
  { id: 306, src: "/rocks/rock.webp", size: 16, top: "35%", right: "2%", delay: "3s", duration: "8s", rotate: "-30deg" },
  { id: 307, src: "/rocks/rock3.webp", size: 20, top: "60%", right: "6%", delay: "0.6s", duration: "6.5s", rotate: "75deg" },
  { id: 308, src: "/rocks/rock2.webp", size: 30, top: "88%", right: "4%", delay: "1.4s", duration: "9.5s", rotate: "-80deg" },
];

const STATS_DATA = [
  { value: "77K+", label: "PLAYERS" },
  { value: "5M+", label: "FACEBOOK REACH" },
  { value: "11K+", label: "MATCHES" },
  { value: "135+", label: "TOURNAMENTS" },
];

const FEATURES_DATA = [
  {
    numberImg: "/about/1.webp",
    title: "CUSTOMIZED SOLUTIONS",
    description: "We tailor our services to meet each client's needs, helping them grow and achieve their goals within their budget.",
  },
  {
    numberImg: "/about/2.webp",
    title: "ENHANCED EXPERIENCE",
    description: "We ensure top-quality solutions that elevate the gaming experience.",
  },
  {
    numberImg: "/about/3.webp",
    title: "CORE VALUES",
    description: "We prioritize innovation, collaboration, quality, expertise, and integrity.",
  },
];

export default function AboutPlanet() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isVisible, setIsVisible] = useState(false);
  const [isStatsVisible, setIsStatsVisible] = useState(false);
  const [isMissionVisible, setIsMissionVisible] = useState(false);
  const [isFeaturesVisible, setIsFeaturesVisible] = useState(false);

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

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsStatsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = missionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsMissionVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = featuresRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsFeaturesVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <div className="w-full text-white">
      {/* =========================================================
          1. MAIN ABOUT SECTION
      ========================================================= */}
      <section ref={sectionRef} className="relative w-full overflow-hidden px-6 py-16 sm:py-24">
        {/* Ambient Particles */}
        <div className="pointer-events-none absolute inset-0 z-0 opacity-60">
          <span className="particle particle-1" />
          <span className="particle particle-2" />
          <span className="particle particle-3" />
          <span className="particle particle-4" />
          <span className="particle particle-5" />
        </div>

        {/* Floating Space Rocks */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          {FLOATING_ROCKS_ABOUT.map((rock) => (
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
          {/* Section Header */}
          <div
            className={`flex flex-col items-center justify-center transition-all duration-700 ease-out ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            <h2 className="title-font text-center text-3xl font-bold tracking-wider sm:text-4xl">
              Parallel Universe for Gamers
            </h2>
            <div className="mt-3 flex items-center justify-center gap-3">
              <span className="h-[1px] w-12 bg-gradient-to-r from-transparent via-[#a855f7]/60 to-[#F9C275]" />
              <span className="text-xs text-[#F9C275]">✦</span>
              <span className="h-[1px] w-12 bg-gradient-to-l from-transparent via-[#a855f7]/60 to-[#F9C275]" />
            </div>
          </div>

          {/* Main Grid */}
          <div className="mt-12 flex flex-col-reverse items-center justify-between gap-12 lg:flex-row lg:gap-16">
            <div className="max-w-2xl text-left">
              <p
                className={`tagline-font text-lg font-medium bg-gradient-to-r from-[#c084fc] to-[#e9d5ff] bg-clip-text text-transparent transition-all duration-700 ease-out ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                }`}
                style={{ transitionDelay: isVisible ? "200ms" : "0ms" }}
              >
                Driven by Discipline. Powered by Innovation. Guided by Purpose.
              </p>

              <p
                className={`p-font mt-4 leading-relaxed text-gray-300 transition-all duration-700 ease-out ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                }`}
                style={{ transitionDelay: isVisible ? "400ms" : "0ms" }}
              >
                SuperNova Gaming (SNG) is a fully remote gaming organization—not just an Esports organization, but a vibrant gaming community fueled by passion and dedication. Established in 2019, we have been on a mission to elevate the gaming experience, empower Esports talents, and foster a sense of togetherness among gaming enthusiasts.
              </p>
            </div>

            {/* Astronaut Graphic Container */}
            <div
              className={`planet-wrap relative shrink-0 transition-all duration-1000 ease-out ${
                isVisible ? "translate-y-0 scale-100 opacity-100" : "translate-y-8 scale-90 opacity-0"
              }`}
            >
              <div className="orbit-ring" aria-hidden="true" />
              <button type="button" aria-label="Learn more about us" className="planet-button">
                <div className="astronaut-float">
                  <img src="/about/astronautabout.webp" alt="Astronaut" className="planet-image" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          2. NUMBERS / STATS SECTION WITH SMALL PLANET
      ========================================================= */}
      <section ref={statsRef} className="relative w-full overflow-hidden px-6 py-20 sm:py-28">
        {/* Floating Space Rocks */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          {FLOATING_ROCKS_STATS.map((rock) => (
            <img
              key={rock.id}
              src={rock.src}
              alt=""
              aria-hidden="true"
              className="floating-rock absolute object-contain drop-shadow-[0_0_10px_rgba(249,194,117,0.25)]"
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

        {/* Small Planet Element (Top-Left Positioned) */}
        <div className="pointer-events-none absolute top-4 left-[4%] z-30 w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 floating-planet">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-contain filter drop-shadow-[0_0_25px_rgba(168,85,247,0.5)]"
          >
            <source src="/about/smallplanet.mov" type='video/mp4; codecs="hvc1"' />
            <source src="/about/smallplanet.mov" type="video/quicktime" />
            <source src="/about/smallplanet.mov" type="video/mp4" />
          </video>
        </div>

        <div className="relative z-20 mx-auto max-w-6xl text-center">
          {/* Header */}
          <div
            className={`flex flex-col items-center justify-center transition-all duration-700 ease-out ${
              isStatsVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            <h2 className="title-font text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-[0.2em] text-white uppercase">
              SuperNova Gaming in Numbers
            </h2>
            <div className="mt-3 flex items-center justify-center gap-3">
              <span className="h-[1px] w-12 bg-gradient-to-r from-transparent via-[#a855f7]/60 to-[#F9C275]" />
              <span className="text-xs text-[#F9C275]">✦</span>
              <span className="h-[1px] w-12 bg-gradient-to-l from-transparent via-[#a855f7]/60 to-[#F9C275]" />
            </div>
            <p className="p-font mt-4 text-base sm:text-lg text-gray-300 font-light">
              Our numbers within the past year tell the story
            </p>
          </div>

          {/* Stats Numbers Grid */}
          <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
            {STATS_DATA.map((stat, idx) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center justify-center text-center w-full transition-all duration-700 ease-out ${
                  isStatsVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                }`}
                style={{ transitionDelay: isStatsVisible ? `${200 + idx * 150}ms` : "0ms" }}
              >
                <span className="title-font text-4xl sm:text-5xl font-black tracking-wider text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] text-center">
                  {stat.value}
                </span>
                <span className="tagline-font mt-3 text-[10px] sm:text-xs font-semibold tracking-wider text-gray-400 uppercase text-center block max-w-[140px] sm:max-w-none leading-snug">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          3. MISSION & VISION SECTION
      ========================================================= */}
      <section ref={missionRef} className="relative w-full overflow-hidden px-6 pt-16 pb-24 sm:pt-24 sm:pb-32">
        {/* Left Bottom Cloud Background */}
        <div className="pointer-events-none absolute bottom-0 left-0 z-10 w-[45%] max-w-[500px] sm:w-[38%] md:w-[32%] lg:w-[28%] opacity-90 select-none">
          <img src="/about/leftclouds.png" alt="" aria-hidden="true" className="w-full h-auto object-contain object-bottom-left" />
        </div>

        {/* Right Bottom Cloud Background */}
        <div className="pointer-events-none absolute bottom-0 right-0 z-10 w-[45%] max-w-[500px] sm:w-[38%] md:w-[32%] lg:w-[28%] opacity-90 select-none">
          <img src="/about/rightclouds.png" alt="" aria-hidden="true" className="w-full h-auto object-contain object-bottom-right" />
        </div>

        {/* Floating Rocks in Mission/Vision */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          {FLOATING_ROCKS_MISSION.map((rock) => (
            <img
              key={rock.id}
              src={rock.src}
              alt=""
              aria-hidden="true"
              className="floating-rock absolute object-contain drop-shadow-[0_0_10px_rgba(192,132,252,0.3)]"
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

        <div className="relative z-20 mx-auto max-w-5xl">
          {/* Ringed Planet Header Centered */}
          <div
            className={`flex justify-center transition-all duration-700 ease-out ${
              isMissionVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 floating-planet">
              <img
                src="/about/planet.webp"
                alt="Planet"
                className="w-full h-full object-contain filter drop-shadow-[0_0_20px_rgba(168,85,247,0.5)]"
              />
            </div>
          </div>

          {/* Mission & Vision Grid */}
          <div className="mt-8 grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
            {/* Our Mission Box */}
            <div
              className={`flex flex-col items-center text-center transition-all duration-700 ease-out ${
                isMissionVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
              style={{ transitionDelay: isMissionVisible ? "200ms" : "0ms" }}
            >
              <h3 className="title-font text-lg sm:text-xl font-bold tracking-[0.2em] text-white uppercase">
                OUR MISSION
              </h3>
              <div className="mt-3 flex items-center justify-center gap-3">
                <span className="h-[1px] w-10 bg-gradient-to-r from-transparent via-[#a855f7]/60 to-[#F9C275]" />
                <span className="text-[10px] text-[#F9C275]">✦</span>
                <span className="h-[1px] w-10 bg-gradient-to-l from-transparent via-[#a855f7]/60 to-[#F9C275]" />
              </div>
              <p className="p-font mt-6 max-w-md text-sm sm:text-base leading-relaxed text-gray-300 font-light">
                To support organizations in enhancing tournament management, simplifying workflows, and boosting media and content creation. We believe in collaboration to elevate and advance the gaming community.
              </p>
            </div>

            {/* Our Vision Box */}
            <div
              className={`flex flex-col items-center text-center transition-all duration-700 ease-out ${
                isMissionVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
              style={{ transitionDelay: isMissionVisible ? "400ms" : "0ms" }}
            >
              <h3 className="title-font text-lg sm:text-xl font-bold tracking-[0.2em] text-white uppercase">
                OUR VISION
              </h3>
              <div className="mt-3 flex items-center justify-center gap-3">
                <span className="h-[1px] w-10 bg-gradient-to-r from-transparent via-[#a855f7]/60 to-[#F9C275]" />
                <span className="text-[10px] text-[#F9C275]">✦</span>
                <span className="h-[1px] w-10 bg-gradient-to-l from-transparent via-[#a855f7]/60 to-[#F9C275]" />
              </div>
              <p className="p-font mt-6 max-w-md text-sm sm:text-base leading-relaxed text-gray-300 font-light">
                To revolutionize gaming experiences globally By providing high-quality, innovative solutions that cater to the unique needs of our clients. From tournament management to content creation and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          4. WHY CHOOSE US / FEATURES SECTION
      ========================================================= */}
      <section ref={featuresRef} className="relative w-full overflow-hidden px-6 py-20 sm:py-32">
        {/* Floating Space Rocks */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          {FLOATING_ROCKS_FEATURES.map((rock) => (
            <img
              key={rock.id}
              src={rock.src}
              alt=""
              aria-hidden="true"
              className="floating-rock absolute object-contain drop-shadow-[0_0_12px_rgba(249,194,117,0.3)]"
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

        <div className="relative z-10 mx-auto max-w-4xl">
          <div className="flex flex-col gap-12 sm:gap-16">
            {FEATURES_DATA.map((item, idx) => (
              <div
                key={item.title}
                className={`flex flex-col sm:flex-row items-start gap-4 sm:gap-6 transition-all duration-700 ease-out ${
                  isFeaturesVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: isFeaturesVisible ? `${idx * 200}ms` : "0ms" }}
              >
                {/* Number Image Asset */}
                <div className="shrink-0 w-12 sm:w-14 h-12 sm:h-14 flex items-center justify-center">
                  <img
                    src={item.numberImg}
                    alt={`${idx + 1}`}
                    className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(192,132,252,0.5)]"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 pt-1">
                  <h3 className="title-font text-lg sm:text-xl font-extrabold tracking-wider text-white uppercase">
                    {item.title}
                  </h3>
                  <p className="p-font mt-2 text-sm sm:text-base leading-relaxed text-gray-300 font-light max-w-2xl">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          STYLES & ANIMATIONS
      ========================================================= */}
      <style jsx>{`
        .floating-rock {
          animation: floatRock ease-in-out infinite alternate;
          will-change: transform;
        }

        .floating-planet {
          animation: floatPlanet 8s ease-in-out infinite alternate;
          will-change: transform;
        }

        @keyframes floatRock {
          0% { transform: translateY(0px) rotate(0deg) scale(1); }
          50% { transform: translateY(-10px) rotate(6deg) scale(1.05); }
          100% { transform: translateY(6px) rotate(-5deg) scale(0.95); }
        }

        @keyframes floatPlanet {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(3deg); }
          100% { transform: translateY(8px) rotate(-2deg); }
        }

        .particle {
          position: absolute;
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: #c084fc;
          box-shadow: 0 0 6px #c084fc;
          animation: floatUp 12s linear infinite;
        }

        .particle-1 { left: 18%; top: 80%; animation-duration: 14s; animation-delay: 0s; }
        .particle-2 { left: 28%; top: 90%; animation-duration: 10s; animation-delay: 2s; }
        .particle-3 { left: 68%; top: 85%; animation-duration: 16s; animation-delay: 1s; }
        .particle-4 { left: 78%; top: 75%; animation-duration: 11s; animation-delay: 4s; }
        .particle-5 { left: 48%; top: 95%; animation-duration: 13s; animation-delay: 3s; }

        @keyframes floatUp {
          0% { transform: translateY(0); opacity: 0; }
          10% { opacity: 0.8; }
          90% { opacity: 0.5; }
          100% { transform: translateY(-220px); opacity: 0; }
        }

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
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .planet-button {
          position: relative;
          width: 320px;
          height: 320px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0;
          padding: 0;
          border: 0;
          background: transparent;
          cursor: pointer;
          overflow: visible;
          appearance: none;
        }

        .astronaut-float {
          width: 320px;
          height: 320px;
          animation: astronautFloat 6s ease-in-out infinite alternate;
          will-change: transform;
        }

        @keyframes astronautFloat {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-16px) rotate(3deg);
          }
          100% {
            transform: translateY(10px) rotate(-2deg);
          }
        }

        .planet-image {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: contain;
          pointer-events: none;
        }

        @media (max-width: 1024px) {
          .planet-wrap { width: 330px; height: 330px; }
          .planet-button, .astronaut-float { width: 290px; height: 290px; }
          .orbit-ring { width: 330px; height: 330px; margin-top: -165px; margin-left: -165px; }
        }

        @media (max-width: 640px) {
          .planet-wrap { width: 300px; height: 300px; }
          .planet-button, .astronaut-float { width: 270px; height: 270px; }
          .orbit-ring { width: 300px; height: 300px; margin-top: -150px; margin-left: -150px; }
          .floating-rock { opacity: 0.5; scale: 0.75; }
        }
      `}</style>
    </div>
  );
}