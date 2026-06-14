"use client";

import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import Hero from "../components/Hero";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // loader duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="bg-[#05060a] text-white">
      {loading ? <Loader /> : <Hero />}
    </main>
  );
}