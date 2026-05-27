"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeading({ title, subtitle, align = "center" }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`mb-20 ${align === "center" ? "text-center" : "text-left"}`}
    >
      <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
        <span className="text-gradient">{title}</span>
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-text-secondary">{subtitle}</p>
      )}
      <div className="mt-6 mx-auto flex items-center gap-3 justify-center">
        <div className="h-px w-12 bg-gradient-to-r from-transparent to-accent-cyan/50" />
        <div className="w-2 h-2 rounded-full bg-accent-purple/60" />
        <div className="h-px w-12 bg-gradient-to-l from-transparent to-accent-pink/50" />
      </div>
    </motion.div>
  );
}
