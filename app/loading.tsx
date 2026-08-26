export default function Loading() {
  return (
    <div className="flex h-[100svh] w-full flex-col items-center justify-center gap-4 bg-bg">
      <p className="editorial-heading text-3xl tracking-tight text-ink">FARHAN</p>
      <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.25em] text-ink-mute">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-ember" />
        LOADING
      </div>
    </div>
  );
}
