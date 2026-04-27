"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import luxuryLogo from "@/src/assets/Logo1.1.png";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Collections" }
];

export function LuxuryNavbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/55 backdrop-blur-xl"
    >
      <div className="border-b border-white/10 bg-gradient-to-r from-[#1e1811] via-black to-[#1e1811]">
        <div className="luxury-container py-2 text-center text-[9px] uppercase tracking-[0.2em] text-luxury-beige md:text-[10px] md:tracking-[0.24em]">
          Complimentary Premium Packaging for Orders This Week
        </div>
      </div>
      <nav className="luxury-container flex h-16 items-center justify-between gap-4 md:h-20">
        <Link
          href="/"
          className="flex items-center gap-2.5 sm:gap-3"
        >
          <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-luxury-gold/70 bg-black/60 shadow-[0_0_22px_rgba(184,156,109,0.25)] md:h-11 md:w-11">
            <Image
              src={luxuryLogo}
              alt="I'M Luxury Bag logo"
              fill
              priority
              sizes="44px"
              className="object-cover p-[3px] md:p-1"
            />
          </span>
          <span className="max-w-[8.5rem] font-[var(--font-serif)] text-[13px] leading-tight tracking-[0.14em] text-luxury-white sm:max-w-none sm:text-base md:text-2xl md:tracking-[0.2em]">
            I&apos;M LUXURY BAG
          </span>
        </Link>
        <ul className="hidden items-center gap-7 text-[11px] uppercase tracking-[0.2em] text-luxury-white/75 md:flex">
          {LINKS.map((link) => {
            const active =
              link.href === "/products" ? pathname.startsWith("/products") : pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  scroll
                  className={`transition duration-300 hover:text-luxury-gold ${
                    active ? "text-luxury-gold" : ""
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
          <li>
            <a
              href="https://wa.me/6285156684881?text=Hello%20I%27M%20LUXURY%20BAG%2C%20I%20want%20to%20book%20a%20private%20consultation."
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-luxury-gold bg-black/30 px-4 py-2 text-[10px] tracking-[0.2em] text-luxury-gold transition hover:bg-luxury-gold hover:text-luxury-black"
            >
              Private Consult
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-2 md:hidden">
          <a
            href="https://wa.me/6285156684881?text=Hello%20I%27M%20LUXURY%20BAG%2C%20I%20want%20to%20book%20a%20private%20consultation."
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-luxury-gold px-3 py-2 text-[10px] tracking-[0.16em] text-luxury-gold"
            aria-label="Open WhatsApp consultation"
          >
            WA
          </a>
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="rounded-full border border-white/30 px-3 py-2 text-[10px] uppercase tracking-[0.18em] text-luxury-white"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav-menu"
            aria-label="Toggle navigation menu"
          >
            Menu
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-nav-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="border-t border-white/10 bg-black/90 px-5 pb-4 pt-3 backdrop-blur-xl md:hidden"
          >
            <ul className="space-y-2 text-[11px] uppercase tracking-[0.2em] text-luxury-white/80">
              {LINKS.map((link) => {
                const active =
                  link.href === "/products" ? pathname.startsWith("/products") : pathname === link.href;
                return (
                  <li key={`mobile-${link.href}`}>
                    <Link
                      href={link.href}
                      scroll
                      className={`block rounded-xl border border-white/15 px-4 py-3 transition duration-300 hover:border-luxury-gold hover:text-luxury-gold ${
                        active ? "border-luxury-gold text-luxury-gold" : ""
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
              <li>
                <a
                  href="https://wa.me/6285156684881?text=Hello%20I%27M%20LUXURY%20BAG%2C%20I%20want%20to%20book%20a%20private%20consultation."
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-xl border border-luxury-gold px-4 py-3 text-luxury-gold transition hover:bg-luxury-gold hover:text-luxury-black"
                >
                  Private Consult
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
