import React from "react";
import Link from "next/link";
export default function banner_section() {
  return (
    <div>
      <div className="bg-section m-0 sm:m-4 relative  hidden md:block ">
        {/* <div className=" flex gap-2 justify-end px-4 pt-4">
          <Link
            href="#"
            className="px-7 py-2.5 font_family_inter font-medium text-[15px] leading-[22px] text-center bg-white rounded-4xl text-[#6945ED] hover:bg-purple-500 hover:text-white transition"
          >
            Contact Us
          </Link>
          <Link
            href="#"
            className="px-7 py-2.5 font_family_inter font-medium text-[15px] leading-[22px] text-center bg-white rounded-4xl text-[#6945ED] hover:bg-purple-500 hover:text-white transition"
          >
            Contact Us
          </Link>
        </div> */}
        <div className="flex justify-center ">
          <div className="height-section flex justify-center md:items-top  lg:items-start pb-24 h-100  w-3xl mt-10">
            <div>
            <h1 className="heading text-[68px] md:text[49px] md:leading-[54px] font-medium lg:leading-[70px] text-white text-center  font_family_jakarta">
              Smarter Hiring,
              <br className="hidden lg:block" /> Stronger Careers  
            </h1>
                                <p className="font_family_display text-center text-lg text-white font-normal mb-4 mt-4">Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad   sunt. Pariatur sint culpa do  <br className="hidden lg:block" /> incididunt eiusmod eiusmod culpa. laborum tempor Lorem incididunt.</p>

            </div>
            
          </div>
        </div>

        <div
          className="absolute  top-[42%] left-[40px]  height-[31%] md:top-[23%]  w-[14%]  md:left-[40px] md:h-[31%] cursor-pointer"
          id="first"
        >
          <p className="text-[45px] text-white"></p>
        </div>
        <div className="flex justify-center">
          <div
            className="absolute      w-[18%] top-[52%] left-[20%]   h-[34.5%] cursor-pointer"
            id="second"
          >
            <p className="text-[45px] text-white"></p>
          </div>
        </div>
        <div className="flex justify-center">
          <div
            className="absolute      w-[18%]  top-[52%] h-[35%] cursor-pointer"
            id="third"
          >
            <p className="text-[45px] text-white"></p>
          </div>
        </div>
        <div className="flex justify-end">
          <div
            className="absolute      top-[23%] right-[51px]  w-[14%]   h-[31%] cursor-pointer"
            id="fourth"
          >
            <p className="text-[45px] text-white"></p>
          </div>
        </div>
        <div className="flex justify-center">
          <Link href="#">
            <div
              className="absolute      w-[9%]   h-[9%] left-[45%] top-[29.5%] cursor-pointer"
              id="fifth"
            >
              <p className="text-[45px] text-white"></p>
            </div>
          </Link>
        </div>
        <div className="flex justify-center">
          <Link href="#">
            <div
              className="absolute      w-[18%]   h-[35%] left-[62%] top-[52%] cursor-pointer"
              id="sixth"
            >
              <p className="text-[45px] text-white"></p>
            </div>
          </Link>
        </div>
      </div>
      <div className="bg-section-mobile relative block md:hidden">
        <div className="flex justify-center ">
          <div className="height-section flex justify-center items-start pb-10 h-100  w-3xl">
            <h1 className="heading text-[47px]   font-medium leading-[60px] text-white text-center  font_family_jakarta">
              The Online Recruitment
              <br className="hidden lg:block" /> Marketplace
            </h1>
          </div>
        </div>{" "}
        <div className="flex justify-center">
          <Link href="#">
            <div className="absolute     w-[18%]   h-[26%] left-[62%] top-[65%] cursor-pointer">
              <p className="text-[45px] text-white"></p>
            </div>
          </Link>
        </div>
        <div className="flex justify-center"></div>
        <div className="flex justify-center">
          <Link href="#">
            <div className="absolute     w-[24%]   h-[13%] left-[70%] top-[63%] cursor-pointer">
              <p className="text-[45px] text-white"></p>
            </div>
          </Link>
        </div>
        <div className="flex justify-end">
          <Link href="#">
            <div className="absolute     w-[36%]   h-[16%] left-[33%] top-[44%] cursor-pointer ">
              <p className="text-[45px] text-white"></p>
            </div>
          </Link>
        </div>
        <div className="flex justify-start">
          <Link href="#">
            <div className="absolute     w-[24%] left-[5%] top-[63%]  h-[13%] cursor-pointer">
              <p className="text-[45px] text-white"></p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
