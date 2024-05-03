import Image from 'next/image';
import React from 'react'
import { FaEnvelope } from "react-icons/fa6";

const LandingPage = () => {
    return (
        <div className='bg-white dark:bg-[#101726] p-4'>
            <div className='container mx-auto'>
                <div className='py-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2'>
                    <div className='flex flex-col justify-center'>
                        <div className='flex'>
                            <h1 className='text-center text-5xl font-bold text-blue-900 dark:text-white sm:text-6xl lg:text-left lg:text-7xl'>Expert 8 &nbsp;</h1>
                            <h1 className='text-5xl sm:text-6xl lg:text-left lg:text-7xl font-bold bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-400 inline-block text-transparent bg-clip-text'>Solution.</h1>
                        </div>
                        <h2 className='my-6 lg:my-12 text-lg text-gray-600 dark:text-gray-300 sm:text-xl'>บริการสร้างระบบ E-Learning เเบบครบครัน พร้อมบริการงานกราฟฟิก งานตัดต่อ เเละเทคนิคยิงโฆษณาโดยมืออาชีพ</h2>
                        <div className='relative flex items-center rounded-full border border-primary/20 bg-white dark:bg-[#101726] p-1 px-2 shadow-md focus-within:ring-2 dark:border-white/10 dark:bg-dark dark:text-white md:p-2 lg:pr-3'>
                            <FaEnvelope className='h-6 w-6 ml-2 text-gray-600' />
                            <input placeholder='Your mail address' className='w-full rounded-full bg-transparent p-4 placeholder-gray-600  outline-none dark:placeholder-white' />
                            <button className='bg-[#1565c0] py-2 w-[150px] px-4 text-white rounded-full text-[16px]'>Get Started</button>
                        </div>
                    </div>
                    <div className='p-2'>
                        <Image width={1000} height={1000} alt='' src='/mm2311.webp' className='w-full' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage