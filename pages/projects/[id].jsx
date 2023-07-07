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

// Scroll Nav
const ScrollSpyNav = () => {
  const router = useRouter();
  const pathname = router.asPath;
  const pathId = router.query.id;
  // use a state variable to store pathId
  const [pathIdState, setPathIdState] = useState(null);
  useEffect(() => {
    const btns = document.querySelectorAll(".jsClass");
    let event = () => {};
    event = () => {
      btns?.forEach((button) => {
        if (button?.classList?.contains("active")) {
          button.classList.add(`active-${pathIdState}`);
        } else {
          button.classList.remove(`active-${pathIdState}`);
        }
      });
    };
    window.addEventListener("scroll", event);
    return () => {
      window.removeEventListener("scroll", event);
    };
  }, [pathIdState]); // add pathIdState as a dependency

  // update pathIdState only when pathId is defined
  useEffect(() => {
    if (pathId) {
      setPathIdState(pathId);
    }
  }, [pathId]);
  return (
    <>
      <nav
        id="navbar-example2"
        className={`navbar bg-white border  ${style.navSticky__index} w-100 scrollSpyStick my-3 `}
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
const ProjectsDetails = () => {
  const router = useRouter();
  const pathname = router.asPath;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const navigationPrevRef = useRef(null);
  const nextRef = useRef(null);
  const navigationPrevRefMobile = useRef(null);
  const navigationNextRefMobile = useRef(null);
  useEffect(() => {
    const fixedNavbar = document.querySelectorAll("selectFixed");
    // const fixedHeightNavbar = getComputedStyle(fixedNavbar).getPropertyValue("height");
    const stickyScrollSpy = document.getElementById("navbar-example2");
    fixedNavbar.forEach((fixedElement) => {
      const fixedHeightNavbar =
        getComputedStyle(fixedElement).getPropertyValue("height");
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
        className="scrollspy-example bg-body-tertiary rounded-2 position-relative "
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
          <div className={`${style.sliderImgContainer}  h-100 px-3  `} id="scrollspyHeading1">
            <div className={`position-relative ${style.containerImage}  h-100`}>
              <Image
                src={slide1}
                alt="slide1"
                className={`${style.sliderImage} h-100 object-fit-cover`}
              />
              <button
                className={`border-0 position-absolute rounded-circle ${style.fullScreen__button}`}
                onClick={handleOpen}
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
                <Image src={slide1} alt="slide 1" className="w-100" />
              </div>
            </Modal>
          </div>
          <div className={`${style.sliderImgContainer}  h-100 px-3 pb-lg-3 `}>
            <div className={`position-relative ${style.containerImage}  h-100`}>
              <Image
                src={slide1}
                alt="slide1"
                className={`${style.sliderImage} h-100 object-fit-cover`}
              />
              <button
                className={`border-0 position-absolute rounded-circle ${style.fullScreen__button}`}
                onClick={handleOpen}
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
                <Image src={slide1} alt="slide 1" className="w-100" />
              </div>
            </Modal>
          </div>
          <div className={`${style.sliderImgContainer}  h-100 px-3 pb-lg-3 `}>
            <div className={`position-relative ${style.containerImage}  h-100`}>
              <Image
                src={slide1}
                alt="slide1"
                className={`${style.sliderImage} h-100 object-fit-cover`}
              />
              <button
                className={`border-0 position-absolute rounded-circle ${style.fullScreen__button}`}
                onClick={handleOpen}
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
                <Image src={slide1} alt="slide 1" className="w-100" />
              </div>
            </Modal>
          </div>
          <div className={`${style.sliderImgContainer}  h-100 px-3 pb-lg-3 `}>
            <div className={`position-relative ${style.containerImage}  h-100`}>
              <Image
                src={slide1}
                alt="slide1"
                className={`${style.sliderImage} h-100 object-fit-cover`}
              />
              <button
                className={`border-0 position-absolute rounded-circle ${style.fullScreen__button}`}
                onClick={handleOpen}
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
                <Image src={slide1} alt="slide 1" className="w-100" />
              </div>
            </Modal>
          </div>
          <div className={`${style.sliderImgContainer}  h-100 px-3 pb-lg-3 `}>
            <div className={`position-relative ${style.containerImage}  h-100`}>
              <Image
                src={slide1}
                alt="slide1"
                className={`${style.sliderImage} h-100 object-fit-cover`}
              />
              <button
                className={`border-0 position-absolute rounded-circle ${style.fullScreen__button}`}
                onClick={handleOpen}
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
                <Image src={slide1} alt="slide 1" className="w-100" />
              </div>
            </Modal>
          </div>
          <div className={`${style.sliderImgContainer}  h-100 px-3 pb-lg-3 `}>
            <div className={`position-relative ${style.containerImage}  h-100`}>
              <Image
                src={slide1}
                alt="slide1"
                className={`${style.sliderImage} h-100 object-fit-cover`}
              />
              <button
                className={`border-0 position-absolute rounded-circle ${style.fullScreen__button}`}
                onClick={handleOpen}
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
                <Image src={slide1} alt="slide 1" className="w-100" />
              </div>
            </Modal>
          </div>
        </Carousel>
        {/* Scroll Nav */}
        <ScrollSpyNav />
        {/* End Scroll Nav */}
        {/* Fixed Bottom  */}
        <FixedBottom />
        {/* End Fixed Bottom  */}
        {/* Location Section */}
        <section id="scrollspyHeading2" className="">
          <div className={`${style.paragraph_Container} px-3`}>
            <p>
              How to take matters to new heights is the question we answered
              with the first high residential buildings in West Cairo. Aeon
              Towers were mindfully designed to match the ambition of their
              residents 20 floors of high-end fully serviced apartments &
              penthouses with the extravagant skyline of Cairo as their view. If
              shooting for the stars is ambitious, then living above the stars
              is Aeon.
            </p>
          </div>
          <div className="container-fluid px-3 mt-4">
            <div className="row">
              <div className="col-md-4">
                <div className={`${style.textContainer}`}>
                  <h6>Location</h6>
                  <p>
                    Sheikh Zayed district with all the outings at Arkan,
                    Galleria 40, Capital Business Park and much more.
                    Universities - MSA, Misr University, Nile University Sports
                    Clubs - Shooting Club, Guezira Club, New Giza Club Hotels –
                    Movenpick, Hilton Dream Land, Novotel Hospitals – Dar El
                    Fouad, Rofayda, El Nada Hospitals – Dar El Fouad, Rofayda,
                    El Nada
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className={`${style.iframe__container} ${style.youtube__container}`}
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.1470068456074!2d30.969213725884707!3d30.00393497494409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145857a539b25ff5%3A0xaddeee8f55c0901a!2sAEON%20Courtyards%20by%20Marakez!5e0!3m2!1sar!2seg!4v1687713291064!5m2!1sar!2seg"
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
                <div className={`${style.iframe__container} `}>
                  <iframe
                    width="420"
                    height="500"
                    src="https://www.youtube.com/embed/jqY40Tvxe-M"
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
          className={`${style.masterPlanSection} mt-3`}
        >
          <div className="d-flex justify-content-center w-100 flex-column gap-5 align-items-center px-5">
            <h6>MasterPlan</h6>
            <p>
              AEON is a 21 acre residential complex comprised of four diverse
              building blocks, each with a different type of garden, all
              connected by a central pedestrian path. Three large courtyards are
              surrounded by midrise buildings that are linked together with a
              promenade leading to the towers. The promenade continues beyond
              the site’s boundaries leading directly to Mall of Arabia,
              providing residents with a hypermarket, shops, cinemas and
              entertainment venues at a walkable distance. Gardens are designed
              around different landscaping themes, complemented by a parkway.
              The lush green spaces are also connected to a broad range of
              shared amenities such as sports courts and jogging tracks.
            </p>
            <Image src={masterPlan} alt="masterPlan Image" />
          </div>
        </section>
        {/* End Master Plan Section */}
        {/* Amenities Section */}
        <section id="scrollspyHeading4" className="mt-5">
          <div className="d-flex justify-content-center w-100 ">
            <h6>Amenities</h6>
          </div>
          <div className="container mt-5 py-5">
            <div className="row">
              <div className="col-4 col-md-2 ">
                <div className="d-flex flex-column gap-2">
                  <div className={`${style.img_container}`}>
                    <Image
                      src={park}
                      alt="park"
                      className={`${style.amenities__image}`}
                    />
                  </div>
                  <div className={`${style.img_caption}`}>
                    <p className="text-center">2 floor underground parking</p>
                  </div>
                </div>
              </div>
              <div className="col-4 col-md-2 ">
                <div className="d-flex flex-column gap-2">
                  <div className={`${style.img_container}`}>
                    <Image
                      src={shape}
                      alt="park"
                      className={`${style.amenities__image}`}
                    />
                  </div>
                  <div className={`${style.img_caption} text-center`}>
                    <p>Kids pool & kids area</p>
                  </div>
                </div>
              </div>
              <div className="col-4 col-md-2 ">
                <div className="d-flex flex-column gap-2">
                  <div className={`${style.img_container} ${style.jokking}`}>
                    <Image
                      src={jokking}
                      alt="park"
                      className={`${style.amenities__image} `}
                    />
                  </div>
                  <div className={`${style.img_caption} text-center`}>
                    <p>800 meter Jogging track</p>
                  </div>
                </div>
              </div>
              <div className="col-4 col-md-2 ">
                <div className="d-flex flex-column gap-2">
                  <div className={`${style.img_container}`}>
                    <Image
                      src={gym}
                      alt="park"
                      className={`${style.amenities__image}`}
                    />
                  </div>
                  <div className={`${style.img_caption} text-center`}>
                    <p>Indoor gym and squash court</p>
                  </div>
                </div>
              </div>
              <div className="col-4 col-md-2 ">
                <div className="d-flex flex-column gap-2">
                  <div className={`${style.img_container}`}>
                    <Image
                      src={pool}
                      alt="park"
                      className={`${style.amenities__image}`}
                    />
                  </div>
                  <div className={`${style.img_caption} text-center`}>
                    <p>Outdoor leisure pool</p>
                  </div>
                </div>
              </div>
              <div className="col-4 col-md-2 ">
                <div className="d-flex flex-column gap-2">
                  <div className={`${style.img_container}`}>
                    <Image
                      src={football}
                      alt="park"
                      className={`${style.amenities__image}`}
                    />
                  </div>
                  <div className={`${style.img_caption} text-center`}>
                    <p className="text-center">
                      Outdoor multi-purpose court, tennis court , football pitch
                      & paddle tennis courts
                    </p>
                  </div>
                </div>
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
              <div className="row">
                <div className="col-md-6">
                  <div className="card_container">
                    <div className={`card ${style.cardContainer}`}>
                      <Image
                        src={one}
                        className={`${style.card__Img}`}
                        alt="..."
                      />
                      <p className={`ms-3 ${style.districtText} mt-3`}>
                        district-5
                      </p>
                      <div
                        className={`d-flex w-100 justify-content-between px-3 ${style.cardText_container}`}
                      >
                        <h5>District5 Residences</h5>
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
                          <g id="picture-frame" transform="translate(0 0)">
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
                        <p>127-343 SQM</p>
                      </div>
                      <div className="container-fluid py-2">
                        <div className="row ">
                          <div className="col-6 ">
                            <div className="btnContainer ">
                              <button
                                className={`w-100 border-0 text-white ${style.card__btn} py-2 fw-bold`}
                              >
                                Know More
                              </button>
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
                <div className="col-md-6">
                  <div className="card_container">
                    <div className={`card ${style.cardContainer}`}>
                      <Image
                        src={one}
                        className={`${style.card__Img}`}
                        alt="..."
                      />
                      <p className={`ms-3 ${style.districtText} mt-3`}>
                        district-5
                      </p>
                      <div
                        className={`d-flex w-100 justify-content-between px-3 ${style.cardText_container}`}
                      >
                        <h5>District5 Residences</h5>
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
                          <g id="picture-frame" transform="translate(0 0)">
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
                        <p>127-343 SQM</p>
                      </div>
                      <div className="container-fluid py-2">
                        <div className="row">
                          <div className="col-6 ">
                            <div className="btnContainer ">
                              <button
                                className={`w-100 border-0 text-white ${style.card__btn} py-2 fw-bold`}
                              >
                                Know More
                              </button>
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
              </div>
            </div>
          </div>
        </section>
        {/* End Consider Section */}
      </div>
    </>
  );
};

export default ProjectsDetails;
