import { ExternalLink, Github, Zap } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import { resumeData } from "@/data/resume";

const categoryColors: Record<string, string> = {
  "AI / ML": "text-accent3 bg-accent3/8 border-accent3/25",
  "Systems / HPC": "text-orange-400 bg-orange-400/8 border-orange-400/25",
  "Systems": "text-yellow-400 bg-yellow-400/8 border-yellow-400/25",
  "Full-Stack": "text-accent2 bg-accent2/8 border-accent2/25",
  "Game Dev": "text-pink-400 bg-pink-400/8 border-pink-400/25",
};

export default function Projects() {
  const featured = resumeData.projects.slice(0, 2);
  const rest = resumeData.projects.slice(2);

  return (
    <SectionWrapper id="projects" className="border-t border-border/40">
      <SectionHeader
        eyebrow="03. projects"
        title="Things I've Built"
        subtitle="From GPU-accelerated CUDA trackers to full-stack web platforms — each project is a complete system."
      />

      {/* Featured Projects */}
      <div className="space-y-6 mb-8">
        {featured.map((project, i) => (
          <div
            key={project.title}
            className="section-fade group relative p-7 rounded-2xl border border-border bg-surface/50 card-hover overflow-hidden"
          >
            {/* Number watermark */}
            <span className="absolute top-4 right-6 font-mono text-6xl font-bold text-border/40 select-none leading-none">
              0{i + 1}
            </span>

            <div className="relative z-10 grid md:grid-cols-[1fr_auto] gap-6">
              <div>
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-mono border ${
                      categoryColors[project.category] || "text-accent bg-accent/8 border-accent/25"
                    }`}
                  >
                    {project.category}
                  </span>
                  <h3 className="text-text font-bold text-xl">{project.title}</h3>
                  <span className="text-subtext text-sm">— {project.subtitle}</span>
                </div>

                <p className="text-subtext text-sm leading-relaxed mb-4 max-w-2xl">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.highlights.map((h) => (
                    <div key={h} className="flex items-center gap-1.5 text-xs text-accent3 font-mono">
                      <Zap size={10} className="flex-shrink-0" />
                      {h}
                    </div>
                  ))}
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
              </div>

              <div className="flex md:flex-col gap-2 items-start">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-subtext hover:text-text hover:border-border/80 hover:bg-card transition-all text-sm font-mono"
                >
                  <Github size={14} />
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Rest of projects grid */}
      <div className="grid md:grid-cols-2 gap-5">
        {rest.map((project, i) => (
          <div
            key={project.title}
            className="section-fade group p-6 rounded-2xl border border-border bg-surface/50 card-hover relative overflow-hidden"
          >
            <span className="absolute top-4 right-5 font-mono text-5xl font-bold text-border/30 select-none leading-none">
              0{i + 3}
            </span>

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-3 flex-wrap">
                <span
                  className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-mono border ${
                    categoryColors[project.category] || "text-accent bg-accent/8 border-accent/25"
                  }`}
                >
                  {project.category}
                </span>
              </div>
              <h3 className="text-text font-bold text-lg mb-1">{project.title}</h3>
              <p className="text-subtext text-xs mb-3 font-mono">{project.subtitle}</p>
              <p className="text-subtext text-sm leading-relaxed mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.highlights.map((h) => (
                  <div key={h} className="flex items-center gap-1 text-xs text-accent3 font-mono">
                    <Zap size={9} />
                    {h}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tech.slice(0, 5).map((t) => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
                {project.tech.length > 5 && (
                  <span className="tech-tag text-subtext" style={{ color: "var(--subtext)", borderColor: "var(--border)" }}>
                    +{project.tech.length - 5}
                  </span>
                )}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-subtext hover:text-accent text-xs font-mono transition-colors"
              >
                <Github size={13} />
                View on GitHub
                <ExternalLink size={11} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
