import { projects } from "@/data/bioData";
import { ProjectCard } from "../ui/project-card";

export default function Projects() {
  return (
    <section className="flex flex-col">
      {projects.map((item, index) => (
        <ProjectCard
          key={index}
          title={item.title}
          description={item.description}
          date={item.duration}
          imageUrl={item.imageUrl}
          href={item.href}
          tags={item.tags}
        />
      ))}
    </section>
  );
}
