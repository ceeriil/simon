import React from "react";
import Link from "next/link";
import projects from "@/data/projects";
import { getPrevNextProject } from "@/components/utils/utils";

interface SectionPrevNextNavigationProps {
  currentSlug: string;
}

export const SectionPrevNextNavigation: React.FC<
  SectionPrevNextNavigationProps
> = ({ currentSlug }) => {
  const { prevProject, nextProject } = getPrevNextProject(currentSlug);

  return (
    <div className="border-t border-[#ffffff90]">
      <div className="py-12 pb-32 flex justify-between container mx-auto">
        {prevProject ? (
          <Link
            href={`/projects/${prevProject.slug}`}
            className="border-[#4AFFA4] text-[#4AFFA4] py-2.5 px-6 border-2 mt-4 uppercase text-sm inline-block bg-[#061E23] tracking-[0.35rem]"
          >
            Previous
          </Link>
        ) : (
          <div />
        )}

        {nextProject ? (
          <Link
            href={`/projects/${nextProject.slug}`}
            className="border-[#4AFFA4] text-[#4AFFA4] py-2.5 px-6 border-2 mt-4 uppercase text-sm inline-block bg-[#061E23] tracking-[0.35rem]"
          >
            Next
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
};
