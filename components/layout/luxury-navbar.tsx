"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Collections" }
];

export function LuxuryNavbar() {
  const pathname = usePathname();

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/45 backdrop-blur-xl"
    >
      <div className="border-b border-white/10 bg-gradient-to-r from-[#1e1811] via-black to-[#1e1811]">
        <div className="luxury-container py-2 text-center text-[10px] uppercase tracking-[0.24em] text-luxury-beige">
          Complimentary Premium Packaging for Orders This Week
        </div>
      </div>
      <nav className="luxury-container flex h-20 items-center justify-between">
        <Link href="/" className="font-[var(--font-serif)] text-lg tracking-[0.2em] text-luxury-white md:text-2xl">
          I&apos;M LUXURY BAG
        </Link>
        <ul className="flex items-center gap-7 text-[11px] uppercase tracking-[0.2em] text-luxury-white/75">
          {LINKS.map((link) => {
            const active =
              link.href === "/products" ? pathname.startsWith("/products") : pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
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
              href="https://wa.me/6281234567890?text=Hello%20I%27M%20LUXURY%20BAG%2C%20I%20want%20to%20book%20a%20private%20consultation."
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-luxury-gold px-4 py-2 text-[10px] tracking-[0.2em] text-luxury-gold transition hover:bg-luxury-gold hover:text-luxury-black"
            >
              Private Consult
            </a>
          </li>
        </ul>
      </nav>
    </motion.header>
  );
}
