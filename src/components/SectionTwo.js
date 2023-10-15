import React from 'react'

const SectionTwo = () => {
  return (
    <div className='py-3 px-3 flex flex-col sm:flex-row '>
      <div className='p-40 w-[55%] bg-[#130d2d66] flex justify-center text-white'>Video</div>
      <div className='py-6 px-16 flex flex-col justify-center w-[45%] bg-[#fafafa] rounded-md text-white shadow-md ml-[-20px] mt-[20px] mb-[-20px]'>
        <h1 className='text-4xl flex justify-center text-[#1e1e1e] font-bold py-3'>
        Last year was mind blowing
        </h1>

        <p className='text-md text-[#1e1e1e] py-5 leading-6'>
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