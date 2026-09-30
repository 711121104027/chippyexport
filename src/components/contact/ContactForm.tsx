// src/components/contact/ContactForm.tsx

"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa";
import { CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const searchParams = useSearchParams();
  const productParam = searchParams.get("product") || "";

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [productName, setProductName] = useState("");
  const [details, setDetails] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (productParam) {
      setProductName(productParam);
    }
  }, [productParam]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName.trim() || !phone.trim() || !email.trim()) {
      setError("Please fill in all required fields (Full Name, Phone Number, Email Address).");
      return;
    }

    setError("");

    const message = `New Website Enquiry:
Name: ${fullName.trim()}
Phone: ${phone.trim()}
Email: ${email.trim()}
Product: ${productName.trim() || "General Enquiry"}
Additional Details: ${details.trim() || "N/A"}`;

    const whatsappUrl = `https://wa.me/919778202150?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <div
      className="
      rounded-[32px]
      border
      border-[#ECECEC]
      bg-white
      p-8
      md:p-10
      shadow-[0_8px_30px_rgba(15,23,42,0.04)]
      "
    >
      {/* Label */}
      <p
        className="
        mb-3
        text-[12px]
        font-medium
        uppercase
        tracking-[4px]
        text-[#C74E14]
        "
      >
        ENQUIRY FORM
      </p>

      {/* Heading */}
      <h2
        className="
        mb-6
        font-playfair
        text-[24px]
        md:text-[32px]
        font-semibold
        text-black
        "
      >
        Send An Enquiry
      </h2>

      {submitted ? (
        <div className="py-10 text-center space-y-3">
          <div className="w-16 h-16 mx-auto bg-green-100 text-green-600 rounded-full flex items-center justify-center">
            <CheckCircle2 size={36} />
          </div>
          <h3 className="text-2xl font-bold text-neutral-900 font-playfair">
            Opening WhatsApp...
          </h3>
          <p className="text-sm text-neutral-600 max-w-sm mx-auto">
            Your enquiry details have been prepared and forwarded to Chippy Exports on WhatsApp.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl">
              {error}
            </div>
          )}

          {/* Full Name */}
          <div>
            <label
              className="
              mb-2
              block
              text-[15px]
              font-medium
              text-neutral-700
              "
            >
              Full Name <span className="text-red-500">*</span>
            </label>

            <input
              type="text"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="e.g. Kathiravan"
              className="
              w-full
              rounded-[10px]
              border
              border-[#DADADA]
              bg-[#FAFAFA]
              px-3.5
              py-3
              font-inter
              text-[15px]
              text-neutral-800
              placeholder:text-[14px]
              placeholder:text-neutral-400
              transition-all
              duration-300
              outline-none
              focus:border-[#C74E14]
              focus:bg-white
              focus:ring-2
              focus:ring-[#C74E14]/15
              "
            />
          </div>

          {/* Phone + Email */}
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label
                className="
                mb-2
                block
                text-[15px]
                font-medium
                text-neutral-700
                "
              >
                Phone Number <span className="text-red-500">*</span>
              </label>

              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+91 9876543210"
                className="
                w-full
                rounded-[10px]
                border
                border-[#DADADA]
                bg-[#FAFAFA]
                px-3.5
                py-3
                font-inter
                text-[15px]
                text-neutral-800
                placeholder:text-[14px]
                placeholder:text-neutral-400
                transition-all
                duration-300
                outline-none
                focus:border-[#C74E14]
                focus:bg-white
                focus:ring-2
                focus:ring-[#C74E14]/15
                "
              />
            </div>

            <div>
              <label
                className="
                mb-2
                block
                text-[15px]
                font-medium
                text-neutral-700
                "
              >
                Email Address <span className="text-red-500">*</span>
              </label>

              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="kathir@example.com"
                className="
                w-full
                rounded-[10px]
                border
                border-[#DADADA]
                bg-[#FAFAFA]
                px-3.5
                py-3
                font-inter
                text-[15px]
                text-neutral-800
                placeholder:text-[14px]
                placeholder:text-neutral-400
                transition-all
                duration-300
                outline-none
                focus:border-[#C74E14]
                focus:bg-white
                focus:ring-2
                focus:ring-[#C74E14]/15
                "
              />
            </div>
          </div>

          {/* Product Name */}
          <div>
            <label
              className="
              mb-2
              block
              text-[15px]
              font-medium
              text-neutral-700
              "
            >
              Product / Requirements
            </label>

            <input
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              placeholder="e.g. Men's Innerwear, T-Shirts, Kids Wear"
              className="
              w-full
              rounded-[10px]
              border
              border-[#DADADA]
              bg-[#FAFAFA]
              px-3.5
              py-3
              font-inter
              text-[15px]
              text-neutral-800
              placeholder:text-[14px]
              placeholder:text-neutral-400
              transition-all
              duration-300
              outline-none
              focus:border-[#C74E14]
              focus:bg-white
              focus:ring-2
              focus:ring-[#C74E14]/15
              "
            />
          </div>

          {/* Additional Details */}
          <div>
            <label
              className="
              mb-2
              block
              text-[15px]
              font-medium
              text-neutral-700
              "
            >
              Additional Details
            </label>

            <textarea
              rows={5}
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              placeholder="Tell us about your enquiry, quantity requirements, export destination, product specifications, or any additional details..."
              className="
              w-full
              rounded-[10px]
              border
              border-[#DADADA]
              bg-[#FAFAFA]
              px-3.5
              py-3
              font-inter
              text-[15px]
              text-neutral-800
              placeholder:text-[14px]
              placeholder:text-neutral-400
              placeholder:leading-6
              placeholder:tracking-[0.5px]
              resize-none
              transition-all
              duration-300
              outline-none
              focus:border-[#C74E14]
              focus:bg-white
              focus:ring-2
              focus:ring-[#C74E14]/15
              "
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="
            w-full
            rounded-[12px]
            bg-[#25D366]
            hover:bg-[#20bd5a]
            py-3.5
            font-poppins
            font-semibold
            tracking-wide
            text-white
            transition-all
            duration-300
            hover:-translate-y-0.5
            shadow-[0_10px_25px_rgba(37,211,102,0.3)]
            hover:shadow-[0_15px_35px_rgba(37,211,102,0.4)]
            flex
            items-center
            justify-center
            gap-2.5
            cursor-pointer
            "
          >
            <FaWhatsapp size={20} />
            Submit Enquiry on WhatsApp
          </button>
        </form>
      )}
    </div>
  );
}