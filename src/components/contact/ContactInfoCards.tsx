// src/components/contact/ContactInfoCards.tsx

import {
    Phone,
    Building2,
    Mail,
} from "lucide-react";

const cards = [
    {
        icon: Phone,
        title: "Mobile Number",
        subtitle: "Chat with us on the go",
        details: [
            "+91 9894045533",
            "+91 9446785533",
        ],
    },
    {
        icon: Building2,
        title: "Office Number",
        subtitle: "For business & official inquiries",
        details: ["0476-2630374"],
    },
    {
        icon: Mail,
        title: "Email Address",
        subtitle: "We reply as soon as possible",
        details: ["riyas@chippyexports.com"],
    },
];

export default function ContactInfoCards() {
    return (
        <section className="pb-16">
            <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

                    {cards.map((card, index) => {
                        const Icon = card.icon;

                        return (
                            <div
                                key={index}
                                className="
group
rounded-[28px]

bg-white

border
border-[#E5E7EB]

p-7

shadow-[0_10px_30px_rgba(0,0,0,0.04)]

transition-all
duration-300

hover:-translate-y-2
hover:border-[#E0E0E0]
hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)]
"
                            >
                                <div
                                    className="
  mb-5
  flex
  h-12
  w-12
  items-center
  justify-center

  rounded-[10px]

  bg-gradient-to-br
  from-[#C74E14]
  to-[#A52A2A]

  text-white
  shadow-lg
  "
                                >
                                    <Icon size={24} />
                                </div>

                                <h3
                                    className="
                  font-cormorant
                  text-2xl
                  font-semibold
                  text-black
                  "
                                >
                                    {card.title}
                                </h3>

                                <p
                                    className="
                  mt-2
                  text-sm
                  text-neutral-500
                  font-inter
                  "
                                >
                                    {card.subtitle}
                                </p>

                                <div className="mt-6 space-y-3">
                                    {card.details.map((detail, i) => (
                                        <p
                                            key={i}
                                            className="
                      text-[18px]
                      font-medium
                      text-[#C74E14]
                      font-poppins
                      break-all
                      "
                                        >
                                            {detail}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}