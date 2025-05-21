import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Slider from 'react-slick'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'
import './slider.css'

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
      image: '/gold-shop.webp',
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
    }
  ];

  // Custom arrow components for the slider
  const NextArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
      <div
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-blue-600 dark:text-white"
        onClick={onClick}
      >
        <FaArrowRight className="text-xl" />
      </div>
    );
  };

  const PrevArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
      <div
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-blue-600 dark:text-white"
        onClick={onClick}
      >
        <FaArrowLeft className="text-xl" />
      </div>
    );
  };

  // Settings for the slider/carousel
  const settings = {
    dots: true,
    dotsClass: "slick-dots custom-dots",
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    cssEase: "cubic-bezier(0.645, 0.045, 0.355, 1.000)",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-20 overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4">Our Solutions</span>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">บริการซอฟต์แวร์ของเรา</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">เรามีโซลูชั่นซอฟต์แวร์ที่หลากหลายเพื่อตอบโจทย์ความต้องการทางธุรกิจของคุณ</p>
        </div>
        
        <div className="relative slider-container">
          <Slider {...settings} className="mb-12 product-slider">
          {softwareProducts.map((product) => (
            <div key={product.id} className="px-4 py-6">
              <div className="bg-white dark:bg-gray-800 shadow-xl rounded-3xl w-full overflow-hidden transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
                <div className="grid grid-cols-1 items-center lg:grid-cols-2 gap-0">
                  <div className="p-8 sm:p-12 lg:p-16 z-10 relative">
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/50 rounded-full mb-4">
                      {product.tag}
                    </span>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mt-2 sm:text-4xl lg:text-5xl">
                      {product.title}
                    </h2>
                    <p className="text-base font-normal text-gray-600 dark:text-gray-300 mt-6 leading-relaxed">
                      {product.description}
                    </p>
                    <div className="mt-10">
                      <Link href={product.link} className="group inline-flex items-center justify-center px-6 py-4 text-base font-medium rounded-full text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all duration-300">
                        ดูรายละเอียดเพิ่มเติม
                        <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </div>
                  </div>
                  <div className="relative h-full min-h-[400px] lg:min-h-[500px]">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-100/30 to-indigo-100/30 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-r-3xl z-0"></div>
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={600}
                      height={600}
                      className="w-full h-full object-cover object-center rounded-r-3xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
          </Slider>
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
