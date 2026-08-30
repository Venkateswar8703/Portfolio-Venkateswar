# Bapuram Venkateswar Reddy — AI Engineer Portfolio

A modern, high-performance, dark-first AI Engineer portfolio website built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

Designed specifically for technical recruiters, engineering leaders, and startup founders to showcase deep competencies across **Generative AI**, **RAG pipelines**, **LangGraph multi-agent orchestration**, and **full-stack AI systems**.

---

## 🚀 Key Highlights & Features

- **End-to-End AI System Narrative**: Focused on building intelligent systems from raw retrieval & model orchestration to production-ready APIs and deployment.
- **Interactive Signature Visual**: Interactive animated Agentic AI workflow diagram (`Documents/Media → Retrieval → Agent Orchestration → Tools → Structured Output`).
- **Mathematical & Quantitative Foundation Visual**: Highlights the progression from Mathematics & Statistics at **NIT Warangal** to Machine Learning and Production AI Engineering.
- **Verified Experience Timeline**: Direct metrics from Devseccops AI (35% inference cost reduction, 25% redundant LLM call reduction, 2x media throughput, 40% flicker reduction, 15% forecasting error cut) and WorldQuant BRAIN (20+ alpha strategies, Sharpe > 2).
- **Filterable Featured Projects Grid**: Filter between `All`, `Agentic AI`, `RAG`, `Full-Stack AI`, and `Computer Vision` with technical architecture previews.
- **Clean Categorized Skills**: Categorized skill groups across 7 domains with zero arbitrary progress bars.
- **Honest Contact & API Route**: Built-in `/api/contact` route supporting Resend email integration with fallback mode when API keys are not yet configured.
- **Direct Résumé Actions**: Working View & Download actions linking to `/public/resume.pdf`.
- **Full SEO & Accessibility**: Built-in Next.js metadata API, OpenGraph & Twitter tags, dynamic `sitemap.ts`, `robots.ts`, keyboard navigation, and responsive layouts.

---

## 🛠️ Technology Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router, Server & Client Components)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (Custom dark theme tokens & glassmorphism)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment Target**: [Vercel](https://vercel.com/)

---

## 📁 Project Structure

```
Portfolio/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts             # Serverless Contact API with Resend support
│   ├── favicon.ico                  # Favicon
│   ├── icon.svg                     # Vector app icon
│   ├── globals.css                  # Custom Tailwind styles & glass utilities
│   ├── layout.tsx                   # Root layout with SEO metadata & fonts
│   ├── page.tsx                     # Main single-page portfolio layout
│   ├── robots.ts                    # Dynamic SEO robots.txt
│   └── sitemap.ts                   # Dynamic sitemap generator
├── components/
│   ├── BackgroundGrid.tsx           # Subtle technical grid & ambient glow
│   ├── ContactForm.tsx              # Interactive contact form with status toast
│   ├── Footer.tsx                   # Minimalist footer with quick links
│   ├── MathToAIVisual.tsx           # Quantitative continuum visual
│   ├── Navbar.tsx                   # Sticky glass navbar with scroll spy & mobile drawer
│   ├── ProjectCard.tsx              # Technical project card with problem/solution specs
│   ├── SectionHeading.tsx           # Unified section title header
│   ├── SignatureWorkflow.tsx        # Interactive Agentic Flow diagram
│   └── TimelineItem.tsx             # Refined experience timeline card
├── data/
│   └── portfolioData.ts             # Central source of truth for all content & links
├── lib/
│   └── utils.ts                     # Utility helpers
├── public/
│   └── resume.pdf                   # Production resume PDF
├── .env.example                     # Environment variables template
├── tailwind.config.ts               # Tailwind dark theme configuration
├── tsconfig.json                    # TypeScript configuration
└── package.json                     # Project scripts and dependencies
```

---

## 💻 Local Development Setup

### Prerequisites
- Node.js 18.18+ or 20.x
- npm 9.x+

### 1. Clone or Open the Repository
```bash
cd Portfolio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Setup Environment Variables
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

Edit `.env.local` to include your configuration:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
CONTACT_EMAIL=venkateswar8703@gmail.com
RESEND_API_KEY=re_your_resend_api_key_here # Optional: Leave blank to use contact fallback
```

### 4. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔨 Available Commands

| Command | Description |
| :--- | :--- |
| `npm run dev` | Start local development server on port 3000 |
| `npm run build` | Compile and build production-ready bundle |
| `npm run start` | Start production server locally |
| `npm run lint` | Run Next.js and ESLint code checks |

---

## 📤 Pushing to GitHub

### 1. Initialize Git (if not already done)
```bash
git init
git add .
git commit -m "feat: initial production-ready AI Engineer portfolio"
```

### 2. Link Remote Repository and Push
```bash
# Create a new repository on GitHub (e.g. 'portfolio')
git remote add origin https://github.com/venkateswar8703/portfolio.git
git branch -M main
git push -u origin main
```

---

## ☁️ Deploying to Vercel

### Option 1: Vercel Web Dashboard (Recommended)
1. Navigate to [Vercel](https://vercel.com) and click **"Add New Project"**.
2. Import your GitHub repository (`portfolio`).
3. In the **Environment Variables** section, add:
   - `NEXT_PUBLIC_SITE_URL`: `https://your-custom-domain.com` or `https://bapuram-venkateswar.vercel.app`
   - `CONTACT_EMAIL`: `venkateswar8703@gmail.com`
   - `RESEND_API_KEY`: *(Optional: your Resend API key from [resend.com](https://resend.com))*
4. Click **Deploy**. Vercel will automatically build and publish your site with edge CDN, automatic HTTPS, and fast global routing.

### Option 2: Vercel CLI
```bash
npm i -g vercel
vercel
```

---

## 🌐 Custom Domain Setup

1. In the Vercel Dashboard, go to your project **Settings ➔ Domains**.
2. Add your custom domain (e.g., `venkateswar.dev` or `bapuramvenkateswar.com`).
3. Add the displayed `A` or `CNAME` records in your DNS provider (Cloudflare, GoDaddy, Namecheap).
4. Update `NEXT_PUBLIC_SITE_URL` in your Vercel Environment Variables to your custom domain.

---

## ✏️ Values & Links to Replace / Customize

All personal information, experiences, projects, skills, and links are cleanly isolated in a single file:
👉 **[`data/portfolioData.ts`](data/portfolioData.ts)**

When ready, update the following placeholders in `data/portfolioData.ts`:
1. **GitHub URLs**: Update repository URLs in `PROJECTS` array if your repo names differ.
2. **Live Demo URLs**: Add live application links in `PROJECTS` array once deployed.
3. **LinkedIn & Socials**: Verify your LinkedIn username in `PERSONAL_INFO.socials`.
4. **Resume File**: Replace [`public/resume.pdf`](public/resume.pdf) with your latest PDF resume.

---

## 📄 License
MIT License © 2026 Bapuram Venkateswar Reddy
