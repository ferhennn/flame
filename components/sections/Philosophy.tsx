import SectionLabel from "@/components/ui/SectionLabel";
import RevealText from "@/components/ui/RevealText";
import { PHILOSOPHY } from "@/lib/constants";

export default function Philosophy() {
  return (
    <section className="relative bg-bg border-t border-line px-6 py-24 md:px-10 md:py-32" id="how-i-build">
      <div className="mx-auto max-w-[1600px]">
        <SectionLabel index="06" label="HOW I BUILD" />

        <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {PHILOSOPHY.map((item) => (
            <div key={item.index} className="border-t border-line pt-6">
              <span className="font-mono text-[11px] text-ink-mute">{item.index}</span>
              <RevealText as="h3" className="mt-4 editorial-heading text-3xl tracking-tight text-ink md:text-4xl">
                {item.title}
              </RevealText>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-dim">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
