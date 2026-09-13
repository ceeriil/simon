"use client";

import React from "react";
import { Link } from "next-transition-router";
import { PiArrowRightBold } from "react-icons/pi";

interface IHudButtonProps {
  label: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}

export const HudButton: React.FC<IHudButtonProps> = ({
  label,
  href,
  onClick,
  type = "button",
  disabled,
}) => {
  const content = (
    <>
      <span className="hud-button__label">{label}</span>
      <PiArrowRightBold className="hud-button__arrow" />
    </>
  );

  if (href) {
    return (
      <Link href={href} className="hud-button">
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="hud-button"
    >
      {content}
    </button>
  );
};
