"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { DropCountdown } from "@/components/common/drop-countdown";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden bg-luxury-black">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(120deg, rgba(5,5,5,0.88) 20%, rgba(5,5,5,0.38) 65%, rgba(5,5,5,0.9) 100%), url('https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?auto=format&fit=crop&w=1800&q=80')"
        }}
      />
      <div className="absolute inset-0 bg-grain" />
      <div className="luxury-container relative z-10 pb-24 pt-36 md:pb-32">
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
          className="max-w-4xl font-[var(--font-serif)] text-5xl leading-tight text-luxury-white md:text-7xl"
        >
          I&apos;M LUXURY BAG
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1.2, ease: "easeOut" }}
          className="mt-6 max-w-xl text-base text-luxury-white/75 md:text-lg"
        >
          Luxury Within Reach. Elevated essentials designed for the confident, modern icon.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 1.15, ease: "easeOut" }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Link
            href="/products"
            className="rounded-full border border-luxury-gold bg-luxury-gold px-7 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-luxury-black transition duration-500 hover:scale-[1.02] hover:shadow-luxury"
          >
            Explore Collection
          </Link>
          <a
            href="https://wa.me/6285156684881?text=Hello%20I%27M%20LUXURY%20BAG%2C%20I%20want%20to%20discover%20your%20latest%20collection."
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-luxury-white/45 px-7 py-3 text-xs uppercase tracking-[0.25em] text-luxury-white transition duration-500 hover:border-luxury-gold hover:text-luxury-gold"
          >
            Personal Shopping
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1.1, ease: "easeOut" }}
          className="mt-10 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3"
        >
          <div className="rounded-2xl border border-white/20 bg-black/45 px-4 py-3 backdrop-blur-sm">
            <p className="text-xl font-semibold text-luxury-gold">98%</p>
            <p className="text-[11px] uppercase tracking-[0.18em] text-luxury-white/70">Client Satisfaction</p>
          </div>
          <div className="rounded-2xl border border-white/20 bg-black/45 px-4 py-3 backdrop-blur-sm">
            <p className="text-xl font-semibold text-luxury-gold">24H</p>
            <p className="text-[11px] uppercase tracking-[0.18em] text-luxury-white/70">Concierge Response</p>
          </div>
          <div className="rounded-2xl border border-white/20 bg-black/45 px-4 py-3 backdrop-blur-sm">
            <p className="text-xl font-semibold text-luxury-gold">Limited</p>
            <p className="text-[11px] uppercase tracking-[0.18em] text-luxury-white/70">Small Batch Drop</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
