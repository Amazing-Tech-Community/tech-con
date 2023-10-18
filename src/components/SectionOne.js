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
    <div className='grid xx:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-0 px-2 py-3 w-[100%] text-[#fafafa] '>
      <div className='w-[100%] flex flex-col'>
      <p className='text-sm py-3 font-extrabold leading-5'>
          Tech Starters Conference is designed to help individuals navigate the overwhelming world of technology and provide a clear direction for students, enthusiasts, career changers, tech beginners and anyone
Interested in the industry.

          </p>

        <div className='flex flex-row justify-center py-2 w-[270px]'>
          <VscCalendar className='w-6 h-6 text-[#ffd100]' />

          <h1 className='px-2 font-semibold'>When:</h1>
          <h1 className=' '>
          Sat 3rd February 2024

          </h1>


        </div>


              <div className='px-1 flex justify-center pb-6 pt-9'>
        <button className='flex justify-between flex-row  py-2 px-2 rounded-md shadow-md bg-[#ffd100] text-[#1e1e1e] '>
        <h1 className='px-1'>
         <b> Learn more</b>
          </h1> 

        <MdAddCircle className='w-5 h-5 mt-0.5 text-[#1e1e1e]'/>

      </button>
      </div>

      <div className='relative py-5 w-full '>
        <div className='absolute p-3 bg-[#1e1e1e] rounded-full mt-[50px] ml-[-14px]'></div>
        <div className='absolute p-3 bg-[#1e1e1e] rounded-full mt-[48px] xx:right-[-12px] sm:right-[-14px] md:right-[-8px]
        '></div>
      <div className='grid xx:grid-cols-4 gap-0 w-full sm:w-full md:w-full bg-[#ffd100] rounded-md shadow-md py-5'>
        <div className='flex flex-row justify-center px-2'>
        <div className='text-[#1e1e1e] px-2 py-2'>
        <span className='flex justify-center xx:text-2xl sm:text-3xl sm:pr-[2rem]  pb-1 font-bold'>
         <AnimatedNumbers value={10 }/>  +
       </span>
        <h2 className='text-sm font-medium flex justify-center sm:pr-[2rem] capitalize'>
           Speakers
         </h2> 
        </div>

        <div className=' border-l-2 border-l-black/20 px-1 h-12 mt-3.5'>
         
        </div>
        </div>

        <div className='flex flex-row px-1 justify-center'>
        <div className='text-[#1e1e1e] pr-2 px-1 py-2'>
        <span className='flex justify-center xx:ml-[-0px]  sm:ml-[-2rem] xx:mr-[-16px] sm:mr-[-0px] xx:text-2xl sm:text-3xl pb-1 font-bold'>
         <AnimatedNumbers value={1 }/> K +
       </span>
        <h2 className='text-sm font-medium  xx:mr-[-16px]  sm:pr-[2rem] sm:mr-[-0px] flex  justify-center capitalize'>
          Attendees
         </h2> 
        </div>

        <div className=' border-r-2 border-r-black/20 xx:ml-4 sm:ml-5 md:ml-5 h-12 mt-3.5'>
         
        </div>
        </div>

        <div className='flex flex-row px-2 justify-center'>
        <div className='text-[#1e1e1e] px-2 pr-3 sm:pr-[2rem]  py-2'>
        <span className='flex justify-center xx:ml-[-2px]  sm:ml-[-1rem] xx:mr-[-16px] sm:mr-[-0px] xx:text-2xl sm:text-3xl pb-1 font-bold'>
         <AnimatedNumbers value={8 }/>  +
       </span>
        <h2 className='text-sm font-medium flex justify-start xx:mr-[-16px] sm:ml-[-1rem] sm:mr-[-0px]   capitalize'>
          Programs
         </h2> 
        </div>

        <div className=' border-r-2 border-r-black/20 px-1 h-12 mt-3.5'>
         
        </div>
        </div>
        
        <div className='flex flex-row px-2 justify-center'>
        <div className='text-[#1e1e1e] px-2 py-2'>
        <span className='flex justify-center xx:text-2xl sm:ml-[-2rem] sm:text-3xl pb-1 font-bold'>
         <AnimatedNumbers value={5 }/>  +
       </span>
        <h2 className='text-sm font-medium flex sm:ml-[-2rem] justify-center capitalize'>
           Sponsors
         </h2> 
        </div>
        </div>

      </div>
      </div>

      </div>

      <div className='w-[100%]  flex flex-col py-5'>
        <div>

        
          <div className='py-2 px-5 grid xx:grid-cols-1 gap-2 '>
            
            
          <div className='bg-[#fafafa] text-[#1e1e1e]  rounded-md  shadow-md py-2 px-3'>
              <h1 className='py-2 font-semibold text-lg'>Standard Ticket (#5000)</h1>

              <ul className='list-none'>
              <li>- Ticket </li>
              <li>- Food </li>
              <li>- Souvenirs </li>
              <li>- Networking </li>
              <li>- Shirt </li>

      </ul>

      <div className='px-1 flex justify-center pb-2 pt-10'>
        <button className='flex justify-between flex-row  py-2 px-2 rounded-md shadow-md bg-[#ffd100] text-[#1e1e1e] '>
        <h1 className='px-1'>
         <b> Pay</b>
          </h1> 

        <MdAddCircle className='w-5 h-5 mt-0.5 text-[#1e1e1e]'/>

      </button>
      </div>
            

          </div>

            <div className='bg-[#fafafa]  text-[#1e1e1e] rounded-md shadow-md py-2 px-3'>
              <h1 className='py-2 font-semibold text-lg'>Basics Ticket (N3000)</h1>

              <ul className='list-none'>
              <li>- Ticket </li>
              <li>- Stickers </li>
              <li>- Food </li>
              <li>- Networking </li>

      </ul>

      <div className='px-1 flex justify-center pb-2 pt-10'>
        <button className='flex justify-between flex-row  py-2 px-2 rounded-md shadow-md bg-[#ffd100] text-[#1e1e1e] '>
        <h1 className='px-1'>
         <b> Pay</b>
          </h1> 

        <MdAddCircle className='w-5 h-5 mt-0.5 text-[#1e1e1e]'/>

      </button>
      </div>
            </div>

          
            
            <div className='bg-[#fafafa] text-[#1e1e1e]  rounded-md shadow-md py-2 px-3'>
              <h1 className='py-2 font-semibold text-lg'>Standard Ticket (#5000)</h1>

              <ul className='list-none'>
              <li>- Ticket </li>
              <li>- Food </li>
              <li>- Souvenirs </li>
              <li>- Networking </li>
              <li>- Shirt </li>

              <div className='px-1 flex justify-center pb-2 pt-10'>
        <button className='flex justify-between flex-row  py-2 px-2 rounded-md shadow-md bg-[#ffd100] text-[#1e1e1e] '>
        <h1 className='px-1'>
         <b> Pay</b>
          </h1> 

        <MdAddCircle className='w-5 h-5 mt-0.5 text-[#1e1e1e]'/>

      </button>
      </div>

      </ul>
            

          </div>
          
          </div>

        </div>

      </div>
    </div>
  )
}

export default SectionOne