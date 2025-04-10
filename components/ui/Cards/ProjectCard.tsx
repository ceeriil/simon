"use client";

import React from "react";
import { Link } from "next-transition-router";
import Image from "next/image";

import { usePlaySound } from "@/hooks/usePlaySound";

interface IProjectCardProps {
  name: string;
  description: string;
  slug: string;
}

export const ProjectCard: React.FC<IProjectCardProps> = ({
  name,
  description,
  slug,
}) => {
  const playClickSound = usePlaySound("/audio/glitch.mp3");

  return (
    <div className="grid lg:grid-cols-[45%,50%] gap-[5rem] py-10 items-center gap-y-8">
      <Image src="/img/card.svg" alt="card" width={653} height={338} />
      <div>
        <h2 className="uppercase text-2xl mb-3 tracking-[0.25rem] font-semibold">
          {name}
        </h2>
        <p>{description}</p>
        <Link
          href={`/projects/${slug}`}
          onMouseEnter={playClickSound}
          onClick={playClickSound}
          className="border-primary text-primary py-2.5 px-6 border-2 mt-4 uppercase text-sm inline-block"
        >
          View Project
        </Link>
      </div>
    </div>
  );
};
