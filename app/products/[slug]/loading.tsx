export default function ProductDetailLoading() {
  return (
    <main className="luxury-container pb-16 pt-28 md:pb-24">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="skeleton h-[520px] w-full rounded-3xl" />
        <section className="space-y-6">
          <div className="skeleton h-4 w-24 rounded-full" />
          <div className="skeleton h-16 w-full max-w-md rounded-xl" />
          <div className="skeleton h-24 w-full rounded-xl" />
          <div className="skeleton h-10 w-44 rounded-full" />
          <div className="skeleton h-12 w-64 rounded-full" />
        </section>
      </div>
    </main>
  );
}
