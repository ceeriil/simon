"use client";

import React, { useCallback, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ContactForm } from "./ContactForm";
import { CancelIcon } from "../assets/CancelIcon";

interface IContactProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Contact: React.FC<IContactProps> = ({ isOpen, onClose }) => {
  const handleOutsideClick = useCallback(
    (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest(".contact-inner")) {
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
          animate={{ opacity: isOpen ? 1 : 0 }}
          exit={{ opacity: 0 }}
          className="fixed z-20 top-0 w-full h-full right-0 bottom-0 lg:backdrop-blur-[8px] lg:bg-[#00000040] flex flex-col items-center justify-center"
        >
          {/* Lines with animations */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
            className="absolute top-0 border-l left-[15%] h-full border-[#727272]  z-[11] origin-top"
          />
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
            className="absolute bottom-0 border-l right-[15%] h-full border-[#727272]  z-[11] origin-bottom"
          />
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            exit={{ scaleX: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
            className="absolute top-[15%] border-b left-0 w-full border-[#727272] z-[11] origin-left"
          />
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            exit={{ scaleX: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
            className="absolute bottom-[15%] border-b left-0 w-full border-[#727272]  z-[11] origin-right"
          />

          {/* Contact Box */}
          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full flex flex-col items-center justify-center relative h-full contact-box"
          >
            <div className="lg:w-[70%] h-[70%] bg-[#171717] p-6 px-12 pb-12 relative overflow-hidden contact-inner">
              <div className="z-[10] relative">
                <div className="py-6 flex justify-between items-center">
                  <span className="text-2xl uppercase font-semibold">
                    Let’s get started
                  </span>
                  <button
                    onClick={onClose}
                    className="flex uppercase space-x-3 items-center"
                  >
                    <span className="text-lg">cancel</span>
                    <CancelIcon />
                  </button>
                </div>
                <ContactForm />
              </div>

              <div className="bg-[#4AFFA420] absolute top-0 translate-y-[-70%] translate-x-[-50%] rounded-full w-[40rem] h-[40rem] left-[50%] blur-[10rem] z-[0]" />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
