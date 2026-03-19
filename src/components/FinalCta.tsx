"use client";

import { useState } from "react";

export default function FinalCta() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
    <section className="flex flex-col border-b border-black">
      <div className="overflow-hidden whitespace-nowrap border-b border-black bg-black text-white py-4 md:py-6 relative">
        <div className="flex animate-marquee">
          <h2 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase inline-block pr-8 shrink-0">
            UNISCITI AL FUTURO &mdash; PARLA. LE SLIDE TI SEGUONO. &mdash; 
          </h2>
          <h2 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase inline-block pr-8 shrink-0">
            UNISCITI AL FUTURO &mdash; PARLA. LE SLIDE TI SEGUONO. &mdash; 
          </h2>
        </div>
      </div>
      <div className="py-24 px-4 md:px-8 lg:px-12 flex flex-col items-center justify-center">
        <h3 className="text-3xl md:text-5xl font-bold uppercase mb-12 text-center">Smetti di Fare Slide</h3>
        
        {success ? (
          <div className="font-mono text-xl uppercase tracking-widest text-pureblue border border-black p-8 bg-black text-white">
            [ RICHIESTA RICEVUTA. AVVIO DEL KERNEL. ]
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex w-full max-w-2xl border border-black flex-col sm:flex-row">
            <input 
              name="email"
              type="email" 
              placeholder="INSERISCI LA TUA EMAIL PER L'ACCESSO ANTICIPATO" 
              className="flex-1 px-4 py-6 bg-transparent outline-none placeholder:text-black/50 font-mono text-sm uppercase border-b sm:border-b-0 sm:border-r border-black"
              required
              disabled={loading}
            />
            <button 
              type="submit" 
              disabled={loading}
              className="px-12 py-6 bg-black text-white font-mono text-sm uppercase hover:bg-pureblue transition-colors whitespace-nowrap disabled:opacity-50"
            >
              {loading ? "ELABORAZIONE..." : "Richiedi Accesso"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
