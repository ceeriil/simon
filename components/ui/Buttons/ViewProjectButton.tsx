"use client";

import React from "react";
import { Link } from "next-transition-router";
import { PiArrowRightBold } from "react-icons/pi";

interface IViewProjectButtonProps {
  href: string;
}

export const ViewProjectButton: React.FC<IViewProjectButtonProps> = ({
  href,
}) => {
  return (
    <Link href={href} className="hud-button">
      <span className="hud-button__label">View Project</span>
      <PiArrowRightBold className="hud-button__arrow" />
    </Link>
  );
};
