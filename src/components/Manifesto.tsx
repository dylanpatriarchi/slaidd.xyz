"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Manifesto() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 70%",
        toggleActions: "play none none reverse",
      },
    });

    tl.from(".manifesto-title", {
      yPercent: 110,
      duration: 1,
      ease: "power4.out",
    })
    .from(".manifesto-p", {
      opacity: 0,
      y: 30,
      duration: 0.7,
      ease: "power3.out",
      stagger: 0.18,
    }, "-=0.5");
  }, { scope: container });

  return (
    <section ref={container} className="min-h-screen bg-black text-white flex flex-col justify-center px-4 md:px-8 lg:px-12 py-24 sm:py-32">
      <div className="grid grid-cols-12 gap-4 h-full items-center">
        <div className="col-span-12 md:col-span-10 md:col-start-2">
          <div className="overflow-hidden mb-12 sm:mb-20">
            <h2 className="manifesto-title text-[8vw] sm:text-[6vw] leading-none font-bold tracking-tighter uppercase">
              La Morte del<br />Template
            </h2>
          </div>
          <div className="text-lg sm:text-2xl md:text-3xl font-sans leading-tight space-y-8 sm:space-y-12 max-w-4xl">
            <p className="manifesto-p">
              Per 30 anni, siamo stati vincolati al bounding box. Alla presentazione base. Al bullet point in Arial 24pt.
            </p>
            <p className="manifesto-p font-bold selection:bg-white selection:text-black">
              La presentazione è morta. La stiamo ricostruendo partendo dall'audio.
            </p>
            <p className="manifesto-p">
              Slaidd ascolta. Un LLM trascrive e capisce. Un secondo LLM costruisce la slide. Niente drag & drop. Parli, appare.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
