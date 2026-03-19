"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const LINKS = [
  { label: "Come Funziona", href: "#how-it-works" },
  { label: "Pipeline",      href: "#live-anatomy" },
  { label: "Use Case",      href: "#use-case" },
  { label: "Confronto",     href: "#comparison" },
];

export default function Navbar() {
  const container = useRef<HTMLElement>(null);
  const shown = useRef(false);

  useEffect(() => {
    // start off-screen
    gsap.set(container.current, { y: "-100%" });

    const hero = document.getElementById("hero");
    if (!hero) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && !shown.current) {
          // hero left viewport → slide navbar in
          shown.current = true;
          gsap.to(container.current, { y: "0%", duration: 0.55, ease: "power3.out" });
        } else if (entry.isIntersecting && shown.current) {
          // scrolled back into hero → hide navbar
          shown.current = false;
          gsap.to(container.current, { y: "-100%", duration: 0.4, ease: "power3.in" });
        }
      },
      { threshold: 0.1 }
    );

    obs.observe(hero);
    return () => obs.disconnect();
  }, []);

  return (
    <header
      ref={container}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-8 lg:px-12 py-4 border-b border-black bg-white"
    >
      <a
        href="#"
        className="font-mono font-bold text-sm uppercase tracking-widest hover:opacity-50 transition-opacity"
      >
        Slaidd
      </a>

      <nav className="hidden md:flex items-center">
        {LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="font-mono text-xs uppercase tracking-widest px-5 py-2 border-l border-black hover:bg-black hover:text-white transition-colors"
          >
            {l.label}
          </a>
        ))}
      </nav>

      <a
        href="#final-cta"
        className="font-mono text-xs uppercase tracking-widest px-5 py-2 bg-black text-white hover:bg-zinc-700 transition-colors"
      >
        Accesso Anticipato
      </a>
    </header>
  );
}
