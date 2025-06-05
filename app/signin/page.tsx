'use client'

import React, { useState } from 'react'
import { useLoadUserQuery } from '@/redux/features/api/apiSlice'
import { redirect, useRouter } from 'next/navigation'
import Login from '../components/Auth/Login'
import SignUp from '../components/Auth/SignUp'
import { motion } from 'framer-motion'

const SignInPage = () => {
  const { data, refetch } = useLoadUserQuery(undefined, {})
  const [route, setRoute] = useState('Login')
  const [open, setOpen] = useState(true)
  const router = useRouter()

  // Redirect to home if user is already logged in
  React.useEffect(() => {
    if (data) {
      redirect('/')
    }
  }, [data])
  
  // Handle page navigation when modal is closed
  React.useEffect(() => {
    if (!open) {
      router.push('/')
    }
  }, [open, router])

  return (
    <div className="min-h-screen w-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full space-y-8 bg-white dark:bg-gray-800 p-6 sm:p-10 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700"
      >
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
            {route === 'Login' ? 'Sign in to your account' : 'Create your account'}
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            {route === 'Login' ? 'Welcome back to Expert8Solution' : 'Join the Expert8Solution community'}
          </p>
        </div>
        
        {route === 'Login' ? (
          <Login setRoute={setRoute} setOpen={setOpen} refetch={refetch} />
        ) : (
          <SignUp setRoute={setRoute} />
        )}
      </motion.div>
    </div>
  )
}

export default SignInPage
