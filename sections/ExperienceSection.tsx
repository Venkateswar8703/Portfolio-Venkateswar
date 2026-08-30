import React from "react";
import { EXPERIENCES } from "@/data/portfolioData";
import { SectionHeading } from "@/components/SectionHeading";
import { TimelineItem } from "@/components/TimelineItem";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          category="Experience & Track Record"
          title="Engineered Impact & Quantitative Experience"
          subtitle="Direct contributions to enterprise Generative AI systems, multimodal media orchestration, and quantitative strategy research."
        />

        <div className="mt-12 max-w-4xl mx-auto">
          {EXPERIENCES.map((exp, idx) => (
            <TimelineItem
              key={exp.company}
              experience={exp}
              isLast={idx === EXPERIENCES.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
