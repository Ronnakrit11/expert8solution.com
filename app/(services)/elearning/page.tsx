"use client";
import React, { useState } from "react";
import Heading from "@/app/utils/Heading";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Banner from "./Banner";
import Working from "./Working";
import Solution from "./Solution";
import TheEasy from "./TheEasy";
import Record from "./Record";
import Shere from "./Shere";

type Props = {};

const Page = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(1);
  const [route, setRoute] = useState("Login");

  return (
    <div>
      <Heading
        title={
          "เกี่ยวกับเรา Expert8-Solution ทำซอฟเเวร์ พัฒนาเว็บไซต์  Marketing ครบวงจร"
        }
        description={
          "บริษัทเอ็กซ์เพิร์ท เอท โซลูชั่น จำกัด พัฒนาซอฟเเวร์ครบวงจร ระบบคอร์สเรียนออนไลน์ , ระบบ E-Commerce , ระบบจองโรงเเรม เเละการตลาดออนไลน์ทุกเเพลทฟอร์ม "
        }
        keywords={
          "ทำคอร์สเรียนออนไลน์, ระบบคอร์สเรียนออนไลน์, ไอเดียคอร์สเรียนออนไลน์, การขายคอร์สออนไลน์"
        }
      />
      <Header
        open={open}
        setOpen={setOpen}
        activeItem={activeItem}
        setRoute={setRoute}
        route={route}
      />
      <Banner />
      <TheEasy />
      <Record />
      {/* <Shere /> */}
      {/* <Working /> */}
      <Solution />
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default Page;
