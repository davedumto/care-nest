"use client"; // Ensure the component is rendered on the client

import React from 'react';
import Image from 'next/image';
import Logo from "@/app/logo.svg";
import { FaWhatsapp, FaPhone, FaMobile } from 'react-icons/fa'; // Importing WhatsApp and Phone icons
import { FaPhoneFlip, FaSquarePhone } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className='bg-[#515b92] flex flex-col lg:flex-row justify-between gap-[2em] items-center lg:p-3 px-3 py-[2em]'>
      <div>
        <a href="/" className="w-[20%]">
          <Image src={Logo} alt="Logo" height={50} width={200} className="h-[6]" />
        </a>
      </div>
      <div className='text-white lg:pr-[3em]'>
       <h1 className='text-[18px]'> Copyright © 2024  </h1>
        
      </div>

      <div className='flex item-center gap-[2em] lg:pr-[3em]'>
        {/* Added WhatsApp and Phone icons and flexed them */}
        <a href="https://wa.me/your-whatsapp-number" target="_blank" rel="noopener noreferrer" className='p-3 border-[1px] border-white rounded-full'>
          <FaWhatsapp className='text-white text-3xl' />
        </a>
        <a href="tel:+2349162183621" className='p-3 border-[1px] border-white rounded-full'>
          <FaSquarePhone className='text-white text-3xl' />
        </a>
      </div>
    </div>
  );
};

export default Footer;
