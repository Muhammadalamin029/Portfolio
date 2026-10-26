import type { Metadata, Viewport } from "next";
import { Fragment_Mono, Schibsted_Grotesk } from "next/font/google";
import { site } from "@/content/site";
import "./globals.css";

const sans = Schibsted_Grotesk({
  subsets: ["latin"],
  variable: "--font-schibsted",
  display: "swap",
});

const mono = Fragment_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-fragment",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name }],
  creator: site.name,
  keywords: [
    "Ameenu Musa",
    "full-stack developer",
    "software engineer",
    "React developer",
    "Next.js developer",
    "Python developer",
    "Nigeria",
  ],
  openGraph: {
    type: "website",
    locale: "en_NG",
    siteName: site.name,
    title: site.title,
    description: site.description,
    url: site.url,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: `${site.name} — ${site.role}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#f7f5f0",
  colorScheme: "light",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  url: site.url,
  sameAs: [site.links.github, site.links.linkedin, site.links.x],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Federal University of Technology, Minna",
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "NG",
  },
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "Python",
    "FastAPI",
    "PostgreSQL",
    "Product engineering",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body className="bg-paper text-ink antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-ink focus:px-4 focus:py-3 focus:font-mono focus:text-xs focus:uppercase focus:tracking-[0.14em] focus:text-paper"
        >
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}
