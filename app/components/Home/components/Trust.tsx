import React, { useMemo } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { trustImages } from '../constants'

const Trust = () => {
  const renderTrustImages = useMemo(
    () =>
      trustImages.map((item, index) => (
        <div key={index} className="h-15 w-auto lg:h-17 lg:w-auto">
          <Link href={item.url} target="__blank">
            <Image
              src={item.img}
              alt=""
              width={500}
              height={500}
              className="w-[100px] h-[100px] grayscale hover:grayscale-0 dark:grayscale-0 duration-200 xl:w-[200px] xl:h-[200px]"
            />
          </Link>
        </div>
      )),
    [],
  )

  return (
    <div className="bg-white dark:bg-darkbg pt-12 p-4 ">
      <div className="container mx-auto border-y border-gray-100 py-8 text-center dark:border-gray-800  md:py-12 xl:mt-15 ">
        <div className="mt-4 grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-5 justify-center gap-6 brightness-75  sm:justify-between lg:gap-24">
          {renderTrustImages}
        </div>
      </div>
    </div>
  )
}

export default Trust
