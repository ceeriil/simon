"use client";
import {
  SectionPrevNextNavigation,
  SectionProjectAwards,
  SectionProjectCollaborators,
  SectionProjectDescription,
  SectionProjectHeader,
  SectionProjectSnapshots,
  SectionProjectTags,
} from "@/components";
import projects from "@/data/projects";

type ProjectParams = {
  params: {
    id: string;
  };
};

export default function ProjectDetails({ params }: ProjectParams) {
  const project = projects.find((p) => p.slug === params.id);

  if (!project) {
    return <div>loading</div>;
  }

  return (
    <div className="px-6">
      <SectionProjectHeader projects={project} />
      <div className="border-t border-[#ffffff90]">
        <SectionProjectDescription projects={project} />
        <SectionProjectTags projects={project} />
        <SectionProjectAwards projects={project} />
        <SectionProjectCollaborators project={project} />
        <SectionProjectSnapshots project={project} />
      </div>
      <SectionPrevNextNavigation currentSlug={params.id}/>
    </div>
  );
}
