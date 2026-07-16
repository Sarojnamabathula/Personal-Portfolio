"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Mail, ArrowUp, Heart } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-black border-t border-white/5 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 opacity-20"
          style={{ background: "radial-gradient(ellipse, rgba(99,102,241,0.6) 0%, transparent 70%)" }} />
      </div>

      <div className="container-max relative z-10 px-4 md:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-glow-sm">
                NS
              </div>
              <span className="font-display font-semibold text-white/90">{siteConfig.name}</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              B.Tech CS student passionate about building AI systems that solve real-world problems.
            </p>
            <div className="flex items-center gap-3">
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
                  className="p-2 rounded-lg glass border border-white/10 text-white/50 hover:text-white hover:border-indigo-500/40 hover:shadow-glow-sm transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold text-white/70 mb-4 uppercase tracking-wider">Quick Navigation</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-white/40 hover:text-white/80 hover:translate-x-1 transition-all duration-200 flex items-center gap-1"
                  >
                    <span className="w-1 h-1 rounded-full bg-indigo-500/50" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-sm font-semibold text-white/70 mb-4 uppercase tracking-wider">Get In Touch</h4>
            <div className="space-y-3">
              <a href={`mailto:${siteConfig.email}`}
                className="block text-sm text-white/40 hover:text-white/80 transition-colors">
                📧 {siteConfig.email}
              </a>
              <div className="text-sm text-white/40">📍 {siteConfig.location}</div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm text-green-400/80">{siteConfig.availability}</span>
              </div>
              <a
                href={siteConfig.resumeUrl}
                download
                className="inline-flex items-center gap-2 mt-2 px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-medium hover:from-indigo-500 hover:to-purple-500 transition-all"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/25 flex items-center gap-1.5">
            © {new Date().getFullYear()} {siteConfig.name}. Built with
            <Heart size={11} className="text-red-400/60 inline" />
            using Next.js & Framer Motion.
          </p>
          <button
            onClick={scrollTop}
            className="flex items-center gap-2 px-4 py-2 rounded-lg glass border border-white/10 text-white/40 hover:text-white hover:border-indigo-500/30 text-xs transition-all"
          >
            <ArrowUp size={13} /> Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
