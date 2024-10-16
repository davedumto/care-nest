"use client"; // Ensure the component is rendered on the client

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Logo from "@/app/logo.svg";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // For hamburger and close icons

const navLinks = [
  { name: "Home", link: "#home" },
  { name: "About us", link: "#about" },
  { name: "Contact us", link: "#contact" } // Already points to the contact section
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu
  const [activeSection, setActiveSection] = useState("home"); // Track the active section
  const mobileMenuRef = useRef<HTMLDivElement>(null); // Ref for the mobile menu div
  const navbarRef = useRef<HTMLDivElement>(null); // Ref for the sticky navbar

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Smooth scroll to the section with the given ID, considering the navbar height
  const scrollToSection = (sectionId: string) => {
    if (typeof window !== "undefined") { // Check to ensure window is available
      const section = document.getElementById(sectionId);
      const navbarHeight = navbarRef.current ? navbarRef.current.offsetHeight : 0; // Get the navbar height

      if (section) {
        window.scrollTo({
          top: section.offsetTop - navbarHeight, // Offset the scroll position by the navbar height
          behavior: "smooth", // This triggers smooth scrolling
        });
        setActiveSection(sectionId); // Set the active section when the user clicks
      }
    }
  };

  // Function to handle the active section based on scroll position
  useEffect(() => {
    const handleActiveSection = () => {
      if (typeof window !== "undefined") { // Ensure window is available
        const sections = ["home", "about", "contact"];
        const navbarHeight = navbarRef.current ? navbarRef.current.offsetHeight : 0;
        sections.forEach((sectionId) => {
          const section = document.getElementById(sectionId);
          if (section) {
            const sectionTop = section.offsetTop - navbarHeight;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
              setActiveSection(sectionId);
            }
          }
        });
      }
    };

    window.addEventListener("scroll", handleActiveSection);

    return () => {
      window.removeEventListener("scroll", handleActiveSection);
    };
  }, []);

  return (
    <div
      ref={navbarRef} // Attach the ref to the navbar div
      className="flex justify-between items-center px-[2em] sticky top-0 z-50 bg-[#F6F5F5] shadow-md"
    >
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
          <a
            key={index}
            href={link.link}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(link.link.slice(1)); // Remove '#' and scroll to the section
            }}
            className={`relative group z-10 ${
              activeSection === link.link.slice(1) ? "text-[#518ac0]" : "text-[#518ac0]"
            } hover:text-[#518ac0]`}
          >
            <h1>{link.name}</h1>
            {/* Hover animation + Active link underline */}
            <span
              className={`block h-[2px] bg-[#518ac0] transition-width duration-300 ${
                activeSection === link.link.slice(1) ? "w-full" : "w-0"
              } group-hover:w-full`}
            ></span>
          </a>
        ))}
      </div>

      {/* Book Us Button with Spring Animation for Desktop */}
      <motion.div
        className="hidden lg:flex px-[1em] cursor-pointer border-[1px] border-[#518ac0] bg-[#518ac0] py-[1em] rounded-full z-10"
        whileHover={{ scale: 1.1, color: "gray-600" }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSd_tpx_Bpwmwhq6cZl6lyfO3TjpRQHgNq_8FvMJua98obwdNQ/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer">
          <h1 className="text-white px-[3em] font-bold text-[20px]">Book us</h1>
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
        <div
          ref={mobileMenuRef} // Attach the ref to the mobile menu div
          className="absolute top-[70px] left-1/2 transform -translate-x-1/2 border-[1.5px] border-[#518ac0] bg-white md:mt-[5em] mt-[3em] w-[80%] md:w-[60%] h-auto flex flex-col items-center justify-center shadow-lg xl:hidden rounded-t-md rounded-b-3xl z-50 overflow-hidden"
        >
          <ul className="w-full flex flex-col items-center justify-center gap-[1.5em] py-6">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.link}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.link.slice(1));
                  }}
                  className={`text-[#518ac0] font-bold text-[20px] ${
                    activeSection === link.link.slice(1) ? "border-b-2 border-[#518ac0]" : ""
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}

            {/* Book Us Button inside mobile menu */}
            <div className="px-[1em] cursor-pointer border-[1px] border-[#518ac0] py-[1em] bg-[#518ac0] rounded-full mt-4">
              <Link href="https://docs.google.com/forms/d/e/1FAIpQLSd_tpx_Bpwmwhq6cZl6lyfO3TjpRQHgNq_8FvMJua98obwdNQ/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer">
                <h1 className="text-[#cde3f8] px-[3em] font-bold text-[20px]">Book us</h1>
              </Link>
            </div>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
