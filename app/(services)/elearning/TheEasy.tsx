import React from 'react'

import { Calendly } from '@/app/components/Home/components/Calendly'


const TheEasy = () => {
  return (
    <div className="container mx-auto">
      <div className="py-10 space-y-2">
        <h3 className="text-[30px] md:text-[50px]  lg:text-[30px] text-center text-[#2B1C50] font-bold ">
          เน้นการใช้งานง่ายที่สุด
        </h3>
        <p className="text-[19px] md:text-[27px] text-center text-[#3D2E7C]">
          ระบบของเราคำนึงถึงความง่ายของนักเรียนเเละเจ้าของเว็บไซต์เป็นหลัก
        </p>
      </div>

      <div className="bg-[#EFF0FF] rounded-3xl py-10">
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="w-[60%] mx-auto space-y-6 flex flex-col justify-center">
              <h2 className="text-[33px] text-[#2B1C50]">
                เข้าสู่ระบบด้วย Line โดยไม่ต้องสมัครใหม่
              </h2>
              <p className="text-[19px] text-[#3D2E7C]">
                เพียง 3 คลิ๊ก นักเรียนก็สามารถเข้าสู่ระบบได้ทันที
                ตอบโจทย์ทั้งนักเรียนเเละเจ้าของเว็บไซต์
              </p>

              <div className="flex justify-center mt-12">

<Calendly/>
</div>

              
              
              

             
            </div>
            
            <div className="p-8">
              <div className="relative w-full" style={{ paddingBottom: '100%' }}>
                <iframe
                  allow="fullscreen; autoplay"
                  allowFullScreen
                  src="https://streamable.com/e/eo788a?autoplay=1&muted=1&nocontrols=1"
                  className="absolute top-0 left-0 w-full h-full border-none rounded-3xl"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TheEasy
