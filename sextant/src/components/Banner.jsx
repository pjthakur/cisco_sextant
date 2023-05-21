import React from 'react'

const Banner = (props) => {
  return (
    <div className='banner'>
     <h1>{props.bannerText}</h1>
    </div>
  )
}

export default Banner