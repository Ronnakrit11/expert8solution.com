import React, { FC } from 'react'

import { Avatar } from 'flowbite-react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineFilePpt, AiOutlineLogout } from 'react-icons/ai'
import { GrStatusGoodSmall } from 'react-icons/gr'
import { MdOutlineAdminPanelSettings } from 'react-icons/md'
import { RiLockPasswordLine } from 'react-icons/ri'
import { SiCoursera } from 'react-icons/si'

import avatarDefault from '../../../public/assests/avatar.png'

type Props = {
  user: any
  active: number
  avatar: string | null
  setActive: (active: number) => void
  logOutHandler: any
}

const SideBarProfile: FC<Props> = ({ user, active, avatar, setActive, logOutHandler }) => {
  console.log(user)
  return (
    <div className="w-full p-0 lg:p-4 sm:p-0">
      <div
        className={`w-full hover:bg-[#f3f4f6] rounded-xl text-black flex items-center px-3 py-4 cursor-pointer ${
          active === 1 ? 'dark:bg-slate-800 bg-[#f3f4f6]' : 'bg-transparent'
        }`}
        onClick={() => setActive(1)}
      >
        <Image
          src={user.avatar || avatar ? user.avatar.url || avatar : avatarDefault}
          alt=""
          width={20}
          height={20}
          className="w-[35px] h-[35px] 800px:w-[40px] 800px:h-[40px] cursor-pointer rounded-full"
        />
        <div className=" flex flex-col justify-center items-center ml-2">
          <h5 className="800px:block hidden font-Poppins dark:text-white ">{user?.name}</h5>
          <div className="hidden sm:flex justify-center items-center">
            <GrStatusGoodSmall className="text-green-500" />
            <p className="text-gray-400 text-[12px]">กำลังใช้งาน</p>
          </div>
        </div>
      </div>
      <div
        className={`w-full flex justify-center sm:justify-center lg:justify-start hover:bg-[#f3f4f6] rounded-xl items-center px-3 py-4 cursor-pointer ${
          active === 2 ? 'dark:bg-slate-800 bg-[#f3f4f6]' : 'bg-transparent'
        }`}
        onClick={() => setActive(2)}
      >
        <RiLockPasswordLine size={20} className="dark:text-white text-black" />
        <h5 className="pl-2 800px:block hidden font-Poppins dark:text-white text-black">
          Change Password
        </h5>
      </div>
      <div
        className={`w-full flex hover:bg-[#f3f4f6] justify-center sm:justify-center lg:justify-start   rounded-xl items-center px-3 py-4 cursor-pointer ${
          active === 3 ? 'dark:bg-slate-800 bg-[#f3f4f6]' : 'bg-transparent'
        }`}
        onClick={() => setActive(3)}
      >
        <SiCoursera size={20} className="dark:text-white text-black" />
        <h5 className="pl-2 800px:block hidden font-Poppins dark:text-white text-black">
          Enrolled Courses
        </h5>
      </div>
      <div
        className={`w-full flex hover:bg-[#f3f4f6] justify-center sm:justify-center lg:justify-start rounded-xl items-center px-3 py-4 cursor-pointer ${
          active === 4 ? 'dark:bg-slate-800 bg-[#f3f4f6]' : 'bg-transparent'
        }`}
        onClick={() => setActive(4)}
      >
        <AiOutlineFilePpt size={20} className="dark:text-white text-black" />
        <h5 className="pl-2 800px:block hidden font-Poppins dark:text-white text-black">
          Enrolled Ebook
        </h5>
      </div>
      {user.role === 'admin' && (
        <Link
          className={`w-full flex hover:bg-[#f3f4f6] rounded-xl justify-center sm:justify-center lg:justify-start items-center px-3 py-4 cursor-pointer ${
            active === 5 ? 'dark:bg-slate-800 bg-[#f3f4f6]' : 'bg-transparent'
          }`}
          href={'/admin'}
        >
          <MdOutlineAdminPanelSettings size={20} className="dark:text-white text-black" />
          <h5 className="pl-2 800px:block hidden font-Poppins dark:text-white text-black">
            Admin Dashboard
          </h5>
        </Link>
      )}
      <div className="relative flex py-2 items-center">
        <div className="flex-grow border-t border-gray-400"></div>
        <div className="flex-grow border-t border-gray-400"></div>
      </div>
      <div
        className={`w-full flex hover:bg-[#f3f4f6] rounded-xl justify-center sm:justify-center lg:justify-start items-center px-3 py-4 cursor-pointer ${
          active === 6 ? 'dark:bg-slate-800 bg-[#f3f4f6]' : 'bg-transparent'
        }`}
        onClick={() => logOutHandler()}
      >
        <AiOutlineLogout size={20} className="dark:text-white  text-red-600" />
        <h5 className="pl-2 800px:block hidden font-Poppins dark:text-white text-red-600">
          Log Out
        </h5>
      </div>
    </div>
  )
}

export default SideBarProfile
