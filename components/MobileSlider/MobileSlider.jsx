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
import Image from "next/image";

const MobileSlider = ({  sliderWidth,showInMobileClass }) => {
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
          <SwiperSlide className="">
            <div
              className={`w-100 h-100 rounded-4 overflow-hidden ${style.zoomHover}`}
            >
              <Image
                alt="poster"
                className={`img-fluid rounded-4 ${style.imgHover}`}
                src={slide1}
              />
              <div className="position-absolute  top-0 start-0 w-100 h-100">
                <div
                  className={`hoverCaption d-flex h-100 justify-content-end flex-column align-items-center pb-5  ${style.hoverShow}   `}
                >
                  <p
                    className={`text-white ${style.fontHoverSize} m-0 p-0 fs-2 me-4 `}
                  >
                    Retail
                  </p>
                  <a href="#" className="text-white fw-bold">
                    Know More
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={`w-100 h-100 rounded-4 overflow-hidden ${style.zoomHover}`}
            >
              <Image
                alt="poster"
                className={`img-fluid rounded-4 ${style.imgHover}`}
                src={slide2}
              />
              <div className="position-absolute  top-0 start-0 w-100 h-100">
                <div
                  className={`hoverCaption d-flex h-100 justify-content-end flex-column align-items-center pb-5  ${style.hoverShow}   `}
                >
                  <p
                    className={`text-white ${style.fontHoverSize} m-0 p-0 fs-2 me-4 `}
                  >
                    Retail
                  </p>
                  <a href="#" className="text-white fw-bold">
                    Know More
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={`w-100 h-100 rounded-4 overflow-hidden ${style.zoomHover}`}
            >
              <Image
                alt="poster"
                className={`img-fluid rounded-4 ${style.imgHover}`}
                src={slide3}
              />
              <div className="position-absolute  top-0 start-0 w-100 h-100">
                <div
                  className={`hoverCaption d-flex h-100 justify-content-end flex-column align-items-center pb-5  ${style.hoverShow}   `}
                >
                  <p
                    className={`text-white ${style.fontHoverSize} m-0 p-0 fs-2 me-4 `}
                  >
                    Retail
                  </p>
                  <a href="#" className="text-white fw-bold">
                    Know More
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={`w-100 h-100 rounded-4 overflow-hidden ${style.zoomHover}`}
            >
              <Image
                alt="poster"
                className={`img-fluid rounded-4 ${style.imgHover}`}
                src={slide4}
              />
              <div className="position-absolute  top-0 start-0 w-100 h-100">
                <div
                  className={`hoverCaption d-flex h-100 justify-content-end flex-column align-items-center pb-5  ${style.hoverShow}   `}
                >
                  <p
                    className={`text-white ${style.fontHoverSize} m-0 p-0 fs-2 me-4 `}
                  >
                    Retail
                  </p>
                  <a href="#" className="text-white fw-bold">
                    Know More
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={`w-100 h-100 rounded-4 overflow-hidden ${style.zoomHover}`}
            >
              <Image
                alt="poster"
                className={`img-fluid rounded-4 ${style.imgHover}`}
                src={slide3}
              />
              <div className="position-absolute  top-0 start-0 w-100 h-100">
                <div
                  className={`hoverCaption d-flex h-100 justify-content-end flex-column align-items-center pb-5  ${style.hoverShow}   `}
                >
                  <p
                    className={`text-white ${style.fontHoverSize} m-0 p-0 fs-2 me-4 `}
                  >
                    Retail
                  </p>
                  <a href="#" className="text-white fw-bold">
                    Know More
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={`w-100 h-100 rounded-4 overflow-hidden ${style.zoomHover}`}
            >
              <Image
                alt="poster"
                className={`img-fluid rounded-4 ${style.imgHover}`}
                src={slide2}
              />
              <div className="position-absolute  top-0 start-0 w-100 h-100">
                <div
                  className={`hoverCaption d-flex h-100 justify-content-end flex-column align-items-center pb-5  ${style.hoverShow}   `}
                >
                  <p
                    className={`text-white ${style.fontHoverSize} m-0 p-0 fs-2 me-4 `}
                  >
                    Retail
                  </p>
                  <a href="#" className="text-white fw-bold">
                    Know More
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={`w-100 h-100 rounded-4 overflow-hidden ${style.zoomHover}`}
            >
              <Image
                alt="poster"
                className={`img-fluid rounded-4 ${style.imgHover}`}
                src={slide4}
              />
              <div className="position-absolute  top-0 start-0 w-100 h-100">
                <div
                  className={`hoverCaption d-flex h-100 justify-content-end flex-column align-items-center pb-5  ${style.hoverShow}   `}
                >
                  <p
                    className={`text-white ${style.fontHoverSize} m-0 p-0 fs-2 me-4 `}
                  >
                    Retail
                  </p>
                  <a href="#" className="text-white fw-bold">
                    Know More
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={`w-100 h-100 rounded-4 overflow-hidden ${style.zoomHover}`}
            >
              <Image
                alt="poster"
                className={`img-fluid rounded-4 ${style.imgHover}`}
                src={slide1}
              />
              <div className="position-absolute  top-0 start-0 w-100 h-100">
                <div
                  className={`hoverCaption d-flex h-100 justify-content-end flex-column align-items-center pb-5  ${style.hoverShow}   `}
                >
                  <p
                    className={`text-white ${style.fontHoverSize} m-0 p-0 fs-2 me-4 `}
                  >
                    Retail
                  </p>
                  <a href="#" className="text-white fw-bold">
                    Know More
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default MobileSlider;
