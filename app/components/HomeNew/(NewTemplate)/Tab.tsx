'use client'
import React, { useState } from 'react'

const Tab = () => {
    const [tabState, setTabState] = useState(0)

    const handleTabChange = (index) => {
        setTabState(index)
    }

    return (
        <div className='bg-white dark:bg-[#101726] py-20'>
            <div className='container mx-auto '>
                <div>
                    <p className='text-3xl text-center font-bold text-gray-800 dark:text-white md:text-4xl xl:text-5xl'>Full Responsive</p>
                    <p className='mx-auto text-center mt-6 text-gray-700 dark:text-gray-300 md:w-3/4 lg:w-3/5'>รองรับกับอุปกรณ์ทุกรูปแบบ เช่น คอมพิวเตอร์ โน้ตบุ๊ค โทรศัพท์มือถือ ไอแพด แทบเล็ต</p>
                </div>
                <div>
                    <div className='relative mx-auto mt-12 grid w-auto grid-cols-3 items-center gap-x-1 overflow-hidden rounded-full border border-gray-200 bg-gray-100 px-[3px] text-gray-600 dark:bg-[#101726] dark:border-gray-700 dark:border-opacity-60 dark:bg-darker dark:text-gray-300 dark:shadow-none sm:w-max'>
                        <button className={` p-4 m-2 ${tabState === 0 ? ' bg-white dark:bg-[#1a253d] rounded-full' : ''}`} onClick={() => handleTabChange(0)}>โทรศัพท์มือถือ</button>
                        <button className={` p-4 m-2 ${tabState === 1 ? ' bg-white dark:bg-[#1a253d] rounded-full' : ''}`} onClick={() => handleTabChange(1)}>แทบเล็ต</button>
                        <button className={` p-4 m-2 ${tabState === 2 ? ' bg-white dark:bg-[#1a253d] rounded-full' : ''}`} onClick={() => handleTabChange(2)}>คอมพิวเตอร์</button>
                    </div>
                </div>
                {tabState === 0
                    ?
                    <div className='mt-4 sm:mt-4 md:mt-10'>
                        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2'>
                            <div className='mt-12 space-y-6 '>
                                <div>
                                    <p className='text-2xl font-bold text-gray-900 dark:text-white md:text-3xl'>โทรศัพท์มือถือ</p>
                                    <p className='mt-8 text-gray-600 dark:text-gray-300'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! repellat expedita consequatur! Officiis id consequatur atque doloremque!</p>
                                </div>
                                <div className='flex items-center gap-6'>
                                    <div className="flex h-20 w-20 rounded-3xl border border-gray-200 bg-white p-4 dark:border-gray-600/60 dark:bg-gray-900/40">
                                        <img className="m-auto h-8 w-auto" src="https://cdn-icons-png.flaticon.com/512/4727/4727266.png" alt="icon illustration" loading="lazy" width="512" height="512" />
                                    </div>
                                    <div className='w-[calc(100%-7.5rem)]'>
                                        <p className='text-lg font-semibold text-gray-800 dark:text-white'>Togeter</p>
                                        <p className='mt-1 text-gray-600 dark:text-gray-400'>Accusantium nemo perspiciatis delectus atque autem!</p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-6'>
                                    <div className="flex h-20 w-20 rounded-3xl border border-gray-200 bg-white p-4 dark:border-gray-600/60 dark:bg-gray-900/40">
                                        <img className="m-auto h-8 w-auto" src="https://cdn-icons-png.flaticon.com/512/584/584796.png" alt="icon illustration" loading="lazy" width="512" height="512" />
                                    </div>
                                    <div className='w-[calc(100%-7.5rem)]'>
                                        <p className='text-lg font-semibold text-gray-800 dark:text-white'>Togeter</p>
                                        <p className='mt-1 text-gray-600 dark:text-gray-400'>Accusantium nemo perspiciatis delectus atque autem!</p>
                                    </div>
                                </div>
                            </div>
                            <div className='mt-4'>
                                <img src='/tap/phone.png' className='mx-auto h-80 rounded-t-3xl object-cover object-top dark:border-transparent sm:h-[28rem]' />
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
                                    <p className='text-2xl font-bold text-gray-900 dark:text-white md:text-3xl'>แทบเล็ต</p>
                                    <p className='mt-8 text-gray-600 dark:text-gray-300'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! repellat expedita consequatur! Officiis id consequatur atque doloremque!</p>
                                </div>
                                <div className='flex items-center gap-6'>
                                    <div className="flex h-20 w-20 rounded-3xl border border-gray-200 bg-white p-4 dark:border-gray-600/60 dark:bg-gray-900/40">
                                        <img className="m-auto h-8 w-auto" src="https://cdn-icons-png.flaticon.com/512/4727/4727266.png" alt="icon illustration" loading="lazy" width="512" height="512" />
                                    </div>
                                    <div className='w-[calc(100%-7.5rem)]'>
                                        <p className='text-lg font-semibold text-gray-800 dark:text-white'>Togeter</p>
                                        <p className='mt-1 text-gray-600 dark:text-gray-400'>Accusantium nemo perspiciatis delectus atque autem!</p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-6'>
                                    <div className="flex h-20 w-20 rounded-3xl border border-gray-200 bg-white p-4 dark:border-gray-600/60 dark:bg-gray-900/40">
                                        <img className="m-auto h-8 w-auto" src="https://cdn-icons-png.flaticon.com/512/584/584796.png" alt="icon illustration" loading="lazy" width="512" height="512" />
                                    </div>
                                    <div className='w-[calc(100%-7.5rem)]'>
                                        <p className='text-lg font-semibold text-gray-800 dark:text-white'>Togeter</p>
                                        <p className='mt-1 text-gray-600 dark:text-gray-400'>Accusantium nemo perspiciatis delectus atque autem!</p>
                                    </div>
                                </div>
                            </div>
                            <div className='mt-4'>
                                <img src='/tap/ipad.png' className='mx-auto h-80 w-full rounded-t-3xl object-cover object-top dark:border-transparent sm:h-[28rem]' />
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
                                        <img className="m-auto h-8 w-auto" src="https://cdn-icons-png.flaticon.com/512/4727/4727266.png" alt="icon illustration" loading="lazy" width="512" height="512" />
                                    </div>
                                    <div className='w-[calc(100%-7.5rem)]'>
                                        <p className='text-lg font-semibold text-gray-800 dark:text-white'>Togeter</p>
                                        <p className='mt-1 text-gray-600 dark:text-gray-400'>Accusantium nemo perspiciatis delectus atque autem!</p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-6'>
                                    <div className="flex h-20 w-20 rounded-3xl border border-gray-200 bg-white p-4 dark:border-gray-600/60 dark:bg-gray-900/40">
                                        <img className="m-auto h-8 w-auto" src="https://cdn-icons-png.flaticon.com/512/584/584796.png" alt="icon illustration" loading="lazy" width="512" height="512" />
                                    </div>
                                    <div className='w-[calc(100%-7.5rem)]'>
                                        <p className='text-lg font-semibold text-gray-800 dark:text-white'>Togeter</p>
                                        <p className='mt-1 text-gray-600 dark:text-gray-400'>Accusantium nemo perspiciatis delectus atque autem!</p>
                                    </div>
                                </div>
                            </div>
                            <div className='mt-4'>
                                <img src='/tap/mac.png' className='mx-auto h-80 w-full rounded-t-3xl  object-cover object-top dark:border-transparent sm:h-[28rem]' />
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
