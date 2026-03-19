"use client";

import { useEffect, useState } from "react";

const BASE_LINES = [
  '  "pipeline": "slaidd-core-v1",',
  '  "status": "active",',
  '  "sync_mode": "real-time",',
  '  "llm_1": "trascrizione + contesto",',
  '  "llm_2": "generazione layout",',
  '  "render": "instant",',
  '  "state": "synthesizing",',
];

export default function TheEngine() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [timestamp, setTimestamp] = useState("");
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const el = document.getElementById("engine-section");
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTriggered(true); },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!triggered) return;
    let i = 0;
    const iv = setInterval(() => {
      i++;
      setVisibleLines(i);
      if (i >= BASE_LINES.length) clearInterval(iv);
    }, 80);
    return () => clearInterval(iv);
  }, [triggered]);

  useEffect(() => {
    const update = () => setTimestamp(new Date().toISOString());
    update();
    const iv = setInterval(update, 1000);
    return () => clearInterval(iv);
  }, []);

  const payload =
    "{\n" +
    BASE_LINES.slice(0, visibleLines).join("\n") +
    (visibleLines >= BASE_LINES.length
      ? `\n  "ts": "${timestamp}"\n}`
      : visibleLines > 0
      ? "\n  ..."
      : "");

  return (
    <section id="engine-section" className="bg-black text-white py-24 px-4 md:px-8 lg:px-12 border-b border-white">
      <div className="grid grid-cols-12 gap-8 md:gap-4 h-full items-center">
        <div className="col-span-12 md:col-span-6 lg:col-span-5 flex flex-col justify-center">
          <h3 className="text-4xl md:text-6xl font-bold uppercase mb-6 tracking-tighter">
            Il Motore<br />(Bento)
          </h3>
          <p className="text-lg md:text-xl font-mono mb-8 leading-relaxed max-w-xl">
            La voce entra come audio grezzo. Un primo LLM trascrive e interpreta il contesto. Un secondo LLM genera il layout della slide in tempo reale.
          </p>
          <div className="font-mono text-sm uppercase tracking-widest text-white/60">
            STATO: ATTIVO <br />
            BUFFER: 0.0% PERSI
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-7">
          <div className="border border-white/20 bg-white/5 p-6 md:p-8 relative overflow-x-auto lg:ml-12">
            <div className="absolute top-0 right-0 p-3 font-mono text-xs opacity-50 uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-white rounded-none animate-pulse inline-block" />
              kernel.log
            </div>
            <pre className="font-mono text-sm md:text-base text-white/80 whitespace-pre">
              <code>{payload}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
