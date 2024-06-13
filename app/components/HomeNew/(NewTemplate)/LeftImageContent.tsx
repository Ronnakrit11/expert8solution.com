import Image from 'next/image'
import React from 'react'
import Link from 'next/link'


const LeftImageContent = () => {
    return (
        <div className='bg-white dark:bg-[#101726] p-4'>
            <div className='container mx-auto mp-32'>
                <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2'>
                    <div>
                        <Image width={500} height={500} alt='' src='/imageleft.webp' className='p-8' />
                    </div>
                    <div className='flex flex-col justify-center'>
                        <h2 className='text-3xl font-bold text-gray-800 dark:text-white md:text-3xl xl:text-3xl'>เพราะเราเข้าใจในธุรกิจการเรียนออนไลน์</h2>
                        <p className='mt-8 text-gray-600 dark:text-gray-300'>ซัพพอร์ตฟังก์ชั่นทุกอย่างตามที่คุณต้องการ</p>
                        <p className='mb-12 mt-4 text-gray-600 dark:text-gray-300'>ทางเราเข้าใจความต้องการของสถาบันหรือครูผู้สอนดี เเละเราพัฒนาระบบให้ตอบสนองการใช้งานของลูกค้าได้ครบ</p>
                        <div>
                        <Link href={"/elearning"}>
                                        <button className='bg-[#1565c0] py-4 w-[200px] px-4 text-white rounded-full text-[16px]'>ดูรายละเอียดเพิ่มเติม</button>
                                    </Link>                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftImageContent