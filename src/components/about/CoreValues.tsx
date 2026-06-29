"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  Globe,
  Megaphone,
  ShieldCheck,
} from "lucide-react";

const values = [
  {
    icon: TrendingUp,
    title: "Market Optimization",
    description:
      "Continuously improving products, processes, and strategies to create maximum value for customers and partners.",
  },

  {
    icon: Globe,
    title: "Distribution Network",
    description:
      "Building strong relationships with channel partners and customers through reliable supply and service excellence.",
  },

  {
    icon: Megaphone,
    title: "Marketing Strategies",
    description:
      "Creating innovative and effective brand strategies that strengthen market presence and customer trust.",
  },

  {
    icon: ShieldCheck,
    title: "Brand Equity",
    description:
      "Enhancing brand value through consistent quality, credibility, and long-term customer satisfaction.",
  },
];

export default function CoreValues() {
  return (
    <section
      className="
      py-10
      md:py-14
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
          className="text-center"
        >
          <p
            className="
            text-[12px]
            font-semibold

            uppercase

            tracking-[5px]

            text-[#C74E14]

            font-poppins
            "
          >
            OUR CORE VALUES
          </p>

          <div
            className="
            mx-auto
            mt-4

            h-[2px]
            w-20

            bg-[#C74E14]
            "
          />

          <h2
            className="
            mt-6

            font-poppins

            text-[18px]
            md:text-[38px]

            font-bold

            text-black
            "
          >
            The principles that drive
            everything we do
          </h2>

          <p
            className="
            mx-auto

            mt-6

            max-w-2xl

            font-inter

            text-[16px]
            md:text-[18px]

            leading-8

            text-neutral-600
            "
          >
            Our core values guide our decisions,
            shape our culture, and define our
            commitment to excellence.
          </p>
        </motion.div>

        {/* Cards */}

        <div
          className="
          mt-16

          grid
          gap-6

          md:grid-cols-2
          "
        >
          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="
                group

                rounded-[28px]

                border
                border-[#ECECEC]

                bg-white

                p-8
                md:p-10

                shadow-[0_8px_30px_rgba(15,23,42,0.04)]

                transition-all
                duration-300

                hover:-translate-y-2
                hover:shadow-[0_15px_40px_rgba(15,23,42,0.08)]
                "
              >
                <div
                  className="
                  flex
                  items-start
                  gap-5
                  "
                >
                  {/* Icon Circle */}

                  <div
                    className="
                    flex

                    h-16
                    w-16

                    shrink-0

                    items-center
                    justify-center

                    rounded-full

                    bg-[#C74E14]/8

                    text-[#C74E14]
                    "
                  >
                    <Icon size={28} />
                  </div>

                  <div>
                    <h3
                      className="
                      font-poppins

                      text-2xl

                      font-semibold

                      text-black
                      "
                    >
                      {value.title}
                    </h3>

                    <p
                      className="
                      mt-3

                      font-inter

                      leading-8

                      text-neutral-600
                      "
                    >
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}