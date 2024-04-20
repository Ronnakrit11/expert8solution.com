import React from 'react'
import { FaEnvelope } from "react-icons/fa6";

const LandingPage = () => {
    return (
        <div className='container mx-auto'>
            <div className='grid grid-cols-2'>
                <div className='flex flex-col justify-center'>
                    <div className='flex'>
                        <p className='text-center text-5xl font-bold text-blue-900 dark:text-white sm:text-6xl lg:text-left lg:text-7xl'>Design, Build,</p>
                        <p className='text-5xl sm:text-6xl lg:text-left lg:text-7xl font-bold bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-400 inline-block text-transparent bg-clip-text'>Scale.</p>
                    </div>
                    <p className='mt-12 text-lg text-gray-600 dark:text-gray-300 sm:text-xl'>Computers used to be magical. But much of that magic has been lost over time, replaced by subpar tools and practices that slow teams down and hold great work back.</p>
                    <div className='relative flex items-center rounded-full border border-primary/20 bg-white p-1 px-2 shadow-md focus-within:ring-2 dark:border-white/10 dark:bg-dark dark:text-white md:p-2 lg:pr-3'>
                        <FaEnvelope className='h-6 w-6 ml-2 text-gray-600' />
                        <input placeholder='Your mail address' className='w-full rounded-full bg-transparent p-4 placeholder-gray-600 outline-none dark:placeholder-white' />
                        <div>
                            <button className='bg-[#1565c0] py-2 px-4 text-white rounded-full text-[16px]'>Get Started</button>
                        </div>
                    </div>
                </div>
                <div>
                    <img src='https://ampire.netlify.app/images/team.svg' className='w-[800px] h-[600px]' />
                </div>
            </div>
        </div>
    )
}

export default LandingPage