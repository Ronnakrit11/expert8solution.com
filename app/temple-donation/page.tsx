'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaCheckCircle, FaArrowRight, FaShieldAlt, FaChartLine, FaUsers, FaExchangeAlt, FaFileAlt, FaLock, FaHandHoldingHeart, FaRegNewspaper, FaMoneyBillWave, FaQrcode, FaChartBar, FaCog } from 'react-icons/fa'
import { IoStorefront, IoAnalytics, IoPhonePortrait, IoShieldCheckmark, IoCloudUpload, IoBarChart } from 'react-icons/io5'

import Heading from '@/components/Heading'
import Header from '@/components/Layout/Header'
import Footer from '@/app/components/Footer'

const TempleDonationPage = () => {
  const [open, setOpen] = useState(false)
  const [route, setRoute] = useState('Login')

  const mainFeatures = [
    {
      icon: <FaHandHoldingHeart className="w-12 h-12 text-blue-500" />,
      title: 'ระบบรับบริจาคออนไลน์ที่ปลอดภัย',
      description: 'ระบบรับบริจาคออนไลน์ที่มีความปลอดภัยสูงสุด รองรับการบริจาคผ่านหลายช่องทาง พร้อมระบบตรวจสอบและยืนยันการทำธุรกรรมอัตโนมัติ'
    },
    {
      icon: <FaRegNewspaper className="w-12 h-12 text-blue-500" />,
      title: 'จัดการเนื้อหาเว็บไซต์ได้ง่าย',
      description: 'หลังบ้านจัดการเว็บไซต์ที่ใช้งานง่าย สามารถอัพเดทข่าวสาร กิจกรรม และประชาสัมพันธ์โครงการต่างๆ ได้อย่างสะดวกรวดเร็ว'
    },
    {
      icon: <FaMoneyBillWave className="w-12 h-12 text-blue-500" />,
      title: 'เพิ่มโครงการบริจาคได้ไม่จำกัด',
      description: 'สร้างและจัดการโครงการบริจาคได้ไม่จำกัด พร้อมตั้งค่าเป้าหมายการระดมทุน แสดงความคืบหน้า และรายละเอียดโครงการแบบครบวงจร'
    },
    {
      icon: <FaQrcode className="w-12 h-12 text-blue-500" />,
      title: 'ระบบเช็คสลิปอัตโนมัติ',
      description: 'ตรวจสอบและยืนยันการบริจาคผ่านสลิปโอนเงินอัตโนมัติ ช่วยลดภาระงานเอกสารและการตรวจสอบด้วยมือ'
    },
    {
      icon: <FaChartBar className="w-12 h-12 text-blue-500" />,
      title: 'สรุปยอดบริจาครายบุคคล',
      description: 'ระบบสรุปและแสดงผลข้อมูลการบริจาคแบบรายบุคคล ช่วยให้การออกใบอนุโมทนาบัตรและใบเสร็จรับเงินเป็นไปอย่างถูกต้องและรวดเร็ว'
    }
  ]

  const allFeatures = [
    {
      icon: <FaCog className="w-12 h-12 text-blue-500" />,
      title: 'ระบบจัดการหลังบ้าน',
      features: [
        'จัดการเนื้อหาเว็บไซต์ได้ง่าย',
        'อัพเดทข่าวสารและกิจกรรม',
        'จัดการรูปภาพและแกลเลอรี่',
        'ปรับแต่งธีมและรูปแบบเว็บไซต์'
      ]
    },
    {
      icon: <FaHandHoldingHeart className="w-12 h-12 text-blue-500" />,
      title: 'ระบบจัดการโครงการบริจาค',
      features: [
        'สร้างโครงการบริจาคได้ไม่จำกัด',
        'ตั้งค่าเป้าหมายและระยะเวลา',
        'แสดงความคืบหน้าแบบเรียลไทม์',
        'จัดการรายละเอียดและรูปภาพโครงการ'
      ]
    },
    {
      icon: <FaUsers className="w-12 h-12 text-blue-500" />,
      title: 'ระบบจัดการผู้บริจาค',
      features: [
        'บันทึกประวัติผู้บริจาค',
        'ค้นหาและกรองข้อมูลผู้บริจาค',
        'ส่งอีเมลขอบคุณอัตโนมัติ',
        'ออกใบอนุโมทนาบัตรและใบเสร็จ'
      ]
    },
    {
      icon: <FaQrcode className="w-12 h-12 text-blue-500" />,
      title: 'ระบบตรวจสอบการชำระเงิน',
      features: [
        'ตรวจสอบสลิปโอนเงินอัตโนมัติ',
        'รองรับการบริจาคหลายช่องทาง',
        'แจ้งเตือนการบริจาคใหม่ทันที',
        'ยืนยันการบริจาคอัตโนมัติ'
      ]
    },
    {
      icon: <FaChartBar className="w-12 h-12 text-blue-500" />,
      title: 'ระบบรายงานและสถิติ',
      features: [
        'สรุปยอดบริจาครายวัน/เดือน/ปี',
        'รายงานบริจาคแยกตามโครงการ',
        'สรุปยอดบริจาครายบุคคล',
        'ส่งออกรายงานหลายรูปแบบ'
      ]
    },
    {
      icon: <FaRegNewspaper className="w-12 h-12 text-blue-500" />,
      title: 'ระบบจัดการข่าวสาร',
      features: [
        'สร้างและจัดการข่าวสาร',
        'จัดหมวดหมู่ข่าวและกิจกรรม',
        'กำหนดเวลาเผยแพร่อัตโนมัติ',
        'แชร์ข่าวสารผ่านโซเชียลมีเดีย'
      ]
    }
  ]

  const benefits = [
    'เพิ่มช่องทางการรับบริจาคให้กับวัดหรือมูลนิธิ',
    'ลดภาระงานเอกสารและการจัดการด้วยมือ',
    'สร้างความน่าเชื่อถือและความโปร่งใส',
    'เข้าถึงผู้บริจาคได้ทั่วโลกตลอด 24 ชั่วโมง',
    'จัดการข้อมูลผู้บริจาคได้อย่างเป็นระบบ',
    'ประชาสัมพันธ์กิจกรรมและโครงการได้อย่างมีประสิทธิภาพ',
    'ออกใบอนุโมทนาบัตรและใบเสร็จได้อย่างรวดเร็ว',
    'ติดตามความคืบหน้าของโครงการได้แบบเรียลไทม์'
  ]

  const pricingPlans = [
    {
      name: 'Standard',
      price: '59,000',
      period: '/yr',
      description: 'เหมาะสำหรับวัดหรือมูลนิธิขนาดเล็กที่ต้องการเริ่มต้นระบบรับบริจาคออนไลน์',
      features: [
        'เว็บไซต์พร้อมระบบรับบริจาค',
        'ระบบตรวจสอบสลิปพื้นฐาน',
        'จัดการโครงการบริจาคได้ 5 โครงการ',
        'รายงานสรุปรายเดือน',
        'รองรับผู้ดูแลระบบ 3 คน',
        'การสำรองข้อมูลรายสัปดาห์'
      ]
    },
    {
      name: 'Premium',
      price: '99,000',
      period: '/yr',
      description: 'เหมาะสำหรับวัดหรือมูลนิธิขนาดกลางถึงใหญ่ที่ต้องการระบบรับบริจาคที่ครบวงจร',
      features: [
        'ทุกฟีเจอร์ในแพ็คเกจ Standard',
        'ระบบตรวจสอบสลิปอัตโนมัติขั้นสูง',
        'จัดการโครงการบริจาคไม่จำกัด',
        'ระบบส่งอีเมลและ SMS อัตโนมัติ',
        'รายงานวิเคราะห์ขั้นสูง',
        'รองรับผู้ดูแลระบบ 10 คน',
        'การสำรองข้อมูลรายวัน'
      ]
    }
  ]

  return (
    <div>
      <Heading
        title="เว็บไซต์วัดหรือมูลนิธิ พร้อมฟังก์ชั่นรับบริจาค | Expert8-Solution"
        description="ยกระดับวัดหรือมูลนิธิของคุณด้วยเว็บไซต์ที่ทันสมัย พร้อมระบบรับบริจาคออนไลน์ที่ครบวงจร ใช้งานง่าย ปลอดภัย รองรับการทำงานตลอด 24 ชั่วโมง"
        keywords="เว็บไซต์วัด, เว็บไซต์มูลนิธิ, ระบบรับบริจาค, ระบบบริจาคออนไลน์, ระบบเช็คสลิปอัตโนมัติ, ระบบจัดการวัด, ระบบจัดการมูลนิธิ"
      />
      <Header open={open} setOpen={setOpen} activeItem={5} setRoute={setRoute} route={route} />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                เว็บไซต์วัดหรือมูลนิธิ <span className="text-blue-500">พร้อมระบบรับบริจาค</span> ที่ครบวงจร
              </h1>
              <h2 className="mt-6 text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200">
                ยกระดับการรับบริจาคและการประชาสัมพันธ์ให้เป็นเรื่องง่าย
              </h2>
              <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
                ตอบโจทย์ยุคดิจิทัล ด้วยเว็บไซต์ที่ทันสมัย ระบบรับบริจาคที่ปลอดภัย พร้อมหลังบ้านจัดการที่ใช้งานง่าย สร้างความโปร่งใสและความน่าเชื่อถือ!
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link href="https://lin.ee/hayXIbr" className="inline-flex items-center justify-center px-6 py-4 text-base font-medium rounded-full text-white bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 shadow-lg hover:shadow-xl transition-all duration-300">
                  ขอรายละเอียดเพิ่มเติม
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link href="https://lin.ee/6aqawoD" className="inline-flex items-center justify-center px-6 py-4 text-base font-medium rounded-full text-blue-600 bg-white border-2 border-blue-500 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300">
                  ทดลอง Demo
                </Link>
                <Link href="#demo" className="hidden md:inline-flex items-center justify-center px-6 py-4 text-base font-medium rounded-full text-gray-700 bg-gray-100 border-2 border-gray-300 hover:bg-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
                  ขอสาธิตระบบฟรี
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-200/30 to-indigo-200/30 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-3xl z-0"></div>
              <Image
                src="/temple-donation.webp"
                alt="เว็บไซต์วัดหรือมูลนิธิ พร้อมฟังก์ชั่นรับบริจาค"
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

      {/* Main Features Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              ยกระดับวัดหรือมูลนิธิด้วยเทคโนโลยีที่ทันสมัย
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              ระบบเว็บไซต์และรับบริจาคของเรามีฟีเจอร์ที่ครบครันเพื่อตอบโจทย์ความต้องการของวัดและมูลนิธิทุกขนาด
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainFeatures.map((feature, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation System Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                ระบบรับบริจาคที่ปลอดภัยและโปร่งใส
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                เพิ่มช่องทางการรับบริจาคออนไลน์ที่ปลอดภัย สะดวก และโปร่งใส ช่วยให้ผู้มีจิตศรัทธาสามารถร่วมทำบุญได้ทุกที่ ทุกเวลา
              </p>

              <div className="mt-8 grid grid-cols-1 gap-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    ระบบตรวจสอบอัตโนมัติ
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    ตรวจสอบและยืนยันการบริจาคอัตโนมัติ ลดภาระงานเอกสาร
                  </p>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    รายงานโปร่งใส
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    แสดงความคืบหน้าและสรุปยอดบริจาคแบบเรียลไทม์
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <Image
                src="/temple-donation.webp"
                alt="ระบบรับบริจาค"
                width={600}
                height={500}
                className="w-full h-auto object-cover rounded-3xl shadow-xl"
                onError={(e) => {
                  e.currentTarget.src = "/temple-donation.webp";
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* All Features Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              ฟังก์ชั่นทั้งหมดของระบบ
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allFeatures.map((feature, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {feature.title}
                </h3>
                <ul className="space-y-3">
                  {feature.features.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <FaCheckCircle className="text-blue-500 text-lg flex-shrink-0 mt-1" />
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              ประโยชน์ที่จะได้รับ
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              การมีเว็บไซต์พร้อมระบบรับบริจาคจะช่วยยกระดับวัดหรือมูลนิธิของคุณในหลายด้าน
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-blue-500 text-lg flex-shrink-0 mt-1" />
                  <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              แพ็คเกจเว็บไซต์วัดหรือมูลนิธิ พร้อมระบบรับบริจาค
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold text-blue-500">฿{plan.price}</span>
                  <span className="text-gray-500 dark:text-gray-400 ml-2">{plan.period}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {plan.description}
                </p>
                <ul className="mb-8 space-y-4">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <FaCheckCircle className="text-blue-500 text-lg flex-shrink-0 mt-1" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="block text-center px-6 py-3 text-base font-medium rounded-full text-white bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 shadow-lg hover:shadow-xl transition-all duration-300">
                  ติดต่อเพื่อสั่งซื้อ
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="demo" className="py-20 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                พร้อมยกระดับวัดหรือมูลนิธิของคุณ?
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                ยกระดับวัดหรือมูลนิธิของคุณด้วยเว็บไซต์ที่ทันสมัย พร้อมระบบรับบริจาคที่ครบวงจร ใช้งานง่าย ปลอดภัย รองรับการทำงานตลอด 24 ชั่วโมง
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <Link href="/temple-donation/detail" className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-full text-white bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 shadow-lg hover:shadow-xl transition-all duration-300">
                ดูรายละเอียดเพิ่มเติม
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                เราพร้อมให้คำปรึกษาและแนะนำแพ็คเกจที่เหมาะสมกับวัดหรือมูลนิธิของคุณ
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default TempleDonationPage
