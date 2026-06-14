"use client";

import { motion } from "framer-motion";

const stars = Array.from({ length: 25 });

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center overflow-hidden">
      
      {/* ⭐ stars layer */}
      <div className="absolute inset-0">
        {stars.map((_, i) => {
          const size = Math.random() * 3 + 1;
          const top = Math.random() * 100;
          const left = Math.random() * 100;
          const duration = Math.random() * 2 + 1.5;
          const delay = Math.random() * 1.5;

          return (
            <motion.div
              key={i}
              className="absolute bg-white rounded-full"
              style={{
                width: size,
                height: size,
                top: `${top}%`,
                left: `${left}%`,
              }}
              animate={{
                opacity: [0.1, 1, 0.1],
                scale: [1, 1.8, 1],
              }}
              transition={{
                duration,
                repeat: Infinity,
                delay,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </div>

      {/* ✨ center loading text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-white text-xl tracking-widest z-10"
      >
        Loading...
      </motion.div>
    </div>
  );
}