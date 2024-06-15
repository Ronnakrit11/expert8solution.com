import React from 'react'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { highlightMenu, navItemsData } from '../constants'

type Props = {
  isMobile: boolean
}

const NavItems: React.FC<Props> = ({ isMobile }) => {
  const pathname = usePathname()

  const isEqualCurrentPathname = (url: string) => {
    return pathname === url
  }

  return (
    <>
      <div className="hidden 800px:flex">
        {navItemsData.map((item, index) => {
          return (
            <Link href={`${item.url}`} key={index} passHref>
              <span
                className={`${
                  isEqualCurrentPathname(item.url)
                    ? 'text-black dark:text-white border-primary border-b-4 p-6'
                    : 'dark:text-white text-black'
                } text-[18px] px-6 font-Poppins font-[400] ${
                  item.name === highlightMenu
                    ? 'border-solid border-2 border-red-300 py-1 rounded-md'
                    : null
                } `}
              >
                {item.name}
              </span>
            </Link>
          )
        })}
      </div>
      {isMobile && (
        <div className="800px:hidden mt-5 pb-3">
          <div className="w-full text-center py-6">
            <Link href="/" passHref>
              <span className={`text-[25px] font-Poppins font-[500] text-black dark:text-white`}>
                ELearning
              </span>
            </Link>
          </div>
          {navItemsData.map((item, index) => {
            return (
              <Link href={`${item.url}`} passHref key={index}>
                <span
                  className={`${
                    isEqualCurrentPathname(item.url)
                      ? 'text-primary dark:text-primary font-bold'
                      : 'dark:text-white text-black'
                  } block py-5 text-[18px] px-6 font-Poppins font-[400] ${
                    item.name === highlightMenu
                      ? 'border-solid border-2 border-red-300 py-1 rounded-md'
                      : null
                  }`}
                >
                  {item.name}
                </span>
              </Link>
            )
          })}
        </div>
      )}
    </>
  )
}

export default NavItems
