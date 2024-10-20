"use client"; // Ensures this component runs on the client-side
import React, { useEffect } from "react";
import Image from "next/image";
import ScrollReveal from "scrollreveal";
import Baby from "@/app/baby.gif";
import Bottom from "@/app/herobtm.svg";

const Hero = () => {
  useEffect(() => {
    // Ensure ScrollReveal is only executed in the browser
    if (typeof window !== "undefined") {
      ScrollReveal().reveal(".reveal-text", {
        duration: 1600, // Animation duration in milliseconds
        distance: "50px", // Distance the element will move during the reveal
        origin: "bottom", // Reveal the text starting from the bottom
        reset: false, // Ensures the animation only happens once
        opacity: 0, // Start with zero opacity and fade in
      });
    }
  }, []);

  return (
    <section id="home">
      <div className="lg:px-[10em] lg:pt-[10em] px-[2em] bg-[#FFD0EC]">
        <div className="flex-col flex lg:flex-row justify-center items-center gap-[3em] lg:gap-0">
          <div className="">
            <h1
              className="reveal-text text-[#518ac0] font-[800] mt-[1em] lg:mt-0 text-[35px] lg:text-[50px] lg:text-left text-center"
            >
              A place where Every Child is Nurtured, <span className="text-[#cb5858]">Loved</span>, and Grows with Care.
            </h1>
            <div className="lg:flex mt-[4em] justify-center lg:justify-start hidden">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSd_tpx_Bpwmwhq6cZl6lyfO3TjpRQHgNq_8FvMJua98obwdNQ/viewform?usp=sf_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-[#518ac0] py-[1em] rounded-full px-[2em] text-[25px] font-[500] text-white">
                  Book us now
                </button>
              </a>
            </div>
          </div>
          <div className="">
            <Image src={Baby} alt="baby video" className="h-[25em] rounded-2xl" />
          </div>
          <div className="flex justify-center lg:justify-start lg:hidden pb-[3em]">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSd_tpx_Bpwmwhq6cZl6lyfO3TjpRQHgNq_8FvMJua98obwdNQ/viewform?usp=sf_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-[#518ac0] py-[1em] rounded-full px-[2em] text-[25px] font-[500] text-white">
                Book us now
              </button>
            </a>
          </div>
        </div>
      </div>
      <div>
        <Image src={Bottom} alt="bottom img" className="w-[100%]" draggable="false" />
      </div>
    </section>
  );
};

export default Hero;
