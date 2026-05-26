"use client";

import { LanguageProvider } from "@/lib/language-context";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { TechStack } from "@/components/sections/tech-stack";
import { Certifications } from "@/components/sections/certifications";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/footer";
import { CursorFollower } from "@/components/cursor-follower";
import { ScrollToTop } from "@/components/scroll-to-top";

export default function Home() {
  return (
    <LanguageProvider>
      <CursorFollower />
      <ScrollToTop />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <TechStack />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
