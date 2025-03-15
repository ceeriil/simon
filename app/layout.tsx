import type { Metadata } from "next";
import { Jura } from "next/font/google";

import "../styles/globals.scss";

import AudioPlayer from "@/components/AudioPlayer";

import { Providers } from "./providers";

const jura = Jura({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "Ceeriil",
  description: "Portfolio of Developer Ceeriil",
};

const songs = [
  {
    title: "Can you feel my heart",
    artist: "Yung Kage, Yumi, Softwilly, Larry Crotch",
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
      <body className={jura.className}>
        <Providers>
          {children}
          <AudioPlayer songs={songs} />
        </Providers>
      </body>
    </html>
  );
}
