'use client'

import GridThreeGradient from '@/components/GridThreeGradient'
import Header from '@/components/Layout/Header'
import SocialMediaWidget from '@/components/SocialMediaWidjet'
import { track } from '@vercel/analytics'

import React, { useEffect, useState } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'
import dynamic from 'next/dynamic'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

import Footer from '../Footer'
import Feature from './components/Feature'
import FooterContact from './components/FooterContact'
import LandingPage from './components/LandingPage'
import LeftImageContent from './components/LeftImageContent'
import Review from './components/Review'
import Services2 from './components/Services2'
import Tab from './components/Tab'
import Trust from './components/Trust'

const VideoBanner = dynamic(() => import('./components/VideoBanner'), { ssr: false })

function Home({ webInfo }: any) {
  console.log('🚀 ~ file: Home.tsx:24 ~ Home ~ layout:', webInfo)
  const [open, setOpen] = useState(false)
  const [route, setRoute] = useState('Login')

  useEffect(() => {
    AOS.init({
      once: true,
      delay: 300,
    })

    track('home_view')
  }, [])

  return (
    <div>
      <Header open={open} setOpen={setOpen} activeItem={0} setRoute={setRoute} route={route} />
      <SocialMediaWidget />
      {/* New Theme */}
      <LandingPage />
      <VideoBanner />
      <Trust />
      <Tab />
      {/* <Services /> */}
      <Services2 />
      <LeftImageContent />
      <Feature />
      <GridThreeGradient />
      <Review />
      <FooterContact />

      <Footer />
    </div>
  )
}

export default Home
