"use client"
import Card from "@/components/Card";
import OutTeamCrousel from "@/components/OutTeamCrousel";
import { Bot, LayoutGrid, Smartphone } from "lucide-react";
import Image from "next/image";
import React from "react";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const page = () => {
    const featuresRef = useRef([]);
    const whyUsRef = useRef([]);
    const teamRef = useRef(null);
    const imageref = useRef(null)
    const cardref= useRef(null)
    const heroref = useRef(null)
    const heroimgref = useRef(null)
    
  
    useEffect(() => {
      gsap.fromTo(
        featuresRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: featuresRef.current,
            start: "top 80%",
          },
        }
      );
      gsap.fromTo(
        heroref.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: heroref.current,
            start: "top 80%",
          },
        }
      );
      gsap.fromTo(
        heroimgref.current,
        { opacity: 0 },
        {
          opacity: 1,
         delay:0.5,
         
          duration: 2,
          stagger: 0.2,
          scrollTrigger: {
            trigger: heroimgref.current,
            
          },
        }
      );
      gsap.fromTo(
        cardref.current,
        { opacity: 0, x: 60 },
        {
          opacity: 1,
          x: 0,
          delay:1,
          
          duration: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: cardref.current,
            start: "top 80%",
          },
         
        }
      );
  
      gsap.fromTo(
        imageref.current,{
          opacity:0, x:-90
        },
        {
          opacity:1,
          x:0,
          duration:3,
          stagger: 0.2,
          scrollTrigger: {
            trigger: featuresRef.current,
            start: "left -30%",
          },
        }
      )
  
      gsap.fromTo(
        whyUsRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: whyUsRef.current,
            start: "top 80%",
          },
        }
      );
  
      gsap.fromTo(
        teamRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay:0.5,
          scrollTrigger: {
            trigger: teamRef.current,
            start: "top 80%",
          },
        }
      );
    }, []);


    const features = [
        {
          tittle: "About Us",
          description:
            "Aviraj Infotech's cyber analysis solutions secure institutions and enterprises, protecting data and ensuring operational resilience.",
          icon: Smartphone,
        },
        {
          tittle: "Robotics",
          description:
            "Aviraj Infotech's cyber analysis detects threats, ensures data security, and maintains operational integrity for institutions.",
          icon: Bot,
        },
        {
          tittle: "Drones",
          description:
            "Aviraj Infotech's cybersecurity solutions identify vulnerabilities, protect data, and ensure secure, uninterrupted operations for institutions and businesses.",
          icon: LayoutGrid,
        },
      ];

      const WhyUs = [
        {
          tittle: "Threat Detection",
          description:
            "Identifying potential threats to prevent data breaches and cyber attacks.",
          icon: Smartphone,
        },
        {
          tittle: "Data Protection",
          description:
            "Ensuring data integrity with advanced encryption and security measures.",
          icon: Smartphone,
        },
        {
          tittle: "Operational Security",
          description:
            "Maintaining uninterrupted operations through robust cybersecurity protocols and monitoring.",
          icon: Smartphone,
        },
        {
          tittle: "Vulnerability Assessment",
          description:
            "Regularly assessing systems to identify and mitigate security weaknesses.",
          icon: Smartphone,
        },
      ];

      const teamMembers = [
        {
          "name" :"Garvit Pandey",
          "role":"Cyber analysis Head",
          "description":"Lead the charge in innovative cyber solutions, securing  data, and ensuring robust tection against digital threats",
          "profile":"/person_1.jpg"
        },
        {
          "name" :"Mayank Dewali",
          "role":"Cyber analysis Executive",
          "description":"Implement cutting edge security  measures, protatcting data integrity and preventing cyber threats effectively  ",
          "profile":"/person_2.jpg"
        },
        {
          "name" :"Harshwandhan Joshi",
          "role":"Team Executive",
          "description":"Continously measures and assess the systems, identifying vulnerabilities and enhancing overall cubersecurity strength.",
          "profile":"/ajay.jpg"
        },
        
      ]

  return (
    <section className="min-h-screen relative  overflow-hidden ">
      <div className="z-20 h-screen custom_gradient flex  justify-center items-center px-5 py-5 sm:py-14">
        <div ref={heroref} className=" text-white text-center leading-10 z-20 max-w-xl ">
          <h2 className="  sm:text-5xl text-amber-400  text-3xl lg:text-6xl  font-extrabold tracking-normal sm:tracking-widest  ">
            Cyber Analysis
          </h2>
          <p className="mt-3 text-sm sm:text-base ">
            Protect your digital assets with state-of-the-art analysis and
            security protocols. Our expertise ensures your safety in the
            ever-evolving cyber landscape.
          </p>
        </div>

        <div ref={heroimgref} className="absolute  ">
          <Image
            src="/new-app-development-desktop.png"
            width={500}
            height={500}
            className="  opacity-30 "
          />
        </div>
        {/* <div className="absolute z-10 md:left-6 left-10  md:-top-4 lg:top-10 hidden md:block">
            <Image  src="/cyber.png" width={800} height={800} className="z-10 opacity-30 rotate-12 md:w-[500px] md:h-[500px]  xl:w-full xl:h-full "/>
        </div> */}
      </div>

      {/* features section */}

      <div ref={featuresRef} className="py-24 flex flex-col justify-center items-center space-y-10 border-b border-b-gray-200  px-10">
        <h2 className="text-4xl self-center text-center font-bold tracking-wider underline underline-offset-8 decoration-amber-500">
          Features
        </h2>

        <div ref={cardref} className=" flex justify-center items-center flex-col lg:flex-row gap-10 ">
          {features && features.map((feature) => <Card feature={feature} />)}
        </div>
      </div>

      {/* why choose us */}

      <div ref={whyUsRef} className="flex flex-col py-24 border-b border-b-slate-300  space-y-16 px-10">
        <h2 className="text-4xl self-center text-center font-bold tracking-wider underline underline-offset-8 decoration-amber-500">Why choose Us</h2>

        <div className="flex  lg:flex-row flex-col justify-center items-center    ">

            <div ref={imageref}>
                <Image src="/inovative_team.png" width={500} height={500}/>
            </div>

            <div ref={cardref} className="grid grid-cols-1 lg:grid-cols-2  gap-10 justify-center items-center">
                {
                    WhyUs && WhyUs.map(item=>(
                        <Card feature={item}/>
                    ))
                }

            </div>

        </div>

        </div>


        {/* cyner team */}
        
        <div ref={teamRef} className="flex flex-col py-20 justify-center items-center space-y-14 relative">
        <h2 className="text-4xl z-20 self-center text-center font-bold tracking-wider underline underline-offset-8 decoration-amber-500">Cyber analysis Team</h2>

        <div className="px-10 z-20">
            <OutTeamCrousel members={teamMembers}/>
        </div>

        
        
        <div className="px-10 py-10 bg-cyan-600 rounded-full absolute left-36 bottom-20 z-10"></div>
        <div className="px-10 md:block hidden py-10 bg-cyan-600 rounded-full absolute left-0 top-16 z-10"></div>
        <div className="p-4 md:block hidden bg-amber-400 rounded-full absolute left-14 top-17 z-10"></div>
        <div className="p-4 bg-amber-400 rounded-full absolute left-20  top-32 z-10"></div>
        
        <div className="px-10 py-10 bg-cyan-600 rounded-full absolute right-40 bottom-30 z-10"></div>
        <div className="md:block hidden px-10 py-10 bg-cyan-600 rounded-full absolute right-10 top-20 z-10"></div>
        <div className="p-4 bg-amber-400 rounded-full absolute right-16 top-5 z-10"></div>
        <div className="p-4 bg-amber-400 rounded-full absolute right-5  bottom-10 z-10"></div>

        

        </div>

    </section>
  );
};

export default page;
