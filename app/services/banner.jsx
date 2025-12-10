"use client"
import React, { useState, useEffect } from "react";

const carouselData = [
  {
    title: "Background Verification",
    subtitle: "Employment and education checks",
  },
  {
    title: "Employee  Benefits",
    subtitle: "Group Mediclaim, Group Term plan at best market rates",
  },
  {
    title: "Payroll & Statutory   Compliances",
    subtitle: "Full compliance as per Labour acts",
  },
  {
    title: "Training &  Development",
    subtitle: "TNI, Delivery & Feedback",
  },
  {
    title: "HR Consulting",
    subtitle: "HR Policies,  Talent attraction, OD Interventions, HRMS",
  },
  {
    title: "Permanent Staffing",
    subtitle: "Customized Hiring within minimum TAT",
  },
];

const ServiceBanner = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // OPTIONAL: Auto slide every 4 sec — uncomment if needed
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % carouselData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="service-banner  mx-auto px-4 sm:px-6 lg:px-1 py-12 lg:pb-0 lg:py-20 bg-white flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
      
      {/* LEFT SIDE */}
      <div className="flex justify-center">
      <div className="service-left max-w-xl flex-col flex justify-center  w-full lg:pl-48 text-center lg:text-left">
     <div className="flex justify-center">
        <p className="inline-block w-[50%]   px-3 py-1 text-sm text-center font-medium text-purple-700 bg-purple-100 rounded-full mb-4 font_family_jakarta">
          gHRig People Solutions
        </p>
        </div>

        {/* ◼◼ TEXT CAROUSEL — ONLY THIS PART CHANGED */}
        <h1 className="text-3xl text-center sm:text-5xl font-bold text-gray-900 leading-tight">
          {carouselData[activeIndex].title}
        </h1>

        <p className="text-base text-center sm:text-lg text-gray-600 mb-8 font_family_inter transition-all duration-500">
          {carouselData[activeIndex].subtitle}
        </p>

        <div className="flex flex-wrap justify-center lg:justify-center gap-3 mb-10">
          <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors font_family_inter">
            Hire Now
          </button>
          <button className="px-6 py-3 border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium rounded-lg transition-colors font_family_inter">
            Explore Roles
          </button>
        </div>

        {/* ◼◼ DOTS — CLICK TO CHANGE SLIDE */}
        <div className="flex justify-center lg:justify-center gap-2">
          {carouselData.map((_, i) => (
            <div
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                i === activeIndex ? "bg-purple-600 w-6" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="service-right hidden lg:flex justify-end items-end flex-1">
        <img
          src="/assets/images/serviceBanner.png"
          alt="Character Illustration"
          className="z-[2] pointer-events-none translate-y-[12px] h-[650px]"
        />
      </div>
      <div className="service sm:hidden flex">
         <img
          src="/assets/images/service-phone.png"
          alt="Character Illustration"
          className="z-[2] pointer-events-none translate-y-[12px] h-[350px]"
        />
      </div>

    </section>
  );
};

export default ServiceBanner;