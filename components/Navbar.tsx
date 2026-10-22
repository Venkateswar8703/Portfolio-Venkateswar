"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileText, Download, ArrowUpRight, Sparkles } from "lucide-react";
import { PERSONAL_INFO, NAV_LINKS } from "@/data/portfolioData";

export function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sectionIds = ["hero", "about", "experience", "projects", "skills", "education", "achievements", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      const topOffset = targetEl.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: topOffset, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#070a12]/85 backdrop-blur-xl border-b border-slate-800/80 shadow-lg shadow-black/50 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link
          href="#hero"
          onClick={(e) => handleNavClick(e, "#hero")}
          className="flex items-center gap-2.5 group focus:outline-none"
        >
          <motion.div
            whileHover={{ scale: 1.08, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center text-white font-mono font-bold text-sm shadow-md shadow-sky-500/25 border border-sky-400/30"
          >
            BV
          </motion.div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-white tracking-tight group-hover:text-sky-300 transition-colors">
              Venkateswar Reddy
            </span>
            <span className="text-[10px] font-mono text-slate-400 leading-none">
              AI Engineer
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links with Sliding Active Indicator */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-900/70 border border-slate-800/80 rounded-full p-1.5 backdrop-blur-xl shadow-inner">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative px-3 py-1.5 rounded-full text-xs font-medium transition-colors z-10 ${
                  isActive
                    ? "text-sky-300 font-semibold"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavbarPill"
                    className="absolute inset-0 bg-sky-500/20 border border-sky-400/40 rounded-full -z-10 shadow-sm shadow-sky-500/20"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right CTA / Resume Button */}
        <div className="hidden sm:flex items-center gap-3">
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href={PERSONAL_INFO.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-sky-300 bg-sky-950/50 border border-sky-800/60 hover:bg-sky-900/50 hover:border-sky-600 transition-colors"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>View Résumé</span>
            <ArrowUpRight className="w-3 h-3 opacity-70" />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 shadow-md shadow-sky-500/25 hover:shadow-sky-500/40 transition-all"
          >
            <span>Let&apos;s Talk</span>
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden items-center gap-2">
          <a
            href={PERSONAL_INFO.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium text-sky-400 bg-sky-950/40 border border-sky-800/40"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>CV</span>
          </a>
          
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-400 hover:text-white bg-slate-900 border border-slate-800 focus:outline-none"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Drawer with AnimatePresence */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden border-b border-slate-800 bg-[#070a12]/95 backdrop-blur-2xl px-4 pt-3 pb-6 space-y-2 overflow-hidden"
          >
            <div className="grid grid-cols-2 gap-2 pt-2">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                      isActive
                        ? "bg-sky-500/20 text-sky-400 font-semibold border border-sky-500/30"
                        : "text-slate-300 hover:bg-slate-900 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>

            <div className="pt-4 border-t border-slate-800 flex flex-col gap-2">
              <a
                href={PERSONAL_INFO.resumePath}
                download="Bapuram_Venkateswar_Reddy_Resume.pdf"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-xs font-semibold text-slate-200 bg-slate-900 border border-slate-700"
              >
                <Download className="w-4 h-4" />
                Download Résumé
              </a>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-sky-500 to-indigo-600"
              >
                Let&apos;s Connect
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
