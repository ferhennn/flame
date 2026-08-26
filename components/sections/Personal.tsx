import SectionLabel from "@/components/ui/SectionLabel";
import RevealText from "@/components/ui/RevealText";

export default function Personal() {
  return (
    <section className="relative bg-bg border-t border-line px-6 py-24 md:px-10 md:py-32" id="personal">
      <div className="mx-auto max-w-[1600px]">
        <SectionLabel index="07" label="WHEN I'M NOT CODING" />
        <RevealText
          as="p"
          className="mt-8 max-w-2xl text-xl leading-relaxed text-ink-dim md:text-2xl"
        >
          You&rsquo;ll probably find me experimenting with a new idea, exploring new
          technology, designing something that probably didn&rsquo;t need to be
          designed, or trying to figure out how to make a website feel a little less
          ordinary.
        </RevealText>
      </div>
    </section>
  );
}
