import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SectionLabel from "@/components/ui/SectionLabel";
import { PROJECTS, getProject, getAdjacentProject } from "@/lib/projects";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const next = getAdjacentProject(slug);

  return (
    <div className="px-6 pb-24 pt-32 md:px-10 md:pt-40">
      <div className="mx-auto max-w-[1600px]">
        <div className="flex items-center justify-between">
          <SectionLabel index={project.number} label={project.category} />
          <span className="font-mono text-[11px] tracking-[0.2em] text-ink-mute">{project.year}</span>
        </div>

        <h1 className="mt-8 editorial-heading text-[13vw] leading-[0.92] tracking-tight text-ink sm:text-8xl md:text-9xl">
          {project.title}
        </h1>

        <p className="mt-10 max-w-2xl text-lg leading-relaxed text-ink-dim md:text-xl">
          {project.description}
        </p>

        <div className="mt-16 aspect-[16/9] w-full border border-line bg-bg-raised" aria-hidden="true" />

        <div className="mt-20 grid gap-14 border-t border-line pt-14 md:grid-cols-2 md:gap-16">
          <div>
            <p className="font-mono text-[11px] tracking-[0.2em] text-ink-mute">THE CHALLENGE</p>
            <p className="mt-4 text-sm leading-relaxed text-ink-dim md:text-base">{project.challenge}</p>
          </div>
          <div>
            <p className="font-mono text-[11px] tracking-[0.2em] text-ink-mute">THE APPROACH</p>
            <p className="mt-4 text-sm leading-relaxed text-ink-dim md:text-base">{project.approach}</p>
          </div>
          <div>
            <p className="font-mono text-[11px] tracking-[0.2em] text-ink-mute">DESIGN</p>
            <p className="mt-4 text-sm leading-relaxed text-ink-dim md:text-base">{project.design}</p>
          </div>
          <div>
            <p className="font-mono text-[11px] tracking-[0.2em] text-ink-mute">DEVELOPMENT</p>
            <p className="mt-4 text-sm leading-relaxed text-ink-dim md:text-base">{project.development}</p>
          </div>
        </div>

        <div className="mt-14 border-t border-line pt-14">
          <p className="font-mono text-[11px] tracking-[0.2em] text-ink-mute">RESULT</p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-dim md:text-base">{project.result}</p>
        </div>

        <div className="mt-14 border-t border-line pt-14">
          <p className="font-mono text-[11px] tracking-[0.2em] text-ink-mute">TECHNOLOGY</p>
          <div className="mt-5 flex flex-wrap gap-4">
            {project.technologies.map((tech) => (
              <span key={tech} className="editorial-heading text-lg tracking-tight text-ink">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <Link
          href={`/work/${next.slug}`}
          data-cursor="view"
          className="mt-24 flex items-center justify-between border-t border-line py-14"
        >
          <div>
            <p className="font-mono text-[11px] tracking-[0.2em] text-ink-mute">NEXT PROJECT</p>
            <p className="mt-3 editorial-heading text-4xl tracking-tight text-ink md:text-6xl">{next.title}</p>
          </div>
          <span className="font-mono text-2xl text-ink-dim">→</span>
        </Link>
      </div>
    </div>
  );
}
