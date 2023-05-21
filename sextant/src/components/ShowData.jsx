import { useEffect, useState } from "react";
import React from 'react'

const ShowData = ({url}) => {
   
        const [ipAddress, setIpAddress] = useState(null);
      
        useEffect(() => {
          fetch(url)
            .then(response => response.json())
            .then(data => setIpAddress(data.ip));
        }, [url]);
    
  return (
    <span className='showData'>
        {ipAddress}
        
    </span>
  )
}

export default ShowData