"use client";

import { motion } from "framer-motion";
import { InstagramIcon } from "@/components/common/instagram-icon";
import { WhatsAppIcon } from "@/components/common/whatsapp-icon";
import { BRAND_NAME, INSTAGRAM_URL } from "@/presentation/config/contact";
import { buildWhatsAppUrl } from "@/presentation/utils/whatsapp";

const WHATSAPP_URL = buildWhatsAppUrl(
  `Hello ${BRAND_NAME}, I would like to consult about your premium collection.`
);

export function FloatingWhatsAppButton() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
      className="fixed bottom-[calc(env(safe-area-inset-bottom)+0.85rem)] right-3 z-50 flex flex-col gap-2 sm:bottom-20 sm:right-4 md:bottom-6 md:right-6"
    >
      <motion.a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Open Instagram"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="flex h-11 w-11 items-center justify-center rounded-full border border-white/35 bg-[linear-gradient(135deg,#f58529_0%,#dd2a7b_48%,#8134af_100%)] text-white shadow-[0_18px_34px_-18px_rgba(221,42,123,0.9)] backdrop-blur-sm transition duration-300 hover:border-white/70 sm:h-12 sm:w-12 md:h-14 md:w-14"
      >
        <InstagramIcon className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" />
      </motion.a>
      <motion.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="flex h-11 w-11 items-center justify-center rounded-full border border-[#36d66f]/45 bg-[#1fad55] text-white shadow-[0_18px_34px_-18px_rgba(37,211,102,0.9)] backdrop-blur-sm transition duration-300 hover:border-[#7ef0a4] hover:bg-[#25d366] sm:h-12 sm:w-12 md:h-14 md:w-14"
      >
        <WhatsAppIcon className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" />
      </motion.a>
    </motion.div>
  );
}
