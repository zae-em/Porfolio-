"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navLinks.map((l) => l.href.slice(1));
      let current = "";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) current = id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "py-3 bg-bg/85 backdrop-blur-xl border-b border-border/60"
          : "py-5 bg-transparent"
      )}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="group flex items-center gap-2">
          <span className="font-mono text-accent text-lg font-bold tracking-tight">
            &lt;
            <span className="text-text">MZ</span>
            /&gt;
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-200 rounded-md",
                  active === link.href.slice(1)
                    ? "text-accent"
                    : "text-subtext hover:text-text"
                )}
              >
                {active === link.href.slice(1) && (
                  <span className="absolute inset-0 rounded-md bg-accent/8 border border-accent/20" />
                )}
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="mailto:zaeem5174@gmail.com"
          className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg border border-accent/40 text-accent text-sm font-medium tracking-wide hover:bg-accent/10 hover:border-accent/70 transition-all duration-200"
        >
          Hire Me
        </a>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-subtext hover:text-text transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-surface/95 backdrop-blur-xl border-b border-border/60 px-6 py-4">
          <ul className="space-y-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2.5 text-sm font-medium text-subtext hover:text-accent transition-colors rounded-md hover:bg-accent/5"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="mailto:zaeem5174@gmail.com"
                className="block px-3 py-2.5 text-sm font-medium text-accent border border-accent/30 rounded-md text-center hover:bg-accent/10 transition-all"
              >
                Hire Me
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
