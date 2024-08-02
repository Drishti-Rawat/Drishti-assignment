"use client";
import Card from "@/components/Card";
import OutTeamCrousel from "@/components/OutTeamCrousel";
import { Bot, LayoutGrid, Smartphone } from "lucide-react";
import Image from "next/image";
import React from "react";
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
        "Aviraj Infotech excels in AI and ML solutions, revolutionizing education and business with intelligent automation.",
      icon: Smartphone,
    },
    {
      tittle: "AI for Education",
      description:
        "AI-powered tools enhance learning by personalizing educational experiences and fostering innovative problem-solving skills.",
      icon: Bot,
    },
    {
      tittle: "ML for Enterprises",
      description:
        "Machine learning solutions improve business operations through predictive analytics, automation, and data-driven decision-making.",
      icon: LayoutGrid,
    },
  ];

  const WhyUs = [
    {
      tittle: "Expertise in Technology",
      description:
        "AI transforms industries through machine learning, natural language processing, and automation.",
      icon: Smartphone,
    },
    {
      tittle: "Customized Solutions",
      description:
        "AI offers customized solutions through personalized recommendations, automation, predictive analytics.",
      icon: Smartphone,
    },
    {
      tittle: "Enhanced Learning",
      description:
        "AI enhances learning through personalized tutoring, adaptive learning, and data-driven insights.",
      icon: Smartphone,
    },
    {
      tittle: "Operational Efficiency",
      description:
        "AI boosts operational efficiency with automation, optimization, predictive analytics, real-time insights.",
      icon: Smartphone,
    },
  ];

  const teamMembers = [
    {
      name: "Mayank Joshi",
      role: "AI Head",
      description:
        "Lead innovative AI solutions, driving technological advancements and optimizing processes for better decision-making and efficiency.",
      profile: "/MayankJoshi.jpg",
    },
    {
      name: "Divyansh Upretii",
      role: "AI Executive",
      description:
        "Develop and implement advanced AI systems that enhance productivity, streamline operations, and provide valuable data-driven insights.  ",
      profile: "/divyansh.jpg",
    },
    {
      name: "Priyanka Kumari",
      role: "AI Executive",
      description:
        "Develop and implement AI systems that enhance productivity, streamline operations, and provide data-driven insights.",
      profile: "/priyanka.jpg",
    },
  ];
  return (
    <section className="min-h-screen overflow-hidden">
      {/* hero section */}
      <div className="md:h-screen h-[90vh] relative custom_gradient flex justify-center items-center overflow-hidden ">
        {/* <div className='w-full h-full overflow-hidden'>
                <Image src="/heroai.jpg" width={1000} height={1000} className='object-cover w-full object-right-bottom bg-black '/>
            </div> */}

        <div
          ref={heroref}
          className=" z-20 text-center px-4 sm:px-10  max-w-3xl text-white leading-8  space-y-6"
        >
          <h2 className=" sm:text-4xl text-2xl md:text-5xl lg:text-6xl  font-extrabold">
            {" "}
            Artificial Intelligence and{" "}
            <span className="text-amber-400">Machine Learning</span>{" "}
          </h2>
          <p className="text-sm sm:text-base">
            {" "}
            Harness the power of artificial intelligence and machine learning to
            drive innovation, automate processes, and unlock new insights.
          </p>
        </div>

        <div ref={heroimgref} className="absolute top-6 md:top-4 ">
          <Image
          alt="image"
            src="/aibg.png"
            width={600}
            height={600}
            className="opacity-45 "
          />
        </div>
      </div>

      {/* features section */}

      <div
        ref={featuresRef}
        className="py-24 flex flex-col justify-center items-center space-y-10 border-b border-b-gray-200  px-10"
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

      {/* why choose us */}

      <div
        ref={whyUsRef}
        className="flex flex-col py-24 border-b border-b-slate-300  space-y-16 px-10"
      >
        <h2 className="text-4xl self-center text-center font-bold tracking-wider underline underline-offset-8 decoration-amber-500">
          Why choose Us
        </h2>

        <div className="flex  lg:flex-row flex-col justify-center items-center    ">
          <div ref={imageref}>
            <Image alt="image" src="/inovative_team.png" width={500} height={500} />
          </div>

          <div
            ref={cardref}
            className="grid grid-cols-1 lg:grid-cols-2  gap-10 justify-center items-center"
          >
            {WhyUs && WhyUs.map((item,index) => <Card key={index} feature={item} />)}
          </div>
        </div>
      </div>

      {/* cyner team */}

      <div
        ref={teamRef}
        className="flex px-10 flex-col py-20 justify-center items-center space-y-14 relative"
      >
        <h2 className="text-4xl z-20  self-center text-center font-bold tracking-wider underline underline-offset-8 decoration-amber-500">
          Cyber analysis Team
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
