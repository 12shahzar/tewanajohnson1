"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin } from "lucide-react";

const teamMembers = [
  {
    name: "Tewana Johnson",
    location: "NORTH CAROLINA",
    image: "/assets/Pillar/Tewana.svg",
    badge: "/assets/fiver-badge.svg",
    href: "https://www.fiverr.com/s/rE4jgWx",
    description:
      "I've been in the game for 8 years now. I'm all about finding solutions, which is why I built this team. We're experts at what we do and can pretty much handle any project you throw at us!",
  },
  {
    name: "Muhammad Hamza",
    location: "Karachi, Pakistan",
    image: "/assets/Pillar/m_hamza.jpg",
    badge: "/assets/upwork-badge.svg",
    href: "https://www.upwork.com/freelancers/~0108acef1b5f14bbee?mp_source=share",
    description:
      "Hamza has been working with me for almost 4 years and manages around 80% of my projects as the project manager. He is an experienced developer himself and a key member of my team.",
  },
  {
    name: "Laetitia Guermeur",
    location: "CANNES, FRANCE",
    image: "/assets/Pillar/laetitia.svg",
    badge: "/assets/upwork-badge.svg",
    href: "https://www.upwork.com/freelancers/~01a17ddba1ab2ebfab?mp_source=share",
    description:
      "Laetitia, our graphic designer and pitch deck expert, leads all my design projects. She and her two teammates joined us 1.3 months ago and have already made a strong impact.",
  },
  {
    name: "Muhammad Saheer",
    location: "LEXINGTON, KENTUCKY",
    image: "/assets/Pillar/Saheer.svg",
    badge: "/assets/upwork-badge.svg",
    href: "https://www.upwork.com/freelancers/toprateddesigneranddeveloper?mp_source=share",
    description:
      "Saheer is a highly focused full-stack developer specializing in mobile apps, full-stack projects, and AI automation. He has been a valuable part of our team for almost 7 months.",
  },
  {
    name: "Elena",
    location: "Amsterdam, Netherlands",
    image: "/assets/Pillar/elena.jpg",
    badge: "/assets/upwork-badge.svg",
    href: "https://www.upwork.com/freelancers/lenashakurova?referrer_url_path=%2Fnx%2Fsearch%2Ftalent%2F&s=1110580764771602432",
    description:
      "Elena is an AI Automation and AI Developer, highly skilled in her field. She joined our team 3 months ago and has already shown remarkable progress and contributions.",
  },

];

export default function Pillar() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsToShow, setItemsToShow] = useState(3);
  const timerRef = useRef(null);

  // Update itemsToShow based on window width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsToShow(1);
      else if (window.innerWidth < 1024) setItemsToShow(2);
      else setItemsToShow(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalItems = teamMembers.length;
  const maxIndex = totalItems - itemsToShow;

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(nextSlide, 4000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, nextSlide]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
  };

  return (
    <section id="pillar" className="py-24 bg-white font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-left mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h4
            variants={itemVariants}
            className="text-[#1DBF73] font-semibold text-base leading-6 tracking-[0.16em] uppercase mb-0"
          >
            My Peoples
          </motion.h4>
          <motion.h2
            variants={itemVariants}
            className="text-[40px] md:text-[56px] font-medium text-[#19191C] leading-[1.1] tracking-[-0.02em]"
          >
            Our Pillar of Strength
          </motion.h2>
        </motion.div>

        {/* Carousel Container */}
        <div
          className="relative px-2 py-10 -my-10"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-visible">
            <motion.div
              className="flex gap-6"
              animate={{ x: `calc(-${activeIndex * (100 / itemsToShow)}% - ${activeIndex * 1.5}rem)` }}
              transition={{ type: "spring", stiffness: 50, damping: 15 }}
            >
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="flex-shrink-0"
                  style={{ width: `calc(${100 / itemsToShow}% - ${(itemsToShow - 1) * 1.5 / itemsToShow}rem)` }}
                >
                  <motion.a
                    href={member.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={itemVariants}
                    className="group bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.06)] flex flex-col h-full border border-gray-100/50 transition-all cursor-pointer relative"
                  >
                    {/* Member Image Container - Maintains rounded corners for image */}
                    <div className="relative w-full aspect-4/3 rounded-t-3xl overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-8 flex flex-col grow">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-[22px] md:text-[24px] font-bold text-[#19191C] relative group-hover:text-[#1DBF73] transition-colors duration-300">
                          <span className="relative">
                            {member.name}
                            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#1DBF73] transition-all duration-300 group-hover:w-full"></span>
                          </span>
                        </h3>
                        <div className="shrink-0 relative">
                          {/* CodePen Style Branded Pulse Animation (no white border) */}
                          <motion.div
                            animate={{
                              boxShadow: [
                                `0 0 0 0px ${member.badge.includes('fiver') ? "rgba(29, 191, 115, 0.5)" : "rgba(25, 25, 28, 0.5)"}`,
                                `0 0 0 15px ${member.badge.includes('fiver') ? "rgba(29, 191, 115, 0)" : "rgba(25, 25, 28, 0)"}`
                              ]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                            className="relative z-10 rounded-full flex items-center justify-center p-0.5"
                          >
                            <Image
                              src={member.badge}
                              alt="Platform badge"
                              width={34}
                              height={34}
                              className="object-contain"
                            />
                          </motion.div>
                        </div>
                      </div>

                      <div className="flex items-center text-[#1DBF73] gap-1.5 text-sm font-bold tracking-wider mb-2 uppercase">
                        <MapPin size={18} />
                        {member.location}
                      </div>

                      <p className="text-[#74767e] text-[15px] md:text-[16px] leading-[1.6] mt-auto">
                        {member.description}
                      </p>
                    </div>
                  </motion.a>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-12 gap-2.5">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`h-2.5 rounded-full transition-all duration-500 ${activeIndex === i ? "w-8 bg-[#1DBF73]" : "w-2.5 bg-gray-200 hover:bg-gray-300"
                  }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
