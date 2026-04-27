const VALUES = [
  {
    title: "Premium Materials",
    description: "Selected calfskin and precision-finished hardware for long-lasting elegance."
  },
  {
    title: "Limited Production",
    description: "Small-batch releases keep every piece exclusive and highly curated."
  },
  {
    title: "Personal Concierge",
    description: "Direct WhatsApp styling support for private recommendations and fast response."
  }
];

export function ValuePropositionSection() {
  return (
    <section className="section-spacing bg-luxury-black">
      <div className="luxury-container">
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 text-xs uppercase tracking-[0.28em] text-luxury-gold">Why Choose Us</p>
          <h2 className="font-serif text-3xl leading-tight md:text-5xl">Crafted to Look Expensive, Built to Last</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {VALUES.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-7"
            >
              <h3 className="font-serif text-2xl">{item.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-luxury-white/70">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
