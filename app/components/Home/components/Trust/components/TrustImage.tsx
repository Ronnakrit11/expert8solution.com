import { TrustImageItem } from '@/app/components/Home/types'

import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

interface Props extends TrustImageItem {}

const TrustImage = ({ url, img }: Props) => {
  return (
    <div className="h-15 w-auto lg:h-17 lg:w-auto">
      <Link href={url} target="__blank">
        <Image
          src={img}
          alt=""
          width={500}
          height={500}
          className="w-[100px] h-[100px] grayscale hover:grayscale-0 dark:grayscale-0 duration-200 xl:w-[200px] xl:h-[200px]"
        />
      </Link>
    </div>
  )
}

export default React.memo(TrustImage)
