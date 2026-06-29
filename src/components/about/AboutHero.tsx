"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutHero() {
    return (
        <section
            className="
            relative
            overflow-hidden

            pt-8
            md:pt-10
            lg:pt-14

            pb-16
            md:pb-20
            "
        >
            {/* Background Glow */}

            <div
                className="
                absolute
                left-1/2
                top-0

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
                relative
                z-10

                max-w-7xl
                mx-auto

                px-6
                md:px-8
                lg:px-12
                "
            >
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    {/* Label */}

                    <p
                        className="
                        mb-4

                        text-[12px]
                        font-semibold

                        uppercase

                        tracking-[5px]

                        text-[#C74E14]

                        font-poppins
                        "
                    >
                        ABOUT US
                    </p>

                    {/* Heading */}

                    <h1
                        className="
                        mx-auto

                        max-w-4xl

                        font-poppins

                        text-2xl
                        md:text-4xl
                        lg:text-5xl

                        font-bold

                        leading-tight

                        text-black
                        "
                    >
                        Building Quality,
                        <span className="text-[#C74E14]">
                            {" "}Creating Trust
                        </span>
                    </h1>

                    {/* Description */}

                    <p
                        className="
                        mx-auto

                        mt-6

                        max-w-2xl

                        text-[14px]
                        md:text-[18px]

                        leading-8

                        text-neutral-600

                        font-inter
                        "
                    >
                        Chippy Exports is committed to delivering
                        premium-quality apparel and innerwear products
                        through innovation, craftsmanship, and
                        long-term customer relationships.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}