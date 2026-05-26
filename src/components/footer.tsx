"use client";

import { useLanguage } from "@/lib/language-context";

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-text-muted">
        <p>
          {t.footer.made}{" "}
          <span className="text-text-secondary font-medium">Gonzalo Santiago Ariza</span>
        </p>
        <p>
          &copy; {year} · {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
