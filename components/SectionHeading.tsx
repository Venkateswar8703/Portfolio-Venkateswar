import React from "react";

interface SectionHeadingProps {
  category: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  category,
  title,
  subtitle,
  align = "left",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div className={`mb-12 ${isCenter ? "text-center max-w-2xl mx-auto" : "max-w-3xl"}`}>
      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-wider uppercase font-semibold mb-3 border ${
        isCenter ? "mx-auto" : ""
      } bg-sky-950/40 text-sky-400 border-sky-500/30`}>
        <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
        {category}
      </div>
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base sm:text-lg text-slate-400 leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
}
