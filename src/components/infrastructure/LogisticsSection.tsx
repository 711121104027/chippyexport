"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  PackageCheck,
  Globe2,
  Truck,
} from "lucide-react";

export default function LogisticsSection() {
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
        <div
          className="
          grid
          gap-12

          lg:grid-cols-[0.9fr_1.1fr]
          lg:items-center
          "
        >
          {/* Content */}

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
              FINAL TOUCH
            </p>

            <h2
              className="
              mt-4

              font-poppins

              text-[24px]
              md:text-[40px]

              font-bold

              leading-tight

              text-[#1E293B]
              "
            >
              Global Logistics &
              <br />
              Presentation
            </h2>

            <p
              className="
              mt-2

              font-inter

              text-[16px]

              leading-6

              text-neutral-600
              "
            >
              Every order undergoes careful packing,
              labeling and logistics preparation to ensure
              products arrive safely and professionally
              presented to customers worldwide.
            </p>

            {/* Features */}

            <div className="mt-5 space-y-5">

              <div className="flex items-center gap-4">
                <PackageCheck
                  size={20}
                  className="text-[#C74E14]"
                />

                <span
                  className="
                  font-poppins
                  font-medium

                  text-[15px]

                  text-[#1E293B]
                  "
                >
                  Premium Packaging Standards
                </span>
              </div>

              <div className="flex items-center gap-4">
                <Truck
                  size={20}
                  className="text-[#C74E14]"
                />

                <span
                  className="
                  font-poppins
                  font-medium

                  text-[15px]

                  text-[#1E293B]
                  "
                >
                  Efficient Export Logistics
                </span>
              </div>

              <div className="flex items-center gap-4">
                <Globe2
                  size={20}
                  className="text-[#C74E14]"
                />

                <span
                  className="
                  font-poppins
                  font-medium

                  text-[15px]

                  text-[#1E293B]
                  "
                >
                  Worldwide Distribution Ready
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

            gap-4
            md:gap-5

            grid-cols-1
            sm:grid-cols-2

            lg:grid-cols-[1.15fr_0.85fr]

            items-start
            "
          >
            {/* Large Image */}

            <div
              className="
              group

              overflow-hidden

              rounded-[8px]
              "
            >
              <div
                className="
                h-[260px]
                sm:h-[320px]
                md:h-[400px]

                overflow-hidden

                rounded-[4px]
                "
              >
                <Image
                  src="/images/infrastructure/logistics-1.png"
                  alt="Packaging Process"
                  width={900}
                  height={1100}
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
            </div>

            {/* Small Image */}

            <div
              className="
              group

              overflow-hidden

              rounded-[8px]

              sm:mt-8
              lg:mt-12
              "
            >
              <div
                className="
                h-[220px]
                sm:h-[260px]
                md:h-[400px]

                overflow-hidden

                rounded-[8px]
                "
              >
                <Image
                  src="/images/infrastructure/logistics-2.png"
                  alt="Export Logistics"
                  width={700}
                  height={850}
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
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
