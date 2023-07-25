"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import slide1 from "../../public/slide1.jpg";
import one from "../../public/one.jpg";
import aeonLogo from "../../public/aeonLogo.svg";
import whiteArea from "../../public/whiteArea.svg";
import whiteCalendar from "../../public/whiteCalendar.svg";
import masterPlan from "../../public/masterPlan.jpg";
import gym from "../../public/gym.png";
import area from "../../public/area.svg";
import football from "../../public/football.png";
import jokking from "../../public/jokking.png";
import park from "../../public/park.png";
import pool from "../../public/pool.png";
import shape from "../../public/shape.png";
import call from "../../public/call.svg";
import person from "../../public/person.svg";
import mail from "../../public/mail.svg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";
import Image from "next/image";
import style from "./style.module.css";
import fullScreen from "../../public/fullScreen.svg";
import Modal from "@mui/material/Modal";
import HeaderText from "../../components/HeaderText/HeaderText";
import { useRouter } from "next/router";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Link from "next/link";

// Scroll Nav
const ScrollSpyNav = () => {
  const router = useRouter();
  const pathname = router.asPath;
  const pathId = router.query.id;
  const pathTitle = router.query.id;
  const [aeon, setAeon] = useState("");
  if (pathTitle === "Aeon Towers") {
    setAeon("aeon-towers");
  }
  

  return (
    <>
      <nav
        id="navbar-example2"
        className={`navbar bg-white border  ${style.navSticky__index} w-100 scrollSpyStick my-3`}
      >
        <ul
          className={`d-flex list-unstyled nav-pills justify-content-evenly ${style.navPills__mobile} w-50 jsClassParent ms-md-4`}
        >
          <li className={`nav-item ${style.test}`}>
            <a
              className={`nav-link text-uppercase ${style.nav_Style} ${style.test}  jsClass`}
              id={`hello`}
              href="#scrollspyHeading1"
              style={{}}
            >
              overview
            </a>
          </li>
          <li className={`nav-item ${style.test}`}>
            <a
              className={`nav-link text-uppercase ${style.nav_Style} ${style.test} jsClass`}
              id={`${style.hello}`}
              href="#scrollspyHeading2"
            >
              location
            </a>
          </li>
          <li className={`nav-item ${style.test}`}>
            <a
              className={`nav-link text-uppercase ${style.nav_Style} ${style.test} jsClass`}
              id={`${style.hello}`}
              href="#scrollspyHeading3"
            >
              MASTERPLAN
            </a>
          </li>
          <li className={`nav-item ${style.test}`}>
            <a
              className={`nav-link text-uppercase ${style.nav_Style} ${style.test} jsClass`}
              id={`${style.hello}`}
              href="#scrollspyHeading4"
            >
              AMENITIES
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};
// End Scroll Nav

const FixedBottom = () => {
  const router = useRouter();
  const pathname = router.asPath;
  return (
    <div
      className={`position-fixed  py-1 ${
        pathname == "/projects/1"
          ? `${style.fixedBottom} projectOne`
          : style.fixedBottom
      } ${
        pathname == "/projects/2"
          ? `${style.fixedBottom} projectTwo`
          : style.fixedBottom
      } `}
    >
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 d-flex align-items-center justify-content-center">
            <div className="image_container">
              <Image
                src={aeonLogo}
                alt="aeon Logo"
                className={`${style.aeonLogoImage} `}
              />
            </div>
          </div>
          <div className="col-5 d-flex align-items-center justify-content-around">
            <div className="image_container text-center d-flex flex-column">
              <Image src={whiteArea} alt="aeon Logo" />
              <div className="">
                <h6 className="text-white m-0 p-0">From 168-518 SQM</h6>
              </div>
            </div>
            <div className="image_container text-center d-flex flex-column">
              <Image src={whiteCalendar} alt="aeon Logo" />
              <div className="">
                <h6 className="text-white m-0 p-0">6 Years</h6>
              </div>
            </div>
          </div>
          <div className="col-5">
            <div className="btns-container  d-flex align-items-center gap-2 justify-content-center w-100 h-100">
              <button
                className={`${style.footerBtn}  py-2 ${
                  pathname == "/projects/2"
                    ? `${style.footerBtn} bg-black`
                    : style.footerBtn
                } ${
                  pathname == "/projects/2"
                    ? `${style.footerBtn} projectTwoText`
                    : style.footerBtn
                }`}
              >
                Register your interest
              </button>
              <button
                className={`${style.footerBtn} text-white py-2 ${
                  pathname == "/projects/1"
                    ? `${style.callus_btn} projectOne`
                    : style.callus_btn
                } ${
                  pathname == "/projects/2"
                    ? `${style.callus_btn} projectTwo`
                    : style.callus_btn
                } 
                `}
              >
                Call us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const ProjectsDetails = ({ projectDetailsData }) => {
  console.log();
  const router = useRouter();
  const pathname = router.asPath;
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const handleOpen = (img) => {
    setSelectedImage(img);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const navigationPrevRef = useRef(null);
  const nextRef = useRef(null);
  const navigationPrevRefMobile = useRef(null);
  const navigationNextRefMobile = useRef(null);
  useEffect(() => {
    const fixedNavbar = document.querySelectorAll(".selectFixed");

fixedNavbar.forEach(fixedElement => {
  // Increase the height of the fixed element by 20 pixels
  const fixedHeightNavbar =
    parseInt(getComputedStyle(fixedElement).getPropertyValue("height")) + 36 + "px";

  const stickyScrollSpy = document.getElementById("navbar-example2");
  if (stickyScrollSpy) {
    stickyScrollSpy.style.top = fixedHeightNavbar;
  }
    });
  }, []);
  const RightArrow = ({ onClick }) => {
    return (
      <button
        onClick={onClick}
        aria-label="Go to previous slide"
        className={`react-multiple-carousel__arrow react-multiple-carousel__arrow--left rtl bg-white ${style.leftArrow} ${style.rightArrowPosition}`}
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
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <div
        data-bs-spy="scroll"
        data-bs-target="#navbar-example2"
        data-bs-root-margin="0px 0px -40%"
        data-bs-smooth-scroll="true"
        className="scrollspy-example bg-body-tertiary rounded-2 position-relative"
        tabIndex="0"
      >
        <Carousel
          responsive={responsive}
          ssr={true}
          arrows={true}
          swipeable={false}
          draggable={false}
          infinite={true}
          containerClass="carousel-container"
          customRightArrow={<RightArrow />}
          customLeftArrow={<LeftArrow />}
          className={`${style.carousselContainer} h-100`}
        >
          {projectDetailsData.images.map((img) => (
            <div
              className={`${style.sliderImgContainer} w-100  h-100 px-2 `}
              id="scrollspyHeading1"
              key={img.id}
            >
              <div className={`position-relative ${style.containerImage} `}>
                <Image
                  src={img.image}
                  alt="slide1"
                  width={600}
                  height={800}
                  className={`${style.sliderImage} w-100 h-100 object-fit-cover`}
                />
                <button
                  className={`border-0 position-absolute rounded-circle ${style.fullScreen__button}`}
                  onClick={() => {
                    handleOpen(img);
                  }}
                >
                  <Image src={fullScreen} alt="full Screen Button" />
                </button>
              </div>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className="border-0 d-flex justify-content-center align-items-center"
              >
                <div className={`${style.zoom__container}`}>
                  <Image
                    src={selectedImage?.image}
                    width={600}
                    height={600}
                    alt="slide 1"
                    className="w-100"
                  />
                </div>
              </Modal>
            </div>
          ))}
        </Carousel>
        {/* Scroll Nav */}
        <ScrollSpyNav />
        {/* End Scroll Nav */}
        {/* Fixed Bottom  */}
        <FixedBottom />
        {/* End Fixed Bottom  */}
        <div className="">
          {/* Location Section */}
          <section id="scrollspyHeading2" className="">
            <div className={`${style.paragraph_Container} px-3`}>
              <div
                dangerouslySetInnerHTML={{
                  __html: projectDetailsData.overview,
                }}
              ></div>
            </div>
            <div className="container-fluid mt-5">
              <div className="row">
                <div className="col-md-4">
                  <div className={`${style.textContainer}`}>
                    <h6 className="my-4 ms-3">Location</h6>
                    <div
                      className={`${style.locationParagraph}`}
                      dangerouslySetInnerHTML={{
                        __html: projectDetailsData.location_description,
                      }}
                    ></div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div
                    className={`${style.iframe__container} ${style.youtube__container}`}
                  >
                    <iframe
                      src={projectDetailsData.location_url}
                      width="435"
                      height="500"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className={`${style.iframe__container}`}>
                    <iframe
                      width="420"
                      height="500"
                      src={`https://www.youtube.com/embed/${projectDetailsData.youtube__container}`}
                      title="Aeon - Live Up 2"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Location Section */}
          {/* Master Plan Section */}
          <section
            id="scrollspyHeading3"
            className={`${style.masterPlanSection} mt-5`}
          >
            <div className="d-flex justify-content-center w-100 flex-column gap-5 align-items-center">
              <h6>MasterPlan</h6>
              <div
                className="px-5"
                dangerouslySetInnerHTML={{
                  __html: projectDetailsData.masterplan_description,
                }}
              ></div>
              <Image
                src={projectDetailsData.masterplan_image}
                width={1200}
                height={800}
                className="object-fit-cover"
                alt="masterPlan Image"
              />
            </div>
          </section>
          {/* End Master Plan Section */}
          {/* Amenities Section */}
          <section id="scrollspyHeading4" className="mt-5">
            <div className="d-flex justify-content-center w-100 ">
              <h6>Amenities</h6>
            </div>
            <div className="container-fluid mt-5 py-5 px-4">
              <div className="container-fluid mt-5">
                <div className="d-flex justify-content-between w-100  align-items-start">
                  {projectDetailsData.amenities.map((amen) => (
                    
                      <div className=" col-md-2 " key={amen.id}>
                        <div className="d-flex flex-column gap-2">
                          <div className={`${style.img_container}`}>
                            <div className={`${style.amenImageContainer}`}>
                              <Image
                                src={amen.icon}
                                alt="park"
                                className={`${style.amenities__image} w-100`}
                                width={50}
                                height={50}
                              />
                            </div>
                          </div>
                          <div className={`${style.img_caption}`}>
                            <p className="text-center"> {amen.description} </p>
                          </div>
                        </div>
                      </div>
                    
                  ))}
                </div>
              </div>
            </div>
          </section>
          {/* End Amenities Section */}
          {/* Contact Section */}
          <section className={`${style.contact__bgImage} pb-4`}>
            <div className="px-5">
              <h6 className="text-white py-5">
                I would like to be contacted by sales
              </h6>
              <div className={`container-fluid ${style.inputsMargin}`}>
                <div className="row">
                  <div className="col-md-6">
                    <div className={`${style.contact_container}`}>
                      <label htmlFor="" className="mb-3 text-white">
                        First Name
                      </label>
                      <div
                        className={`${style.input_container} position-relative`}
                      >
                        <input type="text" className="w-100 py-2" />
                        <div
                          className={`position-absolute ${style.iconContainer}`}
                        >
                          <Image src={person} alt="person" />
                        </div>
                        <div className={`${style.right__border}`}></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className={`${style.contact_container}`}>
                      <label htmlFor="" className="mb-3 text-white">
                        Last Name
                      </label>
                      <div
                        className={`${style.input_container} position-relative`}
                      >
                        <input type="text" className="w-100 py-2" />
                        <div
                          className={`position-absolute ${style.iconContainer}`}
                        >
                          <Image src={person} alt="person" />
                        </div>
                        <div className={`${style.right__border}`}></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className={`${style.contact_container}`}>
                      <label htmlFor="" className=" text-white mt-4 pb-3">
                        Your Mobile Number
                      </label>
                      <div
                        className={`${style.input_container} position-relative`}
                      >
                        <input type="text" className="w-100 py-2" />
                        <div
                          className={`position-absolute ${style.iconContainer}`}
                        >
                          <Image src={call} alt="person" />
                        </div>
                        <div className={`${style.right__border}`}></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className={`${style.contact_container}`}>
                      <label htmlFor="" className=" text-white mt-4 pb-3">
                        Your Email
                      </label>
                      <div
                        className={`${style.input_container} position-relative`}
                      >
                        <input type="text" className="w-100 py-2" />
                        <div
                          className={`position-absolute ${style.iconContainer}`}
                        >
                          <Image src={mail} alt="person" />
                        </div>
                        <div className={`${style.right__border}`}></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-end">
                  <div className="col-md-3 d-flex justify-content-end">
                    <button
                      className={` bg-white text-dark w-100 text-center py-2 py-md-3 mt-3 rounded-5 border-0`}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Contact Section */}
          {/* Consider Section */}
          {projectDetailsData.related_projects.length === 0 ? (
            ""
          ) : (
            <section className="consider pt-5 pb-3">
              <HeaderText
                displayNone={style.displayNone}
                removePadding={style.removePadding}
                text={"YOU MAY ALSO WANT TO CONSIDER"}
                BgLine={style.BgLine}
                developmentFontSize={style.developmentFontSize}
              />
              <div className="pt-4 mt-5">
                <div className="container-fluid">
                  <div className="row justify-content-center">
                    {projectDetailsData.related_projects.map(
                      (related) =>
                        related.title != "district-5 work" && (
                          <div className="col-md-6" key={related.id}>
                            <div className="card_container">
                              <div className={`card ${style.cardContainer}`}>
                                <Image
                                  src={related.image}
                                  width={500}
                                  height={500}
                                  className={`${style.card__Img}`}
                                  alt={related.image_alt}
                                />
                                <p
                                  className={`ms-3 ${style.districtText} mt-3`}
                                >
                                  {related.title}
                                </p>
                                <div
                                  className={`d-flex w-100 justify-content-between px-3 ${style.cardText_container}`}
                                >
                                  <h5> {related.subtitle} </h5>
                                  <span>Delivery Started</span>
                                </div>
                                <div
                                  className={`${style.size} d-flex gap-1 py-2 mt-2 ms-3`}
                                >
                                  <svg
                                    id="vuesax_linear_picture-frame"
                                    data-name="vuesax/linear/picture-frame"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="29.315"
                                    height="29.315"
                                    viewBox="0 0 29.315 29.315"
                                  >
                                    <g
                                      id="picture-frame"
                                      transform="translate(0 0)"
                                    >
                                      <path
                                        id="Vector"
                                        d="M8.55,24.429h7.329c6.107,0,8.55-2.443,8.55-8.55V8.55c0-6.107-2.443-8.55-8.55-8.55H8.55C2.443,0,0,2.443,0,8.55v7.329C0,21.986,2.443,24.429,8.55,24.429Z"
                                        transform="translate(2.443 2.443)"
                                        fill="none"
                                        stroke="#21275b"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                      />
                                      <path
                                        id="Vector-2"
                                        data-name="Vector"
                                        d="M0,0,6.046,24.429"
                                        transform="translate(10.993 2.443)"
                                        fill="none"
                                        stroke="#21275b"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                      />
                                      <path
                                        id="Vector-3"
                                        data-name="Vector"
                                        d="M11.641,0,0,3.4"
                                        transform="translate(2.443 14.926)"
                                        fill="none"
                                        stroke="#21275b"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                      />
                                      <path
                                        id="Vector-4"
                                        data-name="Vector"
                                        d="M0,0H29.315V29.315H0Z"
                                        fill="none"
                                        opacity="0"
                                      />
                                    </g>
                                  </svg>
                                  <p>From</p>
                                  <p> {related.area_start_from} SQM</p>
                                </div>
                                <div className="container-fluid py-2">
                                  <div className="row ">
                                    <div className="col-6 ">
                                      <div className="btnContainer ">
                                        <Link
                                          href={`/projects/${related.slug}`}
                                        >
                                          <button
                                            className={`w-100 border-0 text-white ${style.card__btn} py-2 fw-bold`}
                                          >
                                            Know More
                                          </button>
                                        </Link>
                                      </div>
                                    </div>
                                    <div className="col-6 ">
                                      <div className="btnContainer ">
                                        <button
                                          className={`w-100  ${style.card__btn} ${style.callUs__btn} py-2 fw-bold`}
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
                        )
                    )}
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* End Consider Section */}
        </div>
      </div>
    </>
  );
};

export default ProjectsDetails;
export async function getServerSideProps(context) {
  const { params } = context;
  const { id } = params;
  console.log(params);
  console.log(id);

  // Unit Project
  const projectDetailsRes = await fetch(
    `https://backend-staging-marakez.bit68.com/en/api/projects-slug/${id}/`
  );
  const projectDetailsData = await projectDetailsRes.json();
  return {
    props: {
      projectDetailsData,
      id,
    },
  };
}
