"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Download, Eye, FileText } from "lucide-react";

export default function Resume() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="resume" className="section-padding relative overflow-hidden bg-[#030307]">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, rgba(99,102,241,0.8) 0%, transparent 70%)" }} />
      </div>

      <div className="container-max relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 mb-4">
            RESUME
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-display gradient-text mb-4">
            My Resume
          </h2>
          <p className="text-white/60 max-w-3xl mx-auto leading-relaxed text-base md:text-lg">
            ATS-optimized resume highlighting my AI engineering skills, projects, and certifications
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Download CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-4 mb-10"
          >
            <a
              href={siteConfig.resumeUrl}
              download
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold hover:from-indigo-500 hover:to-purple-500 transition-all shadow-glow-sm hover:shadow-glow-md"
            >
              <Download size={18} /> Download Resume
            </a>
            <a
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl glass border border-white/15 text-white/80 font-semibold hover:border-indigo-500/40 hover:text-white transition-all"
            >
              <Eye size={18} /> View Full Resume
            </a>
          </motion.div>

          {/* Resume preview card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="glass-hover glow-card rounded-2xl border border-white/8 overflow-hidden"
          >
            {/* Embedded PDF viewer header bar */}
            <div className="bg-[#111] rounded-t-2xl px-4 py-3 flex items-center justify-between border-b border-white/5">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
                <span className="ml-2 text-xs text-white/40 font-mono flex items-center gap-1">
                  <FileText size={12} className="text-indigo-400" /> Namabathula_Saroj_Resume.pdf
                </span>
              </div>
              <span className="text-[10px] text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded-full border border-indigo-500/20">
                Live Interactive Summary
              </span>
            </div>

            {/* Resume Content View */}
            <div className="p-6 md:p-8 bg-[#070710] space-y-6">
              {/* Header */}
              <div className="border-b border-white/10 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white font-display">{siteConfig.name}</h3>
                  <p className="text-indigo-400 text-sm font-medium">{siteConfig.title}</p>
                  <p className="text-white/50 text-xs mt-1">{siteConfig.email} • {siteConfig.location}</p>
                </div>
                <div className="flex gap-2">
                  <a
                    href={siteConfig.resumeUrl}
                    download
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-semibold hover:from-indigo-500 hover:to-purple-500 transition-all shadow-glow-sm"
                  >
                    <Download size={14} /> Download PDF
                  </a>
                </div>
              </div>

              {/* Summary */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2">Executive Summary</h4>
                <p className="text-xs text-white/60 leading-relaxed">
                  {siteConfig.bio}
                </p>
              </div>

              {/* Grid 2-col: Core Competencies & Key Experience */}
              <div className="grid md:grid-cols-2 gap-6 pt-2 border-t border-white/5">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-3">Core Skills</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {["Python", "PyTorch", "Computer Vision", "YOLO", "OpenCV", "Next.js", "TypeScript", "LangChain", "RAG", "FastAPI", "Docker", "Git"].map((s) => (
                      <span key={s} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] text-white/70">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-purple-400 mb-3">Key Highlights</h4>
                  <ul className="space-y-1.5 text-xs text-white/60">
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-400 mt-0.5">✦</span>
                      <span>8+ AI & Full-Stack Projects delivered with measurable impact</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-400 mt-0.5">✦</span>
                      <span>10+ Verified Certifications from IBM SkillsBuild & Google Cloud</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-400 mt-0.5">✦</span>
                      <span>B.Tech Information Technology Student passionate about AI systems</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ATS note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="mt-6 p-4 rounded-xl glass border border-green-500/20 flex items-start gap-3"
          >
            <span className="text-green-400 mt-0.5">✓</span>
            <div>
              <p className="text-sm font-medium text-green-400">ATS-Optimized Resume</p>
              <p className="text-xs text-white/40 mt-0.5">
                Structured with clean formatting, keyword-rich content, and proper sections for automated tracking systems
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
