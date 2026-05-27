"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { SectionHeading } from "@/components/ui/section-heading";
import { SpotlightCard } from "@/components/ui/spotlight-card";

function MicrosoftLogo() {
  return (
    <svg className="w-7 h-7" viewBox="0 0 23 23" fill="none">
      <rect width="11" height="11" fill="#F25022" />
      <rect x="12" width="11" height="11" fill="#7FBA00" />
      <rect y="12" width="11" height="11" fill="#00A4EF" />
      <rect x="12" y="12" width="11" height="11" fill="#FFB900" />
    </svg>
  );
}

function IBMLogo() {
  return (
    <span className="text-[#0F62FE] font-extrabold text-lg tracking-wider" style={{ fontFamily: "system-ui" }}>
      IBM
    </span>
  );
}

const issuerLogos: Record<string, React.ReactNode> = {
  Microsoft: <MicrosoftLogo />,
  IBM: <IBMLogo />,
};

export function Certifications() {
  const { t } = useLanguage();

  return (
    <section className="relative py-20 px-6 section-divider">
      <div className="mx-auto max-w-4xl">
        <SectionHeading title={t.certifications.title} />

        <div className="grid sm:grid-cols-2 gap-6">
          {t.certifications.items.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <SpotlightCard className="h-full">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-purple/10 to-accent-cyan/10 border border-border flex items-center justify-center flex-shrink-0">
                    {issuerLogos[cert.issuer] ?? (
                      <span className="text-accent-cyan-light font-bold text-lg">{cert.issuer[0]}</span>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-text-primary">{cert.name}</h3>
                    <p className="text-sm text-accent-purple-light mt-1">{cert.description}</p>
                    <div className="flex items-center gap-2 mt-3">
                      <span className="text-xs text-text-muted">{cert.issuer}</span>
                      <span className="text-accent-purple/30">·</span>
                      <span className="text-xs text-text-muted">{cert.year}</span>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
