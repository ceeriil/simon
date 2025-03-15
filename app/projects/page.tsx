import projects from "@/data/projects";
import { ProjectCard } from "@/components/ui/Cards/ProjectCard";

export default function Projects() {
  return (
    <div className="flex flex-col container mx-auto py-5 ">
      {projects.map(({ name, description, slug }) => (
        <ProjectCard name={name} description={description} slug={slug} />
      ))}
    </div>
  );
}
