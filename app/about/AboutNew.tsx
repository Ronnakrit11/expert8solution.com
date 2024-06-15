import React from 'react'

import { FaCheckCircle } from 'react-icons/fa'

const AboutNew = () => {
  return (
    <>
      <div className="bg-white dark:bg-darkbg">
        <div className="container mx-auto px-4">
          <div className="flex flex-col justify-center items-center space-y-4 py-20 sm:py-20 lg:py-60">
            <div className="bg-secondary px-4 py-2 rounded-full">
              <p className="text-white text-[16px]">About Us</p>
            </div>
            <p className="text-[48px] text-center text-header dark:text-white">
              บริษัทเอ็กซ์เพิร์ท เอท โซลูชั่น จำกัด
            </p>
            <p className="text-lolem text-center">
              วัตถุประสงค์ของเราให้บริการในการพัฒนาโปรแกรมคอมพิวเตอร์และแอพพลิเคชั่น
              ทั้งในส่วนของซอฟต์แวร์และฮาร์ดแวร์
              <br /> โดยเน้นไปที่การเขียนโปรแกรมเป็นหลัก
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#101828] dark:bg-darkbg py-20 px-4">
        <div className="container mx-auto">
          <div className="mb-8">
            <p className="text-[48px] text-white font-bold">Our mission</p>
            <p className="text-[16px] text-[#7f848c] w-auto sm:w-auto lg:w-[700px]">
              บริษัท แน็คซ์ คอร์ปอเรชั่น จำกัด เป็นบริษัทก่อตั้งขึ้นในปี พ.ศ. 2561 บริษัท start up
              สำหรับคนรุ่นใหม่ โดยมุ่งเน้นในเรื่องการเขียนโปรแกรมและพัฒนา software
              เพื่อให้ลูกค้าได้ประโยชน์จากการใช้งานได้สูงสุดเราเปลี่ยนไอเดียของลูกค้าให้เป็นธุรกิจ
              หรือโปรแกรมที่ใช้งานได้จริงขับเคลื่อนเติบโตไปพร้อมกับลูกค้าอย่างมืออาชีพ
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-green-400" />
                <p className="text-[16px] text-white">
                  เรามีลูกค้าที่ไว้วางใจเราทั้งภาครัฐและเอกชน
                </p>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-green-400" />
                <p className="text-[16px] text-white">เปลี่ยนไอเดียของลูกค้าเป็นธุรกิจ</p>
              </div>
              <button className="text-[16px] text-white bg-primary rounded-3xl py-2 px-4">
                สอบถามบริการ
              </button>
            </div>
            <div>
              <img src="https://www.knacx.com/wp-content/uploads/2024/01/corporate-chart.webp" />
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 py-10 bg-white dark:bg-darkbg">
        <p className="text-[28px] sm:text-[28px] md:text-[48px] font-bold text-center dark:text-white">
          Our story & achievements
        </p>
        <div className="container mx-auto">
          <div className="relative py-32 before:absolute before:inset-0 before:mx-auto before:h-full before:w-px after:absolute after:inset-0 after:h-32 after:w-px after:bg-gradient-to-t after:from-gray-900/20 after:via-gray-200 after:before:to-gray-900 dark:after:from-white/20 dark:after:via-gray-800 lg:before:bg-gray-200 lg:after:mx-auto lg:after:bg-gradient-to-b lg:dark:before:bg-gray-900">
            <div className="relative flex flex-col items-center gap-10 py-12 pl-6 after:absolute after:inset-0 after:h-full after:w-px after:border-r after:border-dashed after:border-gray-400/70 dark:after:border-gray-700 sm:pl-12 md:flex-row md:py-20 lg:pl-0 lg:after:left-[9.1rem]">
              <div className="flex w-full flex-col gap-10 md:w-1/2 lg:flex-row lg:items-center">
                <div className="hidden w-max md:block">
                  <div className="flex h-24 w-24 rounded-full border border-gray-200 bg-white p-4 shadow-xl shadow-gray-600/10 dark:border-gray-800 dark:bg-gray-900 dark:shadow-none">
                    <svg
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="m-auto h-6 w-6 text-primary dark:text-blue-300"
                    >
                      <path
                        className="text-primaryLight"
                        fillRule="evenodd"
                        d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                        clipRule="evenodd"
                      ></path>
                      <path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z"></path>
                    </svg>
                  </div>
                </div>
                <div
                  aria-hidden="true"
                  className="absolute top-[4.80rem] -left-2.5 z-[1] my-auto h-max w-max md:inset-y-0 lg:relative lg:ml-2.5 lg:-mr-2.5"
                >
                  <div className="h-5 w-5 rounded-full border-8 border-white bg-sky-500 ring-1 ring-gray-400/70 dark:border-darker dark:bg-white dark:ring-gray-700"></div>
                </div>
                <div>
                  <span className="text-gray-500">2021</span>
                  <h3 className="mt-0.5 text-xl font-semibold text-gray-700 dark:text-white">
                    Business Development ของ KPAuto Groups ซึ่งเป็น Dealer Top1 ชั้นนำของ Mazda , Mg
                    เเละ Suzuki
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400"></p>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <img
                  className="h-56 w-full rounded-2xl object-cover md:h-80"
                  src="https://ampire.tailus.io/images/steps/step3.webp"
                  alt="timeline third step"
                  loading="lazy"
                  width="1165"
                  height="864"
                />
              </div>
            </div>
            <div className="relative flex flex-col items-center gap-10 py-12 pl-6 after:absolute after:inset-0 after:h-full after:w-px after:border-r after:border-dashed after:border-gray-400/70 dark:after:border-gray-700 sm:pl-12 md:flex-row md:py-20 lg:pl-0 lg:after:left-[9.1rem]">
              <div className="flex w-full flex-col gap-10 md:w-1/2 lg:flex-row lg:items-center">
                <div className="hidden w-max md:block">
                  <div className="flex h-24 w-24 rounded-full border border-gray-200 bg-white p-4 shadow-xl shadow-gray-600/10 dark:border-gray-800 dark:bg-gray-900 dark:shadow-none">
                    <svg
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="m-auto h-6 w-6 text-primary dark:text-blue-300"
                    >
                      <path
                        className="text-primaryLight"
                        fillRule="evenodd"
                        d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                        clipRule="evenodd"
                      ></path>
                      <path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z"></path>
                    </svg>
                  </div>
                </div>
                <div
                  aria-hidden="true"
                  className="absolute top-[4.80rem] -left-2.5 z-[1] my-auto h-max w-max md:inset-y-0 lg:relative lg:ml-2.5 lg:-mr-2.5"
                >
                  <div className="h-5 w-5 rounded-full border-8 border-white bg-sky-500 ring-1 ring-gray-400/70 dark:border-darker dark:bg-white dark:ring-gray-700"></div>
                </div>
                <div>
                  <span className="text-gray-500">2021</span>
                  <h3 className="mt-0.5 text-xl font-semibold text-gray-700 dark:text-white">
                    Lead Marketting & Ads Optimize KPAuto Groups ซึ่งทำให้ขึ้นเป็นยอดขายอันดับ 1 ของ
                    MG Dealer 2 ปีซ้อน
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400"></p>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <img
                  className="h-56 w-full rounded-2xl object-cover md:h-80"
                  src="https://ampire.tailus.io/images/steps/step3.webp"
                  alt="timeline third step"
                  loading="lazy"
                  width="1165"
                  height="864"
                />
              </div>
            </div>
            <div className="relative flex flex-col items-center gap-10 py-12 pl-6 after:absolute after:inset-0 after:h-full after:w-px after:border-r after:border-dashed after:border-gray-400/70 dark:after:border-gray-700 sm:pl-12 md:flex-row md:py-20 lg:pl-0 lg:after:left-[9.1rem]">
              <div className="flex w-full flex-col gap-10 md:w-1/2 lg:flex-row lg:items-center">
                <div className="hidden w-max md:block">
                  <div className="flex h-24 w-24 rounded-full border border-gray-200 bg-white p-4 shadow-xl shadow-gray-600/10 dark:border-gray-800 dark:bg-gray-900 dark:shadow-none">
                    <svg
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="m-auto h-6 w-6 text-primary dark:text-blue-300"
                    >
                      <path
                        className="text-primaryLight"
                        fillRule="evenodd"
                        d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                        clipRule="evenodd"
                      ></path>
                      <path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z"></path>
                    </svg>
                  </div>
                </div>
                <div
                  aria-hidden="true"
                  className="absolute top-[4.80rem] -left-2.5 z-[1] my-auto h-max w-max md:inset-y-0 lg:relative lg:ml-2.5 lg:-mr-2.5"
                >
                  <div className="h-5 w-5 rounded-full border-8 border-white bg-sky-500 ring-1 ring-gray-400/70 dark:border-darker dark:bg-white dark:ring-gray-700"></div>
                </div>
                <div>
                  <span className="text-gray-500">2021</span>
                  <h3 className="mt-0.5 text-xl font-semibold text-gray-700 dark:text-white">
                    Business Development ของ KPAuto Groups ซึ่งเป็น Dealer Top1 ชั้นนำของ Mazda , Mg
                    , Suzuki
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400"></p>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <img
                  className="h-56 w-full rounded-2xl object-cover md:h-80"
                  src="https://ampire.tailus.io/images/steps/step3.webp"
                  alt="timeline third step"
                  loading="lazy"
                  width="1165"
                  height="864"
                />
              </div>
            </div>
            <div className="relative flex flex-col items-center gap-10 py-12 pl-6 after:absolute after:inset-0 after:h-full after:w-px after:border-r after:border-dashed after:border-gray-400/70 dark:after:border-gray-700 sm:pl-12 md:flex-row md:py-20 lg:pl-0 lg:after:left-[9.1rem]">
              <div className="flex w-full flex-col gap-10 md:w-1/2 lg:flex-row lg:items-center">
                <div className="hidden w-max md:block">
                  <div className="flex h-24 w-24 rounded-full border border-gray-200 bg-white p-4 shadow-xl shadow-gray-600/10 dark:border-gray-800 dark:bg-gray-900 dark:shadow-none">
                    <svg
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="m-auto h-6 w-6 text-primary dark:text-blue-300"
                    >
                      <path
                        className="text-primaryLight"
                        fillRule="evenodd"
                        d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                        clipRule="evenodd"
                      ></path>
                      <path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z"></path>
                    </svg>
                  </div>
                </div>
                <div
                  aria-hidden="true"
                  className="absolute top-[4.80rem] -left-2.5 z-[1] my-auto h-max w-max md:inset-y-0 lg:relative lg:ml-2.5 lg:-mr-2.5"
                >
                  <div className="h-5 w-5 rounded-full border-8 border-white bg-sky-500 ring-1 ring-gray-400/70 dark:border-darker dark:bg-white dark:ring-gray-700"></div>
                </div>
                <div>
                  <span className="text-gray-500">2021</span>
                  <h3 className="mt-0.5 text-xl font-semibold text-gray-700 dark:text-white">
                    Business Development ของ KPAuto Groups ซึ่งเป็น Dealer Top1 ชั้นนำของ Mazda , Mg
                    , Suzuki
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400"></p>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <img
                  className="h-56 w-full rounded-2xl object-cover md:h-80"
                  src="https://ampire.tailus.io/images/steps/step3.webp"
                  alt="timeline third step"
                  loading="lazy"
                  width="1165"
                  height="864"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#101828] dark:bg-darkbg py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2">
            <div>
              <img src="https://www.knacx.com/wp-content/uploads/2024/01/corporate-inovations-2.webp" />
            </div>
            <div className="space-y-4 flex flex-col justify-center">
              <p className="text-[28px] sm:text-[28px] md:text-[48px] font-bold text-white">
                เราช่วยสร้างธุรกิจจากไอเดีย
              </p>
              <p className="text-[16px] text-[#7f848c]">
                ช่วยคุณหาโซลูชั่น วางโฟลว์ ออกแบบโปรแกรม
                ซอฟต์แวร์ที่ดีที่สุดในการทำงานเพื่อให้ธุรกิจคุณเติบโตมีกำลังแข่งขันในโลกของดิจิตอล
                ทรานฟอร์มองค์กรคุณอย่างยั่งยืน
              </p>
              <div>
                <button className="text-[16px] text-white bg-primary rounded-3xl py-2 px-4">
                  สอบถามบริการ
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#101828] dark:bg-darkbg py-40 px-4">
        <div className="container mx-auto ">
          <div className="flex flex-col justify-center items-center space-y-4">
            <p className="text-[28px] sm:text-[28px] md:text-[48px] font-bold text-white">
              มีไอเดียปรึกษาเราสิ
            </p>
            <p className="text-[16px] text-[#7f848c] text-center">
              ให้เราช่วยคุณเปลี่ยนไอเดียเป็นธุรกิจ หรือ โปรแกรมที่ขับเคลื่อนธุรกิจคุณสู่ยุคดิจิตอล
            </p>
            <button className="text-[16px] text-white bg-primary rounded-3xl py-2 px-4">
              สอบถามบริการ
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutNew
