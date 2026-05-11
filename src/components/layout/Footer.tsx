import { Github, Linkedin, Mail } from "lucide-react";
import { resumeData } from "@/data/resume";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border/60 bg-surface/40">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 font-mono text-sm text-subtext">
          <span className="text-accent">&lt;MZ/&gt;</span>
          <span>© {year} Muhammad Zaeem. Built with Next.js & Tailwind.</span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href={resumeData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-subtext hover:text-accent hover:bg-accent/10 transition-all"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href={resumeData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-subtext hover:text-accent2 hover:bg-accent2/10 transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={`mailto:${resumeData.email}`}
            className="p-2 rounded-lg text-subtext hover:text-accent3 hover:bg-accent3/10 transition-all"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
