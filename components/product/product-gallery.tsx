"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

type ProductGalleryProps = {
  name: string;
  image: string;
};

export function ProductGallery({ name, image }: ProductGalleryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="group relative h-[360px] overflow-hidden rounded-2xl border border-white/10 bg-black/40 sm:h-[430px] md:h-[520px] md:rounded-3xl"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={image}
          initial={{ opacity: 0.4, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0.2, scale: 0.98 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={image}
            alt={name}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover transition duration-700 group-hover:scale-110"
          />
        </motion.div>
      </AnimatePresence>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
    </motion.div>
  );
}
