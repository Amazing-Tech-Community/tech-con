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

export default function Home() {
  return (
    <>
      <Head>
        <title>Tech Starters</title>
        <meta name="description" content="Welcome to Tech Starters" />
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
        </Layout>
      </main>
    </>
  );
}
