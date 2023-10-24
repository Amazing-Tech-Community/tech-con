import React from 'react'
import join from "../images/join.jpg";
// import {MdOutlineLocationOn } from 'react-icons/md';

const SectionFour = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${join})`,
  };

  return (
    <div className="bg-[url('../images/join.jpg')] bg-cover h-[500px] sm:p-20 relative text-white flex flex-col items-center justify-center" style={backgroundImageStyle}> 
       <div className="absolute inset-0 flex flex-col justify-center bg-gradient-to-r from-[#07031c9b] to-[#040113b4] bg-opacity-10 transition-all duration-300 hover:bg-opacity-40 py-12 sm:px-6 px-2 ">
       </div>

               
       <h1 className='font-bold sm:text-4xl xx:text-xl text-white text-center flex justify-center px-1 md:px-32 z-10 py-3 leading-normal'>
       Do you have what it takes to compete   with other Tech enthusiasts?
        </h1>
       

       <h1 className='pt-3 sm:pt-12 text-white font-bold z-10'>Then Sign up for Hackathon</h1>

       <div className='px-1 flex justify-center pt-7 pb-3 z-10'>
        <button className='flex justify-between flex-row  py-2 px-2 rounded-md shadow-sm shadow-black bg-[#ffd100] text-[#1e1e1e] hover:bg-[#1e1e1e] hover:border-2 hover:border-[#ffd100] hover:text-[#ffd100] '>
        
          <a href='https://docs.google.com/forms/d/e/1FAIpQLSfteKt4tukk2wF7QPNd2lKa2D7c-hBeikcIk9BP7a-XRUhdrA/viewform' target={'_blank'}>
          <h1 className='px-1 font-bold '>
          Signup
          </h1> 
          </a>

        {/* <MdAddCircle className='w-5 h-5 mt-0.5 text-white'/> */}

      </button>
      </div>
    </div>
  )
}

export default SectionFour