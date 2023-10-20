import React from 'react'
import last from "../images/last.jpg"; 
import Image from 'next/image';

const SectionTwo = () => {
  return (
    <div className='py-3 px-3 flex flex-col sm:flex-row '>
     <div className='py-5 px-7 sm:mr-[-2rem] md:mr-[-2rem]'>
      <Image
              src={last}
              alt="img"
              width={500}
              height={500}
              className=""
            />
      </div>

      <div className='md:py-6 sm:px-5 sm xx:px-4 flex flex-col justify-center xx:w-full sm:w-[45%] bg-[#fafafa] rounded-md text-white shadow-md sm:ml-[-20px] md:mt-[32px] sm:mt-[26px] mb-[-10px] sm:mb-[-5px]'>
        <h1 className='sm:text-3xl xx:text-xl flex justify-start text-[#1e1e1e] font-bold py-3'>
        Last year was mind blowing
        </h1>

        <p className='text-md text-[#1e1e1e] py-5 xx:px-1 leading-6'>
        We had an incredible conference moment with more than 200+ attendees. The conference featured Panel sessions,
         networking, Breakout sessions and a lot of fun.
        </p>

        <div className='px-1 flex pb-6'>
        <button className='flex flex-row  py-1.5 px-6 rounded-md shadow-md bg-[#ffd100] text-[#130d2d66] '>
        <h1 className='px-1 font-extrabold'>
          2023
          </h1> 

      </button>
      </div>
      </div>
    </div>
  )
}

export default SectionTwo