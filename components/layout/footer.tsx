export function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-black">
      <div className="luxury-container flex flex-col gap-4 py-10 text-sm text-luxury-white/60 md:flex-row md:items-center md:justify-between">
        <p>&copy; {new Date().getFullYear()} I&apos;M LUXURY BAG</p>
        <p className="font-[var(--font-serif)] tracking-[0.18em] text-luxury-gold">Luxury Within Reach</p>
      </div>
    </footer>
  );
}
