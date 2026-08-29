"use client";

import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, MapPin, Download, ArrowDown } from "lucide-react";
import { resumeData } from "@/data/resume";

const roles = [
  "Full-Stack Developer",
  "AI/ML Engineer",
  "Medical AI & XAI Specialist",
  "Hybrid RAG Pipeline Architect",
  "CUDA & Systems Engineer",
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const target = roles[roleIdx];
    let timeout: NodeJS.Timeout;

    if (typing) {
      if (displayed.length < target.length) {
        timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 60);
      } else {
        timeout = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
      } else {
        setRoleIdx((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIdx]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      {/* Ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-accent/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-accent2/6 blur-[100px] pointer-events-none" />

      {/* Floating dots decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(16)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-accent/20"
            style={{
              left: `${10 + (i * 5.8) % 80}%`,
              top: `${15 + (i * 7.3) % 70}%`,
              animationDelay: `${i * 0.4}s`,
              animation: `float ${4 + (i % 3)}s ease-in-out infinite`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24">
        <div className="max-w-4xl">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent3/30 bg-accent3/5 mb-8">
            <span className="w-2 h-2 rounded-full bg-accent3 animate-pulse-slow" />
            <span className="font-mono text-xs text-accent3 tracking-wider">
              AVAILABLE FOR JOBS & INTERNSHIPS
            </span>
            
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 leading-[1.02] tracking-tight">
            <span className="text-text">Muhammad</span>
            <br />
            <span className="gradient-text">Zaeem</span>
          </h1>

          {/* Typewriter role */}
          <div className="flex items-center gap-3 mb-6 h-10">
            <span className="text-xl md:text-2xl font-medium text-subtext">
              {displayed}
              <span className="cursor-blink text-accent ml-0.5">|</span>
            </span>
          </div>

          {/* Location */}
          <div className="flex items-center gap-2 text-subtext text-sm mb-8 font-mono">
            <MapPin size={14} className="text-accent" />
            <span>{resumeData.location}</span>
            <span className="text-border mx-2">·</span>
            <span className="text-accent3">NUCES Islamabad</span>
            <span className="text-border mx-2">·</span>
            <span>CGPA 3.24 / 4.00</span>
          </div>

          {/* Summary excerpt */}
          <p className="text-subtext leading-relaxed max-w-2xl mb-10 text-base md:text-lg">
            CS undergraduate shipping complete systems — from{" "}
            <span className="text-accent font-medium">Explainable Medical AI (XAI)</span> and{" "}
            <span className="text-accent2 font-medium">Production Hybrid RAG engines</span> to{" "}
            <span className="text-orange-400 font-medium">GPU-accelerated CUDA pipelines</span>.
            Seeking a software or AI engineering internship.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <a
              href="#projects"
              className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-bg font-semibold text-sm tracking-wide hover:bg-accent/90 transition-all duration-200 hover:shadow-lg hover:shadow-accent/25"
            >
              View Projects
              <ArrowDown size={15} className="group-hover:translate-y-0.5 transition-transform" />
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 px-6 py-3 rounded-xl border border-border text-text text-sm font-medium tracking-wide hover:border-accent/50 hover:bg-accent/5 transition-all duration-200"
            >
              Get In Touch
            </a>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            <a
              href={resumeData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border text-subtext hover:text-text hover:border-border/80 hover:bg-surface transition-all duration-200 text-sm font-mono"
            >
              <Github size={15} />
              GitHub
            </a>
            <a
              href={resumeData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border text-subtext hover:text-accent2 hover:border-accent2/40 hover:bg-accent2/5 transition-all duration-200 text-sm font-mono"
            >
              <Linkedin size={15} />
              LinkedIn
            </a>
            <a
              href={`mailto:${resumeData.email}`}
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border text-subtext hover:text-accent hover:border-accent/40 hover:bg-accent/5 transition-all duration-200 text-sm font-mono"
            >
              <Mail size={15} />
              Email
            </a>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-subtext">
        <span className="font-mono text-xs tracking-widest">SCROLL</span>
        <div className="w-px h-10 bg-gradient-to-b from-subtext/50 to-transparent" />
      </div>
    </section>
  );
}
