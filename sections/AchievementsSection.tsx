"use client";

import React from "react";
import { motion } from "framer-motion";
import { ACHIEVEMENTS, LEADERSHIP } from "@/data/portfolioData";
import { SectionHeading } from "@/components/SectionHeading";
import { SpotlightCard } from "@/components/SpotlightCard";
import { 
  Trophy, 
  Award, 
  Users, 
  Calendar, 
  Building, 
  Sparkles,
  Medal
} from "lucide-react";

export function AchievementsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="achievements" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Achievements Group */}
        <div>
          <SectionHeading
            category="Honors & Competitions"
            title="Recognitions & Competitive Milestones"
            subtitle="Demonstrated excellence in global quantitative challenges, national-level hackathons, and athletic championships."
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {ACHIEVEMENTS.map((ach) => (
              <motion.div key={ach.title} variants={itemVariants} className="h-full">
                <SpotlightCard
                  spotlightColor="rgba(245, 158, 11, 0.15)"
                  className="p-6 h-full flex flex-col justify-between group hover:border-amber-500/40"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <motion.div
                        whileHover={{ scale: 1.15, rotate: 6 }}
                        className="p-2.5 rounded-xl bg-amber-950/50 border border-amber-800/50 text-amber-400 group-hover:border-amber-500/60 transition-all shadow-md shadow-amber-500/10"
                      >
                        <Trophy className="w-5 h-5" />
                      </motion.div>
                      {ach.badge && (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold text-amber-300 bg-amber-950/70 border border-amber-800/60 shadow-sm shadow-amber-500/15">
                          {ach.badge}
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg font-bold text-white group-hover:text-amber-200 transition-colors">
                      {ach.title}
                    </h3>
                    <p className="text-xs font-semibold text-sky-400 mt-1">
                      {ach.subtitle}
                    </p>
                    <p className="text-xs text-slate-300 leading-relaxed mt-3 font-normal">
                      {ach.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                    <span>{ach.issuer}</span>
                    <span className="text-slate-500">{ach.year}</span>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Leadership & Campus Responsibility Group */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-wider uppercase font-semibold mb-2 bg-indigo-950/50 text-indigo-400 border border-indigo-500/30 shadow-sm shadow-indigo-500/10">
              <Users className="w-3.5 h-3.5" />
              <span>Campus Leadership</span>
            </div>
            <h3 className="text-2xl font-bold text-white">
              Institutional Roles & Responsibilities
            </h3>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {LEADERSHIP.map((item) => (
              <motion.div key={item.organization + item.role} variants={itemVariants} className="h-full">
                <SpotlightCard className="p-5 h-full flex flex-col justify-between group">
                  <div>
                    <span className="text-[11px] font-mono text-sky-400 font-semibold block mb-1">
                      {item.period}
                    </span>
                    <h4 className="text-sm font-bold text-white group-hover:text-sky-300 transition-colors">
                      {item.role}
                    </h4>
                    <p className="text-xs font-medium text-slate-300 mt-0.5">
                      {item.organization}
                    </p>
                    <p className="text-xs text-slate-400 leading-relaxed mt-2.5 font-normal">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800/60 text-[11px] font-mono text-slate-500">
                    {item.institution}
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
