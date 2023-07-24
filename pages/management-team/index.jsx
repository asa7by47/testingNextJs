import React from "react";
import image from "../../public/team.jpg";
import Image from "next/future/image";
import style from "./managementTeam.module.css";
import Head from "next/head";

const ManagementTeam = ({ ManagementTeamData = [], seoData }) => {
  return (
    <>
      <Head>
        <title>
          {seoData[3].name.charAt(0).toUpperCase() + seoData[3].name.slice(1)}
        </title>
      </Head>
      <div className="container-fluid px-lg-5">
        <div className="py-5">
          <h5 className="primary-color">Meet our management team</h5>
          <div className="row">
            {ManagementTeamData.map((data) => (
              <div className="col-md-12 ms-4 ms-lg-0" key={data.id}>
                <div
                  className="card border-0 d-flex align-items-center py-5"
                  style={{
                    backgroundColor: data.id % 2 === 0 ? "white" : "#f5f5f5",
                  }}
                >
                  <Image
                    alt="team"
                    width={500}
                    height={400}
                    src={data.image}
                    className={`object-fit-contain`}
                  />
                  <div className=" d-flex flex-column justify-content-center align-items-center">
                    <h3 className="primary-color mt-4 mb-3">{data.name}</h3>
                    <p className={`${style.cardPosition}`}>{data.position}</p>
                    <div
                      dangerouslySetInnerHTML={{ __html: data.description }}
                      className={`text-center ${style.cardParagraph} mt-5`}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ManagementTeam;
export const getStaticProps = async () => {
  // Management-Team API
  const ManagementTeamRes = await fetch(
    "https://backend-staging-marakez.bit68.com/en/api/management-team/"
  );
  const ManagementTeamData = await ManagementTeamRes.json();

  // SEO
  const seoRes = await fetch(
    "https://backend-staging-marakez.bit68.com/en/api/pages-seo/"
  );
  const seoData = await seoRes.json();
  if (!ManagementTeamData) {
    return {
      props: {
        ManagementTeamData: [],
      },
    };
  }
  return {
    props: {
      ManagementTeamData,
      seoData,
    },
  };
};
