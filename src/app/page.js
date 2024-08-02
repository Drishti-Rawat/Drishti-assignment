"use client"
import Card from "@/components/Card";
import Hero from "@/components/Hero";
import OutTeamCrousel from "@/components/OutTeamCrousel";
import TeamCard from "@/components/TeamCard";
import { LayoutGrid, Smartphone, BookAudioIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Home() {

  const featuresRef = useRef([]);
  const whyUsRef = useRef([]);
  const teamRef = useRef(null);
  const imageref = useRef(null)
  const cardref= useRef(null)

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
        "Aviraj Infotech specializes in app development, creating innovative solutions for both educational and business needs.",
      icon: Smartphone,
    },
    {
      tittle: "Educational Apps",
      description:
        "Custom apps enhance learning experiences, offering interactive and engaging tools for students and educators.",
      icon: BookAudioIcon,
    },
    {
      tittle: "Business Apps",
      description:
        "Tailored business apps streamline operations, improve customer engagement, and drive productivity and growth.",
      icon: LayoutGrid,
    },
  ];

  const WhyUs = [
    {
      tittle: "AI Integration",
      description:
        "App development incorporates AI for smarter functionality, predictive analytics, and improved user experience.",
      icon: Smartphone,
    },
    {
      tittle: "Customized Solutions",
      description:
        "App development delivers customized solutions through tailored features, user interfaces, and functionalities.",
      icon: Smartphone,
    },
    {
      tittle: "Enhanced Learning",
      description:
        "App development enhances learning with interactive features, personalized content, and real-time feedback.",
      icon: Smartphone,
    },
    {
      tittle: "Operational Efficiency",
      description:
        "App development increases operational efficiency via automation, streamlined processes, and integrated systems.",
      icon: Smartphone,
    },
  ];

  const teamMembers = [
    {
      "name" :"Ankit Mehta",
      "role":"Web Programming Head",
      "description":"Lead innovative app development projects, delivering user-friendly, high-performance applications tailored to specific client needs.",
      "profile":"/ankit.jpg"
    },
    {
      "name" :"Mayank Bisht",
      "role":"Team Executive",
      "description":"Optimize app performance, integrate advanced features, and meticulously maintain code quality for superior user satisfaction.",
      "profile":"/mayankbisht.jpg"
    },
    {
      "name" :"Mayank Dewali",
      "role":"Cyber Analysis Executive",
      "description":"Design and develop mobile and web applications, ensuring seamless and engaging user experiences and robust functionality.",
      "profile":"/mayankdewali.jpg"
    },
    
  ]
  

  return (
    <section className=" bg-slate-50 text-black min-h-screen overflow-hidden ">
      <Hero />

      {/* features section */}
      <div ref={featuresRef} className="flex  flex-col justify-center items-center py-16 text-black  border-b border-b-gray-200 px-10 space-y-14">
        <h2 className="text-4xl font-bold tracking-wider underline underline-offset-8 decoration-amber-400">
          Features
        </h2>

        <div ref={cardref} className=" flex justify-center items-center flex-col lg:flex-row gap-10 ">
          {features && features.map((feature) => <Card  feature={feature} />)}
        </div>
      </div>

      {/* why choose us section */}
      <div ref={whyUsRef} className="  py-20 flex flex-col border-b border-b-gray-200  items-center justify-center px-10 ">
        <h2 className="text-4xl self-center text-center font-bold tracking-wider underline underline-offset-8 decoration-amber-400">
          Why choose Us?
        </h2>

        <div className="flex lg:flex-row flex-col items-center justify-center   py-16  ">
          <div className="overflow-hidden " ref={imageref}>
            <Image
              src="/why2.png"
              width={600}
              height={600}
              className="object-contain w-full h-full"
            />
          </div>

          <div ref={cardref} className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center justify-center  ">
            {WhyUs && WhyUs.map((item) => <Card feature={item}></Card>)}
          </div>
        </div>
      </div>

      {/* out team */}

      <div ref={teamRef} className=" relative  flex flex-col justify-center items-center px-10 py-20 overflow-hidden space-y-20">
        <h2 className=" text-4xl z-20 self-center text-center font-bold tracking-wider underline underline-offset-8 decoration-amber-400">Our App Developers Team</h2>

       
  
        <div className="px-10 py-10 bg-cyan-600 rounded-full absolute left-36 bottom-20 z-10"></div>
        <div className="px-10 md:block hidden py-10 bg-cyan-600 rounded-full absolute left-0 top-16 z-10"></div>
        <div className="p-4 md:block hidden bg-amber-400 rounded-full absolute left-14 top-17 z-10"></div>
        <div className="p-4 bg-amber-400 rounded-full absolute left-20  top-32 z-10"></div>
        
        <div className="px-10 py-10 bg-cyan-600 rounded-full absolute right-40 bottom-30 z-10"></div>
        <div className="md:block hidden px-10 py-10 bg-cyan-600 rounded-full absolute right-10 top-20 z-10"></div>
        <div className="p-4 bg-amber-400 rounded-full absolute right-16 top-5 z-10"></div>
        <div className="p-4 bg-amber-400 rounded-full absolute right-5  bottom-10 z-10"></div>

        <div  className="px-10 z-20">
         <OutTeamCrousel members={teamMembers}/>
        </div>
      </div>
    </section>
  );
}
