    "use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#05060a] text-white overflow-hidden">

      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute w-[600px] h-[600px] bg-purple-600/30 blur-[120px] rounded-full top-[-200px] left-[-200px]" />
        <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full bottom-[-200px] right-[-200px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold tracking-tight"
        >
          SUPER<span className="text-cyan-400">NOVA</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-4 text-gray-300 text-lg md:text-xl"
        >
          Competitive esports organization built for champions
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-8 flex gap-4 justify-center"
        >
          <button className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 transition rounded-xl font-medium">
            Join Team
          </button>

          <button className="px-6 py-3 border border-white/20 hover:border-white/50 transition rounded-xl">
            View Matches
          </button>
        </motion.div>

      </div>
    </section>
  );
}