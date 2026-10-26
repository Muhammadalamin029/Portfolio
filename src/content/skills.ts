export type SkillGroup = {
  group: string;
  items: string[];
  evidence: string;
};

export const skillGroups: SkillGroup[] = [
  {
    group: "Interfaces",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "React Native",
      "Expo",
    ],
    evidence: "Bevis · LEL Store · Oron",
  },
  {
    group: "APIs and data",
    items: [
      "Python",
      "FastAPI",
      "SQLAlchemy",
      "PostgreSQL",
      "REST APIs",
      "GraphQL / Apollo",
    ],
    evidence: "Labtraca · Bevis · LEL Store · Oron",
  },
  {
    group: "Services",
    items: [
      "Supabase",
      "Firebase",
      "Authentication",
      "Payments",
      "Third-party APIs",
    ],
    evidence: "DevAssist · LEL Store · Oron",
  },
  {
    group: "State and delivery",
    items: [
      "Zustand",
      "React Query",
      "Git and GitHub",
      "Vercel",
      "API testing",
      "Responsive development",
      "Deployment",
    ],
    evidence: "Across projects",
  },
];
