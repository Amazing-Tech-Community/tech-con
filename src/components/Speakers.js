import React from 'react'
import AnimatedText from '../components/AnimatedText'
import Link from 'next/link'
import { speakers } from '@/constants'
import Image from 'next/image'
import { BiLogoLinkedinSquare } from "react-icons/bi";

const Speakers = () => {
  return (
    <div className='py-4 flex flex-col '>
    <AnimatedText text="Speakers" className='xx:text-4xl sm:text-4xl z-10 font-semibold py-8 text-[#ffd100]' />
 
    
 
     <div className='grid sm:grid-cols-3 xx:grid-cols-1 gap-2 '>
         {speakers.map((speakers, index) => (
             <div className='flex flex-col justify-center rounded-lg shadow-md bg-white text-black' key={speakers}>
                 <div >
                     <Image src={speakers.img} alt="doc" width={300} height={200} className='w-[400px] h-[200px]' />
                 </div>
                 <div className='flex flex-col justify-center'> 
                     <h1 className='flex justify-center'>{speakers.name}</h1>
                     <h1  className='flex justify-center'>{speakers.role}</h1>
                     <Link href="" className='flex justify-center'>
                         <BiLogoLinkedinSquare
                             className=" my-2 text-[#0e76a8] transition-all duration-300 hover:text-[#006290] "
                             size={25}
                         />
                     </Link>
                 </div>
             </div>
         ))}
     </div>
 </div>
  )
}

export default Speakers