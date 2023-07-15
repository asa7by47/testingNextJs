import Image from "next/future/image";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";
import item1 from "../../public/item1.jpg";
import item2 from "../../public/item2.jpg";
import style from "./Latest.module.css";
import Carousel from "react-multi-carousel";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },

  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
  },
};
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
const Latest = ({ latestData }) => {
  const navigationPrevRef = useRef(null);
  const nextRef = useRef(null);
  const navigationPrevRefMobile = useRef(null);
  const navigationNextRefMobile = useRef(null);
  return (
    <>
      <section className="pb-2">
        <div className="empty"></div>
        <div className={`container-fluid p-5 lh-1 ${style.mopPadding}`}>
          <div className="row">
            <div className="col-md-6">
              <div className="item w-100">
                <span className="colorBlue h4 primary-color">
                  {latestData.title}
                </span>
                <p className={`text-muted lh-sm ${style.fontSize} w-75`}>
                  {latestData.description
                    .replace("<p>", "")
                    .replace("</p>", "")
                    .replace("<big>", "")
                    .replace("</big>", "")
                    .replace("&#39;", "")}
                  {/* <big>
                    Marakez builds with purpose. Every project we create comes{" "}
                    <br />
                    to life through meticulous attention to detail for our
                    client's <br /> needs. Here are our latest responses to the
                    market's <br /> demands.
                  </big> */}
                </p>
                <div className={`btn-view w-50 mt-3 mb-2 `}>
                  <button className={`my-2  ${style.btnLatest}  `}>
                    View all properties
                  </button>
                </div>
              </div>
            </div>
            <div
              className={`col-md-6 d-flex justify-content-end align-items-end  d-none ${style.PC}`}
            >
              <div className="row g-2">
                {latestData.projects.map((latest) => (
                  <div className="col-md-6 " key={latest.id}>
                    <div className="position-relative h-85 ">
                      <Image
                        src={latest.image}
                        width={500}
                        height={320}
                        className="w-100 h-100 rounded-3"
                        alt="dd"
                      />
                      <div className={`position-absolute top-0 start-0 end-0 bottom-0 rounded-3 ${style.overlay}`}>
                        <div className="container text-white lh-1 d-flex flex-column h-100 justify-content-end p-4">
                          <span className="fs-6 fw-normal">
                            {latest.subtitle}
                          </span>
                          <h6> {latest.title} </h6>
                          <p className="fs-6 fw-normal">
                            {latest.description
                              .replace("<p>", "")
                              .replace("</p>", "")
                              .replace("<br />\r\n&nbsp;", "")
                              
                              }
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
               
              </div>
            </div>
          </div>
          {/* Mobile View */}
          <div className={`${style.hide}  p-0 m-0 `}>
            <div className={`container-fluid  w-100 p-0 m-0`}>
              <Carousel
                responsive={responsive}
                ssr={true}
                arrows={true}
                swipeable={false}
                draggable={false}
                infinite={true}
                containerClass="carousel-container"
                className={`${style.carousselContainer}`}
                // rtl={true}
                customRightArrow={<RightArrow />}
                customLeftArrow={<LeftArrow />}
              >
                <div
                  className={`w-100 h-100 rounded-4 overflow-hidden position-relative `}
                >
                  <Image
                    alt="poster"
                    className={`img-fluid rounded-4 w-100 h-100 `}
                    src={item1}
                  />
                  <div className="position-absolute  top-0 start-0 w-100 h-100 ">
                    <div
                      className={`hoverCaption d-flex h-100 justify-content-end flex-column p-3    `}
                    >
                      <p className={`text-white ${style.size}`}>
                        How to take matters to new heights is the question we
                        answered with the first high-residential buildings in
                        West Cairo. Aeon towers were mindfully designed to match
                        the ambition of their residents. 20 floors of high-end
                      </p>
                      <a href="#" className="text-white fw-bold mb-5 ">
                        Know More
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className={`w-100 h-100 rounded-4 overflow-hidden position-relative `}
                >
                  <Image
                    alt="poster"
                    className={`img-fluid rounded-4 w-100 `}
                    src={item2}
                  />
                  <div className="position-absolute  top-0 start-0 w-100 h-100">
                    <div
                      className={`hoverCaption d-flex h-100 justify-content-end flex-column p-3    `}
                    >
                      <p className={`text-white `}>
                        How to take matters to new heights is the question we
                        answered with the first high-residential buildings in
                        West Cairo. Aeon towers were mindfully designed to match
                        the ambition of their residents. 20 floors of high-end &
                        fully serviced apartments/penthouses with the
                        extravagant skyline of Cairo as their view. If shooting
                        for the stars is ambitious, then living above the stars
                        is Aeon.
                      </p>
                      <a href="#" className="text-white fw-bold">
                        Know More
                      </a>
                    </div>
                  </div>
                </div>
              </Carousel>
            </div>
          </div>

          {/* End Mobile View */}
        </div>
      </section>
    </>
  );
};

export default Latest;
