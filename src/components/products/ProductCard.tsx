//src/components/products/ProductCard.tsx

"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ProductCardProps {
  product: {
    id: string;
    productName: string;
    images: string[];
  };

  onQuickView: () => void;
}

export default function ProductCard({
  product,
  onQuickView,
}: ProductCardProps) {
  const [hovered, setHovered] = useState(false);

  const firstImage = product.images?.[0];
  const secondImage =
    product.images?.[1] || firstImage;

  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.3,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="
        group
        bg-white
        rounded-[8px]
        overflow-hidden
        shadow-md
        hover:shadow-2xl
        transition-all
        duration-300
      "
    >
      {/* Image Section */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <Image
          src={hovered ? secondImage : firstImage}
          alt={product.productName}
          fill
          className="
            object-cover
            transition-all
            duration-500
            group-hover:scale-105
          "
        />

        {/* Desktop Quick View */}
        <div
          className="
            absolute
            inset-0
            hidden
            md:flex
            items-center
            justify-center
            bg-black/30
            opacity-0
            group-hover:opacity-100
            transition-all
          "
        >
          <button
            onClick={onQuickView}
            className="
              bg-white
              text-[#7A1C1C]
              px-6
              py-3
              rounded-[15px]
              font-medium
              hover:bg-[#7A1C1C]
              hover:text-white
              transition
            "
          >
            Quick View
          </button>
        </div>
      </div>

      {/* Product Name */}
      <div className="p-3 text-center">
  <h3
    className="
      text-sm
      md:text-lg
      font-medium
      font-[var(--font-poppins)]
      transition-colors
      duration-300
      group-hover:text-[#7A1C1C]
      line-clamp-2
      min-h-[42px]
    "
  >
    {product.productName}
  </h3>

  <button
    onClick={onQuickView}
    className="
      md:hidden
      mt-3

      inline-flex
      items-center
      justify-center

      bg-[#7A1C1C]
      text-white

      px-10
      py-2

      rounded-lg

      text-xs
      font-medium

      shadow-sm
      transition-all
      duration-300
    "
  >
    Quick View
  </button>
</div>
    </motion.div>
  );
}