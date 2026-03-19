"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const LINKS = [
  { label: "Sistema",   href: "#live-anatomy" },
  { label: "Use Case",  href: "#use-case" },
  { label: "Motore",    href: "#engine" },
  { label: "Confronto", href: "#comparison" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from(container.current, {
      yPercent: -100,
      duration: 0.8,
      ease: "power3.out",
      delay: 0.2,
    });
  }, { scope: container });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      ref={container}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-8 lg:px-12 py-4 border-b border-black transition-colors duration-300 ${
        scrolled ? "bg-white" : "bg-transparent"
      }`}
    >
      <a
        href="#"
        className="font-mono font-bold text-sm uppercase tracking-widest hover:opacity-50 transition-opacity"
      >
        Slaidd
      </a>

      <nav className="hidden md:flex items-center gap-0">
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
