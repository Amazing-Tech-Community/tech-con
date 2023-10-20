import React from 'react'
import { VscCalendar } from 'react-icons/vsc';
import { MdOutlineLocationOn } from 'react-icons/md';

function About() {
  return (
    <div className='flex flex-col py-10 text-[#fafafa]'>
      <p className='text-xl py-8 font-bold flex justify-center px-10 text-center leading-8'>
          Tech Starters Conference is designed to help individuals navigate the overwhelming world of technology and provide a clear direction for students, enthusiasts, career changers, tech beginners and anyone
          Interested in the industry.

        </p>

      <div className='flex flex-col mx-auto'>
      <div className='flex flex-row justify-center py-2 w-[270px]'>
          <VscCalendar className='w-6 h-6 text-[#ffd100]' />

          <h1 className='px-2 font-semibold'>When:</h1>
          <h1 className='font-bold text-[#ffd100]'>
            Sat 3rd February 2024

          </h1>
        </div>

        <div className='flex flex-row justify-center py-2 w-[270px]'>
          <MdOutlineLocationOn className='w-6 h-6 text-[#ffd100]' />

          <h1 className='px-2 font-semibold'>Where:</h1>
          <h1 className='font-bold text-[#ffd100]'>
            Mauve Event Centre

          </h1>
        </div>
      </div>
   
    </div>
  )
}

export default About