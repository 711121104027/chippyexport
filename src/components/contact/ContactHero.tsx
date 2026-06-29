// src/components/contact/ContactHero.tsx

export default function ContactHero() {
  return (
    <section
      className="
      relative
      overflow-hidden
      pt-10
md:pt-14
lg:pt-16
pb-12
      "
    >
      {/* Background Glow */}

      <div
        className="
        absolute
        top-0
        left-1/2
        h-[400px]
        w-[400px]
        -translate-x-1/2
        rounded-full
        bg-[#C74E14]/5
        blur-3xl
        "
      />

      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        md:px-8
        lg:px-12
        text-center
        relative
        z-10
        "
      >
        {/* Small Label */}

        <p
          className="
          mb-5
          font-poppins
          text-[10px]
          font-medium
          uppercase
          tracking-[5px]
          text-[#C74E14]
          "
        >
          CONTACT US
        </p>

        {/* Heading */}

        <h1
          className="
          font-playfair
          text-3xl
          md:text-4xl
          lg:text-5xl
          font-semibold
          tracking-tight
          text-black
          "
        >
          Get In{" "}
          <span
            className="
            text-[#C74E14]
            italic
            "
          >
            Touch
          </span>
        </h1>

        {/* Description */}

        <p
          className="
          mt-8
          max-w-4xl
          mx-auto

          text-base
          md:text-lg

          leading-relaxed

          text-neutral-500

          font-inter
          "
        >
          We'd love to hear from you. Reach out to us for
          product enquiries, business partnerships,
          support, bulk manufacturing requirements,
          export opportunities, or any business-related
          information.
        </p>
        <div
  className="
  mt-10
  mx-auto
  h-[2px]
  w-24
  rounded-full
  bg-gradient-to-r
  from-transparent
  via-[#C74E14]
  to-transparent
  "
/>
      </div>
    </section>
  );
}