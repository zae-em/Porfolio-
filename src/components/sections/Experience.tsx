import { Briefcase, ChevronRight } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import { resumeData } from "@/data/resume";

export default function Experience() {
  return (
    <SectionWrapper id="experience" className="border-t border-border/40">
      <SectionHeader
        eyebrow="04. experience"
        title="Work & Teaching"
        subtitle="Hands-on experience applying and teaching software engineering concepts."
      />

      <div className="relative pl-8 border-l border-border/60">
        {resumeData.experience.map((exp, i) => (
          <div key={i} className="section-fade relative mb-10 last:mb-0">
            {/* Timeline dot */}
            <div className="absolute -left-[41px] top-1.5 w-3.5 h-3.5 rounded-full bg-accent border-2 border-bg" />

            <div className="group p-6 rounded-2xl border border-border bg-surface/50 card-hover">
              <div className="flex items-start justify-between gap-4 flex-wrap mb-1">
                <div>
                  <h3 className="text-text font-bold text-base leading-snug">{exp.role}</h3>
                  <p className="text-accent text-sm font-mono mt-0.5">{exp.company}</p>
                </div>
                <span className="shrink-0 px-3 py-1 rounded-full border border-border text-subtext text-xs font-mono">
                  {exp.period}
                </span>
              </div>

              <div className="mt-4 space-y-2.5">
                {exp.bullets.map((bullet, j) => (
                  <div key={j} className="flex gap-3 text-subtext text-sm leading-relaxed">
                    <ChevronRight size={14} className="text-accent flex-shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-accent/10 border border-accent/20">
                  <Briefcase size={13} className="text-accent" />
                </div>
                <span className="text-subtext text-xs font-mono">Teaching Assistant</span>
              </div>
            </div>
          </div>
        ))}

        {/* Open to work callout */}
        <div className="section-fade relative">
          <div className="absolute -left-[41px] top-1.5 w-3.5 h-3.5 rounded-full bg-border border-2 border-bg" />
          <div className="p-5 rounded-2xl border border-dashed border-accent3/30 bg-accent3/3">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-accent3 animate-pulse-slow" />
              <p className="text-accent3 font-mono text-sm font-semibold tracking-wide">
                OPEN TO INTERNSHIP OPPORTUNITIES
              </p>
            </div>
            <p className="text-subtext text-sm mt-2 ml-5">
              Currently seeking software engineering or AI/ML internships where I can contribute to real-world systems alongside experienced engineers.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
