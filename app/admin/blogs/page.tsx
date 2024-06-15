'use client'

import AllBlog from '@/app/components/Admin/Blog/AllBlog'
import BlogInformation from '@/app/components/Admin/Blog/BlogInformation'
import DashboardHero from '@/app/components/Admin/DashboardHero'
import Heading from '@/components/Heading'
import AdminProtected from '@/hooks/adminProtected'

import React from 'react'

import AdminSidebar from '../../components/Admin/sidebar/AdminSidebar'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
      <AdminProtected>
        <Heading
          title="Elearning - Admin"
          description="ELearning is a platform for students to learn and get help from teachers"
          keywords="Programming,MERN,Redux,Machine Learning"
        />
        <div className="flex min-h-screen">
          <div className="1500px:w-[16%] w-1/5">
            <AdminSidebar />
          </div>
          <div className="w-[85%]">
            <DashboardHero />
            {/* <BlogInformation /> */}
            <AllBlog />
          </div>
        </div>
      </AdminProtected>
    </div>
  )
}

export default page
