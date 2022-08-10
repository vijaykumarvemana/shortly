import React, { SyntheticEvent, useState } from 'react'
import { useSelector } from 'react-redux';
import { TStore } from '../store';

function ShortenLink() {
  const shortenLinks = useSelector((state: TStore)=> state.linksReducer.shortlinks);
  const link = shortenLinks.full_short_link;

  const [ isCopied, setIsCopied ] = useState(false);
  const handleCopy = (e:any) => {
    setIsCopied(true);
    e.clipboardData.setData("Text", link)
    setTimeout(() => {
      setIsCopied(false);
    } , 5000);
  }



  return (
    <div className=' bg-white d-flex justify-content-between iteams-center text-dark py-3 '>
        <p className=' my-2 mx-3 fw-blod'>{shortenLinks.original_link}</p>
        <div className='d-flex justify-content-between'>
            <p className='short-link my-2 mx-3 fw-blod' >{link}</p>
            <button className=' btn btn-info text-light px-3 mx-3' onClick={handleCopy}>{isCopied? "Copied!": "Copy"}</button>
        </div>
    </div>
  )
}

export default ShortenLink 