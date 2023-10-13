import React, { useRef, useEffect } from 'react'
import { VscCalendar } from 'react-icons/vsc';
import {MdOutlineLocationOn } from 'react-icons/md';
import { MdAddCircle} from 'react-icons/md';
import { useInView, useMotionValue, useSpring } from 'framer-motion'

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null)

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 8000 })
  const isInView = useInView(ref);

  useEffect(() => {
      if(isInView){
         motionValue.set(value) 
      }
  }, [isInView, value, motionValue])

  useEffect(() => {
      springValue.on("change", (latest) => {
          if (ref.current && latest.toFixed(0) <= value) {
              ref.current.textContent = latest.toFixed(0);
          }
      })
  }, [springValue, value])


  return <span ref={ref} className='px-1'></span>
}

const SectionOne = () => {
  return (
    <div className='grid grid-cols-2 gap-0 px-2 py-3 w-[100%] '>
      <div className='w-[77%] flex flex-col'>
        <h1 className='py-5 text-3xl font-semibold'>
          Largest Tech Starters Conference for Newbies & Professionals.
        </h1>

        <div className='flex flex-row justify-center py-2 w-[270px]'>
          <VscCalendar className='w-6 h-6 text-orange' />

          <h1 className='px-2 font-semibold'>When:</h1>
          <h1 className=' '>
          Sat 3rd February 2024

          </h1>


        </div>

        <div className='flex flex-row justify-center ml-[-0.5rem] py-2 w-[270px]'>
        <MdOutlineLocationOn className='w-6 h-6 text-orange'/>

        <h1 className='px-2 font-semibold'>Where:</h1>
          <h1 className=''>
            University of Ibadan
          </h1>
              </div>

          <div className='py-2 px-2 flex flex-col'>
            <div className='bg-orange text-white rounded-md shadow-md py-2 px-3'>
              <h1 className='py-2 font-semibold text-lg'>Basics Ticket (N3000)</h1>

              <ul className='list-none'>
              <li>- Ticket </li>
              <li>- Stickers </li>
              <li>- Food </li>
              <li>- Networking </li>

      </ul>
            </div>

          </div>

          <div className='py-2 px-2 flex flex-col'>
            <div className='bg-purple text-white rounded-md shadow-md py-2 px-3'>
              <h1 className='py-2 font-semibold text-lg'>Standard Ticket (#5000)</h1>

              <ul className='list-none'>
              <li>- Ticket </li>
              <li>- Food </li>
              <li>- Souvenirs </li>
              <li>- Networking </li>
              <li>- Shirt </li>

      </ul>
            </div>

          </div>
      </div>

      <div className='w-[95%] flex flex-col py-5'>
        <div>
          <p className='text-md py-5 leading-6'>
          Tech Starters Conference is designed to help individuals navigate the overwhelming world of technology and provide a clear direction for students, enthusiasts, career changers, tech beginners and anyone
Interested in the industry.

          </p>

          <div className='px-1 flex justify-center pb-6 pt-9'>
        <button className='flex justify-between flex-row  py-2 px-2 rounded-md shadow-md bg-orange text-white '>
        <h1 className='px-1'>
         <b> Learn more</b>
          </h1> 

        <MdAddCircle className='w-5 h-5 mt-0.5 text-white'/>

      </button>
      </div>

      <div className='relative py-5'>
        <div className='absolute p-3 bg-white rounded-full mt-[48px] ml-[-14px]'></div>
        <div className='absolute p-3 bg-white rounded-full mt-[48px] right-[-14px]'></div>
      <div className='grid grid-cols-4 bg-orange rounded-md shadow-md py-5'>
        <div className='flex flex-row px-2'>
        <div className='text-white px-2 py-2'>
        <span className='flex justify-center text-4xl pb-1 font-bold'>
         <AnimatedNumbers value={10 }/>  +
       </span>
        <h2 className='text-sm font-medium flex justify-center capitalize'>
           Speakers
         </h2> 
        </div>

        <div className='flex justify-center items-center border-r-2 border-r-black/20 px-1 h-12 mt-3.5'>
         
        </div>
        </div>

        <div className='flex flex-row px-1'>
        <div className='text-white pr-3 px-1 py-2'>
        <span className='flex justify-start ml-[-8px] text-3xl pb-1 font-bold'>
         <AnimatedNumbers value={1 }/> K +
       </span>
        <h2 className='text-sm font-medium flex mt-1 justify-center capitalize'>
          Attendees
         </h2> 
        </div>

        <div className='flex justify-center items-center border-r-2 border-r-black/20 px-1 h-12 mt-3.5'>
         
        </div>
        </div>

        <div className='flex flex-row px-2'>
        <div className='text-white px-2 pr-3  py-2'>
        <span className='flex justify-start ml-[-8px] text-4xl pb-1 font-bold'>
         <AnimatedNumbers value={8 }/>  +
       </span>
        <h2 className='text-sm font-medium flex justify-start ml-[-8px]   capitalize'>
          Programs
         </h2> 
        </div>

        <div className='flex justify-center items-center border-r-2 border-r-black/20 px-1 h-12 mt-3.5'>
         
        </div>
        </div>
        
        <div className='flex flex-row px-2'>
        <div className='text-white px-2 py-2'>
        <span className='flex justify-center text-4xl pb-1 font-bold'>
         <AnimatedNumbers value={5 }/>  +
       </span>
        <h2 className='text-sm font-medium flex justify-center capitalize'>
           Sponsors
         </h2> 
        </div>
        </div>

      </div>
      </div>
     


        </div>

      </div>
    </div>
  )
}

export default SectionOne