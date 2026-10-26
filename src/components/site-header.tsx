"use client";

import { useEffect, useRef, useState } from "react";
import { navigation, site } from "@/content/site";
import { cn } from "@/lib/cn";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 8);
      if (y < 120) setActive(null);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = navigation.map((item) => item.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (sections.length === 0 || typeof IntersectionObserver === "undefined") {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: "-28% 0px -58% 0px", threshold: [0, 0.15, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const previous = document.activeElement as HTMLElement | null;
    const panel = panelRef.current;
    const focusables = panel
      ? Array.from(
          panel.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled])',
          ),
        )
      : [];

    focusables[0]?.focus();
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        return;
      }

      if (event.key !== "Tab" || focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
      previous?.focus();
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 bg-paper transition-colors duration-200",
          scrolled ? "border-b border-line" : "border-b border-transparent",
        )}
      >
        <div className="container-page flex h-[4.5rem] items-center justify-between gap-6">
          <a
            href="#top"
            className="text-[15px] font-semibold tracking-[-0.02em]"
          >
            Ameenu Musa<span className="text-accent">.</span>
          </a>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-7 md:flex"
          >
            {navigation.map((item) => {
              const isActive = active === item.href.slice(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "location" : undefined}
                  className={cn(
                    "text-sm transition-colors hover:text-accent-text",
                    isActive ? "text-accent-text" : "text-ink/70",
                  )}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div className="hidden items-center gap-5 md:flex">
            <a
              href={site.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mono-label text-muted transition-colors hover:text-accent-text"
            >
              GitHub ↗
            </a>
            <a
              href="#contact"
              className="bg-ink px-4 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-accent-deep"
            >
              Get in touch
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="-mr-2 flex flex-col items-end gap-1.5 p-2 md:hidden"
          >
            <span className="sr-only">Open menu</span>
            <span aria-hidden="true" className="h-px w-6 bg-ink" />
            <span aria-hidden="true" className="h-px w-4 bg-ink" />
          </button>
        </div>
      </header>

      {menuOpen ? (
        <div
          id="mobile-menu"
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="fixed inset-0 z-[60] flex flex-col bg-paper md:hidden"
        >
          <div className="container-page flex h-[4.5rem] shrink-0 items-center justify-between">
            <span className="text-[15px] font-semibold tracking-[-0.02em]">
              Ameenu Musa<span className="text-accent">.</span>
            </span>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="p-2 text-sm font-medium text-ink"
            >
              <span className="sr-only">Close menu</span>
              <span aria-hidden="true" className="text-2xl leading-none">
                ×
              </span>
            </button>
          </div>

          <nav
            aria-label="Mobile"
            className="container-page flex flex-1 flex-col justify-center"
          >
            <ul className="border-t border-line">
              {navigation.map((item, index) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-baseline gap-4 border-b border-line py-5"
                  >
                    <span className="mono-label text-accent-text">
                      0{index + 1}
                    </span>
                    <span className="text-3xl font-medium tracking-[-0.04em]">
                      {item.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col gap-4">
              <a
                href={`mailto:${site.email}`}
                className="break-all text-sm text-muted"
              >
                {site.email}
              </a>
              <div className="flex gap-5">
                <a
                  href={site.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mono-label text-muted"
                >
                  GitHub ↗
                </a>
                <a
                  href={site.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mono-label text-muted"
                >
                  LinkedIn ↗
                </a>
                <a
                  href={site.links.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mono-label text-muted"
                >
                  X ↗
                </a>
              </div>
            </div>
          </nav>
        </div>
      ) : null}
    </>
  );
}
