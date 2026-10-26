import type { CSSProperties } from "react";
import { projects } from "@/content/projects";

function DownArrow() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 12 12"
      className="size-3"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 2v8M2.5 6.5 6 10l3.5-3.5" />
    </svg>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="container-page border-b border-line"
    >
      <div className="grid gap-12 pb-16 pt-28 md:gap-10 md:pb-24 md:pt-36 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          <div
            className="hero-rise flex items-center gap-3"
            style={{ "--hero-delay": "60ms" } as CSSProperties}
          >
            <span aria-hidden="true" className="h-px w-8 bg-accent" />
            <p className="mono-label text-muted">
              Ameenu Musa — Full-Stack Developer
            </p>
          </div>

          <h1
            id="hero-title"
            className="hero-rise mt-7 text-balance text-[clamp(2.7rem,7.2vw,6.25rem)] font-medium leading-[0.93] tracking-[-0.05em]"
            style={{ "--hero-delay": "140ms" } as CSSProperties}
          >
            <span className="sr-only">Ameenu Musa — </span>I build the{" "}
            <span className="text-accent">whole</span> product, not just the
            screen.
          </h1>

          <p
            className="hero-rise mt-7 max-w-xl text-pretty text-lg leading-relaxed text-muted"
            style={{ "--hero-delay": "240ms" } as CSSProperties}
          >
            Full-stack developer working across React, Next.js, Python, and
            Postgres — from interface and interaction through APIs, data, and
            deployment.
          </p>

          <div
            className="hero-rise mt-9 flex flex-wrap items-center gap-x-8 gap-y-4"
            style={{ "--hero-delay": "340ms" } as CSSProperties}
          >
            <a
              href="#work"
              className="inline-flex items-center gap-2 bg-ink px-5 py-3 text-sm font-medium text-paper transition-colors hover:bg-accent-deep"
            >
              View selected work
              <DownArrow />
            </a>
            <a href="#contact" className="link-underline text-sm font-medium">
              Contact me
            </a>
          </div>
        </div>

        <aside
          className="hero-rise lg:col-span-5 lg:border-l lg:border-line lg:pl-9"
          style={{ "--hero-delay": "300ms" } as CSSProperties}
          aria-label="Project index"
        >
          <div className="flex items-center justify-between">
            <p className="mono-label text-muted">Index</p>
            <p className="mono-label text-muted">2026</p>
          </div>

          <ol className="mt-4 border-t border-line">
            {projects.map((project) => (
              <li key={project.slug}>
                <a
                  href={`#${project.slug}`}
                  className="group flex items-center gap-4 border-b border-line py-4 transition-colors hover:text-accent-text"
                >
                  <span className="mono-label w-5 shrink-0 text-muted transition-colors group-hover:text-accent-text">
                    {project.index}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-lg font-medium tracking-tight">
                      {project.name}
                    </span>
                    <span className="mt-0.5 block truncate text-xs text-muted">
                      {project.category}
                    </span>
                  </span>
                  <span className="mono-label shrink-0 text-muted">
                    {project.year}
                  </span>
                </a>
              </li>
            ))}
          </ol>

          <div className="mt-7 space-y-3 text-sm text-muted">
            <p className="flex flex-wrap items-baseline gap-x-2">
              <span className="mono-label text-ink">Based in</span>
              <span>Nigeria</span>
            </p>
            <p className="flex flex-wrap items-baseline gap-x-2">
              <span className="mono-label text-ink">Studying</span>
              <span>BSc Computer Science, FUT Minna</span>
            </p>
          </div>
        </aside>
      </div>

      <div className="flex flex-wrap items-baseline gap-x-8 gap-y-2 py-4">
        <span className="mono-label text-ink">Focus</span>
        {["SaaS", "Commerce", "Marketplaces", "Client work"].map((item) => (
          <span key={item} className="mono-label text-muted">
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
