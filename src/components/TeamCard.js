'use client'
import Image from 'next/image'
import React from 'react'

const TeamCard = ({member}) => {
  return (
    <div className='text-black bg-gray-100 hover:bg-gray-200  rounded-3xl shadow-md h-96  shadow-gray-300 max-w-sm sm:max-w-lg md:max-w-3xl  justify-center items-center px-5 py-8 flex flex-col ' >
      
      <div className=''>
        <Image alt="image" src={member.profile} width={200} height={200} className=' object-cover rounded-full w-32 h-32 md:w-48 md:h-48 '/>
      </div>
      {/* <h2>{feature.title}</h2> */}
      <div className="text-center space-y-2">

     
      <h2 className='text-lg md:text-2xl font-bold '>{member.name}</h2>
      <h2 className='md:text-lg text-base text-gray-800 font-semibold  '>{member.role}</h2>
      <p className='text-center text-[12px] md:text-base'>{member.description}</p>
      </div>

    </div>
  )
}

export default TeamCard