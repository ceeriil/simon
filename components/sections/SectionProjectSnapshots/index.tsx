import React from "react";
import Image from "next/image";

import type { IProject } from "@/data/projects";

interface ISectionProjectSnapshotsProps {
  project: IProject;
}

export const SectionProjectSnapshots: React.FC<
  ISectionProjectSnapshotsProps
> = ({ project }) => {
  if (!project.snapshots || project.snapshots.length <= 0) {
    return null;
  }

  return (
    <section>
      <div className="container mx-auto border-t border-l border-r border-[#ffffff90]">
        <h2 className="bg-white py-1 px-4 uppercase text-xl translate-y-[-50%] text-black inline-block tracking-[0.4rem] font-medium ml-6">
          Project screenshots
        </h2>
      </div>
      <div className="py-8 border-l border-r border-[#ffffff90] container mx-auto px-16 ">
        <div className=" grid mx-auto gap-2 pb-12">
          <div className=" mx-4 my-4 uppercase tracking-[0.35rem] text-xl text-white p-5 bg-[#1A1A1A] text-center border-primary  image-container relative custom-dashed-border">
            <div className="img-border-l" />
            <div className="img-border-r" />
            <div className="  border uppercase tracking-[0.35rem] text-xl text-white  p-4 bg-[#1A1A1A] text-center border-primary min-h-[35rem] relative">
              <Image
                fill
                className="object-cover absolute"
                alt={project.snapshots[0].name}
                src={project.snapshots[0].url}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
