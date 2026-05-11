interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeader({ eyebrow, title, subtitle }: SectionHeaderProps) {
  return (
    <div className="section-fade mb-16">
      <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">
        {`// ${eyebrow}`}
      </p>
      <h2 className="text-3xl md:text-4xl font-bold text-text mb-4 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-subtext max-w-xl leading-relaxed">{subtitle}</p>
      )}
      <div className="mt-5 h-px w-16 bg-gradient-to-r from-accent to-transparent" />
    </div>
  );
}
