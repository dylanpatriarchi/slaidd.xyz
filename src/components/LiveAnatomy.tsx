"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const WAVE_DELAYS = [0, 0.15, 0.3, 0.1, 0.25, 0.05, 0.35, 0.2, 0.08, 0.28];

const TRANSCRIPT_LINES = [
  "il mercato delle presentazioni",
  "vale 10 miliardi di dollari...",
  "noi lo stiamo ridefinendo_",
];

const JSON_LINES = [
  '{ "slide": 1,',
  '  "type": "title",',
  '  "h1": "Market Size",',
  '  "body": [...] }',
];

function WaveStation() {
  return (
    <div className="flex-1 bg-black text-white border-r border-white/10 p-6 md:p-8 flex flex-col justify-between min-h-[280px] md:min-h-[340px]">
      <div className="font-mono text-xs tracking-widest opacity-40">01 — VOCE</div>
      <div className="flex flex-col gap-1">
        <div className="flex items-end gap-[3px] h-14">
          {WAVE_DELAYS.map((d, i) => (
            <span
              key={i}
              className="wave-bar w-[6px] bg-white inline-block h-full"
              style={{ animationDelay: `${d}s` }}
            />
          ))}
        </div>
        <div className="font-mono text-xs opacity-40 mt-2 tracking-widest">INPUT AUDIO · VAD ATTIVO</div>
      </div>
      <div className="font-mono text-[10px] uppercase tracking-widest border-t border-white/10 pt-3 opacity-60">
        Microfono nativo · No cloud
      </div>
    </div>
  );
}

function TranscriptStation() {
  return (
    <div className="flex-1 bg-white text-black border-r border-black p-6 md:p-8 flex flex-col justify-between min-h-[280px] md:min-h-[340px]">
      <div className="font-mono text-xs tracking-widest opacity-40">02 — LLM 1</div>
      <div className="flex flex-col gap-1">
        {TRANSCRIPT_LINES.map((line, i) => (
          <p key={i} className="font-mono text-xs md:text-sm leading-relaxed text-black/80">
            {i === TRANSCRIPT_LINES.length - 1 ? (
              <>
                {line.slice(0, -1)}
                <span className="blink-cursor">|</span>
              </>
            ) : line}
          </p>
        ))}
      </div>
      <div className="font-mono text-[10px] uppercase tracking-widest border-t border-black pt-3 opacity-40">
        Trascrizione + analisi semantica
      </div>
    </div>
  );
}

function JsonStation() {
  return (
    <div className="flex-1 bg-white text-black border-r border-black p-6 md:p-8 flex flex-col justify-between min-h-[280px] md:min-h-[340px]">
      <div className="font-mono text-xs tracking-widest opacity-40">03 — LLM 2</div>
      <pre className="font-mono text-xs md:text-sm leading-relaxed text-black/80 whitespace-pre">
        {JSON_LINES.join("\n")}
      </pre>
      <div className="font-mono text-[10px] uppercase tracking-widest border-t border-black pt-3 opacity-40">
        Generazione layout · Istantanea
      </div>
    </div>
  );
}

function SlideStation() {
  return (
    <div className="flex-1 bg-black text-white p-6 md:p-8 flex flex-col justify-between min-h-[280px] md:min-h-[340px]">
      <div className="font-mono text-xs tracking-widest opacity-40">04 — SLIDE</div>
      {/* Minimal slide mockup */}
      <div className="border border-white/20 p-4 flex flex-col gap-2">
        <div className="h-3 bg-white w-2/3" />
        <div className="h-1.5 bg-white/30 w-full mt-1" />
        <div className="h-1.5 bg-white/30 w-5/6" />
        <div className="h-1.5 bg-white/30 w-4/6" />
        <div className="mt-3 grid grid-cols-2 gap-2">
          <div className="h-8 border border-white/20" />
          <div className="h-8 border border-white/20" />
        </div>
      </div>
      <div className="font-mono text-[10px] uppercase tracking-widest border-t border-white/10 pt-3 opacity-60">
        Render immediato · Nessun template
      </div>
    </div>
  );
}

export default function LiveAnatomy() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".anatomy-station", {
      opacity: 0,
      y: 40,
      duration: 0.7,
      ease: "power3.out",
      stagger: 0.12,
      scrollTrigger: {
        trigger: container.current,
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
    });
  }, { scope: container });

  return (
    <section id="live-anatomy" className="py-24 px-4 md:px-8 lg:px-12 border-b border-black">
      <div className="flex flex-col md:flex-row items-start justify-between mb-10 gap-4">
        <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter">
          Pipeline in Diretta
        </h3>
        <p className="font-mono text-xs uppercase tracking-widest opacity-50 md:text-right max-w-xs leading-relaxed">
          Dalla voce alla slide.<br />Tempo medio: &lt; 1 secondo.
        </p>
      </div>

      <div ref={container} className="flex flex-col md:flex-row border border-black overflow-hidden">
        <div className="anatomy-station flex-1 contents md:flex md:flex-row w-full">
          <WaveStation />
          <TranscriptStation />
          <JsonStation />
          <SlideStation />
        </div>
      </div>

      {/* Arrow labels between stations — desktop only */}
      <div className="hidden md:flex mt-3 font-mono text-[10px] uppercase tracking-widest opacity-30">
        <div className="flex-1 text-center">Voce in ingresso</div>
        <div className="flex-1 text-center">→ Testo + Contesto</div>
        <div className="flex-1 text-center">→ Struttura JSON</div>
        <div className="flex-1 text-center">→ Slide Renderizzata</div>
      </div>
    </section>
  );
}
