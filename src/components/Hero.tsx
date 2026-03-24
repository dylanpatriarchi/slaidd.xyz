"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import IntroAnimation from "./ui/scroll-morph-hero";

export default function Hero() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    return (
        <section ref={containerRef} id="hero" className="w-full h-[300vh] relative">
            <div className="sticky top-0 w-full h-[100dvh] overflow-hidden">
                <IntroAnimation progress={scrollYProgress} />
            </div>
        </section>
    );
}
