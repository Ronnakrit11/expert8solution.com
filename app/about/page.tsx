"use client";
import React, { useState } from "react";
import Heading from "../utils/Heading";
import Header from "../components/Header";
import About from "./About";
import Footer from "../components/Footer";
import AboutNew from "./AboutNew";

type Props = {};

const Page = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(5);
  const [route, setRoute] = useState("Login");

  return (
    <div>
      <Heading
        title={"เกี่ยวกับเรา Expert8-Solution ทำซอฟเเวร์ พัฒนาเว็บไซต์  Marketing ครบวงจร"}
        description={"บริษัท Expert8Solution จำกัด พัฒนาซอฟเเวร์ครบวงจร ระบบคอร์สเรียนออนไลน์ , ระบบ E-Commerce , ระบบจองโรงเเรม เเละการตลาดออนไลน์ทุกเเพลทฟอร์ม "}
        keywords={
          "programming community, coding skills, expert insights, collaboration, growth"
        }
      />
      <Header
        open={open}
        setOpen={setOpen}
        activeItem={activeItem}
        setRoute={setRoute}
        route={route}
      />
      <AboutNew />
      <Footer />
    </div>
  );
};

export default Page;
