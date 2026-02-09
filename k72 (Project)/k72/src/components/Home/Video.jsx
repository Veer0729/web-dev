import React from 'react'
import video1 from "./video1.mp4";

const video = () => {
  return (
    <div className='h-full w-full'>
        <video className='h-full w-full object-cover' autoPlay loop muted src= {video1}></video>
    </div>
  )
}

export default video