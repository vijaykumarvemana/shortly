import React from 'react'

function Footer() {
  return (
    <div className='bg-dark'>
    <div className='bg-success d-flex justify-content-center text-light'>
        <div className='d-flex flex-column justify-content-center items-center my-5'>
            <h1 className='mb-4'>Boost your links today</h1>
            <button type="button" className="btn btn-info text-light btn-lg m-auto fw-blod rounded-pill px-5">Get Started</button>
        </div>
    </div>
   
    <div className='container text-white'>
        <div className='d-flex justify-content-between '>
            <h1>shortly</h1>
            <div className='mt-3'>
                <h6>Features</h6>
                <div className='my-3'>
                    <p>Link Shortening</p>
                    <p>Branded Links</p>
                    <p>Analytics</p>
                </div>
            </div>
            <div  className='mt-3'>
                <h6>Features</h6>
                <div className='my-3'>
                    <p>Blog</p>
                    <p>Developer</p>
                    <p>Support</p>
                </div>
            </div>
            <div  className='mt-3'>
                <h6>Features</h6>
                <div className='my-3'>
                    <p>About</p>
                    <p>Our Team</p>
                    <p>Careers</p>
                    <p>Contact</p>
                </div>
            </div>
            <div  className='mt-3 justify-content-between display-6' >
                 <i className="fa-brands fa-square-facebook mx-3"></i>
                 <i className="fa-brands fa-twitter"></i>
                 <i className="fa-brands fa-pinterest mx-3"></i>
                 <i className="fa-brands fa-instagram"></i>
                
            </div>
        </div>
    </div>
    </div>
    
  )
}

export default Footer