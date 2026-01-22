"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  const [counter, setCounter] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const fullText = "I'M TEWANA\nJOHNSON";

  // Counter animation for Response Rate
  useEffect(() => {
    const timer = setTimeout(() => {
      const duration = 2000;
      const steps = 100;
      const stepDuration = duration / steps;
      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        setCounter(currentStep);
        if (currentStep >= 100) clearInterval(interval);
      }, stepDuration);
      return () => clearInterval(interval);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // Typing animation for hero text - just increment charCount
  useEffect(() => {
    let current = 0;
    const typingSpeed = 80;
    const interval = setInterval(() => {
      if (current <= fullText.length) {
        setCharCount(current);
        current++;
      } else {
        clearInterval(interval);
      }
    }, typingSpeed);
    return () => clearInterval(interval);
  }, []);

  // Helper function to render typed text with formatting and stable alignment
  const renderTypedText = () => {
    return fullText.split("\n").map((line, lineIndex) => (
      <span key={lineIndex} className="block whitespace-nowrap">
        {line.split("").map((char, charIndex) => {
          // Calculate global index to check against charCount
          const globalIndex = lineIndex === 0 ? charIndex : 11 + charIndex; // "I'M TEWANA\n" has 11 chars
          const isVisible = globalIndex < charCount;
          const isBold = lineIndex === 0 && charIndex >= 4; // "TEWANA" part of "I'M TEWANA"

          return (
            <span
              key={charIndex}
              className={`${isVisible ? "opacity-100" : "opacity-0"} ${isBold ? "font-bold" : "font-thin"
                }`}
            >
              {char}
            </span>
          );
        })}
      </span>
    ));
  };

  return (
    <section
      id="home"
      className="relative h-auto flex flex-col items-center justify-end pb-0 overflow-hidden bg-[#fdfbf7] font-sans"
    >
      {/* Background Gradient Mesh */}
      <div className="absolute top-0 inset-x-0 h-[800px] w-full bg-[radial-gradient(circle_at_20%_30%,_#fff5eb_0%,_transparent_50%)]" />

      <div className="w-full max-w-6xl mx-auto px-4 relative z-10 pt-32 md:pt-40">
        {/* Background Big Text */}
        <div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none z-0 mt-20 md:mt-26 uppercase"
        >
          <h1 className="text-[14vw] md:text-[9vw] leading-[0.85] text-[#e5e5e5] tracking-tighter select-none">
            {renderTypedText()}
          </h1>
        </div>

        {/* Central Content */}
        <div className="relative z-10 flex flex-col items-center">
          {/* Main Person Image Container */}
          <div className="relative w-[280px] h-[380px] md:w-[500px] md:h-[600px]">
            <Image
              src="/assets/heroImage1.gif"
              alt="Tewana Johnson"
              fill
              className="object-cover drop-shadow-2xl"
              priority
            />

            {/* Left Floating Card: Response Rate */}
            <div className="absolute bottom-16 -left-4 md:bottom-24 md:-left-20 bg-white py-3 px-3 md:py-4 md:px-4 rounded-xl md:rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.08)] w-[160px] md:w-[280px] transition-all font-sans">
              <div className="text-[10px] md:text-sm font-semibold text-[#19191C] mb-1">
                Response rate
              </div>
              <div className="text-lg md:text-3xl font-bold text-gray-900 mb-1 md:mb-2">
                {counter}%
              </div>

              <div className="flex items-center gap-1 md:gap-2">
                <span className="text-[8px] md:text-xs text-[#19191C] font-medium">
                  0
                </span>
                <div className="h-1.5 md:h-2 flex-1 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-[#01A95C] rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: `${counter}%` }}
                    transition={{ duration: 0.02 }}
                  />
                </div>
                <span className="text-[8px] md:text-xs text-[#19191C] font-medium">
                  100
                </span>
              </div>
            </div>

            {/* Right Floating Card: Fiverr Badge */}
            <div className="absolute -bottom-18 -right-10 md:bottom-32 md:-right-16 transition-all ">
              <Image
                src="/assets/fiverIcon.svg"
                alt="Fiverr"
                width={300}
                height={60}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
