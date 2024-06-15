'use client'

import Header from '@/components/Layout/Header'

import React, { useState } from 'react'

import Heading from '../../components/Heading'
import Footer from '../components/Footer'
import AboutNew from './AboutNew'

const Page = () => {
  const [open, setOpen] = useState(false)
  const [route, setRoute] = useState('Login')

  return (
    <div>
      <Heading
        title="เกี่ยวกับเรา Expert8-Solution ทำซอฟเเวร์ และพัฒนาเว็บไซต์ Marketing ครบวงจร"
        description="บริษัท Expert8Solution จำกัด พัฒนาซอฟเเวร์ครบวงจร ระบบคอร์สเรียนออนไลน์ , ระบบ E-Commerce , ระบบจองโรงเเรม เเละการตลาดออนไลน์ทุกเเพลทฟอร์ม "
        keywords="ทำคอร์สเรียนออนไลน์, ระบบคอร์สเรียนออนไลน์, ไอเดียคอร์สเรียนออนไลน์, การขายคอร์สออนไลน์"
      />
      <Header open={open} setOpen={setOpen} activeItem={5} setRoute={setRoute} route={route} />
      <AboutNew />
      <Footer />
    </div>
  )
}

export default Page
