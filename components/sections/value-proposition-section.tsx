const VALUES = [
  {
    title: "Clear Product Curation",
    description: "Every item is presented by style, use case, color, and size so clients understand the piece quickly."
  },
  {
    title: "Elevated Finish",
    description: "Structured shapes, polished hardware, and refined material choices create a more expensive presence."
  },
  {
    title: "Personal Concierge",
    description: "Direct WhatsApp support helps clients choose the right bag or shoe before the order is confirmed."
  }
];

export function ValuePropositionSection() {
  return (
    <section className="section-spacing border-t border-white/10 bg-black">
      <div className="luxury-container">
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 text-xs uppercase tracking-[0.28em] text-luxury-gold">Why It Feels Premium</p>
          <h2 className="font-serif text-3xl leading-tight md:text-5xl">
            A Simpler Way to Choose a Luxury Piece
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {VALUES.map((item, index) => (
            <article
              key={item.title}
              className="rounded-lg border border-white/10 bg-[#0b0b0a] p-7 transition duration-300 hover:border-luxury-gold/40"
            >
              <p className="text-[11px] uppercase tracking-[0.25em] text-luxury-gold/80">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-5 font-serif text-2xl text-luxury-white">{item.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-luxury-white/70">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
