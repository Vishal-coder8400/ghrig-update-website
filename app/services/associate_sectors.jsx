"use client";
import React, { useState } from "react";

const AssociatedSectors = () => {
  const sectors = ["IT", "Healthcare", "Finance", "Banking"];
  const [activeSector, setActiveSector] = useState("Healthcare");

  return (
    <section className="max-w-7xl mx-auto py-12 sm:py-20 px-4 lg:pt-2 sm:px-6">
      {/* Header Row */}
      <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end text-center sm:text-left gap-6 sm:gap-0 mb-12">
        <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 leading-tight">
          Our Associated <br className="hidden sm:block" /> Sectors
        </h2>

        <p className="text-gray-400 text-base sm:text-2xl font-medium max-w-xs">
          Sectors we are <br className="hidden sm:block" /> associated with
          currently
        </p>
      </div>

      {/* Sector Buttons */}
      <div className="flex flex-wrap justify-center sm:justify-between gap-4 sm:gap-8">
        {sectors.map((sector) => (
          <button
            key={sector}
            onClick={() => setActiveSector(sector)}
            className={`w-[45%] sm:w-[250px] md:w-[280px] h-[80px] sm:h-[100px] rounded-xl font-medium text-base sm:text-lg transition-all duration-300 
              ${
                activeSector === sector
                  ? "text-white shadow-md scale-[1.02] bg-gradient-to-t from-[#5D1E90] via-[#D82558] to-[#5D1E90]"
                  : "border border-gray-300 text-gray-800 bg-white hover:bg-gradient-to-t hover:from-[#5D1E90] hover:via-[#D82558] hover:to-[#5D1E90] hover:text-white"
              }`}
          >
            {sector}
          </button>
        ))}
      </div>
    </section>
  );
};

export default AssociatedSectors;
