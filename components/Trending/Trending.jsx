import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { AiOutlineInstagram } from "react-icons/ai";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import aeon1 from "../../public/trending1.jpg";
import bed from "../../public/bed.svg";
import price from "../../public/price.svg";
import area from "../../public/area.svg";
import aeon2 from "../../public/trending2.jpg";
import HeaderText from "../HeaderText/HeaderText";
import style from "./Trending.module.css";
import Image from "next/future/image";
import Link from "next/link";
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
const Trending = ({ trendingData }) => {
  const navigationPrevRef = useRef(null);
  const nextRef = useRef(null);
  const navigationPrevRefMobile = useRef(null);
  const navigationNextRefMobile = useRef(null);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  // console.log(trendingData);
  return (
    <>
      <section className={`${style.trending} px-4`}>
        {/* PC View */}

        <div className={`sliderContainer pb-5 ${style.remove}`}>
          <div className="row px-sm-2 px-md-2 px-lg-4">
            <div className="col-md-6">
              <HeaderText
                text={"CHECK IT AGAIN"}
                textWhite={style.textWhite}
                bgWhite="bg-white"
                trendingLineWidth={style.trendingLineWidth}
                trendingFontSize={style.trendingFontSize}
              />
              <Carousel
                responsive={responsive}
                ssr={true}
                arrows={true}
                swipeable={false}
                draggable={false}
                infinite={true}
                containerClass="carousel-container"
                className={`${style.carousselContainer} `}
                customRightArrow={<RightArrow />}
                customLeftArrow={<LeftArrow />}
              >
                <div className=" rounded-3 w-100 bg-white overflow-hidden">
                  <Image
                    src={trendingData.image}
                    alt="aeon1"
                    className={`${style.unitCardImage} w-100`}
                    width={600}
                    height={500}
                  />
                  <div className="py-1 px-3 w-100">
                    <div className="mx-1">
                      <div className="pt-2">
                        <h6 className={`${style.blueColor}`}>
                          {trendingData.title}
                        </h6>
                      </div>
                      <div className="row">
                        <div className="col-6 d-flex align-items-center justify-content-center my-2 justify-content-md-start">
                          <Image src={bed} alt="bed" className="" />
                          <span className={`mx-1 ${style.blueColor}`}>
                            {trendingData.beds}
                          </span>
                          <span className={`${style.blueColor}`}>beds</span>
                        </div>
                        <div className="col-6 d-flex align-items-center justify-content-center my-2 justify-content-lg-start">
                          <Image src={area} alt="area" className="" />
                          <span className={`mx-1 ${style.blueColor} `}>
                            {trendingData.area}
                          </span>
                          <span className={`${style.blueColor}`}>SQM</span>
                        </div>
                        <div className="col-6 d-flex align-items-center ">
                          <Image src={price} alt="price" className="" />
                          <span className={`${style.blueColor} mx-1`}>
                            {new Intl.NumberFormat("en-US", {
                              style: "currency",
                              currency: "EGP",
                            })
                              .format(parseFloat(trendingData.price))
                              .replace(".00", "")}
                          </span>
                        </div>
                      </div>
                      <div className="row py-2 g-1">
                        <div className="col-6 ">
                          <div className="cardBtn w-100">
                            <button
                              className={`text-white py-2 fw-bold w-100 text-center ${style.knowMore}`}
                            >
                              <Link
                                href={`/units/${trendingData.id}`}
                                passHref
                                className={`${style.LinkStyle}`}
                              >
                                <a
                                  style={{
                                    textDecoration: "none",
                                    color: "white",
                                  }}
                                >
                                  Know More
                                </a>
                              </Link>
                            </button>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="cardBtn w-100">
                            <button
                              className={` py-2 w-100 text-center fw-bold ${style.callUs}`}
                            >
                              <Link
                                className={`${style.LinkStyle}`}
                              >
                                <a
                                  style={{
                                    textDecoration: "none",
                                    color: "#21275b",
                                  }}
                                >
                                  Call Us
                                </a>
                              </Link>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel>
            </div>
            <div className="col-md-6">
              <HeaderText
                text={"TRENDING NOW"}
                textWhite={style.textWhite}
                bgWhite="bg-white"
                trendingLineWidth={style.trendingLineWidth}
                trendingFontSize={style.trendingFontSize}
              />
              <Carousel
                responsive={responsive}
                ssr={true}
                arrows={true}
                swipeable={false}
                draggable={false}
                infinite={true}
                containerClass="carousel-container"
                className={`${style.carousselContainer} `}
                customRightArrow={<RightArrow />}
                customLeftArrow={<LeftArrow />}
              >
                <div className=" rounded-3 w-100 bg-white overflow-hidden">
                  <Image
                    src={trendingData.image}
                    alt="aeon1"
                    className={`${style.unitCardImage} w-100`}
                    width={600}
                    height={500}
                  />
                  <div className="py-1 px-3 w-100">
                    <div className="mx-1">
                      <div className="pt-2">
                        <h6 className={`${style.blueColor}`}>
                          {trendingData.title}
                        </h6>
                      </div>
                      <div className="row">
                        <div className="col-6 d-flex align-items-center justify-content-center my-2 justify-content-md-start">
                          <Image src={bed} alt="bed" className="" />
                          <span className={`mx-1 ${style.blueColor}`}>
                            {trendingData.beds}
                          </span>
                          <span className={`${style.blueColor}`}>beds</span>
                        </div>
                        <div className="col-6 d-flex align-items-center justify-content-center my-2 justify-content-lg-start">
                          <Image src={area} alt="area" className="" />
                          <span className={`mx-1 ${style.blueColor} `}>
                            {trendingData.area}
                          </span>
                          <span className={`${style.blueColor}`}>SQM</span>
                        </div>
                        <div className="col-6 d-flex align-items-center ">
                          <Image src={price} alt="price" className="" />
                          <span className={`${style.blueColor} mx-1`}>
                            {new Intl.NumberFormat("en-US", {
                              style: "currency",
                              currency: "EGP",
                            })
                              .format(parseFloat(trendingData.price))
                              .replace(".00", "")}
                          </span>
                        </div>
                      </div>
                      <div className="row py-2 g-1">
                        <div className="col-6 ">
                          <div className="cardBtn w-100">
                            <button
                              className={`text-white py-2 fw-bold w-100 text-center ${style.knowMore}`}
                            >
                              <Link
                                href={`/units/${trendingData.id}`}
                                passHref
                                className={`${style.LinkStyle}`}
                              >
                                <a
                                  style={{
                                    textDecoration: "none",
                                    color: "white",
                                  }}
                                >
                                  Know More
                                </a>
                              </Link>
                            </button>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="cardBtn w-100">
                            <button
                              className={` py-2 w-100 text-center fw-bold ${style.callUs}`}
                            >
                              <Link
                                className={`${style.LinkStyle}`}
                              >
                                <a
                                  style={{
                                    textDecoration: "none",
                                    color: "#21275b",
                                  }}
                                >
                                  Call Us
                                </a>
                              </Link>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className=" rounded-3 w-100 bg-white overflow-hidden">
                  <Image
                    src={aeon1}
                    alt="aeon1"
                    className={`${style.unitCardImage} `}
                  />
                  <div className="py-1 px-3 w-100">
                    <div className="mx-1">
                      <div className="pt-2">
                        <h6 className={`${style.blueColor}`}>
                          AEON - 3 Bedrooms Typical Apartment
                        </h6>
                      </div>
                      <div className="row">
                        <div className="col-6 d-flex align-items-center justify-content-center my-2 justify-content-md-start">
                          <Image src={bed} alt="bed" className="" />
                          <span className={`mx-1 ${style.blueColor}`}>3</span>
                          <span className={`${style.blueColor}`}>beds</span>
                        </div>
                        <div className="col-6 d-flex align-items-center justify-content-center my-2 justify-content-lg-start">
                          <Image src={area} alt="area" className="" />
                          <span className={`mx-1 ${style.blueColor} `}>
                            246
                          </span>
                          <span className={`${style.blueColor}`}>SQM</span>
                        </div>
                        <div className="col-6 d-flex align-items-center ">
                          <Image src={price} alt="price" className="" />
                          <span className={`mx-1 ${style.blueColor} `}>
                            EGP
                          </span>
                          <span className={`${style.blueColor}`}>
                            17,879,000
                          </span>
                        </div>
                      </div>
                      <div className="row py-2 ">
                        <div className="col-6 ">
                          <div className="cardBtn w-100">
                            <button
                              className={`text-white py-2 fw-bold w-100 text-center ${style.knowMore}`}
                            >
                              <Link
                                href={`/projects/id`}
                                passHref
                                className={`${style.LinkStyle}`}
                              >
                                <a
                                  style={{
                                    textDecoration: "none",
                                    color: "white",
                                  }}
                                >
                                  Know More
                                </a>
                              </Link>
                            </button>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="cardBtn w-100">
                            <button
                              className={` py-2 w-100 text-center fw-bold ${style.callUs}`}
                            >
                              <Link
                                href={`/projects/id`}
                                passHref
                                className={`${style.LinkStyle}`}
                              >
                                <a
                                  style={{
                                    textDecoration: "none",
                                    color: "#21275b",
                                  }}
                                >
                                  Call Us
                                </a>
                              </Link>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </Carousel>
            </div>
          </div>
        </div>

        {/* End PC View */}
      </section>
    </>
  );
};

export default Trending;
