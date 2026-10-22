"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FileText, 
  Search, 
  Bot, 
  Wrench, 
  CheckCircle2, 
  ArrowRight,
  Database,
  Sparkles,
  Cpu,
  Layers,
  Terminal,
  Activity,
  Play,
  Pause,
  Radio
} from "lucide-react";

interface NodeData {
  id: string;
  step: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  tech: string[];
  color: string;
  badgeColor: string;
  details: string;
  outputPreview: string;
  telemetryMetrics: { label: string; val: string }[];
}

const NODES: NodeData[] = [
  {
    id: "input",
    step: "01",
    title: "Documents & Multimodal Ingestion",
    subtitle: "PDFs, Audio Streams, OCR & Video",
    icon: FileText,
    tech: ["PDFs", "Whisper v3", "FFmpeg", "OCR"],
    color: "from-blue-500/20 to-sky-500/10 text-sky-400 border-sky-500/30",
    badgeColor: "bg-sky-950/70 text-sky-300 border-sky-800/60",
    details: "Unstructured claim files, documents, and media streams processed into clean tokenized chunks with metadata tags.",
    outputPreview: "ChunkStream<DocumentPayload> [tokens: 4,096 | status: PARSED]",
    telemetryMetrics: [
      { label: "PARSER", val: "Whisper + OCR" },
      { label: "CHUNK SIZE", val: "512 tokens" },
      { label: "OVERLAP", val: "64 tokens" },
    ],
  },
  {
    id: "retrieval",
    step: "02",
    title: "Dense Vector Retrieval Engine",
    subtitle: "FAISS & Chroma Semantic Search",
    icon: Search,
    tech: ["FAISS", "Chroma", "HF Embeddings"],
    color: "from-cyan-500/20 to-teal-500/10 text-cyan-400 border-cyan-500/30",
    badgeColor: "bg-cyan-950/70 text-cyan-300 border-cyan-800/60",
    details: "High-speed cosine similarity lookup across indexed vector databases with citation anchoring and re-ranking.",
    outputPreview: "VectorMatch<ContextNode[]> [similarity: 0.942 | top_k: 5]",
    telemetryMetrics: [
      { label: "INDEX", val: "HNSW Flat" },
      { label: "LATENCY", val: "14ms" },
      { label: "RE-RANKER", val: "Cross-Encoder" },
    ],
  },
  {
    id: "agent",
    step: "03",
    title: "LangGraph Agent Orchestration",
    subtitle: "State Graph, Cyclic Loops & Routing",
    icon: Bot,
    tech: ["LangGraph", "FastAPI", "Bedrock"],
    color: "from-indigo-500/20 to-violet-500/10 text-indigo-300 border-indigo-500/40",
    badgeColor: "bg-indigo-950/70 text-indigo-300 border-indigo-800/60",
    details: "Stateful agent graphs evaluate confidence, branch dynamically, call external tools, and validate guardrails.",
    outputPreview: "AgentState<GraphTransition> [node: 'validate_schema' | action: 'EXECUTE_TOOL']",
    telemetryMetrics: [
      { label: "STATE GRAPH", val: "Cyclic Active" },
      { label: "GUARDRAIL", val: "PASSED (0.98)" },
      { label: "MODEL", val: "Claude 3.5 / Bedrock" },
    ],
  },
  {
    id: "tools",
    step: "04",
    title: "Deterministic Tool Execution",
    subtitle: "APIs, SQL Engines & REPL Sandbox",
    icon: Wrench,
    tech: ["REST APIs", "SQL / Vector", "Python REPL"],
    color: "from-purple-500/20 to-pink-500/10 text-purple-300 border-purple-500/30",
    badgeColor: "bg-purple-950/70 text-purple-300 border-purple-800/60",
    details: "Deterministic execution hooks perform database queries, validation checks, and API calls with sandbox safety.",
    outputPreview: "ToolResponse<ExecutionResult> [code: 200 | payload_bytes: 1,420]",
    telemetryMetrics: [
      { label: "RUNNER", val: "Async Client" },
      { label: "VALIDATION", val: "Pydantic v2" },
      { label: "TIMEOUT", val: "2500ms" },
    ],
  },
  {
    id: "output",
    step: "05",
    title: "Production Structured Output",
    subtitle: "Pydantic JSON & REST Endpoint",
    icon: CheckCircle2,
    tech: ["Pydantic JSON", "FastAPI", "Telemetry"],
    color: "from-emerald-500/20 to-green-500/10 text-emerald-400 border-emerald-500/30",
    badgeColor: "bg-emerald-950/70 text-emerald-300 border-emerald-800/60",
    details: "Verified, type-safe JSON response delivered with citations, telemetry metrics, and UI stream hooks.",
    outputPreview: "ResponsePayload<VerifiedJSON> { status: 'CONFIRMED', cost_savings: '35%' }",
    telemetryMetrics: [
      { label: "FORMAT", val: "Type-Safe JSON" },
      { label: "SCHEMA", val: "Strict Pydantic" },
      { label: "STATUS", val: "200 SUCCESS" },
    ],
  },
];

export function SignatureWorkflow() {
  const [activeNode, setActiveNode] = useState<string>("agent");
  const [isPaused, setIsPaused] = useState(false);
  const [typedOutput, setTypedOutput] = useState("");

  const currentNode = NODES.find((n) => n.id === activeNode) || NODES[2];

  // Auto-cycle through nodes gently every 5 seconds if not paused
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveNode((prev) => {
        const currentIndex = NODES.findIndex((n) => n.id === prev);
        const nextIndex = (currentIndex + 1) % NODES.length;
        return NODES[nextIndex].id;
      });
    }, 5500);

    return () => clearInterval(timer);
  }, [isPaused]);

  // Animated typing effect for the terminal preview line
  useEffect(() => {
    let index = 0;
    const targetText = currentNode.outputPreview;
    setTypedOutput("");

    const interval = setInterval(() => {
      if (index < targetText.length) {
        setTypedOutput(targetText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 18);

    return () => clearInterval(interval);
  }, [currentNode]);

  return (
    <div className="w-full rounded-2xl border border-slate-800/90 bg-slate-950/85 p-5 sm:p-6 backdrop-blur-xl shadow-2xl overflow-hidden relative group">
      {/* Ambient background glow inside console */}
      <div className="absolute -top-20 -right-20 w-48 h-48 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Console Top Header */}
      <div className="flex items-center justify-between gap-2 pb-4 mb-4 border-b border-slate-800/80 relative z-10">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 shadow-sm shadow-red-500/30" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 shadow-sm shadow-yellow-500/30" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 shadow-sm shadow-emerald-500/30" />
          </div>
          <span className="text-xs font-mono text-slate-400 ml-2 hidden sm:inline flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-sky-400" />
            runtime://agentic-rag-pipeline
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Pause / Play Toggle */}
          <button
            type="button"
            onClick={() => setIsPaused(!isPaused)}
            title={isPaused ? "Resume auto-rotation" : "Pause auto-rotation"}
            className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white transition-colors text-xs flex items-center gap-1"
          >
            {isPaused ? (
              <>
                <Play className="w-3 h-3 text-emerald-400" />
                <span className="text-[10px] font-mono hidden sm:inline">Resume</span>
              </>
            ) : (
              <>
                <Pause className="w-3 h-3 text-amber-400" />
                <span className="text-[10px] font-mono hidden sm:inline">Pause</span>
              </>
            )}
          </button>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono text-sky-400 bg-sky-950/60 border border-sky-800/50">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-400" />
            </span>
            <span className="font-semibold">PIPELINE LIVE</span>
          </div>
        </div>
      </div>

      {/* Interactive Horizontal Pipeline Stepper with Animated Data Pulses */}
      <div className="mb-4 relative z-10">
        <div className="flex items-center justify-between gap-1 overflow-x-auto pb-2 scrollbar-none">
          {NODES.map((node, index) => {
            const Icon = node.icon;
            const isSelected = node.id === activeNode;

            return (
              <React.Fragment key={node.id}>
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  type="button"
                  onClick={() => {
                    setActiveNode(node.id);
                    setIsPaused(true);
                  }}
                  className={`relative flex flex-col items-center justify-center p-2 rounded-xl transition-all duration-200 shrink-0 min-w-[58px] sm:min-w-[68px] ${
                    isSelected
                      ? "bg-slate-900 border border-sky-400/80 shadow-lg shadow-sky-500/20 ring-1 ring-sky-400/40"
                      : "bg-slate-900/40 border border-slate-800 hover:bg-slate-900/80 hover:border-slate-700"
                  }`}
                  title={`${node.step}: ${node.title}`}
                >
                  <div className={`p-1.5 rounded-lg border bg-gradient-to-br ${node.color} mb-1 transition-all`}>
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <span className={`text-[10px] font-mono font-bold ${isSelected ? "text-sky-300" : "text-slate-400"}`}>
                    Step {node.step}
                  </span>

                  {isSelected && (
                    <motion.div
                      layoutId="activeStepNodeIndicator"
                      className="absolute -bottom-1 w-6 h-0.5 bg-gradient-to-r from-sky-400 to-indigo-400 rounded-full shadow-[0_0_8px_rgba(56,189,248,0.8)]"
                      transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    />
                  )}
                </motion.button>

                {index < NODES.length - 1 && (
                  <div className="relative h-1 grow min-w-[12px] bg-slate-800/80 rounded-full overflow-hidden shrink-0">
                    {/* Animated moving pulse between nodes */}
                    <motion.div
                      animate={{
                        x: ["-100%", "200%"],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 1.8,
                        ease: "linear",
                        delay: index * 0.35,
                      }}
                      className="absolute top-0 bottom-0 w-8 bg-gradient-to-r from-transparent via-sky-400 to-transparent"
                    />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Selected Node Detailed Architecture Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentNode.id}
          initial={{ opacity: 0, y: 10, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.98 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 sm:p-5 flex flex-col justify-between space-y-4 relative z-10"
        >
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-800/80">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-sky-950/80 border border-sky-800/50 flex items-center justify-center text-sky-400 font-mono font-bold text-xs shadow-inner">
                {currentNode.step}
              </div>
              <div>
                <h4 className="text-sm font-bold text-white tracking-tight">
                  {currentNode.title}
                </h4>
                <p className="text-xs text-sky-400 font-mono">
                  {currentNode.subtitle}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-1">
              {currentNode.tech.map((t) => (
                <span
                  key={t}
                  className={`text-[10px] font-mono px-2 py-0.5 rounded border ${currentNode.badgeColor}`}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Description */}
          <p className="text-xs text-slate-300 leading-relaxed font-normal">
            {currentNode.details}
          </p>

          {/* Telemetry Metrics Row */}
          <div className="grid grid-cols-3 gap-2">
            {currentNode.telemetryMetrics.map((metric) => (
              <div
                key={metric.label}
                className="p-2 rounded-lg bg-black/40 border border-slate-800/80 font-mono"
              >
                <div className="text-[9px] uppercase tracking-wider text-slate-500 font-semibold truncate">
                  {metric.label}
                </div>
                <div className="text-xs font-bold text-slate-200 mt-0.5 truncate">
                  {metric.val}
                </div>
              </div>
            ))}
          </div>

          {/* Live Telemetry Terminal Stream Box with Typing Animation */}
          <div className="p-3 rounded-lg bg-black/70 border border-slate-800/90 font-mono text-[11px] text-slate-400 space-y-1.5 shadow-inner">
            <div className="flex items-center justify-between text-[10px] text-slate-500">
              <span className="flex items-center gap-1.5 text-sky-400">
                <Terminal className="w-3 h-3" />
                <span>telemetry_stream // stage_{currentNode.step}</span>
              </span>
              <span className="text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                200 OK • ACTIVE
              </span>
            </div>
            <div className="text-slate-200 font-mono text-[11px] flex items-center overflow-x-auto scrollbar-none">
              <span className="text-sky-400 mr-2 shrink-0">$</span>
              <span className="truncate">{typedOutput}</span>
              <span className="w-1.5 h-3.5 bg-sky-400 ml-1 animate-pulse shrink-0" />
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Bottom Node Quick Selector Hints */}
      <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-slate-500 pt-1 relative z-10">
        <span className="flex items-center gap-1">
          <Activity className="w-3 h-3 text-sky-400" />
          <span>Interactive state visualizer</span>
        </span>
        <span className="text-sky-400/90 font-semibold">LangGraph • RAG Pipelines • FastAPI</span>
      </div>
    </div>
  );
}
