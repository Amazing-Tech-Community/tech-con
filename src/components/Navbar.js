import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import logo from '../images/logo.png';
import { CgMenuGridR } from 'react-icons/cg';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { FaFacebookF} from 'react-icons/fa';
import { BsTwitter} from 'react-icons/bs';
import { FaLinkedinIn} from 'react-icons/fa';
import { AiFillYoutube} from 'react-icons/ai';
import { motion } from "framer-motion";

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

      <div className='flex items-center justify-center sm:justify-center '>
        <Image
          src={logo}
          alt="logo"
          className="w-12 h-12 sm:w-16 sm:h-12 object-cover object-center "
        />
        <div className='text-[#ffd100] px-3 visible sm:hidden font-bold ml-1 '>
          <h1 className='text-xl sm:text-2xl'>TECH STARTERS CONF 24</h1>
        </div>
      </div>

      {isMobile ? (
        // Mobile view with menu icon
        <div className='flex items-center flex-row mt-2 sm:mt-0'>
          <CgMenuGridR
            className='w-7 h-7 text-[#ffd100] cursor-pointer absolute top-4 right-7'
            onClick={() => setIsDropdownOpen(true)}
          />
        </div>
      ) : (
        // Desktop view with navigation links
        <div className='flex px-2 justify-between'>
          <div className='flex flex-row  items-center sm:ml-[-6%] mt-2 sm:mt-0 space-x-2'>
            <div className='px-1 '><button className=' hover:text-[#ffd100]'>About</button></div>
            <div className='px-1 md:px-2'><button className=' hover:text-[#ffd100] '>Speakers</button></div>
            <div className='px-1 md:px-2'><button className=' hover:text-[#ffd100]'>Past Conference</button></div>
            <div className='px-1 md:px-2'><button className=' hover:text-[#ffd100]'>Hackathon</button></div>
            <div className='px-1 md:px-2'><button className=' hover:text-[#ffd100]'>Volunteer</button></div>
            <div className='px-1 md:px-2'><button className=' hover:text-[#ffd100]'>Team</button></div>
            <div className='px-1 md:px-2'><button className=' hover:text-[#ffd100]'>Contact</button></div>
          </div>

          <div className='flex items-center flex-row mt-2 sm:mt-0'>
            <button className='flex justify-between flex-row  py-2 px-2 rounded-md shadow-sm bg-[#ffd100] text-[#1e1e1e] '>
              <h1 className='px-1'>
                Watch Videos
              </h1>

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
            className='w-8 h-8 text-[#ffd100] cursor-pointer absolute top-4 right-16'
            onClick={() => setIsDesktopOpen(false)}
          />
          {/* Add your mobile navigation links here */}
          <motion.div 
          initial={{ x: 1000 }} 
          animate={{ x: 0 }}     
          transition={{ delay: 0.2, duration: 1}}
          className='flex flex-row '>
            <div className='p-20 bg-black z-0 w-[70%] h-[565px] opacity-70'>

            </div>

            <div 
            
            className='pt-20 w-[30%] px-8 flex flex-col bg-white '>
              <motion.div 
              initial={{ y: 200 }} 
              animate={{ y: 0 }}     
              transition={{ delay: 0.8, duration: 1.5}}
              className='flex items-center flex-col justify-center sm:justify-center '>
                <Image
                  src={logo}
                  alt="logo"
                  className=" sm:w-16 sm:h-16 object-cover object-center"
                />
                <div className='text-[#1e1e1e] py-3 pt-5 font-extrabold ml-1 '>
                  <h1 className='text-sm sm:text-base flex '>TECH STARTERS CONF 24</h1>
                </div>

              </motion.div>

              <motion.p 
               initial={{ y: 200 }} 
               animate={{ y: 0 }}     
               transition={{ delay: 0.8, duration: 1.5}}
              className='py-5 text-center text-[#1e1e1e]'>
                Tech Starters Conference is designed to help individuals navigate the overwhelming world of technology and provide a clear direction for students, enthusiasts, career changers, tech beginners and anyone
                Interested in the industry.
              </motion.p>

              <motion.div 
               initial={{ y: 200 }} 
               animate={{ y: 0 }}     
               transition={{ delay: 0.8, duration: 1.5}}
              className='flex flex-row justify-center text-[#1e1e1e] items-center px-5 py-5'>
                <div className='px-2 py-2 text-[#1e1e1e] shadow-lg'>
                  <a>
                  <FaFacebookF className='w-5 h-5 mt-0.5'/>
                  </a>
                </div>

                <div className='shadow-lg px-2 py-2 ml-1'>
                  <a>
                  <BsTwitter className='w-5 h-5 mt-0.5'/>
                  </a>
                </div>

                <div className='shadow-lg px-2 py-2 ml-1'>
                  <a>
                  <FaLinkedinIn className='w-5 h-5 mt-0.5'/>
                  </a>
                </div>

                <div className='shadow-lg px-2 py-2 ml-1'>
                  <a>
                  <AiFillYoutube className='w-5 h-5 mt-0.5'/>
                  </a>
                </div>
              </motion.div>
            </div>
            
          </motion.div>

        </div>
      )}


      {/* Mobile menu with close icon */}
      {isMobile && isDropdownOpen && (
        <div className='fixed top-0 left-0 w-screen h-screen bg-white z-10'>
          <AiOutlineCloseCircle
            className='w-8 h-8 text-[#ffd100] cursor-pointer absolute top-4 right-10'
            onClick={() => setIsDropdownOpen(false)}
          />
          {/* Add your mobile navigation links here */}
          <div className='pt-20 text-center'>
            <div className='px-4 py-2'><button className='font-semibold hover:text-orange'>About</button></div>
            <div className='px-4 py-2'><button className='font-semibold hover:text-orange '>Speakers</button></div>
            <div className='px-4 py-2'><button className='font-semibold hover:text-orange'>Past Conference</button></div>
            <div className='px-4 py-2'><button className='font-semibold hover:text-orange'>Hackathon</button></div>
            <div className='px-4 py-2'><button className='font-semibold hover:text-orange'>Volunteer</button></div>
            <div className='px-4 py-2'><button className='font-semibold hover:text-orange'>Team</button></div>
            <div className='px-4 py-2'><button className='font-semibold hover:text-orange'>Contact</button></div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
