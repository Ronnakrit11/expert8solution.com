import Home from "./components/HomeNew/Home";

export const metadata = {
  title: "Expert8-Solution ผลิตซอฟเเวร์สำหรับระบบขายคอร์สออนไลน์ครบวงจร",
  description:
  "บริการทำซอฟเเวร์เว็ปไซต์ E-learning เเพลทฟอร์มการเรียนออนไลน์ครบวงจรรวมถึงระบบชำระเงิน ระบบจัดการคอร์สเรียน ",
  keywords:
    "ไอเดีย,Techsolution,การตลาด,ระบบเรียนออนไลน์ , ระบบขายคอร์สออนไลน์ ",
  openGraph: {
    title: "Expert8-Solution ผลิตซอฟเเวร์สำหรับระบบขายคอร์สออนไลน์ครบวงจร ",
    description: "บริการทำซอฟเเวร์เว็ปไซต์ E-learning เเพลทฟอร์มการเรียนออนไลน์ครบวงจรรวมถึงระบบชำระเงิน ระบบจัดการคอร์สเรียน เเละบริการทำ Marketing ครบวงจร",
    url: "https://www.expert8-solution.com/",

    siteName: "expert8-solution",
    images: [
      {
        url: "https://res.cloudinary.com/dtmtluhfw/image/upload/v1709633303/zscax0wvqcqxqzvpmcin.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "th-TH",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Expert8-Solution ผลิตซอฟเเวร์สำหรับระบบขายคอร์สออนไลน์ครบวงจร",
    description:
      "บริการทำซอฟเเวร์เว็ปไซต์ E-learning เเพลทฟอร์มการเรียนออนไลน์ครบวงจรรวมถึงระบบชำระเงิน ระบบจัดการคอร์สเรียน เเละบริการทำ Marketing ครบวงจร",
    images: [
      "https://res.cloudinary.com/dtmtluhfw/image/upload/v1709633303/zscax0wvqcqxqzvpmcin.png ",
    ],
  },
};

export const revalidate = 180;

// http://localhost:8000/api/v1/get-layout/Banner
const Page = async () => {
  console.log("porcess env =>", process.env.NEXT_PUBLIC_SERVER_URI);

  const pmBanner = fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URI}/get-layout/Banner`,
    {}
  );
  const pmCategory = fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URI}/get-layout/Categories`,
    {}
  );
  const [resBanner, resCategory] = await Promise.all([pmBanner, pmCategory]);
  const banner = await resBanner.json();
  const category = await resCategory.json();

  const webInfo = {
    banner: banner?.layout?.banner || {},
    category: category?.layout?.categories || [],
  };

  return <Home webInfo={webInfo} />;
};

export default Page;
