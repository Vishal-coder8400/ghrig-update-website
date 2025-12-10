"use client";

import React from "react";
import { ChevronRightIcon } from "lucide-react";
import { Card, CardContent } from "../../components/ui/card";

const values = [
  {
    title: "Organizational Values @gHRig",
    points: [
      "Caring & Respect for Individuals",
      "Merit and Output Driven",
      "Task Clarity",
      "Transparent",
    ],
    image: "/assets/images/built1.png",
  },
  {
    title: "Values amongst gHRig Team",
    points: [
      "Honest & Hardworking",
      "Respects agreed Timelines Urgency in Action",
      "Passionate & Accountable",
      "Allows work to speak",
    ],
    image: "/assets/images/built2.png",
  },
  {
    title: "Work Culture",
    points: [
      "Collaborative and Supportive Environment",
      "Fast Track Career path",
      "Large canvas to learn",
      "Regular hand holding",
    ],
    image: "/assets/images/built3.png",
  },
];

const BuiltForYou = () => {
  return (
    <section className="w-full bg-[#F5F2FF] py-16 px-6">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center mb-14 text-center md:text-left">
        {/* Left Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mx-auto md:mx-0">
          Built for you, <br /> to serve you.
        </h2>

        {/* Right Paragraph */}
        <div className="md:w-[50%] text-gray-600 text-ld mt-6 md:mt-0 mx-auto md:mx-0 md:text-right md:self-end">
          <p>
          Parallelly we assist our Clients by matching the right individuals with right skill sets for their open positions.We act as a catalyst before our Clients where our expert team works closely with them thereby understanding their requirement minutely to provide the best solutions from the market.Through us our Clients can bring in more efficiency towards meeting their HR related challenges
          </p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {values.map((item, index) => (
          <Card
            key={index}
            className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
          >
            <CardContent className="p-8 flex flex-col items-center md:items-start gap-6 text-center md:text-left">
              {/* Image */}
              <div className="w-full h-[160px] flex items-center justify-center overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-contain w-full h-full"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-800 font_family_jakarta">
                {item.title}
              </h3>

              {/* Points */}
              <ul className="text-gray-700 text-[15px] leading-relaxed list-disc md:pl-5 pl-6 text-left">
                {item.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              {/* Proceed Button */}
              <a
                href="#"
                className="flex items-center justify-center md:justify-start gap-2 bg-[#6945ED] text-white px-6 py-2.5 rounded-full font-medium mt-4 hover:shadow-lg transition-all duration-300 group"
              >
                Proceed
                <ChevronRightIcon className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default BuiltForYou;
