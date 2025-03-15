"use client";

import React, { useState } from "react";
import Link from "next/link";

import { Menu } from "../Menu";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="container mx-auto lg:py-5 py-4 flex justify-between uppercase px-5 border-b border-[#202020] md:border-b-0 items-center">
        <Link href="/" className="inline-block tracking-widest font-medium">
          {" "}
          Ceeriil
        </Link>
        <div>
          <button
            type="button"
            className="bg-white inline-block py-2 px-5 text-black uppercase hover:opacity-80
"
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
