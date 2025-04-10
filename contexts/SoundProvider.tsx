"use client";

import { createContext, useContext, useState, useMemo } from "react";

type SoundContextType = {
  isMuted: boolean;
  toggleSound: () => void;
};

const SoundContext = createContext<SoundContextType | undefined>(undefined);

export const SoundProvider = ({ children }: { children: React.ReactNode }) => {
  const [isMuted, setIsMuted] = useState(false);

  const toggleSound = () => {
    setIsMuted(prev => !prev);
  };

  const value = useMemo(() => ({ isMuted, toggleSound }), [isMuted]);

  return (
    <SoundContext.Provider value={value}>{children}</SoundContext.Provider>
  );
};

export const useSound = () => {
  const context = useContext(SoundContext);
  if (!context) {
    throw new Error("useSound must be used within a SoundProvider");
  }
  return context;
};
