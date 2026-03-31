"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Note: we can remove the scroll listener if the navbar is always this floating pill style,
  // or keep it if we want it to sticky-animate.
  // Based on the image, it looks like a static or sticky floating element.
  // Let's make it sticky but always keeping the "pill" shape.

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    // { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
  ];

  return (
    <motion.nav
      className="fixed top-[32px] left-0 right-0 z-50 flex justify-center px-4"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-[#19191C] h-[65px] rounded-[16px] px-4 flex items-center justify-between w-full max-w-[1170px] shadow-2xl border border-gray-800/50 backdrop-blur-sm">
        {/* Logo */}
        <Link href="/" className="mr-8">
          <Image
            src="/assets/tewanaLogo.svg"
            alt="Tewana Logo"
            width={120}
            height={40}
            className="object-contain"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 mx-auto">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-white text-[18px] leading-[24px] font-medium tracking-normal font-sans transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Side / CTA */}
        <div className="hidden md:flex items-center gap-4 ml-8">
          <Link
            href="https://www.fiverr.com/tewana_j"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#01A95C] hover:bg-[#059669] text-white px-6 py-2.5 rounded-xl text-[18px] leading-[24px] font-medium tracking-normal font-sans transition-all transform hover:scale-105 shadow-lg shadow-green-900/20"
          >
            Visit My Profile
          </Link>
          <Link
            href="https://www.instagram.com/quee_nitservices24/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all transform hover:scale-110"
          >
            <Image
              src="/assets/instaIcon.svg"
              alt="Instagram"
              width={40}
              height={40}
              className="object-contain"
            />
          </Link>
        </div>

        {/* Mobile View CTA and Icon */}
        <div className="md:hidden flex items-center gap-3 ml-auto">
          <Link
            href="https://www.fiverr.com/tewana_j"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#01A95C] text-white px-4 py-2 rounded-xl text-center text-sm font-semibold whitespace-nowrap"
          >
            Visit My Profile
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
              className="object-contain"
            />
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
