import Layout from "@/components/Layout";
import Head from "next/head";
import SectionOne from "../components/SectionOne";
import SectionTwo from "../components/SectionTwo";
import SectionThree from "../components/SectionThree";
import SectionFour from "../components/SectionFour";
import SectionFive from "../components/SectionFive";
import SectionSix from "../components/SectionSix";
import Hero from "@/components/Hero";
// import Pics from "@/components/Pics";
import Faq from "@/components/Faq";
import Sponsors from "@/components/Sponsors";
import Team from "@/components/Team";
import NewsletterForm from "@/components/NewsletterForm";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tech Starters</title>
        <meta name="description" content="Welcome to Tech Starters" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </Head>

      <main>
        <Layout className="bg-[#1e1e1e]">
          <Hero />
          <SectionOne />
          <SectionTwo />
          <SectionThree />
          <SectionFour />
          <SectionFive />
          <SectionSix />
          <Team />
          <Sponsors />
          {/* <Pics /> */}
          <Faq />
          {/* <NewsletterForm /> */}
        </Layout>
      </main>
    </>
  );
}
