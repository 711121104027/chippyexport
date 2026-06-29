//src/components/common/MobileNav.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Plus, Minus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function MobileNav() {
const [open, setOpen] = useState(false);
const pathname = usePathname();
const isActive = (path: string) => {
  return pathname === path;
};
const [productsOpen, setProductsOpen] =
useState(false);
const productsActive =
  pathname === "/men" ||
  pathname === "/women" ||
  pathname === "/kids";

const closeMenu = () => {
setOpen(false);
setProductsOpen(false);
};

return ( <div className="lg:hidden">
<button
  onClick={() => setOpen(!open)}
  className="p-2"
>
  {open ? (
    <X
      size={30}
      strokeWidth={1.5}
    />
  ) : (
    <Menu
      size={30}
      strokeWidth={1.5}
    />
  )}
</button>
  <AnimatePresence>
    {open && (
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        exit={{
          opacity: 0,
        }}
        transition={{
          duration: 0.3,
        }}
        className="
fixed
left-0
right-0
bottom-0
top-[100px]

z-[999]

bg-white

overflow-y-auto

flex
flex-col
"
      >

        {/* Menu */}

        <div
  className="
    flex-1

    flex
    flex-col

    items-center
    justify-center

    gap-8
  "
>
          <Link
            href="/"
            onClick={closeMenu}
            className={`
  font-menu
  uppercase
  tracking-[0.15em]
  text-[30px]
  font-medium
  transition-colors
  duration-300

  ${
    isActive("/")
      ? "text-[#8B0000]"
      : "text-neutral-800"
  }
`}
          >
            Home
          </Link>

          <Link
            href="/about"
            onClick={closeMenu}
            className={`
  font-menu
  uppercase
  tracking-[0.15em]
  text-[26px]
md:text-[30px]
  font-medium

  ${
    isActive("/about")
      ? "text-[#8B0000]"
      : "text-neutral-800"
  }
`}
          >
            About
          </Link>

          <div
            className="
              flex
              flex-col
              items-center
            "
          >
            <button
              onClick={() =>
                setProductsOpen(
                  !productsOpen
                )
              }
              className={`
  flex
  items-center
  gap-3

  font-menu
  uppercase
  tracking-[0.15em]
  text-[30px]
  font-medium

  ${
    productsActive
      ? "text-[#8B0000]"
      : "text-neutral-800"
  }
`}
            >
              Products

              {productsOpen ? (
                <Minus size={18} />
              ) : (
                <Plus size={18} />
              )}
            </button>

            <AnimatePresence>
              {productsOpen && (
                <motion.div
                  initial={{
                    opacity: 0,
                    height: 0,
                  }}
                  animate={{
                    opacity: 1,
                    height: "auto",
                  }}
                  exit={{
                    opacity: 0,
                    height: 0,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="
                    mt-5

                    flex
                    flex-col

                    items-center
                    gap-4
                  "
                >
                  <Link
                    href="/men"
                    onClick={closeMenu}
                    className="
                      text-[26px]
                      text-neutral-600
                    "
                  >
                    Men
                  </Link>

                  <Link
                    href="/women"
                    onClick={closeMenu}
                    className="
                      text-[26px]
                      text-neutral-600
                    "
                  >
                    Women
                  </Link>

                  <Link
                    href="/kids"
                    onClick={closeMenu}
                    className="
                      text-[26px]
                      text-neutral-600
                    "
                  >
                    Kids
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            href="/infrastructure"
            onClick={closeMenu}
            className={`
  font-menu
  uppercase
  tracking-[0.15em]
  text-[30px]
  font-medium

  ${
    isActive("/infrastructure")
      ? "text-[#8B0000]"
      : "text-neutral-800"
  }
`}
          >
            Infrastructure
          </Link>

          <Link
            href="/designs"
            onClick={closeMenu}
            className={`
  font-menu
  uppercase
  tracking-[0.15em]
  text-[30px]
  font-medium

  ${
    isActive("/designs")
      ? "text-[#8B0000]"
      : "text-neutral-800"
  }
`}
          >
            Designs
          </Link>

          <Link
            href="/contact"
            onClick={closeMenu}
            className={`
  font-menu
  uppercase
  tracking-[0.15em]
  text-[30px]
  font-medium

  ${
    isActive("/contact")
      ? "text-[#8B0000]"
      : "text-neutral-800"
  }
`}
          >
            Contact Us
          </Link>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
</div>
);
}
