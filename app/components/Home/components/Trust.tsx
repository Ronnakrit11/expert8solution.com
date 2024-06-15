import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

const Trust = () => {
  const items = [
    {
      img: '/cus1.png',
      url: 'https://www.aeroplanecenter.com/',
    },
    {
      img: '/cus2.png',
      url: 'https://www.physicsptoeyonline.com/',
    },
    {
      img: '/cus3.png',
      url: 'https://www.dotknowledgeth.com/',
    },
    {
      img: '/cus55.png',
      url: 'https://duckyengineer.com/',
    },
    {
      img: '/cus6.png',
      url: 'https://www.primeschool.online/',
    },
    {
      img: '/cus8.png',
      url: 'https://successpath-academy.com/',
    },
    {
      img: '/cus91.png',
      url: 'https://www.passivecreator.net/',
    },
    {
      img: '/cus11.png',
      url: 'https://whatsskill.com/',
    },
    {
      img: '/cus10.png',
      url: 'https://treelearningx.online/',
    },
    {
      img: '/cusnew.png',
      url: 'https://nisittutor-client.vercel.app/',
    },
  ]
  return (
    <div className="bg-white dark:bg-darkbg pt-12 p-4 ">
      <div className="container mx-auto border-y border-gray-100 py-8 text-center dark:border-gray-800  md:py-12 xl:mt-15 ">
        <div className="mt-4 grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-5 justify-center gap-6 brightness-75  sm:justify-between lg:gap-24">
          {items.map((item, index) => (
            <div key={index} className="h-15 w-auto lg:h-17 lg:w-auto">
              <Link href={item.url || ''} target="__blank">
                <Image
                  src={item.img}
                  alt=""
                  width={500}
                  height={500}
                  className="w-[100px] h-[100px] grayscale hover:grayscale-0 dark:grayscale-0 duration-200 xl:w-[200px] xl:h-[200px]"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Trust
