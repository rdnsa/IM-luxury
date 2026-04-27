export function SkeletonCard() {
  return (
    <article className="overflow-hidden rounded-3xl border border-white/10 bg-black/45">
      <div className="skeleton h-72 w-full" />
      <div className="space-y-3 p-6">
        <div className="skeleton h-4 w-20 rounded-full" />
        <div className="skeleton h-8 w-3/4 rounded-xl" />
        <div className="skeleton h-4 w-full rounded-xl" />
        <div className="skeleton h-4 w-1/2 rounded-xl" />
      </div>
    </article>
  );
}
