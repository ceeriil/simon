"use client";
import { SectionBg } from "@/components/assets/Sectionbg";
import { SmilingFace } from "@/components/assets/SmilingFace";
import { Contact } from "@/components/Contact";
import React, { useState } from "react";

export const SectionGetStarted = () => {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <section className="flex items-center justify-center py-24 text-center flex-col mb-32 mt-28 relative  overflow-hidden ">
        <div className="relative z-[2] flex items-center justify-center flex-col">
          <SmilingFace />
          <h2 className="text-[4rem] uppercase font-[600] mt-6 leading-[1.3]">
            Ready to build <br /> your next project?
          </h2>
          <button
            className="border-[#4AFFA4] text-[#4AFFA4] py-3 px-6 border-2 mt-12 uppercase text-sm inline-block tracking-[0.3rem] cursor-pointer "
            onClick={() => setContactOpen(true)}
          >
            <span className="">Yes, Let’s Get Started</span>
          </button>
        </div>
        <div className="absolute overflow-hidden opacity-70 left-0 right-0 ">
          <SectionBg />
        </div>
      </section>
      <Contact isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
};
