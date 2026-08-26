import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import RevealText from "@/components/ui/RevealText";

const TECH = ["REACT", "NEXT.JS", "TYPESCRIPT", "THREE.JS", "WORDPRESS", "AI"];

export default function AboutPreview() {
  return (
    <section className="relative bg-bg border-t border-line px-6 py-24 md:px-10 md:py-32" id="about">
      <div className="mx-auto grid max-w-[1600px] gap-16 md:grid-cols-12">
        <div className="md:col-span-7">
          <SectionLabel index="03" label="ABOUT" />
          <RevealText as="h2" className="mt-6 editorial-heading text-4xl leading-[1.05] tracking-tight text-ink sm:text-5xl md:text-6xl">
            I&rsquo;M A WEB DEVELOPER
            <br />
            WHO CARES ABOUT HOW
            <br />
            DIGITAL PRODUCTS FEEL.
          </RevealText>

          <div className="mt-10 max-w-xl space-y-5 text-sm leading-relaxed text-ink-dim md:text-base">
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
              actually interact with.
            </p>
            <p>
              I&rsquo;m particularly interested in modern frontend development, 3D
              interfaces, creative development and the ways AI can change how we build
              software.
            </p>
          </div>

          <Link
            href="/about"
            data-cursor="arrow"
            className="mt-10 inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.2em] text-ink transition-colors hover:text-ink-dim"
          >
            MORE ABOUT ME →
          </Link>
        </div>

        <div className="flex flex-col justify-between border-t border-line pt-8 md:col-span-5 md:border-l md:border-t-0 md:pl-12 md:pt-0">
          <div>
            <p className="editorial-heading text-2xl tracking-tight text-ink">FARHAN SHEIKH</p>
            <p className="mt-1 font-mono text-[11px] tracking-[0.2em] text-ink-mute">WEB DEVELOPER</p>
          </div>

          <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-3 font-mono text-[11px] tracking-[0.2em] text-ink-dim md:mt-0">
            {TECH.map((item) => (
              <li key={item} className="border-b border-line pb-3">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
