"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { SignatureWorkflow } from "@/components/SignatureWorkflow";
import { 
  ArrowRight, 
  Download, 
  Mail, 
  Sparkles, 
  Cpu, 
  Layers,
  Terminal,
  Zap
} from "lucide-react";

const ROTATING_PHRASES = [
  "from models to production.",
  "with LangGraph multi-agent loops.",
  "powered by production RAG.",
  "with low-latency async FastAPI.",
  "grounded in mathematical rigor.",
];

export function HeroSection() {
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % ROTATING_PHRASES.length);
    }, 3800);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Bio & CTAs */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Status Pill */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-mono text-sky-400 bg-sky-950/70 border border-sky-800/70 mb-6 backdrop-blur-md shadow-sm shadow-sky-500/10"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="font-semibold tracking-wide">AI ENGINEER & SYSTEM ARCHITECT</span>
            </motion.div>

            {/* Main Headline with Dynamic Rotating Suffix */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]"
            >
              Building intelligent systems{" "}
              <span className="block h-[1.3em] overflow-hidden mt-1">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={phraseIndex}
                    initial={{ y: 28, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -28, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-300 to-purple-400"
                  >
                    {ROTATING_PHRASES[phraseIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </motion.h1>

            {/* Supporting Text */}
            <motion.p
              variants={itemVariants}
              className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal"
            >
              {PERSONAL_INFO.supportingText}
            </motion.p>

            {/* Key Value Proposition Callout */}
            <motion.div
              variants={itemVariants}
              className="mt-5 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/90 text-xs sm:text-sm text-slate-300 flex items-center gap-3 max-w-xl backdrop-blur-sm shadow-inner"
            >
              <div className="p-1.5 rounded-lg bg-sky-500/10 text-sky-400 shrink-0">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="leading-relaxed">
                End-to-end AI execution: From high-accuracy retrieval & stateful multi-agent graphs to scalable async FastAPI services.
              </span>
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-wrap items-center gap-3.5 w-full sm:w-auto"
            >
              <motion.a
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.98 }}
                href="#projects"
                className="relative group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-sky-500 to-indigo-600 shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 transition-all w-full sm:w-auto overflow-hidden"
              >
                {/* Subtle shine effect on hover */}
                <span className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-700 pointer-events-none" />
                <span className="relative z-10">Explore Projects</span>
                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-0.5 transition-transform" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.98 }}
                href={PERSONAL_INFO.resumePath}
                download="Bapuram_Venkateswar_Reddy_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900/80 hover:bg-slate-800 hover:text-white border border-slate-700/80 transition-all w-full sm:w-auto"
              >
                <Download className="w-4 h-4 text-sky-400" />
                <span>Download Résumé</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm text-slate-300 hover:text-white bg-slate-950/40 hover:bg-slate-900 border border-slate-800/80 transition-all w-full sm:w-auto"
              >
                <Mail className="w-4 h-4" />
                <span>Let&apos;s Connect</span>
              </motion.a>
            </motion.div>

            {/* Technology Tags */}
            <motion.div
              variants={itemVariants}
              className="mt-10 pt-6 border-t border-slate-800/80 w-full"
            >
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold block mb-2.5">
                Core Production Stack
              </span>
              <div className="flex flex-wrap gap-2">
                {PERSONAL_INFO.heroTechTags.map((tech) => (
                  <motion.span
                    key={tech}
                    whileHover={{ scale: 1.06, y: -2 }}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-medium text-slate-200 bg-slate-900/90 border border-slate-800 hover:border-sky-500/50 hover:text-sky-300 hover:shadow-md hover:shadow-sky-500/10 transition-colors cursor-default"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Signature Agentic Workflow Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
            className="lg:col-span-5 flex flex-col items-center justify-center"
          >
            <SignatureWorkflow />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

