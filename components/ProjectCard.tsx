"use client";

import React, { useState } from "react";
import { Project } from "@/data/portfolioData";
import { 
  Github, 
  ExternalLink, 
  CheckCircle2, 
  Terminal, 
  Cpu, 
  Layers, 
  Sparkles,
  ArrowRight,
  ShieldAlert,
  Bot,
  Eye,
  Database
} from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [showDetails, setShowDetails] = useState(false);

  // Pick category badges
  const categoryBadgeColors = {
    "Agentic AI": "bg-indigo-950/60 text-indigo-400 border-indigo-500/40",
    "RAG": "bg-sky-950/60 text-sky-400 border-sky-500/40",
    "Full-Stack AI": "bg-emerald-950/60 text-emerald-400 border-emerald-500/40",
    "Computer Vision": "bg-purple-950/60 text-purple-400 border-purple-500/40",
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Agentic AI":
        return <Bot className="w-3.5 h-3.5" />;
      case "RAG":
        return <Database className="w-3.5 h-3.5" />;
      case "Full-Stack AI":
        return <Layers className="w-3.5 h-3.5" />;
      case "Computer Vision":
        return <Eye className="w-3.5 h-3.5" />;
      default:
        return <Cpu className="w-3.5 h-3.5" />;
    }
  };

  return (
    <article className="group relative rounded-2xl border border-slate-800/80 bg-slate-900/40 hover:bg-slate-900/80 backdrop-blur-md transition-all duration-300 flex flex-col justify-between overflow-hidden hover:border-sky-500/40 hover:shadow-xl hover:shadow-sky-500/5">
      {/* Top Technical Preview Banner */}
      <div className="relative h-44 sm:h-48 w-full bg-slate-950/80 border-b border-slate-800/80 p-4 flex flex-col justify-between overflow-hidden">
        {/* Subtle grid pattern background */}
        <div 
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(rgba(56, 189, 248, 0.4) 1px, transparent 1px)",
            backgroundSize: "16px 16px"
          }}
        />

        {/* Terminal Header */}
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
            <span className="text-[10px] font-mono text-slate-400 ml-1.5">
              arch://{project.id}
            </span>
          </div>

          <div className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider font-semibold border ${categoryBadgeColors[project.category]}`}>
            {getCategoryIcon(project.category)}
            {project.category}
          </div>
        </div>

        {/* Dynamic Architectural Schematic Preview */}
        <div className="relative z-10 my-auto py-2">
          <div className="rounded-lg bg-slate-900/90 border border-slate-800/80 p-3 font-mono text-[11px] text-slate-300 space-y-1.5 shadow-inner">
            <div className="flex items-center justify-between text-slate-400 text-[10px]">
              <span className="text-sky-400 font-semibold">$ runtime_orchestrator</span>
              <span className="text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                HEALTHY
              </span>
            </div>
            <p className="text-slate-300 text-xs font-sans font-medium line-clamp-1">
              {project.tagline}
            </p>
            <div className="flex items-center gap-1.5 text-[10px] text-slate-400 pt-0.5">
              <span className="text-slate-500">Pipeline:</span>
              <span className="truncate text-slate-300 font-mono">
                {project.technologies.slice(0, 3).join(" ➔ ")}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom subtle glow */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-48 h-12 bg-sky-500/10 rounded-full blur-xl pointer-events-none" />
      </div>

      {/* Main Content Area */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Title & Tagline */}
          <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
            {project.title}
          </h3>
          <p className="text-xs font-mono text-sky-400 mt-1">
            {project.tagline}
          </p>

          {/* Problem Statement Box */}
          <div className="mt-3.5 p-3 rounded-lg bg-slate-950/60 border border-slate-800/80">
            <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-amber-400 mb-1">
              <ShieldAlert className="w-3 h-3" />
              <span>Problem Solved</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed font-normal">
              {project.problem}
            </p>
          </div>

          {/* Description */}
          <p className="mt-3.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
            {project.description}
          </p>

          {/* Key Capabilities */}
          <div className="mt-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2">
              Key Capabilities
            </h4>
            <ul className="space-y-1.5">
              {project.capabilities.map((cap) => (
                <li key={cap} className="flex items-start gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                  <span>{cap}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Area: Tech Tags & Action Buttons */}
        <div className="mt-6 pt-4 border-t border-slate-800/80">
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.technologies.map((t) => (
              <span
                key={t}
                className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700/60"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 hover:text-white border border-slate-700 transition-colors flex-1"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub Repo</span>
            </a>

            {project.demoUrl ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 transition-colors flex-1"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : (
              <div 
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-[11px] font-mono text-slate-500 bg-slate-900/60 border border-slate-800 cursor-not-allowed select-none"
                title="Demo link will be enabled upon public deployment"
              >
                <span>Demo (Configurable)</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
