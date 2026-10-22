"use client";

import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  glowColor: string;
}

export function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates (default off-screen)
    const mouse = {
      x: -1000,
      y: -1000,
      radius: 200,
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", handleResize);

    const colors = [
      { fill: "rgba(56, 189, 248, 0.9)", glow: "rgba(56, 189, 248, 0.6)" },   // Sky
      { fill: "rgba(129, 140, 248, 0.9)", glow: "rgba(129, 140, 248, 0.6)" }, // Indigo
      { fill: "rgba(6, 182, 212, 0.9)", glow: "rgba(6, 182, 212, 0.6)" },     // Cyan
      { fill: "rgba(168, 85, 247, 0.9)", glow: "rgba(168, 85, 247, 0.6)" },   // Purple
    ];

    let particles: Particle[] = [];

    const initParticles = () => {
      particles = [];
      const count = Math.min(Math.floor((width * height) / 14000), 85);
      for (let i = 0; i < count; i++) {
        const theme = colors[Math.floor(Math.random() * colors.length)];
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.75,
          vy: (Math.random() - 0.5) * 0.75,
          radius: Math.random() * 2 + 1.8,
          color: theme.fill,
          glowColor: theme.glow,
        });
      }
    };

    initParticles();

    const maxDistance = 160;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        // Move particles
        p1.x += p1.vx;
        p1.y += p1.vy;

        if (p1.x < 0) p1.x = width;
        else if (p1.x > width) p1.x = 0;
        if (p1.y < 0) p1.y = height;
        else if (p1.y > height) p1.y = 0;

        // Interactive mouse connection and gentle pull
        const dxMouse = mouse.x - p1.x;
        const dyMouse = mouse.y - p1.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

        if (distMouse < mouse.radius) {
          const force = (1 - distMouse / mouse.radius) * 0.05;
          p1.x += dxMouse * force;
          p1.y += dyMouse * force;

          // Bright interactive beam to mouse
          ctx.beginPath();
          ctx.moveTo(mouse.x, mouse.y);
          ctx.lineTo(p1.x, p1.y);
          const mouseAlpha = (1 - distMouse / mouse.radius) * 0.55;
          ctx.strokeStyle = `rgba(56, 189, 248, ${mouseAlpha})`;
          ctx.lineWidth = 1.2;
          ctx.stroke();
        }

        // Particle dot with soft halo
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fillStyle = p1.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = p1.glowColor;
        ctx.fill();
        ctx.shadowBlur = 0; // reset

        // Inter-particle links
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.38;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
            ctx.lineWidth = 0.9;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Base dark canvas */}
      <div className="absolute inset-0 bg-[#070a12]" />

      {/* Vibrant Neural Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-90"
      />

      {/* Technical dotted grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage: `radial-gradient(rgba(148, 163, 184, 0.4) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Ambient glowing radial orbs with breathing animation */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[750px] h-[500px] bg-sky-500/15 rounded-full blur-[140px] pointer-events-none animate-pulse-slow" />
      <div className="absolute top-[35%] -right-40 w-[600px] h-[600px] bg-indigo-600/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-[70%] -left-40 w-[650px] h-[650px] bg-cyan-600/15 rounded-full blur-[160px] pointer-events-none" />
    </div>
  );
}
