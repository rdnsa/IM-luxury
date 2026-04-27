import { SkeletonCard } from "@/components/common/skeleton-card";

export default function ProductsLoading() {
  return (
    <main className="luxury-container section-spacing pt-32">
      <div className="mb-10 space-y-4">
        <div className="skeleton h-5 w-36 rounded-full" />
        <div className="skeleton h-12 w-60 rounded-xl" />
      </div>
      <div className="mb-8 flex gap-3">
        <div className="skeleton h-10 w-24 rounded-full" />
        <div className="skeleton h-10 w-24 rounded-full" />
        <div className="skeleton h-10 w-24 rounded-full" />
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 9 }, (_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
    </main>
  );
}
