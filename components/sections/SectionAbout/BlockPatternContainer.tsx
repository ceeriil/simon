"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

// =====================================
// ⬢ Constants
// =====================================
const PATTERN = [
  "w", "s", "m", "xs", "xs", "xs", "xs", "xs", "w", "xs", "xs", "xs",
  "xs", "xs", "xs", "s", "s", "xs", "xs", "xs", "xs", "xs", "xs", "w",
  "xs", "xs", "xs", "xs", "xs", "xs", "w", "s", "w-lg", "s", "m", "xs",
  "xs", "xs", "w", "xs", "xs", "xs", "xs", "xs", "xs",
] as const;

const WIDTHS: Record<string, number> = {
  xs: 6,
  s: 12,
  m: 18,
  w: 24,
  "w-lg": 36,
};

const FLICKER_INTERVAL: [number, number] = [1.5, 4]; // seconds between flickers

// =====================================
// ⬢ Main
// =====================================
const BlockPatternContainer: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const blocks = gsap.utils.toArray<HTMLDivElement>(".hud-block");

      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // ── boot sequence: left → right fill on scroll entry ──
        gsap.from(blocks, {
          scaleX: 0,
          transformOrigin: "left center",
          duration: 0.4,
          ease: "power2.out",
          stagger: { each: 0.018, from: "start" },
          scrollTrigger: { trigger: containerRef.current, start: "top 85%", once: true },
        });

        // ── idle flicker: random blocks dip opacity, forever ──
        const flicker = () => {
          const target = gsap.utils.random(blocks);
          gsap.to(target, {
            opacity: gsap.utils.random(0.25, 0.55),
            duration: 0.12,
            yoyo: true,
            repeat: 1,
            onComplete: () => gsap.set(target, { opacity: 1 }),
          });
          gsap.delayedCall(gsap.utils.random(...FLICKER_INTERVAL), flicker);
        };
        const boot = gsap.delayedCall(2, flicker);

        return () => {
          boot.kill();
          gsap.killTweensOf(blocks);
        };
      });
    },
    { scope: containerRef }
  );

  // ── render ──
  return (
    <div ref={containerRef} className="flex items-center w-full bg-[#111111] py-4">
      {PATTERN.map((size, i) => (
        <div
          key={i}
          className="hud-block mx-[3px] h-3 bg-[#666]"
          style={{ width: WIDTHS[size] ?? 6 }}
        />
      ))}
    </div>
  );
};

export default BlockPatternContainer;