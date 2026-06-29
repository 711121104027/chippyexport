"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Play, PlayCircle } from "lucide-react";

export default function ProductionVideo() {
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

          lg:grid-cols-[0.85fr_1.15fr]
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
              Production Journey
            </p>

            <h2
              className="
              mt-4

              font-poppins

              text-[24px]
              md:text-[38px]

              font-bold

              leading-[1.1]

              text-[#1E293B]
              "
            >
              Watch Our Manufacturing Process
            </h2>

            <p
              className="
              mt-3

              max-w-xl

              font-inter

              text-[16px]
              md:text-[17px]

              leading-8

              text-neutral-600
              "
            >
              Experience our complete production journey —
              from fabric preparation and precision cutting
              to stitching, quality inspection, packaging,
              and dispatch. See how craftsmanship and
              technology come together to create premium
              apparel products.
            </p>

            <div
              className="
              mt-6

              flex
              items-center
              gap-4
              "
            >
              <div
                className="
                flex

                h-16
                w-16

                items-center
                justify-center

                rounded-full

                bg-[#C74E14]/10

                text-[#C74E14]
                "
              >
                <PlayCircle size={34} />
              </div>

              <div>
                <h3
                  className="
                  font-poppins

                  text-xl

                  font-semibold

                  text-[#1E293B]
                  "
                >
                  Factory Tour Video
                </h3>

                <p
                  className="
                  mt-1

                  font-inter

                  text-neutral-500
                  "
                >
                  Explore our facilities and operations.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Video Thumbnail */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <a
              href="https://youtu.be/py-ezIV2iew"
              target="_blank"
              rel="noopener noreferrer"
              className="
              group
              block
              "
            >
              <div
                className="
                relative

                overflow-hidden

                rounded-[15px]

                shadow-[0_20px_60px_rgba(15,23,42,0.10)]
                "
              >
                {/* Thumbnail */}

                <Image
                  src="/images/infrastructure/video-thumbnail.png"
                  alt="Factory Tour Video"
                  width={1400}
                  height={900}
                  className="
                  w-full

                  object-cover

                  transition-transform
                  duration-700

                  group-hover:scale-105
                  "
                />

                {/* Overlay */}

                <div
                  className="
                  absolute
                  inset-0

                  bg-gradient-to-t
                  from-black/40
                  via-black/10
                  to-transparent
                  "
                />

                {/* Play Button */}

                <div
                  className="
  absolute
  inset-0

  flex
  items-center
  justify-center
  "
                >
                  <div
                    className="
    flex

    h-12
    w-12

    md:h-16
    md:w-16

    items-center
    justify-center

    rounded-full

    bg-white/95

    shadow-xl

    transition-all
    duration-500

    group-hover:scale-110
    "
                  >
                    <Play
                      size={20}
                      className="
      ml-0.5

      text-[#C74E14]

      md:h-7
      md:w-7
      "
                      fill="#C74E14"
                    />
                  </div>
                </div>

                {/* Bottom Label */}

                <div
                  className="
  absolute

  left-3
  bottom-3

  md:left-6
  md:bottom-6
  "
                >
                  <span
                    className="
    rounded-full

    bg-white/90

    px-3
    py-1.5

    md:px-4
    md:py-2

    font-inter

    text-[11px]
    md:text-sm

    font-medium

    text-[#1E293B]

    backdrop-blur-md
    "
                  >
                    Watch Corporate Film
                  </span>
                </div>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}