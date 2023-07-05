"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";
import style from "./OurDevelopment.module.css";
import HeaderText from "../HeaderText/HeaderText";
import Image from "next/image";
import { ourDevelopmentInfo } from "../../constants";
import Link from "next/link";
import styled from "styled-components";
const OurDevelopment = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const navigationPrevRefMobile = useRef(null);
  const navigationNextRefMobile = useRef(null);
  return (
    <>
      <section className={`py-3 pt-5 ${style.removePadding}`}>
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

          <Swiper
            slidesPerView={4}
            spaceBetween={28}
            loop={true}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            modules={[Navigation, Pagination]}
            className={`mySwiper p-2 `}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
            }}
          >
            <div
              ref={navigationPrevRef}
              className={`swiper-button-prev ${style.ourDevelopment__SwiperButtons} ${style.ourDevelopmentLeftArrow}`}
            ></div>
            <div
              ref={navigationNextRef}
              className={`swiper-button-next ${style.ourDevelopment__SwiperButtons} ${style.ourDevelopmentRightArrow}`}
            ></div>
            {ourDevelopmentInfo.map((info) => (
              <SwiperSlide key={info.id}>
                <div
                  className={`w-100 h-100 rounded-4 overflow-hidden ${style.zoomHover}`}
                >
                  <Image
                    alt="poster"
                    className={`img-fluid rounded-4 ${style.imgHover}`}
                    src={info.img}
                  />

                  <div className="position-absolute  top-0 start-0 w-100 h-100">
                    <div
                      className={`hoverCaption d-flex h-100 justify-content-end flex-column p-2 d-none  ${style.hoverShow} `}
                    >
                      <p
                        className={`text-white ${style.fontHoverSize} m-0 mb-2`}
                      >
                        {info.description}
                      </p>
                      <Link
                        href={`/projects/${info.id}`}
                        className="linkStyle"
                        passHref
                      >
                        <a
                          className={`linkStyle text-white ${style.hover__Link}`}
                        >
                          {info.knowMoreText}
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className={`text-center mt-3 ${style.fsize}`}>
                  <h5 className={`colorBlue p-0 m-0 ${style.fsizeHead}`}>
                    {info.title}
                  </h5>
                  <p className={`text-muted p-0 m-0 ${style.Residential}`}>
                    {info.subTitle}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
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
            {ourDevelopmentInfo.map((mobileInfo) => (
              <SwiperSlide key={mobileInfo.id}>
                <div
                  className={`w-100 h-100 rounded-4 overflow-hidden ${style.zoomHover}`}
                >
                  <Image
                    alt="poster"
                    className={`img-fluid rounded-4 ${style.imgHover}`}
                    src={mobileInfo.img}
                  />
                  <div className="position-absolute  top-0 start-0 w-100 h-100">
                    <div
                      className={`hoverCaption d-flex h-100 justify-content-end flex-column p-2 d-none  ${style.hoverShow} `}
                    >
                      <p
                        className={`text-white ${style.fontHoverSize} m-0 mb-2`}
                      >
                        {mobileInfo.description}
                      </p>
                      <Link
                        href={`/projects/${mobileInfo.id}`}
                        className="linkStyle"
                        passHref
                      >
                        <a
                          className={`linkStyle text-white ${style.hover__Link} ${style.fontSizeMobile}`}
                        >
                          {mobileInfo.knowMoreText}
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className={` mt-3 ${style.fsize} text-center`}>
                  <h5 className={`colorBlue p-0 m-0 ${style.fsizeHead}`}>
                    {mobileInfo.title}
                  </h5>
                  <p className="text-muted p-0 m-0 ">{mobileInfo.subTitle}</p>
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
