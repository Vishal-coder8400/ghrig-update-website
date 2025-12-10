"use client";
import { useState } from "react";
import Link from "next/link";
import { IoMenu, IoClose } from "react-icons/io5";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-[#000000] text-white py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 invert">
          <img
            src="../assets/images/logo.png"
            alt="Logo"
            width={85}
            height={45}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex items-center gap-10 text-sm font-medium">
            <li className="hover:text-gray-500 font_family_inter font-medium text-[14px] leading-[22px] text-center cursor-pointer">
              <Link href="/home">Home</Link>
            </li>
              <li className="hover:text-gray-500 font_family_inter font-medium text-[14px] leading-[22px] text-center cursor-pointer">
              <Link href="/about_us">About gHRig</Link>
            </li>
            <li className="hover:text-gray-500 font_family_inter font-medium text-[14px] leading-[22px] text-center cursor-pointer">
              <Link href="/services">Services we Offer</Link>
            </li>
            {/* 🔹 Newly Added Pages */}
            <li className="hover:text-gray-500 font_family_inter font-medium text-[14px] leading-[22px] text-center cursor-pointer">
              <Link href="/career">Career @gHRig</Link>
            </li>

             <li className="hover:text-gray-500 font_family_inter font-medium text-[14px] leading-[22px] text-center cursor-pointer">
              <Link href="/contact_us">Contact Us</Link>
            </li>
            {/* <li className="hover:text-gray-500 font_family_inter font-medium text-[14px] leading-[22px] text-center cursor-pointer">
              <Link href="/terms-and-conditions">Terms & Conditions</Link>
            </li>
            <li className="hover:text-gray-500 font_family_inter font-medium text-[14px] leading-[22px] text-center cursor-pointer">
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li> */}
          </ul>
        </nav>

        {/* CTA Buttons - Desktop */}
        <div className="hidden md:flex gap-3">
          <Link
            href="/login"
            className="px-7 py-2.5 font_family_inter font-medium text-[15px] leading-[22px] text-center bg-[#6945ED] rounded-4xl text-white hover:bg-purple-500 hover:text-white transition"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="px-7 py-2.5 font_family_inter font-medium text-[15px] leading-[22px] text-center bg-white rounded-4xl text-[#6945ED] hover:bg-purple-500 hover:text-white transition"
          >
            Register
          </Link>
        </div>

        {/* Hamburger Icon — Mobile Only */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <IoClose /> : <IoMenu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="md:hidden bg-[#0a0a0a] px-6 pt-2 pb-4" id="mobile_nav">
          <ul className="flex flex-col gap-3 font-medium">
            <li className="hover:text-gray-400 cursor-pointer font_family_inter font-medium leading-[22px] py-2">
              <Link href="/" onClick={() => setOpen(false)}>Home</Link>
            </li>
            <li className="hover:text-purple-400 cursor-pointer py-2">
              <Link href="/about_us" onClick={() => setOpen(false)}>About Us</Link>
            </li>
            <li className="hover:text-purple-400 cursor-pointer py-2">
              <Link href="/services" onClick={() => setOpen(false)}>Services</Link>
            </li>
            <li className="hover:text-purple-400 cursor-pointer py-2">
              <Link href="/career" onClick={() => setOpen(false)}>Career</Link>
            </li>

            <li className="hover:text-purple-400 cursor-pointer py-2">
              <Link href="/contact_us" onClick={() => setOpen(false)}>Contact Us</Link>
            </li>

            {/* 🔹 Newly Added Pages - Mobile */}
            {/* <li className="hover:text-purple-400 cursor-pointer py-2">
              <Link href="/terms" onClick={() => setOpen(false)}>Terms & Conditions</Link>
            </li>
            <li className="hover:text-purple-400 cursor-pointer py-2">
              <Link href="/privacy" onClick={() => setOpen(false)}>Privacy Policy</Link>
            </li> */}
          </ul>

          <div className="flex flex-col gap-2 pt-3">
            <Link
              href="/get-started"
              className="border border-purple-500 text-purple-400 px-4 py-2 text-center text-sm rounded-lg hover:bg-purple-500 hover:text-white transition"
              onClick={() => setOpen(false)}
            >
              Get Started
            </Link>
            <Link
              href="/contact_us"
              className="bg-purple-500 px-4 py-2 text-center text-sm rounded-lg hover:bg-purple-600 transition"
              onClick={() => setOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
