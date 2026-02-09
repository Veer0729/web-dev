import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomtext = () => {
  return (
    <div className='font-[font2] flex items-center justify-center gap-2 pb-2 text-white'>
      <div className='text-[6.5vw] border-2 hover:border-green-300 hover:text-green-300 leading-[7vw] border-white rounded-full px-5 pt-1 pb-0 uppercase'>
        <Link to="/work">Work</Link> 
      </div>
      <div className='text-[6.5vw] border-2 hover:border-green-300 hover:text-green-300 leading-[7vw] border-white rounded-full px-6 uppercase'>
        <Link to="/agency">Agency</Link>
      </div>
    </div>
  )
}

export default HomeBottomtext