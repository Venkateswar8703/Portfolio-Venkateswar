"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS, Project } from "@/data/portfolioData";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { Bot, Database, Layers, Eye, Sparkles } from "lucide-react";

type FilterCategory = "All" | "Agentic AI" | "RAG" | "Full-Stack AI" | "Computer Vision";

const CATEGORIES: { label: FilterCategory; icon?: React.ElementType }[] = [
  { label: "All" },
  { label: "Agentic AI", icon: Bot },
  { label: "RAG", icon: Database },
  { label: "Full-Stack AI", icon: Layers },
  { label: "Computer Vision", icon: Eye },
];

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<FilterCategory>("All");

  const filteredProjects =
    selectedCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <SectionHeading
            category="Featured Projects"
            title="Production-Grade AI & Multimodal Systems"
            subtitle="Explore end-to-end architectures engineered for accuracy, stateful execution, and real-world deployment."
          />

          {/* Filter Tabs with Sliding Active Pill */}
          <div className="flex flex-wrap gap-1.5 p-1.5 rounded-xl bg-slate-900/80 border border-slate-800 self-start md:self-auto backdrop-blur-md shadow-inner">
            {CATEGORIES.map(({ label, icon: Icon }) => {
              const isActive = selectedCategory === label;
              const count =
                label === "All"
                  ? PROJECTS.length
                  : PROJECTS.filter((p) => p.category === label).length;

              return (
                <button
                  key={label}
                  type="button"
                  onClick={() => setSelectedCategory(label)}
                  className={`relative inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors z-10 ${
                    isActive
                      ? "text-white font-semibold"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeCategoryPill"
                      className="absolute inset-0 bg-sky-500 rounded-lg shadow-md shadow-sky-500/25 -z-10"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  {Icon && <Icon className="w-3.5 h-3.5" />}
                  <span>{label}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isActive ? "bg-sky-600 text-white" : "bg-slate-800 text-slate-400"
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid with Smooth Layout Animation */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
