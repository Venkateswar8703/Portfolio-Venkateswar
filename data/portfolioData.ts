export interface Project {
  id: string;
  title: string;
  category: "Agentic AI" | "RAG" | "Full-Stack AI" | "Computer Vision";
  tagline: string;
  problem: string;
  description: string;
  technologies: string[];
  capabilities: string[];
  githubUrl: string;
  demoUrl?: string;
  featured: boolean;
}

export interface Experience {
  company: string;
  legalEntity?: string;
  role: string;
  period: string;
  location: string;
  type: string;
  achievements: string[];
  technologies: string[];
  metrics: { label: string; value: string }[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
  icon: string;
}

export interface Achievement {
  title: string;
  subtitle: string;
  issuer: string;
  year: string;
  description: string;
  badge?: string;
}

export interface Leadership {
  role: string;
  organization: string;
  institution: string;
  period: string;
  description: string;
}

export const PERSONAL_INFO = {
  name: "Bapuram Venkateswar Reddy",
  shortName: "Venkateswar",
  title: "AI Engineer — Generative AI, RAG & Agentic Systems",
  headline: "Building intelligent systems from models to production.",
  supportingText:
    "AI Engineer focused on Generative AI, RAG pipelines, agentic workflows, multimodal AI, and scalable backend systems.",
  aboutText:
    "I am an AI Engineer with a mathematics background from NIT Warangal. I build production-oriented Generative AI applications that transform text, documents, speech, images, and video into useful intelligent workflows. My work spans RAG, vector search, LLM orchestration, agentic systems, multimodal processing, APIs, and deployment.",
  location: "Warangal, Telangana, India",
  email: "venkateswar8703@gmail.com",
  resumePath: "/resume.pdf",
  socials: {
    github: "https://github.com/Venkateswar8703",
    linkedin: "https://www.linkedin.com/in/bapuram-venkateswar-reddy-915420228/",
    deepml: "https://deepml.com",
    email: "mailto:venkateswar8703@gmail.com",
  },
  heroTechTags: [
    "Python",
    "LLMs",
    "RAG",
    "LangGraph",
    "FastAPI",
    "AWS Bedrock",
  ],
  aboutHighlights: [
    {
      title: "NIT Warangal Mathematics Graduate",
      description: "Rigorous quantitative foundations in linear algebra, optimization, probability, and algorithms.",
      icon: "GraduationCap",
    },
    {
      title: "Generative AI & RAG Systems",
      description: "High-precision vector retrieval, contextual chunking, FAISS/Chroma search, and grounded generation.",
      icon: "Cpu",
    },
    {
      title: "Agentic AI & Orchestration",
      description: "Stateful agent graphs with LangGraph, cyclic loops, tool calling, memory, and structured fallback.",
      icon: "Bot",
    },
    {
      title: "Full-Stack AI Development",
      description: "Scalable async APIs in FastAPI, containerized deployments with Docker, and CI/CD pipelines.",
      icon: "Layers",
    },
    {
      title: "Quantitative Research Background",
      description: "Experience formulating statistical alpha models with systematic validation and Sharpe ratios > 2.",
      icon: "TrendingUp",
    },
  ],
};

export const EXPERIENCES: Experience[] = [
  {
    company: "Devseccops AI",
    legalEntity: "Sec and DevOps AI Pvt. Ltd.",
    role: "Full-Stack AI Engineer Intern",
    period: "Jul 2026 - Present",
    location: "India",
    type: "Internship",
    achievements: [
      "Built enterprise Generative AI and RAG applications using Python, FastAPI, LangChain, LangGraph, FAISS, Chroma, Hugging Face embeddings, and AWS Bedrock.",
      "Reduced LLM inference costs by 35% through model optimization and efficient inference workflows.",
      "Designed agentic AI workflows with state, context, tools, and structured execution; reduced unnecessary LLM calls by 25%.",
      "Built multimodal pipelines for text, documents, speech, images, and video using Amazon Nova, Gemini, Whisper Large v3, Ray 2, and FFmpeg.",
      "Achieved 2x higher media-processing throughput through parallelized workflows.",
      "Reduced manual media-processing effort by 50%.",
      "Improved automated video composition through smart transitions, reducing visible flickering by 40%.",
      "Developed deployable AI backend services using FastAPI, Docker, Amazon EC2, and Amazon S3.",
      "Contributed to forecasting workflows using XGBoost and Random Forest, achieving 15% lower forecasting error.",
    ],
    technologies: [
      "Python",
      "FastAPI",
      "LangChain",
      "LangGraph",
      "AWS Bedrock",
      "FAISS",
      "Chroma",
      "Whisper Large v3",
      "Ray 2",
      "FFmpeg",
      "Docker",
      "Amazon EC2",
      "Amazon S3",
      "XGBoost",
    ],
    metrics: [
      { label: "LLM Cost Reduction", value: "35%" },
      { label: "Unnecessary Calls Cut", value: "25%" },
      { label: "Media Throughput", value: "2x" },
      { label: "Manual Effort Cut", value: "50%" },
      { label: "Flicker Reduction", value: "40%" },
      { label: "Forecasting Error Cut", value: "15%" },
    ],
  },
  {
    company: "WorldQuant BRAIN",
    role: "Research Consultant",
    period: "May 2025 - Jun 2026",
    location: "Remote",
    type: "Part-time Remote",
    achievements: [
      "Designed and backtested 20+ quantitative alpha strategies across global equity datasets.",
      "Applied time-series analysis, statistical modeling, and systematic validation across market regimes.",
      "Achieved Sharpe ratios above 2 with rigorous drawdown and volatility controls.",
    ],
    technologies: [
      "Quantitative Modeling",
      "Time-Series Analysis",
      "Statistical Validation",
      "Alpha Backtesting",
      "Risk Modeling",
    ],
    metrics: [
      { label: "Alpha Strategies", value: "20+" },
      { label: "Sharpe Ratio", value: "> 2.0" },
      { label: "Validation Rigor", value: "Multi-Regime" },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "claim-processing-ai",
    title: "Multi-Agent Claim Processing AI System",
    category: "Agentic AI",
    tagline: "Agentic document intelligence platform for insurance claims",
    problem:
      "Unstructured insurance claim PDFs present complex heterogeneous formats, leading to slow manual review, error-prone data extraction, and costly downstream processing bottlenecks.",
    description:
      "Transforms unstructured insurance claim PDFs into structured information. Uses document classification, OCR extraction, validation, intelligent routing, and fallback handling. Designed as a modular multi-step agent workflow with a scalable FastAPI backend and Docker-based deployment.",
    technologies: ["LangGraph", "FastAPI", "OCR", "LLMs", "Docker", "Python", "Pydantic"],
    capabilities: [
      "Multi-step agent workflow with state and memory",
      "Intelligent document classification and OCR parsing",
      "Automated schema validation and confidence scoring",
      "Deterministic routing with human-in-the-loop fallback",
      "Production-ready FastAPI backend containerized with Docker",
    ],
    githubUrl: "https://github.com/Venkateswar8703/Claim-Processing-Pipeline-using-LangGraph-FastAPI-",
    demoUrl: "",
    featured: true,
  },
  {
    id: "financial-ai-assistant",
    title: "Financial AI Assistant (RAG)",
    category: "RAG",
    tagline: "Retrieval-Augmented Generation for complex financial documents",
    problem:
      "Financial reports (10-K filings, earnings calls, market updates) contain vast tables and nuanced disclosures that standard LLMs hallucinate on without strict semantic grounding.",
    description:
      "Makes unstructured financial information searchable and conversational. Implements document chunking, embeddings, vector indexing, semantic retrieval, and LLM response generation with strict citation grounding and sub-second latency.",
    technologies: ["RAG", "LangChain", "FAISS", "FastAPI", "Hugging Face", "Python", "Semantic Search"],
    capabilities: [
      "Domain-specific financial document chunking and preprocessing",
      "High-speed FAISS vector indexing with dense embeddings",
      "Source-grounded contextual response synthesis with citations",
      "Interactive conversational memory across multi-turn queries",
      "Optimized latency with async vector search endpoints",
    ],
    githubUrl: "https://github.com/Venkateswar8703/Financial-Document-Q-A-using-LLM-RAG",
    demoUrl: "",
    featured: true,
  },
  {
    id: "adgm-corporate-agent",
    title: "ADGM-Compliant Corporate Agent with Document Intelligence",
    category: "Agentic AI",
    tagline: "Regulatory-compliant corporate AI agent for document analysis",
    problem:
      "Cross-border corporate compliance requires parsing dense statutory filings, checking strict ADGM jurisdictional guidelines, and generating audit-ready compliance reports.",
    description:
      "An intelligent compliance copilot combining OCR document intelligence with LLM reasoning to evaluate corporate submissions against ADGM legal standards with traceable verification logs.",
    technologies: ["LangChain", "FastAPI", "Python", "Document Intelligence", "OCR", "Pydantic"],
    capabilities: [
      "Automated regulatory document parsing and entity extraction",
      "ADGM rule-based compliance cross-checking",
      "Audit trail generation with citation references",
      "RESTful API integration for corporate legal workflows",
    ],
    githubUrl: "https://github.com/Venkateswar8703/ADGM-Compliant-Corporate-Agent-with-Document-Intelligence",
    demoUrl: "",
    featured: true,
  },
  {
    id: "logistics-ai-tracker",
    title: "Logistics AI Tracker",
    category: "Full-Stack AI",
    tagline: "Full-stack logistics intelligence and operational insights application",
    problem:
      "Supply chain operators struggle to obtain quick, unified answers across fragmented tracking logs, multi-carrier shipment updates, and disparate relational event records.",
    description:
      "Supports shipment tracking and data-driven operational insight. Includes an LLM-powered assistant for contextual logistics queries, semantic search, embeddings, and RAG. Containerized and configured for automated builds and continuous delivery.",
    technologies: ["React", "FastAPI", "LangChain", "RAG", "Docker", "GitHub Actions", "Tailwind CSS"],
    capabilities: [
      "Unified shipment status visualization and telemetry search",
      "LLM copilot for natural language logistics queries",
      "Embedding-based semantic lookup across incident histories",
      "Full-stack automated CI/CD pipeline via GitHub Actions",
      "Production Docker containerization ready for cloud deployment",
    ],
    githubUrl: "https://github.com/Venkateswar8703/Logistics-AI-Tracker",
    demoUrl: "",
    featured: true,
  },
  {
    id: "anpr-system",
    title: "Automatic Number Plate Recognition System",
    category: "Computer Vision",
    tagline: "Computer vision pipeline for near-real-time plate recognition",
    problem:
      "Automatic license plate recognition in real-world surveillance must withstand varying angles, motion blur, nighttime lighting, and diverse font formats without excessive compute overhead.",
    description:
      "Combines object detection and OCR for automatic number-plate recognition. Uses 1,000+ annotated image frames and presents evaluation through detection and recognition metrics across diverse roadway test conditions.",
    technologies: ["YOLOv8", "OpenCV", "OCR", "PyTorch", "Python", "Computer Vision"],
    capabilities: [
      "Near-real-time vehicle & license plate localization with YOLOv8",
      "Trained and evaluated on 1,000+ annotated traffic frames",
      "Adaptive image pre-processing (deskew, thresholding, contrast normalization)",
      "Robust character segmentation and OCR text extraction",
      "Modular Python inference pipeline suitable for edge deployment",
    ],
    githubUrl: "https://github.com/Venkateswar8703/Automatic-Number-Plate-Recognition-Using-YOLOv8-and-Computer-Vision",
    demoUrl: "",
    featured: true,
  },
  {
    id: "crowd-detection-vision",
    title: "Crowd Detection & Counting System",
    category: "Computer Vision",
    tagline: "Real-time spatial density estimation & crowd counting with YOLOv8",
    problem:
      "Public safety and occupancy monitoring require accurate pedestrian counting in dense, occluded environments with low computational latency.",
    description:
      "Deep learning computer vision pipeline utilizing YOLOv8 and OpenCV for real-time person detection, spatial bounding-box tracking, and crowd density heat-mapping across CCTV video feeds.",
    technologies: ["YOLOv8", "OpenCV", "PyTorch", "Computer Vision", "Python"],
    capabilities: [
      "Real-time object detection and tracking in dense scenes",
      "Occlusion-tolerant spatial coordinate estimation",
      "Zone-based occupancy and density monitoring",
      "High-throughput frame ingestion and processing",
    ],
    githubUrl: "https://github.com/Venkateswar8703/Crowd-Detection-Counting-using-YOLOv8-and-OpenC",
    demoUrl: "",
    featured: true,
  },
  {
    id: "dockerforge-ai",
    title: "DockerForge: AI-Powered Dockerfile Generator",
    category: "Full-Stack AI",
    tagline: "Intelligent containerization copilot generating optimized Dockerfiles",
    problem:
      "Developers spend substantial time crafting multi-stage Dockerfiles and configuring correct runtime dependencies for polyglot applications.",
    description:
      "Automates containerization by analyzing repository structure, dependencies, and entrypoints to produce minimal, security-hardened, multi-stage Dockerfiles and compose setups.",
    technologies: ["Python", "LLMs", "FastAPI", "Docker", "Prompt Engineering"],
    capabilities: [
      "Automatic project runtime and dependency discovery",
      "Multi-stage Dockerfile generation for reduced image size",
      "Security scanning recommendations and caching optimization",
      "Interactive CLI and API interfaces",
    ],
    githubUrl: "https://github.com/Venkateswar8703/DockerForge-AI-Powered-Dockerfile-Generator-Assessment-Bapuram-Venkateswar-Reddy",
    demoUrl: "",
    featured: true,
  },
  {
    id: "video-to-text-multimodal",
    title: "Multimodal Video-to-Text Ingestion Pipeline",
    category: "Full-Stack AI",
    tagline: "Automated media transcription, timestamp indexing, and content synthesis",
    problem:
      "Long-form video content is unsearchable and cumbersome to index without automated, high-fidelity speech extraction and timestamp alignment.",
    description:
      "Processes video and audio streams via FFmpeg and Whisper Large v3, generating timestamped transcriptions, speaker diarization, and structured contextual summaries.",
    technologies: ["Whisper Large v3", "FFmpeg", "Python", "Multimodal AI", "FastAPI"],
    capabilities: [
      "Parallelized audio track extraction with FFmpeg",
      "High-accuracy transcription using Whisper Large v3",
      "Temporal timestamp alignment and subtitle generation",
      "Direct integration with downstream RAG and search pipelines",
    ],
    githubUrl: "https://github.com/Venkateswar8703/video-to-text",
    demoUrl: "",
    featured: true,
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming",
    skills: ["Python", "SQL", "JavaScript", "C++"],
    icon: "Code2",
  },
  {
    title: "Generative AI & Agentic Systems",
    skills: [
      "LLMs",
      "RAG",
      "LangChain",
      "LangGraph",
      "Agentic Workflows",
      "Multi-Agent Orchestration",
      "Prompt Engineering",
      "Tool Calling",
      "Context & State Management",
    ],
    icon: "Bot",
  },
  {
    title: "Models & AI Platforms",
    skills: [
      "AWS Bedrock",
      "Amazon Nova",
      "Gemini",
      "Hugging Face",
      "Whisper Large v3",
      "OpenAI APIs",
      "Anthropic APIs",
      "Ray 2",
    ],
    icon: "Cpu",
  },
  {
    title: "Retrieval & Search",
    skills: [
      "FAISS",
      "Chroma",
      "Vector Databases",
      "Embeddings",
      "Semantic Search",
      "Hugging Face Embeddings",
    ],
    icon: "Search",
  },
  {
    title: "Backend & Cloud",
    skills: [
      "FastAPI",
      "Node.js",
      "REST APIs",
      "Async Processing",
      "Docker",
      "Amazon EC2",
      "Amazon S3",
      "GitHub Actions",
      "CI/CD",
      "Git",
      "Linux",
    ],
    icon: "Cloud",
  },
  {
    title: "Machine Learning",
    skills: [
      "Scikit-learn",
      "PyTorch",
      "XGBoost",
      "Random Forest",
      "Time-Series Forecasting",
      "Statistical Validation",
      "Model Evaluation",
    ],
    icon: "LineChart",
  },
  {
    title: "Multimodal & Media AI",
    skills: [
      "Speech-to-Text",
      "OCR",
      "Video Processing",
      "FFmpeg",
      "Text-to-Video",
      "Video Generation",
      "Structured & Unstructured Data",
    ],
    icon: "FileVideo",
  },
];

export const EDUCATION = {
  institution: "National Institute of Technology Warangal",
  degree: "Integrated M.Sc. (B.S. + M.S.) in Mathematics",
  period: "2021 - 2026",
  location: "Warangal, India",
  description:
    "Comprehensive mathematical training coupled with applied computational science, covering rigorous theoretical principles, statistical inference, machine learning, and discrete optimization.",
  coursework: [
    "Machine Learning",
    "Artificial Intelligence",
    "Data Science",
    "Probability & Statistics",
    "Linear Algebra",
    "Optimization",
    "Graph Theory",
    "Algorithms & Data Structures",
  ],
  foundationSteps: [
    { title: "Mathematics", desc: "Linear Algebra, Vector Calculus, Optimization & Graph Theory" },
    { title: "Statistics", desc: "Probability Distributions, Hypothesis Testing & Time-Series" },
    { title: "Machine Learning", desc: "Supervised, Unsupervised, Neural Architectures & Metric Evaluation" },
    { title: "AI Engineering", desc: "Agentic Systems, RAG, Multimodal Pipelines, APIs & Cloud Deployment" },
  ],
};

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "International Quant Championship 2025",
    subtitle: "Ranked 156 Globally in Stage 1",
    issuer: "WorldQuant",
    year: "2025",
    description:
      "Achieved Global Rank 156 in Stage 1 out of thousands of quantitative researchers worldwide, developing systematic mathematical alpha models on global financial datasets.",
    badge: "Global Top 160",
  },
  {
    title: "Flipkart GRID 6.0",
    subtitle: "National Semi-Finalist",
    issuer: "Flipkart",
    year: "2024",
    description:
      "Advanced to the National Semi-Finals among 10,000+ top engineering teams across India in one of the country's premier engineering and technological hackathons.",
    badge: "Top 1% in India",
  },
  {
    title: "All India Inter-NIT Yoga Championship",
    subtitle: "Second Runner Up",
    issuer: "National Institutes of Technology",
    year: "2023",
    description:
      "Secured 3rd place nationally across all NITs, demonstrating disciplined physical training, mental focus, and team representation.",
    badge: "National Podium",
  },
];

export const LEADERSHIP: Leadership[] = [
  {
    role: "Additional Secretary",
    organization: "Mathematical Society",
    institution: "NIT Warangal",
    period: "2022 - 2025",
    description:
      "Spearheaded technical seminars, coding contests, and guest lectures; coordinated peer learning sessions in advanced mathematical and algorithmic concepts.",
  },
  {
    role: "Event Coordinator",
    organization: "SpringSpree (Annual Cultural Fest)",
    institution: "NIT Warangal",
    period: "2021 - 2025",
    description:
      "Managed logistics, team delegations, and event schedules for South India's largest cultural festival attracting 10,000+ attendees.",
  },
  {
    role: "Joint Secretary",
    organization: "National Service Scheme (NSS)",
    institution: "NIT Warangal",
    period: "2021 - 2023",
    description:
      "Organized social awareness drives, educational initiatives in nearby rural schools, and campus health camps.",
  },
  {
    role: "Class Representative",
    organization: "Student Council",
    institution: "NIT Warangal",
    period: "2021 - 2022",
    description:
      "Liaised between faculty and the student cohort, facilitating academic scheduling and addressing curriculum feedback.",
  },
];

export const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];
