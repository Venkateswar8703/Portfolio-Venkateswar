import type { Metadata, Viewport } from "next";
import "./globals.css";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BackgroundGrid } from "@/components/BackgroundGrid";

export const viewport: Viewport = {
  themeColor: "#070a12",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://bapuram-venkateswar.vercel.app"),
  title: `${PERSONAL_INFO.name} | AI Engineer — Generative AI, RAG & Agentic Systems`,
  description:
    "Production-oriented AI Engineer with a mathematics background from NIT Warangal. Specializing in Generative AI, RAG pipelines, LangGraph multi-agent orchestration, multimodal workflows, and scalable FastAPI backend systems.",
  keywords: [
    "Bapuram Venkateswar Reddy",
    "AI Engineer",
    "Generative AI",
    "RAG",
    "Retrieval Augmented Generation",
    "LangGraph",
    "LangChain",
    "Multi-Agent Systems",
    "FastAPI",
    "AWS Bedrock",
    "NIT Warangal",
    "Python AI Engineer",
    "Multimodal AI",
  ],
  authors: [{ name: PERSONAL_INFO.name, url: "https://github.com/Venkateswar8703" }],
  creator: PERSONAL_INFO.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: `${PERSONAL_INFO.name} | AI Engineer`,
    description:
      "Building intelligent systems from models to production. Generative AI, RAG pipelines, agentic orchestration, and scalable backends.",
    siteName: `${PERSONAL_INFO.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${PERSONAL_INFO.name} | AI Engineer`,
    description:
      "AI Engineer specializing in Generative AI, RAG pipelines, agentic orchestration, and scalable backends.",
    creator: "@venkateswar8703",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#070a12] text-slate-100 min-h-screen flex flex-col font-sans antialiased selection:bg-sky-500/30 selection:text-sky-200">
        <BackgroundGrid />
        <Navbar />
        <main className="flex-1 relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
