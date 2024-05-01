import Ratings from "@/app/utils/Ratings";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { useRouter } from 'next/navigation'
import dayjs from "dayjs";
import "dayjs/locale/th";

type Props = {
    item: any;
    isProfile?: boolean;
};

const BlogCardNew: FC<Props> = ({ item, isProfile }) => {
    const router = useRouter()
    const linkUrl = `/blog/${item.slug}`
    dayjs.locale("th");
    const handleClick = (e: any) => {
        e.preventDefault()
        router.push(linkUrl)
    }
    console.log(item.createdAt)
    return (
        <>
            <a onClick={handleClick} className="block cursor-pointer rounded-2xl px-4 py-6 sm:border bg-gray-200 dark:bg-darkbg dark:sm:border-gray-800 sm:dark:bg-gray-800/50">
                <img className="rounded-3xl" src={item.thumbnail.url} alt="blog cover" width="1556" height="778" />
                <div className="mt-8">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white md:text-3xl">{item.title}</h2>
                    <p className="text-black dark:text-white">{dayjs(item.createdAt).format("DD MMMM YYYY")}</p>
                    <p className="mt-4 text-gray-700 dark:text-gray-300">{add3Dots(item.description, 100)}</p>
                    {/*<div className='flex items-center gap-3 mt-8'>
                        <img className="h-12 w-12 rounded-full" src="https://ampire.tailus.io/images/avatars/avatar-2.webp" loading="lazy" alt="user avatar" width="200" height="200" />
                        <div>
                            <h3 className="text-lg font-semibold leading-none text-gray-600 dark:text-gray-200">Andy Doe</h3>
                            <span className="text-sm text-gray-500 dark:text-gray-400">Product Designer</span>
    </div>
                    </div>*/}
                </div>
                <div className="flex justify-end mt-4">
                    <button className="bg-sky-600 py-4 px-2 rounded-3xl text-white">อ่านเพิ่มเติม...</button>
                </div>
            </a>
        </>

    );
};

function add3Dots(string: string, limit: number) {
    let dots = "...";
    if (string.length > limit) {
        string = string.substring(0, limit) + dots;
    }

    return string;
}


export default BlogCardNew;
