import React from "react";

import type { IProject } from "@/data/projects";

interface ISectionProjectAwardsProps {
  projects: IProject;
}

export const SectionProjectAwards: React.FC<ISectionProjectAwardsProps> = ({
  projects,
}) => {
  if (!projects.awards || projects.awards.length <= 0) {
    return null;
  }

  return (
    <section>
      <div className="container mx-auto border-t border-l border-r border-[#ffffff90]">
        <h2 className="bg-white py-1 px-4 uppercase text-xl translate-y-[-50%] text-black inline-block tracking-[0.4rem] font-medium ml-6">
          Awards
        </h2>
      </div>

      <div className="py-8 border-l border-r border-[#ffffff90] container mx-auto lg:pb-32 pb-20">
        <div className=" grid mx-auto gap-2">
          {projects.awards.map(award => (
            <div
              className="border-[#727171] border-l-0 border-r-0 border uppercase tracking-[0.35rem] text-xl text-white py-5 px-3 bg-[#1A1A1A] text-center"
              key={award.name}
            >
              <h3> {award.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
