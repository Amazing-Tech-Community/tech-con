import React, { useState, useEffect } from 'react';
import { MdOutlineLocationOn } from 'react-icons/md';
import { Carousel as Caro } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { slides } from '@/constants/index';
import { motion } from 'framer-motion';
import Countdown from './Countdown';
import Image from 'next/image';
import raf from "../images/raf.jpg";
import Link from 'next/link';

const Hero = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show the popup after 5 seconds
    const timeout = setTimeout(() => {
      setShowPopup(true);
    }, 5000);

    // Clear the timeout when the component unmounts
    return () => clearTimeout(timeout);
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div className='xx:h-[520px] lg:h-[600px] relative bg-[#1e1e1e] text-[#fafafa] flex flex-col items-center justify-center z-10'>
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
          <div key={index} className='carousel-slide'>
            <div className='relative w-full sm:h-[500px] lg:h-[600px] h-[500px]'>
              <img
                className='w-full h-full object-cover object-center'
                src={s.img}
                alt='Slide Image'
              />

              <div className='absolute inset-2 left-2 flex justify-center bg-gradient-to-b from-transparent to-[#2f1f6d4e] bg-opacity-10'></div>
              <div className='absolute inset-0 flex flex-col justify-center bg-gradient-to-b from-transparent to-[#050212f0] bg-opacity-20 transition-all duration-300 hover:bg-opacity-40 sm:py-32 mt-[-3rem] sm:px-6 px-2 '>
                <motion.h1
                  initial={{ y: 200 }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.8, duration: 1.5 }}
                  className='font-bold text-3xl sm:text-4xl z-10 py-2'
                >
                  <b>TECH STARTERS</b>
                </motion.h1>

                <motion.h1
                  initial={{ y: 200 }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.8, duration: 2 }}
                  className='font-semibold text-[#ffd100] xx:text-5xl sm:text-6xl py-4'
                  style={{ WebkitTextStroke: '1px #ffd100' }}
                >
                  CONFERENCE
                </motion.h1>

                <motion.h1
                  initial={{ y: 200 }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.8, duration: 2 }}
                  className='font-bold text-xl py-2'
                >
                  3rd February,2024
                </motion.h1>

                <motion.div
                  initial={{ y: 200 }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.8, duration: 2.4 }}
                  className='flex sm:flex-row xx:flex-col items-center justify-center py-4 sm:py-5 sm:pt-10 '
                >
                  <MdOutlineLocationOn className='w-6 h-6 text-[#ffd100] font-bold' />

                  <h1 className='px-2 flex sm:text-xl text-[#ffd100] font-bold'>
                    Trenchard Hall, University of Ibadan, Ibadan
                  </h1>
                </motion.div>

                {showPopup && (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className='pt-2'
                  >
                    {/*  popup content here */}
                    <div className='py-2 z-20 sm:w-[450px] lg:w-[550px] lg:h-[600px] xx:w-[300px] xx:h-[350px] xs:h-[350px] sm:h-[500px] absolute md:top-14 md:left-64 sm:top-14 sm:left-32 xs:top-16 xs:left-10 xx:top-16 xx:left-6 lg:top-12 lg:left-96 px-2 bg-black'>
                      {/* Close icon */}
                      <div
                        className='absolute top-4 sm:right-4 xx:right-2 px-2 cursor-pointer'
                        onClick={() => setShowPopup(false)}
                      >

                        <span className='text-4xl text-white hover:text-[#ffd100] font-bold'>X</span>
                      </div>

                      {/* Popup content */}
                      <Image
                        src={raf}
                        alt="img"
                        width={500}
                        height={500}
                        className=""
                      />
                      <div className='flex items-center justify-center flex-row mt-2 sm:mt-2'>
                      <Link href='/Raffle'  className='px-1 text-xl font-bold'>
                        <button className='flex flex-row  py-2 px-2 rounded-md shadow-sm bg-[#ffd100] text-[#1e1e1e] hover:bg-[#1e1e1e] hover:border-2 hover:border-[#ffd100] hover:text-[#ffd100]'>
                          {/* <a href='https://flutterwave.com/pay/thycrkdkv0ss' target={'_blank'} className='px-1 text-xl font-bold'>
                            Pay now
                          </a> */}
                         
                          Read more ...
                         
                        </button>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}

                <motion.div
                  initial={{ y: 200 }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.8, duration: 2.4 }}
                  className='pt-3'
                >
                  <Countdown />
                </motion.div>
              </div>
            </div>
          </div>
        ))}
      </Caro>
    </div>
  );
};

export default Hero;
