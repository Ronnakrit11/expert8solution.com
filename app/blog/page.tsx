"use client";
import { useGetUsersAllCoursesQuery } from "@/redux/features/courses/coursesApi";
import { useGetHeroDataQuery } from "@/redux/features/layout/layoutApi";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Loader from "../components/Loader/Loader";
import Header from "../components/Header";
import Heading from "../utils/Heading";
import { styles } from "../styles/style";
import CourseCard from "../components/Course/CourseCard";
import Footer from "../components/Footer";
import BlogCard from "../components/Admin/Blog/BlogCard";
import { useGetAllBlogQuery } from "@/redux/features/blog/blogsApi";
import { FaEnvelope } from "react-icons/fa6";
import BlogCardNew from "../components/Admin/Blog/BlogCardNew";
import BlogShowCard from "../components/Admin/Blog/BlogShowCard";

type Props = {};

const Page = (props: Props) => {
    const searchParams = useSearchParams();
    const search = searchParams?.get("title");
    const { data, isLoading } = useGetAllBlogQuery(undefined, {});
    const [route, setRoute] = useState("Login");
    const [open, setOpen] = useState(false);
    const [courses, setcourses] = useState(data?.result || []);
    const [course2 ,setCourse2] = useState([])
    
    useEffect(() => {
        setcourses(data?.result || []);
        const gridtwoCourse = courses.slice(1)
        setCourse2(gridtwoCourse)
    }, [data]);
    console.log(course2)

    return (
        <div>
            <Header
                route={route}
                setRoute={setRoute}
                open={open}
                setOpen={setOpen}
                activeItem={3}
            />
            <Heading
                title={"บทความความรู้ในวงการคอร์สเรียนออนไลน์ Expert8-Solution"}
                description={"Blog บทความที่เกี่ยวกข้องกับการทำคอร์สเรียนออนไลน์ การทำเว็ปไซต์คอร์สเรียนออนไลน์ เเละเคล็ดลับการขายคอร์สเรียนออนไลน์ให้ประสบความสำเร็จ"}
                keywords={
                    "บทความเกี่ยวกับคอร์สเรียนออนไลน์ ,ทำคอร์สเรียนออนไลน์, ระบบคอร์สเรียนออนไลน์, ไอเดียคอร์สเรียนออนไลน์, การขายคอร์สออนไลน์"
                }
            />
            <div className="bg-white dark:bg-darkbg pb-10">
                <div className="container mx-auto ">
                    <div className="overflow-x-hidden pt-32 sm:pt-40 md:pt-48 lg:pt-50">
                        <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
                            <div className="z-10">
                                <h1 className="relative text-center text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">

                                    <span className='text-5xl sm:text-6xl lg:text-left lg:text-7xl font-bold bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-400 inline-block text-transparent bg-clip-text'>บทความ</span>
                                </h1>
                            </div>
                            <h2 className="mx-auto mt-6 text-center text-gray-700 dark:text-gray-400 md:w-2/3 lg:w-1/2">
                                อ่านบทความทั้งหมดจากเรา Expert8Solution
                            </h2>
                        </div>
                    </div>
                    <div className="pt-8 lg:pt-16">
                        <div >
                            <div className="flex flex-wrap lg:flex-nowrap">
                                <div className="mb-8 w-full sm:py-4 lg:w-1/4 lg:py-12">
                                    <div className="flex flex-wrap justify-center gap-6 p-4 sm:justify-between sm:px-12 lg:block lg:space-y-6 lg:px-0">
                                        <a href="/blog" className="flex snap-center items-center gap-4">
                                            <div className="flex h-12 w-12 rounded-xl border bg-gray-100 dark:border-gray-700 dark:bg-gray-800">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="m-auto h-6 w-6 text-gray-600 dark:text-gray-400">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"></path>
                                                </svg>
                                            </div>
                                            <div>
                                                <h2 className="text-base font-medium text-gray-800 dark:text-white">จำนวนบทความ</h2>
                                                <span className="-mt-1 block w-max text-sm text-gray-500 dark:text-gray-400">{courses.length} บทความ</span>
                                            </div>
                                        </a>

                                    </div>
                                </div>
                                <div className="lg:w-3/4">
                                    {courses && courses.map((item: any, index: number) => (
                                        index === courses.length - 1 && <BlogCardNew item={item} key={index} />
                                    ))}
                                </div>
                            </div>
                            <div className="mt-32">
                                <p className="text-center text-4xl font-bold text-gray-900 dark:text-white my-10">บทความทั้งหมด</p>
                                <div className="mx-auto px-0 sm:px-0 xl:max-w-6xl xl:px-0">
                                    <div className="grid gap-y-20 md:grid-cols-2 md:gap-x-6 lg:gap-x-12">
                                        {
                                            courses && courses.length === 0 && (
                                                <p className={`${styles.label} justify-center min-h-[50vh] flex items-center`}>
                                                    No Blog found!
                                                </p>
                                            )
                                        }
                                        {courses &&
                                            courses.slice(0).reverse().map((item: any, index: number) => (
                                                <BlogCardNew item={item} key={index} />
                                            ))}
                                        {/* {course2 &&
                                            course2.map((item: any, index: number) => (
                                                <BlogCardNew item={item} key={index} />
                                            ))} */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Page;