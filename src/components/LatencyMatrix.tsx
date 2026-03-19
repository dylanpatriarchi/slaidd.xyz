"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const SPECS = [
  "RISPOSTA ISTANTANEA", "TEMPO REALE", "AUDIO KERNEL", "ZERO FLICKER",
  "ARM NATIVO", "NESSUN PLUGIN", "WEBSOCKET V2", "TLS END-TO-END",
  "MODALITÀ OFFLINE", "DUAL LLM CHAIN", "LLM LOCALE", "VAD VOCALE",
  "STATO JSON", "ACCEL. GPU", "DESIGN SVIZZERO", "RAGGIO ZERO"
];

export default function LatencyMatrix() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".matrix-cell", {
      opacity: 0,
      scale: 0.88,
      duration: 0.5,
      ease: "power3.out",
      stagger: { each: 0.04, from: "start" },
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  }, { scope: container });

  return (
    <section className="border-b border-black" ref={container}>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-black">
        {SPECS.map((spec, i) => (
          <div
            key={i}
            className="matrix-cell aspect-square bg-white flex flex-col items-start justify-between p-4 md:p-6 lg:p-8 hover:bg-black hover:text-white transition-colors cursor-crosshair group"
          >
            <span className="font-mono text-xs opacity-50 group-hover:opacity-100 transition-opacity">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="font-mono text-sm md:text-base font-bold uppercase tracking-widest leading-none">
              {spec}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
