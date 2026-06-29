"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HomeCTA() {
  return (
    <section
      className="
      py-4
      md:py-8
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto

        px-2
        md:px-3
        lg:px-4
        "
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="
          relative

          overflow-hidden

          rounded-[12px]

          bg-gradient-to-r
          from-[#C74E14]
          via-[#B73E12]
          to-[#8B0000]

          px-4
          py-8

          md:px-6
          md:py-14

          text-center
          "
        >
          {/* Glow */}

          <div
            className="
            absolute

            -top-20
            -right-20

            h-54
            w-54

            rounded-full

            bg-white/10

            blur-3xl
            "
          />

          <div
            className="
            absolute

            -bottom-20
            -left-20

            h-54
            w-54

            rounded-full

            bg-white/10

            blur-3xl
            "
          />

          <div className="relative z-10">
            {/* Label */}

            <p
              className="
              text-[11px]

              font-poppins
              font-semibold

              uppercase

              tracking-[4px]

              text-white/80
              "
            >
              Let's Work Together
            </p>

            {/* Heading */}

            <h2
              className="
              mt-5

              font-poppins

              text-[20px]
              md:text-[36px]

              font-bold

              leading-[1.55]

              text-white
              "
            >
              Looking For A Reliable
              Garment Manufacturing Partner?
            </h2>

            {/* Description */}

            <p
              className="
              mx-auto

              mt-3

              max-w-5xl

              font-inter

              text-[15px]

              leading-5
              md:leading-8

              text-white/90
              "
            >
              Connect with our team to discuss your
              requirements and discover how Bruty can
              deliver quality, comfort and consistency
              for your business.
            </p>

            {/* Button */}

            <Link
              href="/contact"
              className="
              inline-flex

              items-center
              gap-2

              mt-6

              rounded-[20px]

              bg-white

              px-5
              py-2

              font-poppins
              font-semibold

              text-[#C74E14]

              transition-all
              duration-300

              hover:-translate-y-1
              hover:shadow-xl
              "
            >
              Contact Us

              <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}