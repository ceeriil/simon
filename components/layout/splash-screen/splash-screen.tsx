"use client";

import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

export const SplashScreen = () => {
  const [isVisible, setIsVisible] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    if (sessionStorage.getItem("soundConsent") === "true" || pathname !== "/") {
      setIsVisible(false);
    }
  }, [pathname]);

  const handleClick = () => {
    sessionStorage.setItem("soundConsent", "true");

    const audio = new Audio("/audio/glitch.mp3");
    audio.play();

    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center md:p-24 splash p-4 fixed w-full inset-0 bg-black z-[999999] text-center">
      <div className="relative flex flex-col items-center text-center">
        <h2 className="text-5xl uppercase mb-5 font-medium tracking-wider">
          Cee<span className="text-primary">riil</span>
        </h2>
        <h3 className="uppercase md:text-xl tracking-[0.5rem] text-[0.9rem] leading-[1.7]">
          Web 3 Frontend developer
        </h3>
        <p className="mt-4">
          This website uses sound for an immersive experience.
        </p>
        <button
          type="button"
          onClick={handleClick}
          className="border-primary text-primary py-2.5 px-7 border-2 mt-4 uppercase text-sm cursor-pointer jura-font tracking-widest"
        >
          Proceed
        </button>
      </div>
    </main>
  );
};
