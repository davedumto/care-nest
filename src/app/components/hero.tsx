"use client";
import React from "react";
import Image from "next/image";
import Baby from "@/app/baby.gif";

const hero = () => {
  return (
    <div className="lg:px-[5em] lg:py-[4em]  px-[1em]  bg-[#FFD0EC] ">
      <div className="flex-col flex lg:flex-row justify-center items-center gap-[3em] lg:gap-0 ">
        <div className="px-[1em] ">
          <h1 className=" text-[#518ac0] font-[800] mt-[1em] lg:mt-0 text-[50px] lg:text-left text-center  ">
            A place where Every Child is Nurtured, <span className="text-[#cb5858]">Loved</span>, and Grows with Care.
          </h1>
          <div className="lg:flex  mt-[4em] justify-center lg:justify-start hidden ">
        <button className="bg-[#518ac0]  py-[1em] rounded-full  px-[2em] text-[25px] font-[500] text-white">Book us now</button>
      </div>
        </div>
        <div className="">
            <Image src={Baby} alt="baby video" className="h-[25em] rounded-2xl"/>
        </div>
        <div className="flex   justify-center lg:justify-start lg:hidden pb-[3em] ">
        <button className="bg-[#518ac0]  py-[1em] rounded-full  px-[2em] text-[25px] font-[500] text-white">Book us now</button>
      </div>
      </div>
      
    </div>
  );
};

export default hero;
