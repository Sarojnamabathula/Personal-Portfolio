"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { experiences } from "@/data/experience";
import { MapPin, Calendar, Briefcase } from "lucide-react";

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding relative overflow-hidden bg-[#030307]">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5"
          style={{ background: "radial-gradient(circle, rgba(99,102,241,0.8) 0%, transparent 70%)" }} />
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
            EXPERIENCE
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-display gradient-text mb-4">
            Professional Journey
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            Hands-on industry experience building AI systems and cloud applications
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-purple-500/30 to-transparent" />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 mb-12 ${
                i % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 border-2 border-black shadow-glow-sm z-10" />

              {/* Card */}
              <div className={`ml-20 md:ml-0 md:w-[calc(50%-2rem)] glass-hover glow-card rounded-2xl border border-white/8 overflow-hidden ${
                i % 2 === 0 ? "md:mr-12" : "md:ml-12"
              }`}>
                {/* Gradient top */}
                <div className={`h-2 bg-gradient-to-r ${exp.color}`} />

                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center text-lg flex-shrink-0`}>
                        {exp.logo}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white leading-tight">{exp.role}</h3>
                        <p className="text-indigo-400 text-sm font-medium">{exp.company}</p>
                      </div>
                    </div>
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-semibold bg-gradient-to-r ${exp.color} text-white flex-shrink-0`}>
                      {exp.type}
                    </span>
                  </div>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-3 text-xs text-white/40 mb-4">
                    <span className="flex items-center gap-1">
                      <Briefcase size={12} className="text-indigo-400" />
                      {exp.organization}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={12} className="text-purple-400" />
                      {exp.period} · {exp.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={12} className="text-cyan-400" />
                      {exp.location}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-white/60 text-sm leading-relaxed mb-4">{exp.description}</p>

                  {/* Responsibilities */}
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">Key Responsibilities</h4>
                    <ul className="space-y-1.5">
                      {exp.responsibilities.slice(0, 3).map((r, j) => (
                        <li key={j} className="flex items-start gap-2 text-xs text-white/60">
                          <span className="w-1 h-1 rounded-full bg-indigo-400 mt-1.5 flex-shrink-0" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Achievements */}
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">Achievements</h4>
                    <ul className="space-y-1.5">
                      {exp.achievements.map((a, j) => (
                        <li key={j} className="flex items-start gap-2 text-xs text-white/60">
                          <span className="text-green-400 mt-0.5">✓</span>
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                    {exp.tech.map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[11px] text-white/50">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block md:w-[calc(50%-2rem)]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
