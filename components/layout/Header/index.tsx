"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu } from "../Menu";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="container mx-auto py-5 flex justify-between uppercase px-5 border-b border-[#202020] md:border-b-0">
        <Link href={"/"}> Ceeriil</Link>
        <div>
          <button
            className="bg-white inline-block py-2 px-5 text-black uppercase"
            onClick={() => setMenuOpen(true)}
          >
            Menu
          </button>
        </div>
      </div>
      <Menu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
};
