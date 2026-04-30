"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { BRAND_NAME } from "@/presentation/config/contact";
import { buildWhatsAppUrl } from "@/presentation/utils/whatsapp";

const PERSONAL_SHOPPING_URL = buildWhatsAppUrl(
  `Hello ${BRAND_NAME}, I want to discover your latest bag collection.`
);

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden bg-luxury-black pt-24">
      <Image
        src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=2200&q=82"
        alt="Luxury handbag editorial background"
        fill
        priority
        sizes="100vw"
        quality={82}
        className="absolute inset-0 object-cover object-[58%_center]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(3,3,3,0.95)_0%,rgba(3,3,3,0.82)_38%,rgba(3,3,3,0.42)_68%,rgba(3,3,3,0.9)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.56)_0%,rgba(0,0,0,0.08)_38%,rgba(0,0,0,0.94)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black via-black/80 to-transparent" />

      <div className="luxury-container relative z-10 grid gap-12 pb-16 pt-20 md:grid-cols-[minmax(0,1.05fr)_minmax(18rem,0.52fr)] md:items-end md:pb-20 md:pt-28">
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-5 text-[11px] uppercase tracking-[0.34em] text-luxury-gold"
          >
            Private Luxury Edit
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 1.15, ease: "easeOut" }}
            className="font-[var(--font-serif)] text-[3rem] leading-[0.9] text-luxury-white sm:text-6xl md:text-8xl"
          >
            I&apos;M LUXURY
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1.2, ease: "easeOut" }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-luxury-white/76 md:text-lg"
          >
            Premium bags curated for polished daily presence, formal occasions, and clients who want each
            piece to feel considered before it is delivered.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 1.15, ease: "easeOut" }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <Link
              href="/products"
              className="rounded-full border border-luxury-gold bg-luxury-gold px-7 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-luxury-black transition duration-500 hover:scale-[1.02] hover:shadow-[0_18px_40px_-22px_rgba(184,156,109,0.85)]"
            >
              Explore Collection
            </Link>
            <a
              href={PERSONAL_SHOPPING_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-luxury-white/35 bg-black/25 px-7 py-3 text-xs uppercase tracking-[0.22em] text-luxury-white transition duration-500 hover:border-luxury-gold hover:text-luxury-gold"
            >
              Personal Shopping
            </a>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1.1, ease: "easeOut" }}
          className="border-y border-luxury-gold/28 py-6 md:mb-3"
        >
          <p className="text-[11px] uppercase tracking-[0.28em] text-luxury-gold">What You Receive</p>
          <div className="mt-5 space-y-5">
            {[
              ["Curated Bags", "Bags selected for elegant workwear, events, and refined daily styling."],
              ["Premium Finish", "Structured silhouettes, polished hardware, and materials chosen for a luxury feel."],
              ["Private Guidance", "Direct consultation before purchase so the product matches your occasion and style."]
            ].map(([title, description]) => (
              <div key={title} className="grid gap-1 border-t border-white/10 pt-5 first:border-t-0 first:pt-0">
                <p className="font-[var(--font-serif)] text-2xl text-luxury-white">{title}</p>
                <p className="text-sm leading-relaxed text-luxury-white/66">{description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
