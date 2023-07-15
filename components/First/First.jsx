import Image from "next/future/image";
import React from "react";
import style from "./First.module.css";
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
const First = ({ firstInBusinessData }) => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },

    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 0.99,
    },
  };
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
        <div
          className={`container-fluid p-5 ${style.hide} d-sm-none d-md-none d-lg-block`}
        >
          <div className="row position-relative ">
            {firstInBusinessData.map((first) => (
              <div className="col-4" key={first.id}>
                <div className="img">
                  <Image
                    alt="image"
                    src={first.image}
                    className="w-100 h-100"
                    width={600}
                    height={600}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* End PC View */}

        {/* Mobile View */}
        <Carousel
          responsive={responsive}
          ssr={true}
          arrows={true}
          swipeable={false}
          draggable={false}
          infinite={true}
          containerClass="carousel-container"
          className={`${style.carousselContainer} d-sm-block d-md-block d-lg-none `}
          customRightArrow={<RightArrow />}
          customLeftArrow={<LeftArrow />}
        >
          {firstInBusinessData.map((first) => (
            <div
              className={`w-100 h-100 overflow-hidden ${style.zoomHover} `}
              key={first.id}
            >
              <Image
                alt="poster"
                className={`img-fluid ${style.imgHover}  `}
                src={first.image}
                width={407}
                height={405}
              />
            </div>
          ))}
        </Carousel>

        {/* End Mobile View */}
      </section>
    </>
  );
};

export default First;
