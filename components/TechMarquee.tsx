"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Bot, 
  Database, 
  Zap, 
  Cpu, 
  Layers, 
  Sparkles, 
  ShieldCheck, 
  Terminal,
  Activity
} from "lucide-react";

const MARQUEE_ITEMS = [
  { label: "LangGraph StateGraphs", icon: Bot, highlight: "text-indigo-400" },
  { label: "Production RAG Pipelines", icon: Database, highlight: "text-sky-400" },
  { label: "Dense FAISS & Chroma Search", icon: Cpu, highlight: "text-cyan-400" },
  { label: "Async FastAPI Microservices", icon: Zap, highlight: "text-emerald-400" },
  { label: "AWS Bedrock & Claude 3.5", icon: Sparkles, highlight: "text-purple-400" },
  { label: "Multimodal Whisper & Ray 2", icon: Layers, highlight: "text-amber-400" },
  { label: "Quantitative Alpha Modeling", icon: Activity, highlight: "text-blue-400" },
  { label: "Deterministic Tool Execution", icon: ShieldCheck, highlight: "text-sky-300" },
];

export function TechMarquee() {
  return (
    <div className="relative w-full overflow-hidden border-y border-slate-800/80 bg-slate-950/60 py-3.5 backdrop-blur-md">
      {/* Edge gradient masks for smooth fade */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#070a12] to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#070a12] to-transparent z-10" />

      {/* Infinite moving ribbon */}
      <div className="flex gap-8 whitespace-nowrap overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 28,
            ease: "linear",
          }}
          className="flex items-center gap-8 shrink-0"
        >
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={`${item.label}-${idx}`}
                className="flex items-center gap-2 text-xs font-mono text-slate-300 tracking-wide"
              >
                <div className="p-1 rounded-md bg-slate-900 border border-slate-800/80 shadow-sm">
                  <Icon className={`w-3.5 h-3.5 ${item.highlight}`} />
                </div>
                <span className="font-medium">{item.label}</span>
                <span className="text-slate-600 ml-4 font-sans">•</span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
