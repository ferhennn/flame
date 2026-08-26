"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import RevealText from "@/components/ui/RevealText";
import { PROJECTS } from "@/lib/projects";

export default function SelectedWork() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className="relative bg-bg border-t border-line px-6 py-24 md:px-10 md:py-32" id="work">
      <div className="mx-auto max-w-[1600px]">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionLabel index="02" label="SELECTED WORK" />
          <RevealText as="p" className="max-w-sm text-sm text-ink-dim">
            A selection of websites, interfaces and digital experiences I&rsquo;ve built
            across different projects.
          </RevealText>
        </div>

        <div className="mt-16 border-t border-line">
          {PROJECTS.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              data-cursor="view"
              onMouseEnter={() => setActive(project.slug)}
              onMouseLeave={() => setActive(null)}
              className="group relative flex flex-col gap-3 border-b border-line py-8 md:flex-row md:items-center md:justify-between md:py-10"
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

      {/* floating preview panel, desktop only */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-none fixed right-16 top-1/2 hidden h-64 w-80 -translate-y-1/2 border border-line bg-bg-raised lg:block"
          >
            <div className="flex h-full w-full flex-col justify-between p-6">
              <span className="font-mono text-[10px] tracking-[0.2em] text-ink-mute">
                {PROJECTS.find((p) => p.slug === active)?.category}
              </span>
              <span className="editorial-heading text-4xl tracking-tight text-ink">
                {PROJECTS.find((p) => p.slug === active)?.title}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
