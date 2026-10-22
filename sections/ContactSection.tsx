"use client";

import React from "react";
import { motion } from "framer-motion";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactForm } from "@/components/ContactForm";
import { SpotlightCard } from "@/components/SpotlightCard";
import { 
  Mail, 
  Github, 
  Linkedin, 
  FileText, 
  Download, 
  Sparkles, 
  ArrowRight, 
  ExternalLink 
} from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          category="Get In Touch"
          title="Let’s build something intelligent."
          subtitle="I’m open to AI engineering, Generative AI, RAG, full-stack AI, and machine-learning opportunities."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Info & Social Cards with Spotlight */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-5 space-y-6"
          >
            <SpotlightCard className="p-6 space-y-6">
              <div>
                <h3 className="text-lg font-bold text-white mb-1">
                  Contact Information
                </h3>
                <p className="text-xs text-slate-400 font-normal">
                  Feel free to reach out directly via email or LinkedIn.
                </p>
              </div>

              <div className="space-y-3.5">
                <motion.a
                  whileHover={{ scale: 1.02, x: 2 }}
                  whileTap={{ scale: 0.98 }}
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 hover:border-sky-500/40 hover:bg-slate-950 transition-all group shadow-inner"
                >
                  <div className="p-2.5 rounded-lg bg-sky-950/60 border border-sky-800/40 text-sky-400 group-hover:scale-110 transition-transform">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                      Email
                    </span>
                    <span className="text-sm font-semibold text-white group-hover:text-sky-300 transition-colors truncate block">
                      {PERSONAL_INFO.email}
                    </span>
                  </div>
                </motion.a>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-slate-800">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-3">
                  Profiles & Channels
                </span>
                <div className="grid grid-cols-2 gap-2.5">
                  <motion.a
                    whileHover={{ scale: 1.03, y: -1 }}
                    whileTap={{ scale: 0.97 }}
                    href={PERSONAL_INFO.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-slate-700 text-xs font-semibold text-slate-200 hover:text-white transition-all group shadow-sm"
                  >
                    <div className="flex items-center gap-2">
                      <Github className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:scale-110 transition-all" />
                      <span>GitHub</span>
                    </div>
                    <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-slate-300 transition-colors" />
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.03, y: -1 }}
                    whileTap={{ scale: 0.97 }}
                    href={PERSONAL_INFO.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-slate-700 text-xs font-semibold text-slate-200 hover:text-white transition-all group shadow-sm"
                  >
                    <div className="flex items-center gap-2">
                      <Linkedin className="w-4 h-4 text-sky-400 group-hover:scale-110 transition-all" />
                      <span>LinkedIn</span>
                    </div>
                    <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-slate-300 transition-colors" />
                  </motion.a>
                </div>
              </div>

              {/* Resume Card CTA */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-4 rounded-xl bg-gradient-to-br from-sky-950/40 via-slate-950 to-indigo-950/40 border border-sky-800/40 flex items-center justify-between gap-4 shadow-md shadow-sky-500/5"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-sky-900/40 text-sky-400 border border-sky-700/40">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">Full Curriculum Vitae</h4>
                    <p className="text-[11px] text-slate-400 font-normal">Verified accomplishments PDF</p>
                  </div>
                </div>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={PERSONAL_INFO.resumePath}
                  download="Bapuram_Venkateswar_Reddy_Resume.pdf"
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold text-sky-300 bg-sky-950/80 border border-sky-700/60 hover:bg-sky-900 transition-colors flex items-center gap-1.5 shrink-0 shadow-sm"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>PDF</span>
                </motion.a>
              </motion.div>
            </SpotlightCard>
          </motion.div>

          {/* Right Column: Contact Form with Motion */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
