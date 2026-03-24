"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import { motion, useTransform, useSpring, useMotionValue, MotionValue } from "framer-motion";

export type AnimationPhase = "scatter" | "line" | "circle" | "bottom-strip";

// --- Slide Image URLs ---
const BASE_SLIDES = [
  "/slides/slide-1.png",
  "/slides/slide-2.png",
  "/slides/slide-3.png",
  "/slides/slide-4.png",
  "/slides/slide-5.png",
];

// Repeat the 5 slides 4 times to fill the 20 slots
const SLIDES = [
  ...BASE_SLIDES,
  ...BASE_SLIDES,
  ...BASE_SLIDES,
  ...BASE_SLIDES,
];

interface CardProps {
  src: string;
  target: { x: number; y: number; rotation: number; scale: number; opacity: number };
}

function SlideCard({ src, target }: CardProps) {
  return (
    <motion.div
      animate={{
        x: target.x,
        y: target.y,
        rotate: target.rotation,
        scale: target.scale,
        opacity: target.opacity,
      }}
      transition={{ type: "spring", stiffness: 40, damping: 15 }}
      style={{ position: "absolute", width: 64, height: 90 }}
    >
      <div className="absolute inset-0 overflow-hidden rounded-xl shadow-md border border-black/8 bg-white">
        <img src={src} alt="" className="h-full w-full object-cover" draggable={false} />
      </div>
    </motion.div>
  );
}

const TOTAL_SLIDES = 20;
const lerp = (s: number, e: number, t: number) => s * (1 - t) + e * t;

export default function IntroAnimation({ progress }: { progress?: MotionValue<number> }) {
  const [introPhase, setIntroPhase] = useState<AnimationPhase>("scatter");
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [arcLoading, setArcLoading] = useState(false);
  const [arcSuccess, setArcSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const email = (new FormData(e.currentTarget)).get("email") as string;
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) setSuccess(true);
    } catch { /* silent */ } finally { setLoading(false); }
  };

  const handleArcSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setArcLoading(true);
    const email = (new FormData(e.currentTarget)).get("email") as string;
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) setArcSuccess(true);
    } catch { /* silent */ } finally { setArcLoading(false); }
  };

  // Container size
  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new ResizeObserver((entries) => {
      for (const e of entries) {
        setContainerSize({ width: e.contentRect.width, height: e.contentRect.height });
      }
    });
    observer.observe(containerRef.current);
    setContainerSize({ width: containerRef.current.offsetWidth, height: containerRef.current.offsetHeight });
    return () => observer.disconnect();
  }, []);

  // Scroll logic
  const defaultProgress = useMotionValue(0);
  const scrollSource = progress || defaultProgress;
  const morphProgress = useTransform(scrollSource, [0, 0.4], [0, 1]);
  const smoothMorph = useSpring(morphProgress, { stiffness: 40, damping: 20 });
  const scrollRotate = useTransform(scrollSource, [0.4, 1], [0, 360]);
  const smoothScrollRotate = useSpring(scrollRotate, { stiffness: 40, damping: 20 });

  // Mouse parallax
  const mouseX = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { stiffness: 30, damping: 20 });
  useEffect(() => {
    const c = containerRef.current;
    if (!c) return;
    const onMove = (e: MouseEvent) => {
      const rect = c.getBoundingClientRect();
      mouseX.set(((e.clientX - rect.left) / rect.width * 2 - 1) * 100);
    };
    c.addEventListener("mousemove", onMove);
    return () => c.removeEventListener("mousemove", onMove);
  }, [mouseX]);

  // Intro sequence
  useEffect(() => {
    const t1 = setTimeout(() => setIntroPhase("line"), 500);
    const t2 = setTimeout(() => setIntroPhase("circle"), 2500);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  // Scatter positions
  const scatterPositions = useMemo(() =>
    SLIDES.map(() => ({
      x: (Math.random() - 0.5) * 1500,
      y: (Math.random() - 0.5) * 1000,
      rotation: (Math.random() - 0.5) * 180,
      scale: 0.6,
      opacity: 0,
    })), []);

  // Render values
  const [morphValue, setMorphValue] = useState(0);
  const [rotateValue, setRotateValue] = useState(0);
  const [parallaxValue, setParallaxValue] = useState(0);
  useEffect(() => {
    const u1 = smoothMorph.on("change", setMorphValue);
    const u2 = smoothScrollRotate.on("change", setRotateValue);
    const u3 = smoothMouseX.on("change", setParallaxValue);
    return () => { u1(); u2(); u3(); };
  }, [smoothMorph, smoothScrollRotate, smoothMouseX]);

  const contentOpacity = useTransform(smoothMorph, [0.8, 1], [0, 1]);
  const contentY = useTransform(smoothMorph, [0.8, 1], [20, 0]);

  return (
    <div ref={containerRef} className="relative w-full h-full bg-[#FAFAFA] overflow-hidden">
      <div className="flex h-full w-full flex-col items-center justify-center perspective-[1000px]">

        {/* Hero title + signup form */}
        <div className="absolute inset-0 z-50 pointer-events-none">
          <div className="flex flex-col h-full w-full items-center justify-center gap-8">
            <motion.h1
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={introPhase === "circle" && morphValue < 0.5
                ? { opacity: 1 - morphValue * 2, y: 0, filter: "blur(0px)" }
                : { opacity: 0, filter: "blur(10px)" }}
              transition={{ duration: 1 }}
              className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter text-black uppercase max-w-[90%] leading-[0.9] text-center"
            >
              <span className="block">Parla.</span>
              <span className="block">Le Slide</span>
              <span className="block">ti Seguono.</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={introPhase === "circle" && morphValue < 0.5
                ? { opacity: 1 - morphValue * 2, y: 0 }
                : { opacity: 0, y: 20 }}
              transition={{ duration: 1, delay: 0.1 }}
              className="flex flex-col items-center gap-3 w-full max-w-sm pointer-events-auto relative z-[100]"
            >
              <p className="text-xs text-zinc-400 text-center">
                Accesso anticipato — iscriviti alla lista d&apos;attesa
              </p>
              {success ? (
                <div
                  className="w-full max-w-sm h-12 inline-flex items-center justify-center gap-2 border border-black px-4 bg-black text-white text-sm font-medium"
                  style={{ borderRadius: "9999px" }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Ricevuta. Ti contatteremo presto.
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="relative flex w-full max-w-sm items-center border border-black/20 bg-white p-1 pl-4 shadow-sm transition-all focus-within:border-black/50"
                  style={{ borderRadius: "9999px" }}
                >
                  <input
                    name="email"
                    type="email"
                    placeholder="La tua email..."
                    className="flex-1 min-w-0 bg-transparent py-2.5 text-sm outline-none placeholder:text-zinc-400 text-black"
                    required
                    disabled={loading}
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="h-10 shrink-0 bg-black px-6 text-sm font-medium text-white transition-colors hover:bg-zinc-800 disabled:opacity-50"
                    style={{ borderRadius: "9999px" }}
                  >
                    {loading ? "..." : "Iscriviti"}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>

        {/* Arc content: Come funziona */}
        <motion.div
          style={{ opacity: contentOpacity, y: contentY }}
          className="absolute top-[6%] z-10 flex flex-col items-center justify-center text-center px-4 pointer-events-auto w-full"
        >
          <h2 className="text-xl md:text-3xl font-bold text-gray-900 tracking-tight mb-2">
            Come funziona Slaidd
          </h2>
          <p className="text-sm text-gray-500 max-w-lg leading-relaxed mb-6">
            Apri l&apos;app, parla come faresti normalmente. Slaidd ascolta, capisce e costruisce
            la presentazione in tempo reale — mentre stai ancora parlando.
          </p>

          {/* Steps */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-0 mb-7 max-w-xl w-full justify-center">
            {[
              { n: "01", label: "Parli", detail: "Microfono nativo, nessun cloud" },
              { n: "02", label: "Due LLM elaborano", detail: "Trascrizione + layout JSON" },
              { n: "03", label: "La slide appare", detail: "Render in meno di 200ms" },
            ].map((s, i) => (
              <React.Fragment key={s.n}>
                <div className="flex flex-col items-center gap-1 min-w-[100px]">
                  <span className="text-[10px] font-mono text-gray-300">{s.n}</span>
                  <span className="text-xs font-semibold text-gray-900">{s.label}</span>
                  <span className="text-[10px] text-gray-400 text-center">{s.detail}</span>
                </div>
                {i < 2 && (
                  <span className="hidden sm:block text-gray-200 mx-2 text-lg self-center pb-3">→</span>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Second signup form */}
          {arcSuccess ? (
            <div
              className="inline-flex items-center gap-2 border border-black bg-black text-white text-xs px-5 py-2.5 font-medium"
              style={{ borderRadius: "9999px" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Sei in lista. Ti avvisiamo al lancio.
            </div>
          ) : (
            <form
              onSubmit={handleArcSubmit}
              className="flex w-full max-w-xs items-center border border-black/15 bg-white/90 backdrop-blur-sm p-1 pl-4 shadow-sm transition-all focus-within:border-black/40"
              style={{ borderRadius: "9999px" }}
            >
              <input
                name="email"
                type="email"
                placeholder="Unisciti alla lista d'attesa..."
                className="flex-1 min-w-0 bg-transparent py-2 text-xs outline-none placeholder:text-zinc-400 text-black"
                required
                disabled={arcLoading}
              />
              <button
                type="submit"
                disabled={arcLoading}
                className="h-8 shrink-0 bg-black px-4 text-xs font-medium text-white transition-colors hover:bg-zinc-800 disabled:opacity-50"
                style={{ borderRadius: "9999px" }}
              >
                {arcLoading ? "..." : "Accesso anticipato"}
              </button>
            </form>
          )}
        </motion.div>

        {/* Slide cards */}
        <div className="relative flex items-center justify-center w-full h-full">
          {SLIDES.slice(0, TOTAL_SLIDES).map((src, i) => {
            let target = { x: 0, y: 0, rotation: 0, scale: 1, opacity: 1 };

            if (introPhase === "scatter") {
              target = scatterPositions[i];
            } else if (introPhase === "line") {
              const spacing = 72;
              const totalW = TOTAL_SLIDES * spacing;
              target = { x: i * spacing - totalW / 2, y: 0, rotation: 0, scale: 1, opacity: 1 };
            } else {
              const isMobile = containerSize.width < 768;
              const minDim = Math.min(containerSize.width, containerSize.height);
              const circleRadius = Math.min(minDim * 0.50, 480);
              const circleAngle = (i / TOTAL_SLIDES) * 360;
              const circleRad = (circleAngle * Math.PI) / 180;
              const circlePos = {
                x: Math.cos(circleRad) * circleRadius,
                y: Math.sin(circleRad) * circleRadius,
                rotation: circleAngle + 90,
              };
              const baseRadius = Math.min(containerSize.width, containerSize.height * 1.5);
              const arcRadius = baseRadius * (isMobile ? 1.4 : 1.1);
              const arcApexY = containerSize.height * (isMobile ? 0.35 : 0.25);
              const arcCenterY = arcApexY + arcRadius;
              const spreadAngle = isMobile ? 100 : 130;
              const startAngle = -90 - spreadAngle / 2;
              const step = spreadAngle / (TOTAL_SLIDES - 1);
              const scrollProgress = Math.min(Math.max(rotateValue / 360, 0), 1);
              const boundedRotation = -scrollProgress * spreadAngle * 0.8;
              const currentArcAngle = startAngle + i * step + boundedRotation;
              const arcRad = (currentArcAngle * Math.PI) / 180;
              const arcPos = {
                x: Math.cos(arcRad) * arcRadius + parallaxValue,
                y: Math.sin(arcRad) * arcRadius + arcCenterY,
                rotation: currentArcAngle + 90,
                scale: isMobile ? 1.4 : 1.8,
              };
              target = {
                x: lerp(circlePos.x, arcPos.x, morphValue),
                y: lerp(circlePos.y, arcPos.y, morphValue),
                rotation: lerp(circlePos.rotation, arcPos.rotation, morphValue),
                scale: lerp(1, arcPos.scale, morphValue),
                opacity: 1,
              };
            }

            return <SlideCard key={i} src={src} target={target} />;
          })}
        </div>

      </div>
    </div>
  );
}
