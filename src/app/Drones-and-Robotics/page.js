"use client";
import Image from "next/image";
import React from "react";
import { Smartphone, Bot, LayoutGrid } from "lucide-react";
import Card from "@/components/Card";
import OutTeamCrousel from "@/components/OutTeamCrousel";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Page = () => {
  const featuresRef = useRef([]);
  const whyUsRef = useRef([]);
  const teamRef = useRef(null);
  const imageref = useRef(null);
  const cardref = useRef(null);
  const heroref = useRef(null);
  const heroimgref = useRef(null);

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
        delay: 0.5,

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
        delay: 1,

        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: cardref.current,
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      imageref.current,
      {
        opacity: 0,
        x: -90,
      },
      {
        opacity: 1,
        x: 0,
        duration: 3,
        stagger: 0.2,
        scrollTrigger: {
          trigger: featuresRef.current,
          start: "left -30%",
        },
      }
    );

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
        delay: 0.5,
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
        "Aviraj Infotech pioneers robotic and drone solutions, empowering schools, colleges, and enterprises with innovative efficiency enhancements.",
      icon: Smartphone,
    },
    {
      tittle: "Robotics",
      description:
        "Aviraj Infotech's educational robotic kits foster STEM skills, creativity, and critical thinking in students. Custom solutions for enterprises automate tasks, boost precision, and enhance productivity.",
      icon: Bot,
    },
    {
      tittle: "Drones",
      description:
        "Aviraj Infotech’s drones enhance education with STEM projects and improve business efficiency with aerial surveillance and delivery.",
      icon: LayoutGrid,
    },
  ];
  const WhyUs = [
    {
      tittle: "Expertise in Technology",
      description:
        "Our cutting-edge solutions leverage the latest advancements in robotics and drone technology.",
      icon: Smartphone,
    },
    {
      tittle: "Customized Solutions",
      description:
        "We provide tailored robotic and drone systems to meet specific educational and business needs.",
      icon: Smartphone,
    },
    {
      tittle: "Enhanced Learning",
      description:
        "Our educational kits foster creativity and critical thinking, preparing students for future careers.",
      icon: Smartphone,
    },
    {
      tittle: "Operational Efficiency",
      description:
        "Our enterprise solutions automate tasks, improve precision, and boost productivity, keeping businesses competitive.",
      icon: Smartphone,
    },
  ];

  const teamMembers = [
    {
      name: "Yash Rastogi",
      role: "Robotics Head",
      description:
        "Lead the charge in innovative robotics solutions, shaping the future of technology integration..",
      profile: "/person_1.jpg",
    },
    {
      name: "Manas Sety",
      role: "Robotics Executive",
      description:
        "Driving educational robotics kits, fostering STEM learning through hands-on experiences.",
      profile: "/person_2.jpg",
    },
    {
      name: "Ajay Basera",
      role: "Team Executive",
      description:
        "Customizing enterprise robotics solutions, optimizing efficiency and productivity with advanced automation.",
      profile: "/ajay.jpg",
    },
  ];

  return (
    <section className="min-h-screen overflow-hidden px-6 py-10  bg-gray-200 ">
      {/* hero section */}
      <div className="h-[80vh]  px-5 py-14 flex lg:flex-row flex-col space-x-5 justify-center items-center bg-cyan-700 rounded-3xl mt-10 ">
        <div ref={heroref} className="  text-white text-center leading-10">
          <h2 className="sm:text-5xl  text-2xl lg:text-6xl  font-extrabold tracking-wider  ">
            Drones & Robotics
          </h2>
          <p className="mt-3 text-sm sm:text-base">
            Explore the future of technology with cutting-edge solutions that
            redefine possibilities.
          </p>
        </div>

        <div ref={heroimgref}>
          <Image alt="image" src="/robotic-illustration.png" width={350} height={350} />
        </div>
      </div>

      {/* features */}
      <div
        ref={featuresRef}
        className="flex flex-col justify-center items-center  border-b border-b-slate-300  py-20 space-y-10  "
      >
        <h2 className="text-4xl self-center text-center font-bold tracking-wider underline underline-offset-8 decoration-amber-500">
          Features
        </h2>

        <div
          ref={cardref}
          className=" flex justify-center items-center flex-col lg:flex-row gap-10 "
        >
          {features && features.map((feature,index) => <Card key={index} feature={feature} />)}
        </div>
      </div>

      {/* Why choose us section */}

      <div
        ref={whyUsRef}
        className="flex flex-col py-24 border-b border-b-slate-300  space-y-16"
      >
        <h2 className="text-4xl self-center text-center font-bold tracking-wider underline underline-offset-8 decoration-amber-500">
          Why choose Us
        </h2>

        <div className="flex  lg:flex-row flex-col justify-center items-center   ">
          <div ref={imageref}>
            <Image alt="image" src="/whyRobotics.png" width={500} height={500} />
          </div>

          <div
            ref={cardref}
            className="grid grid-cols-1 lg:grid-cols-2  gap-6 justify-center items-center"
          >
            {WhyUs && WhyUs.map((item,index) => <Card key={index} feature={item} />)}
          </div>
        </div>
      </div>

      {/* our robtic and drone team */}

      <div
        ref={teamRef}
        className="flex  flex-col py-20 justify-center items-center space-y-14 relative"
      >
        <h2 className="text-4xl z-20 self-center text-center font-bold tracking-wider underline underline-offset-8 decoration-amber-500">
          Robotics & Drones Team
        </h2>

        <div className="px-10 z-20">
          <OutTeamCrousel members={teamMembers} />
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

export default Page;
