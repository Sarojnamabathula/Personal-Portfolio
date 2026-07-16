"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Target, Lightbulb, Heart, Rocket } from "lucide-react";

const driveItems = [
  { icon: Target, text: "The challenge of teaching machines to understand context", color: "text-indigo-400" },
  { icon: Lightbulb, text: "The satisfaction of shipping AI that solves real problems", color: "text-purple-400" },
  { icon: Heart, text: "Building systems that people actually use and trust", color: "text-pink-400" },
  { icon: Rocket, text: "The endless learning curve that AI demands", color: "text-cyan-400" },
];

function StatCard({ label, value, suffix, delay }: { label: string; value: number; suffix: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.5 }}
      className="glass-hover glow-card rounded-2xl p-6 text-center border border-white/8"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: delay + 0.3, duration: 0.8 }}
        className="text-4xl font-bold font-display gradient-text mb-1"
      >
        {inView ? value : 0}{suffix}
      </motion.div>
      <div className="text-sm text-white/50">{label}</div>
    </motion.div>
  );
}

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, rgba(139,92,246,0.8) 0%, transparent 70%)" }} />
      </div>

      <div className="container-max relative z-10" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 mb-4">
            ABOUT ME
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-display gradient-text mb-4">
            Who I Am
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            A passionate AI engineer driven by curiosity and the desire to build meaningful technology
          </p>
        </motion.div>

        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {siteConfig.stats.map((stat, i) => (
            <StatCard key={stat.label} {...stat} delay={i * 0.1} />
          ))}
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-6"
          >
            <div className="glass-hover glow-card rounded-2xl p-8 border border-white/8">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <span>🎯</span> My Story
              </h3>
              <p className="text-white/60 leading-relaxed mb-4">{siteConfig.about.intro}</p>
              <p className="text-white/60 leading-relaxed">{siteConfig.about.story}</p>
            </div>

            <div className="glass-hover glow-card rounded-2xl p-8 border border-white/8">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <span>🔭</span> Mission & Vision
              </h3>
              <div className="space-y-4">
                <div>
                  <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">Mission</span>
                  <p className="text-white/60 mt-1 leading-relaxed">{siteConfig.about.mission}</p>
                </div>
                <div className="border-t border-white/5 pt-4">
                  <span className="text-xs font-semibold text-purple-400 uppercase tracking-wider">Vision</span>
                  <p className="text-white/60 mt-1 leading-relaxed">{siteConfig.about.vision}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Philosophy & drives */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="space-y-6"
          >
            <div className="glass-hover glow-card rounded-2xl p-8 border border-white/8">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <span>💡</span> Engineering Philosophy
              </h3>
              <p className="text-white/60 leading-relaxed italic border-l-2 border-indigo-500/50 pl-4">
                "{siteConfig.philosophy}"
              </p>
            </div>

            <div className="glass-hover glow-card rounded-2xl p-8 border border-white/8">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <span>🔥</span> What Drives Me
              </h3>
              <div className="space-y-4">
                {driveItems.map(({ icon: Icon, text, color }, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
                    className="flex items-start gap-3"
                  >
                    <div className={`mt-0.5 flex-shrink-0 ${color}`}>
                      <Icon size={16} />
                    </div>
                    <p className="text-white/60 text-sm leading-relaxed">{text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
