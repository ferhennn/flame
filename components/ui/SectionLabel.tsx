type SectionLabelProps = {
  index: string;
  label: string;
  className?: string;
};

export default function SectionLabel({ index, label, className = "" }: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-3 font-mono text-[11px] tracking-[0.25em] text-ink-mute ${className}`}>
      <span className="text-ink-dim">{index}</span>
      <span className="h-px w-6 bg-line-strong" />
      <span>{label}</span>
    </div>
  );
}
