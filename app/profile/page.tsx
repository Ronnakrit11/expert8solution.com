'use client'

import Header from '@/components/Layout/Header'

import React, { FC, useState } from 'react'

import { useSelector } from 'react-redux'

import Heading from '../../components/Heading'
import Protected from '../../hooks/useProtected'
import Footer from '../components/Footer'
import Profile from '../components/Profile/Profile'

type Props = {}

const Page: FC<Props> = props => {
  const [open, setOpen] = useState(false)
  const [route, setRoute] = useState('Login')
  const { user } = useSelector((state: any) => state.auth)

  return (
    <div className="min-h-screen">
      <Protected>
        <Heading
          title={`${user?.name} profile - Elearning`}
          description="ELearning is a platform for students to learn and get help from teachers"
          keywords="Prograaming,MERN,Redux,Machine Learning"
        />
        <Header open={open} setOpen={setOpen} activeItem={5} setRoute={setRoute} route={route} />
        <Profile user={user} />
        <Footer />
      </Protected>
    </div>
  )
}

export default Page
