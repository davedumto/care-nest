"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import ScrollReveal from "scrollreveal";
import Logo2 from "@/app/BabyCare.svg";

const About = () => {
  useEffect(() => {
    // Initialize ScrollReveal on the paragraph
    ScrollReveal().reveal(".reveal-paragraph", {
      duration: 1500,
      distance: "50px",
      origin: "bottom",
      reset: false, // Animation will happen only once
      opacity: 0, // Fade in effect
    });
  }, []);

  return (
    <section className="lg:px-[5em] px-[1em]" id="about">
      <div>
        <h1 className="text-[#b0d2f2] font-[400] text-[30px] lg:text-[50px]">
          About Us
        </h1>
      </div>
      <div className="flex-col flex lg:flex-row h-auto lg:px-[4em] lg:py-[2em] justify-between lg:gap-[2em] items-center bg-[#81689D] rounded-2xl mt-[2em] lg:mt-[3em]">
        <div className="lg:p-6 p-4">
          <Image src={Logo2} alt="logo image" className="h-[25em] w-[25em]" />
        </div>
        <div className="text-white lg:px-[2em] px-[1em] md:text-[20px] font-[300] lg:w-[60%]">
          <p className="reveal-paragraph text-center lg:text-left text-[25px] leading-[40px] pb-3">
            {" "}
            CareNest was founded by Mrs. Mary Ejere, an experienced and
            passionate baby caregiver. With a heart rooted in Christian values,
            Mrs. Ejere is dedicated to nurturing children with Godly love,
            ensuring they grow in a safe and loving environment. As Proverbs
            22:6 says, &quot;Train up a child in the way he should go, and when
            he is old, he will not depart from it.&quot; At CareNest, we strive
            to support every child&#39;s growth with love and care that reflects
            these values.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
