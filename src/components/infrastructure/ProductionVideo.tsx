"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Play, PlayCircle, X } from "lucide-react";

export default function ProductionVideo() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-6 md:py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-5 lg:px-6">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="text-[11px] font-montserrat font-semibold uppercase tracking-[4px] text-[#C74E14]">
              Production Journey
            </p>

            <h2 className="mt-4 font-poppins text-[24px] md:text-[38px] font-bold leading-[1.1] text-[#1E293B]">
              Watch Our Manufacturing Process
            </h2>

            <p className="mt-3 max-w-xl font-inter text-[16px] md:text-[17px] leading-8 text-neutral-600">
              Experience our complete production journey — from fabric
              preparation and precision cutting to stitching, quality inspection,
              packaging, and dispatch. See how craftsmanship and technology come
              together to create premium apparel products.
            </p>

            {/* Clickable Factory Tour Video Trigger */}
            <button
              type="button"
              onClick={() => setIsPlaying(true)}
              className="mt-6 flex items-center gap-4 text-left group cursor-pointer p-2 -ml-2 rounded-2xl hover:bg-neutral-50 transition-colors"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#C74E14]/10 text-[#C74E14] group-hover:scale-110 group-hover:bg-[#C74E14] group-hover:text-white transition-all duration-300">
                <PlayCircle size={34} />
              </div>

              <div>
                <h3 className="font-poppins text-xl font-semibold text-[#1E293B] group-hover:text-[#C74E14] transition-colors">
                  Factory Tour Video
                </h3>
                <p className="mt-1 font-inter text-neutral-500 text-sm">
                  {isPlaying ? "Playing video inline below" : "Click to watch video right here"}
                </p>
              </div>
            </button>
          </motion.div>

          {/* Right Video Container (In-built Video Player) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden rounded-[15px] bg-black shadow-[0_20px_60px_rgba(15,23,42,0.12)] aspect-[16/10] sm:aspect-video w-full flex items-center justify-center">
              <AnimatePresence mode="wait">
                {!isPlaying ? (
                  /* Video Thumbnail & Play Trigger */
                  <motion.div
                    key="thumbnail"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsPlaying(true)}
                    className="relative w-full h-full group cursor-pointer"
                  >
                    <Image
                      src="/images/infrastructure/video-thumbnail.png"
                      alt="Factory Tour Video"
                      fill
                      sizes="(max-width: 1024px) 100vw, 55vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/15 to-transparent transition-opacity group-hover:opacity-80" />

                    {/* Centered Animated Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative flex items-center justify-center">
                        <div className="absolute -inset-2 rounded-full bg-white/30 animate-ping opacity-60 pointer-events-none" />
                        <div className="flex h-14 w-14 sm:h-18 sm:w-18 md:h-20 md:w-20 items-center justify-center rounded-full bg-white/95 shadow-2xl transition-all duration-300 group-hover:scale-115 group-hover:bg-[#C74E14] group-hover:text-white">
                          <Play
                            size={26}
                            className="ml-1 text-[#C74E14] group-hover:text-white transition-colors"
                            fill="currentColor"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Bottom Label Badge */}
                    <div className="absolute left-3 bottom-3 md:left-6 md:bottom-6">
                      <span className="rounded-full bg-white/90 px-3.5 py-1.5 md:px-5 md:py-2 font-inter text-xs md:text-sm font-semibold text-[#1E293B] shadow-md backdrop-blur-md group-hover:bg-white transition-colors">
                        ▶ Watch Corporate Film
                      </span>
                    </div>
                  </motion.div>
                ) : (
                  /* In-built YouTube Embedded Video Player */
                  <motion.div
                    key="player"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="relative w-full h-full"
                  >
                    <iframe
                      src="https://www.youtube.com/embed/py-ezIV2iew?si=Foq9Uat68lDcRFD_&autoplay=1"
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      className="w-full h-full border-0 rounded-[15px]"
                    />

                    {/* Close / Return to Thumbnail Button */}
                    <button
                      type="button"
                      onClick={() => setIsPlaying(false)}
                      className="absolute top-3 right-3 bg-black/70 hover:bg-black text-white p-2 rounded-full shadow-lg backdrop-blur-md transition-all z-20"
                      title="Close video"
                      aria-label="Close video"
                    >
                      <X size={18} />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}