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
  Activity
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
    details: "Unstructured claim files, documents, and media streams processed into clean tokenized chunks.",
    outputPreview: "ChunkStream<DocumentPayload> [tokens: 4,096 | status: PARSED]",
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
    details: "High-speed cosine similarity lookup across indexed vector databases with citation anchoring.",
    outputPreview: "VectorMatch<ContextNode[]> [similarity: 0.942 | top_k: 5]",
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
    details: "Deterministic execution hooks perform database queries, validation checks, and API calls.",
    outputPreview: "ToolResponse<ExecutionResult> [code: 200 | payload_bytes: 1,420]",
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
  },
];

export function SignatureWorkflow() {
  const [activeNode, setActiveNode] = useState<string>("agent");

  // Auto-cycle through nodes gently every 5 seconds if idle
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveNode((prev) => {
        const currentIndex = NODES.findIndex((n) => n.id === prev);
        const nextIndex = (currentIndex + 1) % NODES.length;
        return NODES[nextIndex].id;
      });
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const currentNode = NODES.find((n) => n.id === activeNode) || NODES[2];

  return (
    <div className="w-full rounded-2xl border border-slate-800/90 bg-slate-950/80 p-5 sm:p-6 backdrop-blur-xl shadow-2xl overflow-hidden">
      {/* Console Top Header */}
      <div className="flex items-center justify-between gap-2 pb-4 mb-4 border-b border-slate-800/80">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
          </div>
          <span className="text-xs font-mono text-slate-400 ml-2 hidden sm:inline">
            runtime://agentic-rag-pipeline
          </span>
        </div>

        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono text-sky-400 bg-sky-950/60 border border-sky-800/50">
          <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
          <span>ORCHESTRATOR ACTIVE</span>
        </div>
      </div>

      {/* Interactive Horizontal Pipeline Stepper */}
      <div className="mb-4">
        <div className="flex items-center justify-between gap-1 overflow-x-auto pb-2 scrollbar-none">
          {NODES.map((node, index) => {
            const Icon = node.icon;
            const isSelected = node.id === activeNode;

            return (
              <React.Fragment key={node.id}>
                <button
                  type="button"
                  onClick={() => setActiveNode(node.id)}
                  className={`flex flex-col items-center justify-center p-2 rounded-xl transition-all duration-200 shrink-0 min-w-[58px] sm:min-w-[68px] ${
                    isSelected
                      ? "bg-slate-900 border border-sky-500/60 shadow-md shadow-sky-500/10 ring-1 ring-sky-500/40"
                      : "bg-slate-900/40 border border-slate-800 hover:bg-slate-900/80 hover:border-slate-700"
                  }`}
                  title={`${node.step}: ${node.title}`}
                >
                  <div className={`p-1.5 rounded-lg border bg-gradient-to-br ${node.color} mb-1`}>
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-slate-300">
                    Step {node.step}
                  </span>
                </button>

                {index < NODES.length - 1 && (
                  <div className="h-0.5 grow min-w-[10px] bg-gradient-to-r from-slate-800 via-sky-500/40 to-slate-800 shrink-0" />
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
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.2 }}
          className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 sm:p-5 flex flex-col justify-between space-y-4"
        >
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-800/80">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-sky-950/80 border border-sky-800/50 flex items-center justify-center text-sky-400 font-mono font-bold text-xs">
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
          <p className="text-xs text-slate-300 leading-relaxed">
            {currentNode.details}
          </p>

          {/* Live Telemetry Terminal Stream Box */}
          <div className="p-2.5 rounded-lg bg-black/60 border border-slate-800 font-mono text-[11px] text-slate-400 space-y-1">
            <div className="flex items-center justify-between text-[10px] text-slate-500">
              <span className="flex items-center gap-1.5 text-sky-400">
                <Terminal className="w-3 h-3" />
                <span>telemetry_stream</span>
              </span>
              <span className="text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                200 OK
              </span>
            </div>
            <p className="text-slate-300 font-mono text-[11px] truncate">
              $ {currentNode.outputPreview}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Bottom Node Quick Selector Hints */}
      <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-slate-500 pt-1">
        <span>Click any node (01 - 05) to inspect state</span>
        <span className="text-sky-400/80">LangGraph • FastAPI • RAG</span>
      </div>
    </div>
  );
}
