'use client'

import Login from '@/app/components/Auth/Login'
import SignUp from '@/app/components/Auth/SignUp'
import Verification from '@/app/components/Auth/Verification'
import CustomModal from '@/components/CustomModal'
import { ThemeSwitcher } from '@/components/ThemeSwitcher'
import avatar from '@/public/assests/avatar.png'
import { useLoadUserQuery } from '@/redux/features/api/apiSlice'
import { useLogOutQuery, useSocialAuthMutation } from '@/redux/features/auth/authApi'
import { isCSR } from '@/utils/index.ts'

import React, { FC, useEffect, useState } from 'react'

import clsx from 'clsx'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { toast } from 'react-hot-toast'
import { FaUserLarge } from 'react-icons/fa6'
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi'

import NavItems from './components/NavItems'

type Props = {
  open: boolean
  setOpen: (open: boolean) => void
  activeItem: number
  route: string
  setRoute: (route: string) => void
}

const Header: FC<Props> = ({ activeItem, setOpen, route, open, setRoute }) => {
  const [active, setActive] = useState(false)
  const [openSidebar, setOpenSidebar] = useState(false)
  const { data: userData, isLoading, refetch } = useLoadUserQuery(undefined, {})
  const { data } = useSession()
  const [socialAuth, { isSuccess }] = useSocialAuthMutation()
  const [logout, setLogout] = useState(false)
  const {} = useLogOutQuery(undefined, {
    skip: !logout ? true : false,
  })

  if (isCSR()) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 85) {
        setActive(true)
      } else {
        setActive(false)
      }
    })
  }

  const handleClose = (e: any) => {
    if (e.target.id === 'screen') {
      setOpenSidebar(false)
    }
  }

  useEffect(() => {
    if (!isLoading) {
      if (!userData) {
        if (data) {
          socialAuth({
            email: data?.user?.email,
            name: data?.user?.name,
            avatar: data.user?.image,
          })

          setTimeout(() => {
            refetch()
          }, 2000)
        }
      }
      if (data === null) {
        if (isSuccess) {
          toast.success('Login Successfully')
        }
      }
      if (data === null && !isLoading && !userData) {
        setLogout(true)
      }
    }
  }, [data, userData, isLoading])

  return (
    <header className="w-full relative z-50">
      <div
        className={`${
          active
            ? 'bg-white dark:bg-[#101726] dark:text-white fixed top-0 left-0 w-full shadow-lg transition-all duration-300'
            : 'bg-white dark:bg-[#101726] dark:text-white w-full transition-all duration-300'
        } border-b dark:border-[#ffffff1c]`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0">
              <Link
                href={'/'}
                className="flex items-center"
              >
                <Image src={'/Expert8logo.webp'} width={170} height={95} alt="Expert8 Solution" className="h-10 w-auto" />
              </Link>
            </div>
            
            <div className="hidden md:flex items-center space-x-4">
              <NavItems isMobile={false} />
              <ThemeSwitcher />
              
              {userData ? (
                <Link href="/profile" className="relative group">
                  <div className="relative">
                    <Image
                      src={userData?.user.avatar ? userData.user.avatar.url : avatar}
                      alt="Profile"
                      width={40}
                      height={40}
                      className={clsx(
                        'rounded-full object-cover transition-all duration-300 group-hover:ring-4',
                        activeItem === 5 ? 'ring-2 ring-blue-500' : 'ring-1 ring-gray-200 dark:ring-gray-700'
                      )}
                    />
                    <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 ring-2 ring-white dark:ring-gray-900"></span>
                  </div>
                  <div className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-800 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <Link href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">Your Profile</Link>
                    <Link href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">Settings</Link>
                    <button onClick={() => setLogout(true)} className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-700">Sign out</button>
                  </div>
                </Link>
              ) : (
                <button
                  onClick={() => setOpen(true)}
                  className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
                >
                  <FaUserLarge className="mr-2 h-4 w-4" />
                  <span>Sign in</span>
                </button>
              )}
            </div>
            
            <div className="md:hidden flex items-center">
              <ThemeSwitcher />
              
              {userData ? (
                <Link href="/profile">
                  <Image
                    src={userData?.user.avatar ? userData.user.avatar.url : avatar}
                    alt="Profile"
                    width={35}
                    height={35}
                    className="ml-4 rounded-full ring-2 ring-gray-200 dark:ring-gray-700"
                  />
                </Link>
              ) : (
                <button
                  onClick={() => setOpen(true)}
                  className="ml-4 inline-flex items-center justify-center rounded-full border border-gray-300 bg-white p-2 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
                >
                  <FaUserLarge className="h-5 w-5" />
                </button>
              )}
              
              <button
                onClick={() => setOpenSidebar(true)}
                className="ml-4 inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <HiOutlineMenuAlt3 className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile sidebar */}
      {openSidebar && (
        <div
          className="fixed inset-0 z-50 bg-gray-600 bg-opacity-75 transition-opacity"
          onClick={handleClose}
          id="screen"
        >
          <div className="fixed inset-y-0 right-0 flex max-w-full">
            <div className="relative w-screen max-w-md transform transition ease-in-out duration-300 translate-x-0">
              <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                <button
                  onClick={() => setOpenSidebar(false)}
                  className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                >
                  <span className="sr-only">Close panel</span>
                  <HiX className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              
              <div className="flex h-full flex-col overflow-y-auto bg-white dark:bg-gray-900 py-6 shadow-xl">
                <div className="px-4 sm:px-6">
                  <h2 className="text-lg font-medium text-gray-900 dark:text-white" id="slide-over-title">
                    Expert8 Solution
                  </h2>
                </div>
                <div className="relative mt-6 flex-1 px-4 sm:px-6">
                  <NavItems isMobile={true} />
                  
                  <div className="mt-10 border-t border-gray-200 dark:border-gray-700 pt-6">
                    {userData ? (
                      <div className="flex items-center space-x-3 px-4">
                        <Image
                          src={userData?.user.avatar ? userData.user.avatar.url : avatar}
                          alt="Profile"
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                        <div>
                          <p className="text-sm font-medium text-gray-900 dark:text-white">{userData.user.name}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">{userData.user.email}</p>
                        </div>
                      </div>
                    ) : (
                      <div className="px-4">
                        <button
                          onClick={() => {
                            setOpen(true);
                            setOpenSidebar(false);
                          }}
                          className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
                        >
                          Sign in
                        </button>
                      </div>
                    )}
                  </div>
                  
                  <div className="mt-8 px-4">
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Copyright @ 2024 Expert8-Solution. All rights reserved.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Auth Modals */}
      {route === 'Login' && open && (
        <CustomModal
          open={open}
          setOpen={setOpen}
          setRoute={setRoute}
          component={Login}
          refetch={refetch}
        />
      )}

      {route === 'Sign-Up' && open && (
        <CustomModal open={open} setOpen={setOpen} setRoute={setRoute} component={SignUp} />
      )}

      {route === 'Verification' && open && (
        <CustomModal open={open} setOpen={setOpen} setRoute={setRoute} component={Verification} />
      )}
    </header>
  )
}

export default React.memo(Header)