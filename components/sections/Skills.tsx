import SectionLabel from "@/components/ui/SectionLabel";
import RevealText from "@/components/ui/RevealText";
import { CAPABILITIES } from "@/lib/constants";

export default function Skills() {
  return (
    <section className="relative bg-bg border-t border-line px-6 py-24 md:px-10 md:py-32" id="capabilities">
      <div className="mx-auto max-w-[1600px]">
        <SectionLabel index="05" label="WHAT I WORK WITH" />

        <div className="mt-14 grid gap-x-8 gap-y-12 md:grid-cols-5">
          {CAPABILITIES.map((group) => (
            <div key={group.group}>
              <p className="font-mono text-[11px] tracking-[0.2em] text-ink-mute">{group.group}</p>
              <ul className="mt-5 space-y-2">
                {group.items.map((item) => (
                  <RevealText key={item} as="li" className="editorial-heading text-lg tracking-tight text-ink md:text-xl">
                    {item}
                  </RevealText>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
