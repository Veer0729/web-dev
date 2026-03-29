import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomtext = () => {
  return (
    <div className='font-[font2] flex items-center justify-center gap-4 pb-4 text-white'>
      <div className='text-[6vw] border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] transition-colors duration-300 leading-none border-white rounded-full px-8 py-3 uppercase cursor-pointer'>
        <Link to="/work">Work</Link>
      </div>
      <div className='text-[6vw] border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] transition-colors duration-300 leading-none border-white rounded-full px-8 py-3 uppercase cursor-pointer'>
        <Link to="/agency">Agency</Link>
      </div>
    </div>
  )
}

export default HomeBottomtext