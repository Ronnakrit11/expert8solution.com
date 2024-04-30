import Image from 'next/image'
import React from 'react'


const LeftImageContent = () => {
    return (
        <div className='bg-white dark:bg-[#101726]'>
            <div className='container mx-auto mp-32'>
                <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2'>
                    <div>
                        <Image width={500} height={500} alt='' src='/image1.jpg' className='p-8' />
                    </div>
                    <div className='flex flex-col justify-center'>
                        <p className='text-3xl font-bold text-gray-800 dark:text-white md:text-4xl xl:text-5xl'>Development is carried out by passionate developers</p>
                        <p className='mt-8 text-gray-600 dark:text-gray-300'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! repellat expedita consequatur! Officiis id consequatur atque doloremque!</p>
                        <p className='mb-12 mt-4 text-gray-600 dark:text-gray-300'>Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at? Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.</p>
                        <div>
                            <button className='bg-[#1565c0] py-2 px-4 text-white rounded-full text-[16px]'>Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftImageContent