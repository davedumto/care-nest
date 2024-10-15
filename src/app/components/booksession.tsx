import React from "react";
import Image from "next/image";
import Top from "@/app/booktop.svg";
import Woman from "@/app/baby1.jpg";
import Whatsapp from "@/app/Whatsapp.png";
import Phone from "@/app/Phone.png"

const Contact = () => {
  return (
    <section id="contact">
      <div className="lg:px-[3em] px-[1em] mt-[4em]">
        <div>
          <h1 className="text-[#b0d2f2] font-[400] text-[50px]">Contact Us</h1>
        </div>
      </div>
      <Image src={Top} alt="Top Image" className="w-full" />

      {/* Corrected section ID */}
      <div className="lg:px-[10em] px-[1em] py-[3em]  bg-[#FFD0EC] -mt-1 ">
        <div className="flex-col flex lg:flex-row justify-between items-center">
          <div className="flex flex-col text-left gap-[2em] lg:w-[50%] py-[2em] px-[2em]">
            <h1 className="text-[#518ac0] text-center text-[30px] lg:text-[40px] font-[800] ">
              You can reach us on:
            </h1>
            <div className="flex gap-[1em] lg:gap-[2.5em] mx-auto items-center">
              <div className="w-[2em] lg:w-[4em]">
                <Image src={Whatsapp} alt="" className=" " />
              </div>
              <div><h1 className="lg:text-[30px] text-[20px] font-[500] text-[#518ac0]">+2347030611794</h1></div>
            </div>
            <div className="flex gap-[1em] lg:gap-[2.5em] mx-auto items-center">
              <div className="w-[2em] lg:w-[4em]">
                <Image src={Phone} alt="" className=" " />
              </div>
              <div><h1 className="lg:text-[30px] text-[20px] font-[500] text-[#518ac0]">+2347030611794</h1></div>
            </div>
          </div>
          <div className="">
            <Image
              src={Woman}
              alt="woman image"
              className="h-[25em] w-[25em] rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
