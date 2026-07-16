"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";

const commands = [
  { id: "home", label: "Home", section: "home", icon: "🏠" },
  { id: "about", label: "About Me", section: "about", icon: "👤" },
  { id: "skills", label: "Skills", section: "skills", icon: "⚡" },
  { id: "projects", label: "Projects", section: "projects", icon: "🚀" },
  { id: "experience", label: "Experience", section: "experience", icon: "💼" },
  { id: "certifications", label: "Certifications", section: "certifications", icon: "🎖️" },
  { id: "achievements", label: "Achievements", section: "achievements", icon: "🏆" },
  { id: "contact", label: "Contact", section: "contact", icon: "✉️" },
  { id: "resume", label: "Download Resume", action: "resume", icon: "📄" },
  { id: "github", label: "GitHub Profile", action: "github", icon: "💻" },
  { id: "linkedin", label: "LinkedIn Profile", action: "linkedin", icon: "🔗" },
  { id: "email", label: "Send Email", action: "email", icon: "📧" },
];

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const filtered = commands.filter((c) =>
    c.label.toLowerCase().includes(query.toLowerCase())
  );

  const handleCommand = useCallback((cmd: (typeof commands)[0]) => {
    setOpen(false);
    setQuery("");
    if (cmd.section) {
      const el = document.getElementById(cmd.section);
      el?.scrollIntoView({ behavior: "smooth" });
    } else if (cmd.action === "resume") {
      window.open(siteConfig.resumeUrl, "_blank");
    } else if (cmd.action === "github") {
      window.open(siteConfig.github, "_blank");
    } else if (cmd.action === "linkedin") {
      window.open(siteConfig.linkedin, "_blank");
    } else if (cmd.action === "email") {
      window.open(`mailto:${siteConfig.email}`, "_blank");
    }
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open]);

  return (
    <>
      {/* Trigger hint in navbar */}
      <button
        onClick={() => setOpen(true)}
        className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg glass border border-white/10 text-white/40 text-xs hover:text-white/70 hover:border-indigo-500/30 transition-all duration-200"
        aria-label="Open command palette"
      >
        <Search size={12} />
        <span>Quick nav</span>
        <kbd className="ml-1 px-1.5 py-0.5 rounded bg-white/5 border border-white/10 font-mono text-[10px]">
          ⌘K
        </kbd>
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[300]"
              onClick={() => setOpen(false)}
            />

            {/* Palette */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="fixed top-1/4 left-1/2 -translate-x-1/2 z-[301] w-full max-w-lg"
            >
              <div className="mx-4 rounded-2xl glass border border-white/10 shadow-glow-lg overflow-hidden">
                {/* Search input */}
                <div className="flex items-center gap-3 px-4 py-4 border-b border-white/10">
                  <Search size={16} className="text-white/40 flex-shrink-0" />
                  <input
                    autoFocus
                    type="text"
                    placeholder="Search or navigate..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="flex-1 bg-transparent text-white placeholder-white/30 text-sm outline-none"
                  />
                  <button onClick={() => setOpen(false)} className="text-white/40 hover:text-white/70">
                    <X size={16} />
                  </button>
                </div>

                {/* Commands list */}
                <div className="py-2 max-h-72 overflow-y-auto">
                  {filtered.length === 0 ? (
                    <p className="text-center text-white/30 text-sm py-8">No results found</p>
                  ) : (
                    filtered.map((cmd) => (
                      <button
                        key={cmd.id}
                        onClick={() => handleCommand(cmd)}
                        className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-white/5 transition-colors group"
                      >
                        <span className="text-lg w-6 text-center">{cmd.icon}</span>
                        <span className="text-sm text-white/80 group-hover:text-white transition-colors flex-1">
                          {cmd.label}
                        </span>
                        <ArrowRight size={14} className="text-white/20 group-hover:text-indigo-400 transition-colors" />
                      </button>
                    ))
                  )}
                </div>

                {/* Footer */}
                <div className="px-4 py-2 border-t border-white/10 flex items-center gap-4 text-[11px] text-white/25">
                  <span><kbd className="font-mono">↵</kbd> select</span>
                  <span><kbd className="font-mono">Esc</kbd> close</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
