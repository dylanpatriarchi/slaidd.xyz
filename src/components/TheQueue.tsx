"use client";

import { useEffect, useState } from "react";

export default function TheQueue() {
  const [count, setCount] = useState(4821);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + Math.floor(Math.random() * 3));
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 px-4 md:px-8 lg:px-12 border-b border-black flex flex-col items-center justify-center bg-[#FAFAFA]">
      <div className="text-center">
        <div className="font-mono text-xs md:text-sm tracking-widest uppercase mb-6 flex items-center justify-center gap-2">
          <span className="w-2 h-2 bg-pureblue rounded-none animate-pulse"></span>
          Stato Coda in Diretta
        </div>
        <div className="text-5xl md:text-8xl font-bold font-mono tracking-tighter">
          {count.toLocaleString('it-IT')}
        </div>
        <div className="mt-4 font-mono uppercase tracking-widest text-sm opacity-50">
          Richieste in Attesa di Elaborazione
        </div>
      </div>
    </section>
  );
}
