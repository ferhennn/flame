"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          scrolled ? "bg-bg/80 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <nav className="flex items-center justify-between px-6 py-5 md:px-10 md:py-6" aria-label="Primary">
          <Link href="/" className="font-mono text-[13px] tracking-[0.2em] text-ink" data-cursor="arrow">
            FARHAN
          </Link>

          <ul className="hidden items-center gap-10 md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  data-cursor="arrow"
                  className="font-mono text-[11px] tracking-[0.2em] text-ink-dim transition-colors hover:text-ink"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-2 font-mono text-[11px] tracking-[0.2em] text-ink-dim md:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-ember" />
            AVAILABLE
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="font-mono text-[11px] tracking-[0.2em] text-ink-dim md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? "CLOSE" : "MENU"}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-40 flex flex-col justify-center gap-8 bg-bg px-8 md:hidden"
          >
            {NAV_LINKS.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.08 * i, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="editorial-heading text-5xl tracking-tight text-ink"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <div className="mt-8 flex items-center gap-2 font-mono text-[11px] tracking-[0.2em] text-ink-dim">
              <span className="h-1.5 w-1.5 rounded-full bg-ember" />
              AVAILABLE FOR SELECTED PROJECTS
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
