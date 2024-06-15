import React from "react"
import { Rating } from "flowbite-react"
import Image from "next/image"

const Review = () => {
  return (
    <div className="bg-white dark:bg-[#101726] py-20">
      <div className=" container mx-auto ">
        <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white md:text-4xl xl:text-5xl">
              Reviews
            </h2>
            <p className="mx-auto mt-6 text-gray-700 dark:text-gray-300 md:w-3/4 lg:w-3/5">
              รีวิวบางส่วนจากลูกค้าที่ใช้บริการกับ Expert8Solution
            </p>
          </div>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl py-20 border border-gray-100 bg-white p-8 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none sm:col-span-2 sm:px-12 lg:col-span-1 lg:row-span-2">
            <div className="flex h-full flex-col justify-center space-y-6 md:space-y-8">
              <Rating size="lg">
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
              </Rating>
              <p className="text-gray-600 dark:text-gray-300 md:text-lg lg:text-xl">
                " ชอบความทุ่มเทของคุณนุ๊ก การ
                บริการที่รวดเร็วและการรับปรับตามความ ต้องการของผม
                ไม่มีการเรียกร้องใดๆ ถือว่าดีมากๆครับ เว็บออกมาดูดีตามที่เรา "
                <br />
                <br />" ชอบเลย"
              </p>
              <div className="flex items-center gap-3">
                <Image
                  className="h-12 w-12 rounded-full"
                  src="/test1-2.png"
                  loading="lazy"
                  alt="user avatar"
                  width="200"
                  height="200"
                />
                <div>
                  <h3 className="text-lg font-semibold leading-none text-gray-600 dark:text-gray-200">
                    คุณพลอย
                  </h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    นักเรียน Expert8Solution
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-6 rounded-3xl border border-gray-100 bg-white p-8 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none">
            <Rating size="lg">
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
            </Rating>
            <p className="text-gray-600 dark:text-gray-300">
              " ผู้รับงานสุภาพ ใจเย็น ใช้เวลาทํางาน ตามตกลง
              สอนการใช้งานแก่ผู้ว่าจ้างได้ดี บริการหลังการขายเป็นที่น่าพึงพอใจ"
            </p>
            <div className="flex items-center gap-3">
              <Image
                className="h-12 w-12 rounded-full"
                src="/test1-2.png"
                loading="lazy"
                alt="user avatar"
                width="200"
                height="200"
              />
              <div>
                <h3 className="text-lg font-semibold leading-none text-gray-600 dark:text-gray-200">
                  RedBird
                </h3>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  ลูกค้า Expert8Solution
                </span>
              </div>
            </div>
          </div>
          <div className="space-y-6 rounded-3xl border border-gray-100 bg-white p-8 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none">
            <Rating size="lg">
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
            </Rating>
            <p className="text-gray-600 dark:text-gray-300">
              " ระบบของคุณนุ๊ก มี features ให้เลือกใช้เยอะมากๆครับ และใจดี
              คอยให้คําปรึกษา ตลอดเส้นทาง ส่วนตัวแนะนําเลยครับ ระบบของ Expert8
              Academy "
            </p>
            <div className="flex items-center gap-3">
              <Image
                className="h-12 w-12 rounded-full"
                src="/test1-2.png"
                loading="lazy"
                alt="user avatar"
                width="200"
                height="200"
              />
              <div>
                <h3 className="text-lg font-semibold leading-none text-gray-600 dark:text-gray-200">
                  คุณนัท
                </h3>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  ลูกค้า Expert8Solution
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Review
