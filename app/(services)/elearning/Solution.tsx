import React from 'react'

import Image from 'next/image'
import { LuCheckCircle } from 'react-icons/lu'

const Solution = () => {
  return (
    <div className="bg-[#F8F9FA]">
      <div className="text-center pt-20 pb-10 space-y-4">
        <p className="text-[16px]">
          OUR <span className="font-bold">FEATURES</span>
        </p>
        <p className="text-[30px] font-semibold">ฟังก์ชั่นพิเศษที่ตอบโจทย์</p>
        <br />
        <p className="text-[16px] text-[#6D7176]">
          {' '}
          รวบรวมทุกฟังก์ชั่นที่จะช่วยให้นักเรียนพัฒนาอย่างเต็มประสิทธิภาพ
        </p>
      </div>
      <div className="container mx-auto">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-1">
            <div className="relative w-full " style={{ paddingBottom: '100%' }}>
              <iframe
                allow="fullscreen; autoplay"
                allowFullScreen
                src="https://streamable.com/e/9byabz?autoplay=1&muted=1&nocontrols=1"
                className="absolute top-0 left-0 w-full h-full border-none rounded-3xl "
              ></iframe>
            </div>
          </div>

          <div className="flex justify-center items-center ">
            <div className="text-black space-y-8">
              <h1 className="text-[40px] sm:text-[40px] xl:text-[56px] font-bold">
                Pre test & Post test{' '}
              </h1>
              <p className="text-[14px] sm:text-[14px] xl:text-[17px] text-[#6D7176]">
                ฟังก์ชั่นข้อสอบก่อนเรียนเเละหลังเรียนสามารถตั้งเวลาในการสอบได้
              </p>
              <ul className="text-[17px] sm:text-[14px] xl:text-[16px] space-y-4 text-[#6D7176]">
                <li className="flex items-center gap-1 sm:gap-1 xl:gap-2 ">
                  <LuCheckCircle className="text-[#98EFD2] w-[50px]" />{' '}
                  ครูผู้สอนสามารถเก็บข้อมูลคะเเนนสอบได้
                </li>
                <li className="flex items-center gap-1 sm:gap-1 xl:gap-2 ">
                  <LuCheckCircle className="text-[#98EFD2] w-[50px]" />
                </li>
                <li className="flex items-center gap-1 sm:gap-1 xl:gap-2 ">
                  <LuCheckCircle className="text-[#98EFD2] w-[50px]" />
                </li>
              </ul>
              <button className="bg-primary text-white px-6 py-4 rounded-2xl">Get Demo</button>
              <br />
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Solution
