"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Shirt,
  HeartHandshake,
  Award,
  Sparkles,
  Scissors,
} from "lucide-react";

const features = [
  {
    icon: Shirt,
    title: "Premium Fabrics",
    description:
      "Carefully selected materials that offer superior comfort and durability.",
  },
  {
    icon: Sparkles,
    title: "Modern Designs",
    description:
      "Contemporary styles crafted to meet evolving customer preferences.",
  },
  {
    icon: ShieldCheck,
    title: "Export Quality",
    description:
      "Strict quality standards maintained across every stage of production.",
  },
  {
    icon: HeartHandshake,
    title: "Skin Friendly",
    description:
      "Soft, breathable fabrics designed for all-day comfort and confidence.",
  },
  {
    icon: Scissors,
    title: "Perfect Fit",
    description:
      "Precision cutting and tailoring ensure consistency and comfort.",
  },
  {
    icon: Award,
    title: "Reliable Craftsmanship",
    description:
      "A commitment to excellence reflected in every garment we produce.",
  },
];

export default function WhyChooseBruty() {
  return (
    <section
      className="
      py-8
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
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p
            className="
            text-[11px]

            font-poppins
            font-semibold

            uppercase

            tracking-[4px]

            text-[#C74E14]
            "
          >
            Why Choose Bruty
          </p>

          <h2
            className="
            mt-4

            font-poppins

            text-[22px]
            md:text-[42px]

            font-bold

            text-[#1E293B]
            "
          >
            Built On Quality,
            Trusted For Comfort
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
            Every product reflects our commitment to quality,
            innovation and customer satisfaction.
          </p>
        </motion.div>

        {/* Cards */}

        <div
          className="
          mt-8
          md:mt-14

          grid

          gap-5

          sm:grid-cols-2
          lg:grid-cols-3
          "
        >
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                className="
                group

                rounded-[24px]

                border
                border-[#ECECEC]

                bg-white

                p-7

                transition-all
                duration-300

                hover:-translate-y-2

                hover:shadow-[0_15px_40px_rgba(15,23,42,0.06)]
                "
              >
                {/* Icon */}

                <div
                  className="
                  flex

                  h-14
                  w-14

                  items-center
                  justify-center

                  rounded-2xl

                  bg-[#C74E14]/10

                  text-[#C74E14]

                  transition-all
                  duration-300

                  group-hover:bg-[#C74E14]
                  group-hover:text-white
                  "
                >
                  <Icon size={26} />
                </div>

                {/* Title */}

                <h3
                  className="
                  mt-6

                  font-poppins

                  text-[20px]

                  font-semibold

                  text-[#1E293B]
                  "
                >
                  {item.title}
                </h3>

                {/* Description */}

                <p
                  className="
                  mt-4

                  font-inter

                  text-[15px]

                  leading-7

                  text-neutral-600
                  "
                >
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}