"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const SERVICES_DATA = [
  {
    id: "01",
    title: "GAMING COMMUNITY MANAGEMENT",
    description:
      "Seamless setup, efficient management, and valuable consultation for gaming communities, and discord servers.",
    image: "/services/gamecontroler.webp",
    rocks: [
      { src: "/rocks/rock.webp", size: 18, top: "10%", left: "8%", delay: "0s", duration: "4s", rotate: "15deg" },
      { src: "/rocks/rock3.webp", size: 14, top: "70%", left: "12%", delay: "1.2s", duration: "5.5s", rotate: "-25deg" },
      { src: "/rocks/rock2.webp", size: 16, top: "15%", right: "10%", delay: "0.5s", duration: "4.8s", rotate: "40deg" },
      { src: "/rocks/rock5.webp", size: 12, top: "75%", right: "14%", delay: "1.8s", duration: "6s", rotate: "-10deg" },
    ],
  },
  {
    id: "02",
    title: "TOURNAMENT OPERATION / HOSTING",
    description:
      "Expert management and execution of gaming tournaments and events with 5+ years of experience.",
    image: "/services/cup.webp",
    rocks: [
      { src: "/rocks/rock4.webp", size: 16, top: "12%", left: "10%", delay: "0.4s", duration: "5s", rotate: "-15deg" },
      { src: "/rocks/rock2.webp", size: 15, top: "68%", left: "14%", delay: "1.5s", duration: "4.2s", rotate: "30deg" },
      { src: "/rocks/rock.webp", size: 20, top: "20%", right: "8%", delay: "0.8s", duration: "6s", rotate: "8deg" },
      { src: "/rocks/rock3.webp", size: 13, top: "72%", right: "12%", delay: "2s", duration: "5.2s", rotate: "-45deg" },
    ],
  },
  {
    id: "03",
    title: "CONTENT CREATION, VOICE OVER AND SCRIPT WRITING",
    description:
      "High quality creation of gaming content including engaging voice overs and well crafted scripts.",
    image: "/services/mic.webp",
    rocks: [
      { src: "/rocks/rock2.webp", size: 17, top: "14%", left: "12%", delay: "0.2s", duration: "5.8s", rotate: "20deg" },
      { src: "/rocks/rock5.webp", size: 13, top: "74%", left: "8%", delay: "1.1s", duration: "4.5s", rotate: "-30deg" },
      { src: "/rocks/rock4.webp", size: 18, top: "18%", right: "10%", delay: "1.7s", duration: "6.2s", rotate: "12deg" },
      { src: "/rocks/rock.webp", size: 14, top: "65%", right: "15%", delay: "0.6s", duration: "4.9s", rotate: "-18deg" },
    ],
  },
  {
    id: "04",
    title: "ASSETS CREATION – VIDEO EDITING",
    description: "Innovative and captivating design for gaming assets.",
    image: "/services/clip.webp",
    rocks: [
      { src: "/rocks/rock3.webp", size: 15, top: "12%", left: "14%", delay: "0.9s", duration: "4.6s", rotate: "-10deg" },
      { src: "/rocks/rock.webp", size: 18, top: "70%", left: "10%", delay: "0.3s", duration: "5.4s", rotate: "35deg" },
      { src: "/rocks/rock5.webp", size: 14, top: "16%", right: "12%", delay: "1.4s", duration: "6.5s", rotate: "-20deg" },
      { src: "/rocks/rock2.webp", size: 16, top: "72%", right: "8%", delay: "2.1s", duration: "4.8s", rotate: "15deg" },
    ],
  },
  {
    id: "05",
    title: "GAMING SOCIAL MEDIA MANAGEMENT",
    description:
      "Skillful team for client social media platforms with a dedicated focus on gaming content.",
    image: "/services/social-media.webp",
    rocks: [
      { src: "/rocks/rock5.webp", size: 16, top: "10%", left: "10%", delay: "0.6s", duration: "5.2s", rotate: "25deg" },
      { src: "/rocks/rock4.webp", size: 14, top: "72%", left: "12%", delay: "1.3s", duration: "4.4s", rotate: "-35deg" },
      { src: "/rocks/rock3.webp", size: 18, top: "15%", right: "14%", delay: "0.1s", duration: "6.1s", rotate: "10deg" },
      { src: "/rocks/rock.webp", size: 15, top: "68%", right: "10%", delay: "1.9s", duration: "5.0s", rotate: "-15deg" },
    ],
  },
];

interface ServiceCardProps {
  service: (typeof SERVICES_DATA)[number];
  isVisible: boolean;
  delay: number;
}

export default function ServicesPage() {
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
    <section className="relative min-h-screen w-full text-white py-8 sm:pb-8 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#6d28d9]/15 blur-[160px] rounded-full" />
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[900px] h-[350px] bg-[#4c1d95]/20 blur-[180px] rounded-full" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div ref={headerRef} className="mb-8 flex flex-col items-center justify-center text-center">
          <h2
            className={`title-font text-white transition-all duration-700 ease-out ${
              isHeaderVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            SERVICES
          </h2>

          {/* Decorative line with center star */}
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

          {/* Solid White Subheading */}
          <p
            className={`p-font mt-6 text-xl font-semibold tracking-tight text-white/90 sm:text-2xl transition-all duration-700 ease-out ${
              isHeaderVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
            style={{
              textAlign: "center",
              transitionDelay: isHeaderVisible ? "300ms" : "0ms",
            }}
          >
            Customizable Services that suit your needs.
          </p>

          {/* Gradient Description */}
          <p
            className={`p-font mt-2 max-w-xl bg-gradient-to-r from-purple-200 via-purple-300 to-amber-200 bg-clip-text text-transparent sm:text-lg transition-all duration-700 ease-out ${
              isHeaderVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
            style={{
              textAlign: "center",
              marginLeft: "auto",
              marginRight: "auto",
              transitionDelay: isHeaderVisible ? "450ms" : "0ms",
            }}
          >
            From content to community, we help you build, grow and shine in the gaming universe.
          </p>
        </div>

        {/* Cards Wrapper */}
        <div ref={cardsRef}>
          {/* Top Row (3 Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 items-stretch">
            {SERVICES_DATA.slice(0, 3).map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                isVisible={isCardsVisible}
                delay={200 + index * 150}
              />
            ))}
          </div>

          {/* Bottom Row (2 Cards Centered) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
            {SERVICES_DATA.slice(3, 5).map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                isVisible={isCardsVisible}
                delay={200 + (index + 3) * 150}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, isVisible, delay }: ServiceCardProps) {
  return (
    <div
      className={`group relative flex flex-col justify-between rounded-2xl bg-[#0d0722]/80 backdrop-blur-xl border border-[#3b1d62]/60 p-6 sm:p-7 shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-700 ease-out hover:border-[#a855f7] hover:shadow-[0_0_30px_rgba(168,85,247,0.25)] hover:-translate-y-1 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
      style={{ transitionDelay: isVisible ? `${delay}ms` : "0ms" }}
    >
      {/* Neon Purple Inner Glow Gradient Border */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-[#a855f7]/20 via-transparent to-[#12072b] opacity-60 group-hover:opacity-100 transition-opacity duration-300" />

      {/* TOP BAR: Number & Sparkle */}
      <div className="relative z-10 flex items-center justify-between mb-2">
        <span className="font-mono text-sm font-semibold text-[#a855f7] tracking-wider">
          {service.id}
        </span>
        <span className="text-[#c084fc] text-xs opacity-70 group-hover:opacity-100 transition-opacity">
          ✦
        </span>
      </div>

      {/* CENTER: 3D Image & Floating Rocks */}
      <div className="relative z-10 my-4 flex items-center justify-center h-48 sm:h-52 w-full">
        {/* Floating Rocks around image */}
        {service.rocks.map((rock, idx) => (
          <div
            key={idx}
            className="card-floating-rock absolute pointer-events-none z-0 filter drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]"
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
          >
            <Image
              src={rock.src}
              alt=""
              aria-hidden="true"
              fill
              className="object-contain"
            />
          </div>
        ))}

        {/* Main 3D Asset Image */}
        <div className="relative z-10 w-34 h-34 sm:w-38 sm:h-38 transition-transform duration-500 ease-out group-hover:scale-105">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-contain filter drop-shadow-[0_10px_25px_rgba(168,85,247,0.45)]"
          />
        </div>
      </div>

      {/* BOTTOM CONTENT */}
      <div className="relative z-10 flex flex-col flex-1 justify-between pt-2">
        <div>
          <h3 className="square-px text-center text-lg font-extrabold tracking-[0.1em] text-white uppercase leading-snug mb-3 min-h-[2.5rem]">
            {service.title}
          </h3>
          <p className="p-font text-[11px] sm:text-xs text-gray-400 font-medium leading-relaxed tracking-wider mb-6">
            {service.description}
          </p>
        </div>
      </div>

      {/* KEYFRAME ANIMATIONS FOR FLOATING ROCKS */}
      <style jsx>{`
        .card-floating-rock {
          animation: cardRockFloat ease-in-out infinite alternate;
          will-change: transform;
        }

        @keyframes cardRockFloat {
          0% {
            transform: translateY(0px) rotate(0deg) scale(1);
          }
          50% {
            transform: translateY(-8px) rotate(6deg) scale(1.05);
          }
          100% {
            transform: translateY(6px) rotate(-6deg) scale(0.95);
          }
        }
      `}</style>
    </div>
  );
}