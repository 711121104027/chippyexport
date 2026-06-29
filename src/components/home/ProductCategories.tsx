// src/components/home/ProductCategories.tsx

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const categories = [
  {
    title: "Men",
    image: "/images/categories/mens.png",
    href: "/men",
  },
  {
    title: "Women",
    image: "/images/categories/womens.png",
    href: "/women",
  },
  {
    title: "Kids",
    image: "/images/categories/kids.png",
    href: "/kids",
  },
];

export default function ProductCategories() {
  return (
    <section
      className="
      py-2
      md:py-4
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto

        px-4
        md:px-0
        lg:px-0
        "
      >
        <div
          className="
          grid

          gap-5

          md:grid-cols-2
          xl:grid-cols-3
          "
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
            >
              <Link href={category.href}>
                <div
                  className="
                  group

                  relative

                  overflow-hidden

                  rounded-[16px]

                  cursor-pointer
                  "
                >
                  {/* Image */}

                  <div
                    className="
                    relative

                    h-[360px]

                    md:h-[420px]

                    lg:h-[520px]
                    "
                  >
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="
                      object-cover

                      transition-transform
                      duration-700

                      group-hover:scale-105
                      "
                    />
                  </div>

                  {/* Overlay */}

                  <div
                    className="
                    absolute
                    inset-0

                    bg-gradient-to-t
                    from-black/70
                    via-black/10
                    to-transparent
                    "
                  />

                  {/* Category Name */}

                  <div
                    className="
                    absolute

                    left-6
                    bottom-6
                    "
                  >
                    <h3
                      className="
                      font-poppins

                      text-[28px]
                      md:text-[38px]

                      font-semibold

                      text-white
                      "
                    >
                      {category.title}
                    </h3>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}