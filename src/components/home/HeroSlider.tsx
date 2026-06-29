"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper/modules";
import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const heroImages = [
  "/images/hero/hero-1.png",
  "/images/hero/hero-2.png",
  "/images/hero/hero-3.png",
  "/images/hero/hero-4.png",
  "/images/hero/hero-5.png",
];

export default function HeroSlider() {
  return (
    <section
      className="
      relative
      overflow-hidden
      mb-0
      "
    >
      {/* Left Arrow */}

      <button
        className="
        hero-prev

        absolute
        left-3
        md:left-6

        top-1/2
        z-20

        hidden
        md:flex

        h-12
        w-12

        -translate-y-1/2

        items-center
        justify-center

        rounded-xl

        bg-white/20
        backdrop-blur-md

        text-white

        transition-all
        duration-300

        hover:bg-white/30
        "
      >
        <ChevronLeft size={28} />
      </button>

      {/* Right Arrow */}

      <button
        className="
        hero-next

        absolute
        right-3
        md:right-6

        top-1/2
        z-20

        hidden
        md:flex

        h-12
        w-12

        -translate-y-1/2

        items-center
        justify-center

        rounded-xl

        bg-white/20
        backdrop-blur-md

        text-white

        transition-all
        duration-300

        hover:bg-white/30
        "
      >
        <ChevronRight size={28} />
      </button>

      <Swiper
        modules={[
          Autoplay,
          EffectFade,
          Navigation,
          Pagination,
        ]}
        effect="fade"
        loop={true}
        speed={900}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: ".hero-prev",
          nextEl: ".hero-next",
        }}
        pagination={{
          clickable: true,
        }}
        className="hero-swiper"
      >
        {heroImages.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className="
              relative

              h-[38vh]
              sm:h-[45vh]
              md:h-[60vh]
              lg:h-[78vh]
              xl:h-[88vh]
              "
            >
              <Image
                src={image}
                alt={`Hero ${index + 1}`}
                fill
                priority={index === 0}
                sizes="100vw"
                className="
                object-cover
                "
              />

              <div
                className="
                absolute
                inset-0

                bg-black/[0.08]
                "
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}