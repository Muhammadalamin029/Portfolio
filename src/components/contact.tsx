import { site } from "@/content/site";
import { ArrowLink } from "@/components/ui/arrow-link";
import { CopyEmail } from "@/components/copy-email";
import { Reveal } from "@/components/motion/reveal";

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="scroll-mt-20 bg-ink text-paper"
    >
      <div className="container-page py-20 md:py-28">
        <Reveal>
          <div className="flex items-center gap-3">
            <span aria-hidden="true" className="h-px w-8 bg-accent" />
            <p className="mono-label text-accent-bright">06 / Contact</p>
          </div>

          <h2
            id="contact-title"
            className="mt-6 max-w-4xl text-balance text-[clamp(2.2rem,5vw,4.5rem)] font-medium leading-[0.98] tracking-[-0.045em]"
          >
            Let&apos;s build something that holds up.
          </h2>

          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-paper/65">
            For product work, client projects, or a full-stack role, email is
            the fastest way to reach me.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href={`mailto:${site.email}`}
              className="break-all text-xl font-medium tracking-[-0.02em] underline decoration-paper/30 underline-offset-[6px] transition-colors hover:text-accent-bright hover:decoration-accent-bright md:text-3xl"
            >
              {site.email}
            </a>
            <CopyEmail email={site.email} />
          </div>

          <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-paper/15 pt-6">
            <ArrowLink
              href={site.links.github}
              external
              tone="dark"
              className="text-paper/70"
            >
              GitHub
            </ArrowLink>
            <ArrowLink
              href={site.links.linkedin}
              external
              tone="dark"
              className="text-paper/70"
            >
              LinkedIn
            </ArrowLink>
            <ArrowLink
              href={site.links.x}
              external
              tone="dark"
              className="text-paper/70"
            >
              X
            </ArrowLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
