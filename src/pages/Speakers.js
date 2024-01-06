import React, { useState } from 'react';
import spe from '../images/spe.jpg';
import AnimatedText from '../components/AnimatedText';
import Link from 'next/link';
import { speakers } from '@/constants';
import Image from 'next/image';
import { BiLogoLinkedinSquare } from 'react-icons/bi';
import { motion } from 'framer-motion';

function Speakers() {
    const [hoveredSpeaker, setHoveredSpeaker] = useState(null);
    return (
        <div className="relative sm:p-10 xx:p-5 flex flex-col items-center justify-center">
            <div>
                <AnimatedText text="Speakers" className='xx:text-4xl sm:text-4xl z-10 font-semibold  text-white' />
            </div>

            <div className="absolute inset-0 flex flex-col justify-center py-10 sm:px-6 px-2 "></div>

            <div className="grid sm:grid-cols-3 md:grid-cols-4 py-4 xx:grid-cols-1 sm:gap-8 xx:gap-4 z-10">
                {speakers.map((speaker, index) => (
                    <div
                        className="relative overflow-hidden rounded-lg "
                        key={speaker.name}
                        onMouseEnter={() => setHoveredSpeaker(index)}
                        onMouseLeave={() => setHoveredSpeaker(null)}
                    >
                        <Image
                            src={speaker.img}
                            alt={speaker.name}
                            width={280}
                            height={350}
                            className={` h-[350px] object-cover cursor-pointer transform scale-100 transition-transform duration-300 ${hoveredSpeaker === index ? 'scale-105' : ''
                                }`}
                        />

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: hoveredSpeaker === index ? 0.8 : 0 }}
                            transition={{ duration: 0.3 }}
                            className={`absolute inset-0 flex justify-between flex-row items-end py-3 cursor-pointer  bg-black text-[#ffd100] font-bold opacity-10 text-xl`}
                        >
                            <div className='px-4'>
                                <h1 className="text-lg font-bold text-[#ffd100] ">{speaker.name}</h1>
                                <div className='text-sm font-semibold text-white'>{speaker.role}</div>
                            </div>


                            <div className='flex px-4 flex-col'>
                                <a href={speaker.linkedin} className='flex justify-center'>
                                    <BiLogoLinkedinSquare className="text-[#0e76a8] hover:text-[#006290]" size={25} />
                                </a>
                            </div>

                        </motion.div>
                    </div>
                ))}
            </div>

            {/* <div>
                <AnimatedText text="Coming Soon" className='xx:text-4xl sm:text-4xl z-10 font-semibold  text-white' />
            </div> */}
        </div>
    )
}

export default Speakers