"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const CASES = [
  {
    title: "Pitch per Investitori",
    desc: "Presenti a investitori tier-1. Il deck si costruisce mentre narri il business — mercato, traction, team. Niente più \"ho una slide per questo tra poco\". Appare esattamente quando ne parli.",
    cols: "col-span-12 md:col-span-7",
    tag: "Startup · Fundraising",
  },
  {
    title: "Lezioni Universitarie",
    desc: "Spieghi un concetto complesso. Slaidd genera schemi, bullet point e titoli in tempo reale. Gli studenti vedono il contenuto materializzarsi mentre parli.",
    cols: "col-span-12 md:col-span-5",
    tag: "Education · Live",
  },
  {
    title: "Briefing Aziendali",
    desc: "Hai 10 minuti per allineare il team su un progetto. Parli, Slaidd costruisce la struttura del briefing al volo — obiettivi, roadmap, rischi. Zero preparazione preventiva.",
    cols: "col-span-12",
    tag: "Business · Internal",
  },
];

export default function UseCaseChronicles() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from(".case-card", {
      opacity: 0,
      y: 40,
      duration: 0.7,
      ease: "power3.out",
      stagger: 0.1,
      scrollTrigger: {
        trigger: container.current,
        start: "top 78%",
        toggleActions: "play none none reverse",
      },
    });
  }, { scope: container });

  return (
    <section id="use-case" ref={container} className="py-24 px-4 md:px-8 lg:px-12 border-b border-black">
      <h3 className="text-3xl md:text-5xl font-bold uppercase mb-12 tracking-tighter">Chi Usa Slaidd</h3>
      <div className="grid grid-cols-12 gap-4">
        {CASES.map((c, i) => (
          <div
            key={i}
            className={`case-card ${c.cols} border border-black p-8 md:p-12 hover:bg-black hover:text-white transition-colors duration-300 flex flex-col justify-between min-h-[300px] group`}
          >
            <div className="font-mono text-[10px] uppercase tracking-widest opacity-40 group-hover:opacity-70 transition-opacity mb-8">
              {c.tag}
            </div>
            <div>
              <h4 className="text-2xl md:text-4xl font-bold uppercase mb-4 tracking-tight">{c.title}</h4>
              <p className="text-sm md:text-base font-mono leading-relaxed opacity-70 group-hover:opacity-100">{c.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
