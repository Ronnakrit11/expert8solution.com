'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaCheckCircle, FaArrowRight, FaHandHoldingHeart, FaRegNewspaper, FaMoneyBillWave, FaQrcode, FaChartBar, FaCog, FaUsers } from 'react-icons/fa'

import Heading from '@/components/Heading'
import Header from '@/components/Layout/Header'
import Footer from '@/app/components/Footer'

const TempleDonationDetailPage = () => {
  const [open, setOpen] = React.useState(false)
  const [route, setRoute] = React.useState('Login')

  const features = [
    {
      icon: <FaHandHoldingHeart className="w-12 h-12 text-blue-500" />,
      title: 'ระบบรับบริจาคออนไลน์ที่ปลอดภัย',
      description: 'ระบบรับบริจาคออนไลน์ที่มีความปลอดภัยสูงสุด รองรับการบริจาคผ่านหลายช่องทาง ทั้งบัตรเครดิต/เดบิต, QR Code, โอนเงินผ่านธนาคาร และ e-Wallet ต่างๆ พร้อมระบบตรวจสอบและยืนยันการทำธุรกรรมอัตโนมัติที่แม่นยำและรวดเร็ว'
    },
    {
      icon: <FaRegNewspaper className="w-12 h-12 text-blue-500" />,
      title: 'จัดการเนื้อหาเว็บไซต์ได้ง่าย',
      description: 'หลังบ้านจัดการเว็บไซต์ที่ใช้งานง่าย ไม่ต้องมีความรู้ด้านการเขียนโค้ด สามารถอัพเดทข่าวสาร กิจกรรม และประชาสัมพันธ์โครงการต่างๆ ได้อย่างสะดวกรวดเร็ว พร้อมระบบอัพโหลดรูปภาพและวิดีโอที่ใช้งานง่าย'
    },
    {
      icon: <FaMoneyBillWave className="w-12 h-12 text-blue-500" />,
      title: 'เพิ่มโครงการบริจาคได้ไม่จำกัด',
      description: 'สร้างและจัดการโครงการบริจาคได้ไม่จำกัด พร้อมตั้งค่าเป้าหมายการระดมทุน แสดงความคืบหน้า และรายละเอียดโครงการแบบครบวงจร สามารถกำหนดระยะเวลาของโครงการ และแสดงผลความคืบหน้าแบบเรียลไทม์'
    },
    {
      icon: <FaQrcode className="w-12 h-12 text-blue-500" />,
      title: 'ระบบเช็คสลิปอัตโนมัติ',
      description: 'ตรวจสอบและยืนยันการบริจาคผ่านสลิปโอนเงินอัตโนมัติ ช่วยลดภาระงานเอกสารและการตรวจสอบด้วยมือ ระบบจะตรวจสอบข้อมูลการโอนเงิน จำนวนเงิน วันที่และเวลา และยืนยันการบริจาคให้โดยอัตโนมัติ'
    },
    {
      icon: <FaChartBar className="w-12 h-12 text-blue-500" />,
      title: 'สรุปยอดบริจาครายบุคคล',
      description: 'ระบบสรุปและแสดงผลข้อมูลการบริจาคแบบรายบุคคล ช่วยให้การออกใบอนุโมทนาบัตรและใบเสร็จรับเงินเป็นไปอย่างถูกต้องและรวดเร็ว พร้อมระบบค้นหาและกรองข้อมูลผู้บริจาคที่ใช้งานง่าย'
    },
    {
      icon: <FaCog className="w-12 h-12 text-blue-500" />,
      title: 'ระบบจัดการหลังบ้านที่ครบครัน',
      description: 'ระบบหลังบ้านที่ครบครัน รองรับการจัดการผู้ใช้งานหลายระดับ สามารถกำหนดสิทธิ์การเข้าถึงข้อมูลและฟังก์ชั่นต่างๆ ได้ตามต้องการ พร้อมระบบรายงานและการวิเคราะห์ข้อมูลที่ช่วยให้การตัดสินใจเป็นไปอย่างมีประสิทธิภาพ'
    }
  ]

  const benefits = [
    {
      title: 'เพิ่มช่องทางการรับบริจาคให้กับวัดหรือมูลนิธิ',
      description: 'ขยายช่องทางการรับบริจาคไปสู่โลกออนไลน์ เข้าถึงผู้บริจาคได้ทั่วโลกตลอด 24 ชั่วโมง ไม่มีข้อจำกัดด้านเวลาและสถานที่'
    },
    {
      title: 'ลดภาระงานเอกสารและการจัดการด้วยมือ',
      description: 'ระบบอัตโนมัติช่วยลดภาระงานเอกสารและการจัดการด้วยมือ ทำให้การทำงานมีประสิทธิภาพมากขึ้น ลดความผิดพลาดจากการทำงานด้วยมือ'
    },
    {
      title: 'สร้างความน่าเชื่อถือและความโปร่งใส',
      description: 'แสดงความคืบหน้าของโครงการและการใช้เงินบริจาคอย่างโปร่งใส สร้างความน่าเชื่อถือและความไว้วางใจจากผู้บริจาค'
    },
    {
      title: 'จัดการข้อมูลผู้บริจาคได้อย่างเป็นระบบ',
      description: 'จัดเก็บและจัดการข้อมูลผู้บริจาคอย่างเป็นระบบ ช่วยให้การติดต่อและการสร้างความสัมพันธ์กับผู้บริจาคเป็นไปอย่างมีประสิทธิภาพ'
    }
  ]

  const steps = [
    {
      number: '01',
      title: 'ปรึกษาและวางแผน',
      description: 'เริ่มต้นด้วยการปรึกษาและวางแผนร่วมกัน เพื่อให้เข้าใจความต้องการและเป้าหมายของวัดหรือมูลนิธิของคุณ'
    },
    {
      number: '02',
      title: 'ออกแบบและพัฒนา',
      description: 'ทีมงานของเราจะออกแบบและพัฒนาเว็บไซต์ตามความต้องการของคุณ โดยคำนึงถึงการใช้งานที่ง่ายและสวยงาม'
    },
    {
      number: '03',
      title: 'ทดสอบและปรับแต่ง',
      description: 'ทดสอบระบบทั้งหมดอย่างละเอียด และปรับแต่งตามคำแนะนำของคุณ เพื่อให้ได้ระบบที่สมบูรณ์แบบ'
    },
    {
      number: '04',
      title: 'อบรมการใช้งาน',
      description: 'อบรมทีมงานของคุณให้สามารถใช้งานระบบได้อย่างมีประสิทธิภาพ พร้อมคู่มือการใช้งานที่เข้าใจง่าย'
    },
    {
      number: '05',
      title: 'เปิดใช้งานและสนับสนุน',
      description: 'เปิดใช้งานระบบอย่างเป็นทางการ พร้อมการสนับสนุนและดูแลระบบอย่างต่อเนื่อง'
    }
  ]

  return (
    <div>
      <Heading
        title="รายละเอียดเว็บไซต์วัดหรือมูลนิธิ พร้อมฟังก์ชั่นรับบริจาค | Expert8-Solution"
        description="รายละเอียดเกี่ยวกับเว็บไซต์วัดหรือมูลนิธิ พร้อมระบบรับบริจาคออนไลน์ที่ครบวงจร ใช้งานง่าย ปลอดภัย รองรับการทำงานตลอด 24 ชั่วโมง"
        keywords="เว็บไซต์วัด, เว็บไซต์มูลนิธิ, ระบบรับบริจาค, ระบบบริจาคออนไลน์, ระบบเช็คสลิปอัตโนมัติ, ระบบจัดการวัด, ระบบจัดการมูลนิธิ"
      />
      <Header open={open} setOpen={setOpen} activeItem={5} setRoute={setRoute} route={route} />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                รายละเอียด<span className="text-blue-500">ระบบรับบริจาค</span>ออนไลน์
              </h1>
              <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
                ระบบรับบริจาคออนไลน์ที่ครบวงจรสำหรับวัดและมูลนิธิ ช่วยให้การรับบริจาคเป็นเรื่องง่าย ปลอดภัย และมีประสิทธิภาพ พร้อมระบบหลังบ้านที่ใช้งานง่าย
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="inline-flex items-center justify-center px-6 py-4 text-base font-medium rounded-full text-white bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 shadow-lg hover:shadow-xl transition-all duration-300">
                  ติดต่อเพื่อขอรายละเอียด
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-200/30 to-indigo-200/30 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-3xl z-0"></div>
              <Image
                src="/temple-donation-detail.webp"
                alt="รายละเอียดเว็บไซต์วัดหรือมูลนิธิ พร้อมฟังก์ชั่นรับบริจาค"
                width={600}
                height={500}
                className="w-full h-auto object-cover rounded-3xl shadow-2xl relative z-10"
                onError={(e) => {
                  e.currentTarget.src = "/temple-donation.webp";
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Features Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4">คุณสมบัติหลัก</span>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">ฟีเจอร์ที่ครบครันของระบบ</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              ระบบของเรามีฟีเจอร์ที่ครบครันเพื่อตอบโจทย์ความต้องการของวัดและมูลนิธิในยุคดิจิทัล
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:scale-105">
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-blue-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4">ประโยชน์</span>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">ประโยชน์ที่คุณจะได้รับ</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              ระบบของเราช่วยให้วัดและมูลนิธิสามารถเพิ่มประสิทธิภาพในการรับบริจาคและการจัดการข้อมูล
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4">ขั้นตอนการทำงาน</span>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">กระบวนการทำงานของเรา</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              เรามีกระบวนการทำงานที่เป็นระบบเพื่อให้คุณได้รับระบบที่ตรงตามความต้องการและมีประสิทธิภาพสูงสุด
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:scale-105">
                <div className="text-4xl font-bold text-blue-500 mb-4">{step.number}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">พร้อมยกระดับการรับบริจาคของคุณ?</h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-10">
            ติดต่อเราวันนี้เพื่อรับคำปรึกษาฟรีและเริ่มต้นพัฒนาระบบรับบริจาคออนไลน์ที่ตอบโจทย์ความต้องการของคุณ
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full text-blue-600 bg-white hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
              ติดต่อเรา
              <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link href="/temple-donation" className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full text-white bg-transparent border-2 border-white hover:bg-white/10 shadow-lg hover:shadow-xl transition-all duration-300">
              กลับไปหน้าหลัก
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default TempleDonationDetailPage
