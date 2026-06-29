"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function StorySection() {
    return (
        <section
            id="our-story"
            className="
            py-8
            md:py-10
            "
        >
            <div
                className="
                max-w-7xl
                mx-auto

                px-4
                md:px-5
                lg:px-6
                "
            >
                <div
                    className="
                    grid
                    gap-12

                    lg:grid-cols-2
                    lg:items-center
                    "
                >
                    {/* Image */}

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="
                        order-1
                        lg:order-2
                        "
                    >
                        <div
                            className="
                            overflow-hidden

                            rounded-[12px]

                            border
                            border-[#ECECEC]

                            bg-white

                            shadow-[0_8px_30px_rgba(15,23,42,0.04)]
                            "
                        >
                            <Image
                                src="/images/about-founder.png"
                                alt="Chippy Exports"
                                width={800}
                                height={600}
                                className="
                                h-full
                                w-full

                                object-cover
                                "
                            />
                        </div>
                    </motion.div>

                    {/* Content */}

                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="
                        order-2
                        lg:order-1
                        "
                    >
                        {/* Label */}

                        <div
                            className="
                            mb-4

                            flex
                            items-center
                            gap-3
                            "
                        >
                            <div
                                className="
                                h-[2px]
                                w-10

                                bg-[#C74E14]
                                "
                            />

                            <p
                                className="
                                text-[10px]

                                font-semibold

                                uppercase

                                tracking-[4px]

                                text-[#C74E14]

                                font-poppins
                                "
                            >
                                Legacy & Purpose
                            </p>
                        </div>

                        {/* Title */}

                        <h2
                            className="
                            font-poppins

                            text-[28px]
                            md:text-[38px]

                            font-bold

                            text-black
                            "
                        >
                            Our Story
                        </h2>

                        {/* Content */}

                        <div
                            className="
                            mt-6
                            md:mt-8

                            space-y-4

                            text-neutral-600

                            leading-8

                            font-inter
                            "
                        >
                            <p>
                                Chippy Exports is dedicated to creating
                                premium apparel products with a focus on
                                quality, innovation, and customer
                                satisfaction.
                            </p>

                            <p>
                                Through modern manufacturing processes,
                                skilled craftsmanship, and a commitment
                                to excellence, we have built long-term
                                relationships with customers across
                                multiple markets.
                            </p>

                            <p>
                                Our vision is to deliver products that
                                combine comfort, style, and durability
                                while maintaining the highest standards
                                of quality and consistency.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}