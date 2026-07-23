export const education = [
  {
    id: "btech-it",
    degree: "B.Tech in Information Technology",
    institution: "Jawaharlal Nehru Technological University-Gurajada, Vizianagaram (JNTU-GV)",
    duration: "2023 - 2027",
    location: "India",
    description: "Specializing in Computer Science and Information Technology with a focus on Artificial Intelligence and Machine Learning.",
    achievements: [
      "Relevant Coursework: Data Structures, Algorithms, Machine Learning, Deep Learning",
      "Participated in multiple hackathons and coding competitions",
      "Led technical workshops on AI and Web Development",
    ],
    icon: "🎓",
    color: "from-indigo-500 to-purple-600",
  },
];

export type Education = (typeof education)[0];
