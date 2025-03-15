import React from "react";
import { IProject } from "@/data/projects";

interface ISectionProjectTagsProps {
  projects: IProject;
}

export const SectionProjectTags: React.FC<ISectionProjectTagsProps> = ({
  projects,
}) => {
  if (!projects.projectTags || projects.projectTags.length === 0) {
    <></>;
  }

  return (
    <section>
      <div className="container mx-auto border-t border-l border-r border-[#ffffff90]">
        <h2 className="bg-white py-1 px-4 uppercase text-xl translate-y-[-50%] text-black inline-block tracking-[0.4rem] font-medium ml-6">
          Project Tags
        </h2>
      </div>

      <div className="py-16 border-l border-r border-[#ffffff90] container mx-auto pb-32 px-2 lg:px-0 ">
        <div className=" grid mx-auto md:grid-cols-2 lg:grid-cols-4 gap-2 gap-y-5">
          {projects.projectTags.map((tag) => (
            <div
              className="border-[#727171] border uppercase tracking-[0.35rem] text-lg py-3 px-3 bg-[#1A1A1A] text-center"
              key={tag}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
