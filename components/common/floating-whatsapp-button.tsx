"use client";

import { motion } from "framer-motion";

const WHATSAPP_URL =
  "https://wa.me/6281234567890?text=Hello%20I%27M%20LUXURY%20BAG%2C%20I%20would%20like%20to%20consult%20about%20your%20premium%20collection.";

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
      className="fixed bottom-20 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-luxury-gold bg-black text-luxury-gold shadow-luxury backdrop-blur-sm md:bottom-6 md:right-6 md:h-14 md:w-14"
    >
      <span className="text-base font-semibold md:text-lg">WA</span>
    </motion.a>
  );
}
