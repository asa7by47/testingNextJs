import React from "react";
import image from "../../public/team.jpg";
import Image from "next/future/image";
import style from "./managementTeam.module.css";

const ManagementTeam = ({ ManagementTeamData = [] }) => {
    // const descript = (str) => {
    //     var parser = new DOMParser();
    //     var htmlpars = parser.parseFromString(str, "text/html");
    //     return htmlpars.getElementsByTagName("p").textContent;
    //   };
  return (
    <div className="container-fluid px-5">
      <div className="py-5">
        <h5 className="primary-color">Meet our management team</h5>
        <div className="row">
          {ManagementTeamData.map((data) => (
            <div className="col-md-12" key={data.id}>
              <div
                className="card border-0 d-flex align-items-center py-5"
                style={{
                  backgroundColor: data.id % 2 === 0 ? "white" : "#f5f5f5",
                }}
              >
                <Image
                  alt="team"
                  width={500}
                  height={500}
                  src={data.image}
                  className={`object-fit-contain`}
                />
                <h3 className="primary-color mt-4 mb-3">{data.name}</h3>
                <p className={`${style.cardPosition}`}>{data.position}</p>
                <div
                  dangerouslySetInnerHTML={{ __html: data.description }}
                  className={`text-center ${style.cardParagraph} mt-5`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManagementTeam;
export const getStaticProps = async () => {
  // Management-Team API
  const ManagementTeamRes = await fetch(
    "https://backend-staging-marakez.bit68.com/en/api/management-team/"
  );
  const ManagementTeamData = await ManagementTeamRes.json();
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
    },
  };
};
