const TESTIMONIALS = [
  {
    name: "Alya S.",
    city: "Jakarta",
    quote:
      "The finishing and silhouette feel on par with international luxury brands. My tote still looks new after months."
  },
  {
    name: "Nadine P.",
    city: "Bandung",
    quote:
      "Packaging, quality, and customer service are exceptional. It feels like a private boutique experience."
  },
  {
    name: "Clara M.",
    city: "Surabaya",
    quote:
      "I bought a mini satchel and an evening clutch. The details are exactly what I expect from premium products."
  }
];

export function ClientLoveSection() {
  return (
    <section className="section-spacing border-t border-white/10 bg-[#070707]">
      <div className="luxury-container">
        <div className="mb-10">
          <p className="mb-3 text-xs uppercase tracking-[0.28em] text-luxury-gold">Client Love</p>
          <h2 className="font-serif text-3xl md:text-5xl">Trusted by Modern Luxury Buyers</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((item) => (
            <article key={item.name} className="rounded-lg border border-white/10 bg-black/45 p-7">
              <p className="text-[10px] uppercase tracking-[0.22em] text-luxury-gold">Client Rating 5.0 / 5</p>
              <p className="mt-5 text-sm leading-relaxed text-luxury-white/80">&ldquo;{item.quote}&rdquo;</p>
              <div className="mt-6">
                <p className="font-semibold text-luxury-beige">{item.name}</p>
                <p className="text-xs uppercase tracking-[0.2em] text-luxury-white/45">{item.city}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
