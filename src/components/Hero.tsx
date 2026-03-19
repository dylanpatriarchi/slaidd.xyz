"use client";

import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Hero() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    // each line slides up from behind a clip mask
    tl.from(".hero-line", {
      yPercent: 110,
      duration: 1,
      stagger: 0.12,
    })
    .from(".hero-sub", { opacity: 0, y: 20, duration: 0.8 }, "-=0.4")
    .from(".hero-form", { opacity: 0, y: 16, duration: 0.6 }, "-=0.5")
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
    <section ref={container} className="min-h-screen flex flex-col justify-center px-4 md:px-8 lg:px-12 border-b border-black">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12">
          <h1 className="text-[14vw] sm:text-[12vw] leading-[0.85] font-bold tracking-tighter uppercase">
            {["Parla.", "Le Slide", "Ti Seguono."].map((line) => (
              <span key={line} className="block overflow-hidden">
                <span className="hero-line block">{line}</span>
              </span>
            ))}
          </h1>
        </div>
        <div className="col-span-12 md:col-span-8 lg:col-span-6 mt-8">
          <p className="hero-sub font-mono text-sm md:text-base uppercase tracking-widest leading-relaxed text-black/60">
            App desktop IA in tempo reale.<br />
            Nessun template. Solo la tua voce.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4 mt-12 md:mt-20">
        <div className="col-span-12 md:col-span-8 lg:col-span-6">
          {success ? (
            <div className="hero-form font-mono text-sm uppercase tracking-widest border border-black p-5 bg-black text-white">
              [ RICHIESTA RICEVUTA. AVVIO DEL KERNEL. ]
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="hero-form flex flex-col sm:flex-row w-full border-t sm:border border-black"
            >
              <input
                name="email"
                type="email"
                placeholder="INSERISCI LA MAIL PER L'ACCESSO ANTICIPATO"
                className="flex-1 px-4 py-5 bg-transparent outline-none placeholder:text-black/50 font-mono text-xs sm:text-sm uppercase border-x border-b sm:border-0 border-black"
                required
                disabled={loading}
              />
              <button
                type="submit"
                disabled={loading}
                className="px-8 py-5 bg-black text-white font-mono text-xs sm:text-sm uppercase hover:bg-zinc-700 transition-colors whitespace-nowrap border-x border-b sm:border-0 border-black disabled:opacity-50"
              >
                {loading ? "ELABORAZIONE..." : "Entra in Lista d'Attesa"}
              </button>
            </form>
          )}
          <div className="hero-meta mt-4 font-mono text-xs uppercase tracking-widest flex items-center gap-2">
            <span className="w-2 h-2 bg-black animate-pulse inline-block"></span>
            38 / 100 slot beta occupati
          </div>
        </div>
      </div>
    </section>
  );
}
