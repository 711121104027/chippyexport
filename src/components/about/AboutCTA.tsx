"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutCTA() {
  return (
    <section
      className="
      py-10
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
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="
          relative
          overflow-hidden

          rounded-[24px]

          bg-gradient-to-r
          from-[#C74E14]
          via-[#B94A1B]
          to-[#A52A2A]

          px-5
          py-10

          md:px-12
          md:py-16

          text-center

          shadow-[0_20px_60px_rgba(199,78,20,0.25)]
          "
        >
          {/* Glow */}

          <div
            className="
            absolute

            top-0
            left-1/2

            h-[300px]
            w-[300px]

            -translate-x-1/2

            rounded-full

            bg-white/10

            blur-3xl
            "
          />

          <div className="relative z-10">

            {/* Label */}

            <p
              className="
              text-[10px]
              md:text-[12px]

              font-semibold

              uppercase

              tracking-[3px]
              md:tracking-[5px]

              text-white/80

              font-poppins
              "
            >
              READY TO WORK WITH US?
            </p>

            {/* Heading */}

            <h2
              className="
              mx-auto

              mt-6

              max-w-5xl

              font-poppins

              text-2xl
              md:text-4xl

              font-bold
              leading-[40px]
              md:leading-tight

              text-white
              "
            >
              Let's Build Long-Term
              Partnerships Together
            </h2>

            {/* Description */}

            <p
              className="
              mx-auto
              mt-4
              md:mt-6

              max-w-2xl

              font-inter

              text-[15px]
              md:text-[18px]

              leading-5
              md:leading-8

              text-white/80
              "
            >
              Whether you're looking for a reliable
              apparel manufacturing partner, wholesale
              supplier, or export partner, we're ready
              to help your business grow.
            </p>

            {/* Button */}

            <div className="mt-10">

              <Link
                href="/contact"
                className="
                inline-flex
                items-center
                gap-3

                rounded-[14px]

                bg-white

                px-8
                py-4

                font-poppins
                font-semibold

                text-[#C74E14]

                transition-all
                duration-300

                hover:-translate-y-1
                hover:shadow-[0_15px_40px_rgba(255,255,255,0.20)]
                "
              >
                Contact Us

                <ArrowRight size={18} />
              </Link>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}