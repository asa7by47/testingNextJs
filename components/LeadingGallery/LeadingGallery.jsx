import Image from "next/future/image";
import React from "react";
import lead1 from "../../public/test1.jpg";
import lead11 from "../../public/lead1.jpg";
import lead2 from "../../public/lead2.jpg";
import lead3 from "../../public/lead3.jpg";
import lead4 from "../../public/lead4.jpg";
import lead5 from "../../public/lead5.jpg";

import HeaderText from "../HeaderText/HeaderText";
import MobileSlider from "../MobileSlider/MobileSlider";
import OurDevelopment from "../OurDevelopment/OurDevelopment";
import style from "./LeadingGallery.module.css";
import Link from "next/link";
const LeadingGallery = ({ primaryColor, leadingMixedData }) => {
  return (
    <>
      <section className="py-5" id="leadingGallery">
        <HeaderText
          text={`THE LEADING MIXED-USE DEVELOPER IN  EGYPT`}
          LeadingLine={style.LeadingLine}
          hideLeadingLine={style.hideLeadingLine}
          leadingFontSize={style.leadingFontSize}
          primaryColor={primaryColor}
        />

        {/* PC View */}
        <div className="container mt-5 d-none d-lg-block ">
          <div className={`container  categoriesGrid `}>
            {leadingMixedData.map((leading) => (
              <div
                className={`categoryItem  h-100 position-relative categoryItem_${leading.id} ${style.zoomContainer}`}
                key={leading.id}
              >
                <Image
                  src={leading.image}
                  alt={leading.title}
                  className={`w-100 object-fit-cover h-100 ${style.zoom}`}
                  width={600}
                  height={8000}
                  
                />
                <div
                  className={`position-absolute ${style.overlay} h-100 d-flex flex-column justify-content-end p-4`}
                >
                  <h5 className="text-white">{leading.title}</h5>
                  <h6 className="text-white">
                    <Link href={`#ourDevelopment`} passHref>
                      <a href="" className="text-white ">
                        Know More
                      </a>
                    </Link>
                  </h6>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* End PC View */}

        {/* Mobile View */}
        <MobileSlider
          sliderWidth={style.sliderWidth}
          showInMobileClass="d-lg-none"
          leadingMixedData={leadingMixedData}
        />

        {/* End Mobile View */}
      </section>
    </>
  );
};

export default LeadingGallery;
