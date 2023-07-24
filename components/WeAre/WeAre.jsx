import React from 'react'
// import { Counter } from '../WhoWeAre/WhoWeAre';
import { useCountUp } from "react-use-count-up";

const Counter = ({ value }) => {
  return <span>{value}</span>;
};


const WeAre = ({title , value , plus,counterOn}) => {
  const countUpValue = useCountUp({
    start: 0,
    end: value,
    duration: 2000,
    started: counterOn
  });
  return (
    <div className=" mt-5">
    <div className="text-center text-white">
      <h2 className="fs-5 fst-italic">  {title} </h2>
      <div className='fs-1 d-flex justify-content-center'> 
      <div className={` ${plus} fs-2 p-0 m-0`}>+</div>
      <div className=' p-0 m-0'>  
      {<Counter value={countUpValue} /> }
      </div> 
      <div className='ms-2'> M</div>
       </div>
    </div>
  </div>
  )
}

export default WeAre