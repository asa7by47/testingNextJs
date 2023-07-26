import React from "react";
import style from "./projects.module.css";
import bed from "../../public/bed.svg";
import price from "../../public/price.svg";
import area from "../../public/area.svg";
import Link from "next/link";
import Head from "next/head";
import Image from "next/future/image";

const Projects = ({ allProjectsData,seoData }) => {
  console.log(seoData);
  return (
    <>
      <Head>
        <title>
          {seoData[4].name.charAt(0).toUpperCase() + seoData[4].name.slice(1)}
        </title>
       
      </Head>
      <div className="px-5 container-fluid">
        <div className="row">
          {allProjectsData.results.map((data) => (
            <div className="col-md-6" key={data.id}>
              <div
                className={`rounded-3  bg-white overflow-hidden ${style.cardWidth} mt-2 m-auto `}
              >
                <Image
                  src={data.image}
                  alt={data.image_alt}
                  className={`${style.unitCardImage} `}
                  width={500}
                  height={500}
                />
                <div className="py-1 px-3 w-100">
                  <div className="mx-1">
                    <p className={`${style.cardTitle}`}> {data.title} </p>
                    <div className=" d-flex justify-content-between">
                      <h6 className={`${style.blueColor}`}>{data.subtitle}</h6>
                      <span
                        className={`ms-1 text-muted ${style.bgStatus} px-3`}
                      >
                        {data.status}
                      </span>
                    </div>
                    <div className="row">
                      <div className="col-6 d-flex align-items-center justify-content-center my-2 justify-content-lg-start">
                        <Image src={area} alt="area" className="" />
                        <span className={`mx-1 ${style.blueColor} `}>
                          From {data.area_start_from}
                        </span>
                        <span className={`${style.blueColor}`}>SQM</span>
                      </div>
                    </div>
                    <div className="row py-2 ">
                      <div className="col-6 ">
                        <div className="cardBtn w-100">
                          <button
                            className={`text-white py-2 fw-bold w-100 text-center ${style.knowMore}`}
                          >
                            <Link
                              href={`/projects/${data.slug}`}
                              passHref
                              className={`${style.LinkStyle}`}
                            >
                              <a
                                style={{
                                  textDecoration: "none",
                                  color: "white",
                                }}
                              >
                                Know More
                              </a>
                            </Link>
                          </button>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="cardBtn w-100">
                          <button
                            className={` py-2 w-100 text-center fw-bold ${style.callUs}`}
                          >
                            <Link
                              href={`/projects/id`}
                              passHref
                              className={`${style.LinkStyle}`}
                            >
                              <a
                                style={{
                                  textDecoration: "none",
                                  color: "#21275b",
                                }}
                              >
                                Call Us
                              </a>
                            </Link>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
export const getServerSideProps = async () => {
  const allProjectsRes = await fetch(
    "https://backend-staging-marakez.bit68.com/en/api/projects/"
  );
  const allProjectsData = await allProjectsRes.json();

  // SEO
  const seoRes = await fetch(
    "https://backend-staging-marakez.bit68.com/en/api/pages-seo/"
  );
  const seoData = await seoRes.json();

  return {
    props: {
      // projectsData,
      allProjectsData,
      seoData
    },
  };
};
