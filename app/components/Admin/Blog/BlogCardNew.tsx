import React, { FC } from 'react'

import dayjs from 'dayjs'
import 'dayjs/locale/th'
import { useRouter } from 'next/navigation'

export interface BlogCardProps {
  thumbnail: { url: string }
  slug: string
  title: string
  description: string
  createdAt: string
}

dayjs.locale('th')

const BlogCardNew: FC<BlogCardProps> = ({ thumbnail, slug, title, description, createdAt }) => {
  const router = useRouter()
  const linkUrl = `/blog/${slug}`

  const handleClick = (e: any) => {
    e.preventDefault()
    router.push(linkUrl)
  }

  return (
    <a
      onClick={handleClick}
      className="block cursor-pointer rounded-2xl px-4 py-6 sm:border  dark:bg-darkbg dark:sm:border-gray-800 sm:dark:bg-gray-800/50"
    >
      <img
        className="rounded-3xl"
        src={thumbnail.url}
        alt="blog cover"
        width="1556px"
        height="778px"
      />
      <div className="mt-8">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white md:text-xl">{title}</h2>
        <p className="text-black dark:text-white">{dayjs(createdAt).format('DD MMMM YYYY')}</p>
        <p className="mt-4 text-gray-700 dark:text-gray-300">{add3Dots(description, 100)}</p>
      </div>
      <div className="flex justify-end mt-4">
        <button className="bg-sky-600 py-4 px-2 rounded-3xl text-white">อ่านเพิ่มเติม...</button>
      </div>
    </a>
  )
}

function add3Dots(string: string, limit: number) {
  let dots = '...'
  if (string.length > limit) {
    string = string.substring(0, limit) + dots
  }

  return string
}

export default React.memo(BlogCardNew)
