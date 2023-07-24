import Image from "next/image";
import React from "react";
// import about1 from "../../public/about1.jpg";
// import about2 from "../../public/about2.jpg";
import style from "./about.module.css";
import LeadingGallery from "../../components/LeadingGallery/LeadingGallery";
import Head from "next/head";

const about = ({ data = [], leadingMixedData, seoData }) => {
  return (
    <>
      <Head>
        <title>
          {seoData[6].name.charAt(0).toUpperCase() + seoData[6].name.slice(1)}
        </title>
        <meta
          name="description"
          content={seoData[6].seo_fields.meta_description}
        />
        <meta name="title" content={seoData[6].seo_fields.meta_title} />
      </Head>
      <section className={`${style.bgAbout} `}>
        <div className={`container-fluid px-4`}>
          <div className={`row ${style.aboutUsRowReverse}`}>
            <div className="col-md-7 ">
              <div className={` mt-5 ${style.aboutText}`}>
                <h2
                  className={`text-uppercase ${style.aboutHeaderText} fs-1 my-3 fw-semibold`}
                >
                  {data[0].title}
                </h2>
                <p className={`${style.aboutSubTitle} my-3`}>
                  <strong>{data[0].subtitle}</strong>
                </p>
                <p className="fs-6 m-0 lh-base">
                  {data[0].description.replace("<p>", "").replace("</p>", "")}
                </p>
              </div>
            </div>
            <div className="col-md-5 ">
              <div
                className="aboutImg mt-5"
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "4/3",
                }}
              >
                <Image
                  alt="aboutImage"
                  src={data[0].image}
                  layout="fill"
                  className={`img-fluid ps-3 ${style.mTopp} w-100 h-100`}
                />
              </div>
            </div>
          </div>
          <div className={`row mt-5 ${style.aboutImg}`}>
            <div className="col-md-5 ">
              <div
                className={` mt-5 ${style.aboutImg}`}
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "4/3",
                }}
              >
                <Image
                  alt="aboutImage"
                  src={data[1].image}
                  layout="fill"
                  className={`img-fluid ps-3 ${style.mTopp} w-100 h-100`}
                />
              </div>
            </div>

            <div className="col-md-7 py-4">
              <div className="aboutTextTwo px-3 d-flex flex-column justify-content-center h-100">
                <h2
                  className={`text-capitalize ${style.aboutHeaderText} fs-2 my-3 fw-bold`}
                >
                  {data[1].title}
                </h2>

                <p className={`${style.sizing}`}>
                  {data[1].description.replace("<p>", "").replace("</p>", "")}
                </p>
              </div>
            </div>
          </div>
          <div className="row mt-5 ms-2">
            <div className="col-md-12 ">
              <div className="vision my-4">
                <p className="p-0 m-0 fs-2 primary-color">
                  <strong> {data[2].title} </strong>
                </p>
                <p className="fs-6">
                  {data[2].description.replace("<p>", "").replace("</p>", "")}
                </p>
              </div>
            </div>
            <div className="col-md-12">
              <div className="vision">
                <p className="fs-2 primary-color">
                  <strong>{data[3].title} </strong>
                </p>
                <p className="fs-6">
                  {data[3].description.replace("<p>", "").replace("</p>", "")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container-fluid">
        {/* <LeadingGallery primaryColor={"primary-color"} /> */}
        <LeadingGallery
          leadingMixedData={leadingMixedData}
          primaryColor={"primary-color"}
        />
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(
    "https://backend-staging-marakez.bit68.com/en/api/about-us/"
  );
  const data = await res.json();
  // Leadig Mixed
  const leadingMixedRes = await fetch(
    "https://backend-staging-marakez.bit68.com/en/api/home/mixed-use-developers/"
  );
  const leadingMixedData = await leadingMixedRes.json();
  // SEO
  const seoRes = await fetch(
    "https://backend-staging-marakez.bit68.com/en/api/pages-seo/"
  );
  const seoData = await seoRes.json();

  if (!data) {
    return { props: { data: [] } };
  }
  return { props: { data, leadingMixedData, seoData } };
};

export default about;
