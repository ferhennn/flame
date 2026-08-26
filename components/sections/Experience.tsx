import SectionLabel from "@/components/ui/SectionLabel";
import RevealText from "@/components/ui/RevealText";
import { EXPERIENCE } from "@/lib/constants";

export default function Experience() {
  return (
    <section className="relative bg-bg border-t border-line px-6 py-24 md:px-10 md:py-32" id="experience">
      <div className="mx-auto max-w-[1600px]">
        <SectionLabel index="04" label="EXPERIENCE" />

        <div className="mt-14 border-t border-line">
          {EXPERIENCE.map((item) => (
            <div
              key={item.title}
              className="grid gap-4 border-b border-line py-10 md:grid-cols-12 md:gap-8"
            >
              <div className="md:col-span-2">
                <span className="font-mono text-[11px] tracking-[0.2em] text-ink-mute">
                  {item.period}
                </span>
              </div>
              <div className="md:col-span-4">
                <RevealText as="p" className="editorial-heading text-xl tracking-tight text-ink md:text-2xl">
                  {item.title}
                </RevealText>
                <p className="mt-1 font-mono text-[11px] tracking-[0.2em] text-ink-mute">{item.org}</p>
              </div>
              <div className="md:col-span-6">
                <p className="max-w-md text-sm leading-relaxed text-ink-dim">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
