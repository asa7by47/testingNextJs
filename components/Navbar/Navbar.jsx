import React, { useEffect } from "react";
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

{
  /*  Navbar In Large Screens */
}
export const NavbarInLargeScreens = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white  d-none d-lg-block " id="fixedNavbar">
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
                  <a
                    className={`nav-link ${style.nav__textColor} active  ${style.nav_mobileSize}`}
                    aria-current="page"
                    href="#"
                  >
                    Retail
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${style.nav__textColor}  ${style.nav_mobileSize}`}
                    href="#"
                  >
                    Residential
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${style.nav__textColor}  ${style.nav_mobileSize}`}
                    href="#"
                  >
                    Offices
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${style.nav__textColor}  ${style.nav_mobileSize}`}
                    href="#"
                  >
                    What We Do
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${style.nav__textColor}  ${style.nav_mobileSize}`}
                    href="#"
                  >
                    Latest Updates
                  </a>
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
              <button className={`${style.nav__btn} fw-bold border-0`}>
                Start Video Call
              </button>
              <button className={`${style.nav__btn} fw-bold border-0`}>
                Choose Your Unit
              </button>
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
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white d-lg-none sticky-top ">
        <div className="container-fluid">
          <Link href={`/`}>
          <a className={`navbar-brand text-end ${style.centeredLogo}`} href="#">
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
                className={`${style.nav__btn} fw-bold ${style.btn__mobile} w-50`}
              >
                Start Video Call
              </button>
              <button
                className={`${style.nav__btn} fw-bold ${style.btn__mobile} w-50`}
              >
                Choose Your Unit
              </button>
            </div>

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className={`nav-item ${style.navbar__textBorderBottom} `}>
                <a
                  className={`nav-link fw-medium px-3 fs-5 pb-4 ${style.nav__textColor}`}
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className={`nav-item ${style.navbar__textBorderBottom}`}>
                <a
                  className={`nav-link fw-medium px-3 m-0 p-0 pb-4 fs-5 ${style.nav__textColor}`}
                  href="#"
                >
                  Retail
                </a>
              </li>
              <li className={`nav-item ${style.navbar__textBorderBottom}`}>
                <a
                  className={`nav-link fw-medium px-3 m-0 p-0 pb-4 fs-5 ${style.nav__textColor}`}
                  href="#"
                >
                  Residential
                </a>
              </li>
              <li className={`nav-item ${style.navbar__textBorderBottom}`}>
                <a
                  className={`nav-link fw-medium px-3 m-0 p-0 pb-4 fs-5 ${style.nav__textColor}`}
                  href="#"
                >
                  Offices
                </a>
              </li>
              <li className={`nav-item ${style.navbar__textBorderBottom}`}>
                <a
                  className={`nav-link fw-medium px-3 m-0 p-0 pb-4 fs-5 ${style.nav__textColor}`}
                  href="#"
                >
                  What We Do
                </a>
              </li>
              <li className={`nav-item ${style.navbar__textBorderBottom}`}>
                <a
                  className={`nav-link fw-medium px-3 m-0 p-0 pb-4 fs-5 ${style.nav__textColor}`}
                  href="#"
                >
                  Latest Updates
                </a>
              </li>
              <li className={`nav-item ${style.navbar__textBorderBottom}`}>
                <a
                  className={`nav-link fw-medium px-3 m-0 p-0 pb-4 fs-5 ${style.nav__textColor}`}
                  href="#"
                >
                  Careers
                </a>
              </li>
              <li className={`nav-item ${style.navbar__textBorderBottom}`}>
                <a
                  className={`nav-link fw-medium px-3 m-0 p-0 pb-4 fs-5 ${style.nav__textColor}`}
                  href="#"
                >
                  About Us
                </a>
              </li>
              <li className={`nav-item ${style.navbar__textBorderBottom}`}>
                <a
                  className={`nav-link fw-medium px-3 m-0 p-0 pb-4 fs-5 ${style.nav__textColor}`}
                  href="#"
                >
                  Contact Us
                </a>
              </li>
            </ul>
            <ul className="list-unstyled d-flex gap-3 mt-5 px-3 pb-2">
              <li
                className={`${style.icon__container} d-flex justify-content-center align-items-center`}
              >
                <AiFillFacebook className="text-white fs-5" />
              </li>
              <li
                className={`${style.icon__container} d-flex justify-content-center align-items-center`}
              >
                <AiOutlineInstagram className="text-white fs-5" />
              </li>
              <li
                className={`${style.icon__container} d-flex justify-content-center align-items-center`}
              >
                <AiFillLinkedin className="text-white fs-5" />
              </li>
              <li
                className={`${style.icon__container} d-flex justify-content-center align-items-center`}
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
  useEffect(()=>{
    const fixedNavbar = document.getElementById("fixedNavbar");
    const fixedHeightNavbar = getComputedStyle(fixedNavbar).getPropertyValue("height");
    const stickyScrollSpy = document.getElementById("navbar-example2");
    stickyScrollSpy.style.top = fixedHeightNavbar;
  },[])
  return (
    <>
      {/* Right Sticky Bar */}
      <div className={`bg-white ${style.sideNavbar} ${style.nav__textColor} `}>
        <div className=" ">
          <BsTelephoneFill className={`fs-5 ${style.cursor} my-4`} />
          <span className={`my-5 fs-5 ${style.cursor}`}>
            <GrMail className={`fs-5 mb-2`} />
          </span>
          <IoLogoWhatsapp className={`fs-5 ${style.cursor} my-4`} />
        </div>
      </div>
      {/* End Right Sticky Bar */}

      {/* Top Nav */}
      <div className="fixed-top">
        <div
          className={`d-flex justify-content-end align-items-center w-100 border ${style.topNav} h-100 py-1 d-none d-lg-flex d-md-flex `}
        >
          <ul className="list-unstyled d-flex me-4">
            <li className="d-flex justify-content-center align-items-center">
              <a
                href="#"
                className={`text-decoration-none text-capitalize ${style.topNav__textColor} ${style.topNav__textSize} `}
              >
                careers
              </a>
              <div className={`${style.lineBorder} `} />
            </li>
            <li className="d-flex justify-content-center align-items-center">
              <a
                href="#"
                className={`text-decoration-none text-capitalize ${style.topNav__textColor} ${style.topNav__textSize} `}
              >
                About us
              </a>
              <div className={`${style.lineBorder} `} />
            </li>
            <li className="d-flex justify-content-center align-items-center">
              <a
                href="#"
                className={`text-decoration-none text-capitalize ${style.topNav__textColor} ${style.topNav__textSize} `}
              >
                contact us
              </a>
            </li>
          </ul>
          <ul className="list-unstyled d-flex gap-1 me-5">
            <li
              className={`${style.icon__container} d-flex justify-content-center align-items-center`}
            >
              <AiFillFacebook className="text-white fs-5" />
            </li>
            <li
              className={`${style.icon__container} d-flex justify-content-center align-items-center`}
            >
              <AiOutlineInstagram className="text-white fs-5" />
            </li>
            <li
              className={`${style.icon__container} d-flex justify-content-center align-items-center`}
            >
              <AiFillLinkedin className="text-white fs-5" />
            </li>
            <li
              className={`${style.icon__container} d-flex justify-content-center align-items-center`}
            >
              <AiFillYoutube className="text-white fs-5" />
            </li>
          </ul>
        </div>
        {/* End Top Nav */}
        
        {/* Navbar In Large Screens */}
        <NavbarInLargeScreens />
        {/* End Navbar In Large Screens */}

        {/* Mobile */}
        <NavbarInMobileScrens />
        {/* End Mobile */}
      </div>
    </>
  );
};

export default Navbar;
