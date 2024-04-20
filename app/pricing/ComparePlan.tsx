import React from 'react'

const ComparePlan = () => {
    return (
        <>
            <section className="mt-32">
                <div className="mx-auto px-4 sm:px-12 xl:max-w-5xl xl:px-0">
                    <h2 className="mb-12 text-center text-3xl font-bold text-gray-800 dark:text-white md:text-4xl">Compare plans</h2>
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
                                        <span className="sr-only">Feature by</span>
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
                                                <h4 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">Team</h4>
                                                <p className="text-sm text-gray-600 dark:text-gray-400">Delectus natus illum vel veritatis in, iste ut facilis ex sit culpa fuga dolor atque? Quis.</p>
                                            </div>
                                            <button className='bg-[#1565c0] py-2 px-4 text-white rounded-full text-[16px] w-full flex justify-center'>Send us Email to us</button>
                                        </div>
                                    </td>
                                    <td className="h-full border-t py-12 px-6 align-top bg-gray-50">
                                        <div className="relative table h-full space-y-8">
                                            <img src="https://tailus.io/sources/blocks/comparator/preview/images/team.webp" className="h-12 w-auto" alt="team icon" width="512" height="512" loading="lazy" />
                                            <div className="space-y-4">
                                                <h4 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">Team</h4>
                                                <p className="text-sm text-gray-600 dark:text-gray-400">Delectus natus illum vel veritatis in, iste ut facilis ex sit culpa fuga dolor atque? Quis.</p>
                                            </div>
                                            <button className='bg-[#1565c0] py-2 px-4 text-white rounded-full text-[16px] w-full flex justify-center'>Send us Email to us</button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th className="bg-gray-50 py-3 pl-6 text-left text-sm font-medium text-gray-900 dark:bg-gray-800 dark:text-white" scope="colgroup">Features</th>
                                </tr>
                                <tr>
                                    <th className="py-5 px-6 text-left text-sm font-normal text-gray-600 dark:text-gray-400" scope="row">Feature 1</th>
                                    <td className="py-5 px-6">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mx-auto h-6 w-6 text-secondary dark:text-secondaryLight">
                                            <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd"></path>
                                        </svg>
                                        <span className="sr-only">Included in Essential</span>
                                    </td>
                                    <td className="bg-gray-50 py-5 px-6 dark:bg-gray-800">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mx-auto h-6 w-6 text-primary dark:text-primaryLight">
                                            <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd"></path>
                                        </svg>
                                        <span className="sr-only">Included in Premium</span>
                                    </td>
                                </tr>
                                <tr>
                                    <th className="py-5 px-6 text-left text-sm font-normal text-gray-600 dark:text-gray-400" scope="row">Feature 1</th>
                                    <td className="py-5 px-6">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mx-auto h-6 w-6 text-secondary dark:text-secondaryLight">
                                            <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd"></path>
                                        </svg>
                                        <span className="sr-only">Included in Essential</span>
                                    </td>
                                    <td className="bg-gray-50 py-5 px-6 dark:bg-gray-800">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mx-auto h-6 w-6 text-primary dark:text-primaryLight">
                                            <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd"></path>
                                        </svg>
                                        <span className="sr-only">Included in Premium</span>
                                    </td>
                                </tr>
                                <tr>
                                    <th className="py-5 px-6 text-left text-sm font-normal text-gray-600 dark:text-gray-400" scope="row">Feature 1</th>
                                    <td className="py-5 px-6">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mx-auto h-6 w-6 text-secondary dark:text-secondaryLight">
                                            <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd"></path>
                                        </svg>
                                        <span className="sr-only">Included in Essential</span>
                                    </td>
                                    <td className="bg-gray-50 py-5 px-6 dark:bg-gray-800">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mx-auto h-6 w-6 text-primary dark:text-primaryLight">
                                            <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd"></path>
                                        </svg>
                                        <span className="sr-only">Included in Premium</span>
                                    </td>
                                </tr>
                                <tr>
                                    <th className="py-5 px-6 text-left text-sm font-normal text-gray-600 dark:text-gray-400" scope="row">Feature new and great	</th>
                                    <td className="py-5 px-6">
                                        <p className='text-center'>Up to 20 users</p>
                                        <span className="sr-only">Included in Essential</span>
                                    </td>
                                    <td className="bg-gray-50 py-5 px-6 dark:bg-gray-800">
                                        <p className='text-center'>Up to 50 users</p>
                                        <span className="sr-only">Included in Premium</span>
                                    </td>
                                </tr>
                                <tr>
                                    <th className="bg-gray-50 py-3 pl-6 text-left text-sm font-medium text-gray-900 dark:bg-gray-800 dark:text-white" scope="colgroup">Features</th>
                                </tr>
                                <tr>
                                    <th className="py-5 px-6 text-left text-sm font-normal text-gray-600 dark:text-gray-400" scope="row">Feature 1</th>
                                    <td className="py-5 px-6">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mx-auto h-6 w-6 text-secondary dark:text-secondaryLight">
                                            <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd"></path>
                                        </svg>
                                        <span className="sr-only">Included in Essential</span>
                                    </td>
                                    <td className="bg-gray-50 py-5 px-6 dark:bg-gray-800">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mx-auto h-6 w-6 text-primary dark:text-primaryLight">
                                            <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd"></path>
                                        </svg>
                                        <span className="sr-only">Included in Premium</span>
                                    </td>
                                </tr>
                                <tr>
                                    <th className="py-5 px-6 text-left text-sm font-normal text-gray-600 dark:text-gray-400" scope="row">Feature 1</th>
                                    <td className="py-5 px-6">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mx-auto h-6 w-6 text-secondary dark:text-secondaryLight">
                                            <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd"></path>
                                        </svg>
                                        <span className="sr-only">Included in Essential</span>
                                    </td>
                                    <td className="bg-gray-50 py-5 px-6 dark:bg-gray-800">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mx-auto h-6 w-6 text-primary dark:text-primaryLight">
                                            <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd"></path>
                                        </svg>
                                        <span className="sr-only">Included in Premium</span>
                                    </td>
                                </tr>
                                <tr>
                                    <th className="py-5 px-6 text-left text-sm font-normal text-gray-600 dark:text-gray-400" scope="row">Feature 1</th>
                                    <td className="py-5 px-6">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mx-auto h-6 w-6 text-secondary dark:text-secondaryLight">
                                            <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd"></path>
                                        </svg>
                                        <span className="sr-only">Included in Essential</span>
                                    </td>
                                    <td className="bg-gray-50 py-5 px-6 dark:bg-gray-800">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mx-auto h-6 w-6 text-primary dark:text-primaryLight">
                                            <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd"></path>
                                        </svg>
                                        <span className="sr-only">Included in Premium</span>
                                    </td>
                                </tr>
                                <tr>
                                    <th className="py-5 px-6 text-left text-sm font-normal text-gray-600 dark:text-gray-400" scope="row">Feature new and great	</th>
                                    <td className="py-5 px-6">
                                        <p className='text-center'>Up to 20 users</p>
                                        <span className="sr-only">Included in Essential</span>
                                    </td>
                                    <td className="bg-gray-50 py-5 px-6 dark:bg-gray-800">
                                        <p className='text-center'>Up to 50 users</p>
                                        <span className="sr-only">Included in Premium</span>
                                    </td>
                                </tr>
                                <tr>
                                    <th className="bg-gray-50 py-3 pl-6 text-left text-sm font-medium text-gray-900 dark:bg-gray-800 dark:text-white" scope="colgroup">Features</th>
                                </tr>
                                <tr>
                                    <th className="py-5 px-6 text-left text-sm font-normal text-gray-600 dark:text-gray-400" scope="row">Feature 1</th>
                                    <td className="py-5 px-6">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mx-auto h-6 w-6 text-secondary dark:text-secondaryLight">
                                            <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd"></path>
                                        </svg>
                                        <span className="sr-only">Included in Essential</span>
                                    </td>
                                    <td className="bg-gray-50 py-5 px-6 dark:bg-gray-800">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mx-auto h-6 w-6 text-primary dark:text-primaryLight">
                                            <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd"></path>
                                        </svg>
                                        <span className="sr-only">Included in Premium</span>
                                    </td>
                                </tr>
                                <tr>
                                    <th className="py-5 px-6 text-left text-sm font-normal text-gray-600 dark:text-gray-400" scope="row">Feature 1</th>
                                    <td className="py-5 px-6">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mx-auto h-6 w-6 text-secondary dark:text-secondaryLight">
                                            <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd"></path>
                                        </svg>
                                        <span className="sr-only">Included in Essential</span>
                                    </td>
                                    <td className="bg-gray-50 py-5 px-6 dark:bg-gray-800">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mx-auto h-6 w-6 text-primary dark:text-primaryLight">
                                            <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd"></path>
                                        </svg>
                                        <span className="sr-only">Included in Premium</span>
                                    </td>
                                </tr>
                                <tr>
                                    <th className="py-5 px-6 text-left text-sm font-normal text-gray-600 dark:text-gray-400" scope="row">Feature 1</th>
                                    <td className="py-5 px-6">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mx-auto h-6 w-6 text-secondary dark:text-secondaryLight">
                                            <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd"></path>
                                        </svg>
                                        <span className="sr-only">Included in Essential</span>
                                    </td>
                                    <td className="bg-gray-50 py-5 px-6 dark:bg-gray-800">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mx-auto h-6 w-6 text-primary dark:text-primaryLight">
                                            <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd"></path>
                                        </svg>
                                        <span className="sr-only">Included in Premium</span>
                                    </td>
                                </tr>
                                <tr>
                                    <th className="py-5 px-6 text-left text-sm font-normal text-gray-600 dark:text-gray-400" scope="row">Feature new and great	</th>
                                    <td className="py-5 px-6">
                                        <p className='text-center'>Up to 20 users</p>
                                        <span className="sr-only">Included in Essential</span>
                                    </td>
                                    <td className="bg-gray-50 py-5 px-6 dark:bg-gray-800">
                                        <p className='text-center'>Up to 50 users</p>
                                        <span className="sr-only">Included in Premium</span>
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