import React from 'react'
import { FaCheck } from "react-icons/fa6";
import { FaX } from "react-icons/fa6";
import Image from 'next/image'

const ComparePlan = () => {
    return (
        <>
            <section className="mt-32">
                <div className="mx-auto px-4 sm:px-12 xl:max-w-5xl xl:px-0">
                    <h2 className="mb-12 text-center text-3xl font-bold text-gray-800 dark:text-white md:text-4xl hidden sm:hidden xl:block">Pricing Plan</h2>
                </div>
            </section>
             {/* 
            <section>
                <div className="mx-auto px-4 sm:px-12 xl:max-w-5xl xl:px-0">
                    <div className="hidden lg:block">
                        <table className="h-px w-full table-fixed">
                            <caption className="sr-only"> Pricing plan comparison </caption>
                            <thead>
                                <tr>
                                    <th className="w-1/4 px-6 pb-4 text-left text-sm font-medium text-gray-900" scope="col">
                                        <span className="sr-only">รายการที่จะได้</span>
                                    </th>
                                    <th className="w-1/4 px-6 pb-4 text-left text-lg font-medium leading-6 text-gray-900" scope="col"></th>
                                    <th className="w-1/4 px-6 pb-4 text-left text-lg font-medium leading-6 text-gray-900" scope="col"></th>
                                    <th className="w-1/4 px-6 pb-4 text-left text-lg font-medium leading-6 text-gray-900" scope="col"></th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 border-x border-b border-gray-200 dark:divide-gray-700 dark:border-gray-700 [&>*]:divide-x [&>*]:divide-gray-200 [&>*]:dark:divide-gray-700">
                                <tr>
                                    <th className="border-l border-white py-8 px-6 text-left align-top text-sm font-medium text-gray-900 dark:border-gray-900" scope="row"></th>
                                    <td className="h-full border-t py-12 px-6 align-top">
                                        <div className="relative table h-full space-y-8">
                                            <img src="https://tailus.io/sources/blocks/comparator/preview/images/team.webp" className="h-12 w-auto" alt="team icon" width="512" height="512" loading="lazy" />
                                            <div className="space-y-4">
                                                <h4 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">Standard Package</h4>
                                                <p className="text-sm text-gray-600 dark:text-gray-400">เหมาะสำหรับท่านที่มีกราฟฟิคและคอร์สการเรียนอยู่แล้ว</p>
                                            </div>
                                            <button className='bg-[#1565c0] py-2 px-4 text-white rounded-full text-[16px] w-full flex justify-center'>Send us Email to us</button>
                                        </div>
                                    </td>
                                    <td className="h-full border-t py-12 px-6 align-top bg-gray-50">
                                        <div className="relative table h-full space-y-8">
                                            <img src="https://tailus.io/sources/blocks/comparator/preview/images/team.webp" className="h-12 w-auto" alt="team icon" width="512" height="512" loading="lazy" />
                                            <div className="space-y-4">
                                                <h4 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">Pro Package</h4>
                                                <p className="text-sm text-gray-600 dark:text-gray-400">เหมาะสำหรับท่านที่ยังไม่มีกราฟฟิคและคอร์สการเรียนอยู่แล้ว</p>
                                            </div>
                                            <button className='bg-[#1565c0] py-2 px-4 text-white rounded-full text-[16px] w-full flex justify-center'>Send us Email to us</button>
                                        </div>
                                    </td>
                                    <td className="h-full border-t py-12 px-6 align-top bg-gray-50">
                                        <div className="relative table h-full space-y-8">
                                            <img src="https://tailus.io/sources/blocks/comparator/preview/images/team.webp" className="h-12 w-auto" alt="team icon" width="512" height="512" loading="lazy" />
                                            <div className="space-y-4">
                                                <h4 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">Ultimate Package</h4>
                                                <p className="text-sm text-gray-600 dark:text-gray-400">เหมาะสำหรับท่านที่ยังไม่มีกราฟฟิคและคอร์สการเรียนอยู่แล้ว</p>
                                            </div>
                                            <button className='bg-[#1565c0] py-2 px-4 text-white rounded-full text-[16px] w-full flex justify-center'>Send us Email to us</button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th className="bg-gray-50 py-3 pl-6 text-left text-sm font-medium text-gray-900 dark:bg-gray-800 dark:text-white" scope="colgroup">
                                        รายการที่จะได้
                                    </th>
                                </tr>
                                <tr>
                                    <th className="py-5 px-6 text-left text-sm font-normal text-gray-600 dark:text-gray-400" scope="row">
                                        ฟรีโดเมน , SSL ระบบป้องกันการเจาะเว็ปไซต์
                                    </th>
                                    <td className="py-5 px-6">
                                        <p className='flex justify-center text-center font-bold text-[20px] text-green-600'><FaCheck /></p>
                                    </td>
                                    <td className="py-5 px-6 bg-gray-50">
                                        <p className='flex justify-center text-center font-bold text-[20px] text-green-600'><FaCheck /></p>
                                    </td>
                                    <td className="bg-gray-100 py-5 px-6 dark:bg-gray-800">
                                        <p className='flex justify-center text-center font-bold text-[20px] text-green-600'><FaCheck /></p>
                                    </td>
                                </tr>
                                <tr>
                                    <th className="py-5 px-6 text-left text-sm font-normal text-gray-600 dark:text-gray-400" scope="row">
                                        ระบบการเรียนออนไลน์
                                    </th>
                                    <td className="py-5 px-6">
                                        <p className='flex justify-center text-center font-bold text-[20px] text-green-600'><FaCheck /></p>
                                    </td>
                                    <td className="py-5 px-6 bg-gray-50">
                                        <p className='flex  justify-center text-center font-bold text-[20px] text-green-600'><FaCheck /></p>
                                    </td>
                                    <td className="bg-gray-100 py-5 px-6 dark:bg-gray-800">
                                        <p className='flex justify-center text-center font-bold text-[20px] text-green-600'><FaCheck /></p>
                                    </td>
                                </tr>
                                <tr>
                                    <th className="py-5 px-6 text-left text-sm font-normal text-gray-600 dark:text-gray-400" scope="row">
                                        ระบบหลังบ้าน
                                    </th>
                                    <td className="py-5 px-6">
                                        <p className='flex justify-center text-center font-bold text-[20px] text-green-600'><FaCheck /></p>

                                    </td>
                                    <td className="py-5 px-6 bg-gray-50">
                                        <p className='flex justify-center  text-center font-bold text-[20px] text-green-600'><FaCheck /></p>
                                    </td>
                                    <td className="bg-gray-100 py-5 px-6 dark:bg-gray-800">
                                        <p className='flex justify-center text-center font-bold text-[20px] text-green-600'><FaCheck /></p>
                                    </td>
                                </tr>
                                <tr>
                                    <th className="py-5 px-6 text-left text-sm font-normal text-gray-600 dark:text-gray-400" scope="row">
                                        รองรับการเเสดงผลทุกอุปกรณ์
                                    </th>
                                    <td className="py-5 px-6">
                                        <p className='flex justify-center text-center font-bold text-[20px] text-green-600'><FaCheck /></p>
                                    </td>
                                    <td className="py-5 px-6 bg-gray-50">
                                        <p className='flex justify-center  text-center font-bold text-[20px] text-green-600'><FaCheck /></p>
                                    </td>
                                    <td className="bg-gray-100 py-5 px-6 dark:bg-gray-800">
                                        <p className='flex justify-center text-center font-bold text-[20px] text-green-600'><FaCheck /></p>
                                    </td>
                                </tr>
                                <tr>
                                    <th className="py-5 px-6 text-left text-sm font-normal text-gray-600 dark:text-gray-400" scope="row">
                                        ทำกราฟฟิก
                                    </th>
                                    <td className="py-5 px-6">
                                        <p className='flex justify-center text-center font-bold text-[20px] text-red-600'><FaX /></p>
                                    </td>
                                    <td className="py-5 px-6 bg-gray-50">
                                        <p className='flex justify-center  text-center font-bold text-[20px] text-green-600'><FaCheck /></p>
                                    </td>
                                    <td className="bg-gray-100 py-5 px-6 dark:bg-gray-800">
                                        <p className='flex justify-center text-center font-bold text-[20px] text-green-600'><FaCheck /></p>
                                    </td>
                                </tr>
                                <tr>
                                    <th className="py-5 px-6 text-left text-sm font-normal text-gray-600 dark:text-gray-400" scope="row">
                                        ดูเเลเเละเทรนการยิงโฆษณา
                                    </th>
                                    <td className="py-5 px-6 ">
                                        <p className='flex justify-center text-center font-bold text-[20px] text-red-600'><FaX /></p>
                                    </td>
                                    <td className="py-5 px-6 bg-gray-50">
                                        <p className='flex justify-center  text-center font-bold text-[20px] text-green-600'><FaCheck /></p>
                                    </td>
                                    <td className="bg-gray-100 py-5 px-6 dark:bg-gray-800">
                                        <p className='flex justify-center text-center font-bold text-[20px] text-green-600'><FaCheck /></p>
                                    </td>
                                </tr>
                                <tr>
                                    <th className="py-5 px-6 text-left text-sm font-normal text-gray-600 dark:text-gray-400" scope="row">
                                        ตัดต่อวีดีโอ
                                    </th>
                                    <td className="py-5 px-6">
                                        <p className='flex justify-center text-center font-bold text-[20px] text-red-600'><FaX /></p>
                                    </td>
                                    <td className="bg-gray-50 py-5 px-6 dark:bg-gray-800">
                                        <p className='text-center font-bold text-[20px] text-green-600'>1 คอร์ส</p>
                                    </td>
                                    <td className="bg-gray-100 py-5 px-6 dark:bg-gray-800">
                                        <p className='text-center font-bold text-[20px] text-green-600'>3 คอร์ส</p>
                                    </td>
                                </tr>
                                <tr>
                                    <th className="py-5 px-6 text-left text-sm font-normal text-gray-600 dark:text-gray-400" scope="row">
                                        Free Support
                                    </th>
                                    <td className="py-5 px-6">
                                        <p className='flex justify-center text-center font-bold text-[20px] text-red-600'><FaX /></p>
                                    </td>
                                    <td className="bg-gray-50 py-5 px-6 dark:bg-gray-800">
                                        <p className='text-center font-bold text-[20px] text-green-600'>3 เดือน</p>
                                    </td>
                                    <td className="bg-gray-100 py-5 px-6 dark:bg-gray-800">
                                        <p className='text-center font-bold text-[20px] text-green-600'>12 เดือน</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='bg-white dark:bg-[#101726] block sm:block xl:hidden'>
                    <div className='container mx-auto'>
                        <div className='relative py-32'>
                            <div aria-hidden="true" className="absolute inset-0 top-60 grid grid-cols-2 -space-x-52 opacity-50 dark:opacity-30">
                                <div className="h-60 bg-gradient-to-br from-purple-600 to-purple-400 blur-[106px] dark:from-blue-700"></div>
                                <div className="h-40 bg-gradient-to-r from-cyan-400 to-sky-300 blur-[106px] dark:to-indigo-600"></div>
                            </div>
                            <div className="relative mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
                                <div className="text-center">
                                    <p className='text-3xl font-bold text-gray-800 dark:text-white md:text-4xl xl:text-5xl '>Pricing Plan</p>
                                    <p className='mx-auto mt-6 text-gray-700 dark:text-gray-300 md:w-3/4 lg:w-3/5'>ทุก packageรองรับจำนวน Traffic ไม่จำกัด</p>
                                </div>
                                <div className='mt-16 grid gap-8 sm:mx-auto sm:w-2/3 md:w-full md:grid-cols-2 lg:grid-cols-3'>
                                    <div className='rounded-3xl border border-gray-100 bg-white p-8 py-12 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none sm:p-12'>
                                        <div className='space-y-12 text-center' >
                                            <Image src="/i1.png" className="mx-auto h-14 w-auto" width="512" height="512" alt="burger illustration" />
                                            <div className='space-y-6'>
                                                <h3 className="text-2xl font-semibold text-gray-800 transition dark:text-white">Standard</h3>
                                                <div className='space-y-2'>
                                                    <p className='text-5xl font-bold text-blue-600'>฿ 15,900</p>
                                                    <p className='text-xl text-black dark:text-white'>ปีเเรก</p>
                                                </div>
                                                <ul className='text-gray-800 dark:text-gray-300 flex flex-col'>
                                                    <li className='border-t border-b py-4 dark:border-gray-700'>ฟรีโดเมน , SSL </li>
                                                    <li className='border-b py-4 dark:border-gray-700'>ระบบการเรียนออนไลน์</li>
                                                    <li className='border-b py-4 dark:border-gray-700'>ระบบหลังบ้าน</li>
                                                    <li className='border-b py-4 dark:border-gray-700'>รองรับการเเสดงผลทุกอุปกรณ์</li>
                                                    <li className='border-b py-4 dark:border-gray-700'> Free 10GB Video Hosting</li>

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
                                                    <p className='text-5xl font-bold text-white'>฿ 32,900</p>
                                                    <p className='text-xl text-white'>ปีเเรก</p>
                                                </div>
                                                <ul className='text-white dark:text-gray-300  flex flex-col justify-start'>
                                                    <li className='border-t border-b border-gray-700 py-4'>ฟรีโดเมน , SSL </li>
                                                    <li className='border-b py-4 border-gray-700'>ระบบการเรียนออนไลน์</li>
                                                    <li className='border-b py-4 border-gray-700'>ระบบหลังบ้าน</li>
                                                    <li className='border-b py-4 border-gray-700'>ระบบบทความ</li>

                                                    <li className='border-b py-4 border-gray-700'>รองรับการเเสดงผลทุกอุปกรณ์</li>
                                                    <li className='border-b py-4 border-gray-700'>ระบบจ่ายเงินด้วยบัตรเครดิต เดบิต เเละผ่อนชำระ</li>
                                                    <li className='border-b py-4 border-gray-700'>ดูเเลเเละเทรนการยิงโฆษณาทุกช่องทาง</li>
                                                    <li className='border-b py-4 border-gray-700'>ติดตั้ง Google Analytic</li>
                                                    <li className='border-b py-4 border-gray-700'>ติดตั้ง Google Seach console</li>
                                                    <li className='border-b py-4 border-gray-700'>SEO 1 Keywords</li>
                                                    <li className='border-b py-4 border-gray-700'>ติดตั้ง Facebook Pixel</li>
                                                    <li className='border-b py-4 dark:border-gray-700'> Free 80GB Video Hosting</li>





                                             
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
                                                    <p className='text-5xl font-bold text-blue-600'>฿ 59,900</p>
                                                    <p className='text-xl text-black dark:text-white'>ปีเเรก</p>
                                                </div>
                                                <ul className='text-gray-800 dark:text-gray-300 flex flex-col justify-start'>
                                                    <li className='border-t border-b py-4 dark:border-gray-700'>ฟรีโดเมน , SSL </li>
                                                    <li className='border-b py-4 dark:border-gray-700'>Design ใหม่ทุกจุด Custom ได้ทั้งหมด</li>
                                                    <li className='border-b py-4 dark:border-gray-700'>ระบบติวเตอร์ เเละคอมมิชชั่น</li>
                                                    <li className='border-b py-4 dark:border-gray-700'>ระบบแบบทดสอบ Pre-test/Post-test</li>
                                                    <li className='border-b py-4 dark:border-gray-700'>ระบบ Report</li>
                                                    <li className='border-b py-4 dark:border-gray-700'>ระบบขาย E-Book</li>
                                                    <li className='border-b py-4 border-gray-700'>ระบบจ่ายเงินด้วยบัตรเครดิต เดบิต เเละผ่อนชำระ</li>
                                                    <li className='border-b py-4 dark:border-gray-700'>รองรับนักเรียนไม่จำกัด ระบบไม่ช้าไม่ล่ม</li>


                                                    <li className='border-b py-4 dark:border-gray-700'>ระบบการเรียนออนไลน์</li>
                                                    <li className='border-b py-4 dark:border-gray-700'>ระบบหลังบ้าน</li>
                                                    <li className='border-b py-4 border-gray-700'>ระบบบทความ</li>

                                                    <li className='border-b py-4 dark:border-gray-700'>รองรับการเเสดงผลทุกอุปกรณ์</li>
                                                    <li className='border-b py-4 dark:border-gray-700'>ทำกราฟฟิก</li>
                                                    <li className='border-b py-4 dark:border-gray-700' >ดูเเลเเละเทรนการยิงโฆษณาทุกช่องทาง</li>
                                                    <li className='border-b py-4 border-gray-700'>ติดตั้ง Google Analytic</li>
                                                    <li className='border-b py-4 border-gray-700'>ติดตั้ง Google Seach console</li>
                                                    <li className='border-b py-4 border-gray-700'>SEO 3 Keywords</li>
                                                    <li className='border-b py-4 border-gray-700'>ติดตั้ง Facebook Pixel</li>
                                                    <li className='border-b py-4 dark:border-gray-700'> Free 500GB Video Hosting</li>




                                                    
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
            </section>
            */}
        </>

    )
}

export default ComparePlan