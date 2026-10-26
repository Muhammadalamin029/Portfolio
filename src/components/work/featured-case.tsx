import type { Project } from "@/content/projects";
import { ArrowLink } from "@/components/ui/arrow-link";
import { ProjectPlate } from "@/components/work/project-plate";

type FeaturedCaseProps = {
  project: Project;
};

export function FeaturedCase({ project }: FeaturedCaseProps) {
  return (
    <article
      id={project.slug}
      className="scroll-mt-28"
      aria-labelledby={`${project.slug}-title`}
    >
      <div className="grid gap-4 md:grid-cols-12 md:items-end md:gap-8">
        <div className="md:col-span-8">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="mono-label text-accent-text">{project.index}</span>
            <span className="mono-label text-muted">{project.category}</span>
          </div>
          <h3
            id={`${project.slug}-title`}
            className="mt-3 text-3xl font-medium tracking-[-0.04em] md:text-5xl"
          >
            {project.name}
          </h3>
          <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-muted md:text-lg">
            {project.summary}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 md:col-span-4 md:justify-end">
          <span className="mono-label text-muted">{project.year}</span>
          <span aria-hidden="true" className="text-muted">
            /
          </span>
          <span className="mono-label text-muted">{project.status}</span>
        </div>
      </div>

      <div className="mt-7">
        <ProjectPlate
          src={project.image.src}
          alt={project.image.alt}
          width={project.image.width}
          height={project.image.height}
          label={project.links[0]?.label ?? project.name}
          sizes="(min-width: 1280px) 1200px, 100vw"
        />
      </div>

      <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-8">
        <aside className="lg:col-span-4">
          <dl className="border-t border-line">
            <div className="flex justify-between gap-6 border-b border-line py-3">
              <dt className="mono-label text-muted">Role</dt>
              <dd className="max-w-[16rem] text-right text-sm leading-snug">
                {project.role}
              </dd>
            </div>
            <div className="flex justify-between gap-6 border-b border-line py-3">
              <dt className="mono-label text-muted">Ownership</dt>
              <dd className="max-w-[16rem] text-right text-sm leading-snug">
                {project.ownership}
              </dd>
            </div>
            <div className="flex justify-between gap-6 border-b border-line py-3">
              <dt className="mono-label text-muted">Year</dt>
              <dd className="text-right text-sm">{project.year}</dd>
            </div>
            <div className="flex justify-between gap-6 border-b border-line py-3">
              <dt className="mono-label text-muted">Status</dt>
              <dd className="text-right text-sm">{project.status}</dd>
            </div>
          </dl>

          <div className="mt-8">
            <p className="mono-label text-muted">Stack</p>
            <p className="mt-2 text-pretty text-sm leading-relaxed">
              {project.stack.join(" · ")}
            </p>
          </div>

          <div className="mt-8 flex flex-col items-start gap-2.5">
            {project.links.map((link) => (
              <ArrowLink
                key={link.href}
                href={link.href}
                external={link.external}
              >
                {link.label}
              </ArrowLink>
            ))}
          </div>
        </aside>

        <div className="lg:col-span-8">
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <h4 className="mono-label text-accent-text">Problem</h4>
              <p className="mt-3 text-pretty text-base leading-relaxed">
                {project.problem}
              </p>
            </div>
            <div>
              <h4 className="mono-label text-accent-text">What I built</h4>
              <ul className="mt-3 space-y-2.5">
                {project.built.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2.5 text-pretty text-sm leading-relaxed text-muted"
                  >
                    <span aria-hidden="true" className="mt-2 h-px w-3 shrink-0 bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-9 border-t border-line pt-6">
            <h4 className="mono-label text-muted">Technical notes</h4>
            <ul className="mt-4 grid gap-4 sm:grid-cols-2">
              {project.notes.map((note) => (
                <li
                  key={note}
                  className="text-pretty text-sm leading-relaxed text-muted"
                >
                  {note}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}
