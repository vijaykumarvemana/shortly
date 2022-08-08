import React from 'react'
import Card from './Card'

function CardSection() {
  return (
    <div className="bg-light ">
    <div className="container px-4 py-5" id="hanging-icons">
    <h2 className="pb-2 mt-5 text-center">Advanced Statistics</h2>
    <p className='text-center'>Track how your links are performing across the web with</p>
    <p className='text-center'>our advanced statistics dashboard.</p>
    <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
      <div className="col d-flex align-items-start">
        <div className="icon-square bg-dark text-dark d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
          <svg className="bi" width="1em" height="1em"></svg>
        </div>
        <div>
          <h2>Featured title</h2>
          <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
        </div>
      </div>
     
      <div className="col d-flex align-items-start bg-light">
    
        <div className="icon-square bg-dark text-dark d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
          <svg className="bi" width="1em" height="1em"></svg>
        </div>
        <div>
          <h2>Featured title</h2>
          <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
        </div>
      </div>
      <div className="col d-flex align-items-start">
        <div className="icon-square bg-dark text-dark d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
          <svg className="bi" width="1em" height="1em"></svg>
        </div>
        <div>
          <h2>Featured title</h2>
          <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
        </div>
      </div>
    </div>
  </div>
 
    </div>
  )
}

export default CardSection