import Link from "next/link";
import { SITE, SOCIAL_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="relative z-10 bg-bg border-t border-line px-6 py-14 md:px-10 md:py-16">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="editorial-heading text-2xl tracking-tight text-ink">{SITE.name.toUpperCase()}</p>
          <p className="mt-2 font-mono text-[11px] tracking-[0.2em] text-ink-mute">
            WEB DEVELOPER
            <br />
            DIGITAL BUILDER
          </p>
        </div>

        <div className="flex flex-col gap-4 font-mono text-[11px] tracking-[0.2em] text-ink-dim md:items-end">
          <div className="flex gap-6">
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
            <a href={`mailto:${SITE.email}`} data-cursor="arrow" className="transition-colors hover:text-ink">
              EMAIL
            </a>
          </div>
          <p>© {SITE.year} {SITE.name.toUpperCase()}</p>
        </div>
      </div>

      <div className="mx-auto mt-14 flex max-w-[1600px] items-center justify-between border-t border-line pt-6 font-mono text-[10px] tracking-[0.2em] text-ink-mute">
        <p>BUILT WITH NEXT.JS + THREE.JS</p>
        <Link href="/" className="hover:text-ink-dim">
          BACK TO TOP
        </Link>
      </div>
    </footer>
  );
}
