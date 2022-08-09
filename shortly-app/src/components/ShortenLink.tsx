import React from 'react'

function ShortenLink() {
  return (
    <div className=' bg-white d-flex justify-content-between iteams-center text-dark py-3 '>
        <p className=' my-2 mx-3 fw-blod'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, rerum.</p>
        <div className='d-flex justify-content-between'>
            <p className='short-link my-2 mx-3 fw-blod' >Lorem ipsum dolor sit amet.</p>
            <button className=' btn btn-info text-light  px-3 mx-3'>Copy</button>
        </div>
    </div>
  )
}

export default ShortenLink 