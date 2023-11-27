import React from 'react'
import { motion } from 'framer-motion'

const CTF = () => {
    return (
        <div className='p-5'>
            <motion.h1
                initial={{ y: -30 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.8, duration: 2 }}
                className='font-bold text-4xl flex justify-center text-[#ffd100] py-5'>
                About the CTF
            </motion.h1>

            <div>
                <p className='py-3 font-semibold sm:text-md leading-6'>
                    In Cybersecurity, CTF stands for "Capture The Flag," which is a type of competition or challenge that involves solving a variety of tasks related to information security.
                    The challenges for this CTF are designed to test the participants' skills in areas such as Steganography, Digital Forensics, Cryptography, Open Source Intelligence(OSINT), and others.
                </p>

                <p  className='py-3 font-semibold leading-6'>
                    <b className='text-[#ffd100]'>FORENSICS</b> : These challenges typically involve analyzing digital
                    artifacts, such as file systems, network traffic, or memory dumps, to uncover
                    hidden information or solve a puzzle.
                </p>
                <p  className='py-3 font-semibold leading-6'>
                    <b className='text-[#ffd100]'>CRYPTOGRAPHY</b> : Participants are tasked with solving challenges related
                    to encryption and decryption. This may involve breaking cryptographic algorithms,
                    deciphering encoded messages, or finding hidden keys.
                </p>
                <p  className='py-3 font-semibold leading-6'>
                    <b className='text-[#ffd100]'>STEGANOGRAPHY</b> : Participants must uncover hidden messages or information
                    within various types of media, such as images, audio files, or text.
                </p>
                <p  className='py-3 font-semibold leading-6'>
                    <b className='text-[#ffd100]'>MISCELLANEOUS</b> : These challenges can cover a wide range of topics not
                    specifically falling into the categories mentioned above. They may include a
                    mix of different skills and require creative problem-solving.
                </p>


                <p  className='py-3 font-semibold leading-6'>
                    The ultimate goal is to find and submit flags hidden within the tasks which are
                    of the form 'tscCTF' with a unique value in place of the three dots. These
                    findings should be submitted using the navigation bar at the landing page.
                    Submit the full flag - including tscCTF and the curly braces.
                </p>

                <div className='flex items-center flex-row mt-2 sm:mt-2'>
            <button className='flex flex-row  py-2 px-2 rounded-md shadow-sm bg-[#ffd100] text-[#1e1e1e] hover:bg-[#1e1e1e] hover:border-2 hover:border-[#ffd100] hover:text-[#ffd100]'>
              <a href='https://bit.ly/TechStacon_CTF' target={'_blank'} className='px-1 font-semibold'>
                Get Started
              </a>
            </button>
          </div>

            </div>
        </div>
    )
}

export default CTF