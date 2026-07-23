"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { blogs } from "@/data/blogs";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import Image from "next/image";

export default function Blogs() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="blogs" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-0 w-[600px] h-[600px] rounded-full opacity-5"
          style={{ background: "radial-gradient(circle, rgba(14,165,233,0.8) 0%, transparent 70%)" }} />
      </div>

      <div className="container-max relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 mb-4">
              ARTICLES
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-display gradient-text mb-4">
              Writing & Thoughts
            </h2>
            <p className="text-white/50 max-w-xl">
              Deep dives into AI architectures, tutorials, and my learnings along the way
            </p>
          </div>
          
          <a href="#" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors text-sm font-medium">
            View all articles <ArrowRight size={16} />
          </a>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <motion.a
              key={blog.id}
              href={blog.url}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
              className="group glass-hover glow-card rounded-2xl border border-white/8 overflow-hidden flex flex-col h-full hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[10px] font-semibold bg-indigo-500/80 text-white backdrop-blur-md">
                    {blog.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-[11px] text-white/40 mb-3">
                  <span className="flex items-center gap-1.5"><Calendar size={12} /> {blog.date}</span>
                  <span className="flex items-center gap-1.5"><Clock size={12} /> {blog.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">
                  {blog.title}
                </h3>
                
                <p className="text-white/50 text-sm leading-relaxed mb-6 flex-grow">
                  {blog.excerpt}
                </p>

                <div className="flex items-center gap-2 text-indigo-400 text-sm font-medium group-hover:gap-3 transition-all mt-auto pt-4 border-t border-white/5">
                  Read Article <ArrowRight size={16} />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
