"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function CarouselCard() {
  const cards = [
    {
      title: "Corporates",
      color: "#3B82F6",
      icon: "💼",
      points: [
        "Free Job postings.",
        "Easy access to multiple gHRig Recruiters.",
        "Reduce Internal Fixed Cost on Recruitment team.",
        "Automated Digitized platform with Transparency.",
        "Reduce Hiring TATs.",
      ],
    },
    {
      title: "gHRig Recruiters",
      color: "#8B5CF6",
      icon: "👤",
      points: [
        "Ready availability of Hiring Assignments.",
        "Work from Home and Be Your Own Boss",
        "Flexible Timings / Increase in Work Life balance.",
        "Higher earning Potential than any Full time assignment.",
        "Exposure to Multiple Sectors / Projects.",
        "Automated Digitized platform with Transparency.",
      ],
    },
    {
      title: "gHRig Trainers",
      color: "#10B981",
      icon: "🎓",
      points: [
        "Choose your favorable Training Assignments from Corporates",
        "Work as per your comfort level and Be Your Own Boss.",
        "Higher earning Potential than any Full time assignment.",
        "Exposure to Multiple Sectors / Projects.",
        "Automated Digitized platform with Transparency.",
      ],
    },
    {
      title: "Job Seekers",
      color: "#F59E0B",
      icon: "🧑‍💻",
      points: [
        "Get access to latest Job openings PAN India.",
        "Apply across Entry / Mid / Senior levels open positions.",
        "High chances of getting interviewed from multiple Corporates.",
        "Automated Digitized platform with Transparency.",
      ],
    },
    {
      title: "Referrers",
      color: "#EC4899",
      icon: "💰",
      points: [
        "“Refer and Earn” on every Closure.",
        " Refer Unlimited candidates across Sectors – no restrictions.",
        "Automated Digitized platform with Transparency.",
      ],
    },
  ];

  return (
    <section className="w-full py-24 bg-white flex flex-col items-center">

      <h2 className="text-[38px] font-bold text-center">
        Unlock Your Potential with Our Platform
      </h2>

      <p className="text-gray-600 text-center max-w-2xl mt-3 text-[18px]">
        We offer tailored solutions for every role in the recruitment ecosystem.
        Find out how we can help you succeed.
      </p>

      <div className="w-full max-w-7xl mt-12 px-6">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          navigation={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500 }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {cards.map((card, index) => (
            <SwiperSlide key={index}>
              
              <div
                className="
                  rounded-[24px] bg-white border border-gray-200 shadow-md
                  hover:shadow-xl hover:-translate-y-1
                  transition-all duration-300 relative
                  flex flex-col h-[430px] overflow-hidden
                "
              >

                {/* FIXED TOP BORDER ALWAYS SAME */}
                <div
                  className="h-[10px] w-full absolute top-0 left-0"
                  style={{ backgroundColor: card.color }}
                ></div>

                <div className="p-6 flex flex-col flex-grow mt-3">

                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl mb-4"
                    style={{ backgroundColor: `${card.color}15`, color: card.color }}
                  >
                    {card.icon}
                  </div>

                  <h3 className="text-[22px] font-bold text-gray-900">
                    {card.title}
                  </h3>

                  <div className="w-full h-[1px] bg-gray-200 my-3"></div>

                  <ul className="space-y-2">
                    {card.points.map((p, i) => (
                      <li key={i} className="flex gap-2 text-[16px] text-gray-700">
                        <span style={{ color: card.color }}>✔</span> {p}
                      </li>
                    ))}
                  </ul>

                  <div className="flex-grow"></div>
                </div>
              </div>

            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
