'use client'

import Login from '@/app/components/Auth/Login'
import SignUp from '@/app/components/Auth/SignUp'
import Verification from '@/app/components/Auth/Verification'
import CustomModal from '@/components/CustomModal'
import { ThemeSwitcher } from '@/components/ThemeSwitcher'
import avatar from '@/public/assests/avatar.png'
import { useLoadUserQuery } from '@/redux/features/api/apiSlice'
import { useLogOutQuery, useSocialAuthMutation } from '@/redux/features/auth/authApi'
import { isSSR } from '@/utils/index.ts'

import React, { FC, useEffect, useState } from 'react'

import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { toast } from 'react-hot-toast'
import { FaUserLarge } from 'react-icons/fa6'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'

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

  if (isSSR()) {
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
    <div className="w-full bg-white relative dark:bg-[#101726]">
      <div
        className={`${
          active
            ? ' bg-white dark:bg-[#101726] dark:text-white  fixed top-0 left-0 w-full h-[80px] z-[80] border-b dark:border-[#ffffff1c] shadow-xl transition duration-500'
            : 'w-full border-b dark:border-[#ffffff1c] dark:text-white h-[80px] z-[80] dark:shadow'
        }`}
      >
        <div className="w-[95%] 800px:w-[92%] m-auto h-full">
          <div className="w-full h-[80px] flex items-center justify-between p-3 pl-0 md:pl-3">
            <div>
              <Link
                href={'/'}
                className={`text-[18px] md:text-[25px] flex items-center font-Poppins font-[500] text-black dark:text-white`}
              >
                <Image src={'/Expert8logo.png'} width={170} height={95} alt="logo" />
              </Link>
            </div>
            <div className="flex items-center">
              <NavItems isMobile={false} />
              <ThemeSwitcher /> {/* only for mobile */}
              {userData ? (
                <Link href={'/profile'}>
                  <Image
                    src={userData?.user.avatar ? userData.user.avatar.url : avatar}
                    alt=""
                    width={30}
                    height={30}
                    className="w-[35px] h-[35px] rounded-full border-2 mr-2 cursor-pointer"
                    style={{
                      border: activeItem === 5 ? '2px solid #1565c0' : 'none',
                      marginLeft: '15px',
                    }}
                  />
                </Link>
              ) : (
                <FaUserLarge
                  size={35}
                  className="cursor-pointer mx-2 dark:text-gray-400 dark:border-gray-400 text-gray-600 border-2 p-2 rounded-xl"
                  onClick={() => setOpen(true)}
                  style={{ marginLeft: '15px' }}
                />
              )}
              <div className="800px:hidden">
                <HiOutlineMenuAlt3
                  size={25}
                  className="cursor-pointer dark:text-white text-black"
                  onClick={() => setOpenSidebar(true)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* mobile sidebar */}
        {openSidebar && (
          <div
            className="fixed w-full h-screen top-0 left-0 z-[99999] dark:bg-[unset] bg-[#00000024]"
            onClick={handleClose}
            id="screen"
          >
            <div className="w-[70%] fixed z-[999999999] h-screen bg-white dark:bg-slate-900 dark:bg-opacity-90 top-0 right-0">
              <NavItems isMobile={true} />

              <br />
              <br />
              <p className="text-[16px] px-2 pl-5 text-black dark:text-white">
                Copyright @ 2024 Expert8-Solution. All rights reserved.
              </p>
            </div>
          </div>
        )}
      </div>
      {route === 'Login' && open && (
        <CustomModal
          open={open}
          setOpen={setOpen}
          setRoute={setRoute}
          activeItem={activeItem}
          component={Login}
          refetch={refetch}
        />
      )}

      {route === 'Sign-Up' && open && (
        <CustomModal
          open={open}
          setOpen={setOpen}
          setRoute={setRoute}
          activeItem={activeItem}
          component={SignUp}
        />
      )}

      {route === 'Verification' && open && (
        <CustomModal
          open={open}
          setOpen={setOpen}
          setRoute={setRoute}
          activeItem={activeItem}
          component={Verification}
        />
      )}
    </div>
  )
}

export default Header
