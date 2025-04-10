import React from "react";
import Link from "next/link";

import { ArrowLink } from "@/components/assets/ArrowLink";
import type { IProject } from "@/data/projects";
import { Tag } from "@/components/Tag/Tag";

interface ISectionProjectDescriptionProps {
  projects: IProject;
}

export const SectionProjectDescription: React.FC<
  ISectionProjectDescriptionProps
> = ({ projects }) => {
  return (
    <section className=" relative container mx-auto border border-[#ffffff90] border-t-0 border-b-0 lg:px-12 py-20 px-5 ">
      <h2 className="text-3xl uppercase mb-3  tracking-[0.4rem] font-[600]">
        {projects.name}
      </h2>
      <div className="py-4 mb-2">
        <Tag tag={projects.tag} />
      </div>
      <p className="py-2 text-lg lg:pr-8">{projects.description}</p>
      <Link
        href={projects.liveLink || "/"}
        className="inline-flex text-primary mt-12 lg:text-xl uppercase lg:tracking-[0.35rem] tracking-[0.25rem] space-x-5 text-lg font-semibold"
      >
        <ArrowLink />
        <span>Visit Live Project</span>
      </Link>
    </section>
  );
};
