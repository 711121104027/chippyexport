//src/app/components/common/NavLink.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
href: string;
label: string;
}

export default function NavLink({
href,
label,
}: NavLinkProps) {
const pathname = usePathname();

const isActive =
pathname === href ||
(href !== "/" && pathname.startsWith(href));

return (
<Link
href={href}
className={`
group
relative
font-menu
whitespace-nowrap
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
  {label}

  <span
    className={`
      absolute
      -bottom-[4px]
      left-0
      h-[2px]
      bg-[#8B0000]
      transition-all
      duration-300

      ${
        isActive
          ? "w-full"
          : "w-0 group-hover:w-full"
      }
    `}
  />
</Link>
);
}
