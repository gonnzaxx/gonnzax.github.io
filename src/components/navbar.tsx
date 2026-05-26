"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/language-context";

const navItems = [
  { key: "home", href: "#hero" },
  { key: "about", href: "#about" },
  { key: "experience", href: "#experience" },
  { key: "projects", href: "#projects" },
  { key: "tech", href: "#tech" },
  { key: "contact", href: "#contact" },
] as const;

export function Navbar() {
  const { t, locale, toggleLocale } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-80px 0px 0px 0px" }
    );

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  function handleNavClick(href: string) {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }

  const navLabels = t.nav as Record<string, string>;

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass shadow-lg shadow-black/10"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-center">
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => handleNavClick(item.href)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-lg ${
                  activeSection === item.href.slice(1)
                    ? "text-accent-light"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {activeSection === item.href.slice(1) && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 rounded-lg bg-accent-glow"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{navLabels[item.key]}</span>
              </button>
            ))}

            <div className="ml-4 h-5 w-px bg-border" />

            <button
              onClick={toggleLocale}
              className="ml-3 flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs font-semibold text-text-secondary transition-all duration-300 hover:border-accent hover:text-accent-light"
            >
              <span className={locale === "es" ? "text-accent-light" : ""}>ES</span>
              <span className="text-text-muted">/</span>
              <span className={locale === "en" ? "text-accent-light" : ""}>EN</span>
            </button>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden absolute right-6 w-8 h-8 flex flex-col items-center justify-center gap-1.5"
            aria-label="Menu"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-text-primary origin-center transition-colors"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-0.5 bg-text-primary transition-colors"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-text-primary origin-center transition-colors"
            />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 glass pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.key}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleNavClick(item.href)}
                  className="text-left text-2xl font-semibold py-3 text-text-secondary hover:text-accent-light transition-colors"
                >
                  {navLabels[item.key]}
                </motion.button>
              ))}
              <button
                onClick={toggleLocale}
                className="mt-4 self-start rounded-lg border border-border px-4 py-2 text-sm font-semibold text-text-secondary"
              >
                {locale === "es" ? "English" : "Español"}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
