//src/components/designs/DesignHero.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function DesignHero() {
  return (
    <section className="relative h-[260px] sm:h-[350px] md:h-[500px]">
      <Image
        src="/images/design-hero.png"
        alt="Bruty Packaging"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/30" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="
          absolute inset-0
          flex flex-col
          items-center
          justify-center
          text-center
          text-white
          px-4
        "
      >
        <h1
          className="
            font-playfair
            text-2xl
            md:text-4xl
            mb-4
          "
        >
          Packaging Industry Style
        </h1>

        <p
          className="
            max-w-4xl
            text-[15px]
            md:text-[18px]
            leading-relaxed
          "
        >
          Innovative and attractive box designs crafted
          to showcase comfort, style and brand identity.
        </p>
      </motion.div>
    </section>
  );
}