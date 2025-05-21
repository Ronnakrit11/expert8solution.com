import React from 'react'

import Contact from './Contact'

const FooterContact = () => {
  return (
    <div className="border-y border-gray-200 p-0 sm:p-4 bg-gray-100 dark:bg-[#101726] dark:border-gray-700 dark:bg-darker">
      <div className=" w-full flex justify-center">
        <div className="grid  sm:grid-cols-2 grid-cols-1 gap-3 bg-white dark:bg-darkbg  rounded-md shadow-lg">
          <div className="h-max py-3 w-full flex flex-col items-center justify-center px-10">
            <br />
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white md:w-max md:text-4xl xl:text-4xl">
                ติดต่อเรา
              </h2>
              <p className="mb-8 mt-6 text-gray-600 dark:text-gray-300">
                ติกต่อร่วมงานกับ Expert8Solution เพื่อเป็นส่วนหนึ่งกับเรา บริการรวดเร็ว ประทับใจ
                คุณภาพสูง ครบจบในที่เดียว
              </p>
            </div>
          </div>
          <Contact />
        </div>
      </div>
    </div>
  )
}

export default FooterContact
