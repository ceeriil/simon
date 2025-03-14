import React from "react";
import Link from "next/link";
import { ArrowLink } from "@/components/assets/ArrowLink";
import { IProject } from "@/data/projects";
import { Tag } from "@/components/Tag/Tag";

interface ISectionProjectDescriptionProps {
  projects: IProject;
}

export const SectionProjectDescription: React.FC<
  ISectionProjectDescriptionProps
> = ({ projects }) => {
  return (
    <section className=" relative container mx-auto border border-[#ffffff90] border-t-0 border-b-0 px-12 py-20 ">
      <h2 className="text-3xl uppercase mb-3  tracking-[0.4rem] font-[600]">
        {projects.name}
      </h2>
      <div className="py-4 mb-2">
        <Tag tag={projects.tag} />
      </div>
      <p className="py-2 text-lg lg:pr-8">{projects.description}</p>
      <Link
        href="/"
        className="inline-flex text-[#4AFFA4] mt-12 text-xl uppercase tracking-[0.35rem] space-x-5"
      >
        <ArrowLink />
        <span>Visit Live Project</span>
      </Link>
    </section>
  );
};
