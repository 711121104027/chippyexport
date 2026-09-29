"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
  onQuickView: (initialColorIndex?: number) => void;
}

export default function ProductCard({
  product,
  onQuickView,
}: ProductCardProps) {
  const [hovered, setHovered] = useState(false);

  const productImages =
    Array.isArray(product.images) && product.images.length > 0
      ? product.images
      : [];

  const firstImage =
    productImages.length > 0 ? productImages[0] : "/images/logo.png";
  const secondImage =
    productImages.length > 1 ? productImages[1] : firstImage;

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
        flex
        flex-col
      "
    >
      {/* Image Section */}
      <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100">
        <Image
          key={`card-img-${hovered ? 'hover' : 'main'}-${hovered ? secondImage : firstImage}`}
          src={hovered ? secondImage : firstImage}
          alt={product.productName || "Product"}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="
            object-cover
            transition-all
            duration-500
            group-hover:scale-105
          "
        />

        {/* Gender Badge (e.g. for Kids) */}
        {product.gender && (
          <div className="absolute top-2 left-2 z-10 pointer-events-none">
            <span className="bg-[#7A1C1C]/90 backdrop-blur-sm text-white text-[10px] sm:text-[11px] font-medium px-2 py-0.5 rounded-md shadow-sm">
              {product.gender}
            </span>
          </div>
        )}

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
            onClick={() => onQuickView(0)}
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
              shadow-lg
              cursor-pointer
            "
          >
            Quick View
          </button>
        </div>
      </div>

      {/* Product Content */}
      <div className="p-3 text-center flex-1 flex flex-col justify-between">
        {/* Product Name Only */}
        <h3
          className="
            text-sm
            md:text-base
            font-medium
            font-[var(--font-poppins)]
            text-neutral-900
            transition-colors
            duration-300
            group-hover:text-[#7A1C1C]
            line-clamp-2
            min-h-[40px]
            flex
            items-center
            justify-center
          "
        >
          {product.productName}
        </h3>

        <button
          onClick={() => onQuickView(0)}
          className="
            md:hidden
            mt-3
            w-full
            inline-flex
            items-center
            justify-center
            bg-[#7A1C1C]
            text-white
            py-2
            rounded-lg
            text-xs
            font-medium
            shadow-sm
            transition-all
            duration-300
            cursor-pointer
          "
        >
          Quick View
        </button>
      </div>
    </motion.div>
  );
}