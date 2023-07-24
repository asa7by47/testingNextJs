import React, { useState } from "react";
import style from "./contactUs.module.css";
import Image from "next/future/image";
import profile from "../../public/profile.svg";
import Link from "next/link";
import Joi from "joi";
import axios from "axios";
import { useRouter } from "next/router";
import Head from "next/head";
const ContactUs = ({ getContactData,seoData }) => {
  const router = useRouter();
  const [errorsList, setErrorsList] = useState(null);
  const [apiMessage, setApiMessage] = useState("");
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    message: "",
  });
  function getUser(e) {
    // getting the input Value from e.target.value
    let inputValue = e.target.value;
    // getting the ID of Inputs
    let inputsID = e.target.name;
    // i took deep copy from useState (user) => newUser
    let newUser = { ...user };
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
      first_name: Joi.string().alphanum().required().min(3).messages({
        "string.empty": "First name is required",
      }),
      last_name: Joi.string().alphanum().required().min(3).messages({
        "string.empty": "Last name is required",
      }),
      email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
        .required()
        .messages({
          "string.empty": "Email is required",
        }),
      phone_number: Joi.string().alphanum().length(11).required().messages({
        "string.empty": "Phone is required.",
        "string.length": "Please enter a valid phone number (01xxxxxxxxx)",
      }),
      message: Joi.string().optional().allow(""),
    });
    let joiResponse = schema.validate(user, { abortEarly: false });
    if (joiResponse.error == undefined) {
      // aked l data valid => sa7
      // b3d kda b3ml call ll api hna
      sendUser();
      router.push("/contact-us-success");
    } else {
      // lw al validation fy 7aga hi3mel save ll error list
      setErrorsList(joiResponse.error.details);
    }
  }

  async function sendUser() {
    let { data } = await axios.post(
      "https://backend-staging-marakez.bit68.com/en/api/contact-us/",
      user
    );
    if (data.message == "success") {
    } else {
      setApiMessage(data.message);
    }
  }
  console.log(seoData[2]);
  return (
    <>
    <Head>
    <title>
          {seoData[2].name.charAt(0).toUpperCase() + seoData[2].name.slice(1).replace("-"," ")}
        </title>

    </Head>
    <div className={`${style.bgColor}`}>
      <div className="container-fluid px-5 mt-5">
        <div className="row">
          <div className="col-md-6">
            <div className="imageContainer">
              <Image
                alt="Contact-Us"
                width={500}
                height={500}
                className="w-100 h-100"
                src={getContactData.image}
              />
            </div>
          </div>

          <div className="col-md-6">
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
            <form action="" onSubmit={submitUser}>
              <div className="d-flex justify-content-between">
                {/* First Name */}
                <div className="w-50 me-1">
                  <label htmlFor="first_name" className={`${style.labelColor}`}>
                    First Name
                  </label>
                  <div className="col">
                    <div className="w-100 my-2">
                      <div
                        className={`${style.input_container} d-flex align-items-center w-100 px-2 py-1 `}
                      >
                        <Image src={profile} alt="profileLogo" />
                        <div
                          className={`profile ${style.inputLine} mx-2`}
                        ></div>
                        <input
                          name="first_name"
                          id="first_name"
                          type="text"
                          className={`py-1 ${style.inputStyle}`}
                          onChange={getUser}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* End First Name */}
                {/* Last Name  */}
                <div className="w-50 ">
                  <label htmlFor="last_name" className={`${style.labelColor}`}>
                    Last Name
                  </label>
                  <div className="col">
                    <div className="w-100 my-2">
                      <div
                        className={`${style.input_container} d-flex align-items-center w-100 px-2 py-1 `}
                      >
                        <Image src={profile} alt="profileLogo" />
                        <div
                          className={`profile ${style.inputLine} mx-2`}
                        ></div>
                        <input
                          name="last_name"
                          id="last_name"
                          type="text"
                          className={`py-1 ${style.inputStyle}`}
                          onChange={getUser}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Last Name  */}
              </div>
              {/* Email */}
              <div>
                <label htmlFor="email" className={`${style.labelColor}`}>
                  Your Email
                </label>
              </div>
              <div className="col">
                <div className="w-100 my-2">
                  <div
                    className={`${style.input_container} d-flex align-items-center w-100 px-2 py-1 `}
                  >
                    <Image src={profile} alt="profileLogo" />
                    <div className={`profile ${style.inputLine} mx-2`}></div>
                    <input
                      name="email"
                      id="email"
                      type="text"
                      className={`py-1 ${style.inputStyle}`}
                      onChange={getUser}
                    />
                  </div>
                </div>
              </div>
              {/* End Email */}
              {/* Phone Number */}

              <div>
                <label htmlFor="phone_number" className={`${style.labelColor}`}>
                  Your Mobile Number
                </label>
              </div>
              <div className="col">
                <div className="w-100 my-2">
                  <div
                    className={`${style.input_container} d-flex align-items-center w-100 px-2 py-1 `}
                  >
                    <Image src={profile} alt="profileLogo" />
                    <div className={`profile ${style.inputLine} mx-2`}></div>
                    <input
                      name="phone_number"
                      id="phone_number"
                      type="number"
                      className={`py-1 ${style.inputStyle}`}
                      onChange={getUser}
                    />
                  </div>
                </div>
              </div>
              {/* End Phone Number */}
              {/* TextArea */}
              <div>
                <label htmlFor="message" className={`${style.labelColor}`}>
                  Your Message
                  <span> ( optional ) </span>
                </label>
              </div>
              <div className={`w-100 my-2 bg-white ${style.textAreaContainer}`}>
                <textarea
                  name="message"
                  id="message"
                  className={`w-100 ${style.textArea} border-0`}
                  rows="6"
                  onChange={getUser}
                ></textarea>
              </div>
              {/* End TextArea */}

              {/* Submit Button */}
              <div className="row justify-content-end">
                <div className="col-md-6 d-flex justify-content-end">
                  <button className={`${style.submitBtn} w-100 fw-bold`}>
                    Send Message
                  </button>
                </div>
              </div>
              {/* End Submit Button */}
            </form>
          </div>
        </div>
        <div className="container">
          <div className="row my-5">
            <div className="col-md-6 d-flex justify-content-between">
              {getContactData.offices.map((office) => (
                <div
                  className={`col-md-4 ${style.officeLocations} pb-2`}
                  key={office.id}
                >
                  <p className="primary-color fw-bold"> {office.city} </p>
                  <p className="text-muted">{office.address},</p>
                  <Link href={office.map_link} passHref target="_blank">
                    <a
                      target="_blank"
                      className="text-uppercase primary-color fw-bold"
                    >
                      View on maps
                    </a>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          className={`row d-flex text-center justify-content-center py-5 ${style.contactUsBorder}`}
        >
          {getContactData.emails.map((email) => (
            <div
              className={`col-md-2 my-1 ${style.contactUsInfo}`}
              key={email.id}
            >
              <p className="text-muted fw-bold"> {email.title} </p>
              <p className="primary-color fw-bold"> {email.email} </p>
            </div>
          ))}
        </div>
        <div
          className={`row d-flex text-center justify-content-center py-5 ${style.contactUsBorder}`}
        >
          {getContactData.hotlines.map((hot) => (
            <div
              className={`col-md-6 my-1 ${style.contactUsInfo}`}
              key={hot.id}
            >
              <p className="text-muted fw-bold"> {hot.title} </p>
              <p className="primary-color fw-bold"> {hot.hotline} </p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
    
  );
};

export default ContactUs;
export const getStaticProps = async () => {
  const getContactRes = await fetch(
    "https://backend-staging-marakez.bit68.com/en/api/contact-us/info"
  );
  const getContactData = await getContactRes.json();
  // SEO
  const seoRes = await fetch(
    "https://backend-staging-marakez.bit68.com/en/api/pages-seo/"
  );
  const seoData = await seoRes.json();

  return {
    props: {
      getContactData,
      seoData
    },
  };
};
