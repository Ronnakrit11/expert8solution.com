'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa'
import { IoStorefront, IoAnalytics, IoPhonePortrait, IoShieldCheckmark, IoCloudUpload, IoBarChart } from 'react-icons/io5'

import Heading from '@/components/Heading'
import Header from '@/components/Layout/Header'
import Footer from '@/app/components/Footer'

const GoldShopPage = () => {
  const [open, setOpen] = useState(false)
  const [route, setRoute] = useState('Login')

  const features = [
    {
      icon: <IoStorefront className="w-12 h-12 text-yellow-500" />,
      title: 'การจัดการสต๊อกทอง',
      description: 'บริหารสต๊อกทองคำได้อย่างมีประสิทธิภาพ ติดตามน้ำหนัก ประเภท และมูลค่าของทองคำในร้านแบบเรียลไทม์'
    },
    {
      icon: <IoAnalytics className="w-12 h-12 text-yellow-500" />,
      title: 'ระบบออมทอง',
      description: 'จัดการโปรแกรมออมทองสำหรับลูกค้า ติดตามการสะสม การชำระเงิน และกำหนดการครบกำหนด'
    },
    {
      icon: <IoPhonePortrait className="w-12 h-12 text-yellow-500" />,
      title: 'แอปพลิเคชันมือถือสำหรับลูกค้า',
      description: 'ให้ลูกค้าติดตามการออมทอง ตรวจสอบราคาทองปัจจุบัน และรับการแจ้งเตือนผ่านแอปพลิเคชันมือถือ'
    },
    {
      icon: <IoShieldCheckmark className="w-12 h-12 text-yellow-500" />,
      title: 'ความปลอดภัยสูง',
      description: 'ระบบรักษาความปลอดภัยข้อมูลที่เข้มงวด การเข้ารหัสข้อมูล และการสำรองข้อมูลอัตโนมัติ'
    },
    {
      icon: <IoCloudUpload className="w-12 h-12 text-yellow-500" />,
      title: 'คลาวด์เบส',
      description: 'เข้าถึงข้อมูลได้ทุกที่ทุกเวลา ไม่ต้องกังวลเรื่องการติดตั้งหรือบำรุงรักษาเซิร์ฟเวอร์'
    },
    {
      icon: <IoBarChart className="w-12 h-12 text-yellow-500" />,
      title: 'รายงานและการวิเคราะห์',
      description: 'รายงานสรุปผลการดำเนินงาน ยอดขาย กำไร และพฤติกรรมลูกค้าเพื่อช่วยในการตัดสินใจทางธุรกิจ'
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
      name: 'Basic',
      price: '15,000',
      period: 'ต่อปี',
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
      name: 'Professional',
      price: '25,000',
      period: 'ต่อปี',
      features: [
        'ทุกฟีเจอร์ในแพ็คเกจ Basic',
        'แอปพลิเคชันมือถือสำหรับลูกค้า',
        'ระบบแจ้งเตือนอัตโนมัติ',
        'รายงานวิเคราะห์ธุรกิจขั้นสูง',
        'รองรับผู้ใช้งาน 10 คน',
        'การอัพเดทราคาทองแบบเรียลไทม์',
        'การเชื่อมต่อกับระบบบัญชี'
      ]
    },
    {
      name: 'Enterprise',
      price: 'ติดต่อเรา',
      period: 'สำหรับแผนกำหนดเอง',
      features: [
        'ทุกฟีเจอร์ในแพ็คเกจ Professional',
        'การปรับแต่งระบบตามความต้องการ',
        'การฝึกอบรมพนักงานเต็มรูปแบบ',
        'ผู้ดูแลระบบส่วนตัว',
        'รองรับผู้ใช้งานไม่จำกัด',
        'การวิเคราะห์ข้อมูลขั้นสูง',
        'การรับประกันระบบ 24/7'
      ]
    }
  ]

  return (
    <div>
      <Heading
        title="ระบบออมทอง บริหารร้านทอง | Expert8-Solution"
        description="ระบบบริหารจัดการร้านทอง ช่วยในการจัดการสต๊อกสินค้า บัญชีลูกค้า และการทำธุรกรรมต่างๆ พร้อมระบบออมทองที่ครบครัน"
        keywords="ระบบร้านทอง, ระบบออมทอง, บริหารร้านทอง, ซอฟต์แวร์ร้านทอง, ระบบจัดการร้านทอง"
      />
      <Header open={open} setOpen={setOpen} activeItem={5} setRoute={setRoute} route={route} />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-yellow-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <span className="inline-block px-3 py-1 text-sm font-semibold text-yellow-600 dark:text-yellow-400 bg-yellow-100 dark:bg-yellow-900/30 rounded-full mb-4">Gold Shop Management System</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                ระบบบริหาร<span className="text-yellow-500">ร้านทอง</span> และ<span className="text-yellow-500">ออมทอง</span> ครบวงจร
              </h1>
              <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
                ยกระดับการบริหารร้านทองของคุณด้วยระบบที่ครบครัน จัดการสต๊อกทอง บัญชีลูกค้า โปรแกรมออมทอง และการทำธุรกรรมต่างๆ ได้อย่างมีประสิทธิภาพ
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
                alt="ระบบบริหารร้านทอง"
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

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-sm font-semibold text-yellow-600 dark:text-yellow-400 bg-yellow-100 dark:bg-yellow-900/30 rounded-full mb-4">Features</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              คุณสมบัติหลักของระบบ
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              ระบบบริหารร้านทองและออมทองของเรามีฟีเจอร์ที่ครบครันเพื่อตอบโจทย์ความต้องการของร้านทองทุกขนาด
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
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

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <span className="inline-block px-3 py-1 text-sm font-semibold text-yellow-600 dark:text-yellow-400 bg-yellow-100 dark:bg-yellow-900/30 rounded-full mb-4">Benefits</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                ประโยชน์ที่จะได้รับ
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                การใช้ระบบบริหารร้านทองและออมทองของเราจะช่วยให้ธุรกิจของคุณเติบโตอย่างมั่นคงและยั่งยืน
              </p>

              <div className="mt-8 grid grid-cols-1 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <FaCheckCircle className="text-yellow-500 text-xl flex-shrink-0 mt-1" />
                    <p className="text-gray-700 dark:text-gray-300">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2">
              <Image
                src="/gold.webp"
                alt="ประโยชน์ของระบบบริหารร้านทอง"
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

      {/* Pricing Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-sm font-semibold text-yellow-600 dark:text-yellow-400 bg-yellow-100 dark:bg-yellow-900/30 rounded-full mb-4">Pricing</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              แพ็คเกจและราคา
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              เลือกแพ็คเกจที่เหมาะสมกับขนาดและความต้องการของธุรกิจคุณ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-gray-50 dark:bg-gray-700 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${index === 1 ? 'border-2 border-yellow-500 relative' : ''}`}>
                {index === 1 && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-yellow-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                    แนะนำ
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-bold text-yellow-500">฿{plan.price}</span>
                  <span className="text-gray-500 dark:text-gray-400 ml-2">{plan.period}</span>
                </div>
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

      {/* Demo Request Section */}
      <section id="demo" className="py-20 bg-gradient-to-b from-yellow-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <span className="inline-block px-3 py-1 text-sm font-semibold text-yellow-600 dark:text-yellow-400 bg-yellow-100 dark:bg-yellow-900/30 rounded-full mb-4">Free Demo</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                ขอสาธิตระบบฟรี
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                ลงทะเบียนเพื่อขอรับการสาธิตระบบฟรีและคำปรึกษาจากผู้เชี่ยวชาญของเรา
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-full text-white bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 shadow-lg hover:shadow-xl transition-all duration-300">
                ลงทะเบียนขอสาธิตระบบฟรี
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                ไม่มีค่าใช้จ่าย ไม่มีข้อผูกมัด เราพร้อมให้คำปรึกษา
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
