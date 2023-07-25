import Head from "next/head";
import HomeVideo from "../components/HomeVideo/HomeVideo";
import OurDevelopment from "../components/OurDevelopment/OurDevelopment";
import Trending from "../components/Trending/Trending";
// import WhoWeAre from "../components/WhoWeAre/WhoWeAre";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import LeadingGallery from "../components/LeadingGallery/LeadingGallery";
import First from "../components/First/First";
import Latest from "../components/Latest/Latest";
import WhoWeAre from "../components/WhoWeAre/WhoWeAre.jsx";

export default function Home({
  destinationData = [],
  unitTypesData = [],
  firstInBusinessData = [],
  latestData = [],
  homeVideoData = [],
  leadingMixedData = [],
  ourDevelopmentData = [],
  whoWeAreData = [],
  ProjectSearchData = [],
  seoData=[],
  trendingData=[]
}) {
  console.log();
  return (
    <>
      <Head>
        <title> {seoData[0].name.charAt(0).toUpperCase() +seoData[0].name.slice(1) } </title>
        <meta name="description" content={seoData[0].seo_fields.meta_description} />
        <meta name="title" content={seoData[0].seo_fields.meta_title} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeVideo
        destinationData={destinationData.results}
        unitTypesData={unitTypesData.results}
        homeVideoData={homeVideoData}
        ProjectSearchData={ProjectSearchData.results}
      />
      <OurDevelopment ourDevelopmentData={ourDevelopmentData.results} />
      <Trending trendingData={trendingData} />
      <LeadingGallery leadingMixedData={leadingMixedData} />
      <WhoWeAre whoWeAreData={whoWeAreData} />
      <First firstInBusinessData={firstInBusinessData} />
      <Latest latestData={latestData} />
    </>
  );
}
export const getStaticProps = async () => {
  // Destination API
  const destinationRes = await fetch(
    "https://backend-staging-marakez.bit68.com/en/api/destinations/"
  );
  const destinationData = await destinationRes.json();
  // Unit Types API
  const unitTypesRes = await fetch(
    "https://backend-staging-marakez.bit68.com/en/api/unit-types/"
  );
  const unitTypesData = await unitTypesRes.json();
  // First In Business Todo Item List
  const firstInBusinessRes = await fetch(
    "https://backend-staging-marakez.bit68.com/en/api/home/first-in-business-todo/"
  );
  const firstInBusinessData = await firstInBusinessRes.json();
  // Latest Launches
  const latestRes = await fetch(
    "https://backend-staging-marakez.bit68.com/en/api/home/latest-launches"
  );
  const latestData = await latestRes.json();
  // Home Video
  const homeVideoRes = await fetch(
    "https://backend-staging-marakez.bit68.com/en/api/home/main-section"
  );
  const homeVideoData = await homeVideoRes.json();
  // Leadig Mixed
  const leadingMixedRes = await fetch(
    "https://backend-staging-marakez.bit68.com/en/api/home/mixed-use-developers/"
  );
  const leadingMixedData = await leadingMixedRes.json();
  // Our Development
  const ourDevelopmentRes = await fetch(
    "https://backend-staging-marakez.bit68.com/en/api/home/our-developments/"
  );
  const ourDevelopmentData = await ourDevelopmentRes.json();
  // Who We Are
  const whoWeAreRes = await fetch(
    "https://backend-staging-marakez.bit68.com/en/api/home/who-we-are/"
  );
  const whoWeAreData = await whoWeAreRes.json();
  // Projects/search-bar/
  const ProjectSearchRes = await fetch(
    "https://backend-staging-marakez.bit68.com/en/api/projects/search-bar/"
  );
  const ProjectSearchData = await ProjectSearchRes.json();
  // SEO 
  const seoRes = await fetch(
    "https://backend-staging-marakez.bit68.com/en/api/pages-seo/"
  );
  const seoData = await seoRes.json();

  // Trending Section
  const trendingRes = await fetch(
    "https://backend-staging-marakez.bit68.com/en/api/units/22/"
  );
  const trendingData = await trendingRes.json();

  if (
    !destinationData ||
    !unitTypesData ||
    !latestData ||
    !firstInBusinessData ||
    !homeVideoData ||
    !leadingMixedData ||
    !ourDevelopmentData ||
    !whoWeAreData ||
    !ProjectSearchData ||
    !seoData||
    !trendingData
  ) {
    return {
      props: {
        destinationData: [],
        unitTypesData: [],
        firstInBusinessData: [],
        latestData: [],
        homeVideoData: [],
        leadingMixedData: [],
        ourDevelopmentData: [],
        whoWeAreData: [],
        ProjectSearchData: [],
        seoData: [],
        trendingData:[]
      },
    };
  }
  return {
    props: {
      destinationData,
      unitTypesData,
      firstInBusinessData,
      latestData,
      homeVideoData,
      leadingMixedData,
      ourDevelopmentData,
      whoWeAreData,
      ProjectSearchData,
      seoData,
      trendingData
    },
  };
};
