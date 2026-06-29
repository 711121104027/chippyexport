//src/components/designs/DesignCard.tsx

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Design } from "@/types/design";

interface Props {
  design: Design;
}

export default function DesignCard({
  design,
}: Props) {
  const showName =
    design.category === "PACKING_BOX";

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
      }}
      whileHover={{
        y: -8,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-xl
        bg-white
        shadow-md
        hover:shadow-2xl
        transition-all
        duration-500
      "
    >
      <div
        className="
          relative
          aspect-[4/3]
          overflow-hidden
        "
      >
        <Image
          src={design.image}
          alt={design.designName}
          fill
          className="
            object-cover
            transition-transform
            duration-700
            group-hover:scale-110
          "
        />

        {/* Dark Gradient Overlay */}

        {showName && (
          <>
            <div
              className="
                absolute
                inset-x-0
                bottom-0
                h-32
                bg-gradient-to-t
                from-black/80
                via-black/40
                to-transparent
              "
            />

            <div
              className="
                absolute
                bottom-0
                left-0
                right-0
                p-4
              "
            >
              <h3
                className="
                  text-white
                  text-sm
                  sm:text-base
                  md:text-lg
                  font-semibold
                  text-center
                  drop-shadow-lg
                  transition-transform
                  duration-500
                  group-hover:-translate-y-1
                "
              >
                {design.designName}
              </h3>
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
}