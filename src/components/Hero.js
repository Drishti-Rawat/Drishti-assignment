'use client'
import Image from "next/image";
import React from "react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// bg-gradient-to-br  from-cyan-950 via-cyan-700 to-blue-950
const Hero = () => {
    const heroref = useRef()
    const shapesref = useRef()
  useEffect(() => {
    gsap.fromTo(
      heroref.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        delay:0.5,
        scrollTrigger: {
          trigger: heroref.current,
          start: "top 80%",
        },
      }
    );
    gsap.fromTo(
      shapesref.current,
      { opacity: 0, x: 70 },
      {
        opacity: 1,
        x: 0,
        // delay:1,
        duration: 3,
        stagger: 0.4,
        

        scrollTrigger: {
          trigger: shapesref.current,
          start: "left 60%",
        },
      }
    );
  }, []);
  return (
    <section className="relative  bg-cyan-800 h-[80vh]  md:h-screen w-full  flex  justify-center items-center  overflow-hidden   ">
      <div ref={heroref} className="z-20  flex justify-center items-center  flex-col space-y-6 px-7 overflow-hidden ">
        <h2 className=" text-2xl   sm:text-5xl md:text-7xl  text-amber-400 font-extrabold tracking-wider ">
          App Development
        </h2>
        <p className="text-slate-100 text-[12px] sm:text-[16px] text-center">
          Crafting Tailored Digital Experiences for Your Business Growth
        </p>
      </div>

      {/* <div className=' hidden md:block absolute z-10 -top-14 -right-32'>
            <Image src='/appdev-hero2.png' height={1000} width={1500} className='object-contain md:w-[600px] md:h-[600px] lg:w-[850px] lg:h-[850px]'/>
        </div> */}

      <div ref={shapesref} className="md:p-80 p-60 z-10 bg-cyan-700 absolute rounded-full -top-40 -left-40 shadow-xl shadow-cyan-600">
        <div className="absolute z-20 top-0 left-0 p-[350px] md:p-[440px] rounded-full bg-cyan-500/10 shadow-xl shadow-cyan-600"></div>
      </div>
    </section>
  );
};

export default Hero;
