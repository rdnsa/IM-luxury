import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="luxury-container section-spacing flex min-h-[70vh] flex-col items-start justify-center gap-6 pt-32">
      <p className="text-xs uppercase tracking-[0.3em] text-luxury-gold">404</p>
      <h1 className="font-[var(--font-serif)] text-4xl md:text-5xl">Collection Not Found</h1>
      <p className="max-w-xl text-luxury-white/70">
        The item you are looking for is no longer available in this collection.
      </p>
      <Link
        href="/products"
        className="rounded-full border border-luxury-gold px-7 py-3 text-xs uppercase tracking-[0.22em] text-luxury-gold transition hover:bg-luxury-gold hover:text-luxury-black"
      >
        Browse Products
      </Link>
    </main>
  );
}
