import React from 'react'
import { VscCalendar } from 'react-icons/vsc';
import { MdOutlineLocationOn } from 'react-icons/md';

function About() {
  return (
    <div className='flex flex-col py-10 text-[#fafafa]'>
      <p className='text-xl py-8 font-bold flex justify-center px-10 text-center leading-8'>
        Tech Starters Conference is the ATC Africa annual Conference!
        Which aims is designed to help individuals and community members
        to navigate the overwhelming world of technology and provide a clear
        direction for students, enthusiasts, career changers, tech beginners and
        anyone Interested in the industry as this conference.

        Tech Starters Conference is a completely physical event.
        Seasoned professionals can stay updated on industry trends, connect
        with peers, and share their expertise. Overall, also we believe this will
        foster a sense of community and collaboration among individuals
        passionate about technology.
      </p>

      <div className='flex flex-col mx-auto'>
        <div className='flex flex-row justify-center py-2 w-[270px]'>
          <VscCalendar className='w-6 h-6 text-[#ffd100]' />

          <h1 className='px-2 font-semibold'>When:</h1>
          <h1 className='font-bold text-[#ffd100]'>
            Sat 3rd February 2024

          </h1>
        </div>

        <div className='flex flex-row justify-center py-2 '>
          <MdOutlineLocationOn className='w-6 h-6 text-[#ffd100]' />

          <h1 className='px-2 font-semibold'>Where:</h1>
          <h1 className='font-bold text-[#ffd100]'>
          Trenchard Hall, University of Ibadan, Ibadan

          </h1>
        </div>
      </div>

    </div>
  )
}

export default About