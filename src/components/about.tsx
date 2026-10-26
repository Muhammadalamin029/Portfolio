import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="container-page py-20 md:py-28"
    >
      <Reveal>
        <SectionHeading index="02" title="About" id="about-title" />
      </Reveal>

      <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-8">
        <Reveal className="lg:col-span-4">
          <p className="text-balance text-2xl font-medium leading-[1.15] tracking-[-0.035em] md:text-3xl">
            The interface is only half the product.
          </p>

          <dl className="mt-8 space-y-4 border-t border-line pt-5 text-sm">
            <div className="grid grid-cols-[7rem_1fr] gap-3">
              <dt className="mono-label text-muted">Based in</dt>
              <dd>Nigeria</dd>
            </div>
            <div className="grid grid-cols-[7rem_1fr] gap-3">
              <dt className="mono-label text-muted">Studying</dt>
              <dd>BSc Computer Science, FUT Minna</dd>
            </div>
            <div className="grid grid-cols-[7rem_1fr] gap-3">
              <dt className="mono-label text-muted">Currently</dt>
              <dd>Building Bevis and client commerce systems</dd>
            </div>
          </dl>
        </Reveal>

        <Reveal className="lg:col-span-7 lg:col-start-6" delay={60}>
          <div className="space-y-5 text-pretty text-base leading-relaxed text-muted md:text-lg">
            <p>
              I&apos;m Ameenu, a full-stack developer based in Nigeria. I build
              products that have to work beyond the demo: storefronts with
              payments and order states, SaaS tools with accounts and generated
              content, and admin screens that keep operations moving.
            </p>
            <p>
              My work sits between product and engineering. I care how a flow
              reads, how the API behind it behaves, and what happens when a
              customer, an admin, or an edge case arrives. I&apos;m studying
              Computer Science at FUT Minna and building products independently
              and with clients.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
