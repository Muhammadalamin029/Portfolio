import { skillGroups } from "@/content/skills";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="container-page py-20 md:py-28"
    >
      <Reveal>
        <SectionHeading
          index="04"
          title="Skills"
          id="skills-title"
          description="Grouped by the work rather than a wall of badges. The evidence line names where each group has been used."
        />
      </Reveal>

      <Reveal className="mt-10" delay={40}>
        <dl className="border-t border-line">
          {skillGroups.map((group) => (
            <div
              key={group.group}
              className="grid gap-3 border-b border-line py-6 md:grid-cols-12 md:gap-8"
            >
              <dt className="mono-label text-ink md:col-span-3">
                {group.group}
              </dt>
              <dd className="text-pretty text-sm leading-relaxed md:col-span-6">
                {group.items.join(" · ")}
              </dd>
              <dd className="mono-label text-muted md:col-span-3 md:text-right">
                {group.evidence}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}
