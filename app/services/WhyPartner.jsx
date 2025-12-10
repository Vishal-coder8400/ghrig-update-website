"use client";
import React, { useState } from "react";
import { FaUsers, FaCogs, FaUniversity, FaHandsHelping, FaAward, FaMoneyCheck } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const cards = [
  { icon: <FaUsers size={40} className="bg-[#F5E9FF] text-[#9B5EFF]" />, text: "Holistic solutions to all your HR needs" },
  { icon: <FaCogs size={40} className="bg-[#F5E9FF] text-[#9B5EFF]" />, text: "Ownership on tasks assigned with focus on Quality and Quick TAT" },
  { icon: <FaUniversity size={40} className="bg-[#F5E9FF] text-[#9B5EFF]" />, text: "Team with high Ethical standards and Transparency in execution" },
  { icon: <FaHandsHelping size={40} className="bg-[#F5E9FF] text-[#9B5EFF]" />, text: "Talent of gHRig People Solutions with rich experience" },
  { icon: <FaAward size={40} className="bg-[#F5E9FF] text-[#9B5EFF]" />, text: "Knowhow of intricacies and challenges of HR Function" },
  { icon: <FaMoneyCheck size={40} className="bg-[#F5E9FF] text-[#9B5EFF]" />, text: "One stop solution for all your HR needs" },
];

const WhyPartner = () => {
  const [index, setIndex] = useState(0);
  const visibleCards = 4; // show 4 cards

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % cards.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const getVisibleCards = () => {
    let items = [];
    for (let i = 0; i < visibleCards; i++) {
      items.push(cards[(index + i) % cards.length]);
    }
    return items;
  };

  return (
    <section className="w-full bg-white py-20 px-6 lg:px-20">

      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-[#333]">
          Why partner with <span>gHRig.com</span>
        </h2>
      </div>

      {/* Carousel */}
      <div className="relative w-full max-w-[1300px] mx-auto">

        {/* PREV BUTTON – EXACT DESIGN YOU WANT */}
        <button
          onClick={prevSlide}
          className="
            absolute -left-10 top-1/2 -translate-y-1/2
            w-14 h-14 rounded-full bg-[#F3E9FF]
            shadow-md flex items-center justify-center
            hover:bg-[#E2D3FF] transition-all
          "
        >
          <span className="text-[#6B40EE] text-3xl font-bold">‹</span>
        </button>

        <div className="flex gap-6 overflow-hidden">
          <AnimatePresence mode="wait">
            {getVisibleCards().map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -80 }}
                transition={{ duration: 0.4 }}
                className="w-[280px] h-[280px] bg-[#F8F4FF] shadow-sm rounded-2xl p-6 
                           text-center flex flex-col justify-center items-center"
              >
                {card.icon}
                <p className="text-[#1A1A1A] mt-4 text-lg font-medium leading-relaxed">
                  {card.text}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* NEXT BUTTON – SAME COLOR + STYLE */}
        <button
          onClick={nextSlide}
          className="
            absolute -right-10 top-1/2 -translate-y-1/2
            w-14 h-14 rounded-full bg-[#F3E9FF]
            shadow-md flex items-center justify-center
            hover:bg-[#E2D3FF] transition-all
          "
        >
          <span className="text-[#6B40EE] text-3xl font-bold">›</span>
        </button>

      </div>

    </section>
  );
};

export default WhyPartner;
