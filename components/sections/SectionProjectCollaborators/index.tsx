import React from "react";

import { Profile } from "@/components/assets/Profile";
import type { IProject } from "@/data/projects";

interface ISectionProjectCollaboratorsProps {
  project: IProject;
}

export const SectionProjectCollaborators: React.FC<
  ISectionProjectCollaboratorsProps
> = ({ project }) => {
  if (!project.collaborators || project.collaborators.length <= 0) {
    return null;
  }

  return (
    <section>
      <div className="container mx-auto border-t border-l border-r border-[#ffffff90]">
        <h2 className="bg-white py-1 px-4 uppercase text-xl translate-y-[-50%] text-black inline-block tracking-[0.4rem] font-medium ml-6">
          Collaborators
        </h2>
      </div>

      <div className="py-8 border-l border-r border-[#ffffff90] container mx-auto pb-20">
        <div className=" grid mx-auto gap-2 lg:grid-cols-3 px-2 lg:px-0">
          {project.collaborators.map(collaborator => (
            <div
              className="border-[#727171]  border  text-white py-4 px-3 bg-[#1A1A1A] text-left flex space-x-5 items-center lg:justify-center cursor-pointer"
              key={collaborator.name}
            >
              <Profile />
              <div>
                <span className="text-lg tracking-[0.25rem]  uppercase font-semibold jura-font ">
                  {collaborator.name}
                </span>
                <p className="text-sm text-gray-300">{collaborator.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
