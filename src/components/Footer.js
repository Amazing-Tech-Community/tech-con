import React from 'react'
import { FaFacebookF } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
// import { AiFillYoutube } from 'react-icons/ai';
import { motion } from "framer-motion";
import insta from "../images/insta.jpg";
import Image from 'next/image';

const Footer = () => {
  return (
    <div className='py-3 px-2 flex flex-col justify-center'>
      <h1 className='font-bold xx:text-2xl sm:text-3xl py-4  flex justify-center'>TECH STARTERS CONF 24</h1>

      <p className='text-md py-3 flex px-2 md:px-[15rem] sm:px-10  justify-center text-center leading-6'>
        Tech Starters Conference is designed to help individuals navigate the overwhelming world of technology and provide a clear direction for students, enthusiasts, career changers, tech beginners and anyone
        Interested in the industry.

      </p>


      <motion.div
        initial={{ y: 200 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.8, duration: 1.5 }}
        className='flex flex-row justify-center text-[#1e1e1e] items-center px-5 py-5'>
        <motion.a

          href='https://web.facebook.com/atcafricahq' target={'_blank'}
          whileHover={{ y: -6 }}
          whileTap={{ scale: 0.9 }}
          className='px-2 py-2 rounded-md bg-white text-[#264c72] shadow-lg'>
          <motion.a
            whileHover={{ y: -6 }}
            whileTap={{ scale: 0.9 }}>
            <FaFacebookF className='w-5 h-5 mt-0.5' />
          </motion.a>
        </motion.a>

        <motion.a
        href='https://twitter.com/atcafricahq' target={'_blank'}
          whileHover={{ y: -6 }}
          whileTap={{ scale: 0.9 }}
          className='shadow-lg rounded-md bg-white text-[#264c72] px-2 py-2 ml-1'>
          <motion.a
            whileHover={{ y: -6 }}
            whileTap={{ scale: 0.9 }}>
            <BsTwitter className='w-5 h-5 mt-0.5' />
          </motion.a>
        </motion.a>

        <motion.a
        href='http://www.linkedin.com/company/atcafricahq' target={'_blank'}
          whileHover={{ y: -6 }}
          whileTap={{ scale: 0.9 }}
          className='shadow-lg rounded-md bg-white text-[#264c72] px-2 py-2 ml-1'>
          <motion.a
            whileHover={{ y: -6 }}
            whileTap={{ scale: 0.9 }}>
            <FaLinkedinIn className='w-5 h-5 mt-0.5' />
          </motion.a>
        </motion.a>

        <motion.a
        href='https://www.instagram.com/atcafricahq/' target={'_blank'}
          whileHover={{ y: -6 }}
          whileTap={{ scale: 0.9 }}
          className='shadow-lg rounded-md bg-white text-red-600  ml-1'>
          <motion.a
            whileHover={{ y: -6 }}
            whileTap={{ scale: 0.9 }}>
            <Image
              src={insta}
              alt="img"
              width={40}
              height={40}
              className="bg-transparent shadow-lg rounded-md"
            />
          </motion.a>
        </motion.a>
      </motion.div>

      <div className='flex flex-row sm:justify-center py-2'>
        <h1 className=''>Organized by </h1>
        <h1 className='text-[#ffd100] px-0.5'>ATC Africa </h1>
        <h1> Powered by </h1>
        <h1 className='text-[#ffd100] px-0.5'>TecHappen </h1>
      </div>

      <h1 className=' py-3 flex px-3 justify-center xx:text-center'>© 2024 Tech Starters Conference. All Rights Reserved. </h1>
    </div>
  )
}

export default Footer