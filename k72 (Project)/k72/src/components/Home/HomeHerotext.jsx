import React from 'react'
import Video from "./Video"

const HomeHerotext = () => {
  return (
    <div className='font-[font2] text-white'>
      <div className= "text-[9.5vw] flex items-center justify-center uppercase leading-[9vw]">The spark for</div>
      <div className= "text-[9.5vw] flex items-center justify-center uppercase leading-[9vw]">all<div className='h-[8vw] w-[16vw] rounded-full overflow-hidden'><Video/></div> things</div>
      <div className= "text-[9.5vw] flex items-center justify-center uppercase leading-[9vw]">creative</div>
    </div>
  )
}

export default HomeHerotext