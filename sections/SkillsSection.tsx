import React from "react";
import { SKILL_CATEGORIES } from "@/data/portfolioData";
import { SectionHeading } from "@/components/SectionHeading";
import { 
  Code2, 
  Bot, 
  Cpu, 
  Search, 
  Cloud, 
  LineChart, 
  FileVideo,
  Sparkles,
  Layers
} from "lucide-react";

export function SkillsSection() {
  const iconMap: Record<string, React.ElementType> = {
    Code2,
    Bot,
    Cpu,
    Search,
    Cloud,
    LineChart,
    FileVideo,
  };

  return (
    <section id="skills" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          category="Technical Toolkit"
          title="Core Competencies & AI Stack"
          subtitle="Specialized domain expertise across Generative AI architectures, vector retrieval, scalable backends, and multimodal intelligence."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category, idx) => {
            const Icon = iconMap[category.icon] || Layers;
            const isLarge = idx === 1 || idx === 4; // Highlight Generative AI & Backend

            return (
              <div
                key={category.title}
                className={`rounded-2xl border p-5 sm:p-6 backdrop-blur-md transition-all duration-200 flex flex-col justify-between group ${
                  isLarge
                    ? "bg-gradient-to-b from-slate-900/90 to-slate-950/90 border-sky-500/30 hover:border-sky-400/60 shadow-lg shadow-sky-500/5"
                    : "bg-slate-900/40 hover:bg-slate-900/70 border-slate-800 hover:border-slate-700"
                }`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-800/80">
                    <div className="p-2 rounded-xl bg-slate-800/90 border border-slate-700/60 text-sky-400 group-hover:text-sky-300 group-hover:scale-105 transition-all">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-bold text-white tracking-tight">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-1.5">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-mono text-slate-200 bg-slate-950/80 border border-slate-800 hover:border-sky-500/40 hover:text-sky-300 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>{category.skills.length} Capabilities</span>
                  <span className="text-sky-400/80">Production Ready</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
