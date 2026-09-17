"use client";

import { useState, useEffect } from "react";

import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutPlanet from "../components/About";
import Services from "../components/Services";
import Clients from "../components/Clients";

import Starfield from "../components/Starfield";
import GlowCursor from "../components/GlowCursor";


export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#05060a] text-white">
      {/* LOADER */}
      {loading ? (
        <Loader />
      ) : (
        <>
          {/* BACKGROUND LAYERS (same as your HTML) */}
          <div className="fixed inset-0 z-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_8%,rgba(168,85,247,0.22),transparent_60%),radial-gradient(ellipse_50%_40%_at_85%_90%,rgba(255,93,58,0.10),transparent_60%),radial-gradient(ellipse_50%_40%_at_10%_85%,rgba(168,85,247,0.10),transparent_60%)]" />

          <Starfield />
          <GlowCursor />

          {/* CONTENT */}
          <Navbar />
          <Hero />
          <AboutPlanet />
          <Services />
          <Clients />


          {/* VIGNETTE OVERLAY */}
          <div className="pointer-events-none fixed inset-0 z-30 bg-[radial-gradient(ellipse_130%_100%_at_50%_40%,transparent_50%,rgba(0,0,0,0.5)_100%)]" />
        </>
      )}
    </main>
  );
}