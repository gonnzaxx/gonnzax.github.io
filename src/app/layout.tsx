import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gonzalo Santiago Ariza | Junior Full Stack Developer",
  description:
    "Portfolio de Gonzalo Santiago Ariza — Desarrollador Full Stack Junior especializado en Java, Python, Flutter y Cloud. Madrid, España.",
  keywords: [
    "Gonzalo Santiago Ariza",
    "Full Stack Developer",
    "Backend Developer",
    "Java",
    "Python",
    "Flutter",
    "Portfolio",
    "Madrid",
  ],
  authors: [{ name: "Gonzalo Santiago Ariza" }],
  openGraph: {
    title: "Gonzalo Santiago Ariza | Junior Full Stack Developer",
    description:
      "Desarrollador Full Stack Junior especializado en Java, Python, Flutter y Cloud.",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gonzalo Santiago Ariza | Junior Full Stack Developer",
    description:
      "Desarrollador Full Stack Junior especializado en Java, Python, Flutter y Cloud.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
