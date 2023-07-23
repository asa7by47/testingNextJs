"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";
import style from "./OurDevelopment.module.css";
import HeaderText from "../HeaderText/HeaderText";
import Image from "next/future/image";
import { ourDevelopmentInfo } from "../../constants";
import Link from "next/link";
import styled from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const RightArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      aria-label="Go to previous slide"
      className={`react-multiple-carousel__arrow react-multiple-carousel__arrow--left rtl bg-white ${style.leftArrow}`}
    ></button>
  );
};
const LeftArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      aria-label="Go to previous slide"
      className={`react-multiple-carousel__arrow react-multiple-carousel__arrow--right rtl bg-white ${style.leftArrow}`}
    ></button>
  );
};
const OurDevelopment = ({ ourDevelopmentData }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1.5,
    },
  };

  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const navigationPrevRefMobile = useRef(null);
  const navigationNextRefMobile = useRef(null);
  return (
    <>
      <section
        className={`py-3 pt-5 ${style.removePadding}`}
        id="ourDevelopment"
      >
        <HeaderText
          displayNone={style.displayNone}
          removePadding={style.removePadding}
          text={"OUR DEVELOPMENTS"}
          BgLine={style.BgLine}
          developmentFontSize={style.developmentFontSize}
        />
        {/* PC View */}
        <div className={`container-fluid d-none ${style.pcView}`}>
          {/* swiper-button-prev */}

          <Carousel
            responsive={responsive}
            ssr={true}
            arrows={true}
            swipeable={false}
            draggable={false}
            infinite={true}
            containerClass="carousel-container"
            className={`${style.carousselContainer}`}
            customRightArrow={<RightArrow />}
            customLeftArrow={<LeftArrow />}
          >
            {ourDevelopmentData.map((info) => (
              <div key={info.id} >
                <div
                  className={`w-100 h-100 rounded-4 overflow-hidden ${style.zoomHover}`}
                >
                  <Image
                    alt={info.title}
                    className={`img-fluid rounded-4 ${style.imgHover}`}
                    src={info.image}
                    width={300}
                    height={300}
                  />

                  <div className="position-absolute  top-0 start-0 w-100 h-100">
                    <div
                      className={`hoverCaption d-flex h-100 justify-content-end flex-column p-2 d-none  ${style.hoverShow} `}
                    >
                      <div className={`text-white ${style.fontHoverSize} m-0 mb-2`} dangerouslySetInnerHTML={{__html:info.description}}></div>
                   
                      <Link
                        href={
                          info.title == "Mall of Arabia"
                            ? info.link
                            : `/projects/${info.title}`
                        }
                        className="linkStyle"
                        passHref
                      >
                        <a
                          className={`linkStyle text-white ${style.hover__Link}`}
                        >
                          Know More
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className={`text-center mt-3 ${style.fsize}`}>
                  <h5 className={`colorBlue p-0 m-0 ${style.fsizeHead}`}>
                    {info.destination.title}
                  </h5>
                  <p className={`text-muted p-0 m-0 ${style.Residential}`}>
                    {info.unit_types[0].name}
                  </p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
        {/* End PC View */}

        {/* Mobile View */}
        <div className={`container-fluid ${style.mobileView} `}>
          <Swiper
            slidesPerView={1.5}
            spaceBetween={30}
            loop={true}
            navigation={{
              prevEl: navigationPrevRefMobile.current,
              nextEl: navigationNextRefMobile.current,
            }}
            modules={[Navigation, Pagination]}
            className="mySwiper p-2 px-3 "
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = navigationPrevRefMobile.current;
              swiper.params.navigation.nextEl = navigationNextRefMobile.current;
            }}
          >
            <div
              ref={navigationPrevRefMobile}
              className={`swiper-button-prev ${style.ourDevelopment__SwiperButtons}`}
            ></div>
            <div
              ref={navigationNextRefMobile}
              className={`swiper-button-next ${style.ourDevelopment__SwiperButtons}`}
            ></div>
            {ourDevelopmentData.map((mobileInfo) => (
              <SwiperSlide key={mobileInfo.id}>
                <div
                  className={`w-100 h-100 rounded-4 overflow-hidden ${style.zoomHover}`}
                >
                  <Image
                    alt={mobileInfo.title}
                    className={`img-fluid rounded-4 ${style.imgHover}`}
                    src={mobileInfo.image}
                    width={600}
                    height={600}
                  />
                  <div className="position-absolute  top-0 start-0 w-100 h-100">
                    <div
                      className={`hoverCaption d-flex h-100 justify-content-end flex-column p-2 d-none  ${style.hoverShow} `}
                    >
                      <p
                        className={`text-white ${style.fontHoverSize} m-0 mb-2`}
                      >
                        {mobileInfo.description
                          .replace("<p>", "")
                          .replace("</p>", "")
                          .replace("<big>", "")
                          .replace("</big>", "")}
                      </p>
                      <Link
                        href={
                          mobileInfo.title == "Mall of Arabia"
                            ? mobileInfo.link
                            : `/projects/${mobileInfo.title}`
                        }
                        className="linkStyle"
                        passHref
                      >
                        <a
                          className={`linkStyle text-white ${style.hover__Link} ${style.fontSizeMobile}`}
                        >
                          Know More
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className={` mt-3 ${style.fsize} text-center`}>
                  <h5 className={`colorBlue p-0 m-0 ${style.fsizeHead}`}>
                    {mobileInfo.destination.title}
                  </h5>
                  <p className="text-muted p-0 m-0 ">
                    {mobileInfo.unit_types[0].name}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* End Mobile View */}
      </section>
    </>
  );
};

export default OurDevelopment;
