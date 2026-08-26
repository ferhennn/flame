import SectionLabel from "@/components/ui/SectionLabel";
import RevealText from "@/components/ui/RevealText";

export default function FinalMoment() {
  return (
    <section
      className="relative flex h-[80svh] w-full items-center overflow-hidden px-6 md:px-10"
      id="final-moment"
    >
      <div className="pointer-events-none mx-auto w-full max-w-[1600px]">
        <SectionLabel index="09" label="STILL BUILDING" />
        <RevealText
          as="p"
          className="mt-6 max-w-md text-lg leading-relaxed text-ink-dim md:text-xl"
        >
          Every project starts the same way &mdash; a rough idea, a late night,
          and the patience to see it through.
        </RevealText>
      </div>
    </section>
  );
}
