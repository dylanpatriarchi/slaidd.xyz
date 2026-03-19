"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const STEPS = [
  {
    n: "01",
    title: "Parli",
    desc: "Apri Slaidd e parla normalmente. Il microfono del tuo Mac cattura la voce in tempo reale. Nessuna configurazione, nessun plugin.",
    note: "Input · Microfono nativo macOS",
  },
  {
    n: "02",
    title: "Due LLM Elaborano",
    desc: "Il primo LLM trascrive e capisce il contesto semantico di quello che stai dicendo. Il secondo genera istantaneamente il layout della slide.",
    note: "Elaborazione · Dual LLM on-device",
  },
  {
    n: "03",
    title: "Appare",
    desc: "La slide appare sullo schermo mentre stai ancora parlando. Niente attese, niente drag & drop. Il contenuto segue il tuo pensiero.",
    note: "Output · Render immediato",
  },
];

export default function HowItWorks() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from(".step-item", {
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.15,
      scrollTrigger: {
        trigger: container.current,
        start: "top 78%",
        toggleActions: "play none none reverse",
      },
    });
  }, { scope: container });

  return (
    <section
      id="how-it-works"
      ref={container}
      className="py-24 px-4 md:px-8 lg:px-12 border-b border-black"
    >
      <h3 className="text-3xl md:text-5xl font-bold uppercase mb-16 tracking-tighter">
        Come Funziona
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black">
        {STEPS.map((step) => (
          <div key={step.n} className="step-item bg-white p-8 md:p-12 flex flex-col justify-between min-h-[360px]">
            <div>
              <div className="font-mono text-[4rem] md:text-[5rem] font-bold leading-none tracking-tighter opacity-10 mb-6">
                {step.n}
              </div>
              <h4 className="text-2xl md:text-3xl font-bold uppercase tracking-tight mb-5">
                {step.title}
              </h4>
              <p className="font-mono text-sm md:text-base leading-relaxed text-black/70">
                {step.desc}
              </p>
            </div>
            <div className="font-mono text-[10px] uppercase tracking-widest opacity-40 border-t border-black pt-4 mt-8">
              {step.note}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
