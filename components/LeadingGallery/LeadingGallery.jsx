import Image from "next/image";
import React from "react";
import lead1 from "../../public/lead1.jpg";
import lead2 from "../../public/lead2.jpg";
import lead3 from "../../public/lead3.jpg";
import lead4 from "../../public/lead4.jpg";
import lead5 from "../../public/lead5.jpg";

import HeaderText from "../HeaderText/HeaderText";
import MobileSlider from "../MobileSlider/MobileSlider";
import OurDevelopment from "../OurDevelopment/OurDevelopment";
import style from "./LeadingGallery.module.css";
const LeadingGallery = () => {
  return (
    <>
      <section className=" py-5" id="leadingGallery">
        <HeaderText
          text={`THE LEADING MIXED-USE DEVELOPER IN  EGYPT`}
          LeadingLine={style.LeadingLine}
          hideLeadingLine={style.hideLeadingLine}
          leadingFontSize={style.leadingFontSize}
        />

        {/* PC View */}
        <div className={`container-fluid h-100 ${style.hideInMobile}`}>
          <div className="row ">
            <div className="col-md-4">
              <div
                className={`img-gallery rounded-4 position-relative overflow-hidden ${style.hover}`}
              >
                <Image
                  src={lead1}
                  className={`w-100 shadow-1-strong rounded-4 object-fit-cover ${style.zoom}`}
                  width={500}
                  height={500}
                  alt="Boat on Calm Water"
                />

                <div
                  className={`position-absolute  rounded-4 ${style.overlay}`}
                >
                  <div className="d-flex h-100 flex-column justify-content-end container px-4">
                    <span className="   fs-6 text-white">Retail</span>
                    <a href="#" className="   text-white mb-4 ">
                      Know More
                    </a>
                  </div>
                </div>
              </div>
              <div
                className={`img-gallery rounded-4 position-relative overflow-hidden mt-4 ${style.hover}`}
              >
                <Image
                  src={lead2}
                  className={`w-100 shadow-1-strong rounded-4 object-fit-cover h-75 ${style.zoom}`}
                  width={500}
                  height={500}
                  alt="Boat on Calm Water"
                />

                <div
                  className={`position-absolute  rounded-4 ${style.overlay}`}
                >
                  <div className="d-flex h-100 flex-column justify-content-end container px-4">
                    <span className="   fs-6 text-white m-0 p-0" >
                      Retail
                    </span>
                    <a href="#" className="   text-white mb-4 ">
                      Know More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 m-0 p-0">
              <div
                className={`img-gallery rounded-4 position-relative overflow-hidden h-100 ${style.hover}`}
              >
                <Image
                  src={lead3}
                  className={`w-100 shadow-1-strong rounded-4 object-fit-cover h-100 ${style.zoom}`}
                  width={500}
                  height={500}
                  alt="Boat on Calm Water"
                />

                <div
                  className={`position-absolute  rounded-4 ${style.overlay}`}
                >
                  <div className="d-flex h-100 flex-column justify-content-end container px-4">
                    <span className="   fs-6 text-white m-0 p-0" >
                      Retail
                    </span>
                    <a href="#" className="   text-white mb-4 ">
                      Know More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div
                className={`img-gallery rounded-4 position-relative overflow-hidden h-50 ${style.hover}`}
              >
                <Image
                  src={lead4}
                  className={`w-100 shadow-1-strong rounded-4 object-fit-cover ${style.zoom} h-100`}
                  width={500}
                  height={500}
                  alt="Boat on Calm Water"
                />

                <div
                  className={`position-absolute  rounded-4 ${style.overlay}`}
                >
                  <div className="d-flex h-100 flex-column justify-content-end container px-4">
                    <span className="   fs-6 text-white m-0 p-0" >
                      Retail
                    </span>
                    <a href="#" className="   text-white mb-4 ">
                      Know More
                    </a>
                  </div>
                </div>
              </div>
              <div
                className={`img-gallery rounded-4 position-relative overflow-hidden ${style.hover}   ${style.bgUnset}`}
              >
                <Image
                  src={lead5}
                  className={`w-100 shadow-1-strong rounded-4 object-fit-cover ${style.zoom} h-100 mt-auto`}
                  width={500}
                  height={500}
                  alt="Boat on Calm Water"
                />

                <div
                  className={`position-absolute  rounded-4 ${style.overlay}`}
                >
                  <div className="d-flex h-100 flex-column justify-content-end container px-4">
                    <span className="   fs-6 text-white m-0 p-0">Retail</span>
                    <a href="#" className="   text-white mb-4 ">
                      Know More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End PC View */}

        {/* Mobile View */}
        <MobileSlider showInMobile={style.showInMobile} sliderWidth={style.sliderWidth}/>


        {/* End Mobile View */}

      </section>
    </>
  );
};

export default LeadingGallery;
