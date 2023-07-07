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
// import  from 'next/future/image'
const LeadingGallery = () => {
  return (
    <>
      <section className="py-5" id="leadingGallery">
        <HeaderText
          text={`THE LEADING MIXED-USE DEVELOPER IN  EGYPT`}
          LeadingLine={style.LeadingLine}
          hideLeadingLine={style.hideLeadingLine}
          leadingFontSize={style.leadingFontSize}
        />

        {/* PC View */}
        <div className="container mt-5 d-none d-lg-block">
          <div className={`container  ${style.categoriesGrid} `}>
            <div
              className={`${style.categoryItem} ${style.categoryItem2} h-100 position-relative`}
            >
              <Image
                src={lead5}
                alt="lead5"
                className={`w-100 object-fit-cover h-100 ${style.zoom}`}
              />
              <div className={`position-absolute ${style.overlay} h-100 d-flex flex-column justify-content-end p-4`}>
                <h5 className="text-white">Retail</h5>
                <h6 className="text-white">
                  <a href="" className="text-white ">Know More</a>
                </h6>

              </div>
            </div>
            <div
              className={`${style.categoryItem} ${style.categoryItem3} h-100 position-relative`}
            >
              <Image
                src={lead4}
                alt="lead4"
                className={`w-100 h-100 object-fit-cover ${style.zoom}`}
              />
              <div className={`position-absolute ${style.overlay} h-100 d-flex flex-column justify-content-end p-4`}>
                <h5 className="text-white">Retail</h5>
                <h6 className="text-white">
                  <a href="" className="text-white ">Know More</a>
                </h6>

              </div>
            </div>
            <div
              className={`${style.categoryItem} ${style.categoryItem1} h-100 position-relative`}
            >
              <Image
                src={lead1}
                alt="lead1"
                className={`w-100 object-fit-cover h-100 ${style.zoom}`}
              />
              <div className={`position-absolute ${style.overlay} h-100 d-flex flex-column justify-content-end p-4`}>
                <h5 className="text-white">Retail</h5>
                <h6 className="text-white">
                  <a href="" className="text-white ">Know More</a>
                </h6>

              </div>
            </div>
            <div
              className={`${style.categoryItem} ${style.categoryItem4} h-100 position-relative`}
            >
              <Image
                src={lead2}
                alt="lead2"
                className={`object-fit-cover h-100 w-100 ${style.zoom}`}
              />
              <div className={`position-absolute ${style.overlay} h-100 d-flex flex-column justify-content-end p-4`}>
                <h5 className="text-white">Retail</h5>
                <h6 className="text-white">
                  <a href="" className="text-white ">Know More</a>
                </h6>

              </div>
            </div>
            <div
              className={`${style.categoryItem} ${style.categoryItem5} h-100 position-relative`}
            >
              <Image
                src={lead11}
                alt="lead11"
                className={`w-100 h-100 object-fit-cover ${style.zoom}`}
              />
              <div className={`position-absolute ${style.overlay} h-100 d-flex flex-column justify-content-end p-4`}>
                <h5 className="text-white">Retail</h5>
                <h6 className="text-white">
                  <a href="" className="text-white ">Know More</a>
                </h6>

              </div>
            </div>
          </div>
        </div>

        {/* End PC View */}

        {/* Mobile View */}
        <MobileSlider
          sliderWidth={style.sliderWidth}
          showInMobileClass="d-lg-none"
        />

        {/* End Mobile View */}
      </section>
    </>
  );
};

export default LeadingGallery;
