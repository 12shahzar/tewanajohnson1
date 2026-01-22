"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  const stats = [
    { label: "Completed projects", value: 435, suffix: "+" },
    { label: "Repeat business", value: 80, suffix: "%" },
    { label: "Years of experiences", value: 6, suffix: "+" },
  ];

  const [counters, setCounters] = useState([0, 0, 0]);

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      setCounters(stats.map((stat) => Math.floor(stat.value * progress)));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCounters(stats.map((stat) => stat.value));
      }
    };

    // Start animation with a small delay
    const timer = setTimeout(() => {
      requestAnimationFrame(animate);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="about"
      className="relative py-8 md:py-16 overflow-hidden font-sans"
    >
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/aboutBg.png"
          alt="About background"
          fill
          className="object-cover"
          priority={false}
        />
      </div>

      <div className="w-full max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[#1DBF73] font-semibold tracking-[2px] text-base uppercase block"
            >
              About Us
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-medium text-[#19191C] mb-4"
            >
              Johnson & Co.
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-5xl font-medium text-[#19191C]"
            >
              <span className="bg-[#FFE4B2] px-2 rounded-lg">Creative</span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-[#787878] space-y-4 md:pl-10 font-semibold text-lg"
          >
            <p className="leading-relaxed">
              My name is{" "}
              <span className="font-bold text-[#19191C]">Tewana Johnson</span>.
              I am a professional Logo designer and developer with over six
              years of experience in the creative industry. I now work full-time
              on Fiverr, helping new businesses build strong, professional
              branding and supporting their growth through strategic design and
              proven expertise.
            </p>
            <p className="leading-relaxed">
              If you’re looking for high-quality branding and a reliable
              creative partner, I would be happy to work with you.{" "}
              <span className="font-bold text-gray-900">
                Feel free to connect with me here on Fiverr.
              </span>
            </p>
          </motion.div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 border-t border-gray-900/10 pt-8 md:pt-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex flex-col items-start gap-2"
            >
              <span className="text-4xl md:text-6xl font-bold text-[#19191C]">
                {counters[index]}
                {stat.suffix}
              </span>
              <span className="text-[#787878] text-lg md:text-xl leading-tight">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
