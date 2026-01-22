"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const ServiceCard = ({ title, price, rating, reviews, image, badgeColor, delay, redirectLink }) => (
    <a
        href={redirectLink}
        target="_blank"
        rel="noopener noreferrer"
        className="block cursor-pointer group"
    >
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            className="bg-white rounded-2xl overflow-hidden shadow-[0_8px_90px_rgba(0,0,0,0.04)] duration-300"

        >
            <div className="relative aspect-[4/3] bg-gray-100">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                />
            </div>

            <div className="p-5">
                <h3 className="text-xl font-medium text-[#19191C] mb-3 group-hover:underline underline-offset-4">{title}</h3>
                <div className="flex justify-between items-center text-sm">
                    <div className="flex items-center gap-1.5">
                        <Star size={22} className="fill-black text-black" />
                        <span className="text-xl font-medium text-[#19191C]">{rating}</span>
                        <span className="text-base font-medium text-gray-500">({reviews})</span>
                    </div>
                    <div className="text-gray-500">
                        <span className="text-base">starting form</span>{" "}
                        <span className="font-medium text-[#19191C] text-xl">${price}</span>
                    </div>
                </div>
            </div>
        </motion.div>
    </a>
);

export default function Services() {
    const services = [
        {
            title: "Logo Designing",
            price: "15",
            rating: "4.8",
            reviews: "270",
            badgeColor: "bg-[#FFB800]",
            image: "/assets/logoDesign.svg",
            redirectLink: "https://www.fiverr.com/tewana_j/design-professional-and-unique-minimalist-business-logo-design?ref_ctx_id=d99520290f5a4b71b3874c874c9b30f7&pckg_id=1&source=seller_page",
        },
        {
            title: "Website Development",
            price: "95",
            rating: "5",
            reviews: "6",
            badgeColor: "bg-[#0066FF]",
            image: "/assets/websiteDesign.svg",
            redirectLink: "https://www.fiverr.com/tewana_j/build-a-custom-fast-loading-seo-friendly-website?ref_ctx_id=d99520290f5a4b71b3874c874c9b30f7&pckg_id=1&source=seller_page",

        },
        {
            title: "Logo_Design",
            price: "15",
            rating: "4.8",
            reviews: "270",
            badgeColor: "bg-[#FFB800]",
            image: "/assets/heroImage1.gif",
        },
    ];

    return (
        <section id="services" className="py-12 md:py-20 bg-white font-sans">
            <div className="w-full max-w-6xl mx-auto px-6">
                <div className="text-center mb-12">
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-[#1DBF73] font-semibold tracking-[2px] text-base uppercase block "
                    >
                        POPULAR
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-medium text-[#19191C]"
                    >
                        Services
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 justify-center">
                    {services.map((service, index) => (
                        <div key={index} className="w-full max-w-[400px] mx-auto">
                            <ServiceCard {...service} delay={index * 0.1} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
