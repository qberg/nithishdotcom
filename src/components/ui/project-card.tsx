interface ProjectCardProps {
  title: string;
  summary: string;
  work: string;
  impact: string[];
}

export function ProjectCard({
  title,
  summary,
  work,
  impact,
}: ProjectCardProps) {
  return (
    <article className="border-l border-border pl-4">
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="mt-1 text-muted-foreground">{summary}</p>
      <div className="mt-4">
        <p className="font-semibold italic">What I did:</p>
        <p className="mt-2 leading-relaxed text-muted-foreground">{work}</p>
      </div>
      <div className="mt-4">
        <p className="font-semibold italic">Outcomes:</p>
        <ul className="mt-2 list-disc space-y-1.5 pl-5 text-muted-foreground">
          {impact.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
