import React from "react";
import Image from "next/image";
import Top from "@/app/booktop.svg";
import Woman from "@/app/baby1.jpg";

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
      <div  className="px-[5em] py-[2em]  bg-[#FFD0EC] -mt-1">
        <div className="flex">
          <div>
            <Image
              src={Woman}
              alt="woman image"
              className="h-[25em] w-[25em] rounded-2xl"
            />
          </div>
          <div className="flex flex-col"></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
