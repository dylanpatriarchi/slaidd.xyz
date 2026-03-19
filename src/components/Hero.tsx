"use client";

import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Hero() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" }, delay: 0.9 });

    tl.from(".hero-line", { yPercent: 110, duration: 1, stagger: 0.1 })
      .from(".hero-form", { opacity: 0, y: 14, duration: 0.6 }, "-=0.4")
      .from(".hero-meta", { opacity: 0, duration: 0.5 }, "-=0.3");
  }, { scope: container });

  const handleSubmit = async (e: { preventDefault(): void; currentTarget: HTMLFormElement }) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) setSuccess(true);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="hero"
      ref={container}
      className="h-[100dvh] overflow-hidden flex flex-col justify-between px-4 md:px-8 lg:px-12 pt-10 pb-8 border-b border-black"
    >
      {/* Title */}
      <div className="flex-1 flex items-center">
        <h1 className="text-[9vw] sm:text-[8vw] leading-[0.88] font-bold tracking-tighter uppercase">
          {["Parla.", "Le Slide", "Ti Seguono."].map((line) => (
            <span key={line} className="block overflow-hidden">
              <span className="hero-line block">{line}</span>
            </span>
          ))}
        </h1>
      </div>

      {/* Bottom bar: form + meta */}
      <div className="flex flex-col gap-4">
        <div className="hero-form max-w-2xl">
          {success ? (
            <div className="font-mono text-sm uppercase tracking-widest border border-black p-5 bg-black text-white">
              [ RICHIESTA RICEVUTA. AVVIO DEL KERNEL. ]
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row w-full border border-black"
            >
              <input
                name="email"
                type="email"
                placeholder="EMAIL — ACCESSO ANTICIPATO"
                className="flex-1 px-4 py-4 bg-transparent outline-none placeholder:text-black/40 font-mono text-xs sm:text-sm uppercase border-b sm:border-b-0 sm:border-r border-black"
                required
                disabled={loading}
              />
              <button
                type="submit"
                disabled={loading}
                className="px-8 py-4 bg-black text-white font-mono text-xs sm:text-sm uppercase hover:bg-zinc-700 transition-colors whitespace-nowrap disabled:opacity-50"
              >
                {loading ? "..." : "Richiedi Accesso"}
              </button>
            </form>
          )}
        </div>
        <div className="hero-meta flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 font-mono text-[10px] uppercase tracking-widest opacity-40">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-black animate-pulse inline-block" />
            38 / 100 slot beta · Inviando accetti la{" "}
            <a href="/privacy" className="underline hover:opacity-100 transition-opacity">
              Privacy Policy
            </a>
          </span>
          <span className="hidden sm:block">↓ Scorri</span>
        </div>
      </div>
    </section>
  );
}
