import projects from "@/data/projects";
import { ProjectCard } from "@/components/ui/Cards/ProjectCard";

export default function Projects() {
  return (
    <div className="flex flex-col container mx-auto py-5 ">
      {projects.map(({ name, description, slug, tag, projectTags }, i) => (
        <ProjectCard
          key={slug}
          index={i + 1}
          name={name}
          description={description}
          slug={slug}
          tag={tag}
          projectTags={projectTags}
        />
      ))}
    </div>
  );
}
