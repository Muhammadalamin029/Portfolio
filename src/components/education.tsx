import { education } from "@/content/experience";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-title"
      className="container-page py-20 md:py-28"
    >
      <Reveal>
        <SectionHeading index="05" title="Education" id="education-title" />
      </Reveal>

      <Reveal className="mt-10" delay={40}>
        <dl className="border-t border-line">
          {education.map((item) => (
            <div
              key={item.qualification}
              className="grid gap-2 border-b border-line py-6 md:grid-cols-12 md:items-baseline md:gap-8"
            >
              <dt className="text-base font-medium tracking-[-0.02em] md:col-span-5">
                {item.qualification}
              </dt>
              <dd className="text-sm text-muted md:col-span-4">
                {item.institution}
              </dd>
              <dd className="mono-label whitespace-nowrap text-muted md:col-span-3 md:text-right">
                {item.period}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}
