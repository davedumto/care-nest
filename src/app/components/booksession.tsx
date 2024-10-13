import React from "react";
import Image from 'next/image'
import Top from '@/app/booktop.svg'

const bookSession = () => {
  return (
    <>
    <div className="lg:px-[3em] px-[1em] mt-[4em]">
      <div>
        <h1 className="text-[#b0d2f2] font-[400] text-[50px]">Contact Us</h1>
      </div>

    </div>
    <div className=" w-full">
      <Image src={Top} alt="top" className="w-full"/>
      </div>
      <div>
        
      </div>
    </>
  );
};

export default bookSession;
