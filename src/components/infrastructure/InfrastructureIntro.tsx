"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function InfrastructureIntro() {
  return (
    <section className="py-6 md:py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-5 lg:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {/* Label */}
            <p className="mb-4 font-montserrat text-[11px] font-semibold uppercase tracking-[4px] text-[#C74E14]">
              Vertical Integration
            </p>

            {/* Heading */}
            <h2 className="font-poppins text-4xl md:text-5xl font-bold leading-tight text-[#1E293B]">
              Our Infrastructure
            </h2>

            {/* Description */}
            <p className="mt-3 max-w-xl font-inter text-[16px] leading-8 text-neutral-600">
              A synergy of artisan craftsmanship and industrial precision.
              Our facilities are designed to uphold the highest standards
              of luxury garment manufacturing, ensuring every stitch mirrors
              our commitment to excellence.
            </p>

            {/* Main Entrance Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="mt-6"
            >
              <div className="overflow-hidden rounded-[3px]">
                <Image
                  src="/images/infrastructure/entrance.png"
                  alt="Main Entrance"
                  width={800}
                  height={1000}
                  className="h-auto w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Main Entrance Label */}
              <div className="pt-4 text-center">
                <h3 className="font-poppins text-[12px] md:text-[18px] font-semibold text-[#C74E14]">
                  Main Entrance & Logistics Hub
                </h3>
              </div>

              {/* The Facility Content (Placed below Main Entrance & Logistics Hub text) */}
              <div className="mt-6 pt-4 border-t border-neutral-100">
                <h3 className="font-poppins text-2xl sm:text-3xl font-bold text-[#1E293B]">
                  The Facility
                </h3>

                <p className="mt-3 font-inter text-[15px] sm:text-[16px] leading-relaxed text-neutral-600">
                  Situated at the heart of the textile hub, our modern
                  manufacturing unit spans thousands of square feet.
                  The architecture reflects our philosophy of organized,
                  spacious and process-driven production.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:pt-10"
          >
            <div>
              {/* Facility Image */}
              <div className="overflow-hidden rounded-[3px]">
                <Image
                  src="/images/infrastructure/facility.jpeg"
                  alt="The Facility"
                  width={800}
                  height={600}
                  className="h-auto w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}