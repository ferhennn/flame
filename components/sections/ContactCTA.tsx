import SectionLabel from "@/components/ui/SectionLabel";
import RevealText from "@/components/ui/RevealText";
import MagneticButton from "@/components/ui/MagneticButton";
import { SITE, SOCIAL_LINKS } from "@/lib/constants";

export default function ContactCTA() {
  return (
    <section className="relative bg-bg border-t border-line px-6 py-24 md:px-10 md:py-32" id="contact">
      <div className="mx-auto max-w-[1600px]">
        <SectionLabel index="08" label="CONTACT" />

        <RevealText
          as="h2"
          className="mt-8 editorial-heading text-[13vw] leading-[0.95] tracking-tight text-ink sm:text-7xl md:text-8xl"
        >
          HAVE AN IDEA?
          <br />
          LET&rsquo;S BUILD IT.
        </RevealText>

        <div className="mt-10 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <p className="max-w-sm text-sm leading-relaxed text-ink-dim md:text-base">
            I&rsquo;m always interested in interesting products, web experiences and
            ideas worth building.
          </p>

          <div className="flex flex-col gap-6 md:items-end">
            <MagneticButton
              href={`mailto:${SITE.email}`}
              className="inline-flex items-center gap-3 border border-ink/70 px-7 py-4 font-mono text-[11px] tracking-[0.2em] text-ink transition-colors hover:bg-ink hover:text-bg"
            >
              START A CONVERSATION
            </MagneticButton>
            <a
              href={`mailto:${SITE.email}`}
              data-cursor="arrow"
              className="font-mono text-sm tracking-wide text-ink-dim transition-colors hover:text-ink"
            >
              {SITE.email}
            </a>
          </div>
        </div>

        <div className="mt-16 flex gap-8 border-t border-line pt-8 font-mono text-[11px] tracking-[0.2em] text-ink-mute">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="arrow"
              className="transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
