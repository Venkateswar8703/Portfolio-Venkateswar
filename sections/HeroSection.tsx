"use client";

import React from "react";
import { motion } from "framer-motion";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { SignatureWorkflow } from "@/components/SignatureWorkflow";
import { 
  ArrowRight, 
  Download, 
  Mail, 
  Terminal, 
  Sparkles, 
  Layers, 
  Cpu, 
  FileText,
  MapPin
} from "lucide-react";

export function HeroSection() {
  return (
    <section id="hero" className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Bio & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono text-sky-400 bg-sky-950/60 border border-sky-800/60 mb-6 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>AI ENGINEER & SYSTEM ARCHITECT</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              Building intelligent systems{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-300 to-purple-400">
                from models to production.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              {PERSONAL_INFO.supportingText}
            </p>

            {/* Key Value Proposition Callout */}
            <div className="mt-4 p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs sm:text-sm text-slate-300 flex items-center gap-2.5 max-w-xl">
              <Sparkles className="w-4 h-4 text-sky-400 shrink-0" />
              <span>
                End-to-end AI execution: From high-accuracy retrieval & stateful multi-agent graphs to scalable async FastAPI services.
              </span>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 shadow-lg shadow-sky-500/20 hover:shadow-sky-500/30 transition-all w-full sm:w-auto"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.resumePath}
                download="Bapuram_Venkateswar_Reddy_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900/80 hover:bg-slate-800 hover:text-white border border-slate-700/80 transition-all w-full sm:w-auto"
              >
                <Download className="w-4 h-4 text-sky-400" />
                <span>Download Résumé</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm text-slate-300 hover:text-white bg-slate-950/40 hover:bg-slate-900 border border-slate-800/80 transition-all w-full sm:w-auto"
              >
                <Mail className="w-4 h-4" />
                <span>Let&apos;s Connect</span>
              </a>
            </div>

            {/* Technology Tags */}
            <div className="mt-10 pt-6 border-t border-slate-800/80 w-full">
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold block mb-2.5">
                Core Production Stack
              </span>
              <div className="flex flex-wrap gap-2">
                {PERSONAL_INFO.heroTechTags.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-mono font-medium text-slate-200 bg-slate-900/90 border border-slate-800 hover:border-sky-500/50 hover:text-sky-300 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Signature Agentic Workflow Visual */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <SignatureWorkflow />
          </div>
        </div>
      </div>
    </section>
  );
}
