import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Services2 = () => {
  const softwareProducts = [
    {
      id: 1,
      title: 'ระบบเรียนออนไลน์ครบวงจร',
      description: 'ระบบเรียนออนไลน์ที่ครบครัน รองรับการขายคอร์สเรียนและอีบุ๊ค ใช้งานง่าย มีระบบชำระเงินที่ครบครัน',
      image: '/lms.png',
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
      title: 'ระบบบริหารจัดการมหาวิทยาลัย',
      description: 'ระบบบริหารจัดการมหาวิทยาลัย',
      image: '/univer.png',
      tag: 'University',
      link: '/university'
    },
    {
      id: 4,
      title: 'ระบบ E-commerce ครบวงจร',
      description: 'ระบบร้านค้าออนไลน์ที่ครบวงจร รองรับการขายสินค้าทุกประเภท มีระบบจัดการสต๊อกและการชำระเงินที่ครบครัน',
      image: '/ecom.png',
      tag: 'E-Commerce',
      link: '#'
    },
    {
      id: 5,
      title: 'ระบบ Affiliate',
      description: 'ระบบตัวแทนจำหน่ายที่ช่วยขยายฐานลูกค้าและเพิ่มยอดขาย ด้วยการให้ค่าคอมมิชชั่นแก่ผู้แนะนำ',
      image: '/afflia.png',
      tag: 'Affiliate',
      link: '#'
    },
    {
      id: 6,
      title: 'เว็บไซต์วัด พร้อมฟังก์ชั่นรับบริจาค',
      description: 'ระบบเว็บไซต์สำหรับวัดหรือมูลนิธิที่มีฟังก์ชั่นรับบริจาค พร้อมหลังบ้านจัดการหน้าเว็บไซต์ ระบบเช็คสลิปอัตโนมัติ และสรุปยอดบริจาครายคน',
      image: '/donate.png',
      tag: 'Temple & Foundation',
      link: '/temple-donation'
    },
    {
      id: 7,
      title: 'เว็บไซต์มูลนิธิ พร้อมฟังก์ชั่นรับบริจาค',
      description: 'ระบบเว็บไซต์สำหรับ มูลนิธิที่มีฟังก์ชั่นรับบริจาค พร้อมหลังบ้านจัดการหน้าเว็บไซต์ ระบบเช็คสลิปอัตโนมัติ และสรุปยอดบริจาครายคน',
      image: '/donate.png',
      tag: 'Foundation',
      link: '/foundation-donation'
    },
    {
      id: 8,
      title: 'ระบบรวมเเชท Facebook line oa',
      description: 'ระบบรวมเเชท Facebook line oa พร้อมฟังก์ชั่นส่งข้อความอัตโนมัติและส่งข้อความกลับอีเมล',
      image: '/allchat.png',
      tag: 'Chat',
      link: '/chat'
    },
    {
      id: 9,
      title: 'ระบบเติมเกมออนไลน์',
      description: 'ระบบเติมเกมออนไลน์',
      image: '/term.png',
      tag: 'Game',
      link: '/game'
    },
    {
      id: 10,
      title: 'ระบบประเมินราคาสินค้าทอง',
      description: 'ระบบประเมินราคาทองคำและเครื่องประดับที่แม่นยำ อัพเดทราคาทองตามตลาดแบบเรียลไทม์',
      image: '/es.png',
      tag: 'Gold Valuation',
      link: '#'
    }
  ];
 
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-20 overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4">Our Solutions</span>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">บริการซอฟต์แวร์ของเรา</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">เรามีโซลูชั่นซอฟต์แวร์ที่หลากหลายเพื่อตอบโจทย์ความต้องการทางธุรกิจของคุณ</p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {softwareProducts.map((product) => (
            <motion.div 
              key={product.id} 
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              className="bg-white dark:bg-gray-800 shadow-xl rounded-3xl overflow-hidden transform transition-all duration-500 hover:shadow-2xl"
            >
              <div className="relative h-64 md:h-72 lg:h-80 overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-100/30 to-indigo-100/30 dark:from-blue-900/20 dark:to-indigo-900/20 z-0"></div>
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="absolute top-4 left-4 inline-block px-3 py-1 text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/50 rounded-full z-10">
                  {product.tag}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white mb-2 line-clamp-2">
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
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">ต้องการข้อมูลเพิ่มเติมเกี่ยวกับบริการของเรา?</h3>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">ติดต่อเราเพื่อรับคำปรึกษาฟรีและรับข้อเสนอพิเศษสำหรับธุรกิจของคุณ</p>
          <div className="mt-8">
            <Link href="/contact" className="inline-flex items-center justify-center px-6 py-4 text-base font-medium rounded-full text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all duration-300">
              ติดต่อเรา
              <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services2