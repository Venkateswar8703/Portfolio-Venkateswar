"use client";

import React from "react";

export function BackgroundGrid() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Dark gradient base */}
      <div className="absolute inset-0 bg-[#070a12]" />

      {/* Subtle technical dotted grid */}
      <div 
        className="absolute inset-0 opacity-[0.18]" 
        style={{
          backgroundImage: `radial-gradient(rgba(148, 163, 184, 0.4) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }} 
      />

      {/* Top ambient electric blue glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-sky-500/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Accent subtle violet ambient glow */}
      <div className="absolute top-[35%] -right-40 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Accent cyan ambient glow for lower sections */}
      <div className="absolute top-[70%] -left-40 w-[550px] h-[550px] bg-cyan-600/08 rounded-full blur-[150px] pointer-events-none" />
    </div>
  );
}
