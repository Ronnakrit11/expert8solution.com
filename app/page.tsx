import Home from "./components/HomeNew/Home";

export const metadata = {
  title: "Ajaree สอนจิตวิทยาการบริหารบุคคล",
  description:
  "Ajaree สอนจิตวิทยาการบริหารบุคคล",
  keywords:
    "จิตวิทยา,บริหารบุคคล,บริหารบุคคล ",
  openGraph: {
    title: "Ajaree สอนจิตวิทยาการบริหารบุคคล ",
    description: "Ajaree สอนจิตวิทยาการบริหารบุคคล",
    url: "https://aree-client.vercel.app",

    siteName: "Ajaree",
    images: [
      {
        url: "https://res.cloudinary.com/dtmtluhfw/image/upload/v1709055938/vprckzuzds52riarrpy4.jpg",
        width: 800,
        height: 600,
      },
    ],
    locale: "th-TH",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Ajaree สอนจิตวิทยาการบริหารบุคคล",
    description:
      "Ajaree สอนจิตวิทยาการบริหารบุคคล",
    images: [
      "https://res.cloudinary.com/dtmtluhfw/image/upload/v1709055938/vprckzuzds52riarrpy4.jpg",
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
