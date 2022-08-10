import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { TStore } from '../store';
import Card from './Card'
import ShortenLink from './ShortenLink'
import StatisticsCards from './StatisticsCards'

function CardSection() {

  const shortenLinks = useSelector((state: TStore)=> state.linksReducer.shortlinks);
  console.log(shortenLinks);
  return (
    <>
  
    <div className="bg-light ">
    <div className="container  py-5 g-0">
    <div className='py-5'>
      {
            shortenLinks ? <ShortenLink  /> : null
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