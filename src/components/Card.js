import { Smartphone } from "lucide-react";
import React from "react";

const Card = ({ feature,key }) => {
  return (
    <div
      key={key}
      className="text-black bg-slate-100 hover:bg-gray-200  rounded-3xl shadow-xl   shadow-gray-300  lg:h-[17rem]  max-w-md  justify-center items-center px-5 py-6 flex flex-col space-y-5"
    >
      {/* <h2>{feature.title}</h2> */}
      <div>
        <feature.icon className="animate-pulse text-amber-400 h-8 w-8" />
      </div>
      <h2 className=" text-center text-xl md:text-2xl font-bold ">
        {feature.tittle}
      </h2>
      <p className="text-center text-sm md:text-base">{feature.description}</p>
    </div>
  );
};

export default Card;
