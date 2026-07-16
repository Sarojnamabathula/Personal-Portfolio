export const projects = [
  {
    id: "researchai",
    title: "ResearchAI",
    tagline: "AI-Powered Research Assistant",
    description:
      "An intelligent research assistant that uses RAG (Retrieval-Augmented Generation) pipelines to extract, summarize, and synthesize information from academic papers and documents. Enables researchers to query large document collections in natural language.",
    problem:
      "Researchers spend 70% of their time reading papers rather than doing actual research. Finding relevant information across hundreds of documents is tedious and error-prone.",
    solution:
      "Built a RAG pipeline that chunks, embeds, and indexes documents, then uses LLMs to answer natural language queries with cited sources — reducing research time dramatically.",
    category: "AI / NLP",
    tags: ["RAG", "LLM", "NLP", "Python", "FastAPI"],
    tech: ["Python", "FastAPI", "LangChain", "OpenAI", "FAISS", "React", "TypeScript"],
    status: "Completed",
    github: "https://github.com/Sarojnamabathula/ResearchAI.git",
    demo: null,
    featured: true,
    gradient: "from-violet-500 to-purple-600",
    icon: "🔬",
    highlights: [
      "Multi-document RAG pipeline",
      "Semantic search with FAISS",
      "Source-cited responses",
      "React-based chat interface",
    ],
  },
  {
    id: "resume-parser",
    title: "Resume Parser",
    tagline: "AI Resume Intelligence Engine",
    description:
      "An intelligent resume parsing system that extracts structured information from resumes using NLP and machine learning. Automatically identifies skills, experience, education, and contact details from unstructured PDF/DOCX files.",
    problem:
      "HR teams manually screen hundreds of resumes, spending hours extracting information that should be automated.",
    solution:
      "Built an NLP pipeline using spaCy and custom ML models to extract structured data from resumes at scale, with 90%+ extraction accuracy.",
    category: "NLP / ML",
    tags: ["NLP", "spaCy", "Python", "ML"],
    tech: ["Python", "spaCy", "scikit-learn", "FastAPI", "PyMuPDF", "React"],
    status: "Completed",
    github: "https://github.com/Sarojnamabathula/ResumeAi.git",
    demo: null,
    featured: true,
    gradient: "from-blue-500 to-cyan-500",
    icon: "📄",
    highlights: [
      "PDF/DOCX parsing",
      "Named entity recognition",
      "Skills taxonomy mapping",
      "REST API with FastAPI",
    ],
  },
  {
    id: "face-mask-detection",
    title: "Face Mask Detection",
    tagline: "Real-Time Safety Compliance System",
    description:
      "A real-time face mask detection system using deep learning and computer vision. Detects whether individuals are wearing masks properly in live video streams, suitable for public safety and workplace compliance.",
    problem:
      "Manual monitoring for mask compliance in public spaces is impractical at scale and prone to human error.",
    solution:
      "Trained a CNN model on a custom dataset with MobileNetV2 backbone, achieving 98%+ accuracy in real-time detection using OpenCV.",
    category: "Computer Vision",
    tags: ["Computer Vision", "Deep Learning", "OpenCV", "TensorFlow"],
    tech: ["Python", "TensorFlow", "Keras", "OpenCV", "MobileNetV2", "NumPy"],
    status: "Completed",
    github: "https://github.com/Sarojnamabathula",
    demo: null,
    featured: true,
    gradient: "from-green-500 to-emerald-600",
    icon: "😷",
    highlights: [
      "Real-time video stream processing",
      "98%+ detection accuracy",
      "MobileNetV2 backbone",
      "Multi-face simultaneous detection",
    ],
  },
  {
    id: "object-detection",
    title: "Object Detection System",
    tagline: "YOLO-Based Real-Time Detection",
    description:
      "A comprehensive object detection system using YOLO architecture for real-time identification and localization of objects in images and video streams. Supports custom class training for domain-specific applications.",
    problem:
      "Generic object detectors lack domain-specific accuracy for specialized industrial and safety applications.",
    solution:
      "Fine-tuned YOLOv8 on custom datasets achieving high mAP scores with real-time inference at 30+ FPS.",
    category: "Computer Vision",
    tags: ["YOLO", "Object Detection", "PyTorch", "Computer Vision"],
    tech: ["Python", "YOLOv8", "PyTorch", "OpenCV", "Ultralytics", "CUDA"],
    status: "Completed",
    github: "https://github.com/Sarojnamabathula",
    demo: null,
    featured: false,
    gradient: "from-orange-500 to-red-500",
    icon: "🎯",
    highlights: [
      "YOLOv8 architecture",
      "30+ FPS real-time inference",
      "Custom dataset training",
      "Multi-class detection",
    ],
  },
  {
    id: "vehicle-tracking",
    title: "Vehicle Tracking & Counting",
    tagline: "Intelligent Traffic Analysis System",
    description:
      "An automated vehicle tracking and counting system for traffic analysis. Uses YOLO for detection and DeepSORT for multi-object tracking to count and classify vehicles crossing defined zones in real-time video.",
    problem:
      "Manual traffic counting is expensive, slow, and inaccurate — limiting urban planning capabilities.",
    solution:
      "Combined YOLO detection with DeepSORT tracking and zone-based counting to create an accurate automated traffic monitoring pipeline.",
    category: "Computer Vision",
    tags: ["Tracking", "YOLO", "DeepSORT", "Traffic Analysis"],
    tech: ["Python", "YOLOv8", "DeepSORT", "OpenCV", "PyTorch", "NumPy"],
    status: "Completed",
    github: "https://github.com/Sarojnamabathula",
    demo: null,
    featured: false,
    gradient: "from-yellow-500 to-orange-500",
    icon: "🚗",
    highlights: [
      "Multi-object tracking with DeepSORT",
      "Zone-based counting",
      "Vehicle classification",
      "Traffic density analysis",
    ],
  },
  {
    id: "decision-engine",
    title: "Decision Engine",
    tagline: "Rule-Based AI Decision Framework",
    description:
      "A configurable rule-based decision engine that evaluates complex business logic and generates actionable recommendations. Combines traditional rule systems with ML scoring for hybrid intelligent decision-making.",
    problem:
      "Complex business rules are often scattered across codebases, making them hard to maintain, audit, and update.",
    solution:
      "Built a centralized decision engine with a visual rule editor, audit trail, and ML model integration for scoring uncertain cases.",
    category: "AI Systems",
    tags: ["Decision Engine", "Rules Engine", "Python", "AI"],
    tech: ["Python", "FastAPI", "React", "TypeScript", "MongoDB", "scikit-learn"],
    status: "Completed",
    github: "https://github.com/Sarojnamabathula",
    demo: null,
    featured: false,
    gradient: "from-indigo-500 to-blue-600",
    icon: "⚙️",
    highlights: [
      "Rule configuration interface",
      "ML model integration",
      "Audit trail logging",
      "REST API",
    ],
  },
  {
    id: "suspicious-activity",
    title: "Suspicious Activity Detector",
    tagline: "Rule-Based Safety Monitoring",
    description:
      "A rule-based suspicious activity detection system for surveillance video analysis. Identifies predefined suspicious behaviors (loitering, perimeter breach, abandoned objects) using pose estimation and motion analysis.",
    problem:
      "Security teams cannot monitor all camera feeds simultaneously, leading to missed security events.",
    solution:
      "Developed a rule engine layered over computer vision models to automatically flag suspicious behaviors in real-time with configurable alert thresholds.",
    category: "Computer Vision",
    tags: ["Safety", "Surveillance", "Computer Vision", "Rules Engine"],
    tech: ["Python", "OpenCV", "MediaPipe", "PyTorch", "YOLO", "NumPy"],
    status: "Completed",
    github: "https://github.com/Sarojnamabathula",
    demo: null,
    featured: false,
    gradient: "from-red-500 to-pink-600",
    icon: "🔒",
    highlights: [
      "Pose estimation integration",
      "Configurable rule thresholds",
      "Multi-camera support",
      "Real-time alerting",
    ],
  },
  {
    id: "carcrate",
    title: "CarCrate",
    tagline: "Full-Stack Automotive Platform",
    description:
      "A full-stack automotive marketplace and management platform. Features vehicle listing, search with filters, comparison tools, user authentication, and an AI-powered recommendation engine for vehicle suggestions.",
    problem:
      "Existing car marketplace platforms lack intelligent recommendation and comparison features that help buyers make informed decisions.",
    solution:
      "Built a full-stack platform with React frontend, Node.js backend, MongoDB database, and an ML recommendation engine based on user preferences.",
    category: "Full-Stack",
    tags: ["Full-Stack", "React", "Node.js", "MongoDB", "AI"],
    tech: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS"],
    status: "In Progress",
    github: "https://github.com/Sarojnamabathula",
    demo: null,
    featured: true,
    gradient: "from-cyan-500 to-blue-500",
    icon: "🚘",
    highlights: [
      "AI vehicle recommendations",
      "Full-stack MERN architecture",
      "JWT authentication",
      "Advanced search & filters",
    ],
  },
];

export type Project = (typeof projects)[0];
