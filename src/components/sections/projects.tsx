"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { SectionHeading } from "@/components/ui/section-heading";

const basePath = process.env.NODE_ENV === "production" ? "/gonnzax.github.io" : "";

const projectImages = [
  { src: "reservives-1.png", alt: "Dashboard principal con reservas, encuestas y tablón de noticias" },
  { src: "reservives-2.png", alt: "Sistema de reservas de espacios deportivos y aulas" },
  { src: "reservives-3.png", alt: "Asistente IA Vivi integrado con Gemini API" },
  { src: "reservives-4.png", alt: "Perfil de usuario con ajustes y preferencias" },
  { src: "reservives-5.png", alt: "Panel de control y gestión del instituto" },
];

function PhoneMockup({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mx-auto w-[260px] sm:w-[280px]">
      <div className="relative rounded-[2.5rem] border-[6px] border-gray-700 bg-black p-1 shadow-2xl shadow-black/50">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-b-2xl z-10" />
        <div className="relative rounded-[2rem] overflow-hidden bg-white aspect-[9/19.5]">
          {children}
        </div>
      </div>
    </div>
  );
}

function ImageCarousel() {
  const [current, setCurrent] = useState(0);

  const prev = useCallback(() => {
    setCurrent((c) => (c === 0 ? projectImages.length - 1 : c - 1));
  }, []);

  const next = useCallback(() => {
    setCurrent((c) => (c === projectImages.length - 1 ? 0 : c + 1));
  }, []);

  return (
    <div className="flex flex-col items-center gap-6 py-10 lg:py-16">
      <PhoneMockup>
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={`${basePath}/images/projects/${projectImages[current].src}`}
            alt={projectImages[current].alt}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </AnimatePresence>
      </PhoneMockup>

      <div className="flex items-center gap-4">
        <button
          onClick={(e) => { e.stopPropagation(); prev(); }}
          className="w-9 h-9 rounded-full bg-bg-secondary border border-border flex items-center justify-center text-text-secondary transition-all duration-300 hover:border-accent hover:text-accent-light"
          aria-label="Anterior"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="flex items-center gap-2">
          {projectImages.map((_, i) => (
            <button
              key={i}
              onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current
                  ? "w-6 bg-accent-light"
                  : "w-1.5 bg-text-muted/40 hover:bg-text-muted/60"
              }`}
              aria-label={`Imagen ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={(e) => { e.stopPropagation(); next(); }}
          className="w-9 h-9 rounded-full bg-bg-secondary border border-border flex items-center justify-center text-text-secondary transition-all duration-300 hover:border-accent hover:text-accent-light"
          aria-label="Siguiente"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <p className="text-xs text-text-muted font-mono">
        {current + 1} / {projectImages.length}
      </p>
    </div>
  );
}

export function Projects() {
  const { t, locale } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const project = t.projects.items[0];

  const detailsLabel = locale === "es"
    ? (selectedProject === 0 ? "Cerrar detalles" : "Ver detalles")
    : (selectedProject === 0 ? "Close details" : "View details");

  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title={t.projects.title} subtitle={t.projects.subtitle} />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="group relative rounded-3xl bg-bg-card border border-border overflow-hidden transition-all duration-500 hover:border-accent/30"
        >
          <div className="grid lg:grid-cols-[auto_1fr] gap-0">
            <div className="relative bg-gradient-to-b from-bg-secondary to-bg-card lg:border-r lg:border-border">
              <ImageCarousel />
            </div>

            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 text-xs font-mono font-semibold text-accent-light bg-accent/10 rounded-full border border-accent/20">
                  Featured
                </span>
                <span className="px-3 py-1 text-xs font-mono text-emerald-400 bg-emerald-500/10 rounded-full border border-emerald-500/20">
                  Flutter + FastAPI
                </span>
              </div>

              <h3 className="text-3xl font-bold text-text-primary group-hover:text-accent-light transition-colors duration-300">
                {project.title}
              </h3>

              <p className="mt-4 text-text-secondary leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 text-xs font-medium text-accent-light/90 bg-accent/8 rounded-lg border border-accent/15 transition-colors duration-300 hover:bg-accent/15"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 mt-8">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-all duration-300 hover:bg-accent-light hover:shadow-accent/30 hover:scale-[1.02]"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub
                </a>

                <button
                  onClick={() => setSelectedProject(selectedProject === 0 ? null : 0)}
                  className="inline-flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-accent-light transition-colors duration-300"
                >
                  {detailsLabel}
                  <motion.svg
                    animate={{ rotate: selectedProject === 0 ? 180 : 0 }}
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </motion.svg>
                </button>
              </div>
            </div>
          </div>

          <AnimatePresence>
            {selectedProject === 0 && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden border-t border-border"
              >
                <div className="p-8 lg:p-12 grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
                      <svg className="w-5 h-5 text-accent-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.384 3.175 1.42-5.997L2.3 7.674l6.146-.44L11.42 1.5l2.975 5.734 6.146.44-5.155 4.674 1.42 5.997z" />
                      </svg>
                      Challenges
                    </h4>
                    <ul className="space-y-3">
                      {project.challenges.map((challenge) => (
                        <li key={challenge} className="flex items-start gap-3 text-sm text-text-secondary">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
                      <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Results
                    </h4>
                    <ul className="space-y-3">
                      {project.results.map((result) => (
                        <li key={result} className="flex items-start gap-3 text-sm text-text-secondary">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="md:col-span-2">
                    <h4 className="text-lg font-bold text-text-primary mb-3">
                      {locale === "es" ? "Arquitectura" : "Architecture"}
                    </h4>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {project.longDescription}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
