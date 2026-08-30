import React from "react";
import Image from "next/image";

import BlockPatternContainer from "./BlockPatternContainer";

export const SectionAbout = () => {
  return (
    <section id="about">
      <div className="container mx-auto grid lg:grid-cols-[35%,65%] lg:py-32 py-10 gap-5 pb-32 lg:pb-[16rem] lg:px-20 px-4">
        {/* avatar */}
        <div className="flex items-center">
          <Image
            src="/img/ceeriil.svg"
            alt="ceeriil nft"
            className="holographic"
            width={504}
            height={573}
          />
        </div>

        {/* card */}
        <div className="bg-[#131313] py-16 pb-5 lg:pb-10 px-8 rounded-t-2xl border-b-8 border-white relative grid-background-alt">
          <div className="bg-[#FFFFFF12] absolute top-0 translate-y-[-70%] translate-x-[-50%] rounded-full w-[32rem] h-[32rem] right-[-35%] blur-[6rem] z-[0]" />
          <div className="relative z-[2]">
            <h2 className="text-2xl mb-6 uppercase font-[500]">About Me</h2>
            <p className="leading-[1.8] mb-6">
              i&apos;m just a dude that build things i find  interesting. sometimes they are useful, the rest of them should have never left locahost. i spend most of my time writing code, thinking about writing code, planning on how to write code and sometmes doing onchain stuff. sometimes i lose money. i like space stuffs maybe i am an alien. i also play lot of chess - i'm not good at it. i dont really have a deep life philosophy or anything.. i just like learning how things works and building things i wish existed.
            </p>
            <BlockPatternContainer />
          </div>
        </div>
      </div>
    </section>
  );
};
