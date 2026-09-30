"use client";

import { useState, useEffect } from "react";
import { X, Send, CheckCircle2 } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Product } from "@/types/product";

interface ProductEnquiryModalProps {
  product: Product | { productName: string; category?: string } | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductEnquiryModal({
  product,
  isOpen,
  onClose,
}: ProductEnquiryModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (isOpen) {
      setSubmitted(false);
      setError("");
    }
  }, [isOpen, product]);

  if (!isOpen || !product) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !phone.trim() || !email.trim()) {
      setError("Please fill in all required fields (Name, Phone, Email).");
      return;
    }

    const message = `New Product Enquiry:
Product: ${product.productName}${product.category ? ` (${product.category})` : ""}
Name: ${name.trim()}
Phone: ${phone.trim()}
Email: ${email.trim()}
Additional Details: ${details.trim() || "N/A"}`;

    const whatsappUrl = `https://wa.me/919778202150?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");

    setSubmitted(true);
    setTimeout(() => {
      onClose();
      setName("");
      setPhone("");
      setEmail("");
      setDetails("");
      setSubmitted(false);
    }, 1500);
  };

  return (
    <AnimatePresence>
      <motion.div
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
          initial={{ scale: 0.94, opacity: 0, y: 15 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.94, opacity: 0, y: 15 }}
          transition={{ duration: 0.25 }}
          className="
            bg-white
            rounded-3xl
            w-full
            max-w-lg
            overflow-hidden
            relative
            p-6 sm:p-8
            shadow-2xl
          "
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="
              absolute top-4 right-4 sm:top-5 sm:right-5
              bg-neutral-100 hover:bg-neutral-200
              text-neutral-700 hover:text-black
              rounded-full
              p-2
              transition-all
              z-10
              cursor-pointer
            "
            aria-label="Close modal"
          >
            <X size={18} />
          </button>

          {submitted ? (
            <div className="py-8 text-center space-y-3">
              <div className="w-14 h-14 mx-auto bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="text-xl font-bold text-neutral-900">
                Opening WhatsApp...
              </h3>
              <p className="text-sm text-neutral-600">
                Your enquiry details are ready to be sent to Chippy Exports on WhatsApp.
              </p>
            </div>
          ) : (
            <div>
              <div className="mb-5">
                <span className="text-[11px] font-semibold tracking-wider text-[#7A1C1C] uppercase bg-[#7A1C1C]/10 px-2.5 py-0.5 rounded-full">
                  Product Enquiry
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-2 font-[var(--font-playfair)]">
                  Enquire About Product
                </h3>
                <p className="text-xs sm:text-sm text-neutral-500 mt-1">
                  Fill in your details below to send an enquiry via WhatsApp.
                </p>
              </div>

              {error && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-3.5">
                {/* Product Name (Pre-filled) */}
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Product
                  </label>
                  <input
                    type="text"
                    value={product.productName}
                    readOnly
                    className="
                      w-full
                      rounded-xl
                      border
                      border-neutral-200
                      bg-neutral-100
                      px-3.5
                      py-2.5
                      text-sm
                      font-medium
                      text-neutral-800
                      cursor-not-allowed
                    "
                  />
                </div>

                {/* Name */}
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="
                      w-full
                      rounded-xl
                      border
                      border-neutral-300
                      bg-white
                      px-3.5
                      py-2.5
                      text-sm
                      text-neutral-800
                      placeholder:text-neutral-400
                      focus:outline-none
                      focus:ring-2
                      focus:ring-[#7A1C1C]/20
                      focus:border-[#7A1C1C]
                      transition-all
                    "
                  />
                </div>

                {/* Phone & Email in 2 columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 9876543210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="
                        w-full
                        rounded-xl
                        border
                        border-neutral-300
                        bg-white
                        px-3.5
                        py-2.5
                        text-sm
                        text-neutral-800
                        placeholder:text-neutral-400
                        focus:outline-none
                        focus:ring-2
                        focus:ring-[#7A1C1C]/20
                        focus:border-[#7A1C1C]
                        transition-all
                      "
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="
                        w-full
                        rounded-xl
                        border
                        border-neutral-300
                        bg-white
                        px-3.5
                        py-2.5
                        text-sm
                        text-neutral-800
                        placeholder:text-neutral-400
                        focus:outline-none
                        focus:ring-2
                        focus:ring-[#7A1C1C]/20
                        focus:border-[#7A1C1C]
                        transition-all
                      "
                    />
                  </div>
                </div>

                {/* Additional Details */}
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Additional Details
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Quantity requirements, export destination, color preferences, etc."
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    className="
                      w-full
                      rounded-xl
                      border
                      border-neutral-300
                      bg-white
                      px-3.5
                      py-2.5
                      text-sm
                      text-neutral-800
                      placeholder:text-neutral-400
                      focus:outline-none
                      focus:ring-2
                      focus:ring-[#7A1C1C]/20
                      focus:border-[#7A1C1C]
                      transition-all
                      resize-none
                    "
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="
                    w-full
                    mt-2
                    bg-[#25D366]
                    hover:bg-[#20bd5a]
                    text-white
                    py-3.5
                    px-5
                    rounded-xl
                    font-semibold
                    text-sm
                    shadow-md hover:shadow-lg
                    transition-all
                    duration-200
                    flex
                    items-center
                    justify-center
                    gap-2
                    cursor-pointer
                  "
                >
                  <FaWhatsapp size={18} />
                  Submit Enquiry on WhatsApp
                </button>
              </form>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
