"use client";

import { motion } from "framer-motion";
import { Eye, Target } from "lucide-react";

export default function VisionMission() {
    return (
        <section
            className="
            py-16
            md:py-20
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
                    gap-6

                    lg:grid-cols-2
                    "
                >
                    {/* Vision Card */}

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="
                        group

                        rounded-[28px]

                        border
                        border-[#ECECEC]

                        bg-white

                        p-8
                        md:p-10

                        shadow-[0_8px_30px_rgba(15,23,42,0.04)]

                        transition-all
                        duration-300

                        hover:-translate-y-2
                        hover:shadow-[0_15px_40px_rgba(15,23,42,0.08)]
                        "
                    >
                        <div
                            className="
                            flex

                            h-12
                            w-12

                            items-center
                            justify-center

                            rounded-[10px]

                            bg-[#C74E14]/10

                            text-[#C74E14]
                            "
                        >
                            <Eye size={24} />
                        </div>

                        <h3
                            className="
                            mt-6

                            font-poppins

                            text-3xl

                            font-semibold

                            text-black
                            "
                        >
                            Our Vision
                        </h3>

                        <p
                            className="
                            mt-5

                            font-inter

                            text-[16px]

                            leading-8

                            text-neutral-600
                            "
                        >
                            To become a globally trusted apparel
                            manufacturing and export company by
                            consistently delivering quality,
                            innovation, and customer satisfaction.
                        </p>
                    </motion.div>

                    {/* Mission Card */}

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="
                        group

                        rounded-[28px]

                        bg-gradient-to-br
                        from-[#333333]
                        to-[#1F1F1F]

                        p-8
                        md:p-10

                        shadow-[0_8px_30px_rgba(15,23,42,0.10)]

                        transition-all
                        duration-300

                        hover:-translate-y-2
                        hover:shadow-[0_20px_50px_rgba(15,23,42,0.18)]
                        "
                    >
                        <div
                            className="
                            flex

                            h-12
                            w-12

                            items-center
                            justify-center

                            rounded-[10px]

                            bg-white/10

                            text-[#C74E14]
                            "
                        >
                            <Target size={24} />
                        </div>

                        <h3
                            className="
                            mt-6

                            font-poppins

                            text-3xl

                            font-semibold

                            text-white
                            "
                        >
                            Our Mission
                        </h3>

                        <p
                            className="
                            mt-5

                            font-inter

                            text-[16px]

                            leading-8

                            text-neutral-300
                            "
                        >
                            To manufacture and deliver premium apparel
                            products that exceed customer expectations
                            while maintaining ethical practices,
                            operational excellence, and long-term
                            business relationships.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}