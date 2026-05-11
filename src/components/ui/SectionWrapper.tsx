"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

export default function SectionWrapper({ id, className, children }: SectionWrapperProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll(".section-fade").forEach((child, i) => {
            setTimeout(() => child.classList.add("visible"), i * 80);
          });
        }
      },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={cn("py-24 px-6 max-w-6xl mx-auto", className)}
    >
      {children}
    </section>
  );
}
