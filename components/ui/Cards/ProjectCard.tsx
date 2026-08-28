"use client";

import React, { useState } from "react";
import { Link } from "next-transition-router";
import Image from "next/image";

import { usePlaySound } from "@/hooks/usePlaySound";

interface IProjectCardProps {
  index: number;
  name: string;
  description: string;
  slug: string;
  tag: string;
  projectTags: string[];
}

const FALLBACK_IMAGE = "/img/card.svg";

export const ProjectCard: React.FC<IProjectCardProps> = ({
  index,
  name,
  description,
  slug,
  tag,
  projectTags,
}) => {
  const playClickSound = usePlaySound("/audio/glitch.mp3");
  const [imgSrc, setImgSrc] = useState(`/img/${slug}.png`);

  return (
    <div className="grid lg:grid-cols-[45%,50%] gap-[5rem] py-10 items-center gap-y-8">
      <Image
        src={imgSrc}
        alt={name}
        width={653}
        height={438}
        onError={() => setImgSrc(FALLBACK_IMAGE)}
      />
      <div>
        <div className="flex items-center gap-3 mb-3">
          <span className="font-tech text-primary text-xl tracking-[0.2rem]">
            {String(index).padStart(2, "0")}
          </span>
          <span className="font-mono text-secondary text-[0.7rem] uppercase tracking-[0.2rem] pl-4">
            // {tag} 
          </span>
        </div>
        <h2 className="uppercase text-3xl md:text-3xl mb-3 tracking-[0.25rem] font-semibold">
          {name}
        </h2>
        <p>{description}</p>
        <div className="flex flex-wrap gap-2 mt-5 mb-6">
          {projectTags.map((projectTag) => (
            <span
              key={projectTag}
              className="text-primary-dark text-[0.65rem] uppercase tracking-[0.15rem] border border-primary-dark/40 px-3 py-1"
            >
              {projectTag}
            </span>
          ))}
        </div>
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
