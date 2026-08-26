import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";

export default function NotFound() {
  return (
    <div className="flex min-h-[80svh] flex-col justify-center px-6 md:px-10">
      <div className="mx-auto w-full max-w-[1600px]">
        <SectionLabel index="404" label="PAGE NOT FOUND" />
        <h1 className="mt-8 editorial-heading text-[16vw] leading-[0.9] tracking-tight text-ink sm:text-8xl md:text-9xl">
          LOST.
        </h1>
        <p className="mt-8 max-w-sm text-sm leading-relaxed text-ink-dim md:text-base">
          The page you&rsquo;re looking for doesn&rsquo;t exist, or has moved.
        </p>
        <Link
          href="/"
          data-cursor="arrow"
          className="mt-10 inline-flex w-fit items-center gap-2 border border-ink/70 px-6 py-3 font-mono text-[11px] tracking-[0.2em] text-ink transition-colors hover:bg-ink hover:text-bg"
        >
          BACK TO HOME
        </Link>
      </div>
    </div>
  );
}
