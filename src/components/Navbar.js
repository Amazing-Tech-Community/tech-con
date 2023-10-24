import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import logo from '../images/logo.png';
import { CgMenuGridR } from 'react-icons/cg';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import { motion } from "framer-motion";
import Link from 'next/link';
import insta from "../images/insta.jpg";


const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isDesktopOpen, setIsDesktopOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // Set isMobile to true when screen width is less than a certain value (e.g., 640px).
      setIsMobile(window.innerWidth < 770);
    };

    // Initial check on component mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className='py-2  flex flex-row justify-between sm:flex-row sm:items-center '>

      <Link href='/'>
        <div className='flex items-center justify-center sm:justify-center '>
          <Image
            src={logo}
            alt="logo"
            className="w-full h-14 sm:w-full xx:py-1  xx:px-2 sm:p-2 sm:h-12 object-cover object-center "
          />
          {/* <div className='text-[#ffd100] px-3 visible sm:hidden font-bold ml-1 '>
          <h1 className='text-md sm:text-2xl'>TECH STARTERS CONF 24</h1>
        </div> */}
        </div>

      </Link>

      {isMobile ? (
        // Mobile view with menu icon
        <div className='flex items-center flex-row mt-2 sm:mt-0'>
          <CgMenuGridR
            className='w-7 h-7 text-[#ffd100] cursor-pointer hover:w-9 hover:h-9 absolute top-4 right-7'
            onClick={() => setIsDropdownOpen(true)}
          />
        </div>
      ) : (
        // Desktop view with navigation links
        <div className='flex px-2 justify-between'>
          <div className='flex flex-row  items-center sm:ml-[-6%] mt-2 sm:mt-0 space-x-2'>

            <Link href='/About'>
              <div className='px-1 '><button className=' hover:text-[#ffd100]'>About</button></div>
            </Link>

            <Link href='/Speakers'>
              <div className='px-1 md:px-2'><button className=' hover:text-[#ffd100] '>Speakers</button></div>
            </Link>

            <a href='https://photos.google.com/share/AF1QipMbwsqlm7t6-LsuL8qvVJaUwMxImkulVG1Fq4SvUT_QuUVZfubHUfyMPnzDtjrHkQ?key=RlZ4NnozUVdSY1NCRWNpSGV6MXJlWVNheWN0S0pB' target={'_blank'}>
              <div className='px-1 md:px-2'><button className=' hover:text-[#ffd100]'>Past Conference</button></div>
            </a>

            <a href='https://docs.google.com/forms/d/e/1FAIpQLSfteKt4tukk2wF7QPNd2lKa2D7c-hBeikcIk9BP7a-XRUhdrA/viewform' target={'_blank'}>
              <div className='px-1 md:px-2'><button className=' hover:text-[#ffd100]'>Hackathon</button></div>
            </a>

            <a href='https://docs.google.com/forms/d/e/1FAIpQLSdLeOLeSEJfDde1QDlI91bRa4y9FkB3jSZRGxd8ORenOrzwbQ/viewform' target={'_blank'}>
              <div className='px-1 md:px-2'><button className=' hover:text-[#ffd100]'>Volunteer</button></div>
            </a>

            <Link href='/Team'>
              <div className='px-1 md:px-2'><button className=' hover:text-[#ffd100]'>Team</button></div>
            </Link>

            <Link href='/Contact'>
              <div className='px-1 md:px-2'><button className=' hover:text-[#ffd100]'>Contact</button></div>
            </Link>
          </div>

          <div className='flex items-center flex-row mt-2 sm:mt-0'>
            <button className='flex justify-between flex-row  py-2 px-2 rounded-md shadow-sm bg-[#ffd100] text-[#1e1e1e] hover:bg-[#1e1e1e] hover:border-2 hover:border-[#ffd100] hover:text-[#ffd100]'>
              <a href='http://wa.me/2348123051357#' target={'_blank'} className='px-1'>
                Sponsor Us
              </a>

              {/* <MdAddCircle className='w-5 h-5 mt-0.5 text-white'/> */}

            </button>

            <div className='px-4'>
              <CgMenuGridR
                className='w-7 h-7 text-[#ffd100] cursor-pointer '
                onClick={() => setIsDesktopOpen(true)}
              />
            </div>

          </div>

        </div>


      )}

      {isDesktopOpen && (
        <div className='fixed top-0 left-0 w-screen px-3 z-10'>
          <AiOutlineCloseCircle
            className='w-8 h-8 text-[#ffd100] cursor-pointer hover:w-9 hover:h-9 absolute top-4 right-16'
            onClick={() => setIsDesktopOpen(false)}
          />
          {/* Add your mobile navigation links here */}
          <motion.div
            initial={{ x: 1000 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            className='flex flex-row '>
            <div className='p-20 bg-black z-0 w-[70%] h-[565px] opacity-70'>

            </div>

            <div

              className='pt-20 w-[30%] px-8 flex flex-col bg-white '>
              <motion.div
                initial={{ y: 200 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.8, duration: 1.5 }}
                className='flex items-center flex-col justify-center sm:justify-center '>
                <div className='sm:w-18 sm:h-18'>
                  <Image
                    src={logo}
                    alt="logo"
                    className="  p-2  object-cover object-center"
                  />
                </div>

                <div className='text-[#1e1e1e] py-3 pt-5 font-extrabold ml-1 '>
                  <h1 className='text-sm sm:text-base flex '>TECH STARTERS CONF 24</h1>
                </div>

              </motion.div>

              <motion.p
                initial={{ y: 200 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.8, duration: 1.5 }}
                className='py-5 text-center text-[#1e1e1e]'>
                Tech Starters Conference is designed to help individuals navigate the overwhelming world of technology and provide a clear direction for students, enthusiasts, career changers, tech beginners and anyone
                Interested in the industry.
              </motion.p>

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
                  className='shadow-lg rounded-md bg-white text-red-600 mt-2  ml-1'>
                  <motion.a
                    whileHover={{ y: -6 }}
                    whileTap={{ scale: 0.9 }}>
                    <Image
                      src={insta}
                      alt="img"
                      width={30}
                      height={30}
                      className="bg-transparent shadow-lg rounded-md"
                    />
                  </motion.a>
                </motion.a>
              </motion.div>
            </div>

          </motion.div>

        </div>
      )}


      {/* Mobile menu with close icon */}
      {isMobile && isDropdownOpen && (
        <motion.div
          initial={{ x: 1000 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.1, duration: 1.4 }}
          className='fixed top-0 left-0 w-screen h-[560px] bg-[#1e1e1e] z-10'>
          <AiOutlineCloseCircle
            className='w-8 h-8 text-[#ffd100] cursor-pointer hover:w-9 hover:h-9 absolute top-4 right-10'
            onClick={() => setIsDropdownOpen(false)}
          />
          {/* Add your mobile navigation links here */}
          <div className='pt-20 block text-center justify-center text-2xl'>
          <Link href='/About'>
              <div className='px-1 py-3'><button className=' hover:text-[#ffd100]'>About</button></div>
            </Link>

            <Link href='/Speakers'>
              <div className='px-1 py-3 md:px-2'><button className=' hover:text-[#ffd100] '>Speakers</button></div>
            </Link>

            <a href='https://photos.google.com/share/AF1QipMbwsqlm7t6-LsuL8qvVJaUwMxImkulVG1Fq4SvUT_QuUVZfubHUfyMPnzDtjrHkQ?key=RlZ4NnozUVdSY1NCRWNpSGV6MXJlWVNheWN0S0pB' target={'_blank'}>
              <div className='px-1 py-3 md:px-2'><button className=' hover:text-[#ffd100]'>Past Conference</button></div>
            </a>

            <a href='https://docs.google.com/forms/d/e/1FAIpQLSfteKt4tukk2wF7QPNd2lKa2D7c-hBeikcIk9BP7a-XRUhdrA/viewform' target={'_blank'}>
              <div className='px-1 py-3 md:px-2'><button className=' hover:text-[#ffd100]'>Hackathon</button></div>
            </a>

            <a href='https://docs.google.com/forms/d/e/1FAIpQLSdLeOLeSEJfDde1QDlI91bRa4y9FkB3jSZRGxd8ORenOrzwbQ/viewform' target={'_blank'}>
              <div className='px-1 py-3 md:px-2'><button className=' hover:text-[#ffd100]'>Volunteer</button></div>
            </a>

            <Link href='/Team'>
              <div className='px-1 py-3 md:px-2'><button className=' hover:text-[#ffd100]'>Team</button></div>
            </Link>

            <Link href='/Contact'>
              <div className='px-1 py-3 md:px-2'><button className=' hover:text-[#ffd100]'>Contact</button></div>
            </Link>

            <motion.div
                initial={{ y: 30 }}
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
                  className='shadow-lg rounded-md bg-white text-[#264c72] px-2 py-2 ml-3'>
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
                  className='shadow-lg rounded-md bg-white text-[#264c72] px-2 py-2 ml-3'>
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
                  className='shadow-lg rounded-md bg-white text-red-600 mt-1  ml-3'>
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
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
