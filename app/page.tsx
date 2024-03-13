import Home from "./components/HomeNew/Home";

export const metadata = {
  title: "Expert8-Solution",
  description:
  "เปลี่ยนไอเดียเป็น Techsolution ของตัวเอง",
  keywords:
    "ไอเดีย,Techsolution,การตลาด ",
  openGraph: {
    title: "Expert8-Solution ",
    description: "เปลี่ยนไอเดียเป็น Techsolution ของตัวเอง",
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
    title: "Expert8-Solution",
    description:
      "เปลี่ยนไอเดียเป็น Techsolution ของตัวเอง",
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

  const pmEbookAll = fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URI}/get-ebooks`,
    {}
  );

  const pmCourse = fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URI}/get-courses`,
    {}
  );
  const pmFaq = fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URI}/get-layout/FAQ`,
    {}
  );
  const [resBanner, resCategory, rsEbooks, rsCourse, rsFaq] = await Promise.all([pmBanner, pmCategory, pmEbookAll, pmCourse, pmFaq]);
  const banner = await resBanner.json();
  const category = await resCategory.json();
  const ebooks = await rsEbooks.json();
  const courses = await rsCourse.json();
  const faq = await rsFaq.json();
  console.log("🚀 ~ Page ~ faq:", faq)

  const webInfo = {
    banner: banner?.layout?.banner || {},
    category: category?.layout?.categories || [],
    ebooks: ebooks?.ebooks || [],
    courses: courses?.courses || [],
    faq: faq?.layout?.faq || [],
  };

  return <Home webInfo={webInfo} />;
};

export default Page;
