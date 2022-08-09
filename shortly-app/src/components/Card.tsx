import React from 'react'

function Card() {
  return (
    
    // <div className="position-relative " style={{ width: '18rem' , height:'18rem' , background:"white" }}>
    // <div className="position-absolute top-0 start-0 translate-middle" style={{ width: '1rem' , height:'1rem' , background:"gray", color:"whitesmoke"}}>4</div>
    // <div className="position-absolute top-0 start-50 translate-middle" style={{ width: '1rem' , height:'1rem' , background:"gray", color:"whitesmoke"}}>4</div>
    // <div className="position-absolute top-0 start-100 translate-middle">4</div>
    // <div className="position-absolute top-50 start-0 translate-middle">4</div>
    // <div className="position-absolute top-50 start-50 translate-middle">4</div>
    // <div className="position-absolute top-50 start-100 translate-middle">4</div>
    // <div className="position-absolute top-100 start-0 translate-middle">4</div>
    // <div className="position-absolute top-100 start-50 translate-middle">4</div>
    // <div className="position-absolute top-100 start-100 translate-middle">4</div>
    <div className="d-flex justify-content-center items-center">
    <div className="card position-relative" style={{width: "18rem"}}>
     <div className="card-body">
       <h5 className="card-title">Special title treatment</h5>
       <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
       <a href="#" className="btn btn-primary">Go somewhere</a>
     </div>
     <span className="badge bg-secondary position-absolute top-0 start-50 translate-middle rounded-circle"><i className="fa-brands fa-instagram display-6"></i></span>
     </div>
     <div className="bg-dark" style={{width: "1.5rem", height:".3rem"}}>
   </div>
   <div className="card position-relative" style={{width: "18rem"}}>
   <div className="card-body">
     <h5 className="card-title mt-4">Special title treatment</h5>
     <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
     <a href="#" className="btn btn-primary">Go somewhere</a>
   </div>
   <span className="badge bg-secondary position-absolute top-0 start-50 translate-middle rounded-circle"><i className="fa-brands fa-instagram display-6"></i></span>
   </div>
   
   </div>
   

  )
}

export default Card