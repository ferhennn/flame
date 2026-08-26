import type { Metadata } from "next";
import SectionLabel from "@/components/ui/SectionLabel";
import ContactForm from "@/components/forms/ContactForm";
import { SITE, SOCIAL_LINKS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Farhan Sheikh to start a project.",
};

export default function ContactPage() {
  return (
    <div className="px-6 pb-24 pt-32 md:px-10 md:pt-40">
      <div className="mx-auto max-w-[1600px]">
        <SectionLabel index="01" label="CONTACT" />

        <h1 className="mt-8 editorial-heading text-[13vw] leading-[0.92] tracking-tight text-ink sm:text-8xl md:text-9xl">
          LET&rsquo;S MAKE
          <br />
          SOMETHING
          <br />
          GOOD.
        </h1>

        <div className="mt-16 grid gap-16 border-t border-line pt-14 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-4">
            <a
              href={`mailto:${SITE.email}`}
              data-cursor="arrow"
              className="font-mono text-lg tracking-wide text-ink transition-colors hover:text-ink-dim"
            >
              {SITE.email}
            </a>

            <div className="mt-10 flex flex-col gap-3 font-mono text-[11px] tracking-[0.2em] text-ink-mute">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="arrow"
                  className="w-fit transition-colors hover:text-ink"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
