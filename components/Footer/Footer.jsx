import React, { useEffect, useState } from "react";
import style from "./Footer.module.css";
import EndFooter from "../EndFooter/EndFooter";
import Link from "next/link";
import axios from "axios";
import Joi from "joi";

const Footer = () => {
  const [errorsList, setErrorsList] = useState(null);
  const [apiMessage, setApiMessage] = useState("");
  const [user, setUser] = useState({ email: "" });
  function getUser(e) {
    // getting the input Value from e.target.value
    const inputValue = e.target.value;
    // getting the ID of Inputs
    const inputsID = e.target.id;

    // i took deep copy from useState (user) => newUser
    const newUser = { ...user };

    // when i change on any input he uses the id of that input and replace the value in (newUser)
    newUser[inputsID] = inputValue;

    // i used this func to add the new object to the useState
    setUser(newUser);
  }

  function submitUser(e) {
    // for preventing reload after submit
    e.preventDefault();
    // validation example aly ana 3awez akaren beh
    const schema = Joi.object({
      email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
        .required()
        .messages({
          "string.empty": "Email address is required.",
        }),
    });
    const joiResponse = schema.validate(user, { abortEarly: false });
    if (joiResponse.error == undefined) {
      // aked l data valid => sa7
      // b3d kda b3ml call ll api hna
      sendUser();
      const clearInput = (document.getElementById("email").value = "");
      document.getElementById("success").innerHTML = "The data has been sent"
    } else {
      // lw al validation fy 7aga hi3mel save ll error list
      setErrorsList(joiResponse.error.details);
    }
  }
  async function sendUser() {
    const { data } = await axios.post(
      "https://backend-staging-marakez.bit68.com/en/api/newsletter-subscription/",
      user
    );
    if (data.message == "success") {
    } else {
      setApiMessage(data.message);
    }
  }
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
              <Link href={`/contact-us`} passHref>
                <span
                  className={`colorBlue fw-semibold footer-fs ${style.footerFs} ${style.colorBlue}`}
                >
                  Contact US
                </span>
              </Link>

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
                NEWSconstTER
              </h6>
              <p
                className={`footer-fs text-muted ${style.footerFs} mt-1 ${style.footer_FontWeight}`}
              >
                Join our mailing list to receive monthly news and updates about
                our developments
              </p>
            </div>
            <div>
              <form className="d-flex w-100 mt-2 " onSubmit={submitUser}>
                <input
                  type="text"
                  className={`w-100 px-2 py-2  mob-input ${style.input} `}
                  placeholder="Your Email"
                  onChange={getUser}
                  id="email"
                  name="email"
                />
                <button
                  className={` text-center fs-6 fw-bolder ${style.footerBtn} px-3 w-25 `}
                >
                  SIGN UP
                </button>
              </form>
              {errorsList == null
                ? ""
                : errorsList.map(function (err, idx) {
                    return (
                      <>
                        <div key={idx} className="alert alert-danger">
                          {err.message}
                        </div>
                      </>
                    );
                  })}
              <div id="success"></div>
            </div>
          </div>
        </div>
      </div>
      <EndFooter />
    </footer>
  );
};

export default Footer;
