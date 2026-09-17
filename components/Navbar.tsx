"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const links = [
    { name: "Home", href: "/" },
    { name: "About us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Clients", href: "/clients" },
    { name: "Projects", href: "/projects" },
    { name: "Contact us", href: "/contact" },
  ];

  const leftLinks = links.slice(0, 3);
  const rightLinks = links.slice(3);

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close menu when clicking outside of it
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  // Detect scroll to toggle blurred pill background + shrink
  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={` title-font fixed left-1/2 top-0 z-50 flex -translate-x-1/2 justify-center transition-all duration-500 ${
          scrolled ? "top-4 w-[94%] max-w-[1080px]" : "top-0 w-full"
        }`}
      >
        <nav
          className={`flex w-full items-center justify-between px-6 transition-all duration-500 md:justify-center md:gap-14 md:px-16 ${
            scrolled ? "rounded-full py-3 backdrop-blur-xl" : "rounded-none py-6"
          }`}
          style={{
            background: scrolled
              ? "linear-gradient(135deg, rgba(26,16,48,0.75) 0%, rgba(36,18,56,0.7) 45%, rgba(23,10,40,0.75) 100%)"
              : "linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.15) 60%, transparent 100%)",
            boxShadow: scrolled
              ? "0 0 0 1px rgba(168,85,247,0.15), 0 0 40px rgba(147,51,234,0.2), 0 8px 30px rgba(0,0,0,0.35)"
              : "none",
          }}
        >
          {/* LEFT LINKS */}
          <ul
            className={`hidden items-center md:flex font-extrabold uppercase tracking-wide text-white transition-all duration-500 ${
              scrolled ? "gap-8 text-sm" : "gap-10 text-base"
            }`}
          >
            {leftLinks.map((link) => (
              <li key={link.name} className="group relative">
                <Link
                  href={link.href}
                  className="inline-block transition-colors duration-300 hover:text-purple-300"
                  style={{ textShadow: "0 2px 8px rgba(0,0,0,0.6)" }}
                >
                  {link.name}
                </Link>
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 rounded-full bg-gradient-to-r from-purple-400 via-fuchsia-400 to-orange-300 shadow-[0_0_6px_rgba(216,180,254,0.8)] transition-all duration-300 group-hover:w-full" />
              </li>
            ))}
          </ul>

          {/* LOGO */}
          <Link
            href="/"
            className="relative z-10 flex items-center"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            {/* LOGO IMAGE */}
            <Image
              src="/whitelogo.webp"
              alt="Logo"
              width={48}
              height={48}
              className={`relative z-10 transition-all duration-500 ${
                hovered ? "scale-110" : "scale-100"
              } ${scrolled ? "h-9 w-9" : "h-12 w-12"}`}
            />
          </Link>

          {/* RIGHT LINKS */}
          <ul
            className={`hidden items-center md:flex font-extrabold uppercase tracking-wide text-white transition-all duration-500 ${
              scrolled ? "gap-8 text-sm" : "gap-10 text-base"
            }`}
          >
            {rightLinks.map((link) => (
              <li key={link.name} className="group relative">
                <Link
                  href={link.href}
                  className="inline-block transition-colors duration-300 hover:text-purple-300"
                  style={{ textShadow: "0 2px 8px rgba(0,0,0,0.6)" }}
                >
                  {link.name}
                </Link>
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 rounded-full bg-gradient-to-r from-purple-400 via-fuchsia-400 to-orange-300 shadow-[0_0_6px_rgba(216,180,254,0.8)] transition-all duration-300 group-hover:w-full" />
              </li>
            ))}
          </ul>

          {/* BURGER / X */}
          <button
            ref={buttonRef}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="relative z-10 flex h-6 w-7 flex-col items-center justify-center md:hidden"
          >
            <span
              className={`absolute h-0.5 w-7 rounded bg-white transition-all duration-300 ${
                open ? "rotate-45" : "-translate-y-2"
              }`}
            />
            <span
              className={`absolute h-0.5 w-7 rounded bg-white transition-all duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute h-0.5 w-7 rounded bg-white transition-all duration-300 ${
                open ? "-rotate-45" : "translate-y-2"
              }`}
            />
          </button>
        </nav>
      </div>

      {/* MOBILE MENU */}
      <div
        ref={menuRef}
        className={`title-font fixed left-1/2 z-50 flex w-[94%] max-w-[1080px] -translate-x-1/2 flex-col rounded-2xl p-6 backdrop-blur-xl transition-all duration-300 ${
          open ? "scale-y-100" : "scale-y-0"
        } ${scrolled ? "top-20" : "top-24"} origin-top`}
        style={{
          background:
            "linear-gradient(to bottom, rgba(10,5,20,0.95) 0%, rgba(10,5,20,0.85) 100%)",
        }}
      >
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => setOpen(false)}
            className="rounded-lg px-4 py-3 text-lg font-extrabold uppercase tracking-wide text-white transition-colors duration-300 hover:text-purple-300"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </>
  );
}