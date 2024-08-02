import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  import Autoplay from 'embla-carousel-autoplay'

import React from 'react'
import TeamCard from "./TeamCard"

const OutTeamCrousel = ({members}) => {
    
  return (
    <Carousel   plugins={[Autoplay({delay:1500})]} className = '' >
    <CarouselContent className=" py-4 px-10  w-full max-w-[300px] sm:max-w-md md:max-w-3xl">
        {
            members && members.map(member=>(
                <CarouselItem>
                    <TeamCard member={member}/>
                </CarouselItem>
            ))
        }
     
     
    </CarouselContent>
    
  </Carousel>
  )
}

export default OutTeamCrousel

