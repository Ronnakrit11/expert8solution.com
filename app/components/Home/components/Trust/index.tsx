import { trustImages } from '@/app/components/Home/constants'

import React, { useMemo } from 'react'

import TrustImage from './components/TrustImage'

const Trust = () => {
  return (
    <div className="bg-white dark:bg-darkbg pt-12 p-4 ">
      <div className="container mx-auto border-y border-gray-100 py-8 text-center dark:border-gray-800  md:py-12 xl:mt-15 ">
        <div className="mt-4 grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-5 justify-center gap-6 brightness-75  sm:justify-between lg:gap-24">
          {trustImages.map((item, index) => (
            <TrustImage key={index} img={item.img} url={item.url} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Trust
