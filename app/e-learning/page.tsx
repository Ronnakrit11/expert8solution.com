'use client'

import Heading from '@/components/Heading'
import Header from '@/components/Layout/Header'
import LandingPage from '../components/Home/components/LandingPage'
import VideoBanner from '../components/Home/components/VideoBanner'
import Trust from '../components/Home/components/Trust/index'
import Tab from '../components/Home/components/Tab'
import LeftImageContent from '../components/Home/components/LeftImageContent'
import Feature from '../components/Home/components/Feature'
import Review from '../components/Home/components/Review'
import dynamic from 'next/dynamic'

// Dynamic imports
const PricingPlan = dynamic(() => import('@/components/PricingPlan'))
const SocialMediaWidget = dynamic(() => import('@/components/SocialMediaWidjet'))

import React, { useState } from 'react'

import Footer from '../components/Footer'

type Props = {}

const ELearningPage = (props: Props) => {
  const [open, setOpen] = useState(false)
  const [route, setRoute] = useState('Login')

  return (
    <div>
      <Heading
        title="ระบบเรียนออนไลน์ครบวงจร | Expert8-Solution"
        description="ระบบเรียนออนไลน์ที่ครบครัน รองรับการขายคอร์สเรียนและอีบุ๊ค ใช้งานง่าย มีระบบชำระเงินที่ครบครัน"
        keywords="ทำคอร์สเรียนออนไลน์, ระบบคอร์สเรียนออนไลน์, ไอเดียคอร์สเรียนออนไลน์, การขายคอร์สออนไลน์, e-learning, ระบบขายคอร์สออนไลน์"
      />
      <Header open={open} setOpen={setOpen} activeItem={5} setRoute={setRoute} route={route} />
      <SocialMediaWidget />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                ระบบ<span className="text-blue-500">เรียนออนไลน์</span>ครบวงจร
              </h1>
              <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
                ระบบเรียนออนไลน์ที่ครบครัน รองรับการขายคอร์สเรียนและอีบุ๊ค ใช้งานง่าย มีระบบชำระเงินที่ครบครัน พร้อมฟีเจอร์ที่ตอบโจทย์ผู้สอนและผู้เรียน
              </p>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-200/30 to-indigo-200/30 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-3xl z-0"></div>
              <img
                src="/courseebook1.webp"
                alt="ระบบเรียนออนไลน์ครบวงจร"
                className="w-full h-auto object-cover rounded-3xl shadow-2xl relative z-10"
              />
            </div>
          </div>
        </div>
      </section>
      
      <LandingPage />
      <VideoBanner />
      <Trust />
      <Tab />
      <LeftImageContent />
      <Feature />
      <PricingPlan />
      <Review />
      
      <Footer />
    </div>
  )
}

export default ELearningPage
