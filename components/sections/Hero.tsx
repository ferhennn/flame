"use client";

import { motion } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";
import { SITE, STACK_TAGS } from "@/lib/constants";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  return (
    <section className="relative h-[100svh] w-full overflow-hidden" id="hero">
      <div className="pointer-events-none absolute inset-0 flex flex-col justify-between px-6 pb-10 pt-28 md:px-10 md:pb-14 md:pt-32">
        {/* top metadata row */}
        <div className="flex items-start justify-between">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
            className="font-mono text-[11px] tracking-[0.25em] text-ink-mute"
          >
            WEB DEVELOPER / DIGITAL BUILDER
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease }}
            className="hidden text-right font-mono text-[11px] tracking-[0.2em] text-ink-mute md:block"
          >
            <p>01</p>
            <p>PORTFOLIO</p>
            <p>{SITE.year}</p>
          </motion.div>
        </div>

        {/* main heading block */}
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35, ease }}
            className="editorial-heading text-[13vw] font-medium leading-[0.92] tracking-tight text-ink sm:text-[9vw] md:text-[6.4vw] lg:text-[80px]"
          >
            I BUILD DIGITAL
            <br />
            EXPERIENCES.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.55, ease }}
            className="mt-6 max-w-md text-sm leading-relaxed text-ink-dim md:text-base"
          >
            I&rsquo;m Farhan, a web developer focused on building fast, thoughtful and
            visually driven digital experiences with modern web technologies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7, ease }}
            className="pointer-events-auto mt-9 flex flex-wrap items-center gap-5"
          >
            <MagneticButton
              href="/work"
              className="inline-flex items-center gap-2 border border-ink/70 px-6 py-3 font-mono text-[11px] tracking-[0.2em] text-ink transition-colors hover:bg-ink hover:text-bg"
            >
              VIEW MY WORK
            </MagneticButton>
            <MagneticButton
              href="/about"
              className="inline-flex items-center gap-2 px-2 py-3 font-mono text-[11px] tracking-[0.2em] text-ink-dim transition-colors hover:text-ink"
            >
              ABOUT ME
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.9 }}
            className="mt-10 hidden gap-4 font-mono text-[10px] tracking-[0.2em] text-ink-mute md:flex"
          >
            {STACK_TAGS.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </motion.div>
        </div>

        {/* bottom metadata row */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="font-mono text-[10px] leading-relaxed tracking-[0.2em] text-ink-mute"
          >
            <p>{SITE.location}</p>
            <p>{SITE.availability}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] text-ink-mute"
          >
            SCROLL TO EXPLORE
            <motion.span
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            >
              ↓
            </motion.span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
