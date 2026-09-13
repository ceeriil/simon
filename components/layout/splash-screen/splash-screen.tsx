"use client";

import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { PiCircleFill } from "react-icons/pi";

import { HudButton } from "@/components/ui/Buttons/HudButton";

export const SplashScreen = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [time, setTime] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    if (sessionStorage.getItem("soundConsent") === "true" || pathname !== "/") {
      setIsVisible(false);
    }
  }, [pathname]);

  useEffect(() => {
    const updateTime = () =>
      setTime(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    sessionStorage.setItem("soundConsent", "true");

    const audio = new Audio("/audio/glitch.mp3");
    audio.play();

    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center md:p-24 splash p-4 fixed w-full inset-0 bg-black z-[999999] text-center">
      <div className="jura-font text-white tracking-widest absolute top-6 right-6 md:top-[5rem] md:right-[7rem] font-bold">
        {time}
      </div>
      <div className="relative flex flex-col items-center text-center">
        <div className="inline-flex flex-col items-stretch">
          <h2 className="text-6xl uppercase mb-3 font-bold tracking-wider whitespace-nowrap">
            <span className="text-[#FF9D00]">Simon</span> Ceeriil
          </h2>
          <div className="splash-name-frame flex items-center gap-3 mb-5 -mx-6">
            <span className="splash-name-divider__line" />
            <div className="splash-name-divider" />
            <span className="splash-name-divider__line" />
            <span className="splash-name-frame-bl" />
            <span className="splash-name-frame-br" />
          </div>
        </div>
        <h3 className="uppercase md:text-xl tracking-[0.5rem] text-[0.9rem] leading-[1.7] flex items-center justify-center gap-3">
          <span>Software Engineer</span>
          <PiCircleFill className="text-primary text-[0.4rem]" />
          <span>Web3</span>
          <PiCircleFill className="text-primary text-[0.4rem]" />
          <span>AI</span>
        </h3>
        <p className="mt-4">
          This website uses sound for an immersive experience.
        </p>
        <div className="mt-4">
          <HudButton label="Proceed" onClick={handleClick} />
        </div>
      </div>
    </main>
  );
};
