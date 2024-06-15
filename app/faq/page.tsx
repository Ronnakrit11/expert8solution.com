'use client'

import React, { useState } from 'react'

import Heading from '../../components/Heading'
import Header from '../../components/Layout/Header'
import FAQ from '../components/FAQ/FAQ'
import Footer from '../components/Footer'

type Props = {}

const Page = (props: Props) => {
  const [open, setOpen] = useState(false)
  const [route, setRoute] = useState('Login')

  return (
    <div className="min-h-screen">
      <Heading
        title="FAQ - Elearning"
        description="Elearning is a learning management system for helping programmers."
        keywords="programming,mern"
      />
      <Header open={open} setOpen={setOpen} activeItem={5} setRoute={setRoute} route={route} />
      <FAQ />
      <Footer />
    </div>
  )
}

export default Page
