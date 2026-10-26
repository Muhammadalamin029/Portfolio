function resolveSiteUrl() {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "");
  if (configured) return configured;

  const productionUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (productionUrl) return `https://${productionUrl}`;

  const deploymentUrl = process.env.VERCEL_URL;
  if (deploymentUrl) return `https://${deploymentUrl}`;

  return "http://localhost:3000";
}

export const site = {
  name: "Ameenu Musa",
  role: "Full-Stack Developer",
  location: "Nigeria",
  email: "mmuhammadalameen9@gmail.com",
  title: "Ameenu Musa — Full-Stack Developer",
  description:
    "Full-stack developer in Nigeria building SaaS, commerce, and marketplace products with React, Next.js, Python, and PostgreSQL.",
  url: resolveSiteUrl(),
  links: {
    github: "https://github.com/Muhammadalamin029",
    linkedin: "https://www.linkedin.com/in/ameenumhusah/",
    x: "https://x.com/Muhammad286262",
  },
} as const;

export const navigation = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
] as const;
