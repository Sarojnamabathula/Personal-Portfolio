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
          <p className="text-white/50 max-w-2xl mx-auto">
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
            {/* Embedded PDF viewer */}
            <div className="bg-[#111] rounded-t-2xl px-4 py-3 flex items-center gap-2 border-b border-white/5">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
              <span className="ml-2 text-xs text-white/30 font-mono">resume.pdf</span>
            </div>

            <div className="h-[600px] flex items-center justify-center bg-[#0a0a14]">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mx-auto">
                  <FileText size={32} className="text-white" />
                </div>
                <div>
                  <p className="text-white/70 font-semibold">Namabathula Saroj</p>
                  <p className="text-white/40 text-sm">AI Engineer & Full-Stack Developer</p>
                </div>
                <p className="text-white/30 text-xs max-w-sm mx-auto leading-relaxed px-4">
                  Place your resume PDF at <code className="text-indigo-400/70">public/resume.pdf</code> to enable the embedded viewer here.
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <a href={siteConfig.resumeUrl} download
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-medium">
                    <Download size={15} /> Download
                  </a>
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
