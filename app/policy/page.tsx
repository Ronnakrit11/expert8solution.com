'use client'

import Heading from '@/components/Heading'
import Header from '@/components/Layout/Header'

import React, { useState } from 'react'

import Footer from '../components/Footer'
import Policy from './Policy'

const Page = () => {
  const [open, setOpen] = useState(false)
  const [route, setRoute] = useState('Login')

  return (
    <div>
      <Heading
        title="Policy - Elearning"
        description="Elearning is a learning management system for helping programmers."
        keywords="programming,mern"
      />
      <Header open={open} setOpen={setOpen} activeItem={5} setRoute={setRoute} route={route} />
      <Policy />
      <Footer />
    </div>
  )
}

export default Page
