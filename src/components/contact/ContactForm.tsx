// src/components/contact/ContactForm.tsx

export default function ContactForm() {
  return (
    <div
      className="
      rounded-[32px]
      border
      border-[#ECECEC]
      bg-white
      p-8
      md:p-10
      shadow-[0_8px_30px_rgba(15,23,42,0.04)]
      "
    >
      {/* Label */}

      <p
        className="
        mb-3
        text-[12px]
        font-medium
        uppercase
        tracking-[4px]
        text-[#C74E14]
        "
      >
        ENQUIRY FORM
      </p>

      {/* Heading */}

      <h2
        className="
        mb-10
        font-playfair
        text-[24px]
        md:text-[32px]
        font-semibold
        text-black
        "
      >
        Send An Enquiry
      </h2>

      <form className="space-y-4">

        {/* Full Name */}

        <div>
          <label
            className="
            mb-2
            block
            text-[15px]
            font-medium
            text-neutral-700
            "
          >
            Full Name
          </label>

          <input
            type="text"
            placeholder="Kathiravan"
            className="
            w-full
            rounded-[10px]
            border
            border-[#DADADA]
            bg-[#FAFAFA]
            px-3
            py-3

            font-inter
            text-[15px]
            text-neutral-800

            placeholder:text-[14px]
            placeholder:text-neutral-400

            transition-all
            duration-300

            outline-none

            focus:border-[#DADADA]
            focus:bg-white
            focus:ring-0

            focus:shadow-[0_0_0_4px_rgba(0,0,0,0.03)]
            "
          />
        </div>

        {/* Phone + Email */}

        <div className="grid gap-4 md:grid-cols-2">

          <div>
            <label
              className="
              mb-2
              block
              text-[15px]
              font-medium
              text-neutral-700
              "
            >
              Phone Number
            </label>

            <input
              type="tel"
              placeholder="+91 9876543210"
              className="
              w-full
              rounded-[10px]
              border
              border-[#DADADA]
              bg-[#FAFAFA]
              px-3
              py-3

              font-inter
              text-[15px]
              text-neutral-800

              placeholder:text-[14px]
placeholder:text-neutral-400

              transition-all
              duration-300

              outline-none

              focus:border-[#DADADA]
              focus:bg-white
              focus:ring-0

              focus:shadow-[0_0_0_4px_rgba(0,0,0,0.03)]
              "
            />
          </div>

          <div>
            <label
              className="
              mb-2
              block
              text-[15px]
              font-medium
              text-neutral-700
              "
            >
              Email Address
            </label>

            <input
              type="email"
              placeholder="kathir@example.com"
              className="
              w-full
              rounded-[10px]
              border
              border-[#DADADA]
              bg-[#FAFAFA]
              px-3
              py-3

              font-inter
              text-[15px]
              text-neutral-800

              placeholder:text-[14px]
placeholder:text-neutral-400

              transition-all
              duration-300

              outline-none

              focus:border-[#DADADA]
              focus:bg-white
              focus:ring-0

              focus:shadow-[0_0_0_4px_rgba(0,0,0,0.03)]
              "
            />
          </div>

        </div>

        {/* Product Name */}

        <div>
          <label
            className="
            mb-2
            block
            text-[15px]
            font-medium
            text-neutral-700
            "
          >
            Product Name
          </label>

          <input
            type="text"
            placeholder="Men's Innerwear, T-Shirts, Kids Wear"
            className="
            w-full
            rounded-[10px]
            border
            border-[#DADADA]
            bg-[#FAFAFA]
            px-3
            py-3

            font-inter
            text-[15px]
            text-neutral-800

            placeholder:text-[14px]
placeholder:text-neutral-400

            transition-all
            duration-300

            outline-none

            focus:border-[#DADADA]
            focus:bg-white
            focus:ring-0

            focus:shadow-[0_0_0_4px_rgba(0,0,0,0.03)]
            "
          />
        </div>

        {/* Additional Details */}

        <div>
          <label
            className="
            mb-2
            block
            text-[15px]
            font-medium
            text-neutral-700
            "
          >
            Additional Details
          </label>

          <textarea
            rows={7}
            placeholder="Tell us about your enquiry, quantity requirements, export destination, product specifications, or any additional details..."
            className="
            w-full
            rounded-[10px]
            border
            border-[#DADADA]
            bg-[#FAFAFA]
            px-3
            py-3

            font-inter
            text-[15px]
            text-neutral-800

            placeholder:text-[14px]
placeholder:text-neutral-400
placeholder:leading-7
  placeholder:tracking-[0.5px]


            resize-none

            transition-all
            duration-300

            outline-none

            focus:border-[#DADADA]
            focus:bg-white
            focus:ring-0

            focus:shadow-[0_0_0_4px_rgba(0,0,0,0.03)]
            "
          />
        </div>

        {/* Submit Button */}

        <button
          type="submit"
          className="
          w-full

          rounded-[12px]

          bg-gradient-to-r
          from-[#C74E14]
          to-[#A52A2A]

          py-3

          font-poppins
          font-semibold

          tracking-wide

          text-white

          transition-all
          duration-500

          hover:-translate-y-1

          hover:shadow-[0_15px_40px_rgba(199,78,20,0.25)]
          "
        >
          Submit Enquiry
        </button>

      </form>
    </div>
  );
}