import Link from "next/link";
import Image from "next/image";
import {
FaWhatsapp,
FaYoutube,
FaFacebookF,
FaInstagram,
} from "react-icons/fa";

export default function Footer() {
return (
<footer
className="
mt-8
md:mt-12
    rounded-t-[40px]

    border-t
    border-neutral-200

    bg-white/70
backdrop-blur-xl
shadow-[0_-10px_40px_rgba(0,0,0,0.04)]
  "
>
  <div className="mx-auto max-w-[1600px] px-6 py-10 md:px-10 lg:px-16">

    {/* Top Section */}

    <div
      className="
        flex
        flex-col

        items-center

        gap-10

        lg:flex-row
        lg:items-center
        lg:justify-between
      "
    >
      {/* Logo */}

      <div className="text-center lg:text-left">
        <div
          className="
            flex
            items-center
            justify-center
            gap-4

            lg:justify-start
          "
        >
          <Image
            src="/images/logo.png"
            alt="Chippy Export"
            width={70}
            height={70}
            className="object-contain"
          />

          <h2
            className="
              font-company

              text-[20px]
md:text-[26px]

              text-[#8B0000]
            "
          >
            Chippy Export
          </h2>
        </div>

        <p
          className="
            mt-3

            text-[10px]
md:text-xs

            uppercase
            tracking-[0.25em]

            text-neutral-500
          "
        >
          Premium Garment Exporter
        </p>
      </div>

      {/* Navigation */}

      <nav
        className="
          flex
          flex-wrap

          justify-center

          gap-x-8
          gap-y-5

          md:gap-x-10

          font-menu
          text-[16px]
          md:text-[18px]
          font-semibold
        "
      >
        {[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Men", href: "/men" },
          { label: "Women", href: "/women" },
          { label: "Kids", href: "/kids" },
          {
            label: "Infrastructure",
            href: "/infrastructure",
          },
          { label: "Designs", href: "/designs" },
          { label: "Contact Us", href: "/contact" },
        ].map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="
              group
              relative

              transition-all
              duration-300

              hover:text-[#8B0000]
            "
          >
            {item.label}

            <span
              className="
                absolute
                left-0
                -bottom-1

                h-[1px]
                w-0

                bg-[#8B0000]

                transition-all
                duration-300

                group-hover:w-full
              "
            />
          </Link>
        ))}
      </nav>
    </div>

    {/* Divider */}

    <div className="my-10 h-px bg-neutral-300" />

    {/* Bottom Section */}

    <div
      className="
        flex
        flex-col

        items-center

        gap-8

        md:flex-row
        md:justify-between
      "
    >
      <p
        className="
          text-center

          text-sm
          md:text-base

          text-neutral-600
        "
      >
        © 2026 Chippy Export. All Rights Reserved.
      </p>

      {/* Social Icons */}

      <div className="flex items-center gap-4">

        <a
          href="#"
          aria-label="WhatsApp"
          className="
            flex
            h-10
            w-10

            items-center
            justify-center

            rounded-full

            bg-white/80
backdrop-blur-md
shadow-[0_4px_15px_rgba(0,0,0,0.06)]

            transition-all
            duration-300

            hover:-translate-y-1
            hover:text-[#25D366]
            hover:shadow-lg
          "
        >
          <FaWhatsapp size={18} />
        </a>

        <a
          href="#"
          aria-label="YouTube"
          className="
            flex
            h-10
            w-10

            items-center
            justify-center

            rounded-full

            bg-white/80
backdrop-blur-md
shadow-[0_4px_15px_rgba(0,0,0,0.06)]

            transition-all
            duration-300

            hover:-translate-y-1
            hover:text-[#FF0000]
            hover:shadow-lg
          "
        >
          <FaYoutube size={18} />
        </a>

        <a
          href="#"
          aria-label="Facebook"
          className="
            flex
            h-10
            w-10

            items-center
            justify-center

            rounded-full

            bg-white/80
backdrop-blur-md
shadow-[0_4px_15px_rgba(0,0,0,0.06)]

            transition-all
            duration-300

            hover:-translate-y-1
            hover:text-[#1877F2]
            hover:shadow-lg
          "
        >
          <FaFacebookF size={16} />
        </a>

        <a
          href="#"
          aria-label="Instagram"
          className="
            flex
            h-10
            w-10

            items-center
            justify-center

            rounded-full

            bg-white/80
backdrop-blur-md
shadow-[0_4px_15px_rgba(0,0,0,0.06)]

            transition-all
            duration-300

            hover:-translate-y-1
            hover:text-[#E4405F]
            hover:shadow-lg
          "
        >
          <FaInstagram size={18} />
        </a>

      </div>
    </div>
  </div>
</footer>
);
}
