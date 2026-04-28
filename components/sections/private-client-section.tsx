"use client";

import { useMemo, useState } from "react";
import { BRAND_NAME } from "@/presentation/config/contact";
import { buildWhatsAppUrl } from "@/presentation/utils/whatsapp";

export function PrivateClientSection() {
  const [name, setName] = useState("");
  const [interest, setInterest] = useState("Bag Collection");
  const [budget, setBudget] = useState("IDR 7M - 12M");

  const whatsappLink = useMemo(() => {
    const message = `Hello ${BRAND_NAME}, my name is ${name || "private client"}. I am interested in ${interest} with budget ${budget}. Please assist me with recommendations.`;
    return buildWhatsAppUrl(message);
  }, [budget, interest, name]);

  return (
    <section className="section-spacing bg-luxury-black">
      <div className="luxury-container grid gap-8 border-y border-luxury-gold/30 bg-[linear-gradient(90deg,rgba(25,20,15,0.72),rgba(0,0,0,0.96),rgba(25,20,15,0.72))] py-10 md:grid-cols-[1.2fr_1fr] md:py-12">
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.28em] text-luxury-gold">Private Client Service</p>
          <h2 className="font-serif text-3xl leading-tight md:text-5xl">Book a Personal Luxury Consultation</h2>
          <p className="mt-4 max-w-xl text-luxury-white/75">
            Dapatkan kurasi produk berdasarkan style, kebutuhan acara, dan preferensi budget Anda langsung dengan
            tim concierge kami.
          </p>
          <div className="mt-8 grid max-w-xl grid-cols-2 gap-3">
            <div className="rounded-lg border border-white/10 bg-black/40 px-4 py-3">
              <p className="text-xl font-semibold text-luxury-gold">1:1</p>
              <p className="text-[11px] uppercase tracking-[0.16em] text-luxury-white/65">Personal Curation</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-black/40 px-4 py-3">
              <p className="text-xl font-semibold text-luxury-gold">Fast</p>
              <p className="text-[11px] uppercase tracking-[0.16em] text-luxury-white/65">WhatsApp Support</p>
            </div>
          </div>
        </div>
        <form className="space-y-4 rounded-lg border border-white/15 bg-black/45 p-6 shadow-[0_30px_60px_-35px_rgba(0,0,0,0.8)]">
          <label className="block">
            <span className="mb-2 block text-[10px] uppercase tracking-[0.24em] text-luxury-white/60">Name</span>
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Your Name"
              className="w-full rounded-lg border border-white/20 bg-black/65 px-4 py-3 text-sm outline-none transition focus:border-luxury-gold"
            />
          </label>
          <label className="block">
            <span className="mb-2 block text-[10px] uppercase tracking-[0.24em] text-luxury-white/60">Interest</span>
            <select
              value={interest}
              onChange={(event) => setInterest(event.target.value)}
              className="w-full rounded-lg border border-white/20 bg-black/65 px-4 py-3 text-sm outline-none transition focus:border-luxury-gold"
            >
              <option>Bag Collection</option>
              <option>Mini Bag</option>
              <option>Evening Clutch</option>
              <option>Daily Tote</option>
            </select>
          </label>
          <label className="block">
            <span className="mb-2 block text-[10px] uppercase tracking-[0.24em] text-luxury-white/60">Budget</span>
            <select
              value={budget}
              onChange={(event) => setBudget(event.target.value)}
              className="w-full rounded-lg border border-white/20 bg-black/65 px-4 py-3 text-sm outline-none transition focus:border-luxury-gold"
            >
              <option>IDR 5M - 8M</option>
              <option>IDR 7M - 12M</option>
              <option>Above IDR 12M</option>
            </select>
          </label>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full items-center justify-center rounded-full border border-luxury-gold bg-luxury-gold px-6 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-luxury-black transition hover:shadow-[0_18px_40px_-22px_rgba(184,156,109,0.85)]"
          >
            Start Private Consultation
          </a>
        </form>
      </div>
    </section>
  );
}
