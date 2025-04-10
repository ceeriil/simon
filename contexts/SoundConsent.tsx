"use client";

import { createContext, useContext, useState, useEffect } from "react";

type SoundConsentContextType = {
  hasConsented: boolean;
  giveConsent: () => void;
};

const SoundConsentContext = createContext<SoundConsentContextType | undefined>(
  undefined
);

export const SoundConsentProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [hasConsented, setHasConsented] = useState(false);

  useEffect(() => {
    const storedConsent = sessionStorage.getItem("soundConsent");
    const expiry = sessionStorage.getItem("soundConsentExpiry");

    if (
      storedConsent === "true" &&
      expiry &&
      Date.now() < parseInt(expiry, 10)
    ) {
      setHasConsented(true);
    } else {
      sessionStorage.removeItem("soundConsent");
      sessionStorage.removeItem("soundConsentExpiry");
    }
  }, []);

  const giveConsent = () => {
    const expirationTime = Date.now() + 60 * 60 * 1000; // 1 hour expiration
    sessionStorage.setItem("soundConsent", "true");
    sessionStorage.setItem("soundConsentExpiry", expirationTime.toString());
    setHasConsented(true);
  };

  return (
    <SoundConsentContext.Provider value={{ hasConsented, giveConsent }}>
      {children}
    </SoundConsentContext.Provider>
  );
};

export const useSoundConsent = () => {
  const context = useContext(SoundConsentContext);
  if (!context) {
    throw new Error(
      "useSoundConsent must be used within a SoundConsentProvider"
    );
  }
  return context;
};
