"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { siteConfig } from "@/config/site";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const languages = [
  { name: "Python", color: "#3572A5", percent: 55 },
  { name: "TypeScript", color: "#3178c6", percent: 18 },
  { name: "JavaScript", color: "#f1e05a", percent: 12 },
  { name: "Java", color: "#b07219", percent: 8 },
  { name: "Other", color: "#555555", percent: 7 },
];

const pinnedRepos = [
  { name: "ResearchAI", description: "RAG-powered research assistant using LangChain and FAISS", stars: "⭐", forks: "🔀", lang: "Python", langColor: "#3572A5" },
  { name: "Resume-Parser", description: "NLP-based resume parsing with spaCy and FastAPI", stars: "⭐", forks: "🔀", lang: "Python", langColor: "#3572A5" },
  { name: "Face-Mask-Detection", description: "Real-time mask detection with TensorFlow and OpenCV", stars: "⭐", forks: "🔀", lang: "Python", langColor: "#3572A5" },
  { name: "Vehicle-Tracking", description: "YOLO + DeepSORT vehicle tracking and counting system", stars: "⭐", forks: "🔀", lang: "Python", langColor: "#3572A5" },
  { name: "CarCrate", description: "Full-stack automotive marketplace with AI recommendations", stars: "⭐", forks: "🔀", lang: "TypeScript", langColor: "#3178c6" },
  { name: "Decision-Engine", description: "Rule-based AI decision framework with ML scoring", stars: "⭐", forks: "🔀", lang: "Python", langColor: "#3572A5" },
];

export default function GitHubSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="github" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-64 opacity-10"
          style={{ background: "radial-gradient(ellipse, rgba(99,102,241,0.8) 0%, transparent 70%)" }} />
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
            GITHUB
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-display gradient-text mb-4">
            Open Source Activity
          </h2>
          <p className="text-white/60 max-w-3xl mx-auto leading-relaxed text-base md:text-lg">
            Building in public — my GitHub houses all the AI systems and tools I've crafted
          </p>
        </motion.div>

        {/* GitHub profile card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="glass-hover glow-card rounded-2xl border border-white/8 p-6 mb-10 flex flex-col md:flex-row items-center gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <FaGithub size={28} className="text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">{siteConfig.githubUsername}</h3>
              <p className="text-white/50 text-sm">AI & Full-Stack Developer</p>
            </div>
          </div>

          <div className="flex-1 grid grid-cols-3 gap-4 md:border-l md:border-white/10 md:pl-6">
            <div className="text-center">
              <div className="text-2xl font-bold gradient-text">8+</div>
              <div className="text-xs text-white/40">Repositories</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold gradient-text">Active</div>
              <div className="text-xs text-white/40">Status</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold gradient-text">2024</div>
              <div className="text-xs text-white/40">Since</div>
            </div>
          </div>

          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-medium hover:from-indigo-500 hover:to-purple-500 transition-all shadow-glow-sm hover:shadow-glow-md whitespace-nowrap"
          >
                        <FaGithub size={16} /> View Profile
          </a>
        </motion.div>

        {/* Language distribution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="glass-hover glow-card rounded-2xl border border-white/8 p-6 mb-10"
        >
          <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
            <span>📊</span> Language Distribution
          </h3>
          {/* Bar */}
          <div className="h-4 rounded-full overflow-hidden flex mb-4">
            {languages.map((lang, i) => (
              <motion.div
                key={lang.name}
                initial={{ width: 0 }}
                animate={inView ? { width: `${lang.percent}%` } : {}}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.8, ease: "easeOut" }}
                style={{ backgroundColor: lang.color }}
                className="h-full"
              />
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            {languages.map((lang) => (
              <div key={lang.name} className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: lang.color }} />
                <span className="text-xs text-white/60">{lang.name}</span>
                <span className="text-xs text-white/30">{lang.percent}%</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Pinned repos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
            <span>📌</span> Pinned Repositories
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {pinnedRepos.map((repo, i) => (
              <motion.a
                key={repo.name}
                href={`${siteConfig.github}/${repo.name}`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.05, duration: 0.4 }}
                className="glass-hover glow-card rounded-xl border border-white/8 p-5 hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <FaGithub size={15} className="text-white/40" />
                    <span className="text-sm font-semibold text-indigo-400 group-hover:text-indigo-300 transition-colors">
                      {repo.name}
                    </span>
                  </div>
                  <ExternalLink size={13} className="text-white/20 group-hover:text-white/50 transition-colors flex-shrink-0" />
                </div>
                <p className="text-xs text-white/50 leading-relaxed mb-4">{repo.description}</p>
                <div className="flex items-center gap-4 text-xs text-white/30">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: repo.langColor }} />
                    {repo.lang}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
