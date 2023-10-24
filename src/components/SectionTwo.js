import React from 'react'
import last from "../images/last.jpg"; 
import Image from 'next/image';

const SectionTwo = () => {
  return (
    <div className='py-3 px-3 flex flex-col sm:flex-row '>
     <div className='py-5 px-1 sm:mr-[-1rem] md:mr-[-1rem]'>
      <Image
              src={last}
              alt="img"
              width={500}
              height={500}
              className=""
            />
      </div>

      <div className='md:py-6 sm:px-5 xx:px-4 flex flex-col justify-center xx:w-full sm:w-[55%] bg-[#fafafa] rounded-md text-white shadow-md sm:ml-[-0px] md:mt-[32px] sm:mt-[26px] mb-[-10px] sm:mb-[-5px]'>
        <h1 className='sm:text-3xl xx:text-xl flex justify-start text-[#1e1e1e] font-bold py-3'>
        Last year was mind blowing
        </h1>

        <p className='text-md text-[#1e1e1e] py-5 xx:px-1 leading-6'>
        We had an incredible conference moment with more than 200+ attendees. The conference featured Panel sessions,
         networking, Breakout sessions and a lot of fun.
        </p>

        <div className='px-1 flex pb-6'>
        <button className='flex justify-between flex-row  py-2 px-2 rounded-lg shadow-sm shadow-black bg-[#ffd100] text-[#1e1e1e] hover:bg-[#1e1e1e] hover:border-2 hover:border-[#ffd100] hover:text-[#ffd100] '>
        
        <a href='https://photos.google.com/share/AF1QipMbwsqlm7t6-LsuL8qvVJaUwMxImkulVG1Fq4SvUT_QuUVZfubHUfyMPnzDtjrHkQ?key=RlZ4NnozUVdSY1NCRWNpSGV6MXJlWVNheWN0S0pB' target={'_blank'}>
        <h1 className='px-1 font-bold '>
        2023
        </h1> 
        </a>

      {/* <MdAddCircle className='w-5 h-5 mt-0.5 text-white'/> */}

    </button>
      </div>
      </div>
    </div>
  )
}

export default SectionTwo