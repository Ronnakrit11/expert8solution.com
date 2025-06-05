import React from 'react'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

import { highlightMenu, navItemsData } from '../constants'

type Props = {
  isMobile: boolean
}

const NavItems: React.FC<Props> = ({ isMobile }) => {
  const pathname = usePathname()

  const isEqualCurrentPathname = (url: string) => {
    return pathname === url
  }

  // Animation variants
  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3 }
    }
  }

  // Mobile menu item variants
  const mobileItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({ 
      opacity: 1, 
      x: 0,
      transition: { 
        delay: i * 0.1,
        duration: 0.4
      }
    })
  }

  return (
    <>
      <div className="hidden 800px:flex">
        {navItemsData.map((item, index) => {
          return (
            <motion.div
              key={index}
              variants={navItemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href={`${item.url}`} passHref>
                <span
                  className={`${
                    isEqualCurrentPathname(item.url)
                      ? 'text-primary dark:text-primary relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-primary after:rounded-t-md'
                      : 'dark:text-white text-black hover:text-primary dark:hover:text-primary'
                  } text-[16px] px-5 py-6 font-medium transition-all duration-300 ${
                    item.name === highlightMenu
                      ? 'bg-primary/10 text-primary rounded-md px-4 py-2'
                      : null
                  } `}
                >
                  {item.name}
                </span>
              </Link>
            </motion.div>
          )
        })}
      </div>
      {isMobile && (
        <div className="w-full">
          <div className="flex flex-col w-full space-y-1">
            {navItemsData.map((item, index) => {
              return (
                <motion.div
                  key={index}
                  custom={index}
                  variants={mobileItemVariants}
                  initial="hidden"
                  animate="visible"
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href={`${item.url}`} passHref>
                    <span
                      className={`${
                        isEqualCurrentPathname(item.url)
                          ? 'text-primary dark:text-primary font-bold bg-primary/10 rounded-md'
                          : 'dark:text-white text-black hover:text-primary dark:hover:text-primary'
                      } block py-4 text-[18px] px-6 font-medium transition-all duration-300 ${
                        item.name === highlightMenu
                          ? 'bg-primary/10 text-primary rounded-md'
                          : null
                      }`}
                    >
                      {item.name}
                    </span>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      )}
    </>
  )
}

export default NavItems