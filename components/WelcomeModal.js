"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show modal shortly after the website loads
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-white/40 backdrop-blur-[16px] px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-[#f8fcf9] md:bg-white rounded-[24px] md:rounded-[32px] w-full max-w-[850px] md:min-h-[480px] md:h-[520px] max-h-[95vh] relative overflow-y-auto overflow-x-hidden flex flex-col md:flex-row shadow-[0_0_60px_rgba(0,0,0,0.1)] font-sans"
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 20, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 md:top-6 md:right-6 z-20 cursor-pointer hover:opacity-80 transition-opacity"
            >
              <Image
                src="/assets/close.svg"
                alt="Close"
                width={32}
                height={32}
              />
            </button>

            {/* Left Content Area */}
            <div className="flex-1 p-8 md:p-14 md:pr-4 flex flex-col justify-center z-10 h-full mt-4 md:mt-0">
              <h2 className="text-[28px] md:text-[40px] font-bold text-[#1F1F1F] leading-[1.15] md:leading-[1.1] tracking-tight mb-3 md:mb-4 max-w-[400px]">
                <span className="text-[#2ecc71]">First Impressions</span> Decide Your Clients Make It Count.
              </h2>
              <p className="text-[13px] md:text-[15px] text-gray-500 leading-relaxed mb-6 md:mb-8 max-w-[380px]">
                Your brand is more than just a website or logo it's how people perceive your business online. We help you create a powerful digital identity that builds trust and attracts real customers.
              </p>
              
              {/* Note: The user might want this to trigger the other modal or scroll to a form. For now it just closes this modal or does nothing. We'll add just a placeholder click that closes for now so it feels interactive */}
              <motion.button
                onClick={() => {
                  handleClose();
                  window.dispatchEvent(new CustomEvent('open-claim-modal'));
                }}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                animate={{ scale: [1, 1.04, 1] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="shimmer-btn bg-gradient-to-r from-[#2ecc71] to-[#27ae60] hover:from-[#27ae60] hover:to-[#229954] text-white px-5 py-2.5 rounded-xl text-[16px] font-medium tracking-normal font-sans shadow-lg origin-center cursor-pointer z-10 w-fit"
              >
                Claim Your 5% OFF
              </motion.button>
            </div>

            {/* Right Image Area */}
            <div className="md:w-[45%] w-full h-[250px] md:h-auto min-h-[250px] relative bg-[#f1faef]/50 md:bg-transparent shrink-0">
              {/* Soft decorative background glow behind her to match the reference's white feel if needed */}
              <div className="absolute top-[-50px] right-[-50px] w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-[#2ecc71]/20 blur-3xl rounded-full pointer-events-none z-0"></div>
              
              <Image
                src="/assets/tewana.png"
                alt="Tewana"
                fill
                className="object-contain object-bottom md:object-right-bottom z-10 pointer-events-none"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
