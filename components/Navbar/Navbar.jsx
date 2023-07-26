"use client";
import React, { useEffect, useRef, useState } from "react";
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { BsTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { IoLogoWhatsapp } from "react-icons/io";
import style from "./navbar.module.css";
import Image from "next/image";
import logo1 from "../../public/marakezlogo1.svg";
import logo2 from "../../public/marakezlogo2.svg";
import Link from "next/link";
import { useRouter } from "next/router";
import useMediaQuery from "@mui/material/useMediaQuery";

{
  /*  Navbar In Large Screens */
}
export const NavbarInLargeScreens = () => {
  const router = useRouter();
  const pathName = router.query.id;
  // console.log(pathName);
  useEffect(() => {
    // Large Screen
    const fixedNavbar = document.getElementById("navbarLargeScreen");
    const stickyScrollSpy = document.querySelector(".scrollSpyStick");
    const fixedHeightNavbar =
      getComputedStyle(fixedNavbar).getPropertyValue("height");
    if (stickyScrollSpy) {
      stickyScrollSpy.style.top = fixedHeightNavbar;
    }
  }, []);
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-white  d-none d-lg-block selectFixed ps-3"
        id="navbarLargeScreen"
      >
        <div className="container-fluid d-flex justify-content-between">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="d-flex justify-content-between w-100 ">
            <div
              className="collapse navbar-collapse "
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link href={`/whatwedo/#RETAIL`} passHref>
                    <a
                      className={`nav-link ${style.nav__textColor} active  ${style.nav_mobileSize}`}
                      aria-current="page"
                        >
                      Retail
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href={`/#ourDevelopment`} passHref>
                    <a
                      className={`nav-link ${style.nav__textColor}  ${style.nav_mobileSize}`}
                        >
                      Residential
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href={`whatwedo/#OFFICE SPACES`} passHref>
                    <a
                      className={`nav-link ${style.nav__textColor}  ${style.nav_mobileSize}`}
                        >
                      Offices
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href={`/whatwedo`} passHref>
                    <a
                      className={`nav-link ${style.nav__textColor}  ${style.nav_mobileSize}`}
                        >
                      What We Do
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href={`/news`} passHref>
                    <a
                      className={`nav-link ${style.nav__textColor}  ${style.nav_mobileSize}`}
                        >
                      Latest Updates
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <Link href={`/`} passHref className={`${style.logo__width} `}>
              <a className={`logo__width ${style.logoSizing}`}>
                <Image
                  src={logo1}
                  alt="logo"
                  width={130}
                  height={55}
                  className={`px-2 ${style.logo} `}
                />
                <Image
                  src={logo2}
                  alt="logo"
                  height={80}
                  width={80}
                  className=""
                />
              </a>
            </Link>

            <div
              className={`d-flex gap-2 ${style.btns__margin} align-items-center`}
            >
              <button
                className={` fw-bold border-0 ${
                  pathName === "ramla"
                    ? style.nav__btn + " ramlaButton"
                    : style.nav__btn
                }
                ${
                  pathName === "aeon-towers"
                    ? style.nav__btn + " aeonButton"
                    : style.nav__btn
                } 
                ${
                  pathName === "district-5"
                    ? style.nav__btn + " district5Button"
                    : style.nav__btn
                } 
               
                ${
                  pathName === "district-5-work"
                    ? style.nav__btn + " district5-WorkButton"
                    : style.nav__btn
                }`}
              >
                Start Video Call
              </button>
              <Link href={`/units`} passHref>
                <button
                  className={` fw-bold border-0 ${
                    pathName === "ramla"
                      ? style.nav__btn + " ramlaButton"
                      : style.nav__btn
                  }  ${
                    pathName === "aeon-towers"
                      ? style.nav__btn + " aeonButton"
                      : style.nav__btn
                  } 
                  ${
                    pathName === "district-5"
                      ? style.nav__btn + " district5Button"
                      : style.nav__btn
                  }
                  ${
                    pathName === "district-5-work"
                      ? style.nav__btn + " district5-WorkButton"
                      : style.nav__btn
                  } `}
                >
                  Choose Your Unit
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
{
  /* End Navbar In Large Screens */
}

export const NavbarInMobileScrens = () => {
  const router = useRouter();
  const pathName = router.query.id;
  useEffect(() => {
    // Mobile Screen
    const fixedMobileNavbar = document.getElementById("navbarMobileScreen");
    const scrollSpyStick = document.querySelector(".scrollSpyStick");
    const fixedMobileHeightNavbar =
      getComputedStyle(fixedMobileNavbar).getPropertyValue("height");
    if (scrollSpyStick) {
      scrollSpyStick.style.top = fixedMobileHeightNavbar;
    }
  }, []);
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-white d-lg-none fixed-top selectFixed"
        id="navbarMobileScreen"
      >
        <div className="container-fluid">
          <Link href={`/`}>
            <a
              className={`navbar-brand text-end ${style.centeredLogo}`}
              href="#"
            >
              <Image
                src={logo1}
                alt="logo"
                width={65}
                height={40}
                className={`px-2 ${style.logo} `}
              />
              <Image src={logo2} alt="logo" width={40} className="" />
            </a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${style.navbar__container} rounded`}
            id="navbarSupportedContent"
          >
            <div
              className={`d-flex gap-3 justify-content-around w-100 ${style.btns__margin} align-items-center pt-4 px-3`}
            >
              <button
                className={`${style.nav__btn} fw-bold ${style.btn__mobile} ${
                  pathName === "ramla"
                    ? style.nav__btn + " ramlaButton"
                    : style.nav__btn
                }
                ${
                  pathName === "aeon-towers"
                    ? style.nav__btn + " aeonButton"
                    : style.nav__btn
                }
                ${
                  pathName === "district-5"
                    ? style.nav__btn + " district5Button"
                    : style.nav__btn
                }
                ${
                  pathName === "district-5-work"
                    ? style.nav__btn + " district5-WorkButton"
                    : style.nav__btn
                }
                  w-50`}
              >
                Start Video Call
              </button>
              <Link href={`/units`} passHref>
                <button
                  className={`${style.nav__btn} fw-bold ${style.btn__mobile} ${
                    pathName === "ramla"
                      ? style.nav__btn + " ramlaButton"
                      : style.nav__btn
                  }  ${
                    pathName === "aeon-towers"
                      ? style.nav__btn + " aeonButton"
                      : style.nav__btn
                  }
                  ${
                    pathName === "district-5"
                      ? style.nav__btn + " district5Button"
                      : style.nav__btn
                  }
                  ${
                    pathName === "district-5-work"
                      ? style.nav__btn + " district5-WorkButton"
                      : style.nav__btn
                  } w-50`}
                >
                  Choose Your Unit
                </button>
              </Link>
            </div>

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className={`nav-item ${style.navbar__textBorderBottom} `}>
                <Link href={`/`}>
                  <a
                    className={`nav-link fw-medium px-3 fs-5 pb-4 ${style.nav__textColor}`}
                    aria-current="page"
                    >
                    Home
                  </a>
                </Link>
              </li>
              <li className={`nav-item ${style.navbar__textBorderBottom}`}>
                <Link href={`/whatwedo/#RETAIL`} passHref>
                  <a
                    className={`nav-link fw-medium px-3 m-0 p-0 pb-4 fs-5 ${style.nav__textColor}`}
                    >
                    Retail
                  </a>
                </Link>
              </li>
              <li className={`nav-item ${style.navbar__textBorderBottom}`}>
                <a
                  className={`nav-link fw-medium px-3 m-0 p-0 pb-4 fs-5 ${style.nav__textColor}`}
                >
                  Residential
                </a>
              </li>
              <li className={`nav-item ${style.navbar__textBorderBottom}`}>
                <Link href={`whatwedo/#OFFICE SPACES`} passHref>
                  <a
                    className={`nav-link fw-medium px-3 m-0 p-0 pb-4 fs-5 ${style.nav__textColor}`}
                    >
                    Offices
                  </a>
                </Link>
              </li>
              <li className={`nav-item ${style.navbar__textBorderBottom}`}>
                <Link href={`/whatwedo`} passHref>
                  <a
                    className={`nav-link fw-medium px-3 m-0 p-0 pb-4 fs-5 ${style.nav__textColor}`}
                    >
                    What We Do
                  </a>
                </Link>
              </li>
              <li className={`nav-item ${style.navbar__textBorderBottom}`}>
                <Link href={`/news`} passHref>
                  <a
                    className={`nav-link fw-medium px-3 m-0 p-0 pb-4 fs-5 ${style.nav__textColor}`}
                    >
                    Latest Updates
                  </a>
                </Link>
              </li>
              <li className={`nav-item ${style.navbar__textBorderBottom}`}>
                <a
                  className={`nav-link fw-medium px-3 m-0 p-0 pb-4 fs-5 ${style.nav__textColor}`}
                >
                  Careers
                </a>
              </li>
              <li className={`nav-item ${style.navbar__textBorderBottom}`}>
                <Link href={`/aboutUs`}>
                  <a
                    className={`nav-link fw-medium px-3 m-0 p-0 pb-4 fs-5 ${style.nav__textColor}`}
                    >
                    About Us
                  </a>
                </Link>
              </li>
              <li className={`nav-item ${style.navbar__textBorderBottom}`}>
                <Link href={`/contact-us`} passHref>
                  <a
                    className={`nav-link fw-medium px-3 m-0 p-0 pb-4 fs-5 ${style.nav__textColor}`}
                    >
                    Contact Us
                  </a>
                </Link>
              </li>
            </ul>
            <ul className="list-unstyled d-flex gap-3 mt-5 px-3 pb-2">
              <li
                className={`${
                  style.icon__container
                } d-flex justify-content-center align-items-center ${
                  pathName === "ramla"
                    ? "iconContainerInProject"
                    : style.icon__container
                } 
                ${
                  pathName === "aeon-towers"
                    ? "aeonTopNav"
                    : style.icon__container
                }
                ${
                  pathName === "district-5"
                    ? "district5TopNav"
                    : style.icon__container
                }
                ${
                  pathName === "district-5-work"
                    ? " district5WorkTopNav"
                    : style.icon__container
                }`}
              >
                <AiFillFacebook className="text-white fs-5" />
              </li>
              <li
                className={`${
                  style.icon__container
                } d-flex justify-content-center align-items-center ${
                  pathName === "ramla"
                    ? "iconContainerInProject"
                    : style.icon__container
                }
                ${
                  pathName === "aeon-towers"
                    ? "aeonTopNav"
                    : style.icon__container
                }
                ${
                  pathName === "district-5"
                    ? "district5TopNav"
                    : style.icon__container
                }
                ${
                  pathName === "district-5-work"
                    ? " district5WorkTopNav"
                    : style.icon__container
                }`}
              >
                <AiOutlineInstagram className="text-white fs-5" />
              </li>
              <li
                className={`${
                  style.icon__container
                } d-flex justify-content-center align-items-center ${
                  pathName === "ramla"
                    ? "iconContainerInProject"
                    : style.icon__container
                }
                ${
                  pathName === "aeon-towers"
                    ? "aeonTopNav"
                    : style.icon__container
                }
                ${
                  pathName === "district-5"
                    ? "district5TopNav"
                    : style.icon__container
                }
                ${
                  pathName === "district-5-work"
                    ? " district5WorkTopNav"
                    : style.icon__container
                }`}
              >
                <AiFillLinkedin className="text-white fs-5" />
              </li>
              <li
                className={`${
                  style.icon__container
                } d-flex justify-content-center align-items-center ${
                  pathName === "ramla"
                    ? "iconContainerInProject"
                    : style.icon__container
                }
                ${
                  pathName === "aeon-towers"
                    ? "aeonTopNav"
                    : style.icon__container
                }
                ${
                  pathName === "district-5"
                    ? "district5TopNav"
                    : style.icon__container
                }
                ${
                  pathName === "district-5-work"
                    ? " district5WorkTopNav"
                    : style.icon__container
                }`}
              >
                <AiFillYoutube className="text-white fs-5" />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
const Navbar = () => {
  const router = useRouter();
  const pathName = router.query.id;
  const isSmallScreen = useMediaQuery("(max-width:768px)");
  const [data, setData] = useState([]);
  const [socialMedia, setsocialMedia] = useState([]);
  useEffect(() => {
    const fetchingData = async () => {
      const res = await fetch(
        "https://backend-staging-marakez.bit68.com/en/api/contact-information"
      );
      const data = await res.json();
      setData(data);
    };
    // social Media API
    const fetchingSocialMediaData = async () => {
      const socialMediaRes = await fetch(
        "https://backend-staging-marakez.bit68.com/en/api/social-media"
      );
      const socialMediaData = await socialMediaRes.json();
      setsocialMedia(socialMediaData);
    };
    fetchingData();
    fetchingSocialMediaData();
  }, []);
  console.log(socialMedia);
  return (
    <>
      {/* Right Sticky Bar */}
      <div
        className={`bg-white ${style.sideNavbar}  ${
          pathName == "ramla" ? "test" : style.nav__textColor
        } `}
      >
        <div className=" ">
          <BsTelephoneFill className={`fs-5 ${style.cursor} my-4`} />
          <span className={`my-5 fs-5 ${style.cursor}`}>
            <Link href={`mailto: ${data.email}`} passHref>
              <a>
                <GrMail className={`fs-5 mb-2 primary-color`} />
              </a>
            </Link>
          </span>
          <Link href={`${data.whatsapp_link}`} target="_blank" passHref>
            <a>
              <IoLogoWhatsapp
                className={`fs-5 ${style.cursor} my-4 primary-color`}
              />
            </a>
          </Link>
        </div>
      </div>
      {/* End Right Sticky Bar */}

      {/* Top Nav */}
      <div className="sticky-top">
        <div
          className={`d-flex justify-content-end align-items-center w-100 border ${style.topNav} h-100 py-1 d-none d-lg-flex d-md-flex `}
        >
          <ul className="list-unstyled d-flex me-4">
            <li className="d-flex justify-content-center align-items-center">
              <Link href={`${socialMedia.careers_link}`} >
                <a
                  className={`text-decoration-none text-capitalize ${style.topNav__textColor} ${style.topNav__textSize} `}
                >
                  careers
                </a>
              </Link>

              <div className={`${style.lineBorder} `} />
            </li>
            <li className="d-flex justify-content-center align-items-center">
              <Link href={`/aboutUs`}>
                <a
                  className={`text-decoration-none text-capitalize ${style.topNav__textColor} ${style.topNav__textSize} `}
                >
                  About us
                </a>
              </Link>

              <div className={`${style.lineBorder} `} />
            </li>
            <li className="d-flex justify-content-center align-items-center">
              <Link href={`/contact-us`} >
                <a
                  className={`text-decoration-none text-capitalize ${style.topNav__textColor} ${style.topNav__textSize} `}
                >
                  contact us
                </a>
              </Link>
            </li>
          </ul>
          <ul className={`list-unstyled d-flex gap-1 me-5 ${style.socialMediaLinks}`}>
            <li
              className={` d-flex justify-content-center align-items-center ${
                pathName === "ramla"
                  ? "iconContainerInProject"
                  : style.icon__container
              }
              ${
                pathName === "aeon-towers"
                  ? "aeonTopNav"
                  : style.icon__container
              }
              ${
                pathName === "district-5"
                  ? "district5TopNav"
                  : style.icon__container
              }
              ${
                pathName === "district-5-work"
                  ? " district5WorkTopNav"
                  : style.icon__container
              }
              `}
            >
              <AiFillFacebook className="text-white fs-5" />
            </li>
            <Link href={`${socialMedia.instagram_link}`}  target="_blank">
              <li
                className={`${
                  pathName === "ramla"
                    ? "iconContainerInProject"
                    : style.icon__container
                }
              ${
                pathName === "aeon-towers"
                  ? "aeonTopNav"
                  : style.icon__container
              }
              ${
                pathName === "district-5"
                  ? "district5TopNav"
                  : style.icon__container
              }
              ${
                pathName === "district-5-work"
                  ? " district5WorkTopNav"
                  : style.icon__container
              } d-flex justify-content-center align-items-center`}
              >
                <AiOutlineInstagram className="text-white fs-5" />
              </li>
            </Link>

            <li
              className={`${
                pathName === "ramla"
                  ? "iconContainerInProject"
                  : style.icon__container
              }
              ${
                pathName === "aeon-towers"
                  ? "aeonTopNav"
                  : style.icon__container
              }
              ${
                pathName === "district-5"
                  ? "district5TopNav"
                  : style.icon__container
              }
              ${
                pathName === "district-5-work"
                  ? " district5WorkTopNav"
                  : style.icon__container
              }
               d-flex justify-content-center align-items-center`}
            >
              <AiFillLinkedin className="text-white fs-5" />
            </li>
            <li
              className={` ${
                pathName === "ramla"
                  ? "iconContainerInProject"
                  : style.icon__container
              }
              ${
                pathName === "aeon-towers"
                  ? "aeonTopNav"
                  : style.icon__container
              }
              ${
                pathName === "district-5"
                  ? "district5TopNav"
                  : style.icon__container
              }
              ${
                pathName === "district-5-work"
                  ? " district5WorkTopNav"
                  : style.icon__container
              }
                d-flex justify-content-center align-items-center`}
            >
              <AiFillYoutube className="text-white fs-5" />
            </li>
          </ul>
        </div>
        {/* End Top Nav */}

        {isSmallScreen ? <NavbarInMobileScrens /> : <NavbarInLargeScreens />}
        {/* Navbar In Large Screens */}

        {/* End Navbar In Large Screens */}

        {/* Mobile */}
        {/* End Mobile */}
      </div>
    </>
  );
};

export default Navbar;
