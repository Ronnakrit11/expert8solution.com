import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'

const Services2 = () => {
  const softwareProducts = [
    {
      id: 1,
      title: 'ระบบเรียนออนไลน์ครบวงจร',
      description: 'ระบบเรียนออนไลน์ที่ครบครัน รองรับการขายคอร์สเรียนและอีบุ๊ค ใช้งานง่าย มีระบบชำระเงินที่ครบครัน',
      image: '/courseebook1.webp',
      tag: 'E-Learning',
      link: '/e-learning'
    },
    {
      id: 2,
      title: 'ระบบออมทอง บริหารร้านทอง',
      description: 'ระบบบริหารจัดการร้านทอง ช่วยในการจัดการสต๊อกสินค้า บัญชีลูกค้า และการทำธุรกรรมต่างๆ',
      image: '/goldar.png',
      tag: 'Gold Shop',
      link: '/gold-shop'
    },
    {
      id: 3,
      title: 'ระบบประเมินราคาสินค้าทอง',
      description: 'ระบบประเมินราคาทองคำและเครื่องประดับที่แม่นยำ อัพเดทราคาทองตามตลาดแบบเรียลไทม์',
      image: '/gold-valuation.webp',
      tag: 'Gold Valuation',
      link: '#'
    },
    {
      id: 4,
      title: 'ระบบ E-commerce ครบวงจร',
      description: 'ระบบร้านค้าออนไลน์ที่ครบวงจร รองรับการขายสินค้าทุกประเภท มีระบบจัดการสต๊อกและการชำระเงินที่ครบครัน',
      image: '/ecommerce.webp',
      tag: 'E-Commerce',
      link: '#'
    },
    {
      id: 5,
      title: 'ระบบ Affiliate',
      description: 'ระบบตัวแทนจำหน่ายที่ช่วยขยายฐานลูกค้าและเพิ่มยอดขาย ด้วยการให้ค่าคอมมิชชั่นแก่ผู้แนะนำ',
      image: '/affiliate.webp',
      tag: 'Affiliate',
      link: '#'
    },
    {
      id: 6,
      title: 'เว็บไซต์วัดหรือมูลนิธิ พร้อมฟังก์ชั่นรับบริจาค',
      description: 'ระบบเว็บไซต์สำหรับวัดหรือมูลนิธิที่มีฟังก์ชั่นรับบริจาค พร้อมหลังบ้านจัดการหน้าเว็บไซต์ ระบบเช็คสลิปอัตโนมัติ และสรุปยอดบริจาครายคน',
      image: '/donate.png',
      tag: 'Temple & Foundation',
      link: '/temple-donation'
    }
  ];

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-20 overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4">Our Solutions</span>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">บริการซอฟต์แวร์ของเรา</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">เรามีโซลูชั่นซอฟต์แวร์ที่หลากหลายเพื่อตอบโจทย์ความต้องการทางธุรกิจของคุณ</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {softwareProducts.map((product) => (
            <div key={product.id} className="bg-white dark:bg-gray-800 shadow-xl rounded-3xl overflow-hidden transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
              <div className="relative h-64 md:h-72 lg:h-80">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-100/30 to-indigo-100/30 dark:from-blue-900/20 dark:to-indigo-900/20 z-0"></div>
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />
                <span className="absolute top-4 left-4 inline-block px-3 py-1 text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/50 rounded-full">
                  {product.tag}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">
                  {product.title}
                </h3>
                <p className="text-base font-normal text-gray-600 dark:text-gray-300 mb-4 h-20 overflow-hidden">
                  {product.description}
                </p>
                <Link href={product.link} className="group inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-full text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-md hover:shadow-lg transition-all duration-300">
                  ดูรายละเอียดเพิ่มเติม
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">ต้องการข้อมูลเพิ่มเติมเกี่ยวกับบริการของเรา?</h3>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">ติดต่อเราเพื่อรับคำปรึกษาฟรีและรับข้อเสนอพิเศษสำหรับธุรกิจของคุณ</p>
          <div className="mt-8">
            <Link href="/contact" className="inline-flex items-center justify-center px-6 py-4 text-base font-medium rounded-full text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all duration-300">
              ติดต่อเรา
              <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services2