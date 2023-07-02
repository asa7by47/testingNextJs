import Image from 'next/image'
import React from 'react'
import logo from '../../public/footer.svg'
import style from './EndFooter.module.css'
const EndFooter = () => {
  return (
    <footer className='border'>
    <div className={`w-100 d-flex justify-content-between align-items-center container-fluid  ${style.removePad}`}>
      <div>
          <p className={` text-muted ${style.mobFont} `}>COPYRIGHT 2022. MARAKEZ</p>
      </div>
      <div>
          <Image src={logo} width={"100"} height={100} alt="logo" className={`w-75 ${style.bgMop} `} />
      </div>
      <div className='d-flex flex-column footer-fs' >
          <p className={`text-muted m-0 ${style.sizeAndWeight}`}>FOLLOW US ON</p>
          <p className={`colorBlue m-0  text-end ${style.sizeAndWeight} ${style.colorBlue}`}>FACEBOOK</p>
          <p className={`colorBlue m-0  text-end ${style.sizeAndWeight} ${style.colorBlue}`}>YOUTUBE</p>
          <p className={`colorBlue m-0  text-end ${style.sizeAndWeight} ${style.colorBlue}`}>INSTAGRAM</p>
      </div>
  </div>
</footer>
  )
}

export default EndFooter