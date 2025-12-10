import React from "react";
import Image from "next/image";
import contact_img from "../../public/assets/images/contact_img.png";
import email from "../../public/assets/images/email.png";

export default function SectionForm() {
  return (
    <div className="w-full bg-white flex justify-center">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 py-20 px-4">
        {/* LEFT FORM SECTION */}
        <div className="bg-[#FAFAFA] w-full p-10 rounded-xl">
          <h2 className="text-start text-black sm:leading-16 font-medium sm:text-[54px] leading-[44px] text-[20px] font_family_jakarta">
            {" "}
            We're always excited to hearfrom you!
          </h2>

          <p className="mt-8 text-black font-normal text-[16px] text-start">
            {" "}
            We’d love to hear from you! Whether you have questions, need assistance, or just want to say hello, feelfree to reach out. Our team is always ready to help.{" "}
          </p>

          <hr className="my-8" />

          {/* FORM */}
          <form className="space-y-6">
            {/* First & Last Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col space-y-2">
                <label
                  className="text-[14px] font-medium leading-[24px] text-[#20102B] font_family_inter
"
                >
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Jason Wild"
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-[14px] font-medium leading-[24px] text-[#20102B] font_family_inter">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Jason Wild"
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col space-y-2">
              <label
                className="text-[14px] font-medium leading-[24px] text-[#20102B] font_family_inter
"
              >
                E-mail Address
              </label>
              <input
                type="email"
                placeholder="E-mail ID"
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col space-y-2">
              <label
                className="text-[14px] font-medium leading-[24px] text-[#20102B] font_family_inter
"
              >
                Message
              </label>
              <textarea
                rows="5"
                placeholder="Write your message to us here"
                className="px-4 py-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-center mt-8 gap-2">
              <button className="text-[15px] text-white px-5 rounded-4xl py-3 font-semibold font_family_display bg-radial-[at_50%_75%] from-[#8E77E4] via-[#6945ed] to-[#6945ED] to-90%">
                Join the Movement
              </button>
              <button className="text-[15px] border-1 border-[#8E77E4] px-5 rounded-4xl py-3 text-black font-semibold font_family_display bg-white ">
                Explore Roles
              </button>
            </div>
          </form>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex flex-col gap-6">
          <Image
            src={contact_img}
            height={600}
            width={550}
            alt="contact image"
            className="rounded-xl object-cover"
          />

          <div className="bg-[#FAFAFA] rounded-xl p-10 space-y-6">
            <p className="text-[#6945ED] font-bold tracking-wide">
              GET IN TOUCH
            </p>

            <div className="bg-white gap-4 justify-start items-center flex shadow-sm rounded-lg p-4">
              <Image src={email} height={100} width={50} alt="" />
              <div className="mb-1">
                <p className="font-[500] text-[16px] font_family_display text-black">
                  E-mail
                </p>
                <p className="font-[500] text-[15px] font_family_display  text-[#7C7C7C]">
                  contactus@ghrlig.com
                </p>
              </div>
            </div>
            <div className="bg-white gap-4 justify-start items-center flex shadow-sm rounded-lg p-4">
              <Image src={email} height={100} width={50} alt="" />
              <div className="mb-1">
                <p className="font-[500] text-[16px] font_family_display text-black">
                  Address{" "}
                </p>
                <p className="font-[500] text-[15px] font_family_display  text-[#7C7C7C]">
                  1901 Thornridge Cir. Shiloh, Hawaii 81063
                </p>
              </div>
            </div>
            <div className="bg-white gap-4 justify-start items-center flex shadow-sm rounded-lg p-4">
              <Image src={email} height={100} width={50} alt="" />
              <div className="mb-1">
                <p className="font-[500] text-[16px] font_family_display text-black">
                  Phone
                </p>
                <p className="font-[500] text-[15px] font_family_display  text-[#7C7C7C]">
                  +1 (999) 999-99-99{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
