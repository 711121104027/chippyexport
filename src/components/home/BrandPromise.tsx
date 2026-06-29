"use client";

import { motion } from "framer-motion";

export default function BrandPromise() {
  return (
    <section
      className="
      py-8
      md:py-12
      "
    >
      <div
        className="
        max-w-5xl
        mx-auto

        px-5
        md:px-0

        text-center
        "
      >
        {/* Label */}

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="
          text-[11px]

          font-poppins
          font-semibold

          uppercase

          tracking-[4px]

          text-[#C74E14]
          "
        >
          Brand Things
        </motion.p>

        {/* Heading */}

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="
          mt-5

          font-poppins

          text-[30px]
          md:text-[54px]

          font-bold

          leading-[1.35]

          text-[#1E293B]
          "
        >
          Crafted For Comfort,
          Designed For Everyday Life
        </motion.h2>

        {/* Description */}

        <motion.p
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="
          mx-auto

          mt-8

          max-w-4xl

          font-inter

          text-[16px]
          md:text-[18px]

          leading-8

          text-neutral-600
          "
        >
          At Bruty, every garment is thoughtfully crafted
          to deliver lasting comfort, superior fit and
          exceptional durability. From premium fabrics to
          refined finishing, we create apparel that blends
          quality, confidence and everyday practicality.
        </motion.p>

        {/* Divider */}

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="
          mx-auto

          mt-10

          h-[2px]
          w-24

          rounded-full

          bg-gradient-to-r
          from-[#C74E14]
          to-[#A52A2A]
          "
        />
      </div>
    </section>
  );
}