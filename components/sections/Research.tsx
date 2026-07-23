"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BookOpen, Award, Link } from "lucide-react";

export default function Research() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const researchTopics = [
    {
      title: "Generative AI in Resume Parsing",
      description: "Exploring the efficacy of large language models versus traditional NLP pipelines for accurate extraction of structured data from complex unstructured documents.",
      status: "Ongoing",
      icon: <BookOpen className="text-indigo-400" size={24} />
    },
    {
      title: "Optimized Real-Time YOLO Deployments",
      description: "Researching quantization techniques and architecture modifications to deploy YOLO object detection models on edge hardware while maintaining >95% mAP.",
      status: "Completed",
      icon: <Award className="text-purple-400" size={24} />
    }
  ];

  return (
    <section id="research" className="section-padding relative overflow-hidden">
      <div className="container-max relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 mb-4">
            ACADEMIC & R&D
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-display gradient-text mb-4">
            Research Interests
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {researchTopics.map((topic, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
              className="glass p-8 rounded-2xl border border-white/8 flex gap-6 hover:border-indigo-500/30 transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                {topic.icon}
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold text-white">{topic.title}</h3>
                  <span className="text-[10px] px-2 py-1 rounded bg-white/10 text-white/60">{topic.status}</span>
                </div>
                <p className="text-white/60 text-sm leading-relaxed mb-4">
                  {topic.description}
                </p>
                <button className="text-sm text-indigo-400 flex items-center gap-2 hover:text-indigo-300">
                  <Link size={14} /> Read Paper
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
