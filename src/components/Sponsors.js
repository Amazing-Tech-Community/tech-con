import React from 'react'
import pinkApp from "../images/app.png";
import cardify from "../images/cardify.png";
import te from "../images/te.png";
import techappen from "../images/techappen.png";
import Image from 'next/image';
import AnimatedText from '../components/AnimatedText';

const Sponsors = () => {
    return (
        <div className='flex flex-col  py-8'>

             <div className='flex justify-center'>
            <h1 className="text-green py-4 font-bold">
                <b className="text-white font-bold text-3xl">Sponsors</b>
            </h1>
            </div>
          

            {/* <div className='flex flex-row justify-center py-8'>
                <div className='px-3'>
                    <Image
                        src={pinkApp}
                        alt="img"
                        width={200}
                        height={100}
                        className=""
                    />
                </div>

                <div className=' px-4 mt-6'>
                    <Image
                        src={cardify}
                        alt="img"
                        width={200}
                        height={100}
                        className=""
                    />
                </div>

                <div className=' px-4'>
                    <Image
                        src={te}
                        alt="img"
                        width={100}
                        height={50}
                        className=""
                    />
                </div>

                <div className='px-3 mt-2'>
                    <Image
                        src={techappen}
                        alt="img"
                        width={200}
                        height={100}
                        className=""
                    />
                </div>
            </div>  */}

            <div>
                <AnimatedText text="Coming Soon" className='xx:text-4xl sm:text-4xl z-10 font-bold  text-[#ffd100]' />
            </div>

        </div>
    )
}

export default Sponsors