"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { certifications } from "@/data/certifications";
import { ExternalLink } from "lucide-react";

const certCategories = ["All", "AI", "Cloud", "Generative AI", "ML", "Data Science", "AI Platform"];

function CertCard({ cert, delay }: { cert: typeof certifications[0]; delay: number }) {
  const [flipped, setFlipped] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.5 }}
      className="cursor-pointer h-56"
      style={{ perspective: "1000px" }}
      onClick={() => setFlipped(!flipped)}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative w-full h-full"
      >
        {/* Front */}
        <div
          className="absolute inset-0 rounded-2xl glass-hover border border-white/8 p-5 flex flex-col justify-between overflow-hidden group"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-5 group-hover:opacity-10 transition-opacity`} />
          <div className="relative z-10">
            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center text-xl mb-3`}>
              {cert.icon}
            </div>
            <h3 className="text-sm font-bold text-white leading-tight mb-1">{cert.title}</h3>
            <p className="text-xs text-white/50">{cert.issuer}</p>
          </div>
          <div className="relative z-10 flex items-center justify-between">
            <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-white/5 border border-white/10 text-white/50">
              {cert.category}
            </span>
            <span className="text-[10px] text-white/30">{cert.year}</span>
          </div>
          <div className="absolute bottom-2 right-3 text-[10px] text-white/20">Tap to flip →</div>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 rounded-2xl glass border border-white/8 p-5 flex flex-col justify-between"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div>
            <p className="text-xs text-white/60 leading-relaxed mb-4">{cert.description}</p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
              <span className="text-xs text-green-400">Verified</span>
            </div>
            <a
              href={cert.verifyUrl}
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1.5 text-xs text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              <ExternalLink size={11} /> View Certificate
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Certifications() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = certifications.filter(
    (c) => activeFilter === "All" || c.category === activeFilter
  );

  return (
    <section id="certifications" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, rgba(139,92,246,0.8) 0%, transparent 70%)" }} />
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
            CERTIFICATIONS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-display gradient-text mb-4">
            Verified Expertise
          </h2>
          <p className="text-white/60 max-w-3xl mx-auto leading-relaxed text-base md:text-lg">
            Industry-recognized certifications from IBM and Google Cloud validating my AI and cloud skills
          </p>
        </motion.div>

        {/* Issuer logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-4 mb-6"
        >
          {[
            { name: "IBM SkillsBuild", icon: "🏢", count: certifications.filter(c => c.issuer.includes("IBM")).length },
            { name: "Google Cloud Skills Boost", icon: "🌐", count: certifications.filter(c => c.issuer.includes("Google")).length },
          ].map((issuer) => (
            <div key={issuer.name} className="flex items-center gap-3 px-5 py-2.5 rounded-xl glass border border-white/10 shadow-glow-sm">
              <span className="text-xl">{issuer.icon}</span>
              <div>
                <div className="text-sm font-semibold text-white">{issuer.name}</div>
                <div className="text-xs text-indigo-300/80">{issuer.count} certifications</div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-2.5 mb-10"
        >
          {certCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs md:text-sm font-medium transition-all duration-200 ${
                activeFilter === cat
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-glow-sm scale-105"
                  : "glass border border-white/10 text-white/60 hover:text-white hover:border-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Cert grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((cert, i) => (
            <CertCard key={cert.id} cert={cert} delay={i * 0.05} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center text-xs text-white/25 mt-8"
        >
          Click any card to view details and verification link
        </motion.p>
      </div>
    </section>
  );
}
