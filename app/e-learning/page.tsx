'use client'

import React, { useState } from 'react'

import Header from '../../components/Layout/Header'
import Footer from '../components/Footer'
import Heading from '../utils/Heading'

type Props = {}

const Page = (props: Props) => {
  const [open, setOpen] = useState(false)
  const [activeItem, setActiveItem] = useState(5)
  const [route, setRoute] = useState('Login')

  return (
    <div>
      <Heading
        title={'Expert8-Solution ทำซอฟเเวร์ พัฒนาเว็บไซต์  Marketing ครบวงจร'}
        description={
          'บริษัทเอ็กซ์เพิร์ท เอท โซลูชั่น จำกัด พัฒนาซอฟเเวร์ครบวงจร ระบบคอร์สเรียนออนไลน์ , ระบบ E-Commerce , ระบบจองโรงเเรม เเละการตลาดออนไลน์ทุกเเพลทฟอร์ม '
        }
        keywords={
          'ทำคอร์สเรียนออนไลน์, ระบบคอร์สเรียนออนไลน์, ไอเดียคอร์สเรียนออนไลน์, การขายคอร์สออนไลน์'
        }
      />
      <Header
        open={open}
        setOpen={setOpen}
        activeItem={activeItem}
        setRoute={setRoute}
        route={route}
      />
      <Footer />
    </div>
  )
}

export default Page
