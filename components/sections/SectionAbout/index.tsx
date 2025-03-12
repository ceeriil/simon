import React from "react";
import Image from "next/image";
import BlockPatternContainer from "./BlockPatternContainer";

export const SectionAbout = () => {
  return (
    <section id="#about">
      <div className="container mx-auto grid lg:grid-cols-[30%,70%] lg:py-32 py-10 lg:px-24 gap-5 lg:pb-[16rem] px-5">
        <div className="flex items-center">
          <Image
            src="/img/ceeriil.svg"
            alt="ceeriil nft"
            width={504}
            height={573}
          />
        </div>
        <div className="bg-[#131313] py-16 pb-10 px-8 rounded-t-2xl border-b-8 border-white relative  grid-background-alt">
          <div className="bg-[#FFFFFF12] absolute top-0 translate-y-[-70%] translate-x-[-50%] rounded-full w-[32rem] h-[32rem] right-[-35%] blur-[6rem] z-[0]" />
          <h2 className="text-2xl mb-6 uppercase font-[500]">About Me</h2>
          <p className="leading-[1.8] mb-6">
            I’m a creative frontend developer with a passion for crafting
            engaging and visually appealing web experiences. With a keen eye for
            design and a deep understanding of modern web technologies, I
            specialize in building intuitive, user-friendly interfaces. My
            experience spans across various industries, from finance to fashion,
            blending functionality with aesthetics to create standout digital
            experiences. I have a particular interest in Web3, working on
            innovative projects that merge blockchain technology with
            cutting-edge UI/UX principles. Let’s build the future, one pixel at
            a time.
          </p>
          <BlockPatternContainer />
        </div>
      </div>
    </section>
  );
};
