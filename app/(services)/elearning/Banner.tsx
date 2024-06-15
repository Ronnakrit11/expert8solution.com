import { track } from '@vercel/analytics'

import React from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { LuCheckCircle } from 'react-icons/lu'

track('Booking Demo')

const Banner = () => {
  return (
    <div>
      <div className="w-[90%] sm:w-[90%] md:w-[60%] mx-auto py-20">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex justify-center items-center ">
            <div className="text-black space-y-8">
              <h1 className="text-[30px] sm:text-[40px] xl:text-[56px] font-bold  lg:text-[px]">
                ลดขั้นตอนการใช้งานที่ยุ่งยาก
              </h1>
              <p className="text-[20px] sm:text-[14px] xl:text-[17px] text-[#626363]">
                ระบบของเราคำนึงถึงการใช้งานของคุณเเละนักเรียนของคุณเป็นหลัก เพียงไม่กี่คลิ๊ก
              </p>
              <ul className="text-[17px] sm:text-[14px] xl:text-[17px] space-y-4 text-[#525355]">
                <li className="flex items-center gap-1 sm:gap-1 xl:gap-2 ">
                  <LuCheckCircle className="text-[#98EFD2] w-[50px]" />
                  นักเรียนเข้าสู่ระบบเพียง 3 คลิ๊ก
                </li>
                <li className="flex items-center gap-1 sm:gap-1 xl:gap-2 ">
                  <LuCheckCircle className="text-[#98EFD2] w-[50px]" />
                  นักเรียนชำระเงินภายใน 3 คลิ๊ก
                </li>
                <li className="flex items-center gap-1 sm:gap-1 xl:gap-2 ">
                  <LuCheckCircle className="text-[#98EFD2] w-[50px]" /> ระบบตรวจสอบสลิปอัตโนมัติ
                  คุณไม่จำเป็นต้องมาคอยอนุมัติ
                </li>
              </ul>
              <br />
              <Link href="https://www.demoexpert8-solution.com" target="_blank">
                <button
                  data-analytics-on="Booking Demo"
                  className="bg-primary text-white px-6 py-4 rounded-2xl  "
                >
                  {' '}
                  Booking Demo
                </button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="/hero-3.webp"
              alt="ระบบจ่ายเงิน"
              width={1000}
              height={1000}
              className="w-[500px] h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
