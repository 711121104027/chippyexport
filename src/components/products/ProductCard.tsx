"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Product, parseProductColors, ColorVariant } from "@/types/product";

interface ProductCardProps {
  product: Product;
  onQuickView: (initialColorIndex?: number) => void;
}

export default function ProductCard({
  product,
  onQuickView,
}: ProductCardProps) {
  const [hovered, setHovered] = useState(false);
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);

  const rawColors = parseProductColors(product.colors);
  const colors: ColorVariant[] =
    rawColors.length > 0
      ? rawColors
      : Array.isArray(product.images) && product.images.length > 0
      ? [
          {
            name: product.type || "Default",
            hex: "#1E3A8A",
            images: product.images,
          },
        ]
      : [];

  const hasColors = colors.length > 0;
  const activeColor = hasColors
    ? colors[selectedColorIndex] || colors[0]
    : null;

  const colorImages =
    activeColor?.images && activeColor.images.length > 0
      ? activeColor.images
      : Array.isArray(product.images)
      ? product.images
      : [];

  const firstImage =
    colorImages.length > 0 ? colorImages[0] : "/images/logo.png";
  const secondImage =
    colorImages.length > 1 ? colorImages[1] : firstImage;

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
          key={`card-img-${selectedColorIndex}-${hovered ? 'hover' : 'main'}-${hovered ? secondImage : firstImage}`}
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
            onClick={() => onQuickView(selectedColorIndex)}
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
            "
          >
            Quick View
          </button>
        </div>
      </div>

      {/* Product Content */}
      <div className="p-3 text-center flex-1 flex flex-col justify-between">
        {/* Color Swatches */}
        {hasColors && (
          <div className="flex items-center justify-center gap-1.5 mb-2 flex-wrap min-h-[20px]">
            {colors.map((color, idx) => (
              <button
                key={idx}
                type="button"
                title={color.name || `Color ${idx + 1}`}
                onMouseEnter={() => setSelectedColorIndex(idx)}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedColorIndex(idx);
                }}
                className={`
                  w-4 h-4 rounded-full border transition-all cursor-pointer
                  ${
                    selectedColorIndex === idx
                      ? "ring-2 ring-[#7A1C1C] ring-offset-1 scale-120 border-neutral-400 shadow-sm"
                      : "border-neutral-300 hover:scale-110 opacity-75 hover:opacity-100"
                  }
                `}
                style={{
                  backgroundColor: color.hex || "#333333",
                }}
              />
            ))}
          </div>
        )}

        {/* Product Name */}
        <h3
          className="
            text-sm
            md:text-base
            font-medium
            font-[var(--font-poppins)]
            transition-colors
            duration-300
            group-hover:text-[#7A1C1C]
            line-clamp-2
            min-h-[40px]
          "
        >
          {product.productName}
          {activeColor?.name && activeColor.name !== "Default" ? (
            <span className="block text-xs font-normal text-neutral-500 mt-0.5">
              {activeColor.name}
            </span>
          ) : null}
        </h3>

        <button
          onClick={() => onQuickView(selectedColorIndex)}
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
          "
        >
          Quick View
        </button>
      </div>
    </motion.div>
  );
}