import React from 'react'

const WeAre = ({title , number , plus}) => {
  return (
    <div className="col-md-3 mt-5">
    <div className="text-center text-white">
      <h2 className="fs-5 fst-italic">  {title} </h2>
      <div className='fs-1 d-flex justify-content-center'> 
      <div className={` ${plus} fs-2 p-0 m-0`}>+</div>
      <div className=' p-0 m-0'> {number} </div> 
      <div className='ms-2'> M</div>
       </div>
    </div>
  </div>
  )
}

export default WeAre