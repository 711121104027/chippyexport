"use client";

import { motion } from "framer-motion";

const stats = [
  {
    value: "20+",
    label: "YEARS EXPERIENCE",
  },
  {
    value: "100+",
    label: "DESIGN VARIATIONS",
  },
  {
    value: "1000+",
    label: "HAPPY CLIENTS",
  },
  {
    value: "3",
    label: "PRODUCT CATEGORIES",
  },
];

export default function BrandHighlights() {
  return (
    <section
      className="
      relative

      overflow-hidden

      bg-gradient-to-r
      from-[#C74E14]
      via-[#B73E12]
      to-[#8B0000]
      "
    >
      {/* Premium Overlay */}

      <div
        className="
        absolute
        inset-0

        bg-[linear-gradient(to_right,rgba(255,255,255,0.03),transparent)]
        "
      />

      <div
        className="
        relative

        max-w-7xl
        mx-auto

        px-2
        md:px-6
        lg:px-8
        "
      >
        <div
          className="
          grid
          grid-cols-4
          "
        >
          {stats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              className={`
                relative

                py-4
                md:py-6

                text-center

                transition-all
                duration-300

                hover:bg-white/[0.03]

                ${
                  index !== stats.length - 1
                    ? "border-r border-white/15"
                    : ""
                }
              `}
            >
              {/* Number */}

              <h3
                className="
                font-poppins

                text-[18px]
                sm:text-[22px]
                md:text-[40px]

                font-bold

                leading-none

                text-white
                "
              >
                {item.value}
              </h3>

              {/* Label */}

              <p
                className="
                mt-1

                px-1

                font-inter

                text-[7px]
                sm:text-[8px]
                md:text-[12px]

                font-medium

                uppercase

                tracking-[0.8px]
                md:tracking-[1.5px]

                leading-tight

                text-white/80
                "
              >
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}