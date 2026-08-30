"use client";

import React, { useState } from "react";
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

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-slate-900/80 border border-slate-800 self-start md:self-auto backdrop-blur-md">
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
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                    isActive
                      ? "bg-sky-500 text-white font-semibold shadow-md shadow-sky-500/20"
                      : "text-slate-400 hover:text-white hover:bg-slate-800/60"
                  }`}
                >
                  {Icon && <Icon className="w-3.5 h-3.5" />}
                  <span>{label}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isActive ? "bg-sky-600 text-sky-100" : "bg-slate-800 text-slate-400"
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
