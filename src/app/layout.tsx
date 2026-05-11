import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muhammad Zaeem | Full-Stack Developer & AI/ML Engineer",
  description:
    "Computer Science undergraduate at NUCES Islamabad specialising in full-stack development and AI/ML engineering. Building complete systems from GPU-accelerated computer vision to LLM pipelines.",
  keywords: [
    "Muhammad Zaeem",
    "Full-Stack Developer",
    "AI/ML Engineer",
    "NUCES",
    "CUDA",
    "Python",
    "React",
    "Next.js",
    "LangChain",
    "Portfolio",
  ],
  authors: [{ name: "Muhammad Zaeem" }],
  openGraph: {
    title: "Muhammad Zaeem | Full-Stack Developer & AI/ML Engineer",
    description:
      "Building complete systems from GPU-accelerated computer vision to production LLM pipelines.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=JetBrains+Mono:ital,wght@0,300;0,400;0,500;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans bg-bg text-text antialiased">{children}</body>
    </html>
  );
}
