"use client";

import React, { useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import { HomeIcon } from "@/components/assets/HomeIcon";
import { InfoIcon } from "@/components/assets/InfoIcon";
import { BriefCaseIcon } from "@/components/assets/BriefCaseIcon";
import { SocialBlock } from "@/components/social-block";
import { CancelIcon } from "@/components/assets/CancelIcon";

type MenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

const links = [
  { id: 1, link: "home", href: "/", icon: <HomeIcon /> },
  { id: 2, link: "about", href: "#about", icon: <InfoIcon /> },
  { id: 3, link: "portfolio", href: "#portfolio", icon: <BriefCaseIcon /> },
];

export const Menu: React.FC<MenuProps> = ({ isOpen, onClose }) => {
  const handleOutsideClick = useCallback(
    (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest(".menu-inner")) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        document.addEventListener("click", handleOutsideClick);
      }, 100);
    }
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [isOpen, handleOutsideClick]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.3 } }}
          transition={{ duration: 0.3 }}
          className="fixed z-20 top-0 w-full h-full right-0 bottom-0 lg:backdrop-blur-[8px] lg:bg-[#00000040] flex flex-col items-end"
        >
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%", transition: { duration: 0.3 } }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="menu-inner bg-black lg:bg-[#1B1B1B] w-full h-full lg:w-[40%] relative"
          >
            <div className="absolute left-0 translate-x-[-100%] w-12 h-[40%] bottom-0">
              <div className="cut-box bg-[#1B1B1B] w-12 h-full" />
            </div>

            <div className="py-5 px-8 flex justify-between items-center border-b border-[#323232] lg:border-b-0">
              <span className="text-2xl lg:hidden">MENU</span>
              <button
                onClick={onClose}
                type="button"
                className="flex uppercase space-x-3 lg:space-x-0 items-center lg:absolute left-0 top-8 lg:translate-x-[-50%]"
              >
                <span className="text-lg lg:hidden">cancel</span>
                <CancelIcon className="w-14 h-14" />
              </button>
            </div>

            <div className="px-8 pb-6 flex flex-col justify-between flex-1 h-[90%] lg:text-center lg:items-center lg:justify-center">
              <motion.ul className="flex flex-col py-10">
                {links.map(({ id, link, href, icon }, index) => (
                  <motion.li
                    key={id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                    className="px-4 cursor-pointer text-xl font-medium text-white hover:text-white duration-200 my-7 uppercase"
                  >
                    <Link href={href} className="flex space-x-5 items-center">
                      <span>{icon}</span>
                      <span>{link}</span>
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.6, duration: 0.4 }}
              >
                <button
                  className="border-primary text-primary py-2.5 px-6 border-2 mt-4 uppercase text-sm tracking-[0.25rem]"
                  type="button"
                >
                  Get In Touch
                </button>
                <div className="mt-8 text-lg font-medium lg:hidden">
                  <h3 className="uppercase">Socials</h3>
                  <SocialBlock />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
