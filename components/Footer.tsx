"use client";

import React from "react";
import { motion } from "framer-motion";
import { PERSONAL_INFO, NAV_LINKS } from "@/data/portfolioData";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-slate-800/80 bg-[#05080f] py-12 px-4 sm:px-6 lg:px-8 text-slate-400">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left branding */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-6 h-6 rounded bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center text-white font-mono font-bold text-xs shadow-sm shadow-sky-500/30"
            >
              BV
            </motion.div>
            <span className="text-sm font-bold text-white tracking-tight">
              {PERSONAL_INFO.name}
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-1 max-w-sm font-normal">
            AI Engineer specializing in Generative AI, RAG pipelines, agentic orchestration, and full-stack systems.
          </p>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 mt-3 shadow-sm shadow-emerald-500/10">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Available for full-time & high-impact AI roles
          </div>
        </div>

        {/* Center Quick Navigation */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-medium">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-400 hover:text-sky-300 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href={PERSONAL_INFO.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-sky-300 transition-colors"
          >
            Résumé
          </a>
        </div>

        {/* Right Socials & Copyright */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <div className="flex items-center gap-2.5">
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href={PERSONAL_INFO.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-sky-500/40 hover:bg-slate-800 transition-colors shadow-sm"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href={PERSONAL_INFO.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-sky-500/40 hover:bg-slate-800 transition-colors shadow-sm"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4 text-sky-400" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-sky-500/40 hover:bg-slate-800 transition-colors shadow-sm"
              aria-label="Email Contact"
            >
              <Mail className="w-4 h-4" />
            </motion.a>
          </div>
          <p className="text-[11px] text-slate-500 font-mono">
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. Built with Next.js & TypeScript.
          </p>
        </div>
      </div>
    </footer>
  );
}

