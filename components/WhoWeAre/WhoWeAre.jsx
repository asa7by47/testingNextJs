import React, { useState } from "react";
// import WeAre from '../WeAre/WeAre';
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import style from "./WhoWeAre.module.css";
const WhoWeAre = () => {
  const [counterOn, setCounterOn] = useState(false);
  const conditionOne = counterOn && (
    <CountUp start={0} end={25} delay={0} duration={2} />
  );
  const conditionTwo = counterOn && (
    <CountUp start={0} end={12} delay={0} duration={2} />
  );
  const conditionThree = counterOn && (
    <CountUp start={0} end={7} delay={0} duration={3} />
  );
  const conditionFour = counterOn && (
    <CountUp start={0} end={8} delay={0} duration={3} />
  );
  return (
    <>
      <section className={`p-5 ${style.bgImage}`}>
        <div className="text-center text-white">
          <h4 className="">WHO WE ARE </h4>
        </div>
        <div className="container">
          <ScrollTrigger
            onEnter={() => setCounterOn(true)}
            onExit={() => setCounterOn(false)}
          >
            <div className="row">
              <WeAre
                title="Land Area Of projects"
                number={conditionOne}
                plus={style.plus}
              />

              <WeAre title="BUE" number={conditionTwo} plus={style.plus} />

              <WeAre
                title="Year Of experience"
                number={conditionThree}
                plus={style.plus}
              />
              <WeAre
                title="Projects Completed"
                number={conditionFour}
                plus={style.plus}
              />
            </div>
          </ScrollTrigger>
        </div>
      </section>
    </>
  );
};

export default WhoWeAre;
