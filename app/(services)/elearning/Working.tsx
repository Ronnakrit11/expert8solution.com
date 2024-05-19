import React from 'react'
import { LuCheckCircle } from "react-icons/lu";
import { IoArrowForwardCircle } from "react-icons/io5";

const Working = () => {
    return (
        <div>
            <div className='w-[90%] sm:w-[90%] md:w-[60%] mx-auto py-20'>
                <div className='text-center mb-20'>
                    <p className='text-[16px]'>HOW IT <span className='font-bold'>WORK</span></p>
                    <h3 className='text-[30px] font-semibold'>How dose it work ?</h3>
                    <p className='text-[16px] text-[#6D7176]'>Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque rem aperiam.</p>
                </div>
                <div className='flex text-[#6D7176]'>
                    <div className='flex flex-col items-center justify-center space-y-4'>
                        <LuCheckCircle size={60} />
                        <h4 className='text-black text-[20px]'>1. Intuitive visual editor</h4>
                        <p className='text-center'>Nemo enim ipsam quia voluptas sit aspernatur ist dolores.</p>
                    </div>
                    <div className='flex justify-center items-center'>
                        <img src='/arrow.png' width={"200px"} />
                    </div>
                    <div className='flex flex-col items-center justify-center space-y-4'>
                        <LuCheckCircle size={60} />
                        <h4 className='text-black text-[20px]'>1. Intuitive visual editor</h4>
                        <p className='text-center'>Nemo enim ipsam quia voluptas sit aspernatur ist dolores.</p>
                    </div>
                    <div className='flex justify-center items-center'>
                        <img src='/arrow_flip.png' width={"200px"} />
                    </div>
                    <div className='flex flex-col items-center justify-center space-y-4'>
                        <LuCheckCircle size={60} />
                        <h4 className='text-black text-[20px]'>1. Intuitive visual editor</h4>
                        <p className='text-center'>Nemo enim ipsam quia voluptas sit aspernatur ist dolores.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Working