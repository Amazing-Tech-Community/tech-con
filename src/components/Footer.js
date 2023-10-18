import React from 'react'

const Footer = () => {
  return (
    <div className='py-3 px-2 flex flex-col justify-center'>
      <h1 className='font-bold xx:text-2xl sm:text-3xl py-4  flex justify-center'>TECH STARTERS CONF 24</h1>

      <p className='text-md py-3 flex px-2 md:px-[15rem] sm:px-10  justify-center text-center leading-6'>
      Tech Starters Conference is designed to help individuals navigate the overwhelming world of technology and provide a clear direction for students, enthusiasts, career changers, tech beginners and anyone
Interested in the industry.

      </p>
{/* 
      <h1 className='text-md py-3 flex flex-row '>Organized by 
      <b className='text-[#ffd100] px-1'>ATC Africa</b> Powered by
       <b className='text-[#ffd100] px-1'>TecHappen</b>
      </h1> */}

      <div className='flex flex-row sm:justify-center py-2'>
        <h1>Organized by </h1>
        <h1 className='text-[#ffd100] px-1'>ATC Africa </h1>
        <h1> Powered by </h1>
        <h1 className='text-[#ffd100] px-1'>TecHappen </h1>
      </div>
    
      <h1 className=' py-3 flex px-3 justify-center xx:text-center'>© 2024 Tech Starters Conference. All Rights Reserved. </h1>
    </div>
  )
}

export default Footer