interface ProjectCardProps {
  index: number;
  title: string;
  summary: string;
  tags: string[];
}

export function ProjectCard({ index, title, summary, tags }: ProjectCardProps) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <article className="group border-b border-border/60 py-10 first:pt-2 last:border-b-0">
      <div className="flex items-baseline gap-4">
        <span className="shrink-0 text-sm tabular-nums text-mint transition-colors duration-300 group-hover:text-lavender">
          {number}
        </span>
        <h3 className="font-display text-2xl text-foreground transition-transform duration-300 group-hover:translate-x-0.5 sm:text-[1.75rem]">
          {title}
        </h3>
      </div>

      <p className="mt-4 max-w-2xl pl-10 text-base leading-relaxed text-muted-foreground sm:pl-12">
        {summary}
      </p>

      <ul className="mt-5 flex flex-wrap gap-2 pl-10 sm:pl-12">
        {tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-border/80 px-3 py-1 text-xs tracking-wide text-muted-foreground transition-colors duration-200 group-hover:border-lavender/40 group-hover:text-foreground/85"
          >
            {tag}
          </li>
        ))}
      </ul>
    </article>
  );
}
