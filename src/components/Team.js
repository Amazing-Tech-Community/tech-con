import React, {useState} from 'react'
import AnimatedText from '../components/AnimatedText'
import Link from 'next/link'
import { team } from '@/constants'
import Image from 'next/image'
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { motion } from 'framer-motion'

const Team = () => {
    const [hoveredSpeaker, setHoveredSpeaker] = useState(null);
    return (
        <div className="relative sm:h-[500px] sm:p-10 xx:p-5 flex flex-col items-center justify-center">
            <div>
            <AnimatedText text="Team" className='xx:text-4xl sm:text-4xl z-10 font-semibold  text-white' />
            </div>
           
        <div className="absolute inset-0 flex flex-col justify-center  py-16 sm:px-6 px-2 "></div>
  
        <div className="grid sm:grid-cols-3 py-10 xx:grid-cols-1 gap-2 z-10">
          {team.map((team, index) => (
            <div
              className="relative overflow-hidden rounded-lg "
              key={team.name}
              onMouseEnter={() => setHoveredSpeaker(index)}
              onMouseLeave={() => setHoveredSpeaker(null)}
            >
              <Image
                src={team.img}
                alt={team.name}
                width={300}
                height={350}
                className={`w-[300px] h-[350px] cursor-pointer transform scale-100 transition-transform duration-300 ${hoveredSpeaker === index ? 'scale-105' : ''
                  }`}
              />
  
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredSpeaker === index ? 0.8 : 0 }}
                transition={{ duration: 0.3 }}
                className={`absolute inset-0 flex flex-row items-end py-3 cursor-pointer  bg-[#ffd100] text-black font-bold text-xl  opacity-1`}
              >
                <div className='px-10'>
                <h1 className="text-xl font-bold mb-2">{team.name}</h1>
                </div>
               
  
                <div className='flex justify-end text-right pl-8 flex-col'>
                  <p className='py-1 '>{team.role}</p>
                  <a href={team.linkedin} className='flex justify-center'>
                    <BiLogoLinkedinSquare className="text-[#0e76a8] hover:text-[#006290]" size={25} />
                  </a>
                </div>
  
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    )
}

export default Team