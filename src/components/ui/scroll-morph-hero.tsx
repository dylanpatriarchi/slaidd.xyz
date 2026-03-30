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
  size: { width: number; height: number };
}

function SlideCard({ src, target, size }: CardProps) {
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
      style={{ position: "absolute", width: size.width, height: size.height }}
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
  const isMobile = containerSize.width < 768;
  const visibleSlideCount = isMobile ? 18 : TOTAL_SLIDES;
  const cardSize = isMobile
    ? { width: 74, height: 106 }
    : { width: 64, height: 90 };

  return (
    <div ref={containerRef} className="relative w-full h-full bg-[#FAFAFA] overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,#ffffff_0%,#f6f6f6_58%,#eeeeee_100%)]" />
      <div className="flex h-full w-full flex-col items-center justify-center perspective-[1000px]">

        {/* Hero title + signup form */}
        <div className="absolute inset-0 z-50 pointer-events-none">
          <div className="relative flex flex-col h-full w-full items-center justify-center gap-6 md:gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.94, filter: "blur(12px)" }}
              animate={introPhase === "circle" && morphValue < 0.5
                ? { opacity: 1 - morphValue * 2, scale: 1, filter: "blur(0px)" }
                : { opacity: 0, scale: 0.94, filter: "blur(12px)" }}
              transition={{ duration: 1 }}
              className="absolute rounded-full border border-black/10 bg-white/95 shadow-[0_20px_70px_rgba(0,0,0,0.10)] w-[86vw] h-[86vw] max-w-[36rem] max-h-[36rem] md:w-[34rem] md:h-[34rem]"
            />

            <motion.h1
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={introPhase === "circle" && morphValue < 0.5
                ? { opacity: 1 - morphValue * 2, y: 0, filter: "blur(0px)" }
                : { opacity: 0, filter: "blur(10px)" }}
              transition={{ duration: 1 }}
              className="relative z-10 text-[2.55rem] md:text-5xl lg:text-7xl font-bold tracking-tighter text-black uppercase max-w-[90%] leading-[0.9] text-center"
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
              className="relative z-10 flex flex-col items-center gap-3 w-full max-w-sm pointer-events-auto"
            >
              <p className="text-xs text-zinc-400 text-center">
                Accesso anticipato — iscriviti alla lista d&apos;attesa
              </p>
              {success ? (
                <div
                  className="w-full max-w-sm h-12 inline-flex items-center justify-center gap-2 border border-black px-4 bg-black text-white text-sm font-medium shadow-lg"
                  style={{ borderRadius: "9999px" }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Ricevuta. Ti contatteremo presto.
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="relative flex w-full max-w-sm items-center border border-black/20 bg-white p-1 pl-4 shadow-lg transition-all focus-within:border-black/50"
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
          className="absolute top-[4%] z-10 flex flex-col items-center justify-center text-center px-4 pointer-events-auto w-full"
        >
          <div className="w-full max-w-4xl rounded-[2rem] border border-black/10 bg-white/90 px-5 py-6 shadow-xl backdrop-blur-sm sm:px-8 sm:py-8">
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-3">
              Come funziona Slaidd
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mb-2">
              Apri l&apos;app, parli come faresti normalmente e la presentazione nasce mentre stai ancora spiegando.
            </p>
            <p className="text-sm sm:text-base text-gray-500 max-w-2xl mx-auto leading-relaxed mb-6">
              Dal microfono al layout finale, ogni passaggio e progettato per darti una slide pronta in pochi istanti.
            </p>

            {/* Steps */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 mb-7">
              {[
                {
                  n: "01",
                  label: "Parli in modo naturale",
                  detail: "Input vocale nativo, senza cambiare il tuo flusso.",
                  sub: "Audio elaborato in locale, niente cloud per la voce.",
                },
                {
                  n: "02",
                  label: "Due LLM coordinano il contenuto",
                  detail: "Uno trascrive e capisce il senso, l&apos;altro costruisce il layout JSON.",
                  sub: "Titoli, gerarchia e struttura della slide restano coerenti.",
                },
                {
                  n: "03",
                  label: "La slide compare subito",
                  detail: "Rendering rapido e continuo mentre continui a parlare.",
                  sub: "Tempo medio di comparsa sotto i 200ms.",
                },
              ].map((s) => (
                <div
                  key={s.n}
                  className="rounded-2xl border border-black/10 bg-white p-4 sm:p-5 text-left shadow-sm"
                >
                  <span className="inline-flex mb-3 rounded-full border border-black/10 bg-black/5 px-2.5 py-1 text-[11px] font-mono text-gray-700">
                    {s.n}
                  </span>
                  <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1.5">
                    {s.label}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-1.5">
                    {s.detail}
                  </p>
                  <p className="text-[11px] sm:text-xs text-gray-500 leading-relaxed">
                    {s.sub}
                  </p>
                </div>
              ))}
            </div>

            {/* Second signup form */}
            {arcSuccess ? (
              <div
                className="inline-flex items-center gap-2 border border-black bg-black text-white text-sm px-6 py-3 font-medium"
                style={{ borderRadius: "9999px" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Sei in lista. Ti avvisiamo al lancio.
              </div>
            ) : (
              <form
                onSubmit={handleArcSubmit}
                className="flex w-full max-w-xl mx-auto items-center border border-black/15 bg-white p-1.5 pl-5 shadow-sm transition-all focus-within:border-black/40"
                style={{ borderRadius: "9999px" }}
              >
                <input
                  name="email"
                  type="email"
                  placeholder="Unisciti alla lista d'attesa..."
                  className="flex-1 min-w-0 bg-transparent py-2.5 text-sm sm:text-base outline-none placeholder:text-zinc-400 text-black"
                  required
                  disabled={arcLoading}
                />
                <button
                  type="submit"
                  disabled={arcLoading}
                  className="h-10 shrink-0 bg-black px-5 sm:px-6 text-sm font-medium text-white transition-colors hover:bg-zinc-800 disabled:opacity-50"
                  style={{ borderRadius: "9999px" }}
                >
                  {arcLoading ? "..." : "Accesso anticipato"}
                </button>
              </form>
            )}
          </div>
        </motion.div>

        {/* Slide cards */}
        <div className="relative flex items-center justify-center w-full h-full">
          {SLIDES.slice(0, TOTAL_SLIDES).map((src, i) => {
            const hiddenOnMobile = isMobile && i >= visibleSlideCount;
            let target = { x: 0, y: 0, rotation: 0, scale: 1, opacity: 1 };

            if (introPhase === "scatter") {
              target = scatterPositions[i];
            } else if (introPhase === "line") {
              const spacing = 72;
              const totalW = TOTAL_SLIDES * spacing;
              target = { x: i * spacing - totalW / 2, y: 0, rotation: 0, scale: 1, opacity: 1 };
            } else {
              const minDim = Math.min(containerSize.width, containerSize.height);
              const desiredRadius = minDim * (isMobile ? 0.74 : 0.50);
              const circleRadius = isMobile
                ? Math.min(desiredRadius, 320)
                : Math.min(desiredRadius, 480);
              const circleAngle = (i / visibleSlideCount) * 360;
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
              const step = spreadAngle / (visibleSlideCount - 1);
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
                scale: lerp(isMobile ? 1.08 : 1, arcPos.scale, morphValue),
                opacity: 1,
              };
            }
            if (hiddenOnMobile) {
              target = { x: target.x, y: target.y, rotation: target.rotation, scale: 0.4, opacity: 0 };
            }

            return <SlideCard key={i} src={src} target={target} size={cardSize} />;
          })}
        </div>

      </div>
    </div>
  );
}
