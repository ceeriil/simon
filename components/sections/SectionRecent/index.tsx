import React from "react";

import projects from "@/data/projects";
import { ProjectCard } from "@/components/ui/Cards/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const SectionRecent = () => {
  return (
    <section>
      <SectionHeading
        title="Recent Projects"
        subtitle="// Selected Works Archive"
      />

      <div className="flex flex-col container mx-auto py-5 lg:py-16  px-4 pb-32">
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
    </section>
  );
};
