import type { Project } from "@/content/projects";
import { ArrowLink } from "@/components/ui/arrow-link";
import { ProjectPlate } from "@/components/work/project-plate";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article
      id={project.slug}
      className="flex flex-col scroll-mt-28"
      aria-labelledby={`${project.slug}-card-title`}
    >
      <ProjectPlate
        src={project.image.src}
        alt={project.image.alt}
        width={project.image.width}
        height={project.image.height}
        label={project.links[0]?.label ?? project.name}
        sizes="(min-width: 1024px) 50vw, 100vw"
      />

      <div className="mt-5 flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <span className="mono-label text-accent-text">{project.index}</span>
          <span className="mono-label text-muted">{project.category}</span>
        </div>
        <span className="mono-label text-muted">{project.year}</span>
      </div>

      <h3
        id={`${project.slug}-card-title`}
        className="mt-3 text-2xl font-medium tracking-[-0.035em] md:text-3xl"
      >
        {project.name}
      </h3>

      <p className="mt-3 text-pretty text-base leading-relaxed text-muted">
        {project.summary}
      </p>

      <ul className="mt-5 space-y-2">
        {project.built.slice(0, 2).map((item) => (
          <li
            key={item}
            className="flex gap-2.5 text-pretty text-sm leading-relaxed text-muted"
          >
            <span aria-hidden="true" className="mt-2 h-px w-3 shrink-0 bg-accent" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <p className="mt-5 text-pretty text-xs leading-relaxed text-muted">
        {project.stack.join(" · ")}
      </p>

      <div className="mt-4 flex flex-wrap items-start gap-x-5 gap-y-2">
        {project.links.map((link) => (
          <ArrowLink key={link.href} href={link.href} external={link.external}>
            {link.label}
          </ArrowLink>
        ))}
      </div>
    </article>
  );
}
