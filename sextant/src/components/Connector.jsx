import React, { useState, useEffect } from 'react'

const Connector = (props) => {
    const [latency, setLatency] = useState(null);

    useEffect(() => {
        const client = new WebSocket('ws://localhost:55455'); // Replace 'example.com' with your WebSocket URL
    
        client.onmessage = (message) => {
          setLatency(new Date().getTime() - message.data);
        };
    
        return () => {
          client.close(); // Clean up the WebSocket connection when the component is unmounted
        };
      }, []);
  return (
    <span className='connector'>
        {latency}
    </span>
  )
}

export default Connector