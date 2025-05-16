"use client"
import React, { useEffect, useState } from 'react'

const Clock = () => {
    const [time, setTime] = useState('');

    useEffect(() => {
      const updateClock = () => {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        setTime(`${hours}:${minutes}`);
      };
  
      updateClock(); // Initial call to set the time immediately
      const intervalId = setInterval(updateClock, 1000); // Update every second
  
      return () => clearInterval(intervalId); // Clear interval on component unmount
    }, []);
  
    return (
        <>
            <div className='font-mono text-base-100'>{time}</div>
        </>
    )
}

export default Clock