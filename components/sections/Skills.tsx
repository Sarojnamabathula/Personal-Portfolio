"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { skillCategories } from "@/data/skills";

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].id);

  const active = skillCategories.find((c) => c.id === activeCategory)!;

  return (
    <section id="skills" className="section-padding relative overflow-hidden bg-[#030307]">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-64 opacity-20"
          style={{ background: "radial-gradient(ellipse, rgba(99,102,241,0.6) 0%, transparent 70%)" }}
        />
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
            SKILLS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-display gradient-text mb-4">
            Technical Arsenal
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            A curated set of technologies I've mastered through building real-world AI and full-stack applications
          </p>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.id
                  ? `bg-gradient-to-r ${cat.color} text-white shadow-glow-sm`
                  : "glass border border-white/10 text-white/60 hover:text-white hover:border-white/20"
              }`}
            >
              <span>{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Skills panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="glass-hover glow-card rounded-3xl p-8 md:p-10 border border-white/8"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${active.color} flex items-center justify-center text-lg`}>
                {active.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">{active.label}</h3>
                <p className="text-sm text-white/40">{active.skills.length} technologies</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {active.skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-white/80">{skill.name}</span>
                    <span className="text-xs text-white/40 font-mono">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ delay: i * 0.05 + 0.2, duration: 1, ease: "easeOut" }}
                      className={`h-full bg-gradient-to-r ${active.color} rounded-full relative`}
                    >
                      <div className="absolute inset-0 bg-white/20 animate-shimmer" style={{ backgroundSize: "200% 100%" }} />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* All-skills grid overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`glass-hover glow-card rounded-xl p-4 text-center border transition-all duration-300 ${
                activeCategory === cat.id ? "border-indigo-500/30 bg-indigo-500/5" : "border-white/8"
              }`}
            >
              <div className="text-2xl mb-2">{cat.icon}</div>
              <div className="text-xs text-white/60 font-medium">{cat.label}</div>
              <div className="text-xs text-white/30 mt-0.5">{cat.skills.length} skills</div>
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
