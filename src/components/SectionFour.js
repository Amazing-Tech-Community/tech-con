import React, {useState} from 'react'
import join from "../images/join.jpg";
// import {MdOutlineLocationOn } from 'react-icons/md';

const SectionFour = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${join})`,
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const openDropdown = () => {
    setIsDropdownOpen(true);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };


  return (
    <div className="bg-[url('../images/join.jpg')] bg-cover h-[500px] sm:p-20 relative text-white flex flex-col items-center justify-center" style={backgroundImageStyle}>
      <div className="absolute inset-0 flex flex-col justify-center bg-gradient-to-r from-[#07031c9b] to-[#040113b4] bg-opacity-10 transition-all duration-300 hover:bg-opacity-40 py-12 sm:px-6 px-2 ">
      </div>


      <h1 className='font-bold sm:text-4xl xx:text-xl text-white text-center flex justify-center px-1 md:px-32 z-10 py-3 leading-normal'>
        Do you have what it takes to compete   with other Tech enthusiasts?
      </h1>


      <h1 className='pt-3 sm:pt-12 text-white font-bold z-10'>Then Sign up for Hackathon</h1>

      <div
        className="relative group pt-4"
        onMouseEnter={openDropdown}
        onMouseLeave={closeDropdown}
      >
        <button
          className=" focus:outline-none py-2 px-2 rounded-md shadow-sm shadow-black bg-[#ffd100] text-[#1e1e1e] hover:bg-[#1e1e1e] hover:border-2 hover:border-[#ffd100] hover:text-[#ffd100]" 
        >
          Signup
        </button>

        {isDropdownOpen && (
          <div className="absolute left-0 mt-0 z-10 space-y-2 bg-[#ffd100] text-black border rounded-md shadow-lg">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfteKt4tukk2wF7QPNd2lKa2D7c-hBeikcIk9BP7a-XRUhdrA/viewform"
              target="_blank"
              className="block px-4 py-2  text-md font-semibold hover:bg-gray-100"
            >
              Hackathon
            </a>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSe1NxmW8GBnltA56upnjr555pUbWbAAYdx-F5mv7oCV9JF3sg/viewform?usp=sf_link"
              target="_blank"
              className="block px-4 py-2 text-md font-semibold hover:bg-gray-100"
            >
              CTF
            </a>

          </div>
        )}
      </div>
    </div>
  )
}

export default SectionFour