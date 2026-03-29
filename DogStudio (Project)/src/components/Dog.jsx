import React from 'react'
import { useThree } from '@react-three/fiber'
import {OrbitControls} from "@react-three/drei"


const Dog = () => {

    useThree(({camera, scene, gl}) => {
    console.log(camera.position)
})
  return (
        <>
        <OrbitControls></OrbitControls>

        </>
  )
}

export default Dog