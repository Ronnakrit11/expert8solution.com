'use client'
import Image from 'next/image'
import React, { useState } from 'react'

const Tab = () => {
    const [tabState, setTabState] = useState(0)

    const handleTabChange = (index) => {
        setTabState(index)
    }

    return (
        <div className='bg-white dark:bg-[#101726] py-20 px-4'>
            <div className='container mx-auto '>
                <div>
                    <h2 className='text-3xl text-center font-bold text-gray-800 dark:text-white md:text-4xl xl:text-5xl'>ภาพรวมระบบ</h2>
                    <h3 className='mx-auto text-center mt-6 text-gray-700 dark:text-gray-300 md:w-3/4 lg:w-3/5'>หน้าเว็ปไซต์สำหรับนักเรียนของคุณ เเละหลังบ้านสำหรับจัดการเว็ปไซต์ของคุณ</h3>
                </div>
                <div>
                    <div className='relative mx-auto mt-12 grid w-auto grid-cols-3 items-center gap-x-1 overflow-hidden rounded-full border border-gray-200 bg-gray-100 px-[3px] text-gray-600 dark:bg-[#101726] dark:border-gray-700 dark:border-opacity-60 dark:bg-darker dark:text-gray-300 dark:shadow-none sm:w-max'>
                        <button className={` p-4 m-2 ${tabState === 0 ? ' bg-white dark:bg-[#1a253d] rounded-full' : ''}`} onClick={() => handleTabChange(0)}>หน้าเว็ปไซต์</button>
                        <button className={` p-4 m-2 ${tabState === 1 ? ' bg-white dark:bg-[#1a253d] rounded-full' : ''}`} onClick={() => handleTabChange(1)}>หลังบ้าน</button>
                        <button className={` p-4 m-2 ${tabState === 2 ? ' bg-white dark:bg-[#1a253d] rounded-full' : ''}`} onClick={() => handleTabChange(2)}>คอมพิวเตอร์</button>
                    </div>
                </div>
                {tabState === 0
                    ?
                    <div className='mt-4 sm:mt-4 md:mt-10'>
                        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2'>
                            <div className='mt-12 space-y-6 '>
                                <div>
                                    <h3 className='text-2xl font-bold text-gray-900 dark:text-white md:text-3xl'>หน้าเว็ปไซต์สำหรับนักเรียน</h3>
                                    <h4 className='mt-8 text-gray-600 dark:text-gray-300'>ระบบพัฒนาด้วยการเขียนโค้ดทั้งหมด ไม่ใช้ wordpress เเละไม่ใช้เว็ปไซต์สำเร็จรูป</h4>
                                </div>
                                <div className='flex items-center gap-6'>
                                    <div className="flex h-20 w-20 rounded-3xl border border-gray-200 bg-white p-4 dark:border-gray-600/60 dark:bg-gray-900/40">
                                        <Image className='m-auto h-8 w-auto' width={100} height={100} src="/i2.png" alt='' />
                                    </div>
                                    <div className='w-[calc(100%-7.5rem)]'>
                                        <p className='text-lg font-semibold text-gray-800 dark:text-white'>ดีไซน์ทันสมัย </p>
                                        <p className='mt-1 text-gray-600 dark:text-gray-400'>เราทำได้ตามความต้องการของคุณ</p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-6'>
                                    <div className="flex h-20 w-20 rounded-3xl border border-gray-200 bg-white p-4 dark:border-gray-600/60 dark:bg-gray-900/40">
                                        <Image className='m-auto h-8 w-auto' width={100} height={100} src="/i1.png" alt='' />
                                    </div>
                                    <div className='w-[calc(100%-7.5rem)]'>
                                        <p className='text-lg font-semibold text-gray-800 dark:text-white'>Responsive</p>
                                        <p className='mt-1 text-gray-600 dark:text-gray-400'>การเเสดงผลที่สวยงามบนทุกอุปกรณ์</p>
                                    </div>
                                </div>
                            </div>
                            <div className='mt-10 flex mx-auto'>
                                <Image src='/tap/phonee2.png' width={250} height={400} alt='' className=' h-80 rounded-t-3xl object-cover object-top dark:border-transparent sm:h-[28rem]' />
                                <Image src='/tap/pphone1.png' width={250} height={400} alt='' className=' h-80 rounded-t-3xl object-cover object-top dark:border-transparent sm:h-[28rem]' />
                            </div>
                        </div>
                    </div>
                    : <></>
                }
                {tabState === 1
                    ?
                    <div className='mt-4 sm:mt-4 md:mt-10'>
                        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2'>
                            <div className='mt-12 space-y-6'>
                                <div>
                                    <h3 className='text-2xl font-bold text-gray-900 dark:text-white md:text-3xl'>ระบบหลังบ้านสำหรับคุณ</h3>
                                    <h4 className='mt-8 text-gray-600 dark:text-gray-300'>ระบบหลังบ้านสามารถจัดการได้อย่างง่ายเเละครบครัน</h4>
                                </div>
                                <div className='flex items-center gap-6'>
                                    <div className="flex h-20 w-20 rounded-3xl border border-gray-200 bg-white p-4 dark:border-gray-600/60 dark:bg-gray-900/40">
                                        <Image className='m-auto h-8 w-auto' width={100} height={100} src="/i2.png" alt='' />
                                    </div>
                                    <div className='w-[calc(100%-7.5rem)]'>
                                        <p className='text-lg font-semibold text-gray-800 dark:text-white'>จัดการหน้าเว็ปไซต์</p>
                                        <p className='mt-1 text-gray-600 dark:text-gray-400'>สามารถ เพิ่มเเก้ไขลบ , เพิ่มเเก้ไข Ebook , เพิ่มเเก้ไขบทความ  </p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-6'>
                                    <div className="flex h-20 w-20 rounded-3xl border border-gray-200 bg-white p-4 dark:border-gray-600/60 dark:bg-gray-900/40">
                                        <Image className='m-auto h-8 w-auto' width={100} height={100} src="/i1.png" alt='' />
                                    </div>
                                    <div className='w-[calc(100%-7.5rem)]'>
                                        <p className='text-lg font-semibold text-gray-800 dark:text-white'>จัดการข้อมูล</p>
                                        <p className='mt-1 text-gray-600 dark:text-gray-400'>สามารถดูยอดขายรวม จัดการนักเรียน เเละเข้าถึงข้อมูลของนักเรียน </p>
                                    </div>
                                </div>
                            </div>
                            <div className='mt-10'>
                                <Image src='/tap/ipadf.png' width={500} height={400} alt='' className='mx-auto w-full object-cover object-top dark:border-transparent' />
                            </div>
                        </div>
                    </div>
                    : <></>
                }
                {tabState === 2
                    ?
                    <div className='mt-4 sm:mt-4 md:mt-10'>
                        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2'>
                            <div className='mt-12 space-y-6'>
                                <div>
                                    <p className='text-2xl font-bold text-gray-900 dark:text-white md:text-3xl'>คอมพิวเตอร์</p>
                                    <p className='mt-8 text-gray-600 dark:text-gray-300'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! repellat expedita consequatur! Officiis id consequatur atque doloremque!</p>
                                </div>
                                <div className='flex items-center gap-6'>
                                    <div className="flex h-20 w-20 rounded-3xl border border-gray-200 bg-white p-4 dark:border-gray-600/60 dark:bg-gray-900/40">
                                        <Image className='m-auto h-8 w-auto' width={100} height={100} src="/i2.png" alt='' />
                                    </div>
                                    <div className='w-[calc(100%-7.5rem)]'>
                                        <p className='text-lg font-semibold text-gray-800 dark:text-white'>Togeter</p>
                                        <p className='mt-1 text-gray-600 dark:text-gray-400'>Accusantium nemo perspiciatis delectus atque autem!</p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-6'>
                                    <div className="flex h-20 w-20 rounded-3xl border border-gray-200 bg-white p-4 dark:border-gray-600/60 dark:bg-gray-900/40">
                                        <Image className='m-auto h-8 w-auto' width={100} height={100} src="/i1.png" alt='' />
                                    </div>
                                    <div className='w-[calc(100%-7.5rem)]'>
                                        <p className='text-lg font-semibold text-gray-800 dark:text-white'>Togeter</p>
                                        <p className='mt-1 text-gray-600 dark:text-gray-400'>Accusantium nemo perspiciatis delectus atque autem!</p>
                                    </div>
                                </div>
                            </div>
                            <div className='mt-10'>
                                <Image src='/tap/mac.png' width={500} height={400} alt='' className='mx-auto w-full object-cover object-top dark:border-transparent' />
                            </div>
                        </div>
                    </div>
                    : <></>
                }
            </div>
        </div>
    )
}

export default Tab
