import React from 'react'
import { FaPaperPlane } from 'react-icons/fa'
import Contact from './Contact'

const FooterContact = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Background decorations */}
          <div aria-hidden="true" className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20 pointer-events-none">
            <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
            <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
          </div>
          
          {/* Content container */}
          <div className="relative z-10 overflow-hidden rounded-2xl shadow-xl">
            <div className="grid md:grid-cols-2 bg-white dark:bg-gray-800 rounded-2xl">
              {/* Left side - Contact information */}
              <div className="p-8 md:p-12 lg:px-16 lg:py-24 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 flex items-center">
                <div className="mx-auto max-w-xl text-center md:text-left">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
                    ติดต่อเรา
                  </h2>

                  <p className="hidden text-gray-600 dark:text-gray-300 md:mt-4 md:block">
                    ติดต่อร่วมงานกับ Expert8Solution เพื่อเป็นส่วนหนึ่งกับเรา บริการรวดเร็ว ประทับใจ คุณภาพสูง ครบจบในที่เดียว
                  </p>

                  <div className="mt-8 flex flex-wrap gap-4 text-center">
                    <div className="block w-full rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
                      <div className="flex items-center justify-center md:justify-start">
                        <FaPaperPlane className="h-6 w-6 text-primary" />
                        <h2 className="ml-3 text-lg font-bold text-gray-900 dark:text-white">ส่งข้อความถึงเรา</h2>
                      </div>

                      <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                        เรายินดีให้คำปรึกษาและตอบคำถามทุกเรื่องเกี่ยวกับบริการของเรา
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side - Contact form */}
              <div className="p-8 md:p-12 lg:px-16 lg:py-24 bg-white dark:bg-gray-800">
                <div className="mx-auto max-w-xl">
                  <Contact />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FooterContact