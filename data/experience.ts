export const experiences = [
  {
    id: "ibm-edunet",
    role: "AI & Cloud Intern",
    company: "IBM SkillsBuild",
    organization: "Edunet Foundation in collaboration with AICTE",
    type: "Internship",
    duration: "6 Weeks",
    period: "2024",
    location: "Remote, India",
    description:
      "Completed an intensive AI & Cloud internship program focused on IBM watsonx.ai, cloud computing fundamentals, and practical AI application development.",
    responsibilities: [
      "Developed AI solutions using IBM watsonx.ai platform including prompt engineering and model fine-tuning",
      "Built and deployed cloud-native applications on IBM Cloud infrastructure",
      "Explored Generative AI capabilities including text generation, summarization, and classification",
      "Completed hands-on labs in machine learning model deployment and AI workflow automation",
      "Collaborated with peers on AI use-case identification and solution design",
    ],
    achievements: [
      "Successfully completed all certification tracks in the IBM SkillsBuild program",
      "Built a capstone AI application using IBM watsonx.ai",
      "Earned multiple IBM digital badges and certificates",
    ],
    tech: ["IBM watsonx.ai", "Python", "IBM Cloud", "Generative AI", "Machine Learning"],
    logo: "🏢",
    color: "from-blue-600 to-blue-800",
  },
];

export type Experience = (typeof experiences)[0];
