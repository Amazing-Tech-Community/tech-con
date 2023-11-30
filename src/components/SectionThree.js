import React from 'react'

const SectionThree = () => {
  return (
    <div className='flex flex-col justify-center py-6 pt-10 '>
      <h1 className='flex py-3 justify-center font-bold text-3xl'>Video Thriller</h1>

      <div className='md:px-[15rem] xx:px-[10px] flex py-3 justify-center'>
      <iframe
          src="https://www.youtube.com/embed/2610GaJpq6U?si=lbxUlFvQqwCyB02A" 
          title="Video Player"
          frameborder="0"
          allowfullscreen
          className="w-[100%] h-[400px] flex py-3 justify-center"
        ></iframe>
      </div>

      {/* <div className='md:px-[15rem] xx:px-[10px] flex py-3 justify-center'>
        <video width="640" height="360" controls>
        <source src='https://youtu.be/2610GaJpq6U?si=d4Nbi5Go3SI80SO9' type="video/mp4" />
        Your browser does not support the video tag.
        </video>
      </div> */}
    
    </div>
  )
}

export default SectionThree