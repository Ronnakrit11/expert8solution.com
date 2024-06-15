'use client'

import Header from '@/components/Layout/Header'

import React, { useState } from 'react'

import Footer from '../components/Footer'
import Pricing from './components/Pricing'

const Page = () => {
  const [open, setOpen] = useState(false)
  const [route, setRoute] = useState('Login')

  return (
    <div>
      <Header open={open} setOpen={setOpen} activeItem={5} setRoute={setRoute} route={route} />
      <Pricing />
      <Footer />
    </div>
  )
}

export default Page
