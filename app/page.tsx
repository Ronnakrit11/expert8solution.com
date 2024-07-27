import Home from './components/Home'

export const metadata = {
  title: 'Expert8-Solution บริการสร้างระบบคอร์สเรียนสออนไลน์ครบวงจร',
  description:
    'บริการทำระบบเรียนออนไลน์ เว็ปไซต์ E-learning เเพลทฟอร์มการเรียนออนไลน์ครบวงจรรวมถึงการทำ Marketing เเละพัฒนาเว็บไซต์ทุกประเภท',
  keywords:
    'สร้างระบบคอร์สเรียนสออนไลน์,ระบบสอนออนไลน์,การตลาดออนไลน์,ระบบเรียนออนไลน์,ระบบขายคอร์สออนไลน์เเบบครบวงจร ',
  openGraph: {
    title: 'Expert8-Solution บริการสร้างระบบคอร์สเรียนสออนไลน์ครบวงจร ',
    description:
      'บริการทำระบบเรียนออนไลน์ เว็ปไซต์ E-learning เเพลทฟอร์มการเรียนออนไลน์ครบวงจรรวมถึงการทำ Marketing เเละพัฒนาเว็บไซต์ทุกประเภท ',
    url: 'https://www.expert8-solution.com/',
    siteName: 'expert8-solution',
    images: [
      {
        url: 'https://res.cloudinary.com/dtmtluhfw/image/upload/v1716983686/qeew54xsvcpbcjrdhusb.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'th-TH',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Expert8-Solution บริการสร้างระบบคอร์สเรียนสออนไลน์ครบวงจร',
    description:
      'บริการทำระบบเรียนออนไลน์ เว็ปไซต์ E-learning เเพลทฟอร์มการเรียนออนไลน์ครบวงจรรวมถึงการทำ Marketing เเละพัฒนาเว็บไซต์ทุกประเภท',
    images: [
      'https://res.cloudinary.com/dtmtluhfw/image/upload/v1716983686/qeew54xsvcpbcjrdhusb.png ',
    ],
  },
}

const Page = async () => {
  console.log('porcess env =>', process.env.NEXT_PUBLIC_SERVER_URI)

  const pmBanner = fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/get-layout/Banner`, {})
  const pmCategory = fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/get-layout/Categories`, {})
  const [resBanner, resCategory] = await Promise.all([pmBanner, pmCategory])
  const banner = await resBanner.json()
  const category = await resCategory.json()

  const webInfo = {
    banner: banner?.layout?.banner || {},
    category: category?.layout?.categories || [],
  }

  return (
    <>
      <link rel="canonical" href={`${process.env.NEXT_PUBLIC_ORIGIN_URI}/`} />
      <Home webInfo={webInfo} />
    </>
  )
}

export default Page
