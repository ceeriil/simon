"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTransitionRouter } from "next-transition-router";

import type { IProject } from "@/data/projects";

interface ISectionProjectHeaderProps {
  projects: IProject;
}

export const SectionProjectHeader: React.FC<ISectionProjectHeaderProps> = ({
  projects,
}) => {
  const router = useTransitionRouter();

  return (
    <>
      <div className="py-7 border-b border-[#ffffff90]" />
      <section>
        <div className="lg:h-[20rem] h-[18rem] relative container mx-auto border border-[#ffffff90] border-t-0 border-b-0 ">
          <Image
            src="/img/project.svg"
            alt="Project Image"
            layout="fill"
            className="object-cover"
          />
          <div className="absolute  z-10 py-4 top-0 px-5 flex justify-between items-center w-full ">
            <button
              className="bg-white text-black py-1 text-lg uppercase px-6 font-semibold jura-font"
              onClick={() => router.push("/")}
              type="button"
            >
              Back
            </button>
            <Link
              href={projects.githubLink}
              className="bg-[#ffffff25]  text-white py-1 text-lg uppercase px-6 font-semibold border-white border hidden lg:inline-block jura-font"
            >
              View github project
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
