"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const PortfolioItem = ({ image, span = "", delay }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ y: -5 }}
        transition={{ duration: 0.5, delay }}
        className={`relative rounded-3xl overflow-hidden group ${span}`}
    >
        <img
            src={image}
            alt="Portfolio work"
            className="object-cover h-full w-full"
        />
    </motion.div>
);

export default function Portfolio() {
    return (
        <section id="portfolio" className="bg-transparent font-sans">
            <div className="mx-5 bg-[#F7F7F7] rounded-2xl py-12 md:py-20">
                <div className="w-full max-w-6xl mx-auto px-6 text-left">
                    <div className="mb-12 md:mb-16">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-[#1DBF73] font-semibold tracking-[2px] text-base uppercase block"
                        >
                            Portfolio
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="text-4xl md:text-5xl font-medium text-[#19191C] mb-4"
                        >
                            Identity & Branding
                        </motion.h2>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-medium text-[#19191C] "
                        >
                            <span className="bg-[#FFE4B2] px-2 rounded-lg">Collection</span>
                        </motion.h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Row 1 */}
                        <PortfolioItem
                            image="/assets/portfolioImg1.svg"
                            span="sm:col-span-2"
                        />
                        <PortfolioItem
                            image="/assets/portfolioImg4.svg"
                            delay={0.1}
                        />

                        {/* Row 2 */}
                        <PortfolioItem
                            image="/assets/portfolioImg3.svg"
                            delay={0.3}
                        />
                        <PortfolioItem
                            image="/assets/portfolioImg2.svg"
                            span="sm:col-span-2"
                            delay={0.2}
                        />

                        {/* Row 3 */}
                        <PortfolioItem
                            image="/assets/portfolioImg5.svg"
                            delay={0.4}
                        />
                        <PortfolioItem
                            image="/assets/portfolioImg6.svg"
                            delay={0.5}
                        />
                        <PortfolioItem
                            image="/assets/portfolioImg7.svg"
                            delay={0.6}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
