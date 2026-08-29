export const resumeData = {
  name: "Muhammad Zaeem",
  title: "Full-Stack Developer & AI/ML Engineer",
  email: "zaeem5174@gmail.com",
  phone: "0303-4411515",
  location: "Islamabad, Pakistan",
  linkedin: "https://linkedin.com",
  github: "https://github.com/zae-em",
  summary:
    "Computer Science undergraduate at NUCES Islamabad specialising in full-stack development and AI/ML engineering, with a track record of shipping complete systems — from low-level version control engines in C++ to production-style LLM pipelines in Python and GPU-accelerated computer vision in CUDA. Holds Andrew Ng's Machine Learning Specialisation and applies supervised learning, computer vision and retrieval-augmented generation in self-directed projects.",

  education: [
    {
      institution: "National University of Computer & Emerging Sciences (NUCES)",
      degree: "Bachelor of Science in Computer Science",
      location: "Islamabad, Pakistan",
      period: "Aug 2023 – Present",
      gpa: "3.24 / 4.00",
      coursework: [
        "DSA",
        "OOP",
        "Database Systems",
        "AI",
        "Computer Networks",
        "High Performance Computing",
      ],
    },
  ],

  experience: [
    {
      role: "Teaching Assistant — Object-Oriented Programming",
      company: "NUCES, Islamabad",
      period: "Spring 2025",
      bullets: [
        "Led lab sessions for 40+ undergraduate students, breaking down OOP fundamentals — inheritance, polymorphism, encapsulation and design patterns — through live coding walkthroughs.",
        "Evaluated assignments with written technical feedback and ran weekly office hours, directly resolving student debugging errors in Java-based coursework.",
      ],
    },
  ],

  projects: [
    {
      title: "Enterprise Knowledge Retrieval System",
      subtitle: "Production Hybrid Search & Cross-Encoder Reranking Pipeline",
      description:
        "Engineered an end-to-end Enterprise Knowledge Retrieval System resolving cross-format data fragmentation across PDFs, CSVs, TXT files, and web URLs. Built an advanced retrieval pipeline featuring Recursive Text Splitter chunking and Sentence Transformers embeddings, combining Qdrant vector similarity with BM25 keyword retrieval fused via Reciprocal Rank Fusion (RRF). Integrated Cross-Encoder reranking using custom score fusion (Final Score = 0.65 × Cross-Encoder + 0.35 × RRF) and Groq LLM for low-latency structured answer synthesis. Rigorously evaluated retrieval performance using Recall@K, MRR, and RAGAS Context Precision/Recall.",
      tech: ["Python", "Qdrant", "BM25", "Sentence-Transformers", "Cross-Encoder", "Reciprocal Rank Fusion (RRF)", "Groq LLM", "RAGAS", "FastAPI", "Recursive Text Splitter"],
      github: "https://github.com/zae-em",
      highlights: ["Hybrid Qdrant + BM25 Search", "0.65 Cross-Encoder + 0.35 RRF Scoring", "Groq LLM Structured Synthesis", "Recall@K, MRR & RAGAS Evaluated"],
      category: "AI / ML",
    },
    {
      title: "ChestSight AI",
      subtitle: "Production Medical Imaging & Explainable AI (XAI) Platform",
      description:
        "Architected an end-to-end medical diagnostic platform featuring a multi-model factory (EfficientNet-B3, DenseNet121, ResNet50, ViT-B/16) trained on Chest X-ray datasets with ONNX runtime optimization and Grad-CAM / ViT token-reshaped XAI heatmaps. Built on Python 3.12 & FastAPI using Clean Architecture with async SQLAlchemy 2.0, PostgreSQL, Redis caching, Argon2 + JWT RBAC, and automated ReportLab PDF diagnostic reporting. Delivered with a React 19/TypeScript dashboard, Docker Compose multi-container deployment, Nginx edge proxy, and automated GitHub Actions CI/CD.",
      tech: ["PyTorch", "Vision Transformers (ViT)", "Grad-CAM (XAI)", "FastAPI", "Python 3.12", "React 19", "TypeScript", "PostgreSQL", "Redis", "Docker Compose", "ONNX", "Nginx", "GitHub Actions"],
      github: "https://github.com/zae-em",
      highlights: ["Multi-Model Factory (ViT, CNNs) & Grad-CAM XAI", "Clean Architecture & Async SQLAlchemy 2.0", "React 19 Interactive Heatmap Viewer", "Full Docker Compose & CI/CD Pipeline"],
      category: "AI / ML",
    },
    {
      title: "Resume Screening & Ranking System",
      subtitle: "SaaS-Ready AI Candidate Filtering",
      description:
        "Developed a production-ready resume screening system using sentence-transformers (all-MiniLM-L6) for semantic candidate-to-job matching, reducing recruiter screening overhead by 70% across 500+ resumes. Engineered a skill extraction engine combining spaCy NER (Named Entity Recognition) and pattern-matching rules, identifying over 200+ specialized technical and soft skills from raw PDFs with high precision.",
      tech: ["Python", "sentence-transformers", "spaCy", "NER", "Natural Language Processing", "PDF Parsing"],
      github: "https://github.com/zae-em",
      highlights: ["70% Screening Cost Reduction", "200+ Skills Auto-Extracted", "Ready for SaaS Integration"],
      category: "AI / ML",
    },
    {
      title: "Real-Time Anomaly Detection System",
      subtitle: "Scalable MLOps Streaming Pipeline",
      description:
        "Architected a production-grade streaming pipeline using Apache Kafka and Isolation Forest for real-time anomaly detection with online learning. Integrated ADWIN/DDM concept drift detection to automatically retrain models on shifting live data distributions. Built a comprehensive MLOps observability suite with Prometheus, Grafana, and Docker Compose, presenting live traffic analytics via a custom Streamlit dashboard.",
      tech: ["Python", "Apache Kafka", "Isolation Forest", "Streamlit", "Docker Compose", "Prometheus", "Grafana", "MLOps"],
      github: "https://github.com/zae-em",
      highlights: ["Real-Time Kafka Streaming", "Automated Concept Drift Retraining", "Full Prometheus/Grafana Stack"],
      category: "AI / ML",
    },
    {
      title: "VisionOCR Multimodal",
      subtitle: "Cost-Optimized VLM for Document Understanding",
      description:
        "Designed a high-throughput multimodal document understanding pipeline using InternVL for concurrent text and tabular data extraction from complex layout business documents. Deployed the system with 4-bit model quantization, achieving a 2.1s per page inference speed and 80%+ reduction in VRAM hosting costs in a production environment.",
      tech: ["Python", "InternVL", "4-bit Quantization", "Vision-Language Models", "OCR", "Adaptive Chunking"],
      github: "https://github.com/zae-em",
      highlights: ["80% GPU Cost Reduction", "2.1s/Page Fast Inference", "Layout-Aware Table Extraction"],
      category: "AI / ML",
    },
    {
      title: "KLT Feature Tracker",
      subtitle: "GPU-Accelerated Computer Vision",
      description:
        "Profiled a CPU-based KLT feature tracker using gprof across 5 experiments, identifying that convolution and feature selection consumed up to 70% of total runtime. Integrated 3 CUDA kernels achieving an overall 10x–15x speedup over the CPU baseline.",
      tech: ["C", "CUDA", "gprof", "GPU Profiling", "Parallel Computing", "Shi-Tomasi"],
      github: "https://github.com/zae-em",
      highlights: ["10x–15x GPU Speedup", "3 CUDA Kernels", "5 Profiling Experiments"],
      category: "Systems / HPC",
    },
    {
      title: "GitLite",
      subtitle: "Simplified Version Control System",
      description:
        "Built a Git-inspired CLI supporting repository init, branching, checkout, merging and commit history with persistent storage. Implemented self-balancing trees (AVL, B-Tree, RB-Tree) for O(log n) lookups and integrated SHA-256 + Merkle Tree hashing.",
      tech: ["C++", "AVL Tree", "B-Tree", "Red-Black Tree", "SHA-256", "Merkle Tree", "CLI"],
      github: "https://github.com/zae-em",
      highlights: ["O(log n) Lookups", "SHA-256 + Merkle Hashing", "Full Branch Support"],
      category: "Systems",
    },
    {
      title: "Plants vs. Zombies Clone",
      subtitle: "2D Tower Defence Game",
      description:
        "Engineered a fully playable tower-defence game with real-time collision detection, wave-based enemy spawning and a live scoring system. Structured all entity types using factory pattern and polymorphism.",
      tech: ["C++", "SFML", "OOP", "Factory Pattern", "Game Loop Architecture"],
      github: "https://github.com/zae-em",
      highlights: ["Real-Time Collision Detection", "Wave-Based AI", "Factory Pattern"],
      category: "Game Dev",
    },
    {
      title: "AI Quiz Generator",
      subtitle: "Adaptive Learning System",
      description:
        "AI-based quiz generation system that leverages Linear Regression and K-Means clustering to analyze user performance patterns and generate adaptive quizzes tailored to individual knowledge gaps and learning velocity.",
      tech: ["Python", "Scikit-learn", "Linear Regression", "K-Means", "NumPy", "Pandas"],
      github: "https://github.com/zae-em",
      highlights: ["Adaptive Difficulty", "K-Means Clustering", "Performance Analytics"],
      category: "AI / ML",
    },
    {
      title: "Car Showroom Platform",
      subtitle: "Full-Stack Web Application",
      description:
        "Feature-rich car showroom platform where users can search, compare, and book cars. Includes advanced filtering, car comparison tool, booking system, authentication, wishlist, and admin dashboard for managing inventory and customer inquiries.",
      tech: ["Django", "Python", "JavaScript", "MySQL", "HTML", "CSS", "Authentication"],
      github: "https://github.com/zae-em",
      highlights: ["Admin Dashboard", "Booking System", "Advanced Filtering"],
      category: "Full-Stack",
    },
  ],

  skills: {
    "Languages": ["Python", "TypeScript", "JavaScript", "C++", "C", "Java", "CUDA", "SQL"],
    "Web & Frameworks": ["FastAPI", "React 19", "Next.js", "Tailwind CSS", "Vite", "Django", "Streamlit", "HTML", "CSS"],
    "AI / ML": ["PyTorch", "Vision Transformers (ViT)", "Grad-CAM (XAI)", "Hybrid RAG", "Qdrant", "BM25", "Cross-Encoder", "Sentence-Transformers", "Groq LLM", "RAGAS", "ONNX", "LangChain", "FAISS", "spaCy NER", "VLM (InternVL)", "Scikit-learn", "OpenCV"],
    "HPC & Systems": ["CUDA", "GPU Profiling", "Parallel Computing", "gprof"],
    "Databases": ["PostgreSQL", "Redis", "Qdrant", "SQLAlchemy / asyncpg", "MySQL", "SQLite"],
    "Tools & Platforms": ["Docker", "Docker Compose", "Nginx", "GitHub Actions CI/CD", "Git", "Alembic", "Apache Kafka", "Prometheus", "Grafana", "MLOps", "Linux"],
  },

  certifications: [
    {
      name: "Machine Learning Specialisation",
      issuer: "Andrew Ng, Coursera",
      year: "2024",
    },
    {
      name: "Computer Vision with OpenCV",
      issuer: "Online Course",
      year: "2024",
    },
  ],

  achievements: [
    {
      title: "2nd Place — NUCES University-Wide Programming Competition",
      description: "Top 2 finish among all CS students university-wide",
      year: "2024",
    },
  ],

  languages: [
    { name: "English", level: "Professional Working Proficiency" },
    { name: "Urdu", level: "Native / Advanced" },
  ],
};
