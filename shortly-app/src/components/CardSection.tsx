import React from 'react'
import Card from './Card'
import ShortenLink from './ShortenLink'
import StatisticsCards from './StatisticsCards'

function CardSection() {
  return (
    <>
  
    <div className="bg-light ">
    <div className="container py-5 g-0">
    <div className='py-5'>
      {
            true ? <ShortenLink /> : null
      }
    
    <h2 className="pb-2 mt-5 text-center">Advanced Statistics</h2>
    <p className='text-center'>Track how your links are performing across the web with</p>
    <p className='text-center'>our advanced statistics dashboard.</p>
    </div>
    <StatisticsCards />
    </div>
  </div>
  </>
 
   
  )
}

export default CardSection