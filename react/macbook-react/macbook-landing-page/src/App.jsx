import React from 'react'
import { Canvas } from "@react-three/fiber"; 
import "./style.css";
import { Environment, OrbitControls, ScrollControls } from "@react-three/drei"; 
import Maccontainer from './Maccontainer';


const App = () => {
  return (
    <div className="w-full h-screen font-['Helvetica_Now_Diplay']">
      <div className='navbar line flex gap-10 pt-10 pb-3 absolute top-0 left-1/2 -translate-x-1/2'>
      {["iPhone", "iPad", "services", "ios", "mac", "earpods", "iPhone", "iPad", "services", "ios", "mac", "earpods"].map((e) => (
        <a href="" className='text-white font-[500] text-sm capitalize'>
          {e}
          </a>
      ))}
      </div>
      <div className="absolute flex flex-col items-center text-white top-40 left-1/2 -translate-x-1/2">
      <h3 className='masked text-7xl tracking-tighter font-[700]'>macbook pro.</h3>
      <h5>Oh so pro!</h5>
      <p className='text-center w-3/4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet accusamus eaque sit at.</p>
      </div>
      <Canvas camera={{fov: 12, position: [0, -10, 220]}}> 
        {/* controls the position and look of the model */}
        <Environment
          files={["https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/4k/studio_small_09_4k.hdr",     
          ]}
        />
        <ScrollControls pages={3}>
          <Maccontainer/>
        </ScrollControls>
      </Canvas>
    </div>
  )
}

export default App