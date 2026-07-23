"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { siteConfig } from "@/config/site";
import { Mail, MapPin, Download, ArrowRight, Sparkles } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

const floatingIcons = [
  { icon: "🤖", delay: 0, x: "5%", y: "18%" },
  { icon: "🧠", delay: 1, x: "92%", y: "15%" },
  { icon: "⚡", delay: 2, x: "4%", y: "72%" },
  { icon: "🔬", delay: 0.5, x: "94%", y: "75%" },
  { icon: "🐍", delay: 1.5, x: "15%", y: "88%" },
  { icon: "👁️", delay: 3, x: "82%", y: "88%" },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      });
    };
    const el = containerRef.current;
    el?.addEventListener("mousemove", handleMouse, { passive: true });
    return () => el?.removeEventListener("mousemove", handleMouse);
  }, []);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* ── Animated gradient background ── */}
      <div className="absolute inset-0">
        {/* Aurora orbs */}
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-30 animate-pulse-glow"
          style={{
            background: "radial-gradient(circle, rgba(99,102,241,0.6) 0%, transparent 70%)",
            transform: `translate(${mousePos.x * 20 - 10}px, ${mousePos.y * 20 - 10}px)`,
            transition: "transform 0.5s ease",
          }}
        />
        <div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full opacity-25 animate-pulse-glow"
          style={{
            background: "radial-gradient(circle, rgba(139,92,246,0.6) 0%, transparent 70%)",
            animationDelay: "2s",
            transform: `translate(${mousePos.x * -15 + 8}px, ${mousePos.y * -15 + 8}px)`,
            transition: "transform 0.7s ease",
          }}
        />
        <div
          className="absolute top-1/2 right-1/3 w-72 h-72 rounded-full opacity-20 animate-pulse-glow"
          style={{
            background: "radial-gradient(circle, rgba(6,182,212,0.5) 0%, transparent 70%)",
            animationDelay: "4s",
            transform: `translate(${mousePos.x * 10 - 5}px, ${mousePos.y * -10 + 5}px)`,
            transition: "transform 0.6s ease",
          }}
        />

        {/* Grid overlay */}
        <div className="absolute inset-0 grid-overlay opacity-40" />

        {/* Noise texture */}
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* ── Floating tech icons ── */}
      {floatingIcons.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ delay: item.delay + 1, duration: 0.5 }}
          className="absolute text-2xl pointer-events-none hidden lg:block"
          style={{ left: item.x, top: item.y }}
        >
          <div
            className="animate-float p-2 rounded-xl glass"
            style={{ animationDelay: `${item.delay}s` }}
          >
            {item.icon}
          </div>
        </motion.div>
      ))}

      {/* ── Main content ── */}
      <div className="relative z-10 container-max w-full px-4 md:px-8 pt-28 md:pt-36 pb-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left: Text */}
          <div className="flex-1 text-center lg:text-left">
            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-green-500/30 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs text-green-400 font-medium">{siteConfig.availability}</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold font-display leading-tight mb-4"
            >
              <span className="text-white">Hi, I'm </span>
              <span className="hero-gradient-text">Saroj</span>
            </motion.h1>

            {/* Typing animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xl md:text-2xl lg:text-3xl font-medium text-white/60 mb-6 h-10"
            >
              <TypeAnimation
                sequence={siteConfig.roles.flatMap((role) => [role, 2000])}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="gradient-text-cool"
              />
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg md:text-xl text-white/50 mb-8 max-w-xl leading-relaxed"
            >
              {siteConfig.bio}
            </motion.p>

            {/* Meta info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap items-center gap-4 justify-center lg:justify-start text-sm text-white/40 mb-10"
            >
              <span className="flex items-center gap-1.5">
                <MapPin size={14} className="text-indigo-400" />
                {siteConfig.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Sparkles size={14} className="text-purple-400" />
                B.Tech Information Technology
              </span>
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap items-center gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={scrollToProjects}
                className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold hover:from-indigo-500 hover:to-purple-500 transition-all duration-300 shadow-glow-sm hover:shadow-glow-md"
              >
                View My Work
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href={siteConfig.resumeUrl}
                download
                className="group flex items-center gap-2 px-6 py-3 rounded-xl glass border border-white/15 text-white/80 font-semibold hover:border-indigo-500/40 hover:text-white hover:bg-white/5 transition-all duration-300"
              >
                <Download size={16} />
                Resume
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex items-center gap-4 mt-8 justify-center lg:justify-start"
            >
              {[
                { href: siteConfig.github, icon: FaGithub, label: "GitHub" },
                { href: siteConfig.linkedin, icon: FaLinkedin, label: "LinkedIn" },
                { href: `mailto:${siteConfig.email}`, icon: Mail, label: "Email" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2.5 rounded-xl glass border border-white/10 text-white/50 hover:text-white hover:border-indigo-500/40 hover:shadow-glow-sm transition-all duration-200"
                >
                  <Icon size={18} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right: Profile photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
            className="flex-shrink-0"
          >
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 opacity-30 blur-xl animate-pulse" />
              {/* Spinning border */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 animate-spin-slow opacity-60" />
              {/* Photo container */}
              <div className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-black">
                <Image
                  src="/profile.jpg"
                  alt={siteConfig.name}
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 768px) 256px, (max-width: 1024px) 288px, 320px"
                />
              </div>
              {/* Badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-4 px-3 py-1.5 rounded-full glass border border-indigo-500/30 text-xs font-medium text-indigo-300 shadow-glow-sm whitespace-nowrap"
              >
                🤖 AI Engineer
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-white/20 text-xs">Scroll to explore</span>
          <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center pt-1.5">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 rounded-full bg-indigo-400"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
