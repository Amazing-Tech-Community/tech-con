import React from 'react'
import Image from "next/image";
import vol from "../images/vol.jpg"; 

const SectionFive = () => {
  return (
    <div className='grid sm:grid-cols-2 gap-2 px-5 py-6 '>
      <div >
      <h1 className='pt-5 sm:text-4xl xx:text-2xl font-semibold'>
      Join the Team of volunteers. 	
        </h1>

        <p className='text-md py-3 leading-6'>
        Each year, our conference is made possible through the 
        continued and dedicated efforts of the volunteers.
         If you would like to make an impact and volunteer your skills. Kindly register your interest below
          </p>

          <div className='px-1 flex  pb-3 pt-3'>
      <button className='flex justify-between flex-row  py-2 px-2 rounded-md shadow-sm shadow-black bg-[#ffd100] text-[#1e1e1e] hover:bg-[#1e1e1e] hover:border-2 hover:border-[#ffd100] hover:text-[#ffd100] '>
        
        <a href='https://docs.google.com/forms/d/e/1FAIpQLSdLeOLeSEJfDde1QDlI91bRa4y9FkB3jSZRGxd8ORenOrzwbQ/viewform' target={'_blank'}>
        <h1 className='px-1 font-bold '>
        Become a volunteer
        </h1> 
        </a>

      {/* <MdAddCircle className='w-5 h-5 mt-0.5 text-white'/> */}

    </button>
      </div>
      </div>

      <div className='py-5 px-2'>
      <Image
              src={vol}
              alt="img"
              width={500}
              height={500}
              className=""
            />
      </div>
    </div>
  )
}

export default SectionFive