//src/components/products/productTypeFilter.tsx
"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface ProductTypeFilterProps {
    selectedType: string;
    setSelectedType: (value: string) => void;
    productTypes: string[];
    label: string;
}

export default function ProductTypeFilter({
    selectedType,
    setSelectedType,
    productTypes,
    label,
}: ProductTypeFilterProps) {
    const [open, setOpen] = useState(false);

    const dropdownRef =
        useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(
            event: MouseEvent
        ) {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(
                    event.target as Node
                )
            ) {
                setOpen(false);
            }
        }

        document.addEventListener(
            "mousedown",
            handleClickOutside
        );

        return () =>
            document.removeEventListener(
                "mousedown",
                handleClickOutside
            );
    }, []);

    return (
        <div
            ref={dropdownRef}
            className="
    relative
    flex
    justify-end

    mb-6
    md:mb-8
  "
        >
            {/* Trigger */}

            <button
                onClick={() =>
                    setOpen(!open)
                }
                className="
    w-[210px]
md:w-[230px]

    h-[50px]

    rounded-[15px]

    bg-white

    border
    border-gray-200

    shadow-sm

    px-6

    flex
    items-center
    justify-between

    text-[15px]
    font-medium
    text-gray-800

    transition-all
    duration-300

    hover:shadow-md
  "
            >
                <span className="whitespace-nowrap">
  {selectedType === "ALL"
    ? label
    : selectedType}
</span>

                <ChevronDown
                    className={`
            transition-transform duration-300
            ${open ? "rotate-180" : ""}
          `}
                />
            </button>

            {/* Dropdown */}

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: -10,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        exit={{
                            opacity: 0,
                            y: -10,
                        }}
                        transition={{
                            duration: 0.25,
                        }}
                        className="
  absolute
  top-[60px]
  z-50

  w-[200px]
  md:w-[230px]

  bg-white

  rounded-[24px]

  shadow-xl

  border
  border-gray-100

  p-2
"
                    >
                        {productTypes.map((type) => (
                            <button
                                key={type}
                                onClick={() => {
                                    setSelectedType(type);
                                    setOpen(false);
                                }}
                                className="
  w-full

  text-left

  px-5
  py-3

  rounded-xl

  text-[15px]
  text-gray-700

  transition-all
  duration-200

  hover:bg-gray-50
"
                            >
                                {type === "ALL"
                                    ? label
                                    : type}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}