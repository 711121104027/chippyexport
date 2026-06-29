//src/app/components/common/ProductsDropdown.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

export default function ProductsDropdown() {
const pathname = usePathname();

const isActive =
pathname === "/men" ||
pathname === "/women" ||
pathname === "/kids";

const [open, setOpen] = useState(false);

const dropdownRef = useRef<HTMLDivElement>(null);
const timeoutRef = useRef<NodeJS.Timeout | null>(null);

const handleMouseEnter = () => {
if (timeoutRef.current) {
clearTimeout(timeoutRef.current);
}
setOpen(true);
};

const handleMouseLeave = () => {
timeoutRef.current = setTimeout(() => {
setOpen(false);
}, 150);
};

useEffect(() => {
const handleOutsideClick = (event: MouseEvent) => {
if (
dropdownRef.current &&
!dropdownRef.current.contains(
event.target as Node
)
) {
setOpen(false);
}
};

document.addEventListener(
  "mousedown",
  handleOutsideClick
);

return () => {
  document.removeEventListener(
    "mousedown",
    handleOutsideClick
  );

  if (timeoutRef.current) {
    clearTimeout(timeoutRef.current);
  }
};

}, []);

return ( <div
   ref={dropdownRef}
   className="relative"
   onMouseEnter={handleMouseEnter}
   onMouseLeave={handleMouseLeave}
 >
<button
onClick={() => setOpen((prev) => !prev)}
className={`
font-menu
flex
items-center
gap-2
text-[16px]
xl:text-[18px]
font-semibold
transition-all
duration-300
      ${
        isActive
          ? "text-[#8B0000]"
          : "text-neutral-900 hover:text-[#8B0000]"
      }
    `}
  >
    Products

    <ChevronDown
      size={18}
      className={`
        transition-transform
        duration-300
        ${open ? "rotate-180" : ""}
      `}
    />
  </button>

  <AnimatePresence>
    {open && (
      <motion.div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        initial={{
          opacity: 0,
          y: 8,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: 8,
        }}
        transition={{
          duration: 0.2,
        }}
        className="
          absolute
          left-1/2
          top-[50px]
          z-50
          mt-4
          w-60
          -translate-x-1/2

          rounded-3xl

          bg-white/90
          backdrop-blur-2xl

          shadow-[0_15px_50px_rgba(0,0,0,0.12)]

          ring-1
          ring-black/5

          overflow-hidden
        "
      >
        <Link
          href="/men"
          className="
            block
            px-6
            py-4
            transition-all
            duration-300
            hover:bg-white
            hover:text-[#8B0000]
          "
        >
          Men
        </Link>

        <Link
          href="/women"
          className="
            block
            px-6
            py-4
            transition-all
            duration-300
            hover:bg-white
            hover:text-[#8B0000]
          "
        >
          Women
        </Link>

        <Link
          href="/kids"
          className="
            block
            px-6
            py-4
            transition-all
            duration-300
            hover:bg-white
            hover:text-[#8B0000]
          "
        >
          Kids
        </Link>
      </motion.div>
    )}
  </AnimatePresence>
</div>
);
}
