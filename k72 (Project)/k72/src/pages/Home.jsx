import React from 'react'
import Video from "../components/Home/Video"
import HomeHerotext from "../components/Home/HomeHerotext"
import HomeBottomtext from "../components/Home/HomeBottomtext"

const Home = () => {
  return (
    <div>
      
        <div className='h-screen w-screen fixed'>
            <Video />
        </div>
        <div className='h-screen w-screen relative overflow-hidden flex flex-col justify-between'>
          <HomeHerotext />
          <HomeBottomtext />
        </div>
    </div>
  )
}

export default Home