export type Project = {
  slug: string;
  number: string;
  title: string;
  category: string;
  year: string;
  description: string;
  technologies: string[];
  challenge: string;
  approach: string;
  design: string;
  development: string;
  result: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "wavelength",
    number: "01",
    title: "WAVELENGTH",
    category: "DIGITAL / SUSTAINABILITY",
    year: "2025",
    description:
      "A modern digital experience for Wavelength Technology Centre, designed to communicate complex decarbonisation and sustainability initiatives through a clear and visually driven interface.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    challenge:
      "Decarbonisation and sustainability initiatives involve dense, technical information. The site needed to make that content approachable without diluting it.",
    approach:
      "A clear content hierarchy was built around plain-language section breaks, letting the technical detail live one layer deeper for readers who want it.",
    design:
      "A restrained visual system with strong typographic contrast, giving structure to long-form technical content without resorting to decorative elements.",
    development:
      "Built with Next.js and TypeScript for a fast, statically-optimized front end, styled with Tailwind CSS for consistent spacing and type scale.",
    result:
      "A clearer, faster way for visitors to understand Wavelength's initiatives and technical programs.",
  },
  {
    slug: "fundamenta",
    number: "02",
    title: "FUNDAMENTA",
    category: "AGENCY / B2B",
    year: "2025",
    description:
      "A high-performance agency website designed around clear communication, strong visual hierarchy and modern digital experiences for B2B audiences.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Sanity"],
    challenge:
      "B2B audiences need to quickly understand capability and credibility. The site had to communicate both without leaning on generic agency tropes.",
    approach:
      "Content was structured around clear service breakdowns and direct messaging, backed by a CMS so the team could keep the site current.",
    design:
      "A confident, editorial layout with strong type hierarchy, letting the agency's work speak through structure rather than ornamentation.",
    development:
      "Built with Next.js and TypeScript, content managed through Sanity, styled with Tailwind CSS for a consistent and maintainable system.",
    result:
      "A faster, more focused site that communicates the agency's capabilities clearly to B2B visitors.",
  },
  {
    slug: "lifeos",
    number: "03",
    title: "LIFEOS",
    category: "PRODUCT / PRODUCTIVITY",
    year: "2025",
    description:
      "A personal operating system designed to bring goals, strategies, projects and tasks into one connected workspace.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Drizzle",
      "Zustand",
    ],
    challenge:
      "Goals, strategies, projects and tasks are usually scattered across separate tools. The challenge was connecting them into one coherent data model.",
    approach:
      "A relational schema was designed so that every task traces back to a project, strategy and goal, keeping the whole system connected end to end.",
    design:
      "A dense, functional interface built for daily use rather than first impressions, prioritizing speed and clarity over decoration.",
    development:
      "Built with Next.js and TypeScript, Supabase and PostgreSQL for data, Drizzle as the ORM, and Zustand for local state management.",
    result:
      "A single connected workspace replacing several disconnected productivity tools.",
  },
  {
    slug: "outfigue",
    number: "04",
    title: "OUTFIGUE",
    category: "E-COMMERCE",
    year: "2024",
    description:
      "An independent e-commerce experience focused on creating a clean, modern shopping interface for fashion products.",
    technologies: ["WordPress", "WooCommerce", "Elementor"],
    challenge:
      "Independent fashion retail needed a shopping experience that felt modern and trustworthy without a custom-built platform.",
    approach:
      "WooCommerce was configured on top of WordPress with a custom Elementor build, tuned for performance and a clean product browsing flow.",
    design:
      "A minimal storefront layout that keeps focus on product photography, with clear typography and uncluttered navigation.",
    development:
      "Built on WordPress with WooCommerce for commerce logic and Elementor for the front end, optimized for load speed and mobile use.",
    result:
      "A clean, functional storefront giving an independent fashion brand a professional online presence.",
  },
];

export function getProject(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getAdjacentProject(slug: string) {
  const idx = PROJECTS.findIndex((p) => p.slug === slug);
  return PROJECTS[(idx + 1) % PROJECTS.length];
}
