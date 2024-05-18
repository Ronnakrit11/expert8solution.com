import Image from 'next/image'
import React from 'react'

const GridThreeGadient = () => {
    return (
        <div className='bg-white dark:bg-[#101726]'>
            <div className='container mx-auto'>
                <div className='relative py-32'>
                    <div aria-hidden="true" className="absolute inset-0 top-60 grid grid-cols-2 -space-x-52 opacity-50 dark:opacity-30">
                        <div className="h-60 bg-gradient-to-br from-purple-600 to-purple-400 blur-[106px] dark:from-blue-700"></div>
                        <div className="h-40 bg-gradient-to-r from-cyan-400 to-sky-300 blur-[106px] dark:to-indigo-600"></div>
                    </div>
                    <div className="relative mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
                        <div className="text-center">
                            <p className='text-3xl font-bold text-gray-800 dark:text-white md:text-4xl xl:text-5xl'>Pricing Plan</p>
                            <p className='mx-auto mt-6 text-gray-700 dark:text-gray-300 md:w-3/4 lg:w-3/5'>ทุก package ชำระค่าบริการเพียงครั้งเดียว ไม่มีค่าใช้จ่ายเพิ่มเติม</p>
                        </div>
                        <div className='mt-16 grid gap-8 sm:mx-auto sm:w-2/3 md:w-full md:grid-cols-2 lg:grid-cols-3'>
                            <div className='rounded-3xl border border-gray-100 bg-white p-8 py-12 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none sm:p-12'>
                                <div className='space-y-12 text-center' >
                                    <Image src="/i1.png" className="mx-auto h-14 w-auto" width="512" height="512" alt="burger illustration" />
                                    <div className='space-y-6'>
                                        <h3 className="text-2xl font-semibold text-gray-800 transition dark:text-white">Standard</h3>
                                        <div className='space-y-2'>
                                            <p className='text-5xl font-bold text-blue-600'>฿ 15,900</p>
                                            <p className='text-xl text-black dark:text-white'>จ่ายครั้งเดียว</p>
                                        </div>
                                        <ul className='text-gray-800 dark:text-gray-300 flex flex-col'>
                                            <li className='border-t border-b py-4'>ฟรีโดเมน , SSL ระบบป้องกันการเจาะเว็ปไซต์</li>
                                            <li className='border-b py-4'>ระบบการเรียนออนไลน์</li>
                                            <li className='border-b py-4'>ระบบหลังบ้าน</li>
                                            <li className='border-b py-4'>รองรับการเเสดงผลทุกอุปกรณ์</li>
                                        </ul>
                                        <a aria-label="read more" href="#" className="group relative mx-auto flex h-12 w-12 items-center justify-center before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:bg-gray-50 before:bg-gradient-to-b before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="relative h-5 w-5 text-gray-600 transition duration-300 group-hover:translate-x-1 dark:text-white">
                                                <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clip-rule="evenodd" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='rounded-3xl border border-gray-100 bg-gray-800  p-8 py-12 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-[#101726] dark:shadow-none sm:p-12'>
                                <div className='space-y-12 text-center' >
                                    <Image src="/i1.png" className="mx-auto h-14 w-auto" width="512" height="512" alt="burger illustration" />
                                    <div className='space-y-6'>
                                        <h3 className="text-2xl font-semibold text-white transition dark:text-white">Pro</h3>
                                        <div className='space-y-2'>
                                            <p className='text-5xl font-bold text-white'>฿ 27,900</p>
                                            <p className='text-xl text-white'>จ่ายครั้งเดียว</p>
                                        </div>
                                        <ul className='text-white dark:text-gray-300 flex flex-col justify-start'>
                                            <li className='border-t border-b py-4'>ฟรีโดเมน , SSL ระบบป้องกันการเจาะเว็ปไซต์</li>
                                            <li className='border-b py-4'>ระบบการเรียนออนไลน์</li>
                                            <li className='border-b py-4'>ระบบหลังบ้าน</li>
                                            <li className='border-b py-4'>รองรับการเเสดงผลทุกอุปกรณ์</li>
                                            <li className='border-b py-4'>ทำกราฟฟิก</li>
                                            <li className='border-b py-4'>ดูเเลเเละเทรนการยิงโฆษณาทุกช่องทาง</li>
                                            <li className='border-b py-4'>ตัดต่อวีดีโอให้ 1 คอร์ส</li>
                                            <li className='border-b py-4'>3 Months Free Support</li>
                                        </ul>
                                        <a aria-label="read more" href="#" className="group relative mx-auto flex h-12 w-12 items-center justify-center before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:bg-gray-50 before:bg-gradient-to-b before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="relative h-5 w-5 text-gray-600 transition duration-300 group-hover:translate-x-1 dark:text-white">
                                                <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clip-rule="evenodd"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='rounded-3xl border border-gray-100 bg-white p-8 py-12 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none sm:p-12'>
                                <div className='space-y-12 text-center' >
                                    <Image src="/i1.png" className="mx-auto h-14 w-auto" width="512" height="512" alt="burger illustration" />
                                    <div className='space-y-6'>
                                        <h3 className="text-2xl font-semibold text-gray-800 transition dark:text-white">Ultimate</h3>
                                        <div className='space-y-2'>
                                            <p className='text-5xl font-bold text-blue-600'>฿ 36,900</p>
                                            <p className='text-xl text-black dark:text-white'>จ่ายครั้งเดียว</p>
                                        </div>
                                        <ul className='text-gray-800 dark:text-gray-300 flex flex-col justify-start'>
                                            <li className='border-t border-b py-4'>ฟรีโดเมน , SSL ระบบป้องกันการเจาะเว็ปไซต์</li>
                                            <li className='border-b py-4'>ระบบการเรียนออนไลน์</li>
                                            <li className='border-b py-4'>ระบบหลังบ้าน</li>
                                            <li className='border-b py-4'>รองรับการเเสดงผลทุกอุปกรณ์</li>
                                            <li className='border-b py-4'>ทำกราฟฟิก</li>
                                            <li className='border-b py-4' >ดูเเลเเละเทรนการยิงโฆษณาทุกช่องทาง</li>
                                            <li className='border-b py-4' >ตัดต่อวีดีโอให้ 3 คอร์ส</li>
                                            <li className='border-b py-4'>12 Months Free Support</li>
                                        </ul>
                                        <a aria-label="read more" href="#" className="group relative mx-auto flex h-12 w-12 items-center justify-center before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:bg-gray-50 before:bg-gradient-to-b before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="relative h-5 w-5 text-gray-600 transition duration-300 group-hover:translate-x-1 dark:text-white">
                                                <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clip-rule="evenodd"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GridThreeGadient