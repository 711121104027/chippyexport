//src/app/components/common/DesktopNav.tsx
"use client";

import ProductsDropdown from "./ProductsDropdown";
import NavLink from "./NavLink";

export default function DesktopNav() {
return ( <nav className="hidden lg:flex items-center gap-6 xl:gap-10"> <NavLink
     href="/"
     label="Home"
   />
  <NavLink
    href="/about"
    label="About"
  />

  <ProductsDropdown />

  <NavLink
    href="/infrastructure"
    label="Infrastructure"
  />

  <NavLink
  href="/designs"
  label="Designs"
/>

<NavLink
  href="/contact"
  label="Contact Us"
/>
</nav>
);
}
