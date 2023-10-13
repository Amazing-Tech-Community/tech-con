import React from 'react'

const SectionTwo = () => {
  return (
    <div className='py-3 px-3 flex flex-col sm:flex-row '>
      <div className='p-40 w-[55%] bg-[#130d2d66] flex justify-center text-white'>Video</div>
      <div className='py-6 px-16 flex flex-col justify-center w-[45%] bg-darkPurple rounded-md text-white shadow-md ml-[-20px] mt-[20px] mb-[-20px]'>
        <h1 className='text-4xl flex justify-center font-bold py-3'>
        Last year was mind blowing
        </h1>

        <p className='text-md py-5 leading-6'>
        We had an incredible conference moment with more than 200+ attendees. The conference featured Panel sessions,
         networking, Breakout sessions and a lot of fun.
        </p>

        <div className='px-1 flex pb-6'>
        <button className='flex flex-row  py-1.5 px-6 rounded-md shadow-md bg-orange text-white '>
        <h1 className='px-1 font-semibold'>
          2023
          </h1> 

      </button>
      </div>
      </div>
    </div>
  )
}

export default SectionTwo