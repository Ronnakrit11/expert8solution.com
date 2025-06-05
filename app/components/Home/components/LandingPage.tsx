import React, { useState } from 'react'

import Image from 'next/image'
import { FaEnvelope } from 'react-icons/fa6'
import { motion } from 'framer-motion'

const LandingPage = () => {
  const [email, setEmail] = useState<any>('')
  const [result, setResult] = useState('')

  const onSubmitToW3 = async () => {
    setResult('Sending....')

    const formData: any = new FormData()
    formData.append('email', email)
    formData.append('access_key', '7f1167f1-42d2-4065-b7f4-37ee69e92c9b')
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    })

    const data = await response.json()

    if (data.success) {
      setResult('Thank you!')
    } else {
      console.log('Error', data)
      setResult(data.message)
    }
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  }

  return (
    <div className="bg-white dark:bg-[#101726] p-4">
      <div className="container mx-auto">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="py-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8"
        >
          <motion.div variants={itemVariants} className="flex flex-col justify-center">
            <motion.div variants={itemVariants} className="flex justify-center sm:justify-center md:justify-start">
              <h1>
                <span className="text-center text-3xl font-bold text-blue-900 dark:text-white sm:text-6xl lg:text-left lg:text-5xl">
                  E-LEARNING
                </span>
                <span className="text-3xl sm:text-3xl lg:text-center lg:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent inline-block text-transparent bg-clip-text">
                  SOLUTION
                </span>
              </h1>
            </motion.div>
            <motion.h2 variants={itemVariants} className="my-6 lg:my-12 text-lg text-gray-600 dark:text-gray-300 sm:text-xl">
              บริการทำระบบเรียนออนไลน์ เเพลทฟอร์มการเรียนออนไลน์ครบวงจรรวมถึงการทำ Marketing
              เเละพัฒนาเว็บไซต์ทุกประเภท
            </motion.h2>
            <motion.div variants={itemVariants} className="relative flex items-center rounded-full border border-primary/20 bg-white dark:bg-[#101726] p-1 px-2 shadow-md focus-within:ring-2 dark:border-white/10 dark:bg-dark dark:text-white md:p-2 lg:pr-3 overflow-hidden">
              <FaEnvelope className="h-6 w-6 ml-2 text-gray-600" />
              <input
                placeholder="Your Email Address"
                value={email}
                onChange={e => {
                  setEmail(e.target.value)
                }}
                className="w-full rounded-full bg-transparent p-4 placeholder-gray-600 outline-none dark:placeholder-white dark:text-[#fff] text-[#000]"
              />
              <button
                type="button"
                onClick={onSubmitToW3}
                className="bg-primary hover:bg-primary-dark py-5 w-[150px] px-4 text-white rounded-full text-[16px] transition-all duration-300"
              >
                {result ? result : `Sent`}
              </button>
            </motion.div>
          </motion.div>
          <motion.div 
            variants={itemVariants}
            className="p-4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              width={1000}
              height={1000}
              alt="ระบบคอร์สเรียนออนไลน์"
              src="/mm23221.webp"
              className="w-full"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default LandingPage