import React from "react";

import style from "./Footer.module.css";

import EndFooter from "../EndFooter/EndFooter";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" ">
      <div
        className={`container-fluid px-5 py-5  padding-mob border ${style.editPadding}`}
      >
        <div className="row ">
          <div className="col-md-2 col-6">
            <div className="footer-text d-flex flex-column">
              <span className={`text-muted footer-fs ${style.footerFs}`}>
                NAVIGATE
              </span>
              <span
                className={`colorBlue fw-semibold footer-fs ${style.footerFs} ${style.colorBlue}`}
              >
                Home
              </span>
              <span
                className={`colorBlue fw-semibold footer-fs ${style.footerFs} ${style.colorBlue}`}
              >
                Our Communities
              </span>
              <span
                className={`colorBlue fw-semibold footer-fs ${style.footerFs} ${style.colorBlue}`}
              >
                Latest Launches
              </span>
              <span
                className={`colorBlue fw-semibold footer-fs ${style.footerFs} ${style.colorBlue}`}
              >
                Latest Updates
              </span>
            </div>
          </div>
          <div className={`col-md-2 col-6 ${style.textEnd}`}>
            <div className="footer-text d-flex flex-column ">
              <span className={`text-muted footer-fs ${style.footerFs}`}>
                ABOUT
              </span>
              <span
                className={`colorBlue fw-semibold footer-fs ${style.footerFs} ${style.colorBlue}`}
              >
                WHAT WE DO
              </span>
              <Link href={"/management-team"} passHref>
                <a className="text-decoration-none">
                  <span
                    className={`colorBlue fw-semibold footer-fs ${style.footerFs} ${style.colorBlue}`}
                  >
                    Management Team
                  </span>
                </a>
              </Link>
            </div>
          </div>
          <div className={`col-md-2  ${style.mTop}`}>
            <div className="footer-text d-flex flex-column">
              <span className={`text-muted footer-fs ${style.footerFs}`}>
                Support
              </span>
              <span
                className={`colorBlue fw-semibold footer-fs ${style.footerFs} ${style.colorBlue}`}
              >
                Contact US
              </span>
              <span
                className={`colorBlue fw-semibold footer-fs ${style.footerFs} ${style.colorBlue}`}
              >
                Careers
              </span>
            </div>
          </div>
          <div className={`col-md-4 offset-md-2 ${style.mTop}`}>
            <div className="item-search ">
              <h6
                className={`colorBlue fw-semibold footer-fs ${style.footerFs} ${style.colorBlue}`}
              >
                NEWSLETTER
              </h6>
              <p
                className={`footer-fs text-muted ${style.footerFs} mt-1 ${style.footer_FontWeight}`}
              >
                Join our mailing list to receive monthly news and updates about
                our developments
              </p>
            </div>
            <div className="d-flex w-100 mt-2 ">
              <input
                type="text"
                className={`w-100 px-2 py-2  mob-input ${style.input} `}
                placeholder="Your Email"
              />
              <button
                className={` text-center fs-6 fw-bolder ${style.footerBtn} px-3 w-25 `}
              >
                SIGN UP
              </button>
            </div>
          </div>
        </div>
      </div>
      <EndFooter />
    </footer>
  );
};

export default Footer;
