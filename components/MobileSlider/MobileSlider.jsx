import React, { useRef, useState } from "react";
import slide1 from "../../public/slide1.jpg";
import slide2 from "../../public/slide2.jpg";
import slide3 from "../../public/slide3.jpg";
import slide4 from "../../public/slide4.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper";

import style from "./MobileSlider.module.css";
import Image from "next/future/image";
import Link from "next/link";

const MobileSlider = ({ sliderWidth, showInMobileClass, leadingMixedData }) => {
  const navigationPrevRef = useRef(null);
  const nextRef = useRef(null);
  const navigationPrevRefMobile = useRef(null);
  const navigationNextRefMobile = useRef(null);
  return (
    <>
      <div
        className={`container-fluid ${style.mobileView} ${sliderWidth} ${showInMobileClass}`}
      >
        <Swiper
          slidesPerView={1.1}
          spaceBetween={3}
          centeredSlides={true}
          loop={true}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: nextRef.current,
          }}
          modules={[Navigation]}
          className={`mySwiper  ${style.MobileSliderWidth}  w-100 m-0 p-0 vh-100`}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
        >
          <div
            ref={navigationPrevRef}
            className={`swiper-button-prev ${style.ourDevelopment__SwiperButtons} `}
          ></div>
          <div
            ref={nextRef}
            className={`swiper-button-next ${style.ourDevelopment__SwiperButtons} `}
          ></div>
          {leadingMixedData.map((data) => (
            <SwiperSlide key={data.id}>
              <div
                className={`w-100 h-75 rounded-4 overflow-hidden ${style.zoomHover} `}
              >
                <Image
                  alt="poster"
                  className={` rounded-4 ${style.imgHover} w-100 h-100 object-fit-cover `}
                  src={data.image}
                  width={700}
                  height={700}
                />
                <div className="position-absolute  top-0 start-0 w-100 h-100">
                  <div
                    className={`hoverCaption d-flex h-100 justify-content-end flex-column align-items-center pb-5  ${style.hoverShow}   `}
                  >
                    <p
                      className={`text-white ${style.fontHoverSize} m-0 p-0 fs-2 me-4 `}
                    >
                      {data.title}
                    </p>
                    <Link href={data.link} passHref>
                      <a href="" className="text-white fw-bold">
                        Know More
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
      
        </Swiper>
      </div>
    </>
  );
};

export default MobileSlider;
