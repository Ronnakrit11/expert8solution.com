import React from 'react'

const ComparePlan = () => {
    return (
        <>
            <section className="mt-32">
                <div className="mx-auto px-4 sm:px-12 xl:max-w-5xl xl:px-0">
                    <h2 className="mb-12 text-center text-3xl font-bold text-gray-800 dark:text-white md:text-4xl">Pricing Plan</h2>
                </div>
            </section>
            <section>
                <div className="mx-auto px-4 sm:px-12 xl:max-w-5xl xl:px-0">
                    <div className="hidden lg:block">
                        <table className="h-px w-full table-fixed">
                            <caption className="sr-only"> Pricing plan comparison </caption>
                            <thead>
                                <tr>
                                    <th className="w-1/3 px-6 pb-4 text-left text-sm font-medium text-gray-900" scope="col">
                                        <span className="sr-only">รายการที่จะได้</span>
                                    </th>
                                    <th className="w-1/3 px-6 pb-4 text-left text-lg font-medium leading-6 text-gray-900" scope="col"></th>
                                    <th className="w-1/3 px-6 pb-4 text-left text-lg font-medium leading-6 text-gray-900" scope="col"></th>
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
                                                <p className="text-sm text-gray-600 dark:text-gray-400">Delectus natus illum vel veritatis in, iste ut facilis ex sit culpa fuga dolor atque? Quis.</p>
                                            </div>
                                            <button className='bg-[#1565c0] py-2 px-4 text-white rounded-full text-[16px] w-full flex justify-center'>Send us Email to us</button>
                                        </div>
                                    </td>
                                    <td className="h-full border-t py-12 px-6 align-top bg-gray-50">
                                        <div className="relative table h-full space-y-8">
                                            <img src="https://tailus.io/sources/blocks/comparator/preview/images/team.webp" className="h-12 w-auto" alt="team icon" width="512" height="512" loading="lazy" />
                                            <div className="space-y-4">
                                                <h4 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">Pro Package</h4>
                                                <p className="text-sm text-gray-600 dark:text-gray-400">Delectus natus illum vel veritatis in, iste ut facilis ex sit culpa fuga dolor atque? Quis.</p>
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
                                        <p className='text-center font-bold text-[20px] text-green-600'>✓</p>
                                    </td>
                                    <td className="bg-gray-50 py-5 px-6 dark:bg-gray-800">
                                        <p className='text-center font-bold text-[20px] text-green-600'>✓</p>
                                    </td>
                                </tr>
                                <tr>
                                    <th className="py-5 px-6 text-left text-sm font-normal text-gray-600 dark:text-gray-400" scope="row">
                                        ระบบการเรียนออนไลน์
                                    </th>
                                    <td className="py-5 px-6">
                                        <p className='text-center font-bold text-[20px] text-green-600'>✓</p>

                                    </td>
                                    <td className="bg-gray-50 py-5 px-6 dark:bg-gray-800">
                                        <p className='text-center font-bold text-[20px] text-green-600'>✓</p>

                                    </td>
                                </tr>
                                <tr>
                                    <th className="py-5 px-6 text-left text-sm font-normal text-gray-600 dark:text-gray-400" scope="row">
                                        ระบบหลังบ้าน
                                    </th>
                                    <td className="py-5 px-6">
                                        <p className='text-center font-bold text-[20px] text-green-600'>✓</p>

                                    </td>
                                    <td className="bg-gray-50 py-5 px-6 dark:bg-gray-800">
                                        <p className='text-center font-bold text-[20px] text-green-600'>✓</p>

                                    </td>
                                </tr>
                                <tr>
                                    <th className="py-5 px-6 text-left text-sm font-normal text-gray-600 dark:text-gray-400" scope="row">
                                        รองรับการเเสดงผลทุกอุปกรณ์
                                    </th>
                                    <td className="py-5 px-6">
                                        <p className='text-center font-bold text-[20px] text-green-600'>✓</p>

                                    </td>
                                    <td className="bg-gray-50 py-5 px-6 dark:bg-gray-800">
                                        <p className='text-center font-bold text-[20px] text-green-600'>✓</p>
                                    </td>
                                </tr>
                                <tr>
                                    <th className="py-5 px-6 text-left text-sm font-normal text-gray-600 dark:text-gray-400" scope="row">
                                        ทำกราฟฟิก
                                    </th>
                                    <td className="py-5 px-6">
                                        <p className='text-center font-bold text-[20px] text-red-600'>✗</p>
                                    </td>
                                    <td className="bg-gray-50 py-5 px-6 dark:bg-gray-800">
                                        <p className='text-center font-bold text-[20px] text-green-600'>✓</p>
                                    </td>
                                </tr>
                                <tr>
                                    <th className="py-5 px-6 text-left text-sm font-normal text-gray-600 dark:text-gray-400" scope="row">
                                        ดูเเลเเละเทรนการยิงโฆษณา
                                    </th>
                                    <td className="py-5 px-6">
                                        <p className='text-center font-bold text-[20px] text-red-600'>✗</p>
                                    </td>
                                    <td className="bg-gray-50 py-5 px-6 dark:bg-gray-800">
                                        <p className='text-center font-bold text-[20px] text-green-600'>✓</p>
                                    </td>
                                </tr>
                                <tr>
                                    <th className="py-5 px-6 text-left text-sm font-normal text-gray-600 dark:text-gray-400" scope="row">
                                        ตัดต่อวีดีโอ
                                    </th>
                                    <td className="py-5 px-6">
                                        <p className='text-center font-bold text-[20px] text-red-600'>✗</p>
                                    </td>
                                    <td className="bg-gray-50 py-5 px-6 dark:bg-gray-800">
                                        <p className='text-center font-bold text-[20px] text-green-600'>1 คอร์ส</p>
                                    </td>
                                </tr>
                                <tr>
                                    <th className="py-5 px-6 text-left text-sm font-normal text-gray-600 dark:text-gray-400" scope="row">
                                        Free Support
                                    </th>
                                    <td className="py-5 px-6">
                                        <p className='text-center font-bold text-[20px] text-red-600'>✗</p>
                                    </td>
                                    <td className="bg-gray-50 py-5 px-6 dark:bg-gray-800">
                                        <p className='text-center font-bold text-[20px] text-green-600'>3 เดือน</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>

    )
}

export default ComparePlan