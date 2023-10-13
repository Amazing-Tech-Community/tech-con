import React from 'react'

const SectionThree = () => {
  return (
    <div className='flex flex-col justify-center pt-10 '>
      <h1 className='flex py-3 justify-center font-bold text-3xl'>Video Thriller</h1>

      <div className='px-[15rem] flex py-3 justify-center'>
      <iframe
          src="https://www.youtube.com/watch?v=BN9sGR948RM"
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