import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#080c14",
        surface: {
          50: "#131b2e",
          100: "#0f172a",
          200: "#0b1120",
          300: "#080c14",
        },
        border: {
          subtle: "rgba(255, 255, 255, 0.08)",
          glow: "rgba(56, 189, 248, 0.25)",
        },
        primary: {
          DEFAULT: "#38bdf8", // Electric sky
          hover: "#0284c7",
          dark: "#0369a1",
        },
        accent: {
          cyan: "#06b6d4",
          violet: "#818cf8",
          purple: "#a855f7",
          emerald: "#10b981",
        },
      },
      fontFamily: {
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      backgroundImage: {
        "grid-pattern": "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "glow-conic": "conic-gradient(from 180deg at 50% 50%, #38bdf8 0deg, #818cf8 180deg, #38bdf8 360deg)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "flow": "flow 8s linear infinite",
      },
      keyframes: {
        flow: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
