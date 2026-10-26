import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type ArrowLinkProps = {
  href: string;
  children: ReactNode;
  external?: boolean;
  className?: string;
  arrow?: "right" | "down" | "up-right";
  tone?: "light" | "dark";
};

const paths = {
  right: "M2 6h8M6.5 2.5 10 6l-3.5 3.5",
  down: "M6 2v8M2.5 6.5 6 10l3.5-3.5",
  "up-right": "M3 9 9 3M4 3h5v5",
};

export function ArrowLink({
  href,
  children,
  external = false,
  className,
  arrow = external ? "up-right" : "right",
  tone = "light",
}: ArrowLinkProps) {
  return (
    <a
      href={href}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : undefined)}
      className={cn(
        "group inline-flex items-center gap-1.5 text-sm font-medium transition-colors",
        tone === "dark"
          ? "hover:text-accent-bright"
          : "hover:text-accent-text",
        className,
      )}
    >
      <span>{children}</span>
      <svg
        aria-hidden="true"
        viewBox="0 0 12 12"
        className="size-3 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d={paths[arrow]} />
      </svg>
    </a>
  );
}
