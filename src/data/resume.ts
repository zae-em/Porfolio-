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
      title: "RAG PDF Q&A System",
      subtitle: "LLM-Powered Document Intelligence",
      description:
        "Designed an end-to-end RAG pipeline: PDF ingestion → semantic chunking → FAISS vector search → Gemini LLM answer synthesis. Tuned chunk size and overlap parameters to improve retrieval precision with modular architecture.",
      tech: ["Python", "LangChain", "Gemini LLM", "FAISS", "PyMuPDF"],
      github: "https://github.com/zae-em",
      highlights: ["End-to-End RAG Pipeline", "FAISS Vector Search", "Gemini LLM"],
      category: "AI / ML",
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
    "Languages": ["C++", "C", "Python", "Java", "JavaScript", "CUDA"],
    "Web & Frameworks": ["HTML", "CSS", "Django", "Next.js", "React"],
    "AI / ML": ["LangChain", "RAG", "FAISS", "OpenCV", "NumPy", "Pandas", "PyTorch", "Scikit-learn"],
    "HPC & Systems": ["CUDA", "GPU Profiling", "Parallel Computing", "gprof"],
    "Databases": ["MySQL", "SQLite"],
    "Tools & Platforms": ["Git", "GitHub", "JavaFX", "SFML", "JDBC"],
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
