import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

async function createResume() {
  const pdfDoc = await PDFDocument.create();
  
  // Standard fonts
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

  const primaryColor = rgb(0.08, 0.18, 0.36); // Deep Navy
  const textColor = rgb(0.15, 0.15, 0.15);    // Dark Charcoal
  const subTextColor = rgb(0.35, 0.35, 0.35); // Gray
  const accentColor = rgb(0.12, 0.45, 0.85);  // Electric Blue Accent
  const dividerColor = rgb(0.8, 0.82, 0.86);  // Light Border

  const marginX = 40;
  const pageWidth = 612;
  const pageHeight = 792;
  const contentWidth = pageWidth - 2 * marginX;

  let page = pdfDoc.addPage([pageWidth, pageHeight]);
  let y = pageHeight - 36;

  function checkPageBreak(neededHeight) {
    if (y - neededHeight < 36) {
      page = pdfDoc.addPage([pageWidth, pageHeight]);
      y = pageHeight - 40;
    }
  }

  function drawSectionHeader(title) {
    checkPageBreak(30);
    y -= 10;
    page.drawText(title.toUpperCase(), {
      x: marginX,
      y: y,
      size: 10.5,
      font: fontBold,
      color: primaryColor,
    });
    y -= 3;
    page.drawLine({
      start: { x: marginX, y: y },
      end: { x: marginX + contentWidth, y: y },
      thickness: 1,
      color: accentColor,
    });
    y -= 11;
  }

  // --- HEADER ---
  page.drawText("BAPURAM VENKATESWAR REDDY", {
    x: marginX,
    y: y,
    size: 17,
    font: fontBold,
    color: primaryColor,
  });
  y -= 14;

  page.drawText("AI Engineer — Generative AI, RAG & Agentic Systems", {
    x: marginX,
    y: y,
    size: 10.5,
    font: fontBold,
    color: accentColor,
  });
  y -= 13;

  const contactLine = "Email: venkateswar8703@gmail.com | Location: Warangal, Telangana, India";
  page.drawText(contactLine, {
    x: marginX,
    y: y,
    size: 8.5,
    font: fontRegular,
    color: subTextColor,
  });
  y -= 11;

  const linksLine = "LinkedIn: linkedin.com/in/bapuram-venkateswar-reddy-915420228 | GitHub: github.com/Venkateswar8703";
  page.drawText(linksLine, {
    x: marginX,
    y: y,
    size: 8.5,
    font: fontRegular,
    color: subTextColor,
  });
  y -= 6;

  // --- EDUCATION ---
  drawSectionHeader("Education");

  page.drawText("National Institute of Technology Warangal (NIT Warangal)", {
    x: marginX,
    y: y,
    size: 10,
    font: fontBold,
    color: textColor,
  });
  page.drawText("Warangal, India", {
    x: marginX + contentWidth - 75,
    y: y,
    size: 8.5,
    font: fontRegular,
    color: subTextColor,
  });
  y -= 11;

  page.drawText("Integrated M.Sc. (B.S. + M.S.) in Mathematics", {
    x: marginX,
    y: y,
    size: 9,
    font: fontOblique,
    color: textColor,
  });
  page.drawText("2021 – 2026", {
    x: marginX + contentWidth - 55,
    y: y,
    size: 8.5,
    font: fontBold,
    color: subTextColor,
  });
  y -= 10;

  const coursework = "Relevant Coursework: Machine Learning, Artificial Intelligence, Data Science, Probability & Statistics, Linear Algebra, Optimization Theory, Graph Theory, Algorithms & Data Structures.";
  page.drawText(coursework, {
    x: marginX,
    y: y,
    size: 8,
    font: fontRegular,
    color: subTextColor,
  });
  y -= 4;

  // --- EXPERIENCE ---
  drawSectionHeader("Experience");

  // Devseccops AI
  page.drawText("Devseccops AI (Sec and DevOps AI Pvt. Ltd.)", {
    x: marginX,
    y: y,
    size: 10,
    font: fontBold,
    color: textColor,
  });
  page.drawText("Jul 2026 – Present", {
    x: marginX + contentWidth - 85,
    y: y,
    size: 8.5,
    font: fontBold,
    color: subTextColor,
  });
  y -= 11;

  page.drawText("Full-Stack AI Engineer Intern", {
    x: marginX,
    y: y,
    size: 9,
    font: fontOblique,
    color: accentColor,
  });
  y -= 10;

  const expBullets1 = [
    "Built enterprise Generative AI and RAG applications using Python, FastAPI, LangChain, LangGraph, FAISS, Chroma, and AWS Bedrock.",
    "Reduced LLM inference costs by 35% through model optimization, token minimization, and prompt caching strategies.",
    "Designed agentic AI workflows with state, context, tools, and structured execution; reduced unnecessary LLM calls by 25%.",
    "Built multimodal pipelines for text, documents, speech, images, and video using Amazon Nova, Gemini, Whisper Large v3, Ray 2, and FFmpeg.",
    "Achieved 2x higher media-processing throughput through parallelized worker queues and async execution pipelines.",
    "Reduced manual media-processing effort by 50% and automated video composition transitions, reducing visible flickering by 40%.",
    "Developed deployable AI backend services containerized with Docker and deployed on Amazon EC2 and Amazon S3.",
    "Contributed to quantitative forecasting workflows using XGBoost and Random Forest, achieving 15% lower forecasting error."
  ];

  for (const bullet of expBullets1) {
    checkPageBreak(12);
    page.drawText("•", { x: marginX + 4, y: y, size: 8, font: fontBold, color: accentColor });
    page.drawText(bullet, {
      x: marginX + 14,
      y: y,
      size: 8,
      font: fontRegular,
      color: textColor,
    });
    y -= 10;
  }
  y -= 3;

  // WorldQuant BRAIN
  checkPageBreak(40);
  page.drawText("WorldQuant BRAIN", {
    x: marginX,
    y: y,
    size: 10,
    font: fontBold,
    color: textColor,
  });
  page.drawText("May 2025 – Jun 2026", {
    x: marginX + contentWidth - 95,
    y: y,
    size: 8.5,
    font: fontBold,
    color: subTextColor,
  });
  y -= 11;

  page.drawText("Research Consultant (Part-time Remote)", {
    x: marginX,
    y: y,
    size: 9,
    font: fontOblique,
    color: accentColor,
  });
  y -= 10;

  const expBullets2 = [
    "Designed and backtested 20+ quantitative alpha strategies across global equity datasets with multi-regime risk analysis.",
    "Applied time-series analysis, statistical validation, and drawdown limits, achieving Sharpe ratios consistently above 2.0."
  ];

  for (const bullet of expBullets2) {
    checkPageBreak(12);
    page.drawText("•", { x: marginX + 4, y: y, size: 8, font: fontBold, color: accentColor });
    page.drawText(bullet, {
      x: marginX + 14,
      y: y,
      size: 8,
      font: fontRegular,
      color: textColor,
    });
    y -= 10;
  }
  y -= 4;

  // --- FEATURED PROJECTS ---
  drawSectionHeader("Featured Projects");

  const projects = [
    {
      title: "Multi-Agent Claim Processing AI System",
      tech: "LangGraph, FastAPI, OCR, LLMs, Docker, Python",
      bullet: "Engineered an agentic document intelligence workflow transforming unstructured insurance claim PDFs into structured JSON with schema validation, intelligent routing, and automated fallback handling."
    },
    {
      title: "Financial AI Assistant (RAG)",
      tech: "RAG, LangChain, FAISS, FastAPI, Semantic Search",
      bullet: "Developed a sub-second retrieval-augmented generation platform for complex financial reports using dense vector indexing, contextual chunking, and source-grounded citation synthesis."
    },
    {
      title: "ADGM-Compliant Corporate Agent with Document Intelligence",
      tech: "LangChain, FastAPI, Python, Document Intelligence, OCR",
      bullet: "Built a regulatory compliance agent parsing statutory filings and evaluating legal submissions against ADGM guidelines with traceable audit logs."
    },
    {
      title: "Automatic Number Plate Recognition System",
      tech: "YOLOv8, OpenCV, OCR, PyTorch, Python",
      bullet: "Trained and benchmarked a near-real-time license plate detection and character extraction pipeline evaluated on 1,000+ annotated traffic frames across adverse lighting and angles."
    },
    {
      title: "Logistics AI Tracker",
      tech: "React, FastAPI, LangChain, RAG, Docker, GitHub Actions",
      bullet: "Created a full-stack supply chain tracking platform featuring a natural-language copilot for shipment incident queries with containerized CI/CD deployment."
    }
  ];

  for (const proj of projects) {
    checkPageBreak(24);
    page.drawText(proj.title, {
      x: marginX,
      y: y,
      size: 9,
      font: fontBold,
      color: textColor,
    });
    page.drawText(`[${proj.tech}]`, {
      x: marginX + fontBold.widthOfTextAtSize(proj.title, 9) + 6,
      y: y,
      size: 7.5,
      font: fontOblique,
      color: accentColor,
    });
    y -= 9;

    page.drawText("•", { x: marginX + 4, y: y, size: 8, font: fontBold, color: accentColor });
    page.drawText(proj.bullet, {
      x: marginX + 14,
      y: y,
      size: 8,
      font: fontRegular,
      color: textColor,
    });
    y -= 10;
  }
  y -= 4;

  // --- TECHNICAL SKILLS ---
  drawSectionHeader("Technical Skills");

  const skillGroups = [
    { cat: "Programming:", list: "Python, SQL, JavaScript, C++" },
    { cat: "Generative AI & Agents:", list: "LLMs, RAG, LangChain, LangGraph, Agentic Workflows, Multi-Agent Orchestration, Prompt Engineering, Tool Calling" },
    { cat: "Models & Platforms:", list: "AWS Bedrock, Amazon Nova, Gemini, Hugging Face, Whisper Large v3, OpenAI APIs, Anthropic APIs, Ray 2" },
    { cat: "Retrieval & Vector Search:", list: "FAISS, Chroma, Vector Databases, Dense Embeddings, Semantic Search, HF Embeddings" },
    { cat: "Backend & Cloud:", list: "FastAPI, Node.js, REST APIs, Async Processing, Docker, Amazon EC2, Amazon S3, GitHub Actions, CI/CD, Linux" },
    { cat: "Machine Learning:", list: "Scikit-learn, PyTorch, XGBoost, Random Forest, Time-Series Forecasting, Statistical Validation, Model Evaluation" },
    { cat: "Multimodal AI:", list: "Speech-to-Text, OCR, Video Processing, FFmpeg, Text-to-Video, Video Generation, Structured Data Parsing" }
  ];

  for (const sg of skillGroups) {
    checkPageBreak(12);
    page.drawText(sg.cat, {
      x: marginX,
      y: y,
      size: 8,
      font: fontBold,
      color: textColor,
    });
    page.drawText(sg.list, {
      x: marginX + fontBold.widthOfTextAtSize(sg.cat, 8) + 5,
      y: y,
      size: 8,
      font: fontRegular,
      color: subTextColor,
    });
    y -= 10;
  }
  y -= 4;

  // --- HONORS & LEADERSHIP ---
  drawSectionHeader("Honors & Leadership");

  const honors = [
    "International Quant Championship 2025: Global Rank 156 in Stage 1, conducted by WorldQuant.",
    "Flipkart GRID 6.0: National Semi-Finalist (Top 1% selected among 10,000+ engineering teams in India).",
    "All India Inter-NIT Yoga Championship: Second Runner Up (National Podium across all NITs).",
    "Additional Secretary, Mathematical Society, NIT Warangal (2022 – 2025).",
    "Event Coordinator, SpringSpree Cultural Festival, NIT Warangal (2021 – 2025)."
  ];

  for (const honor of honors) {
    checkPageBreak(12);
    page.drawText("•", { x: marginX + 4, y: y, size: 8, font: fontBold, color: accentColor });
    page.drawText(honor, {
      x: marginX + 14,
      y: y,
      size: 8,
      font: fontRegular,
      color: textColor,
    });
    y -= 10;
  }

  const pdfBytes = await pdfDoc.save();
  const outputPath = path.resolve('public/resume.pdf');
  fs.writeFileSync(outputPath, pdfBytes);
  console.log(`Resume PDF generated successfully at ${outputPath} (${pdfBytes.length} bytes)`);
}

createResume().catch(console.error);
