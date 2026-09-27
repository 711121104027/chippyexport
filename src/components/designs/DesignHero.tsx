//src/components/designs/DesignHero.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function DesignHero() {
  return (
    <section className="relative h-[240px] sm:h-[320px] md:h-[420px] flex items-center justify-center overflow-hidden">
      <Image
        src="/images/design-hero.png"
        alt="Bruty Packaging"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Dark contrast overlay so text is clearly legible across all areas of the image */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Direct High-Contrast Text (No box container, reduced size) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="
          relative z-10
          max-w-3xl mx-auto
          px-4 sm:px-6
          text-center
          text-white
        "
      >
        <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[3px] text-[#FDBA74] mb-1.5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          Packaging Collection
        </p>

        <h1 className="font-[var(--font-playfair)] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
          Packaging Industry Style
        </h1>

        <p className="text-neutral-100 text-xs sm:text-sm md:text-base leading-relaxed max-w-xl mx-auto drop-shadow-[0_1px_6px_rgba(0,0,0,0.9)]">
          Innovative and attractive box designs crafted to showcase comfort,
          style and brand identity.
        </p>
      </motion.div>
    </section>
  );
}