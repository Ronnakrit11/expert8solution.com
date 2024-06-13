import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaEraser } from "react-icons/fa";
import Link from "next/link";

const Record = () => {
  return (
    <div className="container mx-auto mt-20">
      <div className="py-10">
        <h1 className="text-[30px] md:text-[65px] text-center">
          เข้าเรียนได้ทันทีหลังจากชำระเงิน
        </h1>
      </div>

      <div className=" rounded-3xl py-10">
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="w-[60%] mx-auto space-y-6 flex flex-col justify-center">
              {/* <div className="bg-[#EFF0FF]">
                <FaEraser />
              </div> */}
              <h2 className="text-[33px] text-[#2B1C50]">
                การชำระเงินที่ง่ายใน 3 คลิ๊ก
              </h2>
              <p className="text-[19px] text-[#3D2E7C]">
                หลังจากนักเรียนเข้าสู่ระบบด้วย Line 
                เพียงไม่กี่คลิ๊กนักเรียนสามารถจ่ายเงินเข้าเรียนได้ทันที
                มีระบบตรวจสลิปการโอนเงินอัตโนมัติ
                เจ้าของเว็บไซต์ไม่ต้องมากดอนุมัติเอง
              </p>
          
              <Link href="https://www.demoexpert8-solution.com"
        target="_blank">
        
                  <button className="px-4 py-3 ring-4 ring-[#B0B4F2] text-white rounded-full bg-[#565ADD]"> Booking Demo   </button>
                 </Link>
            </div>
            <div className="p-8">
              <div
                className="relative w-full"
                style={{ paddingBottom: "100%" }}
              >
                <iframe
                  allow="fullscreen; autoplay"
                  allowFullScreen
                  src="https://streamable.com/e/o09xgn?autoplay=1&muted=1&nocontrols=1"
                  className="absolute top-0 left-0 w-full h-full border-none rounded-3xl"
                ></iframe>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Record;
