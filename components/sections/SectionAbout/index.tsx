"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

import BlockPatternContainer from "./BlockPatternContainer";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText, ScrambleTextPlugin);

// =====================================
// ⬢ Constants
// =====================================
const SCRAMBLE_CHARS = "01<>/_[]{}#$";
const TILT_MAX = 7; // deg
const FLOAT_DIST = 8; // px

// play in (both directions), idle out:  onEnter onLeave onEnterBack onLeaveBack
const TOGGLE_ACTIONS = "restart none restart none";

// =====================================
// ⬢ Main
// =====================================
export const SectionAbout = () => {
  // ── refs ──
  const sectionRef = useRef<HTMLElement>(null);
  const floatRef = useRef<HTMLDivElement>(null); // outer: idle float
  const tiltRef = useRef<HTMLDivElement>(null); // inner: mouse tilt
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paraRef = useRef<HTMLParagraphElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // ── idle float (independent loop, never tied to scroll) ──
        const floatTween = gsap.to(floatRef.current, {
          y: -FLOAT_DIST,
          duration: 3,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });

        // ── one master timeline = one thing toggleActions can replay ──
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            end: "bottom 25%",
            toggleActions: TOGGLE_ACTIONS,
          },
        });

        // avatar slide-in
        tl.from(floatRef.current, {
          x: -40,
          autoAlpha: 0,
          duration: 0.9,
          ease: "power3.out",
        });

        // heading scramble (overlaps the slide tail)
        tl.to(
          headingRef.current,
          {
            duration: 1.1,
            scrambleText: { text: "About Me", chars: SCRAMBLE_CHARS, speed: 0.4 },
          },
          "-=0.4"
        );

        // ── paragraph lines: split once, replay via the same timeline ──
        // fonts.ready avoids split-before-font-load line mangling
        document.fonts.ready.then(() => {
          const split = SplitText.create(paraRef.current, {
            type: "lines",
            mask: "lines",
            autoSplit: true,
          });

          tl.from(
            split.lines,
            {
              yPercent: 110,
              autoAlpha: 0,
              duration: 0.7,
              stagger: 0.06,
              ease: "power3.out",
            },
            "-=0.6"
          );

          // timeline length changed after async split — recalc trigger bounds
          ScrollTrigger.refresh();
        });

        // ── tilt: quickTo lerped rotation, scoped to the card ──
        const rotX = gsap.quickTo(tiltRef.current, "rotationX", { duration: 0.5, ease: "power3" });
        const rotY = gsap.quickTo(tiltRef.current, "rotationY", { duration: 0.5, ease: "power3" });

        const onMove = (e: MouseEvent) => {
          const el = tiltRef.current;
          if (!el) return;
          const r = el.getBoundingClientRect();
          const nx = (e.clientX - r.left) / r.width - 0.5; // -0.5 → 0.5
          const ny = (e.clientY - r.top) / r.height - 0.5;
          rotY(nx * TILT_MAX * 2);
          rotX(-ny * TILT_MAX * 2);
        };
        const onLeave = () => {
          rotX(0);
          rotY(0);
        };

        const el = tiltRef.current;
        el?.addEventListener("mousemove", onMove);
        el?.addEventListener("mouseleave", onLeave);

        // ── cleanup ──
        return () => {
          floatTween.kill();
          el?.removeEventListener("mousemove", onMove);
          el?.removeEventListener("mouseleave", onLeave);
        };
      });
    },
    { scope: sectionRef }
  );

  // ── render ──
  return (
    <section id="about" ref={sectionRef}>
      <div className="container mx-auto grid lg:grid-cols-[35%,65%] lg:py-32 py-10 gap-5 pb-32 lg:pb-[16rem] lg:px-20 px-4">
        {/* avatar: float wrapper → tilt wrapper → image */}
        <div className="flex items-center" style={{ perspective: "900px" }}>
          <div ref={floatRef} className="will-change-transform">
            <div ref={tiltRef} className="will-change-transform" style={{ transformStyle: "preserve-3d" }}>
              <Image
                src="/img/ceeriil.svg"
                alt="ceeriil nft"
                className="holographic"
                width={504}
                height={573}
              />
            </div>
          </div>
        </div>

        {/* card */}
        <div className="bg-[#131313] py-16 pb-5 lg:pb-10 px-8 rounded-t-2xl border-b-8 border-white relative grid-background-alt">
          <div className="bg-[#FFFFFF12] absolute top-0 translate-y-[-70%] translate-x-[-50%] rounded-full w-[32rem] h-[32rem] right-[-35%] blur-[6rem] z-[0]" />
          <div className="relative z-[2]">
            <h2 ref={headingRef} className="text-2xl mb-6 uppercase font-[500]">
              About Me
            </h2>
            <p ref={paraRef} className="leading-[1.8] mb-6">
              i&apos;m just a dude that build things i find  interesting. sometimes they are useful, the rest of them should have never left locahost. i spend most of my time writing code, thinking about writing code, planning on how to write code and sometmes doing onchain stuff. sometimes i lose money. i like space stuffs maybe i am an alien. i also play lot of chess - i'm not good at it. i dont really have a deep life philosophy or anything.. i just like learning how things works and building things i wish existed.
            </p>
            <BlockPatternContainer />
          </div>
        </div>
      </div>
    </section>
  );
};