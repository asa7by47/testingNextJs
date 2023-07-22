import React, { useState } from "react";
import style from "./HomeVideo.module.css";
import Slider from "@mui/material/Slider";
import SideBarCheckbox from "../SideBarCheckbox/SideBarCheckbox";
import Image from "next/image";
import searchIcon from "../../public/searchIcon.png";
import { BsFacebook } from "react-icons/bs";
import CheckBox from "../CheckBox/CheckBox";
{
  /*  Search Properties In Large Screens */
}
const SearchProperties = ({
  ProjectSearchData,
  destinationData,
  unitTypesData,
}) => {
  // console.log(unitTypesData);
  // Destination state Value
  const [checkedValue, setCheckedValue] = useState([]);
  // End Destination Value
  // Unit state Value
  const [checkedUnit, setCheckedUnit] = useState([]);
  // End Unit Value
  // Projects state Value
  const [checkedProjects, setCheckedProjects] = useState([]);
  // End Projects Value

  const getDestinationValue = (e) => {
    // to get the checked value
    const { value, checked } = e.target;

    if (checked) {
      setCheckedValue([...checkedValue, value]);
    } else {
      setCheckedValue(checkedValue.filter((item) => item !== value));
    }
  };
  const getUnitValue = (e) => {
    // to get the checked value
    const { value, checked } = e.target;

    if (checked) {
      setCheckedUnit([...checkedUnit, value]);
    } else {
      setCheckedUnit(checkedUnit.filter((item) => item !== value));
    }
  };
  const getProjectsValue = (e) => {
    // to get the checked value
    const { value, checked } = e.target;

    if (checked) {
      setCheckedProjects([...checkedProjects, value]);
    } else {
      setCheckedProjects(checkedProjects.filter((item) => item !== value));
    }
  };

  const [handleSearchProperties, setHandleSearchProperties] = useState({
    destination: false,
    unit: false,
    projects: false,
    priceRange: false,
  });
  const handleSearchPropertiesClick = (searchProperty) => {
    setHandleSearchProperties({
      destination: false,
      unit: false,
      projects: false,
      priceRange: false,
      [searchProperty]: !handleSearchProperties[searchProperty],
    });
  };
  const [min, setMin] = useState(1000000);
  const [max, setMax] = useState(100000000);
  const [value, setValue] = useState([1000000, 100000000]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const getUser = (e) => {
    // getting the input Value from e.target.value
    let inputValue = e.target.value;
    setValue((value) => [inputValue, "20000000"]);
  };
  const getUserMax = (e) => {
    // getting the input Value from e.target.value
    let inputValue = e.target.value;
    setValue((value) => ["2000000", inputValue]);
  };
  return (
    <>
      <div
        className={`bg-white rounded-4 py-3  ${style.search} d-none d-lg-block`}
      >
        <div className="container-fluid py-3">
          <div className="row ">
            <div className="col-md-10    p-0 m-0">
              <div className="d-flex  h-100 p-0 m-0 w-100 align-items-center">
                <div
                  className={`col-3 w-auto justify-content-center align-items-center px-5 d-flex`}
                >
                  <div className="text-center d-flex flex-column gap-2">
                    <h6
                      className={`colorBlue fs-5 lh-1 ${style.pointer}`}
                      onClick={() => {
                        handleSearchPropertiesClick("destination");
                      }}
                    >
                      Destination
                    </h6>

                    {checkedValue.length === 0 ? (
                      <span>Any</span>
                    ) : (
                      <>
                        {checkedValue.length > 1
                          ? checkedValue.map((item, idx) => (
                              <span key={idx}>
                                {" "}
                                {idx == 0 ? item : "/" + item}
                              </span>
                            ))
                          : checkedValue.map((item, key) => (
                              <span key={key}>{item}</span>
                            ))}
                      </>
                    )}
                  </div>
                  <span className={`${style.coloum_borderEnd} d-flex`}></span>
                </div>
                <div
                  className={`col-3 d-flex justify-content-center align-items-center`}
                >
                  <div className="text-center d-flex flex-column gap-2">
                    <h6
                      className={`colorBlue fs-5 lh-1 ${style.pointer}`}
                      onClick={() => {
                        handleSearchPropertiesClick("unit");
                      }}
                    >
                      Type of Unit
                    </h6>

                    {checkedUnit.length === 0 ? (
                      <span>Any</span>
                    ) : (
                      <>
                        {checkedUnit.length > 1
                          ? checkedUnit.map((omar, idx) => (
                              <span key={idx}>
                                {" "}
                                {idx == 0 ? omar : "/" + omar}
                              </span>
                            ))
                          : checkedUnit.map((omar, key) => (
                              <span key={key}>{omar}</span>
                            ))}
                      </>
                    )}
                  </div>
                  <span className={`${style.coloum_borderEnd}`}></span>
                </div>
                <div
                  className={`col-3  d-flex justify-content-center align-items-center`}
                >
                  <div className="text-center d-flex flex-column gap-2">
                    <h6
                      className={`colorBlue fs-5 lh-1 ${style.pointer}`}
                      onClick={() => {
                        handleSearchPropertiesClick("projects");
                      }}
                    >
                      Projects
                    </h6>
                    {checkedProjects.length === 0 ? (
                      <span>Any</span>
                    ) : (
                      <>
                        {checkedProjects.length > 1
                          ? checkedProjects.map((omar, idx) => (
                              <span key={idx}>
                                {" "}
                                {idx == 0 ? omar : "/" + omar}
                              </span>
                            ))
                          : checkedProjects.map((omar, key) => (
                              <span key={key}>{omar}</span>
                            ))}
                      </>
                    )}
                  </div>
                  <span className={`${style.coloum_borderEnd}`}></span>
                </div>
                <div
                  className={`col-3 d-flex justify-content-center align-items-center`}
                >
                  <div className="text-center d-flex flex-column gap-2">
                    <h6
                      className={`colorBlue fs-5 lh-1 ${style.pointer}`}
                      onClick={() => {
                        handleSearchPropertiesClick("priceRange");
                      }}
                    >
                      Price Range
                    </h6>
                    <div className={`${style.numberSize}`}>
                      {`${value[0]}  to 
                          ${value[1]}`}
                    </div>
                  </div>
                  <span className={`${style.coloum_borderEnd}`}></span>
                </div>
              </div>
            </div>
            <div className="col-md-2 p-0 m-0">
              <div className=" text-end d-flex justify-content-center align-items-center ">
                <button
                  className={`rounded-3 border-0 ${style.btnSearch} d-flex gap-2 fw-bold justify-content-center align-items-center`}
                >
                  <Image
                    src={searchIcon}
                    alt="searchIcon"
                    className=""
                    width={24}
                    height={24}
                  />
                  Search Properties
                </button>
                <button
                  className={`rounded-3 border-0 d-none mob-show `}
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasExample"
                  aria-controls="offcanvasExample"
                >
                  <BsFacebook className="me-3" /> Search Properties
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className={`${style.bgGrey} rounded`}>
          {handleSearchProperties.unit && (
            <>
              <div className="container py-2">
                <div className="row">
                  {unitTypesData.map((unit) => (
                    <div className="col-md-4" key={unit.id}>
                      <CheckBox title={unit.name} click={getUnitValue} />
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
          {handleSearchProperties.destination && (
            <>
              <div className="container py-2 ">
                <div className="row">
                  {destinationData.results.map((destination) => (
                    <div className="col-md-4" key={destination.id}>
                      <CheckBox
                        title={destination.title}
                        click={getDestinationValue}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
          {handleSearchProperties.projects && (
            <>
              <div className="container py-3">
                <div className="row ">
                  {ProjectSearchData.map((project) => (
                    <div className="col-md-3" key={project.id}>
                      <CheckBox
                        title={project.title}
                        click={getProjectsValue}
                      />
                    </div>
                  ))}

                  {/* <div className="col-md-4">
                    <CheckBox
                      title="district-5 work"
                      click={getProjectsValue}
                    />
                  </div>
                  <div className="col-md-4">
                    <CheckBox title="Aeon" click={getProjectsValue} />
                  </div> */}
                </div>
              </div>
            </>
          )}
          {handleSearchProperties.priceRange && (
            <>
              <div className="py-2 pb-3">
                <Slider
                  value={value}
                  onChange={handleChange}
                  min={min}
                  max={max}
                  valueLabelDisplay="auto"
                  className={` ${style.rangeWidth} ${style.colorBlue} ms-3`}
                />
                <div className="d-flex justify-content-between px-3">
                  <div
                    className={`min d-flex flex-row  rounded px-1 ${style.input__ContainerBorder}`}
                  >
                    <input
                      type="text"
                      className={`rounded  border-0 ${style.price}`}
                      id="min"
                      value={value[0].toLocaleString()}
                      onChange={getUser}
                    />
                    <div className={` ${style.bord} p-1 `}>EGP</div>
                  </div>

                  <div
                    className={`min d-flex flex-row  rounded px-1 ${style.input__ContainerBorder} me-1`}
                  >
                    <input
                      type="text"
                      className={`rounded  border-0 ${style.price}`}
                      id="max"
                      onChange={getUserMax}
                      value={value[1].toLocaleString()}
                    />
                    <div className={` ${style.bord} p-1 `}>EGP</div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};
{
  /* End Search Properties In Large Screens */
}

export const SearchPropertiesInMobileScreens = ({
  destinationData,
  unitTypesData,
  ProjectSearchData,
}) => {
  const [min, setMin] = useState(1000000);
  const [max, setMax] = useState(100000000);
  const [value, setValue] = useState([1000000, 100000000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const getUser = (e) => {
    // getting the input Value from e.target.value
    let inputValue = e.target.value;
    setValue((value) => [inputValue, "20000000"]);
  };
  const getUserMax = (e) => {
    // getting the input Value from e.target.value
    let inputValue = e.target.value;
    setValue((value) => ["2000000", inputValue]);
  };
  console.log(ProjectSearchData);
  return (
    <>
      {/* mop */}
      <div className={`text-center mt-2 d-lg-none`}>
        <button
          className={`rounded-3 border-0 w-75 ${style.searchPropertiesButton} d-flex justify-content-center align-items-center gap-2 fs-3 py-3`}
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasExample"
          aria-controls="offcanvasExample"
        >
          <Image
            src={searchIcon}
            alt="searchIcon"
            className={` `}
            width={30}
            height={30}
          />
          search properties
        </button>
      </div>
      <div
        className={`offcanvas offcanvas-start ${style.bgColor__Canvas} ${style.canvas__width} overflow-x-hidden`}
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header"></div>

        <div
          className={`d-flex w-100  py-5 px-3 flex-column justify-content-start overflow-auto `}
        >
          <div className="side-one  d-flex flex-column   m-0 p-0  ">
            <div className={`${style.colorBlue} h6 p-0 m-0 fw-bold`}>
              Destination
            </div>
            <ul className="p-0 m-0">
              {destinationData.results.map((destination) => (
                <div key={destination.id}>
                  <SideBarCheckbox
                    title={destination.title}
                    sideBarFontSize={style.sideBarFontSize}
                    addingMarginNegative={style.addingMarginNegative}
                  />
                </div>
              ))}
            </ul>
          </div>
          {/* <hr className={`${style.margiin}`} /> */}
          <span className={`${style.line} my-3`}></span>
          <div className={`side-two  d-flex flex-column  `}>
            <div className={`${style.colorBlue} h6 p-0 m-0 fw-bold`}>
              Type of Unit
            </div>
            <ul className="p-0 m-0">
              {unitTypesData.map((unit) => (
                <div key={unit.id}>
                  <SideBarCheckbox
                    title={unit.name}
                    sideBarFontSize={style.sideBarFontSize}
                    addingMarginNegative={style.addingMarginNegative}
                  />
                </div>
              ))}
            </ul>
          </div>
          <span className={`${style.line} my-3`}></span>
          <div className={`side-two  d-flex flex-column `}>
            <div className={`${style.colorBlue} h6 p-0 m-0 fw-bold`}>
              Projects
            </div>
            <ul className="p-0 m-0">
              {ProjectSearchData.map((project) => (
                <div key={project.id}>
                  <SideBarCheckbox
                    title={project.title}
                    sideBarFontSize={style.sideBarFontSize}
                    addingMarginNegative={style.addingMarginNegative}
                  />
                </div>
              ))}
            </ul>
          </div>
          <span className={`${style.line} my-3`}></span>
          <div className={`side-four `}>
            <h6 className={`${style.colorBlue} h6 p-0 m-0 fw-bold`}>
              Type Of Unit
            </h6>

            <Slider
              value={value}
              onChange={handleChange}
              min={min}
              max={max}
              valueLabelDisplay="auto"
              className={`${style.colorBlue} ${style.rangSiz__mobile}`}
            />

            <div className={`d-flex ${style.inputs__container} gap-2`}>
              <div
                className={` d-flex  rounded ${style.input__ContainerBorder} `}
              >
                <input
                  type="text"
                  className={`rounded  border-0 ${style.price}`}
                  id="min"
                  value={value[0].toLocaleString()}
                  onChange={getUser}
                />
                <div className={` ${style.bord} p-1 px-2 `}>EGP</div>
              </div>

              <div
                className={`d-flex  rounded ${style.input__ContainerBorder} `}
              >
                <input
                  type="text"
                  className={`rounded  border-0 ${style.price}`}
                  id="max"
                  onChange={getUserMax}
                  value={value[1].toLocaleString()}
                />
                <div className={` ${style.bord} p-1 px-2 `}>EGP</div>
              </div>
            </div>
          </div>
          <button
            className={`rounded-3 border-0 ${style.btnSearch} ${style.btnSearch__mobile} d-flex gap-2  justify-content-center align-items-center`}
          >
            <Image
              src={searchIcon}
              alt="searchIcon"
              className=""
              width={24}
              height={24}
            />
            Search Properties
          </button>
        </div>
      </div>

      {/* End Mob */}
    </>
  );
};
const HomeVideo = ({
  destinationData,
  unitTypesData,
  homeVideoData,
  ProjectSearchData,
}) => {
  return (
    <div className="position-relative">
      {/* Video */}
      <div className={`${style.wrapper} `}>
        <div className={`${style.frame_container}`}>
          <iframe
            width="100%"
            height="100%"
            src={homeVideoData.video_link
              .replace("watch?v=", "embed/")
              .replace(
                "&ab_channel=MarakezEgypt",
                "?playlist=vGF22tNJoRI&loop=1&autoplay=1&mute=1&controls=0"
              )}
            title="YouTube video player"
            allowFullScreen="allowfullscreen"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
      {/* End Video */}
      {/* Search Properties In Large Screens */}
      <SearchProperties
        destinationData={destinationData}
        unitTypesData={unitTypesData}
        ProjectSearchData={ProjectSearchData}
      />
      {/* End Search Properties In Large Screens */}

      {/*   Search Properties In Mobile Screens */}
      <SearchPropertiesInMobileScreens
        destinationData={destinationData}
        unitTypesData={unitTypesData}
        ProjectSearchData={ProjectSearchData}
      />
      {/*  End Search Properties In Mobile Screens */}
    </div>
  );
};

export default HomeVideo;
