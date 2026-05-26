"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { SectionHeading } from "@/components/ui/section-heading";
import { SpotlightCard } from "@/components/ui/spotlight-card";

const basePath = process.env.NODE_ENV === "production" ? "/gonnzax.github.io" : "";

export function About() {
  const { t } = useLanguage();

  const stats = [
    { value: "1", label: t.about.stats.projects, icon: "📱" },
    { value: "2", label: t.about.stats.certs, icon: "🏆" },
    { value: "15+", label: t.about.stats.tech, icon: "⚡" },
    { value: "2", label: t.about.stats.exp, icon: "💼" },
  ];

  return (
    <section id="about" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title={t.about.title} />

        <div className="grid gap-12 lg:grid-cols-[1fr_2fr] items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center lg:items-start gap-6"
          >
            <div className="relative">
              <div className="w-48 h-48 rounded-2xl overflow-hidden border-2 border-border bg-bg-card">
                <img
                  src={`${basePath}/images/avatar.png`}
                  alt="Gonzalo Santiago Ariza"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full bg-emerald-500 border-4 border-bg-primary" />
            </div>

            <div className="text-center lg:text-left">
              <h3 className="text-xl font-bold">Gonzalo Santiago Ariza</h3>
              <p className="text-accent-light font-mono text-sm mt-1">{t.hero.role}</p>
              <div className="flex items-center gap-2 mt-2 text-text-secondary text-sm">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                {t.about.location}
              </div>
            </div>
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-lg leading-relaxed text-text-secondary">
                {t.about.bio}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <SpotlightCard className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent-light">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary">{t.about.education}</h4>
                  <p className="text-sm text-text-secondary mt-1">{t.about.school}</p>
                </div>
              </SpotlightCard>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                  className="text-center p-4 rounded-xl bg-bg-card border border-border"
                >
                  <span className="text-2xl">{stat.icon}</span>
                  <div className="text-2xl font-bold text-gradient mt-2">{stat.value}</div>
                  <div className="text-xs text-text-muted mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
