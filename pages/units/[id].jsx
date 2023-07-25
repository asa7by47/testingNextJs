import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import aeonLogo from "../../public/aeonLogo.svg";
import whiteArea from "../../public/whiteArea.svg";
import whiteCalendar from "../../public/whiteCalendar.svg";
import bed from "../../public/whiteBed.svg";
import whitePrice from "../../public/whitePrice.svg";
import call from "../../public/call.svg";
import person from "../../public/person.svg";
import mail from "../../public/mail.svg";
import Image from "next/future/image";
import style from "./units.module.css";
import fullScreen from "../../public/fullScreen.svg";
import Modal from "@mui/material/Modal";
import HeaderText from "../../components/HeaderText/HeaderText";
import { useRouter } from "next/router";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const FixedBottom = ({ unitProjectData }) => {
  const router = useRouter();
  const pathname = router.asPath;
  return (
    <div
      className={`position-fixed  py-2 pe-4 ${
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
          <div className="col-9 d-flex align-items-center justify-content-around">
            <div className="image_container text-center d-flex flex-column">
              <Image src={aeonLogo} alt="aeon Logo" />
            </div>
            <div className="image_container text-center d-flex flex-column justify-content-center align-items-center gap-1">
              <Image src={bed} alt="aeon Logo" className="" />
              <div className="">
                <h6 className="text-white m-0 p-0">
                  {unitProjectData.beds} beds
                </h6>
              </div>
            </div>
            <div className="image_container text-center d-flex flex-column justify-content-center align-items-center gap-1">
              <Image src={whiteArea} alt="aeon Logo" />
              <div className="">
                <h6 className="text-white m-0 p-0">
                  {unitProjectData.area} SQM
                </h6>
              </div>
            </div>
            <div className="image_container text-center d-flex flex-column justify-content-center align-items-center gap-1">
              <Image src={whitePrice} alt="aeon Logo" />
              <div className="">
                <h6 className="text-white m-0 p-0">
                  
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "EGP",
                  })
                    .format(parseFloat(unitProjectData.price))
                    .replace(".00", "")}
                </h6>
              </div>
            </div>
            <div className="image_container text-center d-flex flex-column justify-content-center align-items-center gap-1">
              <Image src={whiteCalendar} alt="aeon Logo" />
              <div className="">
                <h6 className="text-white m-0 p-0">
                  
                  {unitProjectData.project.plan_years} Years
                </h6>
              </div>
            </div>
          </div>
          <div className="col-3 d-flex justify-content-end align-items-end">
            <div className="btns-container  d-flex align-items-center gap-2 justify-content-end w-100 h-100">
              <button
                className={` ${style.footerBtn} text-white py-2 ${
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
                Contact sales now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const ProjectsDetails = ({ unitProjectData, id }) => {
  console.log(unitProjectData.project.images);
  const router = useRouter();
  const pathname = router.asPath;
  const [selectedImage, setSelectedImage] = useState(null);
  const [open, setOpen] = useState(false);
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
        className="scrollspy-example bg-body-tertiary rounded-2 h-100 "
        tabIndex="0"
      >
        <Carousel
          responsive={responsive}
          ssr={true}
          arrows={true}
          swipeable={false}
          draggable={false}
          infinite={true}
          customRightArrow={<RightArrow />}
          customLeftArrow={<LeftArrow />}
          className={`${style.carousselContainer} mb-5 m-auto`}
        >
          {unitProjectData.project.images.map((img) => (
            <div
              className={`${style.sliderImgContainer} px-2 pb-lg-3 h-100`}
              key={img.id}
            >
              <div
                className={`position-relative ${style.containerImage} h-100`}
              >
                <Image
                  src={img.image}
                  alt="slide1"
                  className={`${style.sliderImage} w-100 object-fit-cover `}
                  width={600}
                  height={600}
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
                    alt="slide 1"
                    width={600}
                    height={600}
                    className="w-100"
                  />
                </div>
              </Modal>
            </div>
          ))}
        </Carousel>

        <FixedBottom unitProjectData={unitProjectData} />
        {/* End Fixed Bottom  */}
        {/* Location Section */}
        <section id="scrollspyHeading2" className="mt-5 pt-5">
          <div className={`${style.paragraph_Container} px-3`}>
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-4">
                  <div>
                    <h3>About {unitProjectData.title}</h3>
                    <div
                      className={`${style.aboutUnitText} mt-5`}
                      dangerouslySetInnerHTML={{
                        __html: unitProjectData.layout_description,
                      }}
                    ></div>
                  </div>
                </div>
                <div className="col-md-8 ">
                  <div className="d-flex flex-row-reverse">
                    <Image
                      width={500}
                      height={600}
                      className="w-100 px-5 "
                      src={unitProjectData.layout_image}
                      alt={unitProjectData.title}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid px-3 mt-4">
            <div className="row">
              <div className="col-md-4">
                <div className={`${style.textContainer}`}>
                  <h6>Location</h6>
                  <div
                    className=""
                    dangerouslySetInnerHTML={{
                      __html: unitProjectData.project.location_description,
                    }}
                  ></div>
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className={`${style.iframe__container} ${style.youtube__container}`}
                >
                  <iframe
                    src={unitProjectData.project.location_url}
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
                    src={`https://www.youtube.com/embed/${unitProjectData.project.youtube_video_link}`}
                    width="420"
                    height="500"
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

        {/* Amenities Section */}
        <section id="scrollspyHeading4" className="mt-5">
          <div className="d-flex justify-content-center w-100 ">
            <h6>Amenities</h6>
          </div>
          <div className="container-fluid mt-5">
            <div className="d-flex justify-content-between w-100  align-items-start">
              {unitProjectData.project.amenities.map((amen) => (
                <>
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
                </>
              ))}
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
  const unitProjectRes = await fetch(
    `https://backend-staging-marakez.bit68.com/en/api/units/${id}/`
  );
  const unitProjectData = await unitProjectRes.json();
  return {
    props: {
      unitProjectData,
      id,
    },
  };
}
