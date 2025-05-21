import Ratings from '@/components/Ratings'

import React, { FC } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { AiOutlineUnorderedList } from 'react-icons/ai'

type Props = {
  item: any
  isProfile?: boolean
}

const EbookCard: FC<Props> = ({ item, isProfile }) => {
  const router = useRouter()
  const linkUrl = !isProfile ? `/ebook/${item._id}` : `course-access/${item._id}`

  const handleClick = (e: any) => {
    e.preventDefault()
    router.push(linkUrl)
  }

  return (
    <div className="w-full box-shadow-grow dark:bg-slate-500 bg-[#fff] dark:bg-opacity-20 backdrop-blur border dark:border-[#ffffff1d] border-[#00000015] dark:shadow-[bg-slate-700] rounded-lg ">
      <div
        onClick={handleClick}
        className="w-full cursor-pointer dark:bg-slate-500 dark:bg-opacity-20 backdrop-blur dark:border-[#ffffff1d] border-[#00000015] dark:shadow-[bg-slate-700] rounded-lg "
      >
        <Image
          src={item.thumbnail.url}
          width={500}
          height={300}
          objectFit="contain"
          className="rounded w-full"
          alt=""
        />
      </div>
      <br />
      <h1
        onClick={handleClick}
        className=" cursor-pointer font-Poppins md:font-bold text-center text-[12px] md:text-[16px] text-black dark:text-[#fff]"
      >
        {item.name}
      </h1>
      <div className="w-full flex items-center justify-center pt-3 pb-2">
        <div className="flex">
          <h3 className="text-black font-semibold dark:text-[#fff]">
            {item.price === 0 ? 'Free' : item.price?.toLocaleString() + '฿'}
          </h3>
          <h5 className="pl-3 text-[14px] mt-[-5px] line-through opacity-80 text-black dark:text-[#fff]">
            {item.estimatedPrice?.toLocaleString()}฿
          </h5>
        </div>
      </div>
      <div className="px-2 pb-2 cursor-pointer" onClick={handleClick}>
        <span className="bg-[#008AFC] p-2 flex items-center justify-center rounded-lg font-bold text-[16px] text-white">
          ซื้อหนังสือ
        </span>
      </div>
    </div>
  )
}

export default EbookCard
