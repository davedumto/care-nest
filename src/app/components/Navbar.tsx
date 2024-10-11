"use client"; // Ensure the component is rendered on the client

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Logo from "@/app/logo.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // For hamburger and close icons

const navLinks = [
  { name: "Home", link: "/" },
  { name: "Contact us", link: "/contact" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex justify-between items-center px-[2em] sticky top-0 z-50 bg-white ">
      {/* Logo Section */}
      <div>
        <a href="/" className="w-[20%]">
          <Image src={Logo} alt="Logo" height={100} width={200} className="" />
        </a>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden lg:flex text-black gap-[3em] px-[3em] font-bold text-[20px] font-sugar relative">
        {/* Loop through the links */}
        {navLinks.map((link, index) => (
          <Link
            key={index}
            href={link.link}
            className={`relative group z-10 ${
              pathname === link.link ? "text-[#518ac0]" : "text-[#518ac0]"
            } hover:text-[#518ac0]`}
          >
            <h1>{link.name}</h1>
            {/* Simple underline effect on hover */}
            <span
              className={`block h-[2px] bg-[#518ac0] transition-width duration-300 ${
                pathname === link.link ? "w-full" : "w-0"
              } group-hover:w-full`}
            ></span>
          </Link>
        ))}
      </div>

      {/* Book Us Button with Spring Animation for Desktop */}
      <motion.div
        className="hidden lg:flex px-[1em] cursor-pointer border-[1px] border-[#518ac0] bg-[#518ac0] py-[1em] rounded-full z-10"
        whileHover={{ scale: 1.1, color: "gray-600" }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Link href="/">
          <h1 className="text-white px-[3em] font-bold text-[20px]">
            Book us
          </h1>
        </Link>
      </motion.div>

      {/* Hamburger Icon for Mobile with Animation */}
      <div className="lg:hidden z-10" onClick={toggleMobileMenu}>
        <button className="focus:outline-none">
          {isMobileMenuOpen ? (
            <AiOutlineClose className="w-10 h-10 text-[#b0d2f2]" />
          ) : (
            <AiOutlineMenu className="w-10 h-10 text-[#518ac0]" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-[70px] left-1/2 transform -translate-x-1/2 border-[1.5px] border-[#518ac0] bg-white md:mt-[5em] mt-[3em] w-[80%] md:w-[60%] h-auto flex flex-col items-center justify-center shadow-lg xl:hidden rounded-t-md rounded-b-3xl z-50 overflow-hidden">
          <ul className="w-full flex flex-col items-center justify-center gap-[1.5em] py-6">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.link}>
                  <h1 className="text-[#518ac0] font-bold text-[20px]">
                    {link.name}
                  </h1>
                </Link>
              </li>
            ))}

            {/* Book Us Button inside mobile menu */}
            <div className="px-[1em] cursor-pointer border-[1px] border-[#518ac0] py-[1em] bg-[#518ac0] rounded-full mt-4">
              <Link href="/">
                <h1 className="text-[#cde3f8] px-[3em]  font-bold text-[20px]">
                  Book us
                </h1>
              </Link>
            </div>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
