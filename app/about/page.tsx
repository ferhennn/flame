import type { Metadata } from "next";
import SectionLabel from "@/components/ui/SectionLabel";
import MagneticButton from "@/components/ui/MagneticButton";
import { CAPABILITIES, EXPERIENCE, SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description:
    "Farhan Sheikh is a web developer working across frontend development, interaction design and modern web technologies.",
};

export default function AboutPage() {
  return (
    <div className="px-6 pb-24 pt-32 md:px-10 md:pt-40">
      <div className="mx-auto max-w-[1600px]">
        <SectionLabel index="01" label="ABOUT" />

        <h1 className="mt-8 editorial-heading text-[12vw] leading-[0.95] tracking-tight text-ink sm:text-7xl md:text-8xl">
          WHO I AM
        </h1>

        <div className="mt-12 grid gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-7">
            <p className="text-lg leading-relaxed text-ink-dim md:text-xl">
              I&rsquo;m {SITE.name}, a web developer who cares about how digital
              products feel &mdash; not just how they&rsquo;re built.
            </p>
            <div className="mt-8 space-y-5 text-sm leading-relaxed text-ink-dim md:text-base">
              <p>
                I work across design and development to create websites and digital
                experiences that are fast, functional and visually intentional.
              </p>
              <p>
                My work sits at the intersection of frontend development, interaction
                design and modern web technologies.
              </p>
              <p>
                I enjoy taking an idea from a rough concept to something people can
                actually interact with, and I&rsquo;m particularly interested in modern
                frontend development, 3D interfaces, creative development and the ways
                AI can change how we build software.
              </p>
            </div>
          </div>

          <div className="border-t border-line pt-8 md:col-span-5 md:border-l md:border-t-0 md:pl-12 md:pt-0">
            <p className="font-mono text-[11px] tracking-[0.2em] text-ink-mute">WHAT I DO</p>
            <ul className="mt-5 space-y-3 text-sm text-ink-dim">
              <li>Frontend development &mdash; React, Next.js, TypeScript</li>
              <li>Creative development &mdash; Three.js, WebGL, motion</li>
              <li>WordPress builds &mdash; Elementor, WooCommerce</li>
              <li>AI-assisted development workflows</li>
            </ul>
          </div>
        </div>

        {/* experience */}
        <section className="mt-24 border-t border-line pt-12">
          <SectionLabel index="02" label="EXPERIENCE" />
          <div className="mt-10 border-t border-line">
            {EXPERIENCE.map((item) => (
              <div key={item.title} className="grid gap-4 border-b border-line py-8 md:grid-cols-12 md:gap-8">
                <div className="md:col-span-2">
                  <span className="font-mono text-[11px] tracking-[0.2em] text-ink-mute">{item.period}</span>
                </div>
                <div className="md:col-span-4">
                  <p className="editorial-heading text-xl tracking-tight text-ink md:text-2xl">{item.title}</p>
                  <p className="mt-1 font-mono text-[11px] tracking-[0.2em] text-ink-mute">{item.org}</p>
                </div>
                <div className="md:col-span-6">
                  <p className="max-w-md text-sm leading-relaxed text-ink-dim">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* technology */}
        <section className="mt-24 border-t border-line pt-12">
          <SectionLabel index="03" label="TECHNOLOGY" />
          <div className="mt-10 grid gap-x-8 gap-y-10 md:grid-cols-5">
            {CAPABILITIES.map((group) => (
              <div key={group.group}>
                <p className="font-mono text-[11px] tracking-[0.2em] text-ink-mute">{group.group}</p>
                <ul className="mt-4 space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="editorial-heading text-lg tracking-tight text-ink md:text-xl">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* how i think */}
        <section className="mt-24 border-t border-line pt-12">
          <SectionLabel index="04" label="HOW I THINK" />
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-dim md:text-xl">
            Remove what doesn&rsquo;t need to exist. Small interactions create
            memorable experiences. Beautiful interfaces should still feel fast.
          </p>
        </section>

        {/* currently exploring */}
        <section className="mt-24 border-t border-line pt-12">
          <SectionLabel index="05" label="CURRENTLY EXPLORING" />
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-dim md:text-xl">
            You&rsquo;ll probably find me experimenting with a new idea, exploring new
            technology, designing something that probably didn&rsquo;t need to be
            designed, or trying to figure out how to make a website feel a little less
            ordinary.
          </p>
        </section>

        {/* contact */}
        <section className="mt-24 flex flex-col gap-8 border-t border-line pt-12 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel index="06" label="CONTACT" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-ink-dim">
              I&rsquo;m always interested in interesting products, web experiences and
              ideas worth building.
            </p>
          </div>
          <MagneticButton
            href="/contact"
            className="inline-flex w-fit items-center gap-2 border border-ink/70 px-6 py-3 font-mono text-[11px] tracking-[0.2em] text-ink transition-colors hover:bg-ink hover:text-bg"
          >
            GET IN TOUCH
          </MagneticButton>
        </section>
      </div>
    </div>
  );
}
