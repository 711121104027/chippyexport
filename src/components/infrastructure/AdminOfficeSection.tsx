"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Building2,
  FileCheck2,
  Users2,
  BarChart3,
} from "lucide-react";

export default function AdminOfficeSection() {
  const highlights = [
    {
      icon: Building2,
      title: "Global Merchandising",
      desc: "Buyer coordination, sampling approvals & order tracking.",
    },
    {
      icon: BarChart3,
      title: "ERP Production Control",
      desc: "Real-time monitoring from cutting to final packing.",
    },
    {
      icon: FileCheck2,
      title: "Export Compliance",
      desc: "Customs documentation & international trade standards.",
    },
    {
      icon: Users2,
      title: "Operations & HR",
      desc: "Ethical workforce management & workplace safety.",
    },
  ];

  return (
    <section className="py-6 md:py-14 bg-neutral-50/50">
      <div className="max-w-7xl mx-auto px-4 md:px-5 lg:px-6">
        <div className="grid gap-8 lg:gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="font-montserrat text-[11px] font-semibold uppercase tracking-[4px] text-[#C74E14]">
              Corporate & Operations
            </p>

            <h2 className="mt-2 font-poppins text-[20px] sm:text-[24px] md:text-[28px] lg:text-[30px] xl:text-[34px] font-bold leading-tight text-[#1E293B]">
              Administrative &amp; Operations Hub
            </h2>

            <p className="mt-3 font-inter text-[14.5px] sm:text-[15.5px] leading-relaxed text-neutral-600">
              The central nervous system of our manufacturing operations. Our corporate
              administrative facility manages end-to-end production scheduling, international
              merchandising, trade compliance, and seamless client communication across global time zones.
            </p>

            {/* Highlights Grid */}
            <div className="mt-5 sm:mt-6 grid gap-3 sm:gap-4 sm:grid-cols-2">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-3 sm:p-3.5 rounded-[4px] bg-white border border-neutral-200/80 shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:border-[#C74E14]/40 transition-colors duration-300"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[3px] bg-[#C74E14]/10 text-[#C74E14]">
                        <Icon size={16} />
                      </div>
                      <h4 className="font-poppins text-[13.5px] font-semibold text-[#1E293B] leading-tight">
                        {item.title}
                      </h4>
                    </div>
                    <p className="mt-1.5 font-inter text-[12px] leading-normal text-neutral-600">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="relative overflow-hidden rounded-[4px] border border-neutral-200/80 bg-white p-2 shadow-[0_8px_30px_rgba(15,23,42,0.06)]">
              <div className="overflow-hidden rounded-[3px]">
                <Image
                  src="/images/infrastructure/office.jpg"
                  alt="Corporate Administration Office"
                  width={900}
                  height={650}
                  className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
              </div>

              <div className="pt-3 pb-1 text-center">
                <h3 className="font-poppins text-[13px] sm:text-[16px] font-semibold text-[#C74E14]">
                  Executive Administration &amp; Operations Office
                </h3>
                <p className="mt-0.5 font-inter text-[11px] sm:text-[12px] uppercase tracking-wider text-neutral-500">
                  Global Merchandising &bull; ERP Production Control &bull; Export Desk
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
