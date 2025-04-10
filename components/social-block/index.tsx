"use client";

import Link from "next/link";
import React from "react";

import { socialLinks } from "./socalLinks";
import { usePlaySound } from "@/hooks/usePlaySound";

export const SocialBlock = () => {
  const playClickSound = usePlaySound("/audio/glitch.mp3");

  return (
    <ul className="flex gap-x-4 lg:flex-col">
      {socialLinks.map(social => (
        <li key={social.name} className="my-4 hover:scale-105 duration-200">
          <Link
            href={social.href}
            target="blank_"
            onMouseEnter={playClickSound}
            onClick={playClickSound}
          >
            {social.icon}
          </Link>
        </li>
      ))}
    </ul>
  );
};
