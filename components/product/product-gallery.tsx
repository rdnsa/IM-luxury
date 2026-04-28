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
      initial={{ opacity: 0, y: 34, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.24 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      className="group relative h-[360px] overflow-hidden rounded-lg border border-white/10 bg-black/40 sm:h-[430px] md:h-[520px]"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={image}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.08, filter: "blur(12px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, scale: 1.03, filter: "blur(10px)" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
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
