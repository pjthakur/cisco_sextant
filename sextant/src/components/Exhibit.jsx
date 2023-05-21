import React from 'react'

const Exhibit = (props) => {
  return (
    <div className='exhibit'>
        <h2 className='exhibit-heading'>{props.heading}</h2>
        <div className='exhibit-cont'>
        {props.children}
        </div>
    </div>
  )
}

export default Exhibit