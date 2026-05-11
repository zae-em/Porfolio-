import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import { resumeData } from "@/data/resume";

const categoryColors: Record<string, { bg: string; border: string; text: string }> = {
  "Languages": { bg: "bg-accent/8", border: "border-accent/20", text: "text-accent" },
  "Web & Frameworks": { bg: "bg-accent2/8", border: "border-accent2/20", text: "text-accent2" },
  "AI / ML": { bg: "bg-accent3/8", border: "border-accent3/20", text: "text-accent3" },
  "HPC & Systems": { bg: "bg-orange-400/8", border: "border-orange-400/20", text: "text-orange-400" },
  "Databases": { bg: "bg-pink-400/8", border: "border-pink-400/20", text: "text-pink-400" },
  "Tools & Platforms": { bg: "bg-yellow-400/8", border: "border-yellow-400/20", text: "text-yellow-400" },
};

export default function Skills() {
  return (
    <SectionWrapper id="skills" className="border-t border-border/40">
      <SectionHeader
        eyebrow="02. skills"
        title="Technical Arsenal"
        subtitle="A curated stack spanning systems programming, AI/ML pipelines, and full-stack web development."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {Object.entries(resumeData.skills).map(([category, items]) => {
          const style = categoryColors[category] || categoryColors["Languages"];
          return (
            <div
              key={category}
              className={`section-fade group p-5 rounded-2xl border border-border bg-surface/50 card-hover`}
            >
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-lg ${style.bg} border ${style.border} mb-4`}>
                <span className={`text-xs font-mono font-semibold tracking-wider ${style.text}`}>
                  {category.toUpperCase()}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {(items as string[]).map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-md text-xs font-mono text-text bg-card border border-border/80 hover:border-border transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
