"use client";

import { motion } from "framer-motion";
import { BRAND_NAME } from "@/presentation/config/contact";
import { buildWhatsAppUrl } from "@/presentation/utils/whatsapp";

const WHATSAPP_URL = buildWhatsAppUrl(
  `Hello ${BRAND_NAME}, I would like to consult about your premium collection.`
);

export function FloatingWhatsAppButton() {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-[calc(env(safe-area-inset-bottom)+0.85rem)] right-3 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-luxury-gold bg-black text-luxury-gold shadow-[0_14px_30px_-18px_rgba(184,156,109,0.9)] backdrop-blur-sm sm:bottom-20 sm:right-4 sm:h-12 sm:w-12 md:bottom-6 md:right-6 md:h-14 md:w-14"
    >
      <span className="text-[13px] font-semibold sm:text-base md:text-lg">WA</span>
    </motion.a>
  );
}
