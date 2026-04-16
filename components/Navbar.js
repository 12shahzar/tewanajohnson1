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
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white/95 backdrop-blur-xl border border-[#2ecc71]/30 rounded-3xl p-8 max-w-md w-full shadow-[0_0_60px_rgba(46,204,113,0.15)] relative overflow-hidden font-sans"
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
            >
              {/* Decorative top gradient line */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#2ecc71] to-[#27ae60]"></div>

              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-5 right-5 text-gray-500 hover:text-gray-800 bg-gray-100 hover:bg-gray-200 p-1.5 rounded-full transition-all z-10"
              >
                <X size={20} />
              </button>

              <div className="text-center mb-8 mt-2">
                <h2 className="text-3xl font-bold text-gray-800 mb-2 font-sans tracking-tight">Claim Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2ecc71] to-[#27ae60]">5% OFF</span></h2>
                <p className="text-sm text-gray-500 font-sans">Enter your details and grab your exclusive discount now.</p>
              </div>

              {formStatus === "success" ? (
                <div className="text-[#01A95C] text-center py-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                    className="w-16 h-16 bg-[#01A95C]/10 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <svg className="w-8 h-8 text-[#01A95C]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </motion.div>
                  <p className="text-2xl font-bold mb-2 text-gray-800 font-sans">Thank you!</p>
                  <p className="text-gray-600 font-sans">Your details have been received. We will contact you shortly with your exclusive discount!</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-5 relative z-10">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1.5 ml-1 font-sans">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#2ecc71] focus:ring-1 focus:ring-[#2ecc71]/50 transition-all shadow-sm font-sans"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1.5 ml-1 font-sans">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#2ecc71] focus:ring-1 focus:ring-[#2ecc71]/50 transition-all shadow-sm font-sans"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1.5 ml-1 font-sans">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      required
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#2ecc71] focus:ring-1 focus:ring-[#2ecc71]/50 transition-all shadow-sm font-sans"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />

                  {formStatus === "error" && (
                    <p className="text-red-500 text-sm text-center font-sans">Something went wrong. Please try again.</p>
                  )}

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={formStatus === "submitting"}
                    className="shimmer-btn w-full bg-gradient-to-r from-[#2ecc71] to-[#27ae60] hover:from-[#27ae60] hover:to-[#229954] text-white font-bold py-3.5 rounded-xl transition-all mt-4 disabled:opacity-50 shadow-lg shadow-[#2ecc71]/20 font-sans"
                  >
                    {formStatus === "submitting" ? "Submitting..." : "Claim Offer Now"}
                  </motion.button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
