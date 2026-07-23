"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Mail, MapPin, Clock, Send, CheckCircle, AlertCircle } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

type FormState = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState<FormState>("idle");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");

    // Simulate EmailJS send (replace with real EmailJS integration)
    try {
      await new Promise((res) => setTimeout(res, 1500));
      // Real integration:
      // await emailjs.send('SERVICE_ID', 'TEMPLATE_ID', form, 'PUBLIC_KEY');
      setFormState("success");
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setFormState("idle"), 4000);
    } catch {
      setFormState("error");
      setTimeout(() => setFormState("idle"), 3000);
    }
  };

  const inputClass = "w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm outline-none focus:border-indigo-500/60 focus:bg-indigo-500/5 focus:ring-1 focus:ring-indigo-500/30 transition-all duration-200";

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-96 opacity-10"
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
            CONTACT
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-display gradient-text mb-4">
            Let's Build Together
          </h2>
          <p className="text-white/60 max-w-3xl mx-auto leading-relaxed text-base md:text-lg">
            Open to internships, collaborations, and exciting AI projects. Let's connect!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-6"
          >
            {/* Availability */}
            <div className="glass-hover glow-card rounded-2xl border border-white/8 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                <h3 className="text-lg font-semibold text-white">Available for Opportunities</h3>
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-4">
                I'm actively seeking internships, research collaborations, and entry-level roles in AI engineering, Computer Vision, and Full-Stack development.
              </p>
              <div className="flex flex-wrap gap-2">
                {["AI Engineering", "Computer Vision", "Full-Stack", "Research"].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full text-xs bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Contact links */}
            <div className="space-y-3">
              {[
                { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}`, color: "text-indigo-400" },
                { icon: FaGithub, label: "GitHub", value: "@" + siteConfig.githubUsername, href: siteConfig.github, color: "text-purple-400" },
                { icon: FaLinkedin, label: "LinkedIn", value: "saroj-namabathula", href: siteConfig.linkedin, color: "text-cyan-400" },
                { icon: MapPin, label: "Location", value: siteConfig.location, href: null, color: "text-pink-400" },
                { icon: Clock, label: "Timezone", value: "IST (UTC+5:30)", href: null, color: "text-amber-400" },
              ].map(({ icon: Icon, label, value, href, color }) => (
                <div key={label} className="glass-hover glow-card rounded-xl border border-white/8 p-4 flex items-center gap-4">
                  <div className={`w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center ${color}`}>
                    <Icon size={16} />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-white/40">{label}</div>
                    {href ? (
                      <a href={href} target="_blank" rel="noopener noreferrer"
                        className="text-sm text-white/80 hover:text-white transition-colors">
                        {value}
                      </a>
                    ) : (
                      <div className="text-sm text-white/80">{value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className="glass-hover glow-card rounded-2xl border border-white/8 p-8 space-y-5"
            >
              <h3 className="text-xl font-semibold text-white mb-2">Send a Message</h3>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-white/40 mb-1.5 block">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="text-xs text-white/40 mb-1.5 block">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-white/40 mb-1.5 block">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Internship Opportunity / Collaboration"
                  required
                  className={inputClass}
                />
              </div>

              <div>
                <label className="text-xs text-white/40 mb-1.5 block">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell me about the opportunity or project..."
                  required
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                disabled={formState === "loading" || formState === "success"}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold hover:from-indigo-500 hover:to-purple-500 transition-all shadow-glow-sm hover:shadow-glow-md disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <AnimatePresence mode="wait">
                  {formState === "loading" ? (
                    <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                      className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </motion.div>
                  ) : formState === "success" ? (
                    <motion.div key="success" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                      className="flex items-center gap-2 text-green-300">
                      <CheckCircle size={18} /> Message Sent!
                    </motion.div>
                  ) : formState === "error" ? (
                    <motion.div key="error" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                      className="flex items-center gap-2 text-red-300">
                      <AlertCircle size={18} /> Try Again
                    </motion.div>
                  ) : (
                    <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                      className="flex items-center gap-2">
                      <Send size={16} /> Send Message
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>

              <p className="text-center text-xs text-white/25">
                I typically respond within 24–48 hours
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
