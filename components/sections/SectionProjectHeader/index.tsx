"use client";

import React from "react";
import Image from "next/image";
import { IProject } from "@/data/projects";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface ISectionProjectHeaderProps {
  projects: IProject;
}

export const SectionProjectHeader: React.FC<ISectionProjectHeaderProps> = ({
  projects,
}) => {
  const router = useRouter();

  return (
    <>
      <div className="py-7 border-b border-[#ffffff90]"></div>
      <section>
        <div className="h-[20rem] relative container mx-auto border border-[#ffffff90] border-t-0 border-b-0 ">
          <Image
            src={"/img/project.svg"}
            alt="Project Image"
            layout="fill"
            className="object-cover"
          />
          <div className="absolute  z-10 py-4 top-0 px-5 flex justify-between items-center w-full ">
            <button
              className="bg-white text-black py-1 text-lg uppercase px-6 font-semibold"
              onClick={() => router.back()}
            >
              Back
            </button>
            <Link
              href={projects.githubLink}
              className="bg-[#ffffff25]  text-white py-1 text-lg uppercase px-6 font-semibold border-white border"
            >
              View github project
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
