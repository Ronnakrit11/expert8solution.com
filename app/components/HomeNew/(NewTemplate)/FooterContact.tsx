import React from 'react'
import { FaEnvelope } from "react-icons/fa6";
import Image from 'next/image'
import Contact from '../../Contact/Contact';

const FooterContact = () => {
    return (
        <div className="border-y border-gray-200 p-0 sm:p-4 bg-gray-100 dark:bg-[#101726] dark:border-gray-700 dark:bg-darker">
            <div className=' w-full flex justify-center'>
                <div className="items-start  justify-around md:flex">
                    <div className="h-max py-16 md:w-6/12 xl:w-5/12 flex flex-col items-center justify-center" >
                        <div className="text-center md:text-left">
                            <h2 className="text-3xl font-bold text-gray-800 dark:text-white md:w-max md:text-4xl xl:text-5xl">ติดต่อเรา</h2>
                            <p className="mb-8 mt-6 text-gray-600 dark:text-gray-300">ติกต่อร่วมงานกับ Expert8Solution เพื่อเป็นส่วนหนึ่งกับเรา บริการรวดเร็ว ประทับใจ คุณภาพสูง ครบจบในที่เดียว</p>
                        </div>
                        <div className=''>
                            <Image width={1000} height={1000} alt="" src='/illustration-contact.webp' />
                        </div>

                        {/* <div className='relative flex items-center rounded-full border border-primary/20 bg-white p-1 px-2 shadow-md focus-within:ring-2 dark:border-white/10 dark:bg-dark dark:text-white md:p-2 lg:pr-3'>
                            <FaEnvelope className='h-6 w-6 ml-2 text-gray-600' />
                            <input placeholder='Your mail address' className='w-full rounded-full bg-transparent p-4 placeholder-gray-600 outline-none dark:placeholder-white' />
                            <div>
                                <button className='bg-[#1565c0] py-2 px-4 text-white rounded-full text-[16px] w-[150px]'>Get Started</button>
                            </div>
                        </div> */}
                        {/* <div className='md:w-[42%] lg:w-1/2 '>
                        <Image width={1000} height={1000} alt="" src='/illustration-contact.webp' /> */}
                        {/* </div> */}
                    </div>
                    <Contact />
                </div>
                {/* <Contact /> */}
            </div>
        </div >
    )
}

export default FooterContact