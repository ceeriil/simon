import type { Metadata } from "next";
import {
  Jura,
  Chakra_Petch as ChakraPetch,
  Roboto_Mono as RobotoMono,
  Share_Tech_Mono as ShareTechMono,
} from "next/font/google";

import "../styles/globals.scss";

import AudioPlayer from "@/components/AudioPlayer";
import { SoundProvider } from "@/contexts/SoundProvider";
import { SoundConsentProvider } from "@/contexts/SoundConsent";
import { SplashScreen } from "@/components/layout/splash-screen/splash-screen";
import SmoothScrolling from "@/components/utils/smooth-scrolling/smooth-scrolling";

import { Providers } from "./providers";

const jura = Jura({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
  variable: "--jura-font",
});

const chakraPetch = ChakraPetch({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
  adjustFontFallback: false,
  variable: "--chakraPetch-font",
});

const robotoMono = RobotoMono({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
  adjustFontFallback: false,
  variable: "--mono-font",
});

const shareTechMono = ShareTechMono({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  adjustFontFallback: false,
  variable: "--share-tech-mono-font",
});

export const metadata: Metadata = {
  title: "Ceeriil",
  description: "Portfolio of Developer Ceeriil",
};

const songs = [
  {
    title: "Cyberpunk",
    artist: "TrueTrove",
    url: "/audio/cyberpunk.mp3",
  },
  {
    title: "Can you feel my heart",
    artist: "Bring Me the Horizon",
    url: "/audio/guitars.mp3",
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${chakraPetch.className} ${chakraPetch.variable} ${jura.variable} ${robotoMono.variable} ${shareTechMono.variable}`}
      >
        <SmoothScrolling>
          <Providers>
            <SoundConsentProvider>
              <SoundProvider>
                <SplashScreen />
                {children}
                <AudioPlayer songs={songs} />
              </SoundProvider>
            </SoundConsentProvider>
          </Providers>
        </SmoothScrolling>
      </body>
    </html>
  );
}
