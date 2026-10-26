type SectionHeadingProps = {
  index: string;
  title: string;
  description?: string;
  id?: string;
};

export function SectionHeading({
  index,
  title,
  description,
  id,
}: SectionHeadingProps) {
  return (
    <header className="rule-top pt-5">
      <div className="flex flex-wrap items-baseline gap-x-5 gap-y-2">
        <span className="mono-label text-accent-text">{index}</span>
        <h2
          id={id}
          className="text-3xl font-medium tracking-[-0.035em] text-balance md:text-5xl"
        >
          {title}
        </h2>
      </div>
      {description ? (
        <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-muted">
          {description}
        </p>
      ) : null}
    </header>
  );
}
