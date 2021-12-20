import Head from "next/head";
import AppCollection from "../components/AppCollection";
import CTA from "../components/CTA";
import Hero from "../components/Hero";
import Mentor from "../components/Mentor";
import Stats from "../components/Stats";

const index = () => {
  return (
    <>
    <Head>
      <title>Besnik</title>
    </Head>
    <Hero></Hero>
    <CTA></CTA>
    <Mentor></Mentor>
    <Stats></Stats>
    <AppCollection></AppCollection>
    </>
    
  );
};

export default index;