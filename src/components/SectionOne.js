import React, { useRef, useEffect } from 'react'
import { VscCalendar } from 'react-icons/vsc';
import { MdOutlineLocationOn } from 'react-icons/md';
import { MdAddCircle } from 'react-icons/md';
import { useInView, useMotionValue, useSpring, motion } from 'framer-motion'

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null)

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 8000 })
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
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
    <div className='flex flex-col px-1 py-3 w-[100%] text-[#fafafa] '>
      <div className='w-[100%] flex flex-col justify-center'>
      <motion.h1
            initial={{ y: -30 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.8, duration: 2 }}
            className='font-bold text-4xl flex justify-center text-[#ffd100] py-5'>About TSC 24.</motion.h1>

        <p className='sm:text-2xl xx:text-sm py-3 font-extrabold flex flex-col justify-center px-3 text-center leading-loose'>

          Tech Starters Conference is the ATC Africa annual Conference!
          Which aims is designed to help individuals and community members
          to navigate the overwhelming world of technology and provide a clear
          direction for students, enthusiasts, career changers, tech beginners and
          anyone Interested in the industry as this conference.

          Tech Starters Conference is a completely physical event.
          Seasoned professionals can stay updated on industry trends, connect
          with peers, and share their expertise. Overall, also we believe this will
          foster a sense of community and collaboration among individuals
          passionate about technology.

        </p>

        {/* <div className='flex flex-row justify-center py-2 '>
          <VscCalendar className='w-6 h-6 text-[#ffd100]' />

          <h1 className='px-2 font-semibold'>When:</h1>
          <h1 className=' '>
            Sat 3rd February 2024

          </h1>
        </div> */}

        <div className='w-[100%]  flex flex-col py-5'>
          <div>


            <motion.div
              initial={{ y: 50 }}
              whileInView={{ y: 0, transition: { duration: 1.2, ease: 'easeInOut', staggerChildren: 0.08, } }} viewport={{ once: true }}
              className='py-2  grid md:grid-cols-3  xx:grid-cols-1 xx:gap-4 md:gap-2 '>


              <motion.div

                className='bg-[#fafafa]  flex flex-col justify-between transition-all duration-500  hover:rotate-1 hover:scale-80 text-[#1e1e1e]  rounded-lg  shadow-md '>
                <h1 className='py-4 font-extrabold flex justify-center bg-[#ffd100] text-2xl'>Regular Ticket (₦4000)</h1>

                <div>
                <h1 className=' px-4 font-semibold'>All-inclusive benefits: </h1>
                  <ul className='text-sm py-1 px-4 font-semibold'>
                    <li className='py-1'>Attend TSC and receive a certificate </li>
                    <li className='py-1'>Chance to join the event hackathon</li>
                    <li className='py-1'>Network with a diverse group of participants </li>
                    <li className='py-1'>Enjoy complimentary refreshments </li>
                    <li className='py-1'>Listen to insights from seasoned industry speakers and experts </li>
                    <li className='py-1'> Access to a notebook </li>

                  </ul>
                </div>

                <motion.div
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.9 }}
                  className='px-1 flex justify-center py-3 '>
                  <button className='flex justify-between hover:bg-[#1e1e1e] hover:text-white flex-row  py-2 px-2 rounded-md shadow-md bg-[#ffd100] text-[#1e1e1e] '>
                    <h1 className='px-1 font-bold'>
                      <a href='https://flutterwave.com/pay/iyow2gis3ep8' target={'_blank'}> Get Ticket</a>
                    </h1>

                    <MdAddCircle className='w-5 h-5 mt-0.5 text-[#1e1e1e]' />

                  </button>
                </motion.div>


              </motion.div>

              <div className='bg-[#fafafa] flex flex-col justify-between transition-all duration-500 hover:rotate-2 hover:scale-80  text-[#1e1e1e] rounded-lg shadow-md'>
                <div className='bg-[#ffd100]'>
                  <h1 className='py-4 font-extrabold flex justify-center  text-2xl'>Premium Ticket (₦6000)</h1>
                </div>

                <div>
                  <h1 className=' px-2 font-semibold'>Includes all Standard benefits, plus: </h1>
                  <ul className='list-none py-2 px-2 font-semibold'>
                    <li className='py-1'>Free access to premium resources that will aid professional growth </li>
                    <li className='py-1'>One-on-one mentorship with industry experts</li>
                    <li className='py-1'>Entry into a raffle </li>
                    <li className='py-1'>Additional refreshments and meals</li>
                    <li className='py-1'>Exclusive premium branded swag shirts and other souvenirs </li>

                  </ul>
                </div>


                <motion.div
                  className='px-1 flex justify-center  py-3 '>
                  <button className='flex justify-between flex-row hover:bg-[#1e1e1e] hover:text-white py-2 px-2 rounded-md shadow-md bg-[#ffd100] text-[#1e1e1e] '>
                    <h1 className='px-1 font-bold'>
                      <a href='https://flutterwave.com/pay/cx17f9s2mjeg' target={'_blank'}> Get Ticket</a>
                    </h1>

                    <MdAddCircle className='w-5 h-5 mt-0.5 text-[#1e1e1e]' />

                  </button>
                </motion.div>
              </div>



              <div className='bg-[#fafafa] flex flex-col justify-between transition-all duration-500 hover:rotate-2 hover:scale-80 text-[#1e1e1e]  rounded-lg shadow-md '>
                <h1 className='py-4 font-extrabold text-2xl flex justify-center bg-[#ffd100]'>Free Ticket</h1>

                <div>
                  <ul className='list-none font-semibold py-1 px-2'>
                  <li className='py-1'>Network with a diverse group of participants</li>
                  <li className='py-1'>Access to Conference hall</li>
                    <li className='py-1'>Listen to insights from seasoned industry speakers and experts</li>
                    <li className='py-1'>Entry into a raffle</li>

                    {/* <h1 className='py-10 flex justify-center'>Coming Soon</h1> */}


                  </ul>
                </div>


                <div className='px-1 flex justify-center py-3 mt-40'>
                  <button className='flex justify-between flex-row  py-2 px-2 rounded-md shadow-md bg-[#ffd100]  text-[#1e1e1e] ' disabled>
                    <h1 className='px-1'>
                    <a href='https://docs.google.com/forms/u/2/d/e/1FAIpQLSeRarxb_RYMuJwAK8bdoll17evUrZci4Qnp-yz877Y4CxKcpQ/viewform' target={'_blank'}> Get Ticket</a>
                    </h1>

                    <MdAddCircle className='w-5 h-5 mt-0.5 text-[#1e1e1e] hover:text-white' />

                  </button>
                </div>


              </div>

            </motion.div>

          </div>

        </div>

        <div className='relative py-5 w-full '>
          <div className='absolute p-3 bg-[#1e1e1e] rounded-full mt-[50px] ml-[-14px]'></div>
          <div className='absolute p-3 bg-[#1e1e1e] rounded-full mt-[48px] xx:right-[-12px] sm:right-[-14px] md:right-[-8px]
        '></div>
          <div className='grid xx:grid-cols-4 gap-0 w-full sm:w-full md:w-full bg-[#ffd100] rounded-md shadow-md py-5'>
            <div className='flex flex-row justify-center px-2'>
              <div className='text-[#1e1e1e] px-2 py-2'>
                <span className='flex justify-center xx:text-2xl sm:text-3xl sm:pr-[2rem] md:pr-[3rem]  pb-1 font-bold'>
                  <AnimatedNumbers value={10} />  +
                </span>
                <h2 className='text-sm font-medium flex justify-center sm:pr-[2rem] md:pr-[3rem] capitalize'>
                  Speakers
                </h2>
              </div>

              <div className=' border-l-2 border-l-black/20 px-1 h-12 mt-3.5'>

              </div>
            </div>

            <div className='flex flex-row px-1 justify-center'>
              <div className='text-[#1e1e1e] pr-2 px-1 py-2'>
                <span className='flex justify-center xx:ml-[-0px]  sm:ml-[-2rem] xx:mr-[-16px] sm:mr-[-0px] xx:text-2xl md:pr-[3rem] sm:text-3xl pb-1 font-bold'>
                  <AnimatedNumbers value={1} /> K +
                </span>
                <h2 className='text-sm font-medium  xx:mr-[-16px]  sm:pr-[2rem] sm:mr-[-0px] flex md:pr-[5rem]  justify-center capitalize'>
                  Attendees
                </h2>
              </div>

              <div className=' border-r-2 border-r-black/20 xx:ml-4 sm:ml-5 md:ml-5 h-12 mt-3.5'>

              </div>
            </div>

            <div className='flex flex-row px-2 justify-center'>
              <div className='text-[#1e1e1e] px-2 pr-3 sm:pr-[2rem]  py-2'>
                <span className='flex justify-center xx:ml-[-2px] md:pr-[3rem] sm:ml-[-1rem] xx:mr-[-16px] sm:mr-[-0px] xx:text-2xl sm:text-3xl pb-1 font-bold'>
                  <AnimatedNumbers value={8} />  +
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
                <span className='flex justify-center xx:text-2xl md:pr-[3rem] sm:ml-[-2rem] sm:text-3xl pb-1 font-bold'>
                  <AnimatedNumbers value={5} />  +
                </span>
                <h2 className='text-sm font-medium flex sm:ml-[-2rem] md:pr-[3rem]  justify-center capitalize'>
                  Sponsors
                </h2>
              </div>
            </div>

          </div>
        </div>

      </div>


    </div>
  )
}

export default SectionOne