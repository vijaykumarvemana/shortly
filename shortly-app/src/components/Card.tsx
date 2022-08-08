import React from 'react'

function Card() {
  return (
    
    <div className="position-relative " style={{ width: '18rem' , height:'18rem' , background:"white" }}>
    <div className="position-absolute top-0 start-0 translate-middle" style={{ width: '1rem' , height:'1rem' , background:"gray", color:"whitesmoke"}}>4</div>
    <div className="position-absolute top-0 start-50 translate-middle" style={{ width: '1rem' , height:'1rem' , background:"gray", color:"whitesmoke"}}>4</div>
    <div className="position-absolute top-0 start-100 translate-middle">4</div>
    <div className="position-absolute top-50 start-0 translate-middle">4</div>
    <div className="position-absolute top-50 start-50 translate-middle">4</div>
    <div className="position-absolute top-50 start-100 translate-middle">4</div>
    <div className="position-absolute top-100 start-0 translate-middle">4</div>
    <div className="position-absolute top-100 start-50 translate-middle">4</div>
    <div className="position-absolute top-100 start-100 translate-middle">4</div>
  </div>
  )
}

export default Card