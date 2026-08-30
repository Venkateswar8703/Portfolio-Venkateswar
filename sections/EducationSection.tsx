import React from "react";
import { EDUCATION } from "@/data/portfolioData";
import { SectionHeading } from "@/components/SectionHeading";
import { MathToAIVisual } from "@/components/MathToAIVisual";
import { GraduationCap, BookOpen, Calendar, MapPin, Award, CheckCircle } from "lucide-react";

export function EducationSection() {
  return (
    <section id="education" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          category="Education & Foundations"
          title="Rigorous Mathematical & Algorithmic Background"
          subtitle="Integrated Master of Science at the National Institute of Technology Warangal, marrying foundational mathematics with computational intelligence."
        />

        {/* Institution Card */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md p-6 sm:p-8">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 pb-6 border-b border-slate-800">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-sky-950/60 border border-sky-800/40 text-sky-400 shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {EDUCATION.institution}
                </h3>
                <p className="text-sm font-semibold text-sky-400 mt-1">
                  {EDUCATION.degree}
                </p>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400 mt-2 font-mono">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-sky-400" />
                    {EDUCATION.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    {EDUCATION.location}
                  </span>
                </div>
              </div>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono text-emerald-400 bg-emerald-950/50 border border-emerald-800/50 self-start">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              5-Year Integrated Program
            </div>
          </div>

          {/* Description */}
          <p className="mt-5 text-sm text-slate-300 leading-relaxed max-w-4xl">
            {EDUCATION.description}
          </p>

          {/* Relevant Coursework */}
          <div className="mt-6 pt-5 border-t border-slate-800/80">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3">
              <BookOpen className="w-3.5 h-3.5 text-sky-400" />
              <span>Relevant Rigorous Coursework</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {EDUCATION.coursework.map((course) => (
                <span
                  key={course}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono text-slate-200 bg-slate-950/80 border border-slate-800 hover:border-slate-700 transition-colors"
                >
                  <CheckCircle className="w-3 h-3 text-sky-400" />
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Signature Quantitative Continuum Diagram */}
        <MathToAIVisual />
      </div>
    </section>
  );
}
