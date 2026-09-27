"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Product, parseProductColors, ColorVariant } from "@/types/product";

interface QuickViewModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  initialColorIndex?: number;
}

export default function QuickViewModal({
  product,
  isOpen,
  onClose,
  initialColorIndex = 0,
}: QuickViewModalProps) {
  const [selectedColorIndex, setSelectedColorIndex] = useState(initialColorIndex);

  // Sync when product or initialColorIndex changes
  useEffect(() => {
    setSelectedColorIndex(initialColorIndex || 0);
  }, [product, initialColorIndex]);

  const rawColors = parseProductColors(product?.colors);
  const colors: ColorVariant[] =
    rawColors.length > 0
      ? rawColors
      : Array.isArray(product?.images) && product!.images.length > 0
      ? [
          {
            name: product?.type || "Standard",
            hex: "#1E3A8A",
            images: product!.images,
          },
        ]
      : [];

  const hasColors = colors.length > 0;

  const activeColor = hasColors
    ? colors[selectedColorIndex] || colors[0]
    : null;

  // Determine images to show: active color images if available, otherwise product images
  const displayImages: string[] =
    activeColor?.images && activeColor.images.length > 0
      ? activeColor.images
      : Array.isArray(product?.images) && product!.images.length > 0
      ? product!.images
      : ["/images/logo.png"];

  return (
    <AnimatePresence>
      {isOpen && product && (
        <motion.div
          key={`modal-overlay-${product.id}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
          className="
            fixed inset-0 z-50
            bg-black/60 backdrop-blur-sm
            flex items-center justify-center
            p-3 sm:p-4 md:p-6
          "
        >
          <motion.div
            key={`modal-content-${product.id}`}
            initial={{ scale: 0.94, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.94, opacity: 0, y: 15 }}
            transition={{ duration: 0.25 }}
            className="
              bg-white
              rounded-3xl
              w-full
              max-w-5xl
              max-h-[92vh]
              overflow-y-auto
              relative
              p-5 sm:p-7 md:p-9
              shadow-2xl
            "
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="
                absolute top-4 right-4 sm:top-6 sm:right-6
                bg-neutral-100 hover:bg-neutral-200
                text-neutral-700 hover:text-black
                rounded-full
                p-2 sm:p-2.5
                transition-all
                z-10
              "
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-start">
              {/* Left Column: Product Images (2x2 Grid) */}
              <div className="lg:col-span-6">
                <motion.div
                  key={`images-grid-${selectedColorIndex}-${activeColor?.name || "default"}`}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.25 }}
                  className="grid grid-cols-2 gap-3 sm:gap-4"
                >
                  {displayImages.slice(0, 4).map((image: string, index: number) => (
                    <div
                      key={`img-frame-${selectedColorIndex}-${index}-${image}`}
                      className="
                        relative
                        aspect-[3/4]
                        rounded-2xl
                        overflow-hidden
                        bg-neutral-100
                        border border-neutral-200/60
                        shadow-sm
                      "
                    >
                      <Image
                        key={`img-${selectedColorIndex}-${index}-${image}`}
                        src={image}
                        alt={`${product.productName} - ${activeColor?.name || "View"} ${index + 1}`}
                        fill
                        sizes="(max-width: 768px) 45vw, 240px"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </motion.div>

                {displayImages.length === 0 && (
                  <div className="aspect-square bg-neutral-100 rounded-2xl flex items-center justify-center text-neutral-400">
                    No images available
                  </div>
                )}
              </div>

              {/* Right Column: Ordered Details */}
              <div className="lg:col-span-6 flex flex-col justify-between">
                <div>
                  {/* 1. Category */}
                  <div className="mb-2">
                    <span className="inline-block bg-[#7A1C1C]/10 text-[#7A1C1C] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                      {product.category}
                    </span>
                  </div>

                  {/* 2. Product Name */}
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#7A1C1C] font-[var(--font-playfair)] tracking-tight">
                    {product.productName}
                  </h2>

                  {/* 3. Type */}
                  {product.type && (
                    <div className="mt-3 text-sm text-neutral-700">
                      <strong className="text-neutral-900 font-semibold">Type:</strong>{" "}
                      <span className="text-neutral-600">{product.type}</span>
                    </div>
                  )}

                  {/* 4. Size */}
                  {product.size && (
                    <div className="mt-2 text-sm text-neutral-700">
                      <strong className="text-neutral-900 font-semibold">Size:</strong>{" "}
                      <span className="text-neutral-600">{product.size}</span>
                    </div>
                  )}

                  {/* 5. Colors with Color Circle */}
                  {hasColors && (
                    <div className="mt-4 pt-3 border-t border-neutral-100">
                      <div className="flex items-center gap-2 mb-2.5">
                        <span className="text-sm font-semibold text-neutral-900">Color:</span>
                        <span className="text-xs font-medium text-[#7A1C1C] bg-[#7A1C1C]/10 px-2.5 py-0.5 rounded-full">
                          {activeColor?.name || `Color #${selectedColorIndex + 1}`}
                        </span>
                      </div>

                      <div className="flex items-center gap-2.5 flex-wrap">
                        {colors.map((color, idx) => {
                          const isSelected = selectedColorIndex === idx;
                          const isWhite =
                            color.hex &&
                            (color.hex.toLowerCase() === "#ffffff" ||
                              color.hex.toLowerCase() === "#fff");
                          return (
                            <button
                              key={idx}
                              type="button"
                              title={color.name || `Color ${idx + 1}`}
                              onMouseEnter={() => setSelectedColorIndex(idx)}
                              onClick={() => setSelectedColorIndex(idx)}
                              className={`
                                relative w-7 h-7 rounded-full border transition-all flex items-center justify-center cursor-pointer
                                ${
                                  isSelected
                                    ? "ring-2 ring-[#7A1C1C] ring-offset-2 scale-110 border-neutral-400 shadow-md"
                                    : "border-neutral-300 hover:scale-105 opacity-80 hover:opacity-100"
                                }
                              `}
                              style={{
                                backgroundColor: color.hex || "#333333",
                              }}
                            >
                              {isSelected && (
                                <span
                                  className={`w-2 h-2 rounded-full ${
                                    isWhite ? "bg-black" : "bg-white"
                                  }`}
                                />
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* 6. Description */}
                  {product.description && (
                    <div className="mt-5 pt-3 border-t border-neutral-100">
                      <h3 className="text-base sm:text-lg font-semibold text-neutral-900 mb-2">
                        Description
                      </h3>
                      <p className="text-neutral-600 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                        {product.description}
                      </p>
                    </div>
                  )}

                  {/* 7. Features */}
                  {product.features && product.features.length > 0 && (
                    <div className="mt-5">
                      <h3 className="text-base sm:text-lg font-semibold text-neutral-900 mb-2.5">
                        Features
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {product.features.map((feature: string, index: number) => (
                          <div
                            key={index}
                            className="bg-[#FAF7F2] px-3.5 py-2 rounded-xl text-xs sm:text-sm text-neutral-800 flex items-center gap-2 border border-neutral-200/50"
                          >
                            <span className="text-[#7A1C1C] font-bold">✓</span>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* 8. Enquiry Button */}
                <div className="mt-8 pt-4 border-t border-neutral-100 flex flex-col sm:flex-row gap-3">
                  <Link
                    href={`/contact?product=${encodeURIComponent(
                      `${product.productName}${activeColor ? ` - ${activeColor.name}` : ""}`
                    )}`}
                    className="
                      flex-1
                      bg-[#7A1C1C]
                      text-white
                      py-3.5 sm:py-4
                      px-6
                      rounded-2xl
                      text-base sm:text-lg
                      font-semibold
                      hover:bg-[#641515]
                      transition-all
                      duration-200
                      shadow-md hover:shadow-lg
                      text-center
                      flex items-center justify-center
                    "
                  >
                    Enquire Now
                  </Link>

                  <button
                    onClick={onClose}
                    className="
                      sm:hidden
                      w-full
                      py-3
                      rounded-2xl
                      bg-neutral-100
                      text-neutral-700
                      text-sm font-semibold
                      hover:bg-neutral-200
                      transition
                    "
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}