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
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-luxury-gold bg-black text-luxury-gold shadow-luxury backdrop-blur-sm"
    >
      <span className="text-lg font-semibold">WA</span>
    </motion.a>
  );
}
