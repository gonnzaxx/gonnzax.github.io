"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/lib/language-context";

function Typewriter({ words, speed = 80, pause = 2000 }: { words: string[]; speed?: number; pause?: number }) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && text === current) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
    } else {
      const delta = isDeleting ? speed / 2 : speed;
      timeout = setTimeout(() => {
        setText(isDeleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1));
      }, delta);
    }

    return () => clearTimeout(timeout);
  }, [text, wordIndex, isDeleting, words, speed, pause]);

  return (
    <span>
      {text}
      <span className="typewriter-cursor" />
    </span>
  );
}

function ParallaxOrbs() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -250]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <motion.div
        style={{ y: y1, opacity }}
        className="absolute top-[10%] left-[15%] w-[500px] h-[500px] rounded-full bg-accent-cyan/8 blur-[120px]"
      />
      <motion.div
        style={{ y: y2, opacity }}
        className="absolute top-[20%] right-[10%] w-[600px] h-[600px] rounded-full bg-accent-purple/10 blur-[140px]"
      />
      <motion.div
        style={{ y: y3, opacity }}
        className="absolute bottom-[10%] left-[40%] w-[400px] h-[400px] rounded-full bg-accent-pink/6 blur-[100px]"
      />
    </div>
  );
}

function seededRandom(seed: number) {
  const x = Math.sin(seed * 9301 + 49297) * 49297;
  return x - Math.floor(x);
}

function FloatingParticles() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const particles = useRef(
    Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: seededRandom(i * 3) * 100,
      y: seededRandom(i * 3 + 1) * 100,
      size: seededRandom(i * 3 + 2) * 3 + 1,
      duration: seededRandom(i * 5) * 20 + 15,
      delay: seededRandom(i * 7) * 10,
    }))
  ).current;

  if (!mounted) return null;

  const colorClasses = ["bg-accent-cyan/40", "bg-accent-purple/40", "bg-accent-pink/30"];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <div
          key={p.id}
          className={`absolute rounded-full ${colorClasses[p.id % 3]}`}
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            animation: `float ${p.duration}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

export function Hero() {
  const { t, locale } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const textY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  const typewriterWords = locale === "es"
    ? ["Software Developer", "Data Enthusiast", "Cloud Explorer", "IA Enthusiast"]
    : ["Software Developer", "Data Enthusiast", "Cloud Explorer", "AI Enthusiast"];

  const scrollToSection = useCallback((id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <section ref={sectionRef} id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-primary to-bg-secondary" />
      <div className="absolute inset-0 grid-pattern opacity-40" />

      <ParallaxOrbs />
      <FloatingParticles />

      <motion.div
        style={{ y: textY, opacity: textOpacity, scale }}
        className="relative z-10 mx-auto max-w-6xl px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-5 py-2 text-sm text-emerald-400"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </span>
          {t.hero.available}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl font-extrabold tracking-tight sm:text-7xl lg:text-9xl leading-[0.9]"
        >
          <span className="text-text-secondary font-medium text-2xl sm:text-3xl lg:text-4xl block mb-4 font-mono">
            {t.hero.greeting}
          </span>
          <span className="text-gradient">Gonzalo</span>
          <br />
          <span className="text-text-primary">Santiago</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 text-xl sm:text-2xl lg:text-3xl font-mono font-medium text-accent-cyan-light h-10"
        >
          <Typewriter words={typewriterWords} speed={70} pause={2500} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-text-secondary"
        >
          {t.hero.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-5"
        >
          <button
            onClick={() => scrollToSection("#projects")}
            className="btn-shimmer group relative inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-accent-cyan to-accent-purple px-10 py-4 text-base font-bold text-white shadow-lg shadow-accent-purple/25 transition-all duration-300 hover:shadow-accent-cyan/30 hover:scale-[1.03]"
          >
            <span className="relative z-10 flex items-center gap-3">
              {t.hero.cta}
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </button>
          <button
            onClick={() => scrollToSection("#contact")}
            className="inline-flex items-center gap-2 rounded-full border border-accent-purple/30 bg-accent-purple/5 px-10 py-4 text-base font-semibold text-text-secondary transition-all duration-300 hover:border-accent-cyan/50 hover:text-accent-cyan-light hover:bg-accent-cyan/5 hover:scale-[1.03]"
          >
            {t.hero.contact}
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-3 text-text-muted"
        >
          <span className="text-xs tracking-[0.3em] uppercase font-mono">Scroll</span>
          <div className="w-5 h-8 rounded-full border border-accent-purple/30 flex justify-center pt-1.5">
            <motion.div
              animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-1.5 rounded-full bg-accent-cyan"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
