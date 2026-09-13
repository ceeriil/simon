"use client";

import React, { useState } from "react";
import Link from "next/link";

import { Menu } from "../Menu";
import { MenuButton } from "@/components/ui/Buttons/MenuButton";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="container mx-auto lg:py-5 py-4 flex justify-between uppercase px-5 border-b border-[#202020] md:border-b-0 items-center">
        <Link href="/" className="inline-block tracking-widest font-medium">
          {" "}
          Ceeriil
        </Link>
        <MenuButton onClick={() => setMenuOpen(true)} />
      </div>
      <Menu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
};
