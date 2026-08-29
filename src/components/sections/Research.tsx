import { BookOpen, Cpu, Sparkles, Award, TrendingUp, CheckCircle2, FlaskConical, Layers } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import { resumeData } from "@/data/resume";

const categoryStyles: Record<string, { badge: string; icon: typeof BookOpen; glow: string }> = {
  "NLP & Low-Resource AI": {
    badge: "text-accent bg-accent/8 border-accent/25",
    icon: BookOpen,
    glow: "bg-accent/5",
  },
  "High-Performance Computing & GPU": {
    badge: "text-orange-400 bg-orange-400/8 border-orange-400/25",
    icon: Cpu,
    glow: "bg-orange-400/5",
  },
};

export default function Research() {
  return (
    <SectionWrapper id="research" className="border-t border-border/40">
      <SectionHeader
        eyebrow="04. research"
        title="Research & Academic Work"
        subtitle="Peer-reviewed research and applied algorithmic investigations conducted under faculty supervision at NUCES Islamabad."
      />

      <div className="space-y-8">
        {resumeData.research.map((item, i) => {
          const style =
            categoryStyles[item.category] || {
              badge: "text-accent bg-accent/8 border-accent/25",
              icon: FlaskConical,
              glow: "bg-accent/5",
            };
          const CategoryIcon = style.icon;

          return (
            <div
              key={item.title}
              className="section-fade group relative p-7 md:p-8 rounded-2xl border border-border bg-surface/60 card-hover overflow-hidden"
            >
              {/* Subtle ambient glow in card */}
              <div className={`absolute top-0 right-0 w-80 h-80 rounded-full ${style.glow} blur-[90px] pointer-events-none`} />

              {/* Watermark identifier */}
              <span className="absolute top-4 right-6 font-mono text-6xl md:text-7xl font-bold text-border/30 select-none leading-none">
                0{i + 1}
              </span>

              <div className="relative z-10">
                {/* Header meta */}
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono border ${style.badge}`}>
                    <CategoryIcon size={13} />
                    {item.category}
                  </span>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono text-accent3 bg-accent3/8 border border-accent3/25">
                    <Award size={13} />
                    {item.publicationStatus}
                  </span>

                  <span className="text-subtext text-xs font-mono ml-auto">
                    {item.period}
                  </span>
                </div>

                {/* Title & Role */}
                <h3 className="text-text font-bold text-xl md:text-2xl mt-2 mb-1">
                  {item.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-subtext font-mono mb-4">
                  <span className="text-accent font-medium">{item.role}</span>
                  <span>·</span>
                  <span>{item.institution}</span>
                </div>

                {/* Overview */}
                <p className="text-subtext text-sm md:text-base leading-relaxed mb-6 max-w-4xl">
                  {item.overview}
                </p>

                {/* Key Metrics / Highlights Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                  {item.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="p-3.5 rounded-xl border border-border/80 bg-card/60 flex flex-col justify-center"
                    >
                      <span className="text-xs font-mono text-subtext mb-1 flex items-center gap-1">
                        <TrendingUp size={11} className="text-accent" />
                        {m.label}
                      </span>
                      <span className="text-sm md:text-base font-bold text-text font-mono">
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Key Contributions & Findings */}
                <div className="space-y-2.5 mb-6">
                  <p className="text-xs font-mono text-accent tracking-wider uppercase flex items-center gap-1.5">
                    <Sparkles size={12} />
                    Key Methodological Contributions & Findings:
                  </p>
                  {item.bullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-subtext text-sm leading-relaxed">
                      <CheckCircle2 size={15} className="text-accent3 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                {/* Tech & Methodologies stack */}
                <div className="pt-4 border-t border-border/50 flex flex-wrap items-center gap-1.5">
                  <span className="text-xs font-mono text-subtext mr-2 flex items-center gap-1">
                    <Layers size={12} />
                    Stack & Methods:
                  </span>
                  {item.tech.map((t) => (
                    <span key={t} className="tech-tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
