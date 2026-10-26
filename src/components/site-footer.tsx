export function SiteFooter() {
  return (
    <footer className="bg-ink text-paper">
      <div className="container-page flex flex-col gap-4 border-t border-paper/15 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="mono-label text-paper/55">© 2026 Ameenu Musa</p>
        <p className="text-xs text-paper/60">
          Built with React, TypeScript, and Tailwind CSS.
        </p>
        <a
          href="#top"
          className="mono-label text-paper/55 transition-colors hover:text-paper"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
