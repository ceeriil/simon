"use client";

import React from "react";
import { PiSquaresFourBold } from "react-icons/pi";

interface IMenuButtonProps {
  onClick: () => void;
}

export const MenuButton: React.FC<IMenuButtonProps> = ({ onClick }) => {
  return (
    <button type="button" onClick={onClick} className="menu-button">
      <span className="menu-button__inner">
        <span className="menu-button__label">Menu</span>
        <PiSquaresFourBold className="menu-button__icon" />
      </span>
    </button>
  );
};
