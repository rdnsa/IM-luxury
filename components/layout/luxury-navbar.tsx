"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { WhatsAppIcon } from "@/components/common/whatsapp-icon";
import { BRAND_NAME } from "@/presentation/config/contact";
import { buildWhatsAppUrl } from "@/presentation/utils/whatsapp";
import luxuryLogo from "@/src/assets/Logo1.1.png";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Collections" }
];

const PRIVATE_CONSULT_URL = buildWhatsAppUrl(
  `Hello ${BRAND_NAME}, I want to book a private consultation.`
);

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
      className="fixed inset-x-0 top-[calc(env(safe-area-inset-top)+0.75rem)] z-50 px-3 sm:px-5"
    >
      <div className="mx-auto w-full max-w-[86rem] overflow-hidden rounded-xl border border-white/10 bg-[#070706]/78 shadow-[0_22px_60px_-34px_rgba(0,0,0,0.95),0_0_0_1px_rgba(184,156,109,0.06)] backdrop-blur-2xl">
        <nav className="flex h-16 items-center justify-between gap-4 px-4 sm:px-5 md:h-20 md:px-8 lg:px-10">
          <Link
            href="/"
            className="flex items-center gap-2.5 sm:gap-3"
          >
            <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-luxury-gold/50 bg-black/60 shadow-[0_0_22px_rgba(184,156,109,0.2)] md:h-11 md:w-11">
              <Image
                src={luxuryLogo}
                alt="I'M Luxury logo"
                fill
                priority
                sizes="44px"
                className="object-cover p-[3px] md:p-1"
              />
            </span>
            <span className="max-w-[8.5rem] font-[var(--font-serif)] text-[13px] leading-tight tracking-[0.14em] text-luxury-white sm:max-w-none sm:text-base md:text-2xl md:tracking-[0.2em]">
              I&apos;M LUXURY
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
                href={PRIVATE_CONSULT_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-luxury-gold/70 bg-black/25 px-4 py-2 text-[10px] tracking-[0.2em] text-luxury-gold transition hover:bg-luxury-gold hover:text-luxury-black"
              >
                Private Consult
              </a>
            </li>
          </ul>
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={PRIVATE_CONSULT_URL}
              target="_blank"
              rel="noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#36d66f]/45 bg-[#1fad55] text-white shadow-[0_10px_24px_-16px_rgba(37,211,102,0.95)] transition hover:bg-[#25d366]"
              aria-label="Open WhatsApp consultation"
            >
              <WhatsAppIcon className="h-5 w-5" />
            </a>
            <button
              type="button"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="rounded-full border border-white/25 px-3 py-2 text-[10px] uppercase tracking-[0.18em] text-luxury-white"
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
              className="border-t border-white/10 bg-black/92 px-4 pb-4 pt-3 backdrop-blur-xl md:hidden"
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
                    href={PRIVATE_CONSULT_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl border border-luxury-gold px-4 py-3 text-luxury-gold transition hover:bg-luxury-gold hover:text-luxury-black"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    Private Consult
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
