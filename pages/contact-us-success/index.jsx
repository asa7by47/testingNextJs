import React from 'react'
import success from '../../public/success.jpg'
import green from '../../public/green.svg'
import Image from 'next/future/image'
const ContactUsSuccess = () => {
  return (
    <div className='container-fluid p-0 overflow-hidden mt-4'>
        <div className="row p-0 bg-success">
        
            <Image src={success} alt='success' className='w-100 ' style={{height:"30vh"}} />
            
        </div>
        <div className="row justify-content-center my-4">
            <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
            <Image src={green} alt='success' className='w-100 ' />
                <p className='primary-color fw-semibold mt-3'>THANK YOU FOR YOUR INTEREST IN MARAKEZ</p>
            </div>
        </div>
    </div>
  )
}

export default ContactUsSuccess