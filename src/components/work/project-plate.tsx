import Image from "next/image";

type ProjectPlateProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  label: string;
  sizes?: string;
  priority?: boolean;
};

export function ProjectPlate({
  src,
  alt,
  width,
  height,
  label,
  sizes = "(min-width: 1024px) 1200px, 100vw",
  priority = false,
}: ProjectPlateProps) {
  return (
    <figure className="plate group overflow-hidden">
      <div
        aria-hidden="true"
        className="flex items-center justify-between border-b border-line bg-surface px-3 py-2.5 sm:px-4"
      >
        <span className="flex min-w-0 items-center gap-2">
          <span className="size-1.5 shrink-0 bg-accent" />
          <span className="truncate font-mono text-[11px] tracking-tight text-muted">
            {label}
          </span>
        </span>
        <span className="mono-label shrink-0 text-[10px] text-muted">Live</span>
      </div>
      <div className="relative aspect-[16/10] overflow-hidden bg-paper">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          priority={priority}
          className="plate-image h-full w-full object-cover object-top"
        />
      </div>
    </figure>
  );
}
