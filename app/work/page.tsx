import type { Metadata } from "next";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import { PROJECTS } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "A selection of websites, interfaces and digital experiences built by Farhan Sheikh.",
};

export default function WorkPage() {
  return (
    <div className="px-6 pb-24 pt-32 md:px-10 md:pt-40">
      <div className="mx-auto max-w-[1600px]">
        <SectionLabel index="01" label="SELECTED WORK" />
        <h1 className="mt-8 editorial-heading text-[12vw] leading-[0.95] tracking-tight text-ink sm:text-7xl md:text-8xl">
          WORK
        </h1>
        <p className="mt-6 max-w-md text-sm leading-relaxed text-ink-dim md:text-base">
          A selection of websites, interfaces and digital experiences I&rsquo;ve built
          across different projects.
        </p>

        <div className="mt-16 border-t border-line">
          {PROJECTS.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              data-cursor="view"
              className="group flex flex-col gap-3 border-b border-line py-8 md:flex-row md:items-center md:justify-between md:py-10"
            >
              <div className="flex items-baseline gap-6 md:gap-10">
                <span className="font-mono text-xs text-ink-mute">{project.number}</span>
                <span className="editorial-heading text-[9vw] leading-none tracking-tight text-ink transition-transform duration-500 group-hover:translate-x-3 sm:text-5xl md:text-6xl">
                  {project.title}
                </span>
              </div>
              <div className="flex items-center justify-between gap-6 pl-14 md:pl-0 md:text-right">
                <span className="font-mono text-[11px] tracking-[0.2em] text-ink-mute">
                  {project.category}
                </span>
                <span className="hidden font-mono text-[11px] tracking-[0.2em] text-ink-mute md:block">
                  {project.year}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
