import Image from "next/image";
import { FaEnvelope } from "react-icons/fa6";
import React, { useState } from "react";

const LandingPage = () => {
  const [email, setEmail] = useState<any>('');
  const [result, setResult] = useState("");

  const onSubmitToW3 = async () => {
    setResult("Sending....");
    let formData: any = new FormData();
    formData.append('email', email);
    formData.append("access_key", "7f1167f1-42d2-4065-b7f4-37ee69e92c9b");
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Thank you!");
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="bg-white dark:bg-[#101726] p-4">
      <div className="container mx-auto">
        <div className="py-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="flex justify-center sm:justify-center md:justify-start">
              <h1 className="text-center text-3xl font-bold text-blue-900 dark:text-white sm:text-6xl lg:text-left lg:text-5xl">
                E-LEARNING &nbsp;
              </h1>
              <h1 className="text-3xl sm:text-3xl lg:text-center lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-400 inline-block text-transparent bg-clip-text">
                SOLUTION
              </h1>
            </div>
            <h2 className="my-6 lg:my-12 text-lg text-gray-600 dark:text-gray-300 sm:text-xl">
              บริการทำระบบเรียนออนไลน์
              เเพลทฟอร์มการเรียนออนไลน์ครบวงจรรวมถึงการทำ Marketing
              เเละพัฒนาเว็บไซต์ทุกประเภท
            </h2>
            <div className="relative flex items-center rounded-full border border-primary/20 bg-white dark:bg-[#101726] p-1 px-2 shadow-md focus-within:ring-2 dark:border-white/10 dark:bg-dark dark:text-white md:p-2 lg:pr-3">
              <FaEnvelope className="h-6 w-6 ml-2 text-gray-600" />
              <input
                placeholder="Your mail address"
                value={email}
                onChange={(e) => { setEmail(e.target.value) }}
                className="w-full rounded-full bg-transparent p-4 placeholder-gray-600  outline-none dark:placeholder-white dark:text-[#fff] text-[#000]"
              />
              <button
                onClick={() => { onSubmitToW3() }}
                className="bg-[#1565c0] py-3 w-[150px] px-4 text-white rounded-full text-[16px]">
                {result ? result : `Get Started`}
              </button>
            </div>
          </div>
          <div className="p-4">
            <Image
              width={1000}
              height={1000}
              alt="ระบบคอร์สเรียนออนไลน์"
              src="/mm2322.webp"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
