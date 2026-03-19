"use client";

import { useEffect, useState } from "react";

const CAPACITY = 100;
const INITIAL = 38;

export default function TheQueue() {
  const [count, setCount] = useState(INITIAL);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => Math.min(prev + 1, CAPACITY));
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const pct = Math.round((count / CAPACITY) * 100);

  return (
    <section className="py-24 px-4 md:px-8 lg:px-12 border-b border-black flex flex-col items-center justify-center bg-[#FAFAFA]">
      <div className="text-center w-full max-w-2xl">
        <div className="font-mono text-xs md:text-sm tracking-widest uppercase mb-6 flex items-center justify-center gap-2">
          <span className="w-2 h-2 bg-black rounded-none animate-pulse"></span>
          Slot Beta in Diretta
        </div>

        <div className="text-5xl md:text-8xl font-bold font-mono tracking-tighter tabular-nums">
          {count}
        </div>

        <div className="mt-4 font-mono uppercase tracking-widest text-sm opacity-50">
          / {CAPACITY} slot beta occupati
        </div>

        <div className="mt-10 w-full border border-black h-3 relative overflow-hidden">
          <div
            className="h-full bg-black transition-all duration-[8000ms] ease-linear"
            style={{ width: `${pct}%` }}
          />
        </div>
        <div className="mt-2 flex justify-between font-mono text-xs uppercase tracking-widest opacity-40">
          <span>0</span>
          <span>{pct}% occupato</span>
          <span>{CAPACITY}</span>
        </div>
      </div>
    </section>
  );
}
