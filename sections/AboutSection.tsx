"use client";

import React from "react";
import { motion } from "framer-motion";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { SectionHeading } from "@/components/SectionHeading";
import { SpotlightCard } from "@/components/SpotlightCard";
import { 
  GraduationCap, 
  Cpu, 
  Bot, 
  Layers, 
  TrendingUp, 
  Sparkles,
  CheckCircle2,
  Code2
} from "lucide-react";

export function AboutSection() {
  const iconMap: Record<string, React.ElementType> = {
    GraduationCap,
    Cpu,
    Bot,
    Layers,
    TrendingUp,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="about" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          category="About & Positioning"
          title="Bridging Theoretical Rigor & Production AI Execution"
          subtitle="How quantitative foundations enable resilient, deterministic, and cost-effective Generative AI systems."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Narrative Box with Spotlight */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-6 h-full"
          >
            <SpotlightCard className="p-6 sm:p-8 flex flex-col justify-between h-full group">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-mono text-sky-400 font-semibold uppercase tracking-wider">
                  <Sparkles className="w-4 h-4 animate-pulse" />
                  <span>Executive Summary</span>
                </div>
                
                <blockquote className="text-base sm:text-lg text-slate-200 font-medium leading-relaxed border-l-2 border-sky-500 pl-4 italic">
                  &ldquo;{PERSONAL_INFO.aboutText}&rdquo;
                </blockquote>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal pt-2">
                  My approach to AI engineering centers on predictability, latency optimization, and robust evaluation. Rather than relying on simple prompt wrappers, I build multi-stage agentic pipelines with structured fallback paths, domain-specific vector indices, and measurable cost reductions.
                </p>
              </div>

              {/* Quick Profile Specs */}
              <div className="mt-8 pt-6 border-t border-slate-800 grid grid-cols-2 gap-4 text-xs font-mono">
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <span className="text-slate-400 block text-[11px]">Current Focus</span>
                  <span className="text-white font-semibold mt-0.5 block text-xs">LangGraph & Agentic RAG</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <span className="text-slate-400 block text-[11px]">Education</span>
                  <span className="text-white font-semibold mt-0.5 block text-xs">NIT Warangal (M.Sc.)</span>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Right Highlight Cards Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {PERSONAL_INFO.aboutHighlights.map((item, idx) => {
              const Icon = iconMap[item.icon] || Cpu;
              const isFullWidth = idx === PERSONAL_INFO.aboutHighlights.length - 1;

              return (
                <motion.div
                  key={item.title}
                  variants={cardVariants}
                  className={isFullWidth ? "sm:col-span-2" : ""}
                >
                  <SpotlightCard
                    className={`p-5 h-full flex flex-col justify-between group ${
                      isFullWidth ? "bg-gradient-to-r from-slate-900/70 to-slate-950/70 border-slate-700/60" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <motion.div
                        whileHover={{ scale: 1.15, rotate: 6 }}
                        className="p-2 rounded-xl bg-slate-800/80 border border-slate-700/60 text-sky-400 group-hover:text-sky-300 group-hover:border-sky-500/50 transition-all shadow-inner"
                      >
                        <Icon className="w-4 h-4" />
                      </motion.div>
                      <h3 className="text-sm font-bold text-white group-hover:text-sky-300 transition-colors">
                        {item.title}
                      </h3>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </SpotlightCard>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
