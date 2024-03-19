import React from "react";
import { styles } from "../styles/style";
import Image from "next/image";

const About = () => {
  return (
    <div className="w-full bg-gradient-4 text-white">
      <div className="text-white dark:text-white min-h-[60vh]">
        <br />
        <div className="w-[95%] 800px:w-[85%] m-auto pb-10">
          <div className="w-full flex justify-center flex-col md:flex-row items-center">
            <div className="">
              <Image src={'/proo.jpg'} height={100} width={200} alt="" className="object-scale-down rounded-2xl md:item-center" />
            </div>
            <div className="pl-5">
              <span className="text-[24px] font-semibold text-white">ประวัติ</span>
              <p className="text-[22px] mt-1 mb-1">

              </p>
              <p className="text-[16px]"> ( อาจารย์นุ๊ก )  </p>
            </div>
          </div>
          {/* <div className="w-full">
          <div className="pt-5">
            <span className="text-[16px] md:text-[24px] font-semibold text-white">การศึกษา ( Education )</span>
            <p className="li-item text-[12px] md:text-[16px] mt-3">ปริญญาโท &emsp; : ศึกษาศาสตรมหาบัณฑิต (สาขาการบริหารการศึกษา) มหาวิทยาลัยขอนแก่น </p>
          </div>
        </div> */}
          <div className="w-full">
            <div className="pt-5">
              <span className="text-[16px] md:text-[24px] font-semibold text-white">ประสบวัติการศึกษา ( Professional Experience )</span>
              <div className="flex mt-3">
                <p className="li-item text-[13px] md:text-[16px] min-w-[126px] text-white">ผู้ก่อตั้งสถาบันการสอนการตลาดออนไลน์ผ่าน Page Facebook
                  “ Online Marketing Academy ที่ปรึกษาการตลาด” เป็นอาจารย์ผู้สอน
                  การยิงแอดโฆษณาผ่าน Facebook ให้กับเจ้าของธุรกิจ ตัวแทนจำหน่าย
                  อาหารเสริม ตัวแทนประกันชีวิต และอื่นๆ อีกมากมาย</p>

              </div>
              <div className="flex mt-3">
                <p className="li-item text-[13px] md:text-[16px] min-w-[126px] text-white">ประสบการณ์ด้านการตลาดออนไลน์ และการสอนผ่าน
                  คอร์สตัวต่อตัว มากกว่า 1,000 ชั่วโมง ทำให้ลูกศิษย์ประสบความสำเร็จ
                  ในการยิงแอดโฆษณาอย่างมากมาย ทั้งมือใหม่และผู้มีประสบการณ์</p>

              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default About;
