"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 300);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loading"
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[500] bg-black flex flex-col items-center justify-center"
        >
          {/* Grid overlay */}
          <div className="absolute inset-0 grid-overlay opacity-30" />

          {/* Animated orbs */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64">
            <div className="absolute inset-0 rounded-full bg-indigo-600/20 animate-pulse-glow" />
            <div className="absolute inset-8 rounded-full bg-purple-600/20 animate-pulse-glow" style={{ animationDelay: "1s" }} />
          </div>

          {/* Logo */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "backOut" }}
            className="relative z-10 flex flex-col items-center gap-6"
          >
            <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-2xl shadow-glow-lg animate-blob">
              NS
            </div>

            <div className="flex flex-col items-center gap-1">
              <h1 className="text-2xl font-bold font-display gradient-text">
                Namabathula Saroj
              </h1>
              <p className="text-white/40 text-sm">AI Engineer & Full-Stack Developer</p>
            </div>

            {/* Progress bar */}
            <div className="w-48 h-0.5 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                style={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>

            <p className="text-white/20 text-xs font-mono">
              {Math.min(Math.round(progress), 100)}% loaded
            </p>
          </motion.div>

          {/* Corner decorations */}
          <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-indigo-500/30 rounded-tl-lg" />
          <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-purple-500/30 rounded-tr-lg" />
          <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-cyan-500/30 rounded-bl-lg" />
          <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-indigo-500/30 rounded-br-lg" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
