"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function QualitySection() {
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
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
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
            ZERO DEFECT POLICY
          </p>

          <h2
            className="
            mt-4

            font-poppins

            text-[24px]
            md:text-[42px]

            font-bold

            text-[#1E293B]
            "
          >
            Quality Assurance
          </h2>

          <p
            className="
            mx-auto

            mt-6

            max-w-3xl

            font-inter

            text-[16px]

            leading-8

            text-neutral-600
            "
          >
            Every garment undergoes a strict inspection process.
            Our quality team verifies measurements, stitching,
            finishing and overall consistency before packaging.
          </p>
        </motion.div>

        {/* Images */}

        <div
          className="
          mt-14

          grid
          gap-8

          md:grid-cols-2
          "
        >
          {/* Visual Inspection */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="
            group
            relative

            overflow-hidden

            rounded-[6px]
            "
          >
            <Image
              src="/images/infrastructure/quality-1.png"
              alt="Visual Inspection"
              width={900}
              height={700}
              className="
              h-auto
              w-full

              object-cover

              transition-transform
              duration-700

              group-hover:scale-105
              "
            />

            {/* Floating Info Card */}

            <div
              className="
              absolute

              left-4
              bottom-4

              min-w-[280px]

              overflow-hidden

              bg-white/85
              backdrop-blur-sm

              px-5
              py-3

              shadow-[0_8px_25px_rgba(0,0,0,0.08)]
              "
            >
              {/* Red Accent Line */}

              <div
                className="
                absolute
                left-0
                top-0

                h-full
                w-[3px]

                bg-[#D11F1F]
                "
              />

              <h3
                className="
                font-montserrat

                text-[18px]
                font-medium

                text-[#1E293B]
                "
              >
                Visual Inspection
              </h3>

              <p
                className="
                mt-1

                font-inter

                text-[10px]
                font-medium

                uppercase

                tracking-[1px]

                text-[#D11F1F]
                "
              >
                Final Detail Verification
              </p>
            </div>
          </motion.div>

          {/* Measurement Accuracy */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="
            group
            relative

            overflow-hidden

            rounded-[6px]
            "
          >
            <Image
              src="/images/infrastructure/quality-2.png"
              alt="Measurement Accuracy"
              width={900}
              height={700}
              className="
              h-auto
              w-full

              object-cover

              transition-transform
              duration-700

              group-hover:scale-105
              "
            />

            {/* Floating Info Card */}

            <div
              className="
              absolute

              left-4
              bottom-4

              min-w-[280px]

              overflow-hidden

              bg-white/85
              backdrop-blur-sm

              px-5
              py-3

              shadow-[0_8px_25px_rgba(0,0,0,0.08)]
              "
            >
              {/* Red Accent Line */}

              <div
                className="
                absolute
                left-0
                top-0

                h-full
                w-[3px]

                bg-[#D11F1F]
                "
              />

              <h3
                className="
                font-montserrat

                text-[18px]
                font-medium

                text-[#1E293B]
                "
              >
                Measurement Accuracy
              </h3>

              <p
                className="
                mt-1

                font-inter

                text-[10px]
                font-medium

                uppercase

                tracking-[1px]

                text-[#D11F1F]
                "
              >
                Spec Sheet Adherence
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}