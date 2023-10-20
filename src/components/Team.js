import React from 'react'
import AnimatedText from '../components/AnimatedText'

const Team = () => {
    return (
        <div className='py-24'>
            <h1 className='text-white sm:text-4xl xx:text-2xl font-semibold flex justify-center py-6 capitalize z-10'>
                Team
            </h1>

            <AnimatedText text="Coming Soon" className='xx:text-4xl sm:text-4xl z-10 text-[#ffd100]' />
        </div>
    )
}

export default Team