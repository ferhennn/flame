export default function StaticCigaretteFallback() {
  return (
    <div className="flex h-full w-full items-center justify-center" aria-hidden="true">
      <svg
        viewBox="0 0 400 120"
        className="w-3/4 max-w-md opacity-90"
        role="img"
        aria-label="Illustration of a cigarette"
      >
        <defs>
          <linearGradient id="paper" x1="0" x2="1">
            <stop offset="0%" stopColor="#efece1" />
            <stop offset="100%" stopColor="#d9d4c4" />
          </linearGradient>
          <linearGradient id="filter" x1="0" x2="1">
            <stop offset="0%" stopColor="#c9a878" />
            <stop offset="100%" stopColor="#a9835a" />
          </linearGradient>
        </defs>
        <rect x="20" y="48" width="260" height="24" rx="4" fill="url(#paper)" />
        <rect x="280" y="48" width="90" height="24" rx="4" fill="url(#filter)" />
        <circle cx="18" cy="60" r="10" fill="#232019" />
        <circle cx="14" cy="60" r="4" fill="#c4553a" opacity="0.8" />
      </svg>
    </div>
  );
}
