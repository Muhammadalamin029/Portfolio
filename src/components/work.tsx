import {
  featuredProjects,
  supportingProjects,
} from "@/content/projects";
import { site } from "@/content/site";
import { Reveal } from "@/components/motion/reveal";
import { ArrowLink } from "@/components/ui/arrow-link";
import { SectionHeading } from "@/components/ui/section-heading";
import { FeaturedCase } from "@/components/work/featured-case";
import { ProjectCard } from "@/components/work/project-card";

export function Work() {
  return (
    <section
      id="work"
      aria-labelledby="work-title"
      className="container-page py-20 md:py-28"
    >
      <Reveal>
        <SectionHeading
          index="01"
          title="Selected work"
          id="work-title"
          description="Four products across SaaS, commerce, and client delivery. Bevis and LEL Store get the full case study; Oron and DevAssist follow in the same format at a smaller scale."
        />
      </Reveal>

      <div className="mt-12 space-y-24 md:mt-16 md:space-y-32">
        {featuredProjects.map((project, index) => (
          <Reveal key={project.slug} delay={index * 40}>
            <FeaturedCase project={project} />
          </Reveal>
        ))}
      </div>

      <div className="mt-24 md:mt-32">
        <Reveal>
          <div className="rule-top flex flex-wrap items-baseline justify-between gap-3 pt-5">
            <h3 className="text-xl font-medium tracking-[-0.03em] md:text-2xl">
              Supporting work
            </h3>
            <span className="mono-label text-muted">Two more builds</span>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-14 lg:grid-cols-2 lg:gap-10">
          {supportingProjects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 60}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal>
        <div className="mt-16 rule-top flex flex-col gap-4 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-md text-pretty text-sm leading-relaxed text-muted">
            Smaller experiments and earlier projects live on GitHub.
          </p>
          <ArrowLink href={site.links.github} external>
            github.com/Muhammadalamin029
          </ArrowLink>
        </div>
      </Reveal>
    </section>
  );
}
