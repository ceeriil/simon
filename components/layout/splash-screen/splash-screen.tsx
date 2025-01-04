import React from "react";
import Image from "next/image";

export const SplashScreen = () => {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center p-24"
      style={{
        background: `url("/img/bg-temp.svg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-[#5FFFAF1F] before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#5FFFAF1F] after:dark:opacity-40 before:lg:h-[360px] z-[-1] flex-col">
        <div className="text-6xl uppercase mb-5 ">Ceeriil</div>
        <p className="uppercase text-xl tracking-[0.5rem]">
          Web 3 Frontend developer
        </p>
      </div>
    </main>
  );
};
