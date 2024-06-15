'use client'

import Heading from '@/components/Heading'
import Header from '@/components/Layout/Header'

import React, { useState } from 'react'

import Footer from '../components/Footer'

type Props = {}

const Page = (props: Props) => {
  const [open, setOpen] = useState(false)
  const [route, setRoute] = useState('Login')

  return (
    <div>
      <Heading
        title="Expert8-Solution ทำซอฟเเวร์ พัฒนาเว็บไซต์  Marketing ครบวงจร"
        description="บริษัทเอ็กซ์เพิร์ท เอท โซลูชั่น จำกัด พัฒนาซอฟเเวร์ครบวงจร ระบบคอร์สเรียนออนไลน์ , ระบบ E-Commerce , ระบบจองโรงเเรม เเละการตลาดออนไลน์ทุกเเพลทฟอร์ม "
        keywords="ทำคอร์สเรียนออนไลน์, ระบบคอร์สเรียนออนไลน์, ไอเดียคอร์สเรียนออนไลน์, การขายคอร์สออนไลน์"
      />
      <Header open={open} setOpen={setOpen} activeItem={5} setRoute={setRoute} route={route} />
      <Footer />
    </div>
  )
}

export default Page
