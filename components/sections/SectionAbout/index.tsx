import React from "react";
import Image from "next/image";

export const SectionAbout = () => {
  return (
    <section id="#about">
      <div className="container mx-auto grid lg:grid-cols-[30%,70%] py-32 px-16 gap-5 md:pb-[16rem]">
        <div>
          <Image
            src="/img/ceeriil.svg"
            alt="ceeriil nft"
            width={504}
            height={573}
          />
        </div>
        <div className="bg-[#131313] py-16 px-8 rounded-t-2xl border-b-8 border-white">
          <h2 className="text-xl mb-6 uppercase">ABout Me</h2>
          <p>
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
        </div>
      </div>
    </section>
  );
};
