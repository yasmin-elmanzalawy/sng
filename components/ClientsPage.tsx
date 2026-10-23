"use client";

import React, { useEffect, useRef, useState } from "react";

// Client Logos mapped from public/clients/ with explicit scaling and sizing preserved
const CLIENT_LOGOS = [
  { name: "Playhera", src: "/clients/playhera.webp", customStyle: "h-20 sm:h-24 w-auto scale-125 sm:scale-150" },
  { name: "Niko Partners", src: "/clients/niko.webp", customStyle: "h-20 sm:h-24 w-auto scale-125 sm:scale-150" },
  { name: "GB Arena", src: "/clients/gb.webp", customStyle: "h-24 sm:h-32 w-auto scale-125 sm:scale-150" },
  { name: "05 Games", src: "/clients/games.webp", customStyle: "h-24 sm:h-32 w-auto scale-125 sm:scale-150" },
  { name: "Frenzy", src: "/clients/frenzy.webp", customStyle: "h-20 sm:h-28 w-auto scale-125 sm:scale-150" },
  { name: "The Esports & Gaming Agency", src: "/clients/esports.webp", customStyle: "h-24 sm:h-32 w-auto scale-125 sm:scale-150" },
];

export default function ClientsPage() {
  const clientsSectionRef = useRef<HTMLDivElement>(null);
  const contactSectionRef = useRef<HTMLDivElement>(null);

  const [isClientsVisible, setIsClientsVisible] = useState(false);
  const [isContactVisible, setIsContactVisible] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const el = clientsSectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsClientsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = contactSectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsContactVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <section className="relative min-h-screen w-full text-white py-12 sm:pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Ambient purple background glows */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] bg-[#6d28d9]/15 blur-[170px] rounded-full" />
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[950px] h-[400px] bg-[#4c1d95]/20 blur-[190px] rounded-full" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* =========================================================
            SECTION 1: CLIENTS & LOGOS
        ========================================================= */}
        <div ref={clientsSectionRef} className="mb-24">
          {/* Header */}
          <div className="flex flex-col items-center justify-center text-center mb-10">
            <h2
              className={`title-font text-3xl sm:text-4xl lg:text-5xl text-white transition-all duration-700 ease-out ${
                isClientsVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
            >
              CLIENTS
            </h2>

            {/* Star Divider */}
            <div
              className={`mt-3 flex items-center justify-center gap-3 transition-all duration-700 ease-out ${
                isClientsVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: isClientsVisible ? "150ms" : "0ms" }}
            >
              <span className="h-[1px] w-12 bg-gradient-to-r from-transparent via-[#a855f7]/60 to-[#F9C275]" />
              <span className="text-xs text-[#F9C275]">✦</span>
              <span className="h-[1px] w-12 bg-gradient-to-l from-transparent via-[#a855f7]/60 to-[#F9C275]" />
            </div>

            {/* Subtitle */}
            <p
              className={`mt-4 p-font !text-center text-sm sm:text-base text-gray-300 font-light tracking-wide max-w-2xl transition-all duration-700 ease-out ${
                isClientsVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
              style={{ transitionDelay: isClientsVisible ? "300ms" : "0ms" }}
            >
              Step into the world of Supernova Games—where innovation meets adventure
            </p>
          </div>

          {/* Pointing Astronaut & Logo Card Container */}
          <div className="relative max-w-4xl mx-auto">
            {/* Pointing Astronaut Asset (Positioned to bottom-left outside logo box) */}
            <div
              className={`relative lg:absolute lg:-left-46 lg:-bottom-24 z-20 w-40 h-52 sm:w-48 sm:h-60 lg:w-56 lg:h-68 shrink-0 mx-auto lg:mx-0 mb-6 lg:mb-0 transition-all duration-700 ease-out ${
                isClientsVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
              }`}
              style={{ transitionDelay: isClientsVisible ? "400ms" : "0ms" }}
            >
              <img
                src="/clients/astroclientpage.webp"
                alt="Supernova Astronaut"
                className="w-full h-full object-contain filter drop-shadow-[0_0_20px_rgba(168,85,247,0.4)]"
              />
            </div>

            {/* Multi-Color Gradient Border Outer Wrapper */}
            <div
              className={`relative w-full rounded-[36px] p-[1.5px] bg-gradient-to-r from-[#8b5cf6] via-[#ec4899] to-[#6366f1] shadow-[0_0_50px_rgba(168,85,247,0.4)] transition-all duration-700 ease-out ${
                isClientsVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: isClientsVisible ? "500ms" : "0ms" }}
            >
              {/* Inner Dark Glass Card */}
              <div className="relative z-10 w-full overflow-hidden rounded-[34px] bg-[#0d071d]/90 p-6 sm:p-10 md:p-12 backdrop-blur-2xl">
                {/* Glow Accents */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-purple-600/20 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-indigo-600/15 blur-3xl" />

                {/* Grid of Client Logos with Large Image Display */}
                <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-10 items-center justify-items-center w-full py-4">
                  {CLIENT_LOGOS.map((client) => (
                    <div
                      key={client.name}
                      className="flex items-center justify-center w-full min-h-[100px] sm:min-h-[120px] p-2 transition-transform duration-300 hover:scale-110"
                    >
                      <img
                        src={client.src}
                        alt={client.name}
                        className={`max-w-none object-contain filter brightness-125 contrast-105 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] ${client.customStyle}`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Tagline Paragraphs below Logos */}
          <div
            className={`mt-12 !text-center p-font max-w-2xl mx-auto space-y-1 text-xs sm:text-sm text-gray-300 font-light transition-all duration-700 ease-out ${
              isClientsVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
            style={{ transitionDelay: isClientsVisible ? "650ms" : "0ms" }}
          >
            <p className="font-semibold text-white/90">
              Partner with Supernova Gaming for Unforgettable Activations
            </p>
            <p>Let's create unforgettable esports experiences together.</p>
            <p className="text-gray-400">
              Whether you're a brand, agency, or event organizer, we're ready to level up your engagement.
            </p>
          </div>
        </div>

        {/* =========================================================
            SECTION 2: CONTACT FORM
        ========================================================= */}
        <div ref={contactSectionRef} className="pt-8">
          {/* Form Banner Header */}
          <div
            className={`text-center max-w-3xl mx-auto mb-10 transition-all duration-700 ease-out p-font !text-center ${
              isContactVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            <h3 className="text-xs sm:text-sm md:text-base font-extrabold tracking-[0.18em] text-white uppercase leading-relaxed">
              PARTNER WITH SUPERNOVA GAMING FOR UNFORGETTABLE ACTIVATIONS
            </h3>
            <p className="mt-2 text-xs sm:text-sm font-bold tracking-[0.15em] text-[#c084fc] uppercase">
              LET'S CREATE UNFORGETTABLE ESPORTS EXPERIENCES TOGETHER.
            </p>
            <p className="mt-1 text-[11px] sm:text-xs font-semibold tracking-[0.12em] text-gray-400 uppercase">
              WHETHER YOU'RE A BRAND, AGENCY, OR EVENT ORGANIZER – WE'RE READY TO LEVEL UP YOUR ENGAGEMENT.
            </p>
          </div>

          {/* Form Container Card - Multi-Color Gradient Border Outer Wrapper */}
          <div
            className={`square-px relative mx-auto max-w-2xl rounded-[36px] p-[1.5px] bg-gradient-to-r from-[#8b5cf6] via-[#ec4899] to-[#6366f1] shadow-[0_0_50px_rgba(168,85,247,0.4)] transition-all duration-700 ease-out ${
              isContactVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: isContactVisible ? "200ms" : "0ms" }}
          >
            {/* Inner Dark Glass Card */}
            <div className="relative z-10 w-full overflow-hidden rounded-[34px] bg-[#0d071d]/90 p-8 sm:p-12 backdrop-blur-2xl">
              {/* Glow Accents */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-purple-600/20 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-indigo-600/15 blur-3xl" />

              <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-6">
                {/* Row 1: First Name & Last Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-extrabold tracking-widest text-white uppercase mb-2">
                      FIRST NAME
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full rounded-xl bg-[#2a2143]/70 border border-[#4c1d95]/50 px-4 py-3.5 text-sm text-white placeholder-gray-500 focus:border-[#a855f7] focus:bg-[#2a2143] focus:outline-none focus:ring-1 focus:ring-[#a855f7] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold tracking-widest text-white uppercase mb-2">
                      LAST NAME
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full rounded-xl bg-[#2a2143]/70 border border-[#4c1d95]/50 px-4 py-3.5 text-sm text-white placeholder-gray-500 focus:border-[#a855f7] focus:bg-[#2a2143] focus:outline-none focus:ring-1 focus:ring-[#a855f7] transition-all"
                    />
                  </div>
                </div>

                {/* Row 2: Email */}
                <div>
                  <label className="block text-xs font-extrabold tracking-widest text-white uppercase mb-2">
                    EMAIL
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-xl bg-[#2a2143]/70 border border-[#4c1d95]/50 px-4 py-3.5 text-sm text-white placeholder-gray-500 focus:border-[#a855f7] focus:bg-[#2a2143] focus:outline-none focus:ring-1 focus:ring-[#a855f7] transition-all"
                  />
                </div>

                {/* Row 3: Message */}
                <div>
                  <label className="block text-xs font-extrabold tracking-widest text-white uppercase mb-2">
                    MESSAGE
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-xl bg-[#2a2143]/70 border border-[#4c1d95]/50 px-4 py-3.5 text-sm text-white placeholder-gray-500 focus:border-[#a855f7] focus:bg-[#2a2143] focus:outline-none focus:ring-1 focus:ring-[#a855f7] transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="mt-2 flex justify-end">
                  <button
                    type="submit"
                    className="rounded-xl bg-gradient-to-r from-[#8b5cf6] to-[#a855f7] px-8 py-3.5 text-xs font-extrabold tracking-widest text-white uppercase shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:from-[#7c3aed] hover:to-[#9333ea] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] transition-all duration-300"
                  >
                    SEND MESSAGE
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}