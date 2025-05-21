import { BlogCardProps } from '@/app/components/Admin/Blog/BlogCardNew'
import BlogCardNew from '@/app/components/Admin/Blog/BlogCardNew'
import Loader from '@/components/Loader/Loader'
import { styles } from '@/styles'

import React from 'react'

import { isEmptyArray } from 'formik'

interface Props {
  courses: BlogCardProps[]
  isLoading?: boolean
}

const AllBlog = ({ courses, isLoading }: Props) => {
  return (
    <div className="mt-32">
      <h2 className="text-center text-4xl font-bold text-gray-900 dark:text-white my-10">
        บทความทั้งหมด
      </h2>
      <div className="mx-auto px-0 sm:px-0 xl:max-w-6xl xl:px-0">
        {isLoading ? (
          <Loader />
        ) : isEmptyArray(courses) ? (
          <div className={`${styles.label} justify-center min-h-[50vh] flex items-center`}>
            No Blog found!
          </div>
        ) : (
          <div className="grid gap-y-20 md:grid-cols-2 md:gap-x-6 lg:gap-x-12">
            {courses
              .slice(0)
              .reverse()
              .map((courseProps, index) => (
                <BlogCardNew key={`courses-item:${index}`} {...courseProps} />
              ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default AllBlog
