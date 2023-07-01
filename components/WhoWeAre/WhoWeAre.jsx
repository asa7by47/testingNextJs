import React, { useEffect, useState } from "react";
import style from "./WhoWeAre.module.css";
import WeAre from "../WeAre/WeAre";
import { useCountUp } from 'react-use-count-up';
import ScrollTrigger from "react-scroll-trigger";


const WhoWeAre = () => {
  const [counterOn, setCounterOn] = useState(false);
  const value = useCountUp({ start: 0, end: 7, duration: 2000,started:counterOn });
  const valueThree = useCountUp({ start: 0, end: 8, duration: 2000,started:counterOn });
  const valueTwo = useCountUp({ start: 0, end: 12, duration: 2000,started:counterOn });


  return (
    <>
      <section className={`p-5 ${style.bgImage}`}>
        <div className="text-center text-white">
          <h4 className="">WHO WE ARE </h4>
        </div>
        <ScrollTrigger onEnter={()=>{setCounterOn(true)}} onExit={()=>{setCounterOn(false)}}>
        <div className="container">
          <div className="row">
            <WeAre title="Land Area Of projects" plus={style.plus} value={value} />
            <WeAre title="BUE" plus={style.plus} value={valueTwo} />
            <WeAre title="Year Of experience" plus={style.plus} value={value} />
            <WeAre title="Projects Completed" plus={style.plus} value={valueThree} />
          </div>
        </div>
        </ScrollTrigger>
      </section>
    </>
  );
};

export default WhoWeAre;
