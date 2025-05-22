'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaCheckCircle, FaArrowRight, FaShieldAlt, FaChartLine, FaUsers, FaExchangeAlt, FaPiggyBank, FaCog, FaFileAlt, FaLock } from 'react-icons/fa'
import { IoStorefront, IoAnalytics, IoPhonePortrait, IoShieldCheckmark, IoCloudUpload, IoBarChart } from 'react-icons/io5'

import Heading from '@/components/Heading'
import Header from '@/components/Layout/Header'
import Footer from '@/app/components/Footer'

const GoldShopPage = () => {
  const [open, setOpen] = useState(false)
  const [route, setRoute] = useState('Login')

  const mainFeatures = [
    {
      icon: <FaShieldAlt className="w-12 h-12 text-yellow-500" />,
      title: 'ระบบออมทองที่ปลอดภัยสูงสุด',
      description: 'ออมทองอย่างมั่นใจด้วยระบบออมทองที่มีความปลอดภัยสูงสุด พร้อมระบบ 2FA ช่วยป้องกันข้อมูลและการทำธุรกรรมทุกขั้นตอน'
    },
    {
      icon: <FaChartLine className="w-12 h-12 text-yellow-500" />,
      title: 'ราคาทองอัปเดตเรียลไทม์',
      description: 'ติดตามราคาทองแบบเรียลไทม์ผ่านระบบออมทอง พร้อมกราฟและ Indicator ช่วยให้การซื้อขายทองและการออมทองแม่นยำยิ่งขึ้น'
    },
    {
      icon: <IoBarChart className="w-12 h-12 text-yellow-500" />,
      title: 'ตั้งราคาทองง่าย',
      description: 'ระบบออมทองช่วยให้คุณสามารถตั้งราคา Bid Offer ได้เองสำหรับทุกสินค้าทองคำ สะดวกและรวดเร็ว'
    },
    {
      icon: <IoAnalytics className="w-12 h-12 text-yellow-500" />,
      title: 'คำนวณต้นทุนออมทองได้ครบถ้วน',
      description: 'ระบบออมทองช่วยให้คุณรู้ต้นทุนรวม ต้นทุนเฉลี่ย และตัวเลขสำคัญอื่นๆ ช่วยให้การวางแผนการออมทองแม่นยำขึ้น'
    },
    {
      icon: <IoStorefront className="w-12 h-12 text-yellow-500" />,
      title: 'ติดตามทุกธุรกรรมในระบบออมทอง',
      description: 'ระบบออมทองของเราช่วยให้คุณติดตามทุกการซื้อขายทองและการออมทองได้อย่างละเอียด มั่นใจในทุกขั้นตอน'
    }
  ]

  const allFeatures = [
    {
      icon: <FaUsers className="w-12 h-12 text-yellow-500" />,
      title: 'ระบบจัดการสมาชิกออมทอง',
      features: [
        'สมัครสมาชิกออมทองออนไลน์ง่ายๆ',
        'ยืนยันตัวตน KYC มาตรฐานสากล',
        'จัดการข้อมูลสมาชิกออมทองครบวงจร',
        'กำหนดสิทธิ์การใช้งานหลายระดับ'
      ]
    },
    {
      icon: <FaExchangeAlt className="w-12 h-12 text-yellow-500" />,
      title: 'ระบบซื้อขายทองออนไลน์',
      features: [
        'ซื้อขายทองออนไลน์ 24 ชั่วโมง',
        'แจ้งเตือนคำสั่งซื้อขายทองทันทีผ่าน telegrame bot',
        'ตรวจสอบสลิปโอนเงินอัตโนมัติ',
        'รายงานซื้อขายทองแบบเรียลไทม์'
      ]
    },
    {
      icon: <FaPiggyBank className="w-12 h-12 text-yellow-500" />,
      title: 'ระบบออมทองรายเดือน',
      features: [
        'ออมทองรายเดือนอัตโนมัติผ่านระบบ',
        'ติดตามมูลค่าทองคำแบบเรียลไทม์',
        'แจ้งเตือนครบกำหนดออมทองประจำเดือน',
        'สรุปผลการออมทองรายบุคคล'
      ]
    },
    {
      icon: <FaCog className="w-12 h-12 text-yellow-500" />,
      title: 'ระบบจัดการราคาทองคำ',
      features: [
        'อัพเดทราคาทองคำอัตโนมัติ',
        'ตั้งค่าส่วนต่างราคาทองได้',
        'กำหนดราคารับซื้อ-ขายทองแบบยืดหยุ่น',
        'แจ้งเตือนราคาทองเคลื่อนไหวทันที'
      ]
    },
    {
      icon: <FaFileAlt className="w-12 h-12 text-yellow-500" />,
      title: 'ระบบรายงานออมทอง',
      features: [
        'รายงานยอดออมทองประจำวัน',
        'สรุปการออมทองรายบุคคล',
        'วิเคราะห์กำไร-ขาดทุนการออมทอง',
        'ส่งออกรายงานออมทองหลายรูปแบบ'
      ]
    },
    {
      icon: <FaLock className="w-12 h-12 text-yellow-500" />,
      title: 'ระบบความปลอดภัยออมทอง',
      features: [
        'ระบบยืนยันตัวตน 2 ชั้น (2FA)',
        'เข้ารหัสข้อมูลออมทองแบบ End-to-End',
        'สำรองข้อมูลออมทองอัตโนมัติ',
        'เข้าระบบออมทองได้หลายอุปกรณ์'
      ]
    }
  ]

  const benefits = [
    'เพิ่มประสิทธิภาพในการบริหารจัดการร้านทอง',
    'ลดความผิดพลาดในการคำนวณและบันทึกข้อมูล',
    'สร้างความน่าเชื่อถือให้กับลูกค้า',
    'ติดตามการออมทองของลูกค้าได้อย่างแม่นยำ',
    'วิเคราะห์ข้อมูลเพื่อวางแผนธุรกิจในอนาคต',
    'ประหยัดเวลาในการทำงานประจำวัน',
    'รองรับการขยายธุรกิจในอนาคต',
    'อัพเดทราคาทองอัตโนมัติตามตลาด'
  ]

  const pricingPlans = [
    {
      name: 'Standard',
      price: '59,000',
      period: '/yr',
      description: 'เหมาะสำหรับธุรกิจร้านทองขนาดเล็ก ที่ต้องการเริ่มการซื้อขายทอง ออมทองออนไลน์',
      features: [
        'จัดการสต๊อกทองพื้นฐาน',
        'ระบบออมทองพื้นฐาน',
        'รายงานสรุปรายเดือน',
        'รองรับผู้ใช้งาน 3 คน',
        'การสำรองข้อมูลรายวัน',
        'การอัพเดทราคาทองรายวัน'
      ]
    },
    {
      name: 'Mastermind',
      price: '99,000',
      period: '/yr',
      description: 'เหมาะสำหรับร้านทองขนาดกลางขึ้นไป พร้อมหน้าเว็บไซต์ร้านทอง ฟังก์ชั่นครบ สร้างความน่าเชื่อถือเเละความไว้วางใจให้กับลูกค้า',
      features: [
        'ทุกฟีเจอร์ในแพ็คเกจ Standard',
        'แอปพลิเคชันมือถือสำหรับลูกค้า',
        'ระบบแจ้งเตือนอัตโนมัติ',
        'รายงานวิเคราะห์ธุรกิจขั้นสูง',
        'รองรับผู้ใช้งาน 10 คน',
        'การอัพเดทราคาทองแบบเรียลไทม์',
        'การเชื่อมต่อกับระบบบัญชี'
      ]
    }
  ]

  return (
    <div>
      <Heading
        title="ระบบออมทองออนไลน์ | ระบบออมทองออนไลน์ที่ดีที่สุดสำหรับร้านทอง | Expert8-Solution"
        description="เปลี่ยนร้านทองของคุณให้ทันสมัยด้วยระบบซื้อขายและออมทองออนไลน์ที่ครบวงจร ใช้งานง่าย ปลอดภัย รองรับการทำงานตลอด 24 ชั่วโมง"
        keywords="ระบบออมทอง, ระบบออมทองออนไลน์, ซื้อขายทองออนไลน์, ระบบร้านทอง, ซอฟต์แวร์ร้านทอง, ระบบจัดการร้านทอง"
      />
      <Header open={open} setOpen={setOpen} activeItem={5} setRoute={setRoute} route={route} />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-yellow-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                ระบบออมทองออนไลน์ <span className="text-yellow-500">ที่ดีที่สุด</span> สำหรับร้านทอง
              </h1>
              <h2 className="mt-6 text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200">
                ให้การซื้อขายทองเเละออมทอง เป็น เรื่องง่าย
              </h2>
              <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
                ตอบโจทย์ยุคดิจิทัล ด้วยฟังก์ชันครบ ใช้งานง่าย ปลอดภัยทุกธุรกรรม สร้างความมั่นใจให้ทุกขั้นตอนของการออมทองและซื้อขายทอง!
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="inline-flex items-center justify-center px-6 py-4 text-base font-medium rounded-full text-white bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 shadow-lg hover:shadow-xl transition-all duration-300">
                  ติดต่อเพื่อขอรายละเอียด
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link href="#demo" className="inline-flex items-center justify-center px-6 py-4 text-base font-medium rounded-full text-yellow-600 bg-white border-2 border-yellow-500 hover:bg-yellow-50 shadow-lg hover:shadow-xl transition-all duration-300">
                  ขอสาธิตระบบฟรี
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-200/30 to-amber-200/30 dark:from-yellow-900/20 dark:to-amber-900/20 rounded-3xl z-0"></div>
              <Image
                src="/gold.webp"
                alt="ระบบออมทองออนไลน์"
                width={600}
                height={500}
                className="w-full h-auto object-cover rounded-3xl shadow-2xl relative z-10"
                onError={(e) => {
                  e.currentTarget.src = "/gold.webp";
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
              ให้การซื้อขายทองเเละออมทอง เป็น เรื่องง่าย
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              ระบบออมทองออนไลน์ของเรามีฟีเจอร์ที่ครบครันเพื่อตอบโจทย์ความต้องการของร้านทองทุกขนาด
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

      {/* Real-time Price Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                รู้ทุกการเคลื่อนไหวราคาทอง ทุกวินาที
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                ให้ลูกค้าของคุณไม่พลาดทุกการเคลื่อนไหวราคา ตอบโจทย์ลูกค้ายุคใหม่ ซื้อขายทอง ออมทอง ได้ทุกที่ ทุกเวลา
              </p>

              <div className="mt-8 grid grid-cols-1 gap-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Transections Insights
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    ติดตามทุกการเคลื่อนไหวของพอร์ตได้เเบบเรียลไทม์
                  </p>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Assets Metrics
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Growth of Customer Assets
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <Image
                src="/gold.webp"
                alt="ราคาทองเรียลไทม์"
                width={600}
                height={500}
                className="w-full h-auto object-cover rounded-3xl shadow-xl"
                onError={(e) => {
                  e.currentTarget.src = "/gold.webp";
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
              ฟังก์ชั่นทั้งหมดของระบบออมทอง
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
                      <FaCheckCircle className="text-yellow-500 text-lg flex-shrink-0 mt-1" />
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              แพ็คเกจระบบออมทอง ซื้อขายทอง ออนไลน์
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold text-yellow-500">฿{plan.price}</span>
                  <span className="text-gray-500 dark:text-gray-400 ml-2">{plan.period}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {plan.description}
                </p>
                <ul className="mb-8 space-y-4">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <FaCheckCircle className="text-yellow-500 text-lg flex-shrink-0 mt-1" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="block text-center px-6 py-3 text-base font-medium rounded-full text-white bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 shadow-lg hover:shadow-xl transition-all duration-300">
                  ติดต่อเพื่อสั่งซื้อ
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="demo" className="py-20 bg-gradient-to-b from-yellow-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                Ready to boost your GoldStore?
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                ยกระดับร้านทองของคุณด้วยระบบออมทองออนไลน์ที่ครบวงจร ใช้งานง่าย ปลอดภัย รองรับการทำงานตลอด 24 ชั่วโมง
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-full text-white bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 shadow-lg hover:shadow-xl transition-all duration-300">
                ติดต่อเพื่อขอรายละเอียดเพิ่มเติม
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                เราพร้อมให้คำปรึกษาและแนะนำแพ็คเกจที่เหมาะสมกับธุรกิจของคุณ
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default GoldShopPage
