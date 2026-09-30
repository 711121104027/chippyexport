"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Product, parseProductColors, ColorVariant } from "@/types/product";
import ProductEnquiryModal from "./ProductEnquiryModal";

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
}: QuickViewModalProps) {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  const rawColors = parseProductColors(product?.colors);
  const colors: ColorVariant[] = rawColors;
  const hasColors = colors.length > 0;

  // Display product's common images
  const displayImages: string[] =
    Array.isArray(product?.images) && product!.images.length > 0
      ? product!.images
      : ["/images/logo.png"];

  return (
    <>
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
                  cursor-pointer
                "
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-start">
                {/* Left Column: Product Images (2x2 Grid) */}
                <div className="lg:col-span-6">
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    {displayImages.slice(0, 4).map((image: string, index: number) => (
                      <div
                        key={`img-frame-${index}-${image}`}
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
                          key={`img-${index}-${image}`}
                          src={image}
                          alt={`${product.productName} - View ${index + 1}`}
                          fill
                          sizes="(max-width: 768px) 45vw, 240px"
                          className="object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    ))}
                  </div>

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

                    {/* 5. Gender (Placed directly below Size for Kids) */}
                    {(product.gender || product.category === "KIDS") && (
                      <div className="mt-2 text-sm text-neutral-700">
                        <strong className="text-neutral-900 font-semibold">Gender:</strong>{" "}
                        <span className="text-neutral-600">
                          {product.gender || "Girls"}
                        </span>
                      </div>
                    )}

                    {/* 6. Colors with Color Names Below */}
                    {hasColors && (
                      <div className="mt-4 pt-3 border-t border-neutral-100">
                        <div className="mb-2.5">
                          <span className="text-sm font-semibold text-neutral-900">
                            Available Colors:
                          </span>
                        </div>

                        <div className="flex items-start gap-4 sm:gap-5 flex-wrap">
                          {colors.map((color, idx) => (
                            <div
                              key={idx}
                              className="flex flex-col items-center gap-1.5 text-center"
                            >
                              <div
                                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-neutral-300 shadow-sm shrink-0"
                                style={{
                                  backgroundColor: color.hex || "#333333",
                                }}
                                title={color.name || `Color ${idx + 1}`}
                              />
                              <span className="text-xs font-medium text-neutral-700 max-w-[65px] leading-tight break-words">
                                {color.name || `Color ${idx + 1}`}
                              </span>
                            </div>
                          ))}
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
                    <button
                      type="button"
                      onClick={() => setIsEnquiryOpen(true)}
                      className="
                        flex-1
                        bg-[#25D366]
                        hover:bg-[#20bd5a]
                        text-white
                        py-3.5 sm:py-4
                        px-6
                        rounded-2xl
                        text-base sm:text-lg
                        font-semibold
                        transition-all
                        duration-200
                        shadow-md hover:shadow-lg
                        text-center
                        flex items-center justify-center gap-2.5
                        cursor-pointer
                      "
                    >
                      <FaWhatsapp size={22} />
                      Enquire Now
                    </button>

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
                        cursor-pointer
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

      {/* Product Enquiry Modal */}
      <ProductEnquiryModal
        product={product}
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
      />
    </>
  );
}