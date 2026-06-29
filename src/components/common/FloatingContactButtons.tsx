// src/components/common/FloatingContactButtons.tsx


"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Headset, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";

export default function FloatingContactButtons() {
  // Open by default
  const [open, setOpen] = useState(true);

  return (
    <div className="fixed bottom-5 right-4 md:bottom-6 md:right-6 z-50">
      {/* Contact Buttons */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 20,
              scale: 0.8,
            }}
            transition={{ duration: 0.25 }}
            className="flex flex-col items-center gap-3 mb-3"
          >
            {/* Phone Button */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ delay: 0.05 }}
              whileHover={{
                scale: 1.08,
                x: -4,
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="tel:+919876543210"
                className="
                  w-12 h-12
                  rounded-full
                  bg-[#8B1E1E]
                  text-white
                  flex items-center justify-center
                  shadow-[0_8px_25px_rgba(139,30,30,0.35)]
                  hover:shadow-[0_12px_30px_rgba(139,30,30,0.45)]
                  transition-all duration-300
                "
              >
                <span className="flex items-center justify-center">
                  <FiPhoneCall size={22} />
                </span>
              </Link>
            </motion.div>

            {/* WhatsApp Button */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ delay: 0.1 }}
              whileHover={{
                scale: 1.08,
                x: -4,
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="https://wa.me/919876543210"
                target="_blank"
                className="
                  w-12 h-12
                  rounded-full
                  bg-[#25D366]
                  text-white
                  flex items-center justify-center
                  shadow-[0_8px_25px_rgba(37,211,102,0.35)]
                  hover:shadow-[0_12px_30px_rgba(37,211,102,0.45)]
                  transition-all duration-300
                "
              >
                <span className="flex items-center justify-center">
                  <FaWhatsapp size={26} />
                </span>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{
          scale: 1.08,
        }}
        whileTap={{
          scale: 0.92,
        }}
        className="
          w-12 h-12
          rounded-full
          bg-white/95
          backdrop-blur-md
          border border-neutral-200
          shadow-xl
          flex items-center justify-center
          text-[#7A1C1C]
          transition-all duration-300
        "
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div
              key="close"
              initial={{
                rotate: -90,
                opacity: 0,
              }}
              animate={{
                rotate: 0,
                opacity: 1,
              }}
              exit={{
                rotate: 90,
                opacity: 0,
              }}
              transition={{ duration: 0.2 }}
            >
              <X size={22} strokeWidth={2.2} />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{
                rotate: 90,
                opacity: 0,
              }}
              animate={{
                rotate: 0,
                opacity: 1,
              }}
              exit={{
                rotate: -90,
                opacity: 0,
              }}
              transition={{ duration: 0.2 }}
            >
              <Headset
                size={22}
                strokeWidth={2.2}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}