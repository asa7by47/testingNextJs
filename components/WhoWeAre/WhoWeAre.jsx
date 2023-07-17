import React, { useEffect, useState } from "react";
import style from "./WhoWeAre.module.css";
import WeAre from "../WeAre/WeAre";
import { useCountUp } from "react-use-count-up";
import ScrollTrigger from "react-scroll-trigger";

const WhoWeAre = ({ whoWeAreData }) => {
  const [counterOn, setCounterOn] = useState(false);
  const [endNumber, setEndNumber] = useState([]);

  useEffect(() => {
    const numbers = whoWeAreData.map((data) => data.value);
    setEndNumber(numbers);
  }, [whoWeAreData]);

  return (
    <>
      <section className={`p-5 ${style.bgImage}`}>
        <div className="text-center text-white">
          <h4 className="">WHO WE ARE </h4>
        </div>
        <ScrollTrigger
          onEnter={() => {
            setCounterOn(true);
          }}
          onExit={() => {
            setCounterOn(false);
          }}
        >
          <div className="container">
            <div className="row">
              {whoWeAreData.map((data, index) => (
               <div className="col-md-3" key={data.id}>
                 <div >
                  <WeAre
                    title={data.title}
                    plus={style.plus}
                    value={useCountUp({
                      start: 0,
                      end: endNumber[index],
                      duration: 2000,
                      started: counterOn
                    })}
                  />
                </div>
               </div>
              ))}
            </div>
          </div>
        </ScrollTrigger>
      </section>
    </>
  );
};

export default WhoWeAre;