"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function TheQueue() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from(".queue-content", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: container.current,
        start: "top 78%",
        toggleActions: "play none none reverse",
      },
    });
  }, { scope: container });

  return (
    <section ref={container} className="py-24 px-4 md:px-8 lg:px-12 border-b border-black bg-[#FAFAFA]">
      <div className="queue-content grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-4 items-end">
        <div>
          <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter mb-6">
            Lista d&apos;Attesa
          </h3>
          <p className="font-mono text-sm leading-relaxed opacity-60 max-w-md">
            Slaidd è in sviluppo. Stiamo costruendo qualcosa che non esiste ancora.
            Iscriviti per essere tra i primi ad accedere quando saremo pronti.
          </p>
        </div>
        <div className="flex flex-col gap-4 md:items-end">
          <div className="font-mono text-[5rem] md:text-[7rem] font-bold leading-none tracking-tighter">
            38
          </div>
          <div className="font-mono text-xs uppercase tracking-widest opacity-40 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-black animate-pulse inline-block" />
            persone già in lista
          </div>
        </div>
      </div>
    </section>
  );
}
