"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { achievements } from "@/data/achievements";
import { siteConfig } from "@/config/site";

export default function Achievements() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="section-padding relative overflow-hidden bg-[#030307]">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-64 h-64 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, rgba(6,182,212,0.8) 0%, transparent 70%)" }} />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, rgba(99,102,241,0.8) 0%, transparent 70%)" }} />
      </div>

      <div className="container-max relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 mb-4">
            ACHIEVEMENTS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-display gradient-text mb-4">
            Milestones & Recognition
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            Key accomplishments that mark my growth as an AI engineer and continuous learner
          </p>
        </motion.div>

        {/* Quick stats banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="glass-hover glow-card rounded-2xl border border-white/8 p-6 mb-12 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {siteConfig.stats.map((stat, i) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold font-display gradient-text">{stat.value}{stat.suffix}</div>
              <div className="text-xs text-white/40 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Achievement cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((ach, i) => (
            <motion.div
              key={ach.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group"
            >
              <div className="glass-hover glow-card rounded-2xl border border-white/8 p-6 hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-1 h-full">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${ach.color} flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    {ach.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-gradient-to-r ${ach.color} text-white`}>
                        {ach.category}
                      </span>
                      <span className="text-xs text-white/30">{ach.year}</span>
                    </div>
                    <h3 className="text-base font-bold text-white mt-2 mb-2 leading-tight">{ach.title}</h3>
                    <p className="text-sm text-white/55 leading-relaxed">{ach.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
