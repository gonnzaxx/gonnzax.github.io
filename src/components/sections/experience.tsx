"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { SectionHeading } from "@/components/ui/section-heading";

export function Experience() {
  const { t } = useLanguage();
  return (
    <section id="experience" className="relative py-32 px-6 section-divider">
      <div className="mx-auto max-w-4xl">
        <SectionHeading title={t.experience.title} />

        <div className="relative">
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-accent-cyan/50 via-accent-purple/30 to-transparent md:left-1/2 md:-translate-x-px" />

          {t.experience.roles.map((role, i) => (
            <motion.div
              key={role.company}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className={`relative flex flex-col md:flex-row gap-6 mb-16 last:mb-0 ${
                i % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="absolute left-[15px] top-2 z-10 md:left-1/2 md:-translate-x-1/2">
                <div className="w-2.5 h-2.5 rounded-full border-2 border-accent-cyan bg-bg-primary">
                  <span className="absolute inset-0 rounded-full bg-accent-cyan/30 animate-ping" />
                </div>
              </div>

              <div className={`flex-1 pl-12 md:pl-0 ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                <div className="rounded-2xl bg-bg-card border border-border p-6 transition-all duration-400 hover:border-accent-purple/30 hover:bg-bg-card-hover hover:shadow-xl hover:shadow-accent-purple/5 group">
                  <span className="inline-block px-3 py-1 text-xs font-mono font-medium text-accent-cyan-light bg-accent-cyan/10 rounded-full border border-accent-cyan/20 mb-3">
                    {role.period}
                  </span>
                  <h3 className="text-xl font-bold text-text-primary group-hover:text-gradient transition-colors">
                    {role.role}
                  </h3>
                  <p className="text-accent-purple-light font-medium text-sm mt-1">{role.company}</p>
                  <p className="text-text-secondary mt-3 leading-relaxed text-sm">
                    {role.description}
                  </p>
                  <div className={`flex flex-wrap gap-2 mt-4 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                    {role.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-medium text-text-muted bg-bg-primary/80 rounded-lg border border-border hover:border-accent-cyan/20 hover:text-accent-cyan-light transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
