"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { SectionHeading } from "@/components/ui/section-heading";
import { techStack } from "@/lib/data";

const techIcons: Record<string, string> = {
  java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  csharp: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
  python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  kotlin: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
  html5: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  css3: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  mysql: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  oracle: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg",
  postgresql: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  mongodb: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  flutter: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  dotnet: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg",
  fastapi: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
  spring: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  hibernate: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-original.svg",
  firebase: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  aws: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
  microsoft: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
  git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  github: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  docker: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
};

const categoryAccents = [
  "hover:border-accent-cyan/40 hover:shadow-accent-cyan/10",
  "hover:border-accent-purple/40 hover:shadow-accent-purple/10",
  "hover:border-accent-pink/40 hover:shadow-accent-pink/10",
  "hover:border-accent-cyan/40 hover:shadow-accent-cyan/10",
  "hover:border-accent-purple/40 hover:shadow-accent-purple/10",
];

const categoryLabelColors = [
  "text-accent-cyan-light",
  "text-accent-purple-light",
  "text-accent-pink-light",
  "text-accent-cyan-light",
  "text-accent-purple-light",
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const } },
};

export function TechStack() {
  const { t } = useLanguage();

  const categories = Object.entries(techStack).map(([key, items]) => ({
    key,
    label: (t.tech.categories as Record<string, string>)[key],
    items,
  }));

  return (
    <section id="tech" className="relative py-32 px-6 section-divider">
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full bg-accent-pink/4 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-6xl">
        <SectionHeading title={t.tech.title} />

        <div className="space-y-12">
          {categories.map((category, catIndex) => (
            <motion.div
              key={category.key}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.08 }}
            >
              <h3 className={`text-sm font-semibold uppercase tracking-[0.2em] mb-6 ${categoryLabelColors[catIndex]}`}>
                {category.label}
              </h3>
              <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
              >
                {category.items.map((tech) => (
                  <motion.div
                    key={tech.name}
                    variants={itemVariants}
                    whileHover={{ y: -6, scale: 1.08, transition: { duration: 0.15 } }}
                    className={`group flex flex-col items-center gap-3 rounded-2xl bg-bg-card border border-border p-4 transition-[background,box-shadow,border-color] duration-150 hover:bg-bg-card-hover hover:shadow-xl ${categoryAccents[catIndex]}`}
                  >
                    <div className="w-10 h-10 flex items-center justify-center">
                      <img
                        src={techIcons[tech.icon]}
                        alt={tech.name}
                        className="w-8 h-8 object-contain transition-all duration-150 [filter:brightness(0)_invert(1)_opacity(0.5)] group-hover:[filter:none] group-hover:scale-110"
                        loading="lazy"
                      />
                    </div>
                    <span className="text-xs font-medium text-text-secondary group-hover:text-text-primary transition-colors duration-150 text-center">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
