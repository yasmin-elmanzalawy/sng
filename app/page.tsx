"use client";

import { useState, useEffect } from "react";

import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutPlanet from "../components/About";
import Services from "../components/Services";
import Clients from "../components/Clients";
import Footer from "@/components/Footer";

import Starfield from "../components/Starfield";
import GlowCursor from "../components/GlowCursor";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    // Check if user already saw loader in this browser session
    const hasLoaded = sessionStorage.getItem("hasLoaded");

    if (hasLoaded === "true") {
      setLoading(false);
    } else {
      const timer = setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem("hasLoaded", "true");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, []);

  // Manage body class for hiding global footer while loader is active
  useEffect(() => {
    if (loading) {
      document.body.classList.add("is-loading");
    } else {
      document.body.classList.remove("is-loading");
    }

    return () => {
      document.body.classList.remove("is-loading");
    };
  }, [loading]);

  // Prevent hydration mismatch during initial check
  if (!isMounted) {
    return (
      <main className="relative min-h-screen overflow-hidden bg-[#05060a] text-white">
        <Loader />
      </main>
    );
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#05060a] text-white">
      {/* LOADER */}
      {loading ? (
        <Loader />
      ) : (
        <>
          {/* BACKGROUND LAYERS */}
          <div className="fixed inset-0 z-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_8%,rgba(168,85,247,0.22),transparent_60%),radial-gradient(ellipse_50%_40%_at_85%_90%,rgba(255,93,58,0.10),transparent_60%),radial-gradient(ellipse_50%_40%_at_10%_85%,rgba(168,85,247,0.10),transparent_60%)]" />

          <Starfield />
          <GlowCursor />

          {/* CONTENT */}
          <Navbar />
          <Hero />
          <AboutPlanet />
          <Services />
          <Clients />
          <Footer />

          {/* VIGNETTE OVERLAY */}
          <div className="pointer-events-none fixed inset-0 z-30 bg-[radial-gradient(ellipse_130%_100%_at_50%_40%,transparent_50%,rgba(0,0,0,0.5)_100%)]" />
        </>
      )}
    </main>
  );
}