import React from 'react'
import spe from "../images/spe.jpg";
import AnimatedText from '../components/AnimatedText'

const SectionSix = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${spe})`,
  };

  return (
    <div className="bg-[url('../images/spe.jpg')] bg-cover h-[400px] p-20 relative text-white flex flex-col items-center justify-center" style={backgroundImageStyle}>
       <div className="absolute inset-0 flex flex-col justify-center bg-gradient-to-r from-[#07031c9b] to-[#07031caa] bg-opacity-10 transition-all duration-300 hover:bg-opacity-40 py-12 sm:px-6 px-2 ">
       </div>

    <h1 className='text-white text-4xl font-semibold capitalize z-10'>
      Event Speakers
    </h1>

    <AnimatedText text="Coming Soon" className='xx:text-3xl sm:text-4xl z-10 text-[#ffd100]' />
    </div>
  )
}

export default SectionSix