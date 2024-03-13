"use client";
import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AOS from 'aos';

import 'aos/dist/aos.css';

import PeopleReview from "./PeopleReview";
import WhyLearnCourse from "./WhyLearnCourse";
import Courses from "./Course";
import Ebooks from "./Ebooks";
import FAQ from "../FAQ/FAQ";
import { useTheme } from "next-themes";
import Blogs from "./Blogs";
import Image from "next/image";
import CallToAction from "./CallToAction";


function Home({ webInfo }: any) {
    console.log("🚀 ~ Home ~ webInfo:", webInfo)
    const [open, setOpen] = useState(false);
    const [activeItem, setActiveItem] = useState(0);
    const [route, setRoute] = useState("Login");
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const { theme, setTheme } = useTheme();

    const chevronWidth = 40;

    useEffect(() => {
        setTheme('light')
        AOS.init({
            once: true,
            delay: 300
        });
    }, [])


    return (
        <div>

         
            <CallToAction />

            <Header
                open={open}
                setOpen={setOpen}
                activeItem={activeItem}
                setRoute={setRoute}
                route={route}
            />
             <div className="w-[100%] h-auto md:h-[502px] 1000px:flex items-center dark:bg-[#1846a8] ">
                <Image
                    src={'/bannerEX.webp'}
                    width={9000}
                    height={600}
                    alt=''
                    className="object-cover w-full h-full"
                />
            </div>
            {/* <Hero
                banner={webInfo?.banner || {}}
                setOpen={setOpen}
            /> */}
            {/* <TopCategory
                categoty={webInfo.category}
            />
            */}
            
              {/*<PeopleReview />*/}
            
            <Courses courses={webInfo?.courses}/>
            <Ebooks ebooks={webInfo?.ebooks}/>
            <Blogs/>
            <PeopleReview />
            
            <WhyLearnCourse />
            <FAQ faq={webInfo?.faq}/> 
            {/* <TrustBy /> */}
            
            <Footer />
        </div>
    );
};

export default Home