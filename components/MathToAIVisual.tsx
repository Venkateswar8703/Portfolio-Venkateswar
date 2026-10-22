"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calculator, BarChart2, Cpu, Sparkles, ArrowRight } from "lucide-react";
import { SpotlightCard } from "@/components/SpotlightCard";

interface Step {
  title: string;
  category: string;
  icon: React.ElementType;
  desc: string;
  skills: string[];
  gradient: string;
  textColor: string;
}

const STEPS: Step[] = [
  {
    title: "Mathematics",
    category: "Foundation",
    icon: Calculator,
    desc: "Linear Algebra, Multivariable Calculus, Optimization Theory & Graph Theory at NIT Warangal.",
    skills: ["Linear Algebra", "Calculus", "Optimization", "Discrete Math"],
    gradient: "from-blue-500/20 to-sky-500/10 border-blue-500/30",
    textColor: "text-blue-400",
  },
  {
    title: "Statistics",
    category: "Inference",
    icon: BarChart2,
    desc: "Probability Distributions, Hypothesis Testing, Time-Series Modeling & Alpha Signal Generation.",
    skills: ["Probability", "Time-Series", "Statistical Validation", "Alpha Research"],
    gradient: "from-cyan-500/20 to-teal-500/10 border-cyan-500/30",
    textColor: "text-cyan-400",
  },
  {
    title: "Machine Learning",
    category: "Algorithms",
    icon: Cpu,
    desc: "Supervised & Unsupervised Learning, Feature Engineering, Neural Architectures, XGBoost & Metric Tuning.",
    skills: ["PyTorch", "Scikit-Learn", "XGBoost", "Model Evaluation"],
    gradient: "from-indigo-500/20 to-violet-500/10 border-indigo-500/30",
    textColor: "text-indigo-400",
  },
  {
    title: "AI Engineering",
    category: "Production",
    icon: Sparkles,
    desc: "Agentic Systems, RAG Pipelines, Multimodal Workflows, FastAPI, AWS Bedrock & Cloud Deployment.",
    skills: ["LangGraph", "RAG / FAISS", "AWS Bedrock", "FastAPI / Docker"],
    gradient: "from-purple-500/20 to-pink-500/10 border-purple-500/30",
    textColor: "text-purple-400",
  },
];

export function MathToAIVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full rounded-2xl border border-slate-800 bg-slate-950/70 p-6 sm:p-7 backdrop-blur-xl shadow-2xl relative overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute -top-24 left-1/3 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pb-4 mb-6 border-b border-slate-800/80 relative z-10">
        <div>
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <span>Quantitative & Engineering Continuum</span>
          </h3>
          <p className="text-xs text-slate-400 mt-0.5">
            How rigorous mathematical training translates into robust production AI systems
          </p>
        </div>
        <span className="text-xs font-mono text-sky-400 bg-sky-950/70 px-3 py-1 rounded-full border border-sky-800/50 shadow-sm shadow-sky-500/10">
          NIT Warangal (2021-2026)
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative z-10">
        {STEPS.map((step, index) => {
          const Icon = step.icon;
          return (
            <div key={step.title} className="relative flex flex-col">
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className={`p-4 rounded-xl border bg-gradient-to-b ${step.gradient} flex flex-col justify-between h-full group hover:border-sky-400/60 transition-colors shadow-md shadow-black/40`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold">
                      Phase 0{index + 1} • {step.category}
                    </span>
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 6 }}
                      className={`p-2 rounded-lg bg-slate-900/80 border border-slate-700/50 ${step.textColor} shadow-inner`}
                    >
                      <Icon className="w-4 h-4" />
                    </motion.div>
                  </div>

                  <h4 className="text-base font-bold text-white mb-1.5">{step.title}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">{step.desc}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/60 flex flex-wrap gap-1">
                  {step.skills.map((s) => (
                    <span
                      key={s}
                      className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-900/90 text-slate-300 border border-slate-800 group-hover:border-slate-700"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Animated Connector Arrow between phases */}
              {index < STEPS.length - 1 && (
                <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-6 h-6 rounded-full bg-slate-900 border border-slate-700/80 items-center justify-center text-sky-400 shadow-lg shadow-black/60">
                  <motion.div
                    animate={{ x: [0, 2, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                  >
                    <ArrowRight className="w-3 h-3" />
                  </motion.div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
