import { Mail, Github, Linkedin, MapPin, Send, Phone } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import { resumeData } from "@/data/resume";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: resumeData.email,
    href: `mailto:${resumeData.email}`,
    color: "text-accent",
    bg: "bg-accent/8 border-accent/20 hover:border-accent/50 hover:bg-accent/12",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/zae-em",
    href: resumeData.github,
    color: "text-text",
    bg: "bg-card border-border hover:border-border/80 hover:bg-surface",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/muhammad-zaeem",
    href: resumeData.linkedin,
    color: "text-accent2",
    bg: "bg-accent2/8 border-accent2/20 hover:border-accent2/50 hover:bg-accent2/12",
  },
  {
    icon: Phone,
    label: "Phone",
    value: resumeData.phone,
    href: `tel:${resumeData.phone}`,
    color: "text-accent3",
    bg: "bg-accent3/8 border-accent3/20 hover:border-accent3/50 hover:bg-accent3/12",
  },
];

export default function Contact() {
  return (
    <SectionWrapper id="contact" className="border-t border-border/40">
      <SectionHeader
        eyebrow="05. contact"
        title="Let's work together"
        subtitle="Open to internship opportunities, freelance projects, and interesting collaborations. Reach out and let's build something."
      />

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact cards */}
        <div className="space-y-4">
          {contactLinks.map(({ icon: Icon, label, value, href, color, bg }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className={`section-fade group flex items-center gap-4 p-4 rounded-xl border transition-all duration-200 ${bg}`}
            >
              <div className={`p-2.5 rounded-lg bg-bg/50 border border-border/50`}>
                <Icon size={18} className={color} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-subtext text-xs font-mono">{label}</p>
                <p className={`font-medium text-sm truncate ${color}`}>{value}</p>
              </div>
              <Send size={14} className="text-border group-hover:text-subtext transition-colors flex-shrink-0" />
            </a>
          ))}

          <div className="section-fade flex items-center gap-2 mt-4 px-2">
            <MapPin size={14} className="text-subtext" />
            <span className="text-subtext text-sm font-mono">{resumeData.location}</span>
          </div>
        </div>

        {/* Message card */}
        <div className="section-fade p-7 rounded-2xl border border-border bg-surface/50 flex flex-col justify-between">
          <div>
            <h3 className="text-text font-bold text-xl mb-3">Send a message</h3>
            <p className="text-subtext text-sm leading-relaxed mb-6">
              Whether you have an internship opportunity, a project idea, or just want to connect — I&apos;m always open to a conversation. Typical response within 24 hours.
            </p>
            <div className="space-y-3">
              {[
                "Internship & job opportunities",
                "Freelance or project collaborations",
                "Open source & research discussions",
                "General networking",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-subtext text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent3 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <a
            href={`mailto:${resumeData.email}?subject=Hello%20Zaeem!`}
            className="mt-8 flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-accent text-bg font-semibold text-sm tracking-wide hover:bg-accent/90 transition-all hover:shadow-lg hover:shadow-accent/20"
          >
            <Mail size={15} />
            Send Email
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}
