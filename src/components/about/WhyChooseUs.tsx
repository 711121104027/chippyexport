"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  Factory,
  Truck,
  Handshake,
} from "lucide-react";

const reasons = [
  {
    icon: BadgeCheck,
    title: "Premium Quality Products",
    description:
      "Every product is crafted with strict quality standards to ensure durability, comfort, and customer satisfaction.",
  },

  {
    icon: Factory,
    title: "Modern Manufacturing",
    description:
      "Advanced production processes and skilled workmanship help us maintain consistency and excellence.",
  },

  {
    icon: Truck,
    title: "Timely Delivery",
    description:
      "Efficient production planning and logistics enable us to deliver orders on schedule.",
  },

  {
    icon: Handshake,
    title: "Customer Commitment",
    description:
      "We believe in building long-term partnerships through trust, transparency, and reliable service.",
  },
];

export default function WhyChooseUs() {
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
            WHY CHOOSE US
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
            Why Businesses Trust
            Chippy Exports
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
            We combine quality manufacturing,
            operational excellence, and customer-focused
            service to create long-lasting business relationships.
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
          {reasons.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="
                group

                rounded-[24px]

                border
                border-[#ECECEC]

                bg-white

                p-8

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
                  <div
                    className="
                    flex

                    h-16
                    w-16

                    shrink-0

                    items-center
                    justify-center

                    rounded-2xl

                    bg-[#C74E14]/10

                    text-[#C74E14]
                    "
                  >
                    <Icon size={30} />
                  </div>

                  <div>
                    <h3
                      className="
                      font-poppins

                      text-xl

                      font-semibold

                      text-black
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                      mt-3

                      font-inter

                      leading-7

                      text-neutral-600
                      "
                    >
                      {item.description}
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