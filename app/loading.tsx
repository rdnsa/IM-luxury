import { SkeletonCard } from "@/components/common/skeleton-card";

export default function RootLoading() {
  return (
    <main className="luxury-container section-spacing pt-36">
      <div className="mb-12 space-y-4">
        <div className="skeleton h-6 w-40 rounded-full" />
        <div className="skeleton h-14 w-full max-w-xl rounded-xl" />
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }, (_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
    </main>
  );
}
