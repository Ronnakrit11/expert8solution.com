import React, { FC } from 'react'

import dayjs from 'dayjs'
import 'dayjs/locale/th'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export interface BlogCardProps {
  thumbnail: { url: string }
  slug: string
  title: string
  description: string
  keyword: string
  createdAt: string
}

dayjs.locale('th')

const BlogCardNew: FC<BlogCardProps> = ({
  thumbnail,
  slug,
  title,
  description,
  keyword,
  createdAt,
}) => {
  const router = useRouter()
  const linkUrl = `/blog/${slug}`

  const handleClick = () => {
    router.push(linkUrl)
  }

  return (
    <button
      onClick={handleClick}
      className="block cursor-pointer rounded-2xl px-4 py-6 sm:border  dark:bg-darkbg dark:sm:border-gray-800 sm:dark:bg-gray-800/50"
    >
      <Image className="rounded-3xl" src={thumbnail.url} alt={keyword} width={1556} height={778} />
      <div className="mt-8">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white md:text-xl">{title}</h3>
        <p className="text-black dark:text-white">{dayjs(createdAt).format('DD MMMM YYYY')}</p>
        <p className="mt-4 text-gray-700 dark:text-gray-300" title={description}>
          {add3Dots(description, 100)}
        </p>
      </div>
      <div className="flex justify-end mt-4">
        <button className="bg-sky-600 py-4 px-2 rounded-2xl text-white">อ่านเพิ่มเติม...</button>
      </div>
    </button>
  )
}

function add3Dots(string: string, limit: number) {
  if (string.length > limit) {
    string = string.substring(0, limit) + '...'
  }

  return string
}

export default BlogCardNew
