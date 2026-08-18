interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`max-w-xl ${className}`}>
      <p className="text-[13px] font-semibold uppercase tracking-wider text-sage-deep">{eyebrow}</p>
      <h2 className="mt-2.5 font-display text-[clamp(26px,3.4vw,36px)] font-medium tracking-tight text-text">
        {title}
      </h2>
      {description && <p className="mt-3 text-base text-text-soft">{description}</p>}
    </div>
  );
}
