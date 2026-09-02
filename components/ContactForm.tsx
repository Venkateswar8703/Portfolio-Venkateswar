"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2, Mail, Copy, Check } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error" | "unconfigured">("idle");
  const [responseMessage, setResponseMessage] = useState<string>("");
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setResponseMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.status === 200) {
        setStatus("success");
        setResponseMessage(data.message || "Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else if (res.status === 503 || data.code === "UNCONFIGURED_EMAIL_PROVIDER") {
        // Honest notification that Resend API key is not configured yet
        setStatus("unconfigured");
        setResponseMessage(data.message);
      } else {
        setStatus("error");
        setResponseMessage(data.error || "Failed to submit message. Please try direct email.");
      }
    } catch (err) {
      setStatus("error");
      setResponseMessage("Network error occurred. Please contact via direct email.");
    }
  };

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 sm:p-8 backdrop-blur-xl">
      <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
        <div>
          <h3 className="text-xl font-bold text-white">Send Direct Inquiry</h3>
          <p className="text-xs text-slate-400 mt-0.5">
            Expect response within 24 hours
          </p>
        </div>
        <button
          type="button"
          onClick={handleCopyEmail}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-slate-300 bg-slate-800 hover:bg-slate-700 transition-colors border border-slate-700"
          title="Copy Email Address"
        >
          {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          <span>{copiedEmail ? "Copied" : "Copy Email"}</span>
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-xs font-mono text-slate-300 mb-1.5">
              Your Name <span className="text-sky-400">*</span>
            </label>
            <input
              id="name"
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. Alex Morgan"
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-white placeholder-slate-500 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-mono text-slate-300 mb-1.5">
              Email <span className="text-sky-400">*</span>
            </label>
            <input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="alex@example.com"
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-white placeholder-slate-500 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors"
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block text-xs font-mono text-slate-300 mb-1.5">
            Subject <span className="text-sky-400">*</span>
          </label>
          <input
            id="subject"
            type="text"
            required
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            placeholder="AI Engineering Role / Project Collaboration"
            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-white placeholder-slate-500 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-xs font-mono text-slate-300 mb-1.5">
            Message <span className="text-sky-400">*</span>
          </label>
          <textarea
            id="message"
            required
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Describe the opportunity, scope, or technical challenge..."
            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-white placeholder-slate-500 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors resize-none"
          />
        </div>

        {/* Status Alerts */}
        {status === "success" && (
          <div className="p-3.5 rounded-xl bg-emerald-950/60 border border-emerald-500/50 flex items-start gap-2.5 text-xs text-emerald-300">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold">Message Delivered!</p>
              <p className="mt-0.5 text-slate-300">{responseMessage}</p>
            </div>
          </div>
        )}

        {status === "unconfigured" && (
          <div className="p-3.5 rounded-xl bg-amber-950/60 border border-amber-500/50 flex items-start gap-2.5 text-xs text-amber-200">
            <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold">Notice: Production Mailer in Demo Mode</p>
              <p className="mt-0.5 text-slate-300">
                {responseMessage} Direct email link:{" "}
                <a
                  href={`mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(formData.subject || "AI Engineering Opportunity")}&body=${encodeURIComponent(formData.message)}`}
                  className="text-sky-400 underline font-semibold hover:text-sky-300"
                >
                  Click here to email {PERSONAL_INFO.email}
                </a>
              </p>
            </div>
          </div>
        )}

        {status === "error" && (
          <div className="p-3.5 rounded-xl bg-red-950/60 border border-red-500/50 flex items-start gap-2.5 text-xs text-red-300">
            <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold">Submission Issue</p>
              <p className="mt-0.5 text-slate-300">{responseMessage}</p>
            </div>
          </div>
        )}

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full py-3 px-6 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 transition-all flex items-center justify-center gap-2 shadow-lg shadow-sky-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Transmitting...</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Send Message</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}
