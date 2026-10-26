import { experience } from "@/content/experience";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="container-page py-20 md:py-28"
    >
      <Reveal>
        <SectionHeading
          index="03"
          title="Experience"
          id="experience-title"
        />
      </Reveal>

      <Reveal className="mt-10" delay={40}>
        <ol className="border-t border-line">
          {experience.map((item) => (
            <li
              key={`${item.organisation}-${item.role}`}
              className="grid gap-3 border-b border-line py-7 md:grid-cols-12 md:gap-8"
            >
              <div className="md:col-span-4">
                <p className="mono-label text-muted">{item.kind}</p>
                <h3 className="mt-2 text-xl font-medium tracking-[-0.025em] md:text-2xl">
                  {item.role}
                </h3>
                <p className="mt-1 text-sm text-muted">{item.organisation}</p>
              </div>
              <div className="md:col-span-3">
                <p className="mono-label text-muted">{item.period}</p>
              </div>
              <p className="text-pretty text-sm leading-relaxed text-muted md:col-span-5">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </Reveal>
    </section>
  );
}
