import React from "react";
import { HeroSection } from "@/sections/HeroSection";
import { AboutSection } from "@/sections/AboutSection";
import { ExperienceSection } from "@/sections/ExperienceSection";
import { ProjectsSection } from "@/sections/ProjectsSection";
import { SkillsSection } from "@/sections/SkillsSection";
import { EducationSection } from "@/sections/EducationSection";
import { AchievementsSection } from "@/sections/AchievementsSection";
import { ContactSection } from "@/sections/ContactSection";

export default function HomePage() {
  return (
    <div className="flex flex-col space-y-12 sm:space-y-16">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <EducationSection />
      <AchievementsSection />
      <ContactSection />
    </div>
  );
}
