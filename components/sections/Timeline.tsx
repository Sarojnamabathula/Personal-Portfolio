"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { education } from "@/data/education";
import { experiences } from "@/data/experience";

export default function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const timelineData = [
    ...education.map((e) => ({
      id: e.id,
      type: "Education" as const,
      title: e.degree,
      subtitle: e.institution,
      date: e.duration,
      color: e.color || "from-indigo-500 to-purple-600",
    })),
    ...experiences.map((e) => ({
      id: e.id,
      type: "Experience" as const,
      title: e.role,
      subtitle: e.company,
      date: e.period,
      color: e.color || "from-purple-500 to-cyan-500",
    })),
  ];

  return (
    <section id="timeline" className="section-padding relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute inset-0">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] opacity-15"
          style={{ background: "radial-gradient(ellipse, rgba(99,102,241,0.7) 0%, transparent 70%)" }}
        />
      </div>

      <div className="container-max relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 mb-4">
            JOURNEY
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-display gradient-text mb-4">
            My Timeline
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            A chronological timeline of my academic milestones, industry roles, and growth
          </p>
        </motion.div>

        {/* ── Mobile Vertical Timeline (< md) ── */}
        <div className="md:hidden relative max-w-md mx-auto pl-6 pr-2 space-y-8">
          <div className="absolute left-2.5 top-2 bottom-2 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-cyan-500/30" />

          {timelineData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative pl-6"
            >
              {/* Dot */}
              <div className="absolute -left-[5px] top-1.5 w-3.5 h-3.5 rounded-full bg-indigo-500 border-2 border-black shadow-glow-sm" />

              <div className="glass-hover glow-card rounded-2xl p-5 border border-white/8">
                <span className="text-[11px] font-semibold text-indigo-400 uppercase tracking-wider block mb-1">
                  {item.type} • {item.date}
                </span>
                <h3 className="text-base font-bold text-white mb-1">{item.title}</h3>
                <div className="text-xs text-white/60">{item.subtitle}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Desktop Horizontal Timeline (>= md) ── */}
        <div className="hidden md:block w-full overflow-x-auto pb-12 pt-8 hide-scrollbar">
          <div className="min-w-max flex flex-row items-center px-8 h-[380px] relative">
            {/* The horizontal track line */}
            <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gradient-to-r from-indigo-500/50 via-purple-500/30 to-cyan-500/20 transform -translate-y-1/2" />

            <div className="flex flex-row gap-8">
              {timelineData.map((item, index) => {
                const isEven = index % 2 === 0;
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: isEven ? -20 : 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.15 + index * 0.08, duration: 0.5 }}
                    className="relative w-80 flex-shrink-0 h-[380px]"
                  >
                    {/* The dot on the horizontal line */}
                    <div className="absolute top-1/2 left-1/2 w-4 h-4 rounded-full bg-indigo-500 border-4 border-black transform -translate-x-1/2 -translate-y-1/2 shadow-glow-sm z-10 hover:scale-125 transition-transform" />

                    {isEven ? (
                      /* Card above the line */
                      <div className="absolute bottom-[calc(50%+16px)] left-0 w-full">
                        <div className="glass-hover glow-card p-5 rounded-2xl border border-white/8 hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-1">
                          <span className="text-[11px] font-semibold text-indigo-400 uppercase tracking-wider mb-1 block">
                            {item.type} • {item.date}
                          </span>
                          <h3 className="text-base font-bold text-white mb-1 leading-snug">{item.title}</h3>
                          <div className="text-xs text-white/60">{item.subtitle}</div>
                        </div>
                      </div>
                    ) : (
                      /* Card below the line */
                      <div className="absolute top-[calc(50%+16px)] left-0 w-full">
                        <div className="glass-hover glow-card p-5 rounded-2xl border border-white/8 hover:border-indigo-500/30 transition-all duration-300 hover:translate-y-1">
                          <span className="text-[11px] font-semibold text-indigo-400 uppercase tracking-wider mb-1 block">
                            {item.type} • {item.date}
                          </span>
                          <h3 className="text-base font-bold text-white mb-1 leading-snug">{item.title}</h3>
                          <div className="text-xs text-white/60">{item.subtitle}</div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
