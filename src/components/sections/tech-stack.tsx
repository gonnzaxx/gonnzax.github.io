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

export function TechStack() {
  const { t } = useLanguage();

  const categories = Object.entries(techStack).map(([key, items]) => ({
    key,
    label: (t.tech.categories as Record<string, string>)[key],
    items,
  }));

  return (
    <section id="tech" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title={t.tech.title} />

        <div className="space-y-12">
          {categories.map((category, catIndex) => (
            <motion.div
              key={category.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            >
              <h3 className="text-sm font-semibold uppercase tracking-widest text-text-muted mb-6">
                {category.label}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {category.items.map((tech, i) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: catIndex * 0.1 + i * 0.05 }}
                    whileHover={{ y: -4, scale: 1.05 }}
                    className="group flex flex-col items-center gap-3 rounded-xl bg-bg-card border border-border p-4 transition-all duration-300 hover:border-accent/30 hover:bg-bg-card-hover hover:shadow-lg hover:shadow-accent/5"
                  >
                    <div className="w-10 h-10 flex items-center justify-center">
                      <img
                        src={techIcons[tech.icon]}
                        alt={tech.name}
                        className="w-8 h-8 object-contain transition-transform duration-300 group-hover:scale-110 [filter:brightness(0)_invert(1)_opacity(0.7)] group-hover:[filter:none]"
                        loading="lazy"
                      />
                    </div>
                    <span className="text-xs font-medium text-text-secondary group-hover:text-text-primary transition-colors text-center">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
