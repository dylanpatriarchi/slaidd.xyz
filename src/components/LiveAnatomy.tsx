"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);
}

export default function LiveAnatomy() {
  const svgRef = useRef<SVGSVGElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: svgRef.current,
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
    });

    tl.from("#box-1", { opacity: 0, x: -40, duration: 0.45, ease: "power3.out" })
      .from("#box-2", { opacity: 0, y: 30,  duration: 0.45, ease: "power3.out" }, "-=0.15")
      .from("#box-3", { opacity: 0, y: 30,  duration: 0.45, ease: "power3.out" }, "-=0.15")
      .from("#box-4", { opacity: 0, x: 40,  duration: 0.45, ease: "power3.out" }, "-=0.15")
      .fromTo("#arr-1", { drawSVG: "0%" }, { drawSVG: "100%", duration: 0.3, ease: "none" }, "-=0.1")
      .fromTo("#arr-2", { drawSVG: "0%" }, { drawSVG: "100%", duration: 0.3, ease: "none" }, "-=0.05")
      .fromTo("#arr-3", { drawSVG: "0%" }, { drawSVG: "100%", duration: 0.3, ease: "none" }, "-=0.05")
      .to("#pulse-dot", { scale: 1.8, opacity: 0.3, repeat: -1, yoyo: true, duration: 0.9, ease: "sine.inOut" }, "-=0.1");
  }, { scope: svgRef });

  return (
    <section className="py-24 px-4 md:px-8 lg:px-12 border-b border-black">
      <h3 className="text-3xl md:text-5xl font-bold uppercase mb-12 tracking-tighter">
        Anatomia in Diretta
      </h3>
      <div className="w-full aspect-square sm:aspect-video md:aspect-[21/9] border border-black p-4 flex items-center justify-center relative bg-white">
        <svg
          ref={svgRef}
          className="w-full h-full"
          viewBox="0 0 1100 400"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(0,0,0,0.06)" strokeWidth="1" />
            </pattern>
            <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="black" />
            </marker>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />

          {/* 1 — Acquisizione Voce */}
          <g id="box-1">
            <rect x="30" y="155" width="190" height="90" fill="black" />
            <text x="125" y="196" fill="white" fontSize="13" fontFamily="monospace" textAnchor="middle" fontWeight="bold">ACQUISIZIONE</text>
            <text x="125" y="214" fill="white" fontSize="13" fontFamily="monospace" textAnchor="middle" fontWeight="bold">VOCE</text>
          </g>

          {/* 2 — LLM 1: Trascrizione */}
          <g id="box-2">
            <rect x="290" y="155" width="190" height="90" fill="white" stroke="black" strokeWidth="2" />
            <text x="385" y="192" fill="black" fontSize="12" fontFamily="monospace" textAnchor="middle">LLM 1</text>
            <text x="385" y="212" fill="black" fontSize="11" fontFamily="monospace" textAnchor="middle">TRASCRIZIONE +</text>
            <text x="385" y="228" fill="black" fontSize="11" fontFamily="monospace" textAnchor="middle">CONTESTO</text>
          </g>

          {/* 3 — LLM 2: Layout */}
          <g id="box-3">
            <rect x="550" y="155" width="190" height="90" fill="white" stroke="black" strokeWidth="2" />
            <text x="645" y="192" fill="black" fontSize="12" fontFamily="monospace" textAnchor="middle">LLM 2</text>
            <text x="645" y="212" fill="black" fontSize="11" fontFamily="monospace" textAnchor="middle">GENERAZIONE</text>
            <text x="645" y="228" fill="black" fontSize="11" fontFamily="monospace" textAnchor="middle">LAYOUT</text>
            <circle id="pulse-dot" cx="645" cy="272" r="5" fill="black" />
          </g>

          {/* 4 — Output Slide */}
          <g id="box-4">
            <rect x="810" y="155" width="250" height="90" fill="black" />
            <text x="935" y="196" fill="white" fontSize="13" fontFamily="monospace" textAnchor="middle" fontWeight="bold">OUTPUT</text>
            <text x="935" y="214" fill="white" fontSize="13" fontFamily="monospace" textAnchor="middle" fontWeight="bold">SLIDE</text>
          </g>

          {/* Arrows */}
          <path id="arr-1" d="M 220 200 L 285 200" stroke="black" strokeWidth="2" fill="none" markerEnd="url(#arrow)" />
          <path id="arr-2" d="M 480 200 L 545 200" stroke="black" strokeWidth="2" fill="none" markerEnd="url(#arrow)" />
          <path id="arr-3" d="M 740 200 L 805 200" stroke="black" strokeWidth="2" fill="none" markerEnd="url(#arrow)" />
        </svg>
      </div>
    </section>
  );
}
