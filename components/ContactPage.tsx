"use client";

import React, { useEffect, useRef, useState } from "react";

// Floating Rocks for Contact Page
const FLOATING_ROCKS_CONTACT = [
  { id: 1, src: "/rocks/rock.webp", size: 22, top: "10%", left: "7%", delay: "0s", duration: "7s", rotate: "15deg" },
  { id: 2, src: "/rocks/rock3.webp", size: 16, top: "18%", left: "14%", delay: "1.2s", duration: "8.5s", rotate: "-35deg" },
  { id: 3, src: "/rocks/rock2.webp", size: 26, top: "75%", left: "8%", delay: "2.5s", duration: "6.5s", rotate: "40deg" },
  { id: 4, src: "/rocks/rock5.webp", size: 18, top: "85%", left: "15%", delay: "0.5s", duration: "9s", rotate: "-15deg" },
  { id: 5, src: "/rocks/rock4.webp", size: 24, top: "12%", right: "8%", delay: "1.8s", duration: "7.5s", rotate: "65deg" },
  { id: 6, src: "/rocks/rock.webp", size: 14, top: "28%", right: "12%", delay: "3s", duration: "8.5s", rotate: "-75deg" },
  { id: 7, src: "/rocks/rock3.webp", size: 28, top: "70%", right: "6%", delay: "0.8s", duration: "6.8s", rotate: "110deg" },
  { id: 8, src: "/rocks/rock2.webp", size: 20, top: "88%", right: "13%", delay: "2.1s", duration: "9.2s", rotate: "-45deg" },
];

export default function ContactPage() {
  const headerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

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
    const el = formRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsFormVisible(true);
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
    console.log("Contact Form Submitted:", formData);
  };

  return (
    <section className="relative min-h-screen w-full text-white py-12 sm:pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Ambient purple background glows */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] bg-[#6d28d9]/15 blur-[170px] rounded-full" />
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[950px] h-[400px] bg-[#4c1d95]/20 blur-[190px] rounded-full" />
      </div>

      {/* Floating Space Rocks */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {FLOATING_ROCKS_CONTACT.map((rock) => (
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

      <div className="relative z-10 mx-auto max-w-4xl">
        {/* Header & Astronaut Section */}
        <div ref={headerRef} className="flex flex-col items-center justify-center text-center mb-10">
          <h2
            className={`title-font transition-all duration-700 ease-out ${
              isHeaderVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            GET IN TOUCH
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
            className={`p-font mt-4 transition-all duration-700 ease-out ${
              isHeaderVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
            style={{ transitionDelay: isHeaderVisible ? "300ms" : "0ms" }}
          >
            YOUR EMAIL ADDRESS WILL NOT BE PUBLISHED. REQUIRED FIELDS ARE REMARKED *
          </p>

          {/* Floating Contact Astronaut Image */}
          <div
            className={`relative mt-8 w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 transition-all duration-1000 ease-out ${
              isHeaderVisible ? "translate-y-0 scale-100 opacity-100" : "translate-y-8 scale-90 opacity-0"
            }`}
            style={{ transitionDelay: isHeaderVisible ? "450ms" : "0ms" }}
          >
            <img
              src="/contact/contact.webp"
              alt="Get In Touch Astronaut"
              className="astronaut-float w-full h-full object-contain filter drop-shadow-[0_0_25px_rgba(168,85,247,0.45)]"
            />
          </div>
        </div>

        {/* Contact Form Card Container */}
        <div
          ref={formRef}
          className={`relative mx-auto max-w-2xl rounded-3xl bg-[#0b061d]/85 backdrop-blur-xl border border-[#4c1d95]/70 p-8 sm:p-12 shadow-[0_0_50px_rgba(168,85,247,0.2)] transition-all duration-700 ease-out ${
            isFormVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: isFormVisible ? "200ms" : "0ms" }}
        >
          {/* Inner Neon Glow Gradient */}
          <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-b from-[#a855f7]/30 via-transparent to-[#100727] opacity-80" />

          <form onSubmit={handleSubmit} className="square-px relative z-10 flex flex-col gap-6">
            {/* Row 1: First Name & Last Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2">FIRST NAME</label>
                <input
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className="w-full rounded-xl bg-[#2a2143]/70 border border-[#4c1d95]/50 px-4 py-3.5 text-white placeholder-gray-500 focus:border-[#a855f7] focus:bg-[#2a2143] focus:outline-none focus:ring-1 focus:ring-[#a855f7] transition-all"
                />
              </div>

              <div>
                <label className="block mb-2">LAST NAME</label>
                <input
                  type="text"
                  required
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className="w-full rounded-xl bg-[#2a2143]/70 border border-[#4c1d95]/50 px-4 py-3.5 text-white placeholder-gray-500 focus:border-[#a855f7] focus:bg-[#2a2143] focus:outline-none focus:ring-1 focus:ring-[#a855f7] transition-all"
                />
              </div>
            </div>

            {/* Row 2: Email */}
            <div>
              <label className="block mb-2">EMAIL</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full rounded-xl bg-[#2a2143]/70 border border-[#4c1d95]/50 px-4 py-3.5 text-white placeholder-gray-500 focus:border-[#a855f7] focus:bg-[#2a2143] focus:outline-none focus:ring-1 focus:ring-[#a855f7] transition-all"
              />
            </div>

            {/* Row 3: Message */}
            <div>
              <label className="block mb-2">MESSAGE</label>
              <textarea
                rows={5}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full rounded-xl bg-[#2a2143]/70 border border-[#4c1d95]/50 px-4 py-3.5 text-white placeholder-gray-500 focus:border-[#a855f7] focus:bg-[#2a2143] focus:outline-none focus:ring-1 focus:ring-[#a855f7] transition-all resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="mt-2 flex justify-end">
              <button
                type="submit"
                className="rounded-xl bg-gradient-to-r from-[#8b5cf6] to-[#a855f7] px-8 py-3.5 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:from-[#7c3aed] hover:to-[#9333ea] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] transition-all duration-300"
              >
                SEND MESSAGE
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Floating Rock & Astronaut Keyframe Animations */}
      <style jsx>{`
        .floating-rock {
          animation: floatRock ease-in-out infinite alternate;
          will-change: transform;
        }

        .astronaut-float {
          animation: floatAstronaut 6s ease-in-out infinite alternate;
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

        @keyframes floatAstronaut {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-14px) rotate(2deg);
          }
          100% {
            transform: translateY(8px) rotate(-2deg);
          }
        }
      `}</style>
    </section>
  );
}