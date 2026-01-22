"use client";
import React from "react";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-[#1a1c1e] text-white py-12 border-t border-gray-800">
            <div className="w-full max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12">

                {/* Logo */}
                <div className="flex justify-center md:justify-start">
                    <Image
                        src="/assets/tewanaLogo.svg"
                        alt="Tewana Logo"
                        width={180}
                        height={60}
                        className="object-contain"
                    />
                </div>

                {/* Floating Contact Badge */}
                <a
                    href="https://www.fiverr.com/tewana_j"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fixed bottom-2 -right-10 z-50 w-64 md:w-80 lg:w-[400px] transition-transform hover:scale-105 active:scale-95"
                >
                    <Image
                        src="/assets/ResponseTime.png"
                        alt="Response Time"
                        width={500}
                        height={200}
                        priority
                        quality={100}
                        className="object-contain drop-shadow-lg"
                    />
                </a>
            </div>

            <div className="w-full max-w-6xl mx-auto px-6 mt-12 text-center md:text-left text-[#FFFFFF] text-lg font-sans opacity-80">
                &copy; Copyright, {new Date().getFullYear()}. All Rights Reserved.
            </div>
        </footer>
    );
}
