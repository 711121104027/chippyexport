"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function CuttingSection() {
  return (
    <section
      className="
      py-6
      md:py-12
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto

        px-4
        md:px-5
        lg:px-6
        "
      >
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p
            className="
            text-[11px]

            font-montserrat
            font-semibold

            uppercase

            tracking-[4px]

            text-[#C74E14]
            "
          >
            Stage 01
          </p>

          <h2
            className="
            mt-4

            font-poppins

            text-[24px]
            md:text-[36px]

            font-bold

            text-[#1E293B]
            "
          >
            The Craft of Cutting
          </h2>

          <p
            className="
            mt-5

            max-w-3xl

            font-inter

            text-[17px]

            leading-8

            text-neutral-600
            "
          >
            Precision begins at the cutting table.
            Using advanced CAD layouts and expert
            craftsmanship, every garment component
            is prepared with exceptional accuracy.
          </p>
        </motion.div>

        {/* Images */}

        <div
          className="
          mt-5

          grid
          gap-8

          lg:grid-cols-2
          "
        >
          {/* Image 1 */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="
            group
            "
          >
            <div>
              <div className="overflow-hidden rounded-[3px]">
                <Image
                  src="/images/infrastructure/cutting-1.png"
                  alt="Precision Pattern Engineering"
                  width={900}
                  height={1000}
                  className="
                  h-auto
                  w-full

                  object-cover

                  transition-transform
                  duration-700

                  group-hover:scale-105
                  "
                />
              </div>

              <div className="pt-3 text-center">
                <h3
                  className="
                  font-poppins

                  text-[12px]
                  md:text-[18px]

                  font-semibold

                  text-[#C74E14]
                  "
                >
                  Precision Pattern Engineering
                </h3>
              </div>
            </div>
          </motion.div>

          {/* Image 2 */}

          <motion.div
  initial={{ opacity: 0, x: 40 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
  className="
  group
  lg:mt-12
  "
>
  <div>

    {/* Desktop Title - Above Image */}

    <div className="hidden lg:block text-center mb-5">
      <h3
        className="
        font-poppins

        text-[18px]

        font-semibold

        text-[#C74E14]
        "
      >
        Artisanal Hand-Cutting Section
      </h3>
    </div>

    {/* Image */}

    <div className="overflow-hidden rounded-[3px]">
      <Image
        src="/images/infrastructure/cutting-2.png"
        alt="Artisanal Hand-Cutting Section"
        width={900}
        height={1000}
        className="
        h-auto
        w-full

        object-cover

        transition-transform
        duration-700

        group-hover:scale-105
        "
      />
    </div>

    {/* Mobile Title - Below Image */}

    <div className="block lg:hidden text-center mt-3">
      <h3
        className="
        font-poppins

        text-[12px]

        font-semibold

        text-[#C74E14]
        "
      >
        Artisanal Hand-Cutting Section
      </h3>
    </div>

  </div>
</motion.div>
        </div>
      </div>
    </section>
  );
}