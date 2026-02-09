import React, {useRef} from 'react'
import {useGSAP} from "@gsap/react" 
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"

const agency = () => {

  const imagedivref = useRef(null)
  const imageref = useRef(null)

  const imageArray = [
    'https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg',
  ]

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(function(){
    gsap.to(imagedivref.current, {
      scrollTrigger:{
        trigger: imagedivref.current,
        start: "top 32.1%",
        end: "top -73%",
        pin: true,
        scrub: true,
        onUpdate:(elem)=>{
          let imageindex;

          if(elem.progress < 1){
            imageindex = Math.floor(elem.progress * imageArray.length)
          }else{
            imageindex = imageArray.length -1
          }

          imageref.current.src = imageArray[imageindex]
        }
      }
    })

  })

  return (
  <div>
  <div className='section1'>
    <div ref={imagedivref} className='absolute overflow-hidden h-[20vw] rounded-3xl w-[15vw] top-70 left-[30vw]'>
      <img ref={imageref} className='h-full w-full' src='https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7'></img>
    </div>
      <div className='relative font-[font2] mt-[61vh]'>
        <h1 className='text-[20vw] text-center uppercase leading-[16vw]'>SEVEN7Y <br/>TWO</h1>
      </div>
      <div className='relative pl-[40%]'>
        <p className='text-5xl font-[font2]'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; We’re inquisitive and open-minded, and we make sure creativity crowds out ego from every corner. A brand is a living thing, with values, a personality and a story. If we ignore that, we can achieve short-term success, but not influence that goes the distance. We bring that perspective to every brand story we help tell.</p>
      </div>
  </div>
    <div className='section2 h-screen'>

    </div>
  </div>  
  )
}
export default agency