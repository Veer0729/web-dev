import React from 'react'
import { Canvas } from '@react-three/fiber';
import "./style.css"
import Cyl from './Cyl';
import { EffectComposer, Bloom } from '@react-three/postprocessing'


const App = () => {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas flat camera={{ fov: 2 }}>
        <ambientLight />
        
        <Cyl />
        
        <EffectComposer>
          <Bloom
            minimapBlur
            intensity={4.0} // The bloom intensity
            luminanceThreshold={0} // Luminance threshold. Raise this value to mask out darker elements in the scene
            luminanceSmoothing={0} // Smoothness of the luminance threshold. Range is [0, 1]
          />
        </EffectComposer>
      </Canvas>
      
      <div className='text-overlay'>
        <h1 className='hero-text'>Welcome to my portfolio</h1>
      </div>
    </div>
  );
};

export default App;
