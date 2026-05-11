import { GraduationCap, Trophy, Globe, BookOpen } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import { resumeData } from "@/data/resume";

export default function About() {
  return (
    <SectionWrapper id="about" className="border-t border-border/40">
      <SectionHeader
        eyebrow="01. about me"
        title="Building systems that matter"
        subtitle={resumeData.summary}
      />

      <div className="grid md:grid-cols-2 gap-8">
        {/* Education card */}
        <div className="section-fade group p-6 rounded-2xl border border-border bg-surface/60 card-hover">
          <div className="flex items-start gap-4 mb-5">
            <div className="p-2.5 rounded-xl bg-accent/10 border border-accent/20 group-hover:border-accent/40 transition-colors">
              <GraduationCap size={20} className="text-accent" />
            </div>
            <div>
              <h3 className="text-text font-semibold text-base">Education</h3>
              <p className="text-subtext text-sm mt-0.5">Academic Background</p>
            </div>
          </div>
          {resumeData.education.map((edu) => (
            <div key={edu.institution}>
              <p className="text-text font-semibold">{edu.institution}</p>
              <p className="text-accent text-sm mt-1 font-mono">{edu.degree}</p>
              <div className="flex items-center justify-between mt-2">
                <span className="text-subtext text-xs font-mono">{edu.period}</span>
                <span className="px-3 py-1 rounded-full bg-accent3/10 border border-accent3/25 text-accent3 text-xs font-mono font-semibold">
                  CGPA {edu.gpa}
                </span>
              </div>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {edu.coursework.map((c) => (
                  <span key={c} className="tech-tag text-subtext border-border/60" style={{ color: "var(--subtext)", background: "rgba(30,45,69,0.4)", borderColor: "rgba(30,45,69,0.8)" }}>
                    {c}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Achievements & Certs */}
        <div className="flex flex-col gap-6">
          <div className="section-fade group p-6 rounded-2xl border border-border bg-surface/60 card-hover">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-2.5 rounded-xl bg-accent2/10 border border-accent2/20 group-hover:border-accent2/40 transition-colors">
                <Trophy size={20} className="text-accent2" />
              </div>
              <div>
                <h3 className="text-text font-semibold text-base">Achievements</h3>
              </div>
            </div>
            {resumeData.achievements.map((a) => (
              <div key={a.title} className="flex items-start gap-3">
                <span className="text-accent2 mt-1 text-sm">◆</span>
                <div>
                  <p className="text-text text-sm font-medium">{a.title}</p>
                  <p className="text-subtext text-xs mt-0.5">{a.description} — {a.year}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="section-fade group p-6 rounded-2xl border border-border bg-surface/60 card-hover">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-2.5 rounded-xl bg-accent3/10 border border-accent3/20 group-hover:border-accent3/40 transition-colors">
                <BookOpen size={20} className="text-accent3" />
              </div>
              <div>
                <h3 className="text-text font-semibold text-base">Certifications</h3>
              </div>
            </div>
            <div className="space-y-3">
              {resumeData.certifications.map((cert) => (
                <div key={cert.name} className="flex items-center justify-between">
                  <div>
                    <p className="text-text text-sm font-medium">{cert.name}</p>
                    <p className="text-subtext text-xs mt-0.5">{cert.issuer}</p>
                  </div>
                  <span className="font-mono text-xs text-accent bg-accent/8 border border-accent/15 px-2 py-0.5 rounded">
                    {cert.year}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="section-fade group p-6 rounded-2xl border border-border bg-surface/60 card-hover">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-2.5 rounded-xl bg-accent/10 border border-accent/20">
                <Globe size={20} className="text-accent" />
              </div>
              <h3 className="text-text font-semibold text-base pt-0.5">Languages</h3>
            </div>
            <div className="space-y-2">
              {resumeData.languages.map((lang) => (
                <div key={lang.name} className="flex items-center justify-between">
                  <span className="text-text text-sm">{lang.name}</span>
                  <span className="text-subtext text-xs font-mono">{lang.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
