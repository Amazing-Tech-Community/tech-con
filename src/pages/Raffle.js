import React from 'react'
import { motion } from 'framer-motion'

const Raffle = () => {
    return (
        <div className='p-5'>
            <motion.h1
                initial={{ y: -30 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.8, duration: 2 }}
                className='font-bold text-4xl flex justify-center text-[#ffd100] py-5'>
                Raffle Draw
            </motion.h1>

            <div>
                <p className='py-3 font-semibold sm:text-md leading-6'>
                You can participate from anywhere in the raffle and still get your gift waybill hen you win.
                </p>

                <b className='py-3 font-bold sm:text-md leading-6'>How to Participate: </b><br></br>
                <ul className='py-3'>
                    <li className='py-1'>1. Buy your ticket 1500</li>
                    <li className='py-1'>2. Fill the raffle form immediately after you buy your ticket.</li>
                    <li className='py-1'>3. Details of participation will be sent to your email box.</li>
                    <li className='py-1'>4. Play and Win at TSC.</li>
                </ul>

            <p className='py-3 font-bold sm:text-lg leading-6'>
            Note: Only 50 tickets are available. Claim yours now and stand a chance to go home with a brand new laptop with just 1500
            </p>

            <div className='flex justify-center items-center flex-row mt-2 sm:mt-2'>
            <button className='flex flex-row  py-2 px-2 rounded-md shadow-sm bg-[#ffd100] text-[#1e1e1e] hover:bg-[#1e1e1e] hover:border-2 hover:border-[#ffd100] hover:text-[#ffd100]'>
              <a href='https://flutterwave.com/pay/tscraffledraw' target={'_blank'} className='px-1 text-lg font-bold'>
               Pay now
              </a>
            </button>
          </div>
            </div>
        </div>
    )
}

export default Raffle