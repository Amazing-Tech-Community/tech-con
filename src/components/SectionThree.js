import React from 'react'

const SectionThree = () => {
  return (
    <div className='flex flex-col justify-center py-6 pt-10 '>
      <h1 className='flex py-3 justify-center font-bold text-3xl'>Video Thriller</h1>

      <div className='md:px-[15rem] xx:px-[10px] flex py-3 justify-center'>
      <iframe
          src="/techvid.mp4"
          title="Video Player"
          frameborder="0"
          allowfullscreen
          className="w-[100%] h-[300px] flex py-3 justify-center"
        ></iframe>
      </div>
    
    </div>
  )
}

export default SectionThree