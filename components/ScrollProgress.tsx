"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(currentProgress);
        setIsVisible(window.scrollY > 300);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // SVG circle calculation
  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <>
      {/* Top thin luminous progress line */}
      <div className="fixed top-0 left-0 right-0 h-[2px] z-50 pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400 transition-all duration-150 ease-out shadow-[0_0_8px_rgba(56,189,248,0.6)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating circular scroll-to-top button */}
      <div
        className={`fixed bottom-6 right-6 z-40 transition-all duration-300 ${
          isVisible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="relative w-11 h-11 rounded-full bg-slate-900/90 border border-slate-700/80 hover:border-sky-400/60 shadow-xl shadow-black/50 backdrop-blur-md flex items-center justify-center text-slate-300 hover:text-white transition-all group hover:scale-110 active:scale-95"
        >
          {/* Progress circle SVG */}
          <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none">
            <circle
              cx="22"
              cy="22"
              r={radius}
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="2.5"
              fill="transparent"
            />
            <circle
              cx="22"
              cy="22"
              r={radius}
              stroke="url(#progressGradient)"
              strokeWidth="2.5"
              fill="transparent"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-all duration-150 ease-out"
            />
            <defs>
              <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#818cf8" />
              </linearGradient>
            </defs>
          </svg>
          <ArrowUp className="w-4 h-4 text-sky-400 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </>
  );
}
