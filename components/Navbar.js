"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formStatus, setFormStatus] = useState("");

  useEffect(() => {
    const handleOpenClaimModal = () => setIsModalOpen(true);
    window.addEventListener('open-claim-modal', handleOpenClaimModal);
    return () => window.removeEventListener('open-claim-modal', handleOpenClaimModal);
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("submitting");
    const formData = new FormData(e.target);
    try {
      const response = await fetch("https://formsubmit.co/ajax/queenitservices24@gmail.com", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setFormStatus("success");
        setTimeout(() => {
          setIsModalOpen(false);
          setFormStatus("");
        }, 3000);
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      setFormStatus("error");
    }
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    // { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
  ];

  return (
    <>
      <motion.nav
        className="fixed top-[20px] left-0 right-0 z-50 flex justify-center px-4"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-[#19191C] h-[65px] rounded-[16px] px-4 flex items-center justify-between w-full max-w-[1170px] shadow-2xl border border-gray-800/50 backdrop-blur-sm">
          {/* Logo - Auto Width */}
          <div className="flex-1 flex items-center justify-start">
            <Link href="/" className="z-10 relative">
              <Image
                src="/assets/tewanaLogo.svg"
                alt="Tewana Logo"
                width={130}
                height={35}
                className="object-contain"
              />
            </Link>
          </div>

          {/* Desktop Links - Centered */}
          <div className="hidden md:flex items-center gap-8 justify-center shrink-0">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-white text-[16px] leading-[24px] font-medium tracking-normal font-sans transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Side / CTA - Auto Width */}
          <div className="hidden md:flex flex-1 items-center gap-3 justify-end">
            <motion.button
              onClick={() => setIsModalOpen(true)}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="shimmer-btn bg-gradient-to-r from-[#2ecc71] to-[#27ae60] hover:from-[#27ae60] hover:to-[#229954] text-white px-5 py-2.5 rounded-xl text-[16px] font-medium tracking-normal font-sans shadow-lg origin-center cursor-pointer"
            >
              Claim Your 5% OFF
            </motion.button>
            <Link
              href="https://www.fiverr.com/tewana_j"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all transform hover:scale-105 flex items-center"
            >
              <Image
                src="/assets/fiver-icon.svg"
                alt="Fiverr"
                width={42}
                height={42}
                className="object-contain rounded-xl overflow-hidden"
              />
            </Link>
            <Link
              href="https://www.instagram.com/quee_nitservices24/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all transform hover:scale-105 flex items-center"
            >
              <Image
                src="/assets/instaIcon.svg"
                alt="Instagram"
                width={42}
                height={42}
                className="object-contain rounded-xl overflow-hidden"
              />
            </Link>
          </div>

          {/* Mobile View CTA and Icon */}
          <div className="md:hidden flex items-center gap-2 ml-auto">
            <motion.button
              onClick={() => setIsModalOpen(true)}
              whileTap={{ scale: 0.95 }}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="shimmer-btn bg-gradient-to-r from-[#2ecc71] to-[#27ae60] text-white px-3.5 py-1.5 rounded-xl text-[13px] font-semibold whitespace-nowrap shadow-md origin-center"
            >
              Claim 5% OFF
            </motion.button>
            <Link
              href="https://www.fiverr.com/tewana_j"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/assets/fiver-icon.svg"
                alt="Fiverr"
                width={32}
                height={32}
                className="object-contain rounded-xl overflow-hidden"
              />
            </Link>
            <Link
              href="https://www.instagram.com/quee_nitservices24/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/assets/instaIcon.svg"
                alt="Instagram"
                width={32}
                height={32}
                className="object-contain rounded-xl overflow-hidden"
              />
            </Link>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-white/40 backdrop-blur-[16px] px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-[24px] md:rounded-[32px] p-6 py-10 md:px-14 md:py-10 max-w-[850px] md:min-h-[480px] md:h-[520px] max-h-[95vh] w-full relative overflow-hidden overflow-x-hidden font-sans border-0 shadow-[0_0_60px_rgba(0,0,0,0.1)] flex flex-col justify-center"
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
            >
              {/* Soft decorative background glow based on the design */}
              <div className="absolute top-[-50px] right-[-50px] w-[300px] h-[300px] bg-[#2ecc71]/20 blur-3xl rounded-full pointer-events-none z-0"></div>

              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 md:top-6 md:right-6 z-20 cursor-pointer hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/assets/close.svg"
                  alt="Close"
                  width={32}
                  height={32}
                />
              </button>

              <div className="text-left">
                <h2 className="text-[28px] md:text-[32px] font-bold text-[#1F1F1F] mb-1 font-sans tracking-tight leading-tight">Claim Your <span className="text-[#2ecc71]">5% OFF</span></h2>
                <p className="text-[14px] md:text-[15px] text-gray-500 font-sans mt-2">Enter your details and grab your exclusive discount now.</p>
              </div>

              {formStatus === "success" ? (
                <div className="text-center py-8 px-4 flex flex-col items-center justify-center flex-1 my-auto">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                    className="w-20 h-20 md:w-24 md:h-24 bg-[#2ecc71]/10 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <svg className="w-10 h-10 md:w-12 md:h-12 text-[#2ecc71]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                  </motion.div>
                  <h2 className="text-[28px] md:text-[36px] font-bold mb-3 text-[#1F1F1F] font-sans tracking-tight">Thank you!</h2>
                  <p className="text-[14px] md:text-[16px] text-gray-500 font-sans max-w-[400px] mx-auto leading-relaxed">Your details have been securely received. Keep an eye on your inbox, we will contact you shortly with your exclusive discount!</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4 relative z-10 flex-col flex mt-6">
                  <div>
                    <label htmlFor="name" className="block text-[14px] font-semibold text-[#1F1F1F] mb-1.5 font-sans">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      className="w-full bg-[#f4f4f5] border-none rounded-xl px-4 py-3.5 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#2ecc71]/50 transition-all font-sans text-[14px]"
                      placeholder="tewana johnson"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-[14px] font-semibold text-[#1F1F1F] mb-1.5 font-sans">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      className="w-full bg-[#f4f4f5] border-none rounded-xl px-4 py-3.5 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#2ecc71]/50 transition-all font-sans text-[14px]"
                      placeholder="johnsoncocreative@gmail.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-[14px] font-semibold text-[#1F1F1F] mb-1.5 font-sans">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      required
                      className="w-full bg-[#f4f4f5] border-none rounded-xl px-4 py-3.5 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#2ecc71]/50 transition-all font-sans text-[14px]"
                      placeholder="1-234-5678-9101"
                    />
                  </div>
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />

                  {formStatus === "error" && (
                    <p className="text-red-500 text-sm text-center font-sans mt-2">Something went wrong. Please try again.</p>
                  )}

                  <div className="mt-4">
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      disabled={formStatus === "submitting"}
                      className="w-full bg-[#2ecc71] hover:bg-[#27ae60] text-white font-medium text-[15px] py-4 rounded-xl transition-all disabled:opacity-50 font-sans shadow-md"
                    >
                      {formStatus === "submitting" ? "Submitting..." : "Claim Your 5% OFF"}
                    </motion.button>
                  </div>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
