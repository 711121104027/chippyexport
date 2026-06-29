//src/components/products/QuickViewModal.tsx

"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Product {
  id: string;
  productName: string;
  category: string;
  type: string;
  size: string;
  description: string;
  features: string[];
  images: string[];
}

interface QuickViewModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function QuickViewModal({
  product,
  isOpen,
  onClose,
}: QuickViewModalProps) {
  if (!product) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="
            fixed inset-0 z-50
            bg-black/60
            flex items-center justify-center
            p-4
          "
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="
              bg-white
              rounded-3xl
              w-full
              max-w-6xl
              max-h-[90vh]
              overflow-y-auto
              relative
              p-6
            "
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="
                absolute top-5 right-5
                bg-gray-100
                rounded-full
                p-2
                hover:bg-gray-200
              "
            >
              <X size={22} />
            </button>

            <div className="grid lg:grid-cols-2 gap-10">
              {/* Images */}
              <div>
                <div className="grid grid-cols-2 gap-4">
                  {product.images?.map(
                    (image: string, index: number) => (
                      <div
                        key={index}
                        className="
                          relative
                          aspect-[3/4]
                          rounded-2xl
                          overflow-hidden
                        "
                      >
                        <Image
                          src={image}
                          alt={product.productName}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Details */}
              <div>
                <h2
                  className="
                    text-4xl
                    font-bold
                    text-[#7A1C1C]
                    mb-6
                  "
                >
                  {product.productName}
                </h2>

                <div className="space-y-3 text-lg">
                  <p>
                    <strong>Category:</strong>{" "}
                    {product.category}
                  </p>

                  <p>
                    <strong>Type:</strong>{" "}
                    {product.type}
                  </p>

                  <p>
                    <strong>Size:</strong>{" "}
                    {product.size}
                  </p>
                </div>

                <div className="mt-8">
                  <h3 className="text-2xl font-semibold mb-3">
                    Description
                  </h3>

                  <p className="text-gray-600 leading-8">
                    {product.description}
                  </p>
                </div>

                <div className="mt-8">
                  <h3 className="text-2xl font-semibold mb-3">
                    Features
                  </h3>

                  <ul className="space-y-2">
                    {product.features?.map(
                      (
                        feature: string,
                        index: number
                      ) => (
                        <li
                          key={index}
                          className="
                            bg-[#FAF7F2]
                            px-4
                            py-3
                            rounded-xl
                          "
                        >
                          ✓ {feature}
                        </li>
                      )
                    )}
                  </ul>
                </div>

                <div className="mt-10 space-y-3">
  {/* Enquire Button */}
  <button
    className="
      w-full
      bg-[#7A1C1C]
      text-white
      py-4
      rounded-2xl
      text-lg
      font-semibold
      hover:bg-[#641515]
      transition
    "
  >
    Enquire Now
  </button>

  {/* Premium Mobile Back Button */}
<button
  onClick={onClose}
  className="
    lg:hidden
    w-full
    py-4
    rounded-2xl

    bg-gradient-to-r
    from-white
    to-[#FAF7F2]

    border
    border-neutral-200

    text-[#7A1C1C]
    text-lg
    font-semibold

    shadow-[0_8px_25px_rgba(0,0,0,0.06)]

    hover:-translate-y-1
    hover:shadow-[0_12px_30px_rgba(122,28,28,0.12)]

    active:scale-[0.98]

    transition-all
    duration-300

    flex
    items-center
    justify-center
    gap-3
  "
>
  Back to Products
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