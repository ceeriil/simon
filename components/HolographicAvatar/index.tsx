"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const HolographicAvatar = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative w-32 h-32 rounded-lg overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Avatar Image */}
      <motion.img
        src="/img/ceeriil.svg" // Replace with your actual image
        alt="Holographic Avatar"
        className="w-full h-full object-cover"
        animate={isHovered ? "hover" : "initial"}
        variants={{
          initial: { opacity: 1, filter: "none", x: 0 },
          hover: {
            opacity: [1, 0.8, 1, 0.9],
            filter: ["none", "hue-rotate(10deg)", "hue-rotate(-10deg)", "none"],
            x: [0, -2, 2, 0],
            transition: {
              duration: 0.4,
              repeat: Infinity,
              repeatType: "mirror",
            },
          },
        }}
        transition={{ duration: 0.1, repeat: Infinity, repeatType: "mirror" }}
      />

      {/* Scan Line Effect */}
      {isHovered && (
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-transparent via-white/10 to-transparent"
          animate={{ y: ["-100%", "100%"] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        />
      )}
    </motion.div>
  );
};

export default HolographicAvatar;
