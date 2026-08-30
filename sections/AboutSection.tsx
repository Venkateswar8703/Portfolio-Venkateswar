import React from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { SectionHeading } from "@/components/SectionHeading";
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

  return (
    <section id="about" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          category="About & Positioning"
          title="Bridging Theoretical Rigor & Production AI Execution"
          subtitle="How quantitative foundations enable resilient, deterministic, and cost-effective Generative AI systems."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Narrative Box */}
          <div className="lg:col-span-6 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md p-6 sm:p-8 flex flex-col justify-between h-full">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-sky-400 font-semibold uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
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
              <div>
                <span className="text-slate-400 block">Current Focus</span>
                <span className="text-white font-semibold mt-0.5 block">LangGraph & Agentic RAG</span>
              </div>
              <div>
                <span className="text-slate-400 block">Education</span>
                <span className="text-white font-semibold mt-0.5 block">NIT Warangal (M.Sc.)</span>
              </div>
            </div>
          </div>

          {/* Right Highlight Cards Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PERSONAL_INFO.aboutHighlights.map((item, idx) => {
              const Icon = iconMap[item.icon] || Cpu;
              const isFullWidth = idx === PERSONAL_INFO.aboutHighlights.length - 1;

              return (
                <div
                  key={item.title}
                  className={`p-5 rounded-2xl border border-slate-800/90 bg-slate-900/30 hover:bg-slate-900/60 hover:border-sky-500/40 transition-all duration-200 flex flex-col justify-between group ${
                    isFullWidth ? "sm:col-span-2 bg-gradient-to-r from-slate-900/60 to-slate-950/60 border-slate-700/60" : ""
                  }`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-xl bg-slate-800/80 border border-slate-700/60 text-sky-400 group-hover:text-sky-300 group-hover:scale-105 transition-all">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm font-bold text-white group-hover:text-sky-300 transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
