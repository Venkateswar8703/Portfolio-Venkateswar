"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Experience } from "@/data/portfolioData";
import { SpotlightCard } from "@/components/SpotlightCard";
import { 
  Building2, 
  Calendar, 
  MapPin, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  TrendingUp, 
  Zap,
  Sparkles
} from "lucide-react";

interface TimelineItemProps {
  experience: Experience;
  isLast?: boolean;
}

export function TimelineItem({ experience, isLast }: TimelineItemProps) {
  const [expanded, setExpanded] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative flex gap-4 sm:gap-8 group"
    >
      {/* Left Timeline Line & Pulsing Node */}
      <div className="flex flex-col items-center">
        <motion.div
          whileHover={{ scale: 1.15 }}
          className="relative w-10 h-10 rounded-xl bg-slate-900 border border-sky-400/60 flex items-center justify-center text-sky-400 group-hover:bg-sky-950/90 group-hover:border-sky-300 transition-all shadow-lg shadow-sky-500/20 z-10"
        >
          {/* Subtle pulsating beacon behind node */}
          <span className="absolute -inset-1 rounded-xl bg-sky-500/20 blur-sm animate-pulse-slow pointer-events-none" />
          <Building2 className="w-5 h-5 relative z-10" />
        </motion.div>

        {!isLast && (
          <div className="relative w-0.5 grow bg-slate-800 my-2 overflow-hidden">
            <motion.div
              animate={{ y: ["-100%", "200%"] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
              className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent via-sky-400 to-transparent"
            />
          </div>
        )}
      </div>

      {/* Main Experience Card with Spotlight */}
      <div className="pb-10 flex-1">
        <SpotlightCard className="p-5 sm:p-7">
          {/* Header row */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 pb-4 border-b border-slate-800">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-sky-300 transition-colors">
                  {experience.role}
                </h3>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium text-sky-400 bg-sky-950/80 border border-sky-800/60 shadow-sm shadow-sky-500/10">
                  {experience.type}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400 mt-1.5 font-medium">
                <span className="text-slate-200 font-semibold flex items-center gap-1.5">
                  {experience.company}
                  {experience.legalEntity && (
                    <span className="text-slate-400 font-normal">
                      ({experience.legalEntity})
                    </span>
                  )}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" />
                  {experience.location}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1 text-xs font-mono text-slate-300 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700/60 self-start shadow-inner">
              <Calendar className="w-3.5 h-3.5 text-sky-400" />
              <span>{experience.period}</span>
            </div>
          </div>

          {/* Metric Highlights Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 my-5">
            {experience.metrics.map((m) => (
              <motion.div
                key={m.label}
                whileHover={{ scale: 1.05, y: -2 }}
                className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800 text-center flex flex-col justify-center hover:border-sky-500/40 hover:bg-slate-950 transition-all cursor-default shadow-sm"
              >
                <span className="text-base sm:text-lg font-bold text-sky-400 font-mono tracking-tight">
                  {m.value}
                </span>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold mt-0.5 line-clamp-1">
                  {m.label}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Bullet Points */}
          <div className="space-y-2.5 my-4">
            {experience.achievements.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0 mt-2" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Tech Stack Pills */}
          <div className="mt-5 pt-4 border-t border-slate-800 flex flex-wrap gap-1.5">
            {experience.technologies.map((t) => (
              <motion.span
                key={t}
                whileHover={{ scale: 1.06, y: -1 }}
                className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800/90 text-slate-300 border border-slate-700/50 hover:border-sky-400/40 hover:text-sky-300 transition-colors cursor-default"
              >
                {t}
              </motion.span>
            ))}
          </div>
        </SpotlightCard>
      </div>
    </motion.div>
  );
}
