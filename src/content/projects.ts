export type ProjectLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type Project = {
  slug: string;
  index: string;
  name: string;
  category: string;
  year: string;
  status: string;
  role: string;
  ownership: string;
  summary: string;
  problem: string;
  built: string[];
  notes: string[];
  stack: string[];
  links: ProjectLink[];
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "bevis",
    index: "01",
    name: "Bevis",
    category: "SaaS · Developer productivity",
    year: "2026",
    status: "Live",
    role: "Product, frontend, backend",
    ownership: "Personal product",
    summary:
      "Turns GitHub activity into reviewable development updates — a draft you can edit, regenerate, and publish.",
    problem:
      "Shipping is continuous, but explaining what shipped is a separate job. Updates get postponed because writing them from scratch is slow, and generic announcements do not show the work.",
    built: [
      "Connected GitHub through a GitHub App with read-only repository access, then let users group repositories into projects.",
      "Watched pushes for meaningful changes and generated a draft post from the commit history, skipping changes without a story.",
      "Built the review step: edit, regenerate, or copy the draft as Markdown before sharing it anywhere.",
      "Handled connection states, post history, generation failures, and account flows around the pipeline.",
    ],
    notes: [
      "React and TypeScript on the frontend, with a FastAPI service on Azure Container Apps behind it.",
      "Nothing publishes automatically; every generated post waits for human approval.",
      "GitHub installation and repository linking are modeled as explicit states, so the app can explain what is and is not connected.",
    ],
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "FastAPI",
      "Azure Container Apps",
      "GitHub App",
    ],
    links: [
      {
        label: "trybevis.vercel.app",
        href: "https://trybevis.vercel.app/",
        external: true,
      },
    ],
    image: {
      src: "/work/bevis.webp",
      alt: "Bevis landing page with the headline “Don’t say it. Show proof.” and a preview of a post generated from a GitHub push.",
      width: 1600,
      height: 1000,
    },
    featured: true,
  },
  {
    slug: "lel-store",
    index: "02",
    name: "LEL Store",
    category: "Client work · E-commerce",
    year: "2026",
    status: "Live",
    role: "Frontend and full-stack feature work",
    ownership: "Client-owned · Single-vendor store",
    summary:
      "A Nigerian commerce platform spanning retail, vehicles, and property, with the operational workflows behind each category.",
    problem:
      "Selling across categories is not one checkout flow. Vehicles and property bring inspections, installment plans, documents, and manual review — and the customer, admin, and payment states have to stay aligned.",
    built: [
      "Contributed to the React storefront: catalog, cart, wishlist, checkout, and account flows backed by a REST API.",
      "Worked across inspection and installment journeys, including applications, agreements, and payment status.",
      "Contributed to admin surfaces for inventory, orders, payments, disputes, and financing applications.",
      "Extended shopping flows into an Expo/React Native app sharing the same backend.",
    ],
    notes: [
      "React, TypeScript, Vite, and Tailwind on the web; FastAPI, PostgreSQL, and SQLAlchemy on the server.",
      "Web and mobile are separate clients over the same domain model, so a workflow change has to hold in both places.",
      "Authentication covers email/OTP and Google sign-in; checkout uses Cloudflare Turnstile.",
    ],
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Expo",
      "React Native",
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
    ],
    links: [
      {
        label: "lelstore.com",
        href: "https://lelstore.com/",
        external: true,
      },
    ],
    image: {
      src: "/work/lel-store.webp",
      alt: "LEL Store product listing page with category filters and a grid of retail products.",
      width: 1600,
      height: 1000,
    },
    featured: true,
  },
  {
    slug: "oron",
    index: "03",
    name: "Oron",
    category: "Commerce · Web application",
    year: "2026",
    status: "Live",
    role: "Product, frontend, backend",
    ownership: "Personal product",
    summary:
      "A premium tech-accessories storefront with the admin and order-management system a real store needs behind it.",
    problem:
      "A small hardware brand still needs the systems of a larger retailer: a storefront that carries the brand, plus inventory, payments, shipments, support, and disputes behind it.",
    built: [
      "Built a Next.js storefront with category browsing, cart, guest checkout, and payment-link flows.",
      "Built the FastAPI backend for products, orders, payments, shipments, reviews, disputes, and notifications.",
      "Added an admin surface for inventory, orders, payments, support, and broadcasts.",
    ],
    notes: [
      "Next.js 16, React 19, TypeScript, Tailwind, and Radix on the frontend; FastAPI, SQLAlchemy, Alembic, and PostgreSQL on the backend.",
      "Order, payment, and shipment states are modeled explicitly so admin actions and customer views stay consistent.",
      "Bank transfer and payment links sit alongside the standard checkout path.",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Radix UI",
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "Alembic",
    ],
    links: [
      {
        label: "oron-marketplace.vercel.app",
        href: "https://oron-marketplace.vercel.app/",
        external: true,
      },
    ],
    image: {
      src: "/work/oron.webp",
      alt: "ORON Techware storefront hero with noise-cancelling headphones and the headline “Sound Without Limits.”",
      width: 1600,
      height: 1000,
    },
    featured: false,
  },
  {
    slug: "devassist",
    index: "04",
    name: "DevAssist",
    category: "SaaS · Job application productivity",
    year: "2025–2026",
    status: "Active",
    role: "Product, frontend, backend",
    ownership: "Personal product",
    summary:
      "Turns a job description and a saved profile into a tailored email and cover letter, then keeps the application workflow in one place.",
    problem:
      "Applying well means rewriting the same experience for every role: matching the job description, adjusting tone, drafting a cover letter, and tracking what was sent. It is repetitive work, and generic output is easy to spot.",
    built: [
      "Built a workflow that takes a job description and a saved profile, then generates a tailored email and cover letter.",
      "Added editing, regeneration, templates, and PDF export so the output can be adjusted before it is sent.",
      "Built profile and application-tracking surfaces around the generation step.",
      "Connected the React client to a FastAPI/Supabase backend, with LangChain and Groq handling generation.",
    ],
    notes: [
      "Model credentials stay on the server; the browser talks to the API, not the provider.",
      "Profiles are reusable across applications, so the same experience can be shaped to different roles.",
      "The product is active. This case study describes the workflow, not usage or outcome metrics.",
    ],
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Python",
      "FastAPI",
      "Supabase",
      "LangChain",
      "Groq",
    ],
    links: [
      {
        label: "dev-assist-apply-ai.vercel.app",
        href: "https://dev-assist-apply-ai.vercel.app/",
        external: true,
      },
    ],
    image: {
      src: "/work/devassist.webp",
      alt: "DevAssist feature overview showing AI-generated applications, multiple profiles, tech-stack detection, PDF export, and application tracking.",
      width: 1600,
      height: 1000,
    },
    featured: false,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
export const supportingProjects = projects.filter((project) => !project.featured);
