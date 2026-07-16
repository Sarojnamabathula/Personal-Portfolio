"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { projects, type Project } from "@/data/projects";
import { ExternalLink, X, Layers, Tag } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const categories = ["All", "AI / NLP", "Computer Vision", "NLP / ML", "AI Systems", "Full-Stack"];

function ProjectCard({ project, onClick, delay }: { project: Project; onClick: () => void; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.5 }}
      onClick={onClick}
      className="group cursor-pointer"
    >
      <div className="glass-hover glow-card rounded-2xl border border-white/8 overflow-hidden hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-card-hover h-full flex flex-col">
        {/* Gradient header */}
        <div className={`h-36 bg-gradient-to-br ${project.gradient} relative overflow-hidden flex items-center justify-center`}>
          <span className="text-5xl opacity-80 group-hover:scale-110 transition-transform duration-300">
            {project.icon}
          </span>
          <div className="absolute inset-0 bg-black/20" />
          {/* Status badge */}
          <div className={`absolute top-3 right-3 px-2 py-1 rounded-full text-[10px] font-semibold ${
            project.status === "Completed" ? "bg-green-500/20 text-green-400 border border-green-500/30" : "bg-amber-500/20 text-amber-400 border border-amber-500/30"
          }`}>
            {project.status}
          </div>
          {project.featured && (
            <div className="absolute top-3 left-3 px-2 py-1 rounded-full text-[10px] font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
              ⭐ Featured
            </div>
          )}
        </div>

        <div className="p-6 flex flex-col flex-1">
          {/* Category */}
          <span className="text-[11px] font-semibold text-indigo-400/80 uppercase tracking-wider mb-2">
            {project.category}
          </span>

          {/* Title */}
          <h3 className="text-lg font-bold text-white mb-1 group-hover:gradient-text transition-all">
            {project.title}
          </h3>
          <p className="text-sm text-white/40 mb-3 italic">{project.tagline}</p>

          {/* Description */}
          <p className="text-sm text-white/60 leading-relaxed mb-4 flex-1 line-clamp-3">
            {project.description}
          </p>

          {/* Tech badges */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tech.slice(0, 4).map((t) => (
              <span key={t} className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[11px] text-white/50">
                {t}
              </span>
            ))}
            {project.tech.length > 4 && (
              <span className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[11px] text-white/30">
                +{project.tech.length - 4}
              </span>
            )}
          </div>

          {/* Links */}
          <div className="flex items-center gap-3 pt-4 border-t border-white/5">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1.5 text-xs text-white/50 hover:text-white transition-colors"
            >
                          <FaGithub size={13} /> Code
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1.5 text-xs text-white/50 hover:text-indigo-400 transition-colors"
              >
                <ExternalLink size={13} /> Demo
              </a>
            )}
            <button className="ml-auto text-xs text-indigo-400/70 hover:text-indigo-400 transition-colors">
              View Details →
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[400] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 30 }}
          transition={{ duration: 0.3 }}
          className="bg-[#0a0a14] border border-white/10 rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className={`relative h-40 bg-gradient-to-br ${project.gradient} flex items-center justify-center rounded-t-3xl`}>
            <span className="text-6xl">{project.icon}</span>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          <div className="p-8 space-y-6">
            <div>
              <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">{project.category}</span>
              <h2 className="text-2xl font-bold text-white mt-1">{project.title}</h2>
              <p className="text-white/50 italic">{project.tagline}</p>
            </div>

            {/* Overview */}
            <div>
              <h3 className="text-sm font-semibold text-white/70 flex items-center gap-2 mb-2"><Layers size={14} /> Overview</h3>
              <p className="text-white/60 text-sm leading-relaxed">{project.description}</p>
            </div>

            {/* Problem & Solution */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="glass rounded-xl p-4 border border-white/8">
                <h4 className="text-xs font-semibold text-red-400 mb-2">🔴 Problem</h4>
                <p className="text-white/60 text-xs leading-relaxed">{project.problem}</p>
              </div>
              <div className="glass rounded-xl p-4 border border-white/8">
                <h4 className="text-xs font-semibold text-green-400 mb-2">✅ Solution</h4>
                <p className="text-white/60 text-xs leading-relaxed">{project.solution}</p>
              </div>
            </div>

            {/* Highlights */}
            <div>
              <h3 className="text-sm font-semibold text-white/70 mb-3">✨ Key Features</h3>
              <div className="grid grid-cols-2 gap-2">
                {project.highlights.map((h) => (
                  <div key={h} className="flex items-center gap-2 text-xs text-white/60">
                    <span className="w-1 h-1 rounded-full bg-indigo-400 flex-shrink-0" />
                    {h}
                  </div>
                ))}
              </div>
            </div>

            {/* Tech stack */}
            <div>
              <h3 className="text-sm font-semibold text-white/70 flex items-center gap-2 mb-3"><Tag size={14} /> Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-white/60">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex gap-3 pt-2 border-t border-white/10">
              <a href={project.github} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl glass border border-white/10 text-sm text-white/70 hover:text-white hover:border-indigo-500/40 transition-all">
                              <FaGithub size={15} /> View Code
              </a>
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-medium">
                  <ExternalLink size={15} /> Live Demo
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = projects.filter((p) => {
    const matchCategory = activeFilter === "All" || p.category === activeFilter;
    const matchSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchCategory && matchSearch;
  });

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, rgba(99,102,241,0.8) 0%, transparent 70%)" }} />
        <div className="absolute top-1/2 right-0 w-64 h-64 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, rgba(6,182,212,0.8) 0%, transparent 70%)" }} />
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
            PROJECTS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-display gradient-text mb-4">
            Things I've Built
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            End-to-end AI systems, computer vision applications, and full-stack products built with purpose
          </p>
        </motion.div>

        {/* Filters + Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-col md:flex-row items-center gap-4 mb-10"
        >
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  activeFilter === cat
                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-glow-sm"
                    : "glass border border-white/10 text-white/60 hover:text-white hover:border-white/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full md:w-64 px-4 py-2 rounded-xl glass border border-white/10 bg-transparent text-white/80 placeholder-white/30 text-sm outline-none focus:border-indigo-500/40 transition-colors"
          />
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              delay={i * 0.05}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-white/30">
            <span className="text-4xl block mb-4">🔍</span>
            No projects found for "{searchQuery || activeFilter}"
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
}
