import FaqPage from "../components/FaqPage/FaqPage";

export const revalidate = 180;

// http://localhost:8000/api/v1/get-layout/Banner
const Page = async () => {
  const pmFaq = fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URI}/get-layout/FAQ`,
    {}
  );
  const [rsFaq] = await Promise.all([pmFaq]);

  const faq = await rsFaq.json();

  return <FaqPage faq={faq?.layout?.faq || []} />;
};

export default Page;
