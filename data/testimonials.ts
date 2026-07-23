export const testimonials = [
  {
    id: "t1",
    name: "John Doe",
    role: "Senior Engineering Manager",
    company: "Tech Corp",
    content: "An exceptional engineer with a rare blend of deep AI knowledge and full-stack capabilities. Consistently delivered high-quality, production-ready systems.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
  },
  {
    id: "t2",
    name: "Jane Smith",
    role: "Lead AI Researcher",
    company: "AI Innovations",
    content: "Their ability to translate complex research papers into scalable applications is remarkable. A proactive problem solver and a great team player.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jane",
  },
  {
    id: "t3",
    name: "Alex Johnson",
    role: "Product Manager",
    company: "NextGen Startups",
    content: "Brought immense value to our product with their intuitive understanding of user experience combined with robust machine learning models.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
  },
];

export type Testimonial = (typeof testimonials)[0];
