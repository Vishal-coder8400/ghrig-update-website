import React from "react";
import Link from "next/link";
import { FiLinkedin, FiInstagram, FiTwitter, FiFacebook } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="relative bg-white mx-auto px-4 sm:px-10">
      <img
        className="absolute inset-0 w-full h-full object-cover opacity-80"
        alt="Gradient bg"
        src="../assets/images/gradientbg.png"
      />

      <div className="relative z-10 flex flex-col items-center gap-8 lg:gap-12 pt-8 lg:pt-10 pb-4 lg:pb-6">
        <div className="flex flex-col lg:flex-row items-start gap-4 lg:gap-24 px-4 lg:px-10 py-4 lg:py-8 self-stretch w-full bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden">

          {/* Logo Section */}
          <div className="flex items-center gap-2 invert">
            {/* Your logo */}
          </div>

          {/* COMPANY */}
          <div className="flex w-full lg:w-[442px] items-start gap-4">
            <nav className="flex flex-col items-start gap-4 lg:gap-6 flex-1">
              <h3 className="font-bold text-[#1a1819] text-sm lg:text-base tracking-wider uppercase">
                COMPANY
              </h3>
              <ul className="flex flex-col items-start gap-2 self-stretch w-full text-sm lg:text-base">
                {["Home", "Terms & Conditions", "Privacy Policy", "Disclaimer", "Career"].map((item) => (
                  <li key={item} className="self-stretch">
                    <Link
                      href={
                        item === "Home" ? "/" :
                        item === "Terms & Conditions" ? "/terms-and-conditions" :
                        item === "Privacy Policy" ? "/privacy-policy" :
                        item === "Disclaimer" ? "/disclaimer" :
                        "/career"
                      }
                      className="font-normal text-[#1a1819] hover:text-blue-600 transition-colors duration-200"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* MORE */}
          <div className="flex w-full lg:w-[442px] items-start gap-4">
            <nav className="flex flex-col items-start gap-4 lg:gap-6 flex-1">
              <h3 className="font-bold text-[#1a1819] text-sm lg:text-base tracking-wider uppercase">
                MORE
              </h3>
              <ul className="flex flex-col items-start gap-2 self-stretch w-full text-sm lg:text-base">
                {["Blogs", "FAQs", "Testimonials", "Sitemap"].map((item) => (
                  <li key={item} className="self-stretch">
                    <Link
                      href={`/${item.toLowerCase()}`}
                      className="font-normal text-[#1a1819] hover:text-blue-600 transition-colors duration-200"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* FOLLOW */}
          <div className="flex-1 flex flex-col items-start gap-5">
            <h3 className="font-bold text-[#1a1819] text-sm lg:text-base tracking-wider uppercase">
              FOLLOW
            </h3>

            <div className="flex flex-col gap-5 text-sm lg:text-base">
              {/* Social Icons */}
              <div className="flex items-center gap-4">
                <div className="flex gap-4 text-[#1a1819]">
                  <a href="#" aria-label="LinkedIn" className="hover:text-blue-600 transition-colors">
                    <FiLinkedin size={20} />
                  </a>
                  <a href="#" aria-label="Instagram" className="hover:text-blue-600 transition-colors">
                    <FiInstagram size={20} />
                  </a>
                  <a href="#" aria-label="Twitter" className="hover:text-blue-600 transition-colors">
                    <FiTwitter size={20} />
                  </a>
                  <a href="#" aria-label="Facebook" className="hover:text-blue-600 transition-colors">
                    <FiFacebook size={20} />
                  </a>
                </div>
              </div>

              {/* Logo Placeholder */}
              <div className="font-medium text-[#1a1819]">
                Logo
              </div>

              {/* Copyright */}
              <div className="text-xs lg:text-sm text-[#1a1819]/80">
                gHRig People Solutions - Copyright 2025
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col lg:flex-row items-center justify-between w-full px-4 lg:px-10 py-4">
        <p className="font-normal text-[#2d2d2d] text-xs lg:text-[10px]">
          © 2025 gHRig People Solutions - Copyright 2025
        </p>

        <Link
          href="/privacy-policy"
          className="font-normal text-[#2d2d2d] text-xs lg:text-[10px] hover:text-blue-600 transition-colors"
        >
          Privacy
        </Link>
      </div>
    </footer>
  );
}