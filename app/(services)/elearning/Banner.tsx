import React from 'react'
import { LuCheckCircle } from "react-icons/lu";


const Banner = () => {
    return (
        <div>
            <div className='w-[90%] sm:w-[90%] md:w-[60%] mx-auto py-20'>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-4'>
                    <div className='flex justify-center items-center '>
                        <div className='text-black space-y-8'>
                            <h1 className='text-[40px] sm:text-[40px] md:text-[56px] font-bold'>Best Way to Make Online Payments</h1>
                            <p className='text-[17px] text-[#6D7176]'>Maecenas tempus, tellus eget condimentum rhoncus quam semper libero sit amet adipiscing sem neque sed.</p>
                            <ul className='text-[16px] space-y-4 text-[#6D7176]'>
                                <li className='flex items-center gap-2 '><LuCheckCircle className='text-[#98EFD2]' /> Aenean leo ligula porttitor eu consequat vitae.</li>
                                <li className='flex items-center gap-2 '><LuCheckCircle className='text-[#98EFD2]' /> Aenean leo ligula porttitor eu consequat vitae.</li>
                                <li className='flex items-center gap-2 '><LuCheckCircle className='text-[#98EFD2]' /> Aenean leo ligula porttitor eu consequat vitae.</li>
                            </ul>
                            <button className='bg-primary text-white px-6 py-4 rounded-2xl'>Get Started</button>
                        </div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <img src="https://coderthemes.com/appexy/layouts/images/heros/hero-3-img.png" alt="" className='w-[500px] h-auto' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner