// src/components/contact/OfficeSection.tsx

"use client";

import { useState } from "react";
import {
  Building2,
  MapPin,
  Factory,
} from "lucide-react";

const offices = {
  head: {
    name: "Chippy Exports",
    subtitle: "Head Office",
    address: `No.178/1A, KG Nagar, Pitchampalayam,Tiruppur - 641603,
Tamil Nadu, India`,
    map:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.649462191203!2d77.33349447481052!3d11.139463189032234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9065e39dee371%3A0x9d19d1fda380b8df!2sChippy%20Exports!5e0!3m2!1sen!2sin!4v1781795299114!5m2!1sen!2sin",
  },

  corporate: {
    name: "Sarah Cottons",
    subtitle: "Corporate Office",
    address: `Sarah Cottons, Pada North, Karunagapally,Kollam - 690544,
Kerala, India`,
    map:
      "https://www.google.com/maps?q=9.0594,76.5355&output=embed",
  },
};

export default function OfficeSection() {
  const [active, setActive] = useState<"head" | "corporate">("head");

  const office = offices[active];

  return (
    <div>

      {/* Section Label */}

      <p
        className="
        mb-3

        text-[10px]
        font-medium

        tracking-[4px]
        uppercase

        text-[#C74E14]
        "
      >
        OUR LOCATIONS
      </p>

      {/* Heading */}

      <h2
        className="
        mb-8

        font-cormorant

        text-3xl
        md:text-4xl

        font-semibold

        text-black
        "
      >
        Reach Out To Us
      </h2>

      {/* Tabs */}

      <div className="mb-8 grid grid-cols-2 md:flex md:flex-wrap gap-3">

        <button
          onClick={() => setActive("head")}
          className={`
flex
flex-col
md:flex-row

items-center
justify-center

gap-2
md:gap-3

min-h-[90px]
md:min-h-0

rounded-2xl

px-3
md:px-6

py-4

text-center
md:text-left

font-poppins
font-medium

transition-all
duration-300

${
  active === "head"
    ? "bg-gradient-to-r from-[#C74E14] to-[#A52A2A] text-white shadow-[0_12px_30px_rgba(199,78,20,0.25)]"
    : "bg-white border border-[#ECECEC] text-neutral-700 hover:bg-neutral-50"
}
`}
        >
          <Building2 className="h-5 w-5 md:h-5 md:w-5" />
          <span
  className="
  text-[12px]
  md:text-base

  leading-4
  md:leading-normal
  "
>
  Head Office Address
</span>
        </button>

        <button
          onClick={() => setActive("corporate")}
          className={`
flex
flex-col
md:flex-row

items-center
justify-center

gap-2
md:gap-3

min-h-[90px]
md:min-h-0

rounded-2xl

px-3
md:px-6

py-4

text-center
md:text-left

font-poppins
font-medium

transition-all
duration-300

${
  active === "corporate"
    ? "bg-gradient-to-r from-[#C74E14] to-[#A52A2A] text-white shadow-[0_12px_30px_rgba(199,78,20,0.25)]"
    : "bg-white border border-[#ECECEC] text-neutral-700 hover:bg-neutral-50"
}
`}
        >
          <Factory className="h-5 w-5 md:h-5 md:w-5" />
          <span
  className="
  text-[12px]
  md:text-base

  leading-4
  md:leading-normal
  "
>
  Corporate Office Address
</span>
        </button>

      </div>

      {/* Card */}

      <div
        className="
        rounded-[16px]

        border
        border-[#ECECEC]

        bg-white

        p-8

        shadow-[0_8px_30px_rgba(15,23,42,0.04)]
        "
      >

        {/* Office Type */}

        <span
          className="
          inline-flex

          rounded-[12px]

          bg-[#C74E14]/10

          px-4
          py-2

          text-[13px]
          font-medium

          text-[#C74E14]
          "
        >
          {office.subtitle}
        </span>

        {/* Company Name */}

        <h3
          className="
          mt-5

          font-cormorant

          text-[24px]
          font-semibold

          leading-none

          text-black
          "
        >
          {office.name}
        </h3>

        {/* Address */}

        <div className="mt-6 flex items-start gap-3">

          <div
            className="
            mt-1

            flex
            h-10
            w-10

            items-center
            justify-center

            rounded-[10px]

            bg-[#C74E14]/10

            text-[#C74E14]
            "
          >
            <MapPin size={18} />
          </div>

          <p
            className="
  max-w-xl

  whitespace-pre-line

  text-[15px]
  leading-8

  text-neutral-900

  font-inter
  "
          >
            {office.address}
          </p>

        </div>

        {/* Map */}

        <div
          className="
          mt-5

          overflow-hidden

          rounded-[10px]

          border
          border-[#ECECEC]
          "
        >
          <iframe
            src={office.map}
            width="100%"
            height="320"
            loading="lazy"
            className="border-0"
          />
        </div>

      </div>

    </div>
  );
}