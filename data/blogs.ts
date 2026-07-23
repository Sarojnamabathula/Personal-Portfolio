export const blogs = [
  {
    id: "blog-1",
    title: "Building Production-Ready RAG Pipelines",
    excerpt: "A comprehensive guide to architecting Retrieval-Augmented Generation systems that scale, focusing on embedding strategies and vector database optimization.",
    date: "May 15, 2026",
    readTime: "8 min read",
    category: "AI & ML",
    url: "#",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "blog-2",
    title: "The Evolution of Agentic AI",
    excerpt: "Exploring how autonomous AI agents are moving beyond simple chat interfaces to execute complex, multi-step workflows in real-world environments.",
    date: "April 02, 2026",
    readTime: "6 min read",
    category: "Research",
    url: "#",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "blog-3",
    title: "Optimizing YOLO for Real-Time Inference",
    excerpt: "Techniques for deploying computer vision models on edge devices, achieving 30+ FPS without significantly compromising detection accuracy.",
    date: "March 18, 2026",
    readTime: "10 min read",
    category: "Computer Vision",
    url: "#",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee57d5?auto=format&fit=crop&q=80&w=800",
  },
];

export type Blog = (typeof blogs)[0];
