'use client'

import Footer from '@/app/components/Footer'
import Heading from '@/components/Heading'
import Header from '@/components/Layout/Header'

import React, { useState } from 'react'

import Banner from './Banner'
import Record from './Record'
import Shere from './Shere'
import Solution from './Solution'
import TheEasy from './TheEasy'
import Working from './Working'

type Props = {}

const Page = (props: Props) => {
  const [open, setOpen] = useState(false)
  const [activeItem, setActiveItem] = useState(1)
  const [route, setRoute] = useState('Login')

  return (
    <div>
      <Heading
        title={'Expert8-Solution บริการทำระบบ E-Learning ระบบเรียนออนไลน์ครบวงจร'}
        description={
          'บริษัทเอ็กซ์เพิร์ท เอท โซลูชั่น จำกัด พัฒนาซอฟเเวร์ครบวงจร ระบบคอร์สเรียนออนไลน์ , ระบบ E-Commerce , ระบบจองโรงเเรม เเละการตลาดออนไลน์ทุกเเพลทฟอร์ม '
        }
        keywords={
          'ทำคอร์สเรียนออนไลน์, ระบบคอร์สเรียนออนไลน์, ไอเดียคอร์สเรียนออนไลน์, การขายคอร์สออนไลน์, ระบบเรียนออนไลน์'
        }
      />
      <Header
        open={open}
        setOpen={setOpen}
        activeItem={activeItem}
        setRoute={setRoute}
        route={route}
      />
      <Banner />
      <TheEasy />
      <Record />
      {/* <Shere /> */}
      {/* <Working /> */}
      <Solution />
      <br />
      <br />
      <Footer />
    </div>
  )
}

export default Page
