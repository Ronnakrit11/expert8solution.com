import Image from 'next/image'
import React from 'react'

const Feature = () => {
    return (
        <section className='py-32 bg-white dark:bg-[#101726]'>
            <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-800 dark:text-white md:text-4xl xl:text-5xl">ทำเว็ปไซต์เรียนออนไลน์กับเราดียังไง</h2>
                    <h3 className="mx-auto mt-6 text-gray-700 dark:text-gray-300 md:w-3/4 lg:w-3/5">เราเข้าใจความต้องการของคุณ รวมถึงความต้องการของนักเรียนคุณดี</h3>
                </div>
                <div className="mt-12 grid divide-x divide-y divide-gray-100 overflow-hidden rounded-3xl border border-gray-100 dar-k:divide-gray-700 dark:border-gray-700 sm:grid-cols-2 lg:grid-cols-3 lg:divide-y-0">
                    <div className="group relative bg-white transition-shadow hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10 dark:bg-gray-800">
                        <div className="relative space-y-8 p-8 py-12">
                            <Image src="/feature3.png" loading="lazy" className="w-12" width="512" height="512" alt="burger illustration" />
                            <div className="space-y-2">
                                <h3 className="text-2xl font-semibold text-gray-700 transition group-hover:text-primary dark:text-white dark:group-hover:text-primaryLight">เขียนด้วย Next-Js Framework</h3>
                                <p className="text-gray-600 dark:text-gray-400">เป็นภาษาโปรเเกรมมิ่งที่ดีที่สุด หมดกังวลเรื่องเว็บไซต์โหลดช้า ไม่เสถียร เเละรองรับจำนวนนักเรียนเข้าพร้อมกันไม่จำกัด</p>
                            </div>
                            <a href="#" className="flex items-center justify-between text-gray-500 group-hover:text-primary dark:text-gray-400 dark:group-hover:text-primaryLight">
                                <span className="text-sm">Read more</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                                    <path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clip-rule="evenodd"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="group relative bg-white transition-shadow hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10 dark:bg-gray-800">
                        <div className="relative space-y-8 p-8 py-12">
                            <Image src="/feature1.png" loading="lazy" className="w-12" width="512" height="512" alt="burger illustration" />                                <div className="space-y-2">
                                <div className="space-y-2">
                                    <h3 className="text-2xl font-semibold text-gray-700 transition group-hover:text-primary dark:text-white dark:group-hover:text-primaryLight">ระบบป้องกันที่เเน่นหนา</h3>
                                    <p className="text-gray-600 dark:text-gray-400">มีระบบป้องกันการดาวน์โหลด VDO เเละระบบป้องกันการเจาะระบบ</p>
                                </div>
                                <a href="#" className="flex items-center justify-between text-gray-500 group-hover:text-primary dark:text-gray-400 dark:group-hover:text-primaryLight">
                                    <span className="text-sm">Read more</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                                        <path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clip-rule="evenodd"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="group relative bg-white transition-shadow hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10 dark:bg-gray-800">
                        <div className="relative space-y-8 p-8 py-12">
                            <Image src="/feature2.png" loading="lazy" className="w-12" width="512" height="512" alt="burger illustration" />                                <div className="space-y-2">
                                <h3 className="text-2xl font-semibold text-gray-700 transition group-hover:text-primary dark:text-white dark:group-hover:text-primaryLight">ระบบทำด้วยการเขียนโค้ดทั้งหมด</h3>
                                <p className="text-gray-600 dark:text-gray-400">เราไม่ใช้ wordpress หรือเว็ปสำเร็จรูปในการทำ</p>
                            </div>
                            <a href="#" className="flex items-center justify-between text-gray-500 group-hover:text-primary dark:text-gray-400 dark:group-hover:text-primaryLight">
                                <span className="text-sm">Read more</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                                    <path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clip-rule="evenodd"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Feature