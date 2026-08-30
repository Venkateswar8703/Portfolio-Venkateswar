import React from "react";
import { ACHIEVEMENTS, LEADERSHIP } from "@/data/portfolioData";
import { SectionHeading } from "@/components/SectionHeading";
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ACHIEVEMENTS.map((ach) => (
              <div
                key={ach.title}
                className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 hover:bg-slate-900/70 backdrop-blur-md transition-all duration-200 flex flex-col justify-between group hover:border-sky-500/40"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-amber-950/40 border border-amber-800/40 text-amber-400 group-hover:scale-105 transition-transform">
                      <Trophy className="w-5 h-5" />
                    </div>
                    {ach.badge && (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold text-amber-300 bg-amber-950/60 border border-amber-800/50">
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
                  <p className="text-xs text-slate-300 leading-relaxed mt-3">
                    {ach.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>{ach.issuer}</span>
                  <span className="text-slate-500">{ach.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership & Campus Responsibility Group */}
        <div>
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-wider uppercase font-semibold mb-2 bg-indigo-950/40 text-indigo-400 border border-indigo-500/30">
              <Users className="w-3.5 h-3.5" />
              <span>Campus Leadership</span>
            </div>
            <h3 className="text-2xl font-bold text-white">
              Institutional Roles & Responsibilities
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {LEADERSHIP.map((item) => (
              <div
                key={item.organization + item.role}
                className="p-5 rounded-2xl border border-slate-800 bg-slate-950/60 hover:bg-slate-900/60 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-mono text-sky-400 font-semibold block mb-1">
                    {item.period}
                  </span>
                  <h4 className="text-sm font-bold text-white">
                    {item.role}
                  </h4>
                  <p className="text-xs font-medium text-slate-300 mt-0.5">
                    {item.organization}
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed mt-2.5">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/60 text-[11px] font-mono text-slate-500">
                  {item.institution}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
