"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaLinkedin, FaYoutube, FaDiscord } from "react-icons/fa";

const NAV_LINKS = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "/about" },
  { label: "SERVICES", href: "/services" },
  { label: "CLIENTS", href: "/clients" },
  { label: "PROJECTS", href: "/projects" },
  { label: "CONTACT US", href: "/contact" },
];

const FLOATING_ROCKS_FOOTER = [
  { id: 1, src: "/rocks/rock.webp", size: 24, top: "15%", left: "8%", delay: "0s", duration: "7s", rotate: "18deg" },
  { id: 2, src: "/rocks/rock3.webp", size: 14, top: "28%", left: "4%", delay: "1.2s", duration: "8.5s", rotate: "-35deg" },
  { id: 3, src: "/rocks/rock2.webp", size: 20, top: "52%", left: "6%", delay: "2.5s", duration: "6.5s", rotate: "12deg" },
  { id: 4, src: "/rocks/rock5.webp", size: 16, top: "20%", right: "22%", delay: "0.8s", duration: "9s", rotate: "-22deg" },
  { id: 5, src: "/rocks/rock4.webp", size: 22, top: "12%", right: "8%", delay: "2s", duration: "7.8s", rotate: "85deg" },
];

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-[#070510] text-white pt-16 pb-8">
      {/* =========================================================
          BACKGROUND AMBIENT LIGHT & PARTICLES
      ========================================================= */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* Central Glow Effect */}
        <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#8b5cf6]/20 blur-[130px] rounded-full" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 w-[800px] h-[250px] bg-[#3b82f6]/15 blur-[150px] rounded-full" />

        {/* Ambient Small Floating Rocks */}
        {FLOATING_ROCKS_FOOTER.map((rock) => (
          <div
            key={rock.id}
            className="floating-rock absolute drop-shadow-[0_0_10px_rgba(168,85,247,0.35)]"
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
      </div>

      {/* =========================================================
          TOP CTA SECTION (READY TO ENTER ORBIT)
      ========================================================= */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 flex flex-col items-center text-center">
        {/* Floating Main Rocks Group (Left Graphic) */}
        <div className="pointer-events-none absolute top-0 left-2 sm:left-8 lg:left-12 w-32 sm:w-48 lg:w-64 floating-rocks-left">
          <Image
            src="/footer/footerrocks.webp"
            alt=""
            aria-hidden="true"
            width={256}
            height={256}
            className="w-full h-auto object-contain filter drop-shadow-[0_0_20px_rgba(168,85,247,0.4)]"
          />
        </div>

        {/* Floating Astronaut Graphic (Right Graphic) */}
        <div className="pointer-events-none absolute -top-6 right-2 sm:right-6 lg:right-10 w-36 sm:w-56 lg:w-72 floating-astronaut z-20">
          <Image
            src="/footer/astronaut.webp"
            alt="Astronaut"
            width={288}
            height={288}
            className="w-full h-auto object-contain filter drop-shadow-[0_0_25px_rgba(168,85,247,0.5)]"
          />
        </div>

        {/* Header Title */}
        <h2 className=" title-font tracking-[0.2em] uppercase text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
          READY TO ENTER ORBIT
        </h2>

        {/* Decorative Divider */}
        <div className="mt-4 mb-8 flex items-center justify-center gap-3 w-full max-w-xs sm:max-w-md">
          <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#a855f7]/60 to-[#F9C275]" />
          <span className="text-xs text-[#F9C275]">✦</span>
          <span className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#a855f7]/60 to-[#F9C275]" />
        </div>

        {/* START A PROJECT CTA Button */}
        <Link
          href="/contact"
          className="group relative z-30 inline-flex items-center justify-between gap-6 px-8 py-3.5 rounded-full bg-[#120a2a]/80 backdrop-blur-md border border-[#c084fc]/50 shadow-[0_0_25px_rgba(192,132,252,0.3)] hover:shadow-[0_0_35px_rgba(192,132,252,0.6)] hover:border-[#c084fc] transition-all duration-300 transform hover:-translate-y-0.5"
        >
          <span className="square-px text-sm sm:text-base font-bold tracking-[0.15em] text-white group-hover:text-[#e9d5ff]">
            START A PROJECT
          </span>
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#8b5cf6]/40 border border-[#c084fc]/60 text-white group-hover:bg-[#8b5cf6] transition-all duration-300">
            →
          </span>
        </Link>

        {/* Main Footer Planet Asset */}
        <div className="relative -mt-8 sm:-mt-38 sm:-mb-[20%] w-full max-w-5xl pointer-events-none select-none">
          <Image
            src="/footer/footerplanet.webp"
            alt="Planet"
            width={1024}
            height={512}
            className="w-full h-auto object-contain filter drop-shadow-[0_-10px_35px_rgba(168,85,247,0.4)]"
          />
        </div>
      </div>

      {/* =========================================================
          BOTTOM NAVIGATION & BRAND BAR
      ========================================================= */}
      <div className="relative z-20 mt-8 border-t border-white/10 bg-[#100821] py-8 -mb-12">
        <div className="mx-auto max-w-7xl px-6 flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Logo & Brand Info */}
          <div className="flex items-center gap-4 text-left">
            <div className="relative w-12 h-12 flex-shrink-0">
              <Image
                src="/whitelogo.webp"
                alt="Supernova Gaming Logo"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h3 className="square-px text-sm sm:text-base font-extrabold tracking-wider text-white uppercase">
                SUPERNOVA GAMING
              </h3>
              <p className="p-font  text-gray-400 font-light mt-0.5">
                Powered by Events, Esports, <br className="hidden sm:inline" />
                and Immersive Experiences
              </p>
            </div>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="square-px  tracking-wider text-gray-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-purple-400 hover:bg-purple-500/20 transition-all duration-200"
            >
              <FaInstagram className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-purple-400 hover:bg-purple-500/20 transition-all duration-200"
            >
              <FaLinkedin className="w-4 h-4" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-purple-400 hover:bg-purple-500/20 transition-all duration-200"
            >
              <FaYoutube className="w-4 h-4" />
            </a>
            <a
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Discord"
              className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-purple-400 hover:bg-purple-500/20 transition-all duration-200"
            >
              <FaDiscord className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* =========================================================
          ANIMATIONS & STYLES
      ========================================================= */}
      <style jsx>{`
        .floating-rock {
          animation: floatRock ease-in-out infinite alternate;
          will-change: transform;
        }

        .floating-rocks-left {
          animation: floatRocksGroup 7s ease-in-out infinite alternate;
          will-change: transform;
        }

        .floating-astronaut {
          animation: floatAstronaut 8s ease-in-out infinite alternate;
          will-change: transform;
        }

        @keyframes floatRock {
          0% { transform: translateY(0px) rotate(0deg); }
          100% { transform: translateY(-12px) rotate(8deg); }
        }

        @keyframes floatRocksGroup {
          0% { transform: translateY(0px) rotate(0deg) scale(1); }
          50% { transform: translateY(-10px) rotate(3deg) scale(1.02); }
          100% { transform: translateY(6px) rotate(-2deg) scale(0.98); }
        }

        @keyframes floatAstronaut {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-16px) rotate(4deg); }
          100% { transform: translateY(8px) rotate(-3deg); }
        }
      `}</style>
    </footer>
  );
}