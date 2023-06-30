import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { AiOutlineInstagram } from "react-icons/ai";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import aeon1 from "../../public/trending1.jpg";
import aeon2 from "../../public/trending2.jpg";
import HeaderText from "../HeaderText/HeaderText";
import style from "./Trending.module.css";
import Image from "next/image";
// import './trending.css'
const Trending = () => {
  const navigationPrevRef = useRef(null);
  const nextRef = useRef(null);
  const navigationPrevRefMobile = useRef(null);
  const navigationNextRefMobile = useRef(null);

  return (
    <>
      <section className={`${style.trending} px-4`}>
        <HeaderText
          text={"TRENDING NOW"}
          textWhite={style.textWhite}
          bgWhite="bg-white"
          trendingLineWidth={style.trendingLineWidth}
          trendingFontSize={style.trendingFontSize}
        />

        {/* PC View */}

        <div className={`sliderContainer pb-5 ${style.remove}`}>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: nextRef.current,
            }}
            modules={[Navigation]}
            className="mySwiper hello"
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
          >
            <div
            ref={navigationPrevRef}
            className={`swiper-button-prev ${style.ourDevelopment__SwiperButtons} ${style.ourDevelopmentLeftArrow}`}
          ></div>
          <div
            ref={nextRef}
            className={`swiper-button-next ${style.ourDevelopment__SwiperButtons} ${style.ourDevelopmentRightArrow}`}
          ></div>
            <SwiperSlide>
              <div className=" w-50 py-3 m-auto mobileWidth">
                <div className={`bg-white rounded-3 pb-2 ${style.cardImage__container}`}>
                  <Image
                    alt="Image"
                    src={aeon1}
                    className={` ${style.trendingImage}`}
                  />

                  <div className="">
                    <div className={`${style.hideFromPc}`}>
                      <h5 className=" colorBlue container  px-4 py-2 fs-4 fw-normal">
                      District 5 - Office
                        <span className="text-muted opacity-75 fs-4">
                          ,Aeon Towers
                        </span>
                      </h5>
                    </div>
                    <div className={`d-none ${style.showInMopile}`}>
                      <div className="container mt-3">
                        <div className="row g-0">
                          <div className="col-7">
                            <div className="text">
                              <h5 className={`colorBlue ${style.cardFontSize}`}>
                                AEON - 2 Bedrooms Typical Apartment
                              </h5>
                            </div>
                          </div>
                          <div className="col-5">
                            <div className="text-end  ">
                              <span
                                className={`text-muted opacity-75  ${style.cardFontSize}`}
                              >
                                ,Aeon Towers
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="container  px-3">
                      <div className="row">
                        <div className="col-6">
                          <div className="cardIcons">
                            <AiOutlineInstagram className="colorBlue fs-2" />
                            <span className="h6 ms-1 text-muted mobileSizing ">
                              3 beds
                            </span>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="cardIcons">
                            <AiOutlineInstagram className="colorBlue fs-2" />
                            <span className="h6 ms-1 text-muted mobileSizing">
                              246 SQM
                            </span>
                          </div>
                        </div>

                        <div className="col-6 col-sm-12 mt-2">
                          <div className="cardIcons">
                            <AiOutlineInstagram className="colorBlue fs-2" />
                            <span className="h6 ms-1 text-muted mobileSizing">
                              EGP 16,013,000
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="row mt-3 g-1">
                        <div className="col-6">
                          <div className="cardBtn">
                            <button
                              className={`text-white py-2 fw-bold w-100 text-center ${style.knowMore}`}
                            >
                              Know More
                            </button>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="cardBtn">
                            <button
                              className={` py-2 w-100 text-center fw-bold ${style.callUs}`}
                            >
                              Call Us
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" w-50 py-3 m-auto mobileWidth">
                <div className="bg-white rounded-3 pb-2">
                  <Image
                    alt="Image"
                    src={aeon1}
                    className={` ${style.trendingImage}`}
                  />

                  <div className="">
                    <div className={`${style.hideFromPc}`}>
                      <h5 className=" colorBlue container  px-4 py-2 fs-4 fw-normal">
                        Aeon - 3 Bedrooms Apartment
                        <span className="text-muted opacity-75 fs-4">
                          ,Aeon Towers
                        </span>
                      </h5>
                    </div>
                    <div className={`d-none ${style.showInMopile}`}>
                      <div className="container mt-3">
                        <div className="row g-0">
                          <div className="col-7">
                            <div className="text">
                              <h5 className={`colorBlue ${style.cardFontSize}`}>
                                AEON - 2 Bedrooms Typical Apartment
                              </h5>
                            </div>
                          </div>
                          <div className="col-5">
                            <div className="text-end  ">
                              <span
                                className={`text-muted opacity-75  ${style.cardFontSize}`}
                              >
                                ,Aeon Towers
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="container  px-3">
                      <div className="row">
                        <div className="col-6">
                          <div className="cardIcons">
                            <AiOutlineInstagram className="colorBlue fs-2" />
                            <span className="h6 ms-1 text-muted mobileSizing ">
                              3 beds
                            </span>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="cardIcons">
                            <AiOutlineInstagram className="colorBlue fs-2" />
                            <span className="h6 ms-1 text-muted mobileSizing">
                              246 SQM
                            </span>
                          </div>
                        </div>

                        <div className="col-6 col-sm-12 mt-2">
                          <div className="cardIcons">
                            <AiOutlineInstagram className="colorBlue fs-2" />
                            <span className="h6 ms-1 text-muted mobileSizing">
                              EGP 16,013,000
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="row mt-3 g-1">
                        <div className="col-6">
                          <div className="cardBtn">
                            <button
                              className={`text-white py-2 fw-bold w-100 text-center ${style.knowMore}`}
                            >
                              Know More
                            </button>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="cardBtn">
                            <button
                              className={` py-2 w-100 text-center fw-bold ${style.callUs}`}
                            >
                              Call Us
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

           
          </Swiper>
        </div>

        {/* End PC View */}
      </section>
    </>
  );
};

export default Trending;
