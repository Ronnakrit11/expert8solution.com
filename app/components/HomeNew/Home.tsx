"use client";
import React, { useEffect, useState } from "react";
import Heading from "../../utils/Heading";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AOS from 'aos';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'aos/dist/aos.css';

import { useTheme } from "next-themes";

import LandingPage from "./(NewTemplate)/LandingPage";
import Trust from "./(NewTemplate)/Trust";
import Tab from "./(NewTemplate)/Tab";
import LeftImageContent from "./(NewTemplate)/LeftImageContent";
import GridThreeGadient from "./(NewTemplate)/GridThreeGadient";
import Review from "./(NewTemplate)/Review";
import FooterContact from "./(NewTemplate)/FooterContact";
import Feature from "./(NewTemplate)/Feature";
import Services from "./(NewTemplate)/Services";

function Home({ webInfo }: any) {
    console.log("🚀 ~ file: Home.tsx:24 ~ Home ~ layout:", webInfo)
    const [open, setOpen] = useState(false);
    const [activeItem, setActiveItem] = useState(0);
    const [route, setRoute] = useState("Login");
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const { theme, setTheme } = useTheme();

    const chevronWidth = 40;

    useEffect(() => {
        AOS.init({
            once: true,
            delay: 300
        });
    }, [])


    return (
        <div>
            <Header
                open={open}
                setOpen={setOpen}
                activeItem={activeItem}
                setRoute={setRoute}
                route={route}
            />

            {/* New Theme */}
            <LandingPage />
            <Trust />
            <Tab />
            <Services />
            <LeftImageContent />
            <Feature />
            <GridThreeGadient />
            <Review />
            <FooterContact />

            <Footer />
        </div>
    );
};

export default Home