"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function AssemblySection() {
  return (
    <section
      className="
      py-6
      md:py-16
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
        <div
          className="
          grid
          gap-6

          lg:grid-cols-[0.9fr_1.1fr]
          lg:items-center
          "
        >
          {/* Left Content */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
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
              Stage 02
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
              The Art of Assembly
            </h2>

            <p
              className="
              mt-2

              font-inter

              text-[16px]

              leading-8

              text-neutral-600
              "
            >
              Our stitching lines are equipped with
              high-speed machinery and skilled operators
              who transform precision-cut components
              into perfectly finished garments.
            </p>

            <div className="mt-4 space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle2
                  size={20}
                  className="text-[#C74E14]"
                />

                <span
                  className="
                  font-poppins
                  font-medium

                  text-[#1E293B]
                  "
                >
                  Modern Stitching Technology
                </span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2
                  size={20}
                  className="text-[#C74E14]"
                />

                <span
                  className="
                  font-poppins
                  font-medium

                  text-[#1E293B]
                  "
                >
                  100+ Skilled Craftsmen
                </span>
              </div>
            </div>
          </motion.div>

          {/* Images */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="
            grid
            gap-2

            md:grid-cols-2
            "
          >
            {/* Image 1 */}

            <div
              className="
              overflow-hidden

              rounded-[5px]

              border
              border-[#ECECEC]

              bg-white

              shadow-[0_8px_30px_rgba(15,23,42,0.04)]

              group
              "
            >
              <Image
                src="/images/infrastructure/assembly-1.png"
                alt="Assembly Process"
                width={800}
                height={1000}
                className="
                h-full
                w-full

                object-cover

                transition-transform
                duration-700

                group-hover:scale-105
                "
              />
            </div>

            {/* Image 2 */}

            <div
              className="
              overflow-hidden

              rounded-[5px]

              border
              border-[#ECECEC]

              bg-white

              shadow-[0_8px_30px_rgba(15,23,42,0.04)]

              group
              "
            >
              <Image
                src="/images/infrastructure/assembly-2.png"
                alt="Assembly Team"
                width={800}
                height={1000}
                className="
                h-full
                w-full

                object-cover

                transition-transform
                duration-700

                group-hover:scale-105
                "
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}