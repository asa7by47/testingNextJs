import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper";

import ones from "../../public/ones.jpg";
import two from "../../public/two.jpg";
import three from "../../public/three.jpg";
import style from "./First.module.css";
import MobileSlider from "../MobileSlider/MobileSlider";
const First = () => {
  return (
    <>
      <section className="">
        <div className="text-center d-flex justify-content-center mt-5 mb-0">
          <div className="mb-0">
            <span className={`colorBlue ${style.first}  align-self-center`}>
              1
            </span>
            <span className="fs-2 colorBlue ">st </span>
            <span className="colorBlue  fs-3"> IN THE BUSNISS TO DO </span>
          </div>
        </div>

        {/* PC View */}
        <div className={`container-fluid p-5 ${style.hide}`}>
          <div className="row">
            <div className="col-4">
              <div className="img">
                <Image alt="image" src={ones} className="w-100 h-100" />
              </div>
            </div>
            <div className="col-4">
              <div className="img">
                <Image alt="image" src={two} className="w-100 h-100" />
              </div>
            </div>
            <div className="col-4">
              <div className="img">
                <Image alt="image" src={three} className="w-100 h-100" />
              </div>
            </div>
          </div>
        </div>
        {/* End PC View */}

        {/* Mobile View */}

        <div className={`container-fluid ${style.mobileView} `}>
          <Swiper
            slidesPerView={1.03}
            spaceBetween={5}
            // centeredSlides={true}
            loop={true}
            navigation={true}
            modules={[Navigation]}
            className={`mySwiper  ${style.MobileSliderWidth} p-0 m-0 `}
          >
            <SwiperSlide className="w-100">
              <div className={`w-100 h-100 overflow-hidden ${style.zoomHover}`}>
                <Image
                  alt="poster"
                  className={`img-fluid ${style.imgHover}`}
                  src={three}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className=" w-100">
              <div className={`w-100 h-100 overflow-hidden ${style.zoomHover}`}>
                <Image
                  alt="poster"
                  className={`img-fluid  ${style.imgHover}`}
                  src={ones}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-100">
              <div className={`w-100 h-100 overflow-hidden ${style.zoomHover}`}>
                <Image
                  alt="poster"
                  className={`img-fluid ${style.imgHover}`}
                  src={two}
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        {/* End Mobile View */}
      </section>
    </>
  );
};

export default First;
