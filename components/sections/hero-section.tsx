"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { DropCountdown } from "@/components/common/drop-countdown";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-luxury-black pt-20">
      <Image
        src="https://images.unsplash.com/photo-1601924638867-3ec2b8dddb9f?auto=format&fit=crop&w=2000&q=80"
        alt="Luxury fashion editorial background"
        fill
        priority
        sizes="100vw"
        quality={75}
        className="absolute inset-0 object-cover object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(112deg,rgba(4,4,4,0.94)_18%,rgba(4,4,4,0.48)_62%,rgba(4,4,4,0.9)_100%)]" />
      <div className="absolute inset-0 bg-grain opacity-90" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black via-black/70 to-transparent" />
      <div className="luxury-container relative z-10 grid gap-10 pb-20 pt-16 md:grid-cols-[1.15fr_0.85fr] md:items-end md:pb-24 md:pt-20">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-5 inline-flex items-center rounded-full border border-luxury-gold/35 bg-black/45 px-4 py-2 text-[10px] uppercase tracking-[0.3em] text-luxury-beige"
          >
            Curated Premium Edit
          </motion.p>
          <DropCountdown />
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            className="mb-5 mt-7 text-sm uppercase tracking-[0.35em] text-luxury-beige"
          >
            Premium Bags & Shoes
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 1.15, ease: "easeOut" }}
            className="max-w-4xl font-[var(--font-serif)] text-5xl leading-[0.95] text-luxury-white md:text-7xl"
          >
            I&apos;M LUXURY BAG
            <span className="mt-3 block text-3xl text-luxury-beige/90 md:text-5xl">Own The Signature Presence</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1.2, ease: "easeOut" }}
            className="mt-6 max-w-xl text-base leading-relaxed text-luxury-white/75 md:text-lg"
          >
            Luxury Within Reach. Elevated essentials designed for modern women who value status, confidence, and
            timeless style.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 1.15, ease: "easeOut" }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              href="/products"
              className="rounded-full border border-luxury-gold bg-luxury-gold px-8 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-luxury-black transition duration-500 hover:scale-[1.02] hover:shadow-[0_18px_40px_-22px_rgba(184,156,109,0.85)]"
            >
              Explore Collection
            </Link>
            <a
              href="https://wa.me/6285156684881?text=Hello%20I%27M%20LUXURY%20BAG%2C%20I%20want%20to%20discover%20your%20latest%20collection."
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-luxury-white/45 bg-black/25 px-8 py-3 text-xs uppercase tracking-[0.25em] text-luxury-white transition duration-500 hover:border-luxury-gold hover:text-luxury-gold"
            >
              Personal Shopping
            </a>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1.1, ease: "easeOut" }}
          className="space-y-3"
        >
          <div className="luxury-panel rounded-3xl p-6 md:p-7">
            <p className="text-[11px] uppercase tracking-[0.24em] text-luxury-gold">Luxury Promise</p>
            <p className="mt-4 font-[var(--font-serif)] text-3xl leading-tight text-luxury-white">Limited Pieces</p>
            <p className="mt-3 text-sm leading-relaxed text-luxury-white/70">
              Every drop is intentionally small, so your look stays exclusive and unmistakably premium.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div className="luxury-panel rounded-2xl px-4 py-3">
              <p className="text-xl font-semibold text-luxury-gold">98%</p>
              <p className="text-[10px] uppercase tracking-[0.18em] text-luxury-white/70">Satisfaction</p>
            </div>
            <div className="luxury-panel rounded-2xl px-4 py-3">
              <p className="text-xl font-semibold text-luxury-gold">24H</p>
              <p className="text-[10px] uppercase tracking-[0.18em] text-luxury-white/70">Response</p>
            </div>
            <div className="luxury-panel rounded-2xl px-4 py-3">
              <p className="text-xl font-semibold text-luxury-gold">VIP</p>
              <p className="text-[10px] uppercase tracking-[0.18em] text-luxury-white/70">Concierge</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
