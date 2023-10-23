import React from 'react'
import { MdOutlineLocationOn } from 'react-icons/md';
import { Carousel as Caro } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { slides } from '@/constants/index';
import { motion } from "framer-motion";



const Hero = () => {
  return (
    <div className='h-[500px] bg-[#1e1e1e] text-[#fafafa] flex flex-col items-center justify-center z-10'>

      <Caro
        autoPlay={true}
        infiniteLoop={true}
        interval={3000}
        emulateTouch={true}
        swipeable={false}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        showArrows={false}

      >
        {slides.map((s, index) => (
          <div key={index} className="carousel-slide">
            <div className="relative w-full sm:h-[500px] h-[500px]">
              <img
                className="w-full h-full object-cover object-center"
                src={s.img}
                alt="Slide Image"
              />
              
              <div className='absolute inset-2 left-2 flex justify-center bg-gradient-to-b from-transparent to-[#2f1f6d4e] bg-opacity-10'></div>
              <div className="absolute inset-0 flex flex-col justify-center bg-gradient-to-b from-transparent to-[#050212f0] bg-opacity-20 transition-all duration-300 hover:bg-opacity-40 sm:py-32 mt-[-3rem] sm:px-6 px-2 ">
                <motion.h1
                initial={{ y: 200 }} 
                animate={{ y: 0 }}     
                transition={{ delay: 0.8, duration: 1.5}}
                 className='font-bold text-3xl sm:text-4xl z-10 py-2'><b>TECH STARTERS</b></motion.h1>

                <motion.h1 
                    initial={{ y: 200,  }} 
                    animate={{ y: 0 }}     
                    transition={{ delay: 0.8, duration: 2}}
                className='font-semibold text-[#ffd100] xx:text-5xl sm:text-6xl py-4'
                style={{  WebkitTextStroke: '1px #ffd100' }}
                >CONFERENCE</motion.h1>

                <motion.h1 
                initial={{ y: 200 }} 
                animate={{ y: 0 }}     
                transition={{ delay: 0.8, duration: 2}}
                className='font-bold text-xl py-2'>3rd February,2024</motion.h1>

                <motion.div 
                initial={{ y: 200 }} 
                animate={{ y: 0 }}     
                transition={{ delay: 0.8, duration: 2.4}}
                className='flex flex-row items-center justify-center py-5 pt-10 '>
                  <MdOutlineLocationOn className='w-6 h-6 text-[#ffd100] font-bold' />

                  <h1 className='px-2 flex text-xl text-[#ffd100] font-bold'>
                    Announcing soon
                  </h1>


                </motion.div>

              </div>

            </div>
          </div>
        ))}
      </Caro>

    </div>
  )
}

export default Hero