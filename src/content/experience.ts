export type Experience = {
  role: string;
  organisation: string;
  period: string;
  description: string;
  kind: "Employment" | "Internship" | "Independent";
};

export const experience: Experience[] = [
  {
    role: "Frontend Developer",
    organisation: "Labtraca",
    period: "Until Oct 2026",
    description:
      "Built frontend interfaces for laboratory workflows, integrated GraphQL APIs with Apollo, and implemented PDF generation for lab results.",
    kind: "Employment",
  },
  {
    role: "Frontend Developer Intern",
    organisation: "SyncU",
    period: "Dec 2024 — Feb 2025",
    description:
      "Built frontend components and integrated Supabase-backed data flows.",
    kind: "Internship",
  },
  {
    role: "Independent product and client work",
    organisation: "Self-directed",
    period: "Ongoing",
    description:
      "Designed and built Bevis, Oron, and DevAssist; contributed to the LEL Store platform for a client.",
    kind: "Independent",
  },
];

export const education = [
  {
    qualification: "BSc Computer Science",
    institution: "Federal University of Technology, Minna",
    period: "In progress",
  },
  {
    qualification: "WAEC",
    institution: "Thaqafatul Islamiyyah School",
    period: "2024",
  },
];
